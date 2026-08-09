// Article bylines.
//
// Defined once so a name is spelled the same way in the visible byline and in
// the Article schema, and so changing it is one edit rather than one per file.
// The `author` key in an article's front matter refers to an entry here.
//
// The names match the team section on the About page on purpose: search engines
// tie people to organisations across pages, and two spellings of one person
// weaken that. If the English site should say "Peter" and "Chris", the About
// page has to change with it — not just this file.

export type AuthorId = 'piotr' | 'krzysztof';

export type Author = {
  name: string;
  /** Where the person is described on this site, for the Article schema. */
  profilePath: string;
};

export const authors: Record<AuthorId, Author> = {
  piotr: { name: 'Piotr Nawrocki', profilePath: '/about' },
  krzysztof: { name: 'Krzysztof Świętek', profilePath: '/about' },
};

export function getAuthor(id: string): Author {
  const author = authors[id as AuthorId];
  if (!author) {
    throw new Error(
      `Unknown article author "${id}". Add them to src/lib/authors.ts or fix the front matter.`,
    );
  }
  return author;
}
