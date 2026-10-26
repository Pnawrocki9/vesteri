import { describe, expect, it } from 'vitest';
import { CONSENT_MAX_AGE_MS, parseConsent } from '../cookie-consent';

const now = Date.UTC(2026, 9, 26);
const record = {
  version: 1,
  analytics: false,
  marketing: false,
  updatedAt: now,
};

describe('cookie preferences', () => {
  it('preserves refusal and independent category choices', () => {
    for (const analytics of [false, true])
      for (const marketing of [false, true]) {
        const choice = { ...record, analytics, marketing };
        expect(parseConsent(JSON.stringify(choice), now)).toEqual(choice);
      }
  });

  it('requires a new choice after 180 days', () => {
    expect(
      parseConsent(JSON.stringify(record), now + CONSENT_MAX_AGE_MS - 1),
    ).toEqual(record);
    expect(
      parseConsent(JSON.stringify(record), now + CONSENT_MAX_AGE_MS),
    ).toBeNull();
  });

  it('rejects missing, corrupt, outdated and invalid records', () => {
    for (const value of [
      null,
      '',
      'invalid',
      'null',
      '[]',
      '{}',
      JSON.stringify({ ...record, version: 0 }),
      JSON.stringify({ ...record, analytics: 'granted' }),
      JSON.stringify({ ...record, marketing: 1 }),
      JSON.stringify({ ...record, updatedAt: 'today' }),
      JSON.stringify({ ...record, updatedAt: now + 1 }),
    ])
      expect(parseConsent(value, now)).toBeNull();
  });
});
