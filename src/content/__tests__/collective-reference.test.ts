import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';
import { propertyCards } from '../collective-properties';
const reference =
  'design-reference/Vesteri_Collective_EN_PL_Codex_Handoff_v9/vesteri-collective-handoff-v9/mockup';
const decode = (text: string) =>
  text
    .replaceAll('&amp;', '&')
    .replaceAll('&#39;', "'")
    .replaceAll('&quot;', '"');
describe('approved bilingual content', () => {
  for (const [locale, messages] of Object.entries({ en, pl })) {
    it(`preserves all 19 approved FAQ questions and answers in ${locale}`, () => {
      const html = readFileSync(join(reference, locale, 'index.html'), 'utf8');
      const approved = [
        ...html.matchAll(
          /<details><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/gs,
        ),
      ].map((match) => ({ q: decode(match[1]), a: decode(match[2]) }));
      expect(approved).toHaveLength(19);
      expect(messages.collective.faq.groups.flat()).toEqual(approved);
    });
  }
  it('keeps property assets local and links explicitly pending until verified', () => {
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
