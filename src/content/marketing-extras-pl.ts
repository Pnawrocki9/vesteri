// Polish-only additions to the existing marketing pages (plan v5.1, P1:
// 01 home, 02 dla-agentow, 04b sprzedajacy). Title and H1 stay as set by
// PR #26. FAQ items are plain text: they render in the visible FAQ and are
// appended to that page's FAQPage JSON-LD.
import { MARKETPLACE_URL } from '@/lib/site';

export type ExtraSection = { id: string; title: string; body: string };
export type MarketingExtras = {
  sections: ExtraSection[];
  faq: { q: string; a: string }[];
};

export const marketingExtrasPl: Record<
  'buyers' | 'sellers' | 'agents',
  MarketingExtras
> = {
  buyers: {
    sections: [
      {
        id: 'czym-zajmuje-sie-agent',
        title: 'Czym zajmuje się agent nieruchomości w Vesteri Collective',
        body: `Agent nieruchomości pomaga kupić, sprzedać lub wynająć nieruchomość: poznaje Twoje potrzeby, wyszukuje i sprawdza oferty, organizuje prezentacje, prowadzi negocjacje i pilnuje formalności aż do umowy u notariusza.

W Vesteri Collective agent nie jest ograniczony do ofert własnego biura. Jeśli lepsza nieruchomość jest u innego członka sieci, może się z nim skontaktować i poprowadzić transakcję wspólnie. Ty nadal masz jedną osobę do kontaktu. Prezentację możesz obejrzeć na żywo online, a pytania zadać od razu w trakcie.

Każdy członek Collective przechodzi weryfikację i przyjmuje zasady Fair Play & Trust. Szczegóły: [Jak działa Vesteri Collective](/pl/jak-dziala-vesteri-collective).

[Przeglądaj oferty](${MARKETPLACE_URL}) · [Sprzedaj z agentem sieci](/pl/sprzedajacy) · [Jak zostać agentem nieruchomości](/pl/poradnik/jak-zostac-agentem-nieruchomosci) · [Kupno mieszkania z agentem](/pl/poradnik/kupno-mieszkania-z-agentem)

Poradniki dla kupujących: [Kupno mieszkania z agentem](/pl/poradnik/kupno-mieszkania-z-agentem) · [Prowizja agenta nieruchomości](/pl/poradnik/prowizja-agenta-nieruchomosci) · [Nieruchomości za granicą](/pl/nieruchomosci-za-granica) · [Agent nieruchomości Kraków](/pl/agent-nieruchomosci/krakow)`,
      },
    ],
    faq: [
      {
        q: 'Co robi agent nieruchomości?',
        a: 'Pośredniczy przy zakupie, sprzedaży lub najmie nieruchomości: szuka i weryfikuje oferty, przygotowuje prezentacje, negocjuje warunki i koordynuje formalności do podpisania umowy. Zakres usługi zawsze określa umowa pośrednictwa. W Vesteri Collective agent może dodatkowo korzystać z ofert innych członków sieci.',
      },
      {
        q: 'Czym różni się agent nieruchomości od pośrednika?',
        a: 'W praktyce to dwie nazwy tego samego zawodu. Ustawa o gospodarce nieruchomościami używa określenia „pośrednik w obrocie nieruchomościami”. Od 1 stycznia 2014 r. państwowa licencja nie jest wymagana, ale pośrednik musi mieć obowiązkowe ubezpieczenie OC, a kopia polisy stanowi załącznik do umowy pośrednictwa (art. 181 ust. 3 i 3a ugn).',
      },
    ],
  },
  agents: {
    sections: [
      {
        id: 'praca-agenta',
        title: 'Praca agenta nieruchomości bez rezygnacji z własnej marki',
        body: `Szukasz pracy jako agent nieruchomości, ale nie chcesz rezygnować z własnej marki i klientów? W Collective nie ma etatu ani przydziału do biura. Działasz samodzielnie lub w swojej agencji, a sieć daje Ci dostęp do ofert i kupujących innych członków.

Dopiero zaczynasz? Zobacz, [jak zostać agentem nieruchomości](/pl/poradnik/jak-zostac-agentem-nieruchomosci).`,
      },
      {
        id: 'podzial-prowizji',
        title: 'Podział prowizji przy współpracy',
        body: `Prowizję od klienta ustalasz sam, w swojej umowie pośrednictwa. Gdy współpracujesz z innym członkiem, domyślnie obowiązuje podział prowizji netto: przy poleceniu 25% dla polecającego i 75% dla prowadzącego, przy wspólnej transakcji 50/50 między agentem sprzedającego a agentem kupującego. Inny podział tylko po wcześniejszej zgodzie obu stron. Okres ochrony wynosi 12 miesięcy. Pełne zasady: [Jak działa Vesteri Collective](/pl/jak-dziala-vesteri-collective) i [Regulamin Vesteri Collective](/pl/regulamin-vesteri-collective).`,
      },
      {
        id: 'siec-zamiast-franczyzy',
        title: 'Sieć zamiast franczyzy: co zachowujesz',
        body: `Członkostwo w Vesteri Collective nie jest franczyzą. Nie zmieniasz szyldu, nie podpisujesz umowy na wyłączność z siecią i nie oddajesz swoich klientów. Twoje oferty, Twoja marka i Twoja prowizja od własnych ofert zostają przy Tobie.

Co zyskujesz?
- **Dostęp do ofert innych członków.** Klient pyta o coś, czego nie masz? Zamiast go tracić, znajdujesz ofertę w sieci i prowadzisz go dalej.
- **Kupujących dla swoich ofert.** Inni członkowie mogą przyprowadzić klienta do Twojej nieruchomości.
- **Jasne zasady rozliczeń.** Podział prowizji i okres ochrony są spisane w regulaminie, a rozliczenia odbywają się bezpośrednio między członkami.
- **Narzędzia.** Prezentacje LIVE, webinary, asystent AI i automatyzacja reklam w jednym systemie.

Zgłoszenie, członkostwo, standardowa publikacja ofert i podstawowe funkcje systemu są bezpłatne. Płatne są tylko funkcje premium, za użycie albo w abonamencie.

Czego oczekujemy? Weryfikacji (tożsamość, działalność, wymagane ubezpieczenie OC) i przestrzegania zasad Fair Play & Trust, w tym współpracy, gdy inny członek ma zainteresowanego kupującego. Odmowa wymaga uzasadnienia.`,
      },
      {
        id: 'portfel-zagraniczny',
        title: 'Portfel zagranicznych projektów Vesteri',
        body: `Vesteri ma też własny portfel wybranych projektów za granicą, w których Vesteri lub jego partner jest agentem sprzedającym. Możesz oferować je swoim klientom. Przy tych projektach członek, który przyprowadzi kupującego, otrzymuje nie mniej niż 60% prowizji od dewelopera. Ta zasada dotyczy wyłącznie projektów z portfela Vesteri, a nie współpracy między członkami przy innych ofertach.`,
      },
    ],
    faq: [
      {
        q: 'Czy do pracy agenta nieruchomości potrzebna jest licencja?',
        a: 'Nie. Od 1 stycznia 2014 r. państwowa licencja pośrednika w obrocie nieruchomościami nie jest wymagana. Pośrednik prowadzący działalność musi jednak mieć obowiązkowe ubezpieczenie OC (minimalna suma gwarancyjna to równowartość 25 000 euro) i dołączać kopię polisy do umowy pośrednictwa. Licencje stowarzyszeń branżowych są dobrowolne.',
      },
      {
        q: 'Czy mogę dołączyć, jeśli dopiero zaczynam?',
        a: 'Tak, do Collective możesz dołączyć także bez doświadczenia. Musisz przejść weryfikację, czyli m.in. potwierdzić działalność i wymagane ubezpieczenie OC, oraz przyjąć zasady Fair Play & Trust. Jak zacząć w tym zawodzie, opisujemy w poradniku „Jak zostać agentem nieruchomości”.',
      },
    ],
  },
  sellers: {
    sections: [
      {
        id: 'sprzedaz-przez-posrednika',
        title: 'Sprzedaż mieszkania przez pośrednika: jak pracujemy',
        body: `Sprzedajesz z jednym agentem Vesteri Collective, który zna Twoją okolicę. Agent pomaga ustalić cenę na podstawie transakcji z okolicy, przygotowuje ofertę i prowadzi prezentacje oraz negocjacje. Twoją ofertę może udostępnić innym agentom sieci, którzy mają kupujących, więc nie jest ona zamknięta w jednym biurze. Płacisz jedną prowizję, ustaloną w umowie z Twoim agentem. Podział prowizji między agentami to ich wewnętrzne rozliczenie i nie zwiększa Twojego kosztu. Każdy pośrednik ma obowiązkowe ubezpieczenie OC, którego kopię dostajesz z umową.

Agenci w miastach: [Kraków](/pl/agent-nieruchomosci/krakow).

Poradniki: [Jak sprzedać mieszkanie](/pl/poradnik/jak-sprzedac-mieszkanie) · [Prowizja agenta nieruchomości](/pl/poradnik/prowizja-agenta-nieruchomosci)`,
      },
    ],
    faq: [
      {
        q: 'Ile wynosi prowizja agenta?',
        a: 'Ustalasz ją z agentem w umowie pośrednictwa. Typowe widełki rynkowe i to, od czego zależą, opisujemy w poradniku „Prowizja agenta nieruchomości”.',
      },
      {
        q: 'Jak przygotować mieszkanie do sprzedaży?',
        a: 'Zbierz dokumenty (KW, dokument nabycia, zaświadczenia), uporządkuj lokal przed zdjęciami i przygotuj informacje o opłatach. Pełną listę kroków znajdziesz w poradniku „Jak sprzedać mieszkanie”.',
      },
    ],
  },
};

export function extrasFor(locale: string, audience: keyof typeof marketingExtrasPl) {
  return locale === 'pl' ? marketingExtrasPl[audience] : { sections: [], faq: [] };
}
