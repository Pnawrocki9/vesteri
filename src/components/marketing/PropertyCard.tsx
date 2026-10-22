import type { ReactNode } from 'react';
import type { PropertyCard as Property } from '@/content/collective-properties';

/** Render an illustrative, non-interactive card until its listing is verified. */
export default function PropertyCard({
  property,
  className,
  children,
}: {
  property: Property;
  className: string;
  children: ReactNode;
}) {
  return property.listingUrl ? (
    <a className={className} href={property.listingUrl}>
      {children}
    </a>
  ) : (
    <article className={className} data-property-placeholder={property.id}>
      {children}
    </article>
  );
}
