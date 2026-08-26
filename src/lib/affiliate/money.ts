// Amounts are integer cents end to end; these two functions are the only
// boundary between cents and what humans type or read.

/** "EUR 1,000" / "EUR 1,234.50" — code first, so the currency is never ambiguous. */
export function formatAmount(cents: number, currency: string): string {
  const value = cents / 100;
  try {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency,
      currencyDisplay: 'code',
      minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    }).format(value);
  } catch {
    // Unknown currency code in settings — still show something sane.
    return `${currency} ${value.toFixed(2)}`;
  }
}

/** Accepts "1000", "1 000", "1000.50", "1000,50". Null when unparseable or negative. */
export function parseAmountToCents(input: string): number | null {
  const cleaned = input.trim().replace(/\s/g, '').replace(',', '.');
  if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) return null;
  return Math.round(Number(cleaned) * 100);
}
