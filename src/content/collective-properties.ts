/** Curated static slots. Replace null with an owner's verified listing URL;
 * never substitute invented property details or a generic marketplace link. */
export type PropertyCard = {
  id: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  avifSrcSet: string;
  webpSrcSet: string;
  sizes: string;
  objectPosition: string;
  listingUrl: `https://vesteri.estalara.com/${string}` | null;
};

function photo(
  name: string,
  width: number,
  height: number,
  sizes: string,
  objectPosition: string,
) {
  const base = `/img/collective/properties/${name}`;
  const widths = [480, 800, width];
  return {
    image: `${base}-${width}.webp`,
    imageWidth: width,
    imageHeight: height,
    avifSrcSet: widths
      .map((size) => `${base}-${size}.avif ${size}w`)
      .join(', '),
    webpSrcSet: widths
      .map((size) => `${base}-${size}.webp ${size}w`)
      .join(', '),
    sizes,
    objectPosition,
  };
}

export const propertyCards: PropertyCard[] = [
  {
    id: 'local',
    ...photo(
      'warszawa-apartament',
      1100,
      733,
      '(max-width: 680px) max(calc(100vw - 80px), 413px), 473px',
      '80% center',
    ),
    listingUrl: null,
  },
  {
    id: 'europe',
    ...photo(
      'cypr-dom',
      1200,
      849,
      '(max-width: 680px) max(calc(100vw - 80px), 389px), 446px',
      'center',
    ),
    listingUrl: null,
  },
  {
    id: 'international',
    ...photo(
      'dubaj-apartament',
      1200,
      750,
      '(max-width: 680px) max(calc(100vw - 80px), 440px), 504px',
      '25% center',
    ),
    listingUrl: null,
  },
];
