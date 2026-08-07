import type { MetadataRoute } from 'next';

// Web app manifest. Colours come from the design tokens in globals.css
// (--color-ink and --color-paper); keep them in step if those change.
//
// display is "browser" on purpose: this is a marketing site, and a standalone
// window would strip the address bar from something people expect to browse.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vesteri',
    short_name: 'Vesteri',
    start_url: '/',
    display: 'browser',
    background_color: '#fbfaf7',
    theme_color: '#101614',
    icons: [
      { src: '/logo/vesteri-mark-teal-gradient.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  };
}
