/** Curated static slots. Replace null with an owner's verified listing URL;
 * never substitute invented property details or a generic marketplace link. */
export type PropertyCard = {
  id: string;
  image: string;
  listingUrl: `https://vesteri.estalara.com/${string}` | null;
};
export const propertyCards: PropertyCard[] = [
  { id: 'local', image: '/img/collective/property-01.webp', listingUrl: null },
  { id: 'europe', image: '/img/collective/property-02.webp', listingUrl: null },
  {
    id: 'international',
    image: '/img/collective/property-03.webp',
    listingUrl: null,
  },
];
