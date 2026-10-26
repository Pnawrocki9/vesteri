// Polish SEO topics integrated into the existing V10.7 sections. Long-form
// explanations remain in the existing guides; FAQ feeds the visible UI and JSON-LD.
import type { StaticPathname } from '@/i18n/routing';

export type RelatedGuide = {
  href: StaticPathname;
  title: string;
  description: string;
};
export type MarketingExtras = {
  guidesTitle: string;
  guides: RelatedGuide[];
  faq: { q: string; a: string }[];
};

export const marketingExtrasPl: Record<
  'buyers' | 'sellers' | 'agents',
  MarketingExtras
> = {
  buyers: {
    guidesTitle: 'Przed zakupem warto wiedzieć',
    guides: [
      {
        href: '/poradnik/kupno-mieszkania-z-agentem',
        title: 'Kupno mieszkania z agentem',
        description: 'Etapy zakupu i zakres wsparcia Twojego agenta.',
      },
      {
        href: '/poradnik/prowizja-agenta-nieruchomosci',
        title: 'Prowizja agenta nieruchomości',
        description: 'Za co płacisz i co warto uzgodnić w umowie.',
      },
      {
        href: '/nieruchomosci-za-granica',
        title: 'Nieruchomości za granicą',
        description: 'Jak przygotować się do zakupu na innym rynku.',
      },
    ],
    // The agent's role is covered by the existing network FAQ. Definitions and
    // Polish licensing requirements remain in the linked professional guide.
    faq: [],
  },
  sellers: {
    guidesTitle: 'Przygotuj się do sprzedaży',
    guides: [
      {
        href: '/poradnik/jak-sprzedac-mieszkanie',
        title: 'Jak sprzedać mieszkanie',
        description:
          'Dokumenty, przygotowanie oferty i kolejne etapy sprzedaży.',
      },
      {
        href: '/poradnik/prowizja-agenta-nieruchomosci',
        title: 'Prowizja agenta nieruchomości',
        description: 'Wynagrodzenie, zakres usług i ustalenia z pośrednikiem.',
      },
    ],
    // Commission costs are already covered by the existing seller FAQ.
    faq: [
      {
        q: 'Jak przygotować mieszkanie do sprzedaży?',
        a: 'Zbierz dokumenty nieruchomości, informacje o opłatach i zaświadczenia potrzebne do transakcji. Uporządkuj lokal przed zdjęciami i ustal z agentem plan prezentacji. Kolejne kroki opisujemy w poradniku „Jak sprzedać mieszkanie”.',
      },
    ],
  },
  agents: {
    guidesTitle: '',
    guides: [],
    // Beginner eligibility is merged into the existing membership FAQ. The
    // career guide explains Polish licensing and insurance requirements.
    faq: [],
  },
};

export function extrasFor(
  locale: string,
  audience: keyof typeof marketingExtrasPl,
): MarketingExtras {
  return locale === 'pl'
    ? marketingExtrasPl[audience]
    : { guidesTitle: '', guides: [], faq: [] };
}
