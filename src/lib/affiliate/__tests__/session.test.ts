import { describe, expect, it } from 'vitest';
import { createSessionToken, verifySessionToken } from '../session';

const SECRET = 'test-secret-test-secret-test-secret';
const future = () => Math.floor(Date.now() / 1000) + 3600;

describe('session tokens', () => {
  it('round-trips a valid session with its role intact', async () => {
    const token = await createSessionToken({ role: 'admin', sub: 'a@b.c', exp: future() }, SECRET);
    const session = await verifySessionToken(token, SECRET);
    expect(session).toMatchObject({ role: 'admin', sub: 'a@b.c' });
  });

  it('keeps the two roles distinct — an affiliate token never reads as admin', async () => {
    const token = await createSessionToken({ role: 'affiliate', sub: 'id-1', exp: future() }, SECRET);
    const session = await verifySessionToken(token, SECRET);
    expect(session?.role).toBe('affiliate');
    expect(session?.role === ('admin' as string)).toBe(false);
  });

  it('rejects a tampered payload', async () => {
    const token = await createSessionToken({ role: 'affiliate', sub: 'id-1', exp: future() }, SECRET);
    const [v, , sig] = token.split('.');
    const forged = btoa(JSON.stringify({ role: 'admin', sub: 'id-1', exp: future() }))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    expect(await verifySessionToken(`${v}.${forged}.${sig}`, SECRET)).toBeNull();
  });

  it('rejects the wrong secret, expiry in the past, and garbage', async () => {
    const token = await createSessionToken({ role: 'admin', sub: 'a@b.c', exp: future() }, SECRET);
    expect(await verifySessionToken(token, 'other-secret')).toBeNull();

    const expired = await createSessionToken(
      { role: 'admin', sub: 'a@b.c', exp: Math.floor(Date.now() / 1000) - 10 },
      SECRET,
    );
    expect(await verifySessionToken(expired, SECRET)).toBeNull();

    expect(await verifySessionToken(undefined, SECRET)).toBeNull();
    expect(await verifySessionToken('', SECRET)).toBeNull();
    expect(await verifySessionToken('v1.garbage', SECRET)).toBeNull();
  });
});
