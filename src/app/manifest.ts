import type { MetadataRoute } from 'next';

// Web app manifest. Colours come from the design tokens in globals.css
// (--color-ink and --color-paper); keep them in step if those change.
//
// display is "browser" on purpose: this is a marketing site, and a standalone
// window would strip the address bar from something people expect to browse.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vesteri Collective',
    short_name: 'Vesteri Collective',
    start_url: '/',
    display: 'browser',
    background_color: '#f8f7f3',
    theme_color: '#102d33',
    icons: [
      { src: '/logo/vesteri-mark-teal-gradient.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  };
}
