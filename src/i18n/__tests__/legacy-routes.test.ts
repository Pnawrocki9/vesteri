import { describe, expect, it } from 'vitest';
import { resolveLegacyPath } from '../legacy-routes';
describe('two-language migration policy', () => {
  it.each(['/es', '/de/'])('maps retired homepage %s to English', (path) =>
    expect(resolveLegacyPath(path)).toEqual({
      kind: 'redirect',
      target: '/en',
    }),
  );
  it('maps translated legal documents to their true equivalents', () => {
    expect(resolveLegacyPath('/de/datenschutz')).toEqual({
      kind: 'redirect',
      target: '/en/privacy-policy',
    });
    expect(resolveLegacyPath('/es/terminos-del-servicio')).toEqual({
      kind: 'redirect',
      target: '/en/terms-of-service',
    });
  });
  it.each([
    '/affiliate',
    '/affiliate/register',
    '/affiliate/login',
    '/affiliate/dashboard',
    '/affiliate/terms',
    '/affiliate/privacy',
    '/affiliate/admin',
    '/affiliate/admin/login',
    '/affiliate/admin/settings',
    '/affiliate/admin/activity',
    '/affiliate/admin/affiliates/123',
  ])('preserves affiliate path %s', (path) =>
    expect(resolveLegacyPath('/de' + path)).toEqual({
      kind: 'redirect',
      target: '/en' + path,
    }),
  );
  it('routes old platform entry points to the confirmed platform host', () =>
    expect(resolveLegacyPath('/pl/zostan-partnerem')).toEqual({
      kind: 'redirect',
      target: 'https://vesteri.estalara.com',
    }));
  it('maps the old About page to the corresponding new section', () =>
    expect(resolveLegacyPath('/pl/o-nas')).toEqual({
      kind: 'redirect',
      target: '/pl#about',
    }));
  it('retires marketing content with no equivalent without redirecting it to the homepage', () =>
    expect(resolveLegacyPath('/en/for-developers')).toEqual({
      kind: 'gone',
      locale: 'en',
    }));
  it('does not redirect unrelated or unknown URLs', () => {
    expect(resolveLegacyPath('/es/unrelated')).toEqual({
      kind: 'unknown',
      locale: 'en',
    });
    expect(resolveLegacyPath('/en/unrelated')).toBeNull();
    expect(resolveLegacyPath('/en/affiliate/admin/affiliates/123')).toBeNull();
  });
});
