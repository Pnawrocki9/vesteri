import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';
import { propertyCards } from '../collective-properties';
import { howItWorks } from '../how-it-works';

const audiences = ['buyers', 'sellers', 'agents'] as const;
const components = {
  buyers: 'BuyersContent',
  sellers: 'SellersContent',
  agents: 'AgentsContent',
};
const faqLast = { buyers: 17, sellers: 15, agents: 25 };
const textValues = (value: unknown): string[] =>
  typeof value === 'string'
    ? [value]
    : value && typeof value === 'object'
      ? Object.values(value).flatMap(textValues)
      : [];
// The owner replaced V10.7 editorial copy with the Market/community model.
// Keep bilingual coverage and rendered FAQ complete rather than locking old claims.
describe('Collective bilingual marketing content', () => {
  for (const locale of ['pl', 'en'] as const) {
    for (const audience of audiences) {
      it(`covers rendered content and FAQ for ${locale}/${audience}`, () => {
        const content = { en, pl }[locale].marketing[
          audience
        ] as unknown as Record<string, unknown>;
        const component = readFileSync(
          join('src/components/marketing', `${components[audience]}.tsx`),
          'utf8',
        );
        const keys = [...component.matchAll(/\bt\('([^']+)'\)/g)].map(
          (match) => match[1],
        );
        for (const key of keys) {
          const value = key
            .split('.')
            .reduce<unknown>(
              (v, part) => (v as Record<string, unknown>)[part],
              content,
            );
          expect(typeof value, key).toBe('string');
          expect(String(value).trim().length, key).toBeGreaterThan(0);
        }
        const questions: unknown[] = [];
        for (let n = 3; n <= faqLast[audience]; n += 2) {
          const q = content[`faq${String(n).padStart(2, '0')}`];
          const a = content[`faq${String(n + 1).padStart(2, '0')}`];
          expect(typeof q).toBe('string');
          expect(typeof a).toBe('string');
          questions.push(q);
        }
        expect(new Set(questions).size).toBe(questions.length);
        expect(textValues(content).join('\n')).not.toMatch(
          /Slack|marketplace|obowiązek współpracy|domyślny podział prowizji|default commission split/i,
        );
      });
    }
  }
  it('keeps both languages aligned for community sections and translation keys', () => {
    for (const audience of audiences) {
      expect(Object.keys(pl.marketing[audience]).sort()).toEqual(
        Object.keys(en.marketing[audience]).sort(),
      );
    }
    expect(howItWorks.pl.sections.map((s) => s.id)).toEqual(
      howItWorks.en.sections.map((s) => s.id),
    );
    for (const content of Object.values(howItWorks)) {
      expect(new Set(content.sections.map((s) => s.id)).size).toBe(
        content.sections.length,
      );
      for (const s of content.sections)
        expect(s.body.trim().length).toBeGreaterThan(0);
    }
  });
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
