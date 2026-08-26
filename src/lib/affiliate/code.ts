import type { D1Database } from './env';

// Codes are quoted over the phone, so the suffix alphabet drops 0/O and 1/I.
export const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const FALLBACK_PREFIX = 'VST';

// Letters NFD cannot decompose to plain ASCII (Ł has no combining mark).
const SPECIAL_LETTERS: Record<string, string> = {
  ł: 'l',
  đ: 'd',
  ð: 'd',
  ø: 'o',
  þ: 'th',
  ß: 'ss',
  æ: 'ae',
  œ: 'oe',
};

/** First 3–5 ASCII letters of the first name, uppercased, diacritics stripped. */
export function codePrefix(firstName: string): string {
  const ascii = firstName
    .toLowerCase()
    .replace(/[łđðøþßæœ]/g, (ch) => SPECIAL_LETTERS[ch])
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z]/g, '');
  const prefix = ascii.slice(0, 5).toUpperCase();
  return prefix.length >= 3 ? prefix : FALLBACK_PREFIX;
}

export function randomSuffix(length: number): string {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  // 32 divides 256, so the modulo introduces no bias.
  return Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join('');
}

/** Uppercase, whitespace and hyphens stripped — "piotr k7m2" matches "PIOTR-K7M2". */
export function normalizeCode(input: string): string {
  return input.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export const CODE_FORMAT = /^[A-Z]{3,5}-[A-Z2-9]{4,6}$/;

/**
 * Generates a unique code for a new affiliate: 10 attempts with a 4-char
 * suffix, then 10 more with 6 chars. The unique constraint on the column is
 * the real guard — this only keeps collisions from surfacing as errors.
 */
export async function generateUniqueCode(db: D1Database, firstName: string): Promise<string> {
  const prefix = codePrefix(firstName);
  for (let attempt = 0; attempt < 20; attempt++) {
    const code = `${prefix}-${randomSuffix(attempt < 10 ? 4 : 6)}`;
    const existing = await db
      .prepare('SELECT 1 AS one FROM affiliates WHERE code = ?')
      .bind(code)
      .first();
    if (!existing) return code;
  }
  throw new Error('Could not generate a unique affiliate code');
}
