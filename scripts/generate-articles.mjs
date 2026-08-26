// Build-time bundler for the Poradnik / Guides articles.
//
// Same shape as generate-legal.mjs: Markdown in src/content/articles/<locale>/
// is the source of truth, and this inlines it into a TypeScript module because
// the Cloudflare Workers runtime has no filesystem.
//
// Two things differ from the legal documents.
//
// 1. An article does NOT have to exist in every locale. Pieces written for the
//    Polish market ship in both languages; pieces for other markets ship in
//    English only. So a missing translation is not an error here — it is a
//    fact the rest of the site has to respect, which is why each article
//    records the locales it actually exists in.
//
// 2. The filename is the article's identity across languages, and the URL slug
//    lives in the front matter. src/content/articles/pl/cyprus-tax.md and
//    en/cyprus-tax.md are the same article; their slugs differ so each locale
//    gets an address in its own language.
//
// Run: npm run generate:articles (also runs automatically before `next build`).

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'src/content/articles');
const locales = ['pl', 'en', 'es', 'de'];

const REQUIRED = ['title', 'description', 'slug', 'published', 'author'];
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// A deliberately small front-matter reader: `key: value` pairs between two
// `---` fences, values taken literally to the end of the line. Enough for the
// fields above, and it keeps a YAML parser out of the dependency tree.
function parseFrontMatter(raw, where) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${where}: missing front matter (a --- fenced block at the top of the file)`);
  }
  const [, block, body] = match;
  const data = {};
  for (const line of block.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const separator = line.indexOf(':');
    if (separator === -1) {
      throw new Error(`${where}: front-matter line is not "key: value" — ${line}`);
    }
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: body.trim() };
}

function readLocale(locale) {
  const dir = join(contentDir, locale);
  if (!existsSync(dir)) return {};
  const entries = {};
  for (const file of readdirSync(dir).filter((name) => name.endsWith('.md')).sort()) {
    const id = file.replace(/\.md$/, '');
    const where = `src/content/articles/${locale}/${file}`;
    const { data, body } = parseFrontMatter(readFileSync(join(dir, file), 'utf8'), where);

    // Checked before anything else so an unfinished draft cannot break the
    // build for everyone. A draft ships no route, no sitemap entry and no
    // listing, so nothing below applies to it — the rules bite when the flag
    // comes off, which is when the text is being published and read anyway.
    if (data.draft === 'true') continue;

    for (const field of REQUIRED) {
      if (!data[field]) throw new Error(`${where}: missing required front-matter field "${field}"`);
    }
    if (!SLUG_PATTERN.test(data.slug)) {
      throw new Error(`${where}: slug "${data.slug}" must be lowercase words joined by hyphens`);
    }
    for (const field of ['published', 'updated']) {
      if (data[field] && !DATE_PATTERN.test(data[field])) {
        throw new Error(`${where}: ${field} "${data[field]}" must be YYYY-MM-DD`);
      }
    }
    // The page renders the front-matter title as the H1, so a top-level
    // heading in the body would give the article two of them.
    if (/^#\s/m.test(body)) {
      throw new Error(
        `${where}: body starts a top-level "# " heading. The title front matter is the H1 — start sections at "## ".`,
      );
    }
    entries[id] = {
      id,
      slug: data.slug,
      title: data.title,
      description: data.description,
      published: data.published,
      updated: data.updated || data.published,
      author: data.author,
      body,
    };
  }
  return entries;
}

const byLocale = {};
for (const locale of locales) byLocale[locale] = readLocale(locale);

// A slug has to be unique within its locale, or two articles would claim one URL.
for (const locale of locales) {
  const seen = new Map();
  for (const article of Object.values(byLocale[locale])) {
    if (seen.has(article.slug)) {
      throw new Error(
        `Duplicate ${locale} slug "${article.slug}" in ${seen.get(article.slug)}.md and ${article.id}.md`,
      );
    }
    seen.set(article.slug, article.id);
  }
}

// The index each page reads: one entry per article, newest first, carrying the
// locales it exists in so hreflang can advertise those and only those.
const ids = [...new Set(locales.flatMap((locale) => Object.keys(byLocale[locale])))];
const index = ids
  .map((id) => {
    const available = locales.filter((locale) => byLocale[locale][id]);
    const first = byLocale[available[0]][id];
    return { id, locales: available, published: first.published };
  })
  .sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0));

const outDir = join(root, 'src/generated');
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, 'articles.ts'),
  '// AUTO-GENERATED by scripts/generate-articles.mjs — do not edit by hand.\n' +
    '// Edit the Markdown in src/content/articles/ and regenerate with:\n' +
    '//   npm run generate:articles\n\n' +
    "export type ArticleLocale = 'pl' | 'en' | 'es' | 'de';\n\n" +
    'export type Article = {\n' +
    '  id: string;\n' +
    '  slug: string;\n' +
    '  title: string;\n' +
    '  description: string;\n' +
    '  published: string;\n' +
    '  updated: string;\n' +
    '  author: string;\n' +
    '  body: string;\n' +
    '};\n\n' +
    '/** Articles by locale, keyed by id. A locale simply lacks the ones not written for it. */\n' +
    `export const articlesByLocale: Record<ArticleLocale, Record<string, Article>> = ${JSON.stringify(
      byLocale,
      null,
      2,
    )};\n\n` +
    '/** Newest first, with the locales each article actually exists in. */\n' +
    `export const articleIndex: Array<{ id: string; locales: ArticleLocale[]; published: string }> = ${JSON.stringify(
      index,
      null,
      2,
    )};\n`,
);

const counts = locales.map((locale) => `${Object.keys(byLocale[locale]).length} ${locale}`);
console.log(`Bundled ${index.length} articles (${counts.join(', ')})`);
