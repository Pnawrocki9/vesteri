import type { ReactNode } from 'react';
import type { PropertyCard as Property } from '@/content/collective-properties';

/** Keep the selected image non-interactive until its listing URL is verified. */
export default function PropertyCard({
  property,
  className,
  alt,
  children,
}: {
  property: Property;
  className: string;
  alt: string;
  children: ReactNode;
}) {
  const content = (
    <>
      <picture>
        <source
          type="image/avif"
          srcSet={property.avifSrcSet}
          sizes={property.sizes}
        />
        {/* Native picture selects static variants without an image API. */}
        <img
          alt={alt}
          src={property.image}
          srcSet={property.webpSrcSet}
          sizes={property.sizes}
          width={property.imageWidth}
          height={property.imageHeight}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: property.objectPosition }}
        />
      </picture>
      {children}
      {property.photoCredit && (
        <span className="place-credit">{property.photoCredit}</span>
      )}
    </>
  );
  return property.listingUrl ? (
    <a className={className} href={property.listingUrl}>
      {content}
    </a>
  ) : (
    <article className={className} data-property-placeholder={property.id}>
      {content}
    </article>
  );
}
