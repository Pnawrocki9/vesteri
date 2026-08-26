import { describe, expect, it } from 'vitest';
import {
  CODE_ALPHABET,
  CODE_FORMAT,
  codePrefix,
  generateUniqueCode,
  normalizeCode,
  randomSuffix,
} from '../code';
import type { D1Database } from '../env';

describe('codePrefix', () => {
  it('takes the first 3–5 ASCII letters, uppercased', () => {
    expect(codePrefix('Piotr')).toBe('PIOTR');
    expect(codePrefix('Aleksandra')).toBe('ALEKS');
    expect(codePrefix('Anna')).toBe('ANNA');
  });

  it('strips diacritics, including letters NFD cannot decompose', () => {
    expect(codePrefix('Łukasz')).toBe('LUKAS');
    expect(codePrefix('José')).toBe('JOSE');
    expect(codePrefix('Øyvind')).toBe('OYVIN');
    expect(codePrefix('Żaneta')).toBe('ZANET');
  });

  it('falls back to VST when fewer than 3 letters survive', () => {
    expect(codePrefix('Al')).toBe('VST');
    expect(codePrefix('李')).toBe('VST');
    expect(codePrefix('')).toBe('VST');
  });
});

describe('randomSuffix', () => {
  it('uses only the confusion-free alphabet', () => {
    for (let i = 0; i < 50; i++) {
      const suffix = randomSuffix(4);
      expect(suffix).toHaveLength(4);
      for (const ch of suffix) expect(CODE_ALPHABET).toContain(ch);
    }
  });
});

describe('normalizeCode', () => {
  it('matches spoken and written variants to the stored code', () => {
    expect(normalizeCode('piotr k7m2')).toBe('PIOTRK7M2');
    expect(normalizeCode('PIOTR-K7M2')).toBe('PIOTRK7M2');
    expect(normalizeCode(' piotr-k7m2 ')).toBe('PIOTRK7M2');
  });
});

// A D1 stand-in whose code-uniqueness check reports a collision for the
// first `collisions` lookups.
function collidingDb(collisions: number): D1Database {
  let calls = 0;
  return {
    prepare: () => ({
      bind: () => ({
        first: async () => (calls++ < collisions ? { one: 1 } : null),
        all: async () => ({ results: [] }),
        run: async () => ({ meta: { changes: 0 } }),
        bind() {
          return this;
        },
      }),
      first: async () => null,
      all: async () => ({ results: [] }),
      run: async () => ({ meta: { changes: 0 } }),
    }),
  } as unknown as D1Database;
}

describe('generateUniqueCode', () => {
  it('produces PREFIX-SUFFIX in the documented format', async () => {
    const code = await generateUniqueCode(collidingDb(0), 'Piotr');
    expect(code).toMatch(CODE_FORMAT);
    expect(code.startsWith('PIOTR-')).toBe(true);
    expect(code).toHaveLength(10);
  });

  it('falls back to a 6-character suffix after 10 collisions', async () => {
    const code = await generateUniqueCode(collidingDb(10), 'Anna');
    expect(code).toMatch(/^ANNA-[A-Z2-9]{6}$/);
  });

  it('gives up after 20 attempts', async () => {
    await expect(generateUniqueCode(collidingDb(999), 'Anna')).rejects.toThrow();
  });
});
