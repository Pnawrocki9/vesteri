import { describe, expect, it } from 'vitest';
import { formatAmount, parseAmountToCents } from '../money';

describe('parseAmountToCents', () => {
  it('accepts the ways people type amounts', () => {
    expect(parseAmountToCents('1000')).toBe(100_000);
    expect(parseAmountToCents('1 000')).toBe(100_000);
    expect(parseAmountToCents('1000.50')).toBe(100_050);
    expect(parseAmountToCents('1000,5')).toBe(100_050);
    expect(parseAmountToCents(' 0 ')).toBe(0);
  });

  it('rejects what it cannot safely interpret', () => {
    expect(parseAmountToCents('abc')).toBeNull();
    expect(parseAmountToCents('-5')).toBeNull();
    expect(parseAmountToCents('1.234,56')).toBeNull();
    expect(parseAmountToCents('')).toBeNull();
  });
});

describe('formatAmount', () => {
  it('always shows the currency code', () => {
    expect(formatAmount(100_000, 'EUR')).toContain('EUR');
    expect(formatAmount(100_000, 'EUR')).toContain('1,000');
    expect(formatAmount(123_450, 'EUR')).toContain('1,234.50');
  });

  it('survives an unknown currency code', () => {
    expect(formatAmount(100_000, 'XYZ123')).toContain('1000');
  });
});
