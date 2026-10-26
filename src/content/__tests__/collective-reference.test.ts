import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';
import { propertyCards } from '../collective-properties';

const reference =
  'design-reference/Vesteri_Collective_V10_7_Codex_Handoff/preview';
const decode = (text: string) =>
  text
    .replaceAll('&amp;', '&')
    .replaceAll('&#39;', "'")
    .replaceAll('&quot;', '"')
    .replaceAll('&nbsp;', '\u00a0');
const normalize = (text: string) => decode(text).replace(/\s+/g, ' ').trim();
const roles = [
  { id: 'buyers', en: 'en/index.html', pl: 'pl/index.html', count: 8 },
  {
    id: 'sellers',
    en: 'en/sellers/index.html',
    pl: 'pl/sprzedajacy/index.html',
    count: 7,
  },
  {
    id: 'agents',
    en: 'en/agents/index.html',
    pl: 'pl/dla-agentow/index.html',
    count: 12,
  },
] as const;
const SEO_TITLES = {
  pl: {
    buyers: 'Vesteri Collective | Sieć agentów nieruchomości – Polska i świat',
    sellers: 'Sprzedaż nieruchomości z agentem sieci | Vesteri Collective',
    agents: 'Sieć agentów nieruchomości – dołącz do Vesteri Collective',
  },
  en: {
    buyers: 'Vesteri Collective | Real Estate Agent Network, Local & Abroad',
    sellers: 'Sell Your Property with a Network Agent | Vesteri Collective',
    agents: 'Real Estate Agent Network – Join Vesteri Collective',
  },
} as const;
const flatten = (value: unknown): string[] =>
  typeof value === 'string'
    ? [value]
    : value && typeof value === 'object'
      ? Object.values(value).flatMap(flatten)
      : [];
describe('V10.7 authoritative bilingual content and routes', () => {
  for (const [locale, messages] of Object.entries({ en, pl }) as [
    'en' | 'pl',
    typeof en,
  ][]) {
    for (const role of roles) {
      it(`preserves all ${role.count} FAQ entries and editorial text for ${locale}/${role.id}`, () => {
        const html = readFileSync(join(reference, role[locale]), 'utf8');
        const content = messages.marketing[role.id];
        const values = flatten(content).map(normalize);
        const questions = [
          ...html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g),
        ].map((m) => normalize(m[1]));
        expect(questions).toHaveLength(role.count);
        for (const question of questions) expect(values).toContain(question);
        const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)![1];
        for (const match of main.matchAll(/>([^<>]+)</g)) {
          const text = normalize(match[1]);
          // The owner replaced the original uppercase eyebrow with a two-line title.
          if (
            role.id === 'buyers' &&
            text ===
              (locale === 'pl'
                ? 'JEDNA SIEĆ. WIĘKSZE MOŻLIWOŚCI.'
                : 'ONE NETWORK. MORE POSSIBILITIES.')
          ) {
            expect(messages.marketing.buyers.introTitle).toEqual(
              locale === 'pl'
                ? { first: 'Jedna sieć.', second: 'Większe możliwości.' }
                : { first: 'One network.', second: 'More possibilities.' },
            );
          } else if (
            role.id === 'buyers' &&
            text ===
              (locale === 'pl'
                ? 'VESTERI COLLECTIVE · NIERUCHOMOŚCI W POLSCE I ZA GRANICĄ'
                : 'VESTERI COLLECTIVE · LOCAL & INTERNATIONAL PROPERTY')
          ) {
            // SEO v3: the owner approved a descriptive hero eyebrow.
            expect(messages.marketing.buyers.top02).toBe(
              locale === 'pl'
                ? 'Sieć agentów nieruchomości w Polsce i za granicą'
                : 'Real estate agent network, locally and abroad',
            );
          } else if (text && !text.startsWith('<!--'))
            expect(values).toContain(text);
        }
        // SEO v3: titles deliberately diverge from the V10.7 reference.
        expect(content.meta.title).toBe(SEO_TITLES[locale][role.id]);
      });
    }
  }
  it('keeps illustrative photographs local and individual listing links pending', () => {
    expect(propertyCards).toHaveLength(3);
    for (const card of propertyCards) {
      expect(existsSync(join('public', card.image))).toBe(true);
      if (card.listingUrl)
        expect(new URL(card.listingUrl).origin).toBe(
          'https://vesteri.estalara.com',
        );
    }
  });
});
