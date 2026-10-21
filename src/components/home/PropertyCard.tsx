import type { ReactNode } from 'react';
import { propertyCards } from '@/content/collective-properties';
export default function PropertyCard({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const card = propertyCards[index];
  if (card.listingUrl) {
    if (new URL(card.listingUrl).origin !== 'https://vesteri.estalara.com')
      throw new Error(
        'Property destinations must use the verified Estalara host',
      );
    return (
      <a className="place" href={card.listingUrl}>
        {children}
      </a>
    );
  }
  return (
    <article className="place" data-property-slot={index}>
      {children}
    </article>
  );
}
