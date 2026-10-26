// Polish-only SEO pages from plan v5.1 (P4): the foreign-property hub and the
// Spain, Cyprus and UAE country pages. Copy comes from SEO Copywriter's v5.1 packages. FAQ answers
// are plain text because they feed both the visible FAQ and FAQPage JSON-LD.
// "{APP_URL}" marks the marketplace link and is resolved to MARKETPLACE_URL.
import { MARKETPLACE_URL } from '@/lib/site';

export type GuidePathname =
  | '/nieruchomosci-za-granica'
  | '/nieruchomosci-za-granica/hiszpania'
  | '/nieruchomosci-za-granica/cypr'
  | '/nieruchomosci-za-granica/zea';

export type GuideContent = {
  href: GuidePathname;
  kind: 'article' | 'webpage';
  eyebrow: string;
  breadcrumb: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  ctas: { label: string; href: string }[];
  sections: { id: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
  sources: string;
};

// First publication of this batch; bump dateModified when copy changes.
export const GUIDES_PUBLISHED = '2026-10-26';

const raw: GuideContent[] = [
  {
    "href": "/nieruchomosci-za-granica",
    "kind": "webpage",
    "eyebrow": "NIERUCHOMOŚCI ZA GRANICĄ",
    "breadcrumb": "Nieruchomości za granicą",
    "title": "Nieruchomości za granicą – kupno z agentem | Vesteri Collective",
    "description": "Kupno nieruchomości za granicą z agentem Vesteri Collective: Hiszpania, Cypr, ZEA. Podatki, formalności i ryzyka w każdym kraju – w jednym miejscu.",
    "h1": "Nieruchomości za granicą: kupuj z agentem, który zna oba rynki",
    "lead": "Kupno mieszkania za granicą to inne podatki, inne procedury i inne ryzyka niż w Polsce. W Vesteri Collective rozmawiasz po polsku z jednym agentem, który współpracuje z agentami sieci na miejscu. Poniżej zebraliśmy najważniejsze różnice między krajami, które obsługujemy.",
    "ctas": [
      {
        "label": "Przeglądaj oferty ↗",
        "href": "{APP_URL}"
      }
    ],
    "sections": [
      {
        "id": "kraje-w-skrocie",
        "title": "Kraje w skrócie",
        "body": "| Kraj | Podatek/opłata przy zakupie (główne) | Na co uważać |\n|---|---|---|\n| [Hiszpania](/pl/nieruchomosci-za-granica/hiszpania) | nowe: IVA 10% + AJD 0,5–1,5%; wtórne: ITP ok. 6–10% (zależnie od regionu) | NIE, Golden Visa zamknięta od 3.04.2025 |\n| [Cypr](/pl/nieruchomosci-za-granica/cypr) | opłata za przeniesienie własności 3–8% lub VAT 19%/5% | Cypr Północny – nie kupuj |\n| [ZEA](/pl/nieruchomosci-za-granica/zea) | Dubaj: opłata DLD 4% | freehold tylko w wyznaczonych strefach |"
      },
      {
        "id": "jak-wyglada-zakup-z-agentem-vesteri-collective",
        "title": "Jak wygląda zakup z agentem Vesteri Collective",
        "body": "1. Rozmowa o celu (własne wakacje, wynajem, przeprowadzka) i budżecie.\n2. Agent w Polsce łączy Cię z agentem sieci w danym kraju.\n3. Prezentacje na żywo online, potem ewentualnie wyjazd.\n4. Weryfikacja prawna przez lokalnego prawnika, umowa, rejestracja.\n\nOfertę przeglądasz w aplikacji: [Przeglądaj oferty]({APP_URL})."
      }
    ],
    "faq": [
      {
        "q": "Czy Polak może kupić nieruchomość za granicą?",
        "a": "W Hiszpanii i Republice Cypru – tak, jako obywatel UE. W Dubaju cudzoziemiec może kupić na własność (freehold) tylko w wyznaczonych strefach."
      },
      {
        "q": "Ile kosztuje zakup poza ceną?",
        "a": "Zależy od kraju: w Hiszpanii podatek ITP lub IVA+AJD, na Cyprze opłata za przeniesienie własności albo VAT, w Dubaju opłata DLD 4%. Szczegóły na stronach krajów."
      },
      {
        "q": "Czy potrzebuję lokalnego prawnika?",
        "a": "Zalecamy niezależnego prawnika w kraju zakupu – weryfikuje tytuł prawny i obciążenia."
      }
    ],
    "related": [
      {
        "label": "Nieruchomości w Hiszpanii",
        "href": "/pl/nieruchomosci-za-granica/hiszpania"
      },
      {
        "label": "Nieruchomości na Cyprze",
        "href": "/pl/nieruchomosci-za-granica/cypr"
      },
      {
        "label": "Nieruchomości w ZEA",
        "href": "/pl/nieruchomosci-za-granica/zea"
      },
      {
        "label": "Kupno mieszkania z agentem sieci",
        "href": "/pl"
      }
    ],
    "sources": "- Hiszpania: https://administracion.gob.es/tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/impuestos ; https://www.multilaw.com/Multilaw/Multilaw/RealEstate/Real_Estate_Guide_Spain.aspx ; https://www.boe.es/buscar/act.php?id=BOE-A-2025-76\n- Cypr: https://taxsummaries.pwc.com/cyprus/individual/other-taxes ; https://www.gov.pl/web/sport/informacja-dla-podrozujacych-do-tzw-tureckiej-republiki-polnocnego-cypru\n- ZEA: https://dubailand.gov.ae/en/eservices/property-sale-registration/ ; https://dubailand.gov.ae/media/wlzmuycr/know_your_rights.pdf"
  },
  {
    "href": "/nieruchomosci-za-granica/hiszpania",
    "kind": "article",
    "eyebrow": "ZA GRANICĄ · HISZPANIA",
    "breadcrumb": "Nieruchomości w Hiszpanii",
    "title": "Nieruchomości w Hiszpanii 2026: podatki, NIE, zakup z agentem",
    "description": "Kupno nieruchomości w Hiszpanii: IVA i AJD przy nowych, ITP przy wtórnych, numer NIE i koniec Golden Visa. Przewodnik dla kupujących z Polski.",
    "h1": "Nieruchomości w Hiszpanii: co musisz wiedzieć przed zakupem",
    "lead": "Jako obywatel UE możesz kupić nieruchomość w Hiszpanii na tych samych zasadach co Hiszpan. Najważniejsze są koszty podatkowe, które zależą od tego, czy kupujesz nowe mieszkanie od dewelopera, czy z rynku wtórnego, oraz od regionu (wspólnoty autonomicznej).",
    "ctas": [
      {
        // TODO(P4): no Spanish listings and no contact form yet; CTA points to /pl.
        "label": "Zapytaj agenta o nieruchomości w Hiszpanii",
        "href": "/"
      }
    ],
    "sections": [
      {
        "id": "podatki-przy-zakupie",
        "title": "Podatki przy zakupie",
        "body": "**Nowa nieruchomość (od dewelopera):** IVA 10% na mieszkania; dodatkowo podatek od dokumentów prawnych AJD, zwykle 0,5–1,5% w zależności od regionu. Na Wyspach Kanaryjskich zamiast IVA obowiązuje IGIC.\n\n**Rynek wtórny:** podatek ITP (Impuesto sobre Transmisiones Patrimoniales), ustalany przez wspólnotę autonomiczną – zwykle ok. 6–10%. Przykład: we Wspólnocie Walenckiej od 1.06.2026 stawka ogólna wynosi 9%, a 11% przy wartości powyżej 1 mln € (ustawa 5/2025 Generalitat, art. 33)."
      },
      {
        "id": "formalnosci",
        "title": "Formalności",
        "body": "- **NIE** (Número de Identificación de Extranjero) – numer identyfikacyjny cudzoziemca, potrzebny do zakupu, rachunku i podatków.\n- Umowa u notariusza (escritura) i wpis do rejestru nieruchomości.\n- Zalecamy niezależnego prawnika, który sprawdzi tytuł i obciążenia."
      },
      {
        "id": "golden-visa-juz-nie",
        "title": "Golden Visa już nie",
        "body": "Hiszpania zamknęła program „złotych wiz” za inwestycje w nieruchomości: od 3 kwietnia 2025 r. nie przyjmuje nowych wniosków (Ley Orgánica 1/2025). Dla obywateli UE i tak nie miał znaczenia, ale wiele starszych artykułów wciąż go reklamuje."
      },
      {
        "id": "jak-pomagamy",
        "title": "Jak pomagamy",
        "body": "Dziś nie mamy w aplikacji ofert z Hiszpanii. Napisz do nas – agent sieci odpowie, czy i jak może pomóc w wybranym regionie.\n\n[Zapytaj agenta o nieruchomości w Hiszpanii](/pl)"
      }
    ],
    "faq": [
      {
        "q": "Czy Polak może kupić mieszkanie w Hiszpanii?",
        "a": "Tak, obywatele UE kupują na tych samych zasadach; potrzebny jest numer NIE."
      },
      {
        "q": "Ile wynosi podatek przy zakupie?",
        "a": "Nowe: IVA 10% + AJD 0,5–1,5%. Wtórne: ITP ok. 6–10% zależnie od regionu."
      },
      {
        "q": "Czy zakup daje Golden Visa?",
        "a": "Nie – program zamknięto dla nowych wniosków od 3.04.2025."
      },
      {
        "q": "Czy potrzebuję prawnika?",
        "a": "Nie jest obowiązkowy, ale zalecamy niezależnego prawnika w Hiszpanii."
      }
    ],
    "related": [
      {
        "label": "Nieruchomości za granicą",
        "href": "/pl/nieruchomosci-za-granica"
      },
      {
        "label": "Nieruchomości na Cyprze",
        "href": "/pl/nieruchomosci-za-granica/cypr"
      },
      {
        "label": "Nieruchomości w ZEA",
        "href": "/pl/nieruchomosci-za-granica/zea"
      },
      {
        "label": "Kupno mieszkania z agentem sieci",
        "href": "/pl"
      }
    ],
    "sources": "- IVA 10% na mieszkania, ITP/AJD ustalane przez wspólnoty: https://administracion.gob.es/tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/impuestos\n- IVA (nowe) vs ITP (używane): https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html\n- ITP 6–10%, AJD 0,5–1,5%, IGIC na Kanarach: https://www.multilaw.com/Multilaw/Multilaw/RealEstate/Real_Estate_Guide_Spain.aspx\n- Walencja 9%/11% od 1.06.2026 (Llei 5/2025, DOGV 31.05.2025): https://atv.gva.es/va/he-comprat-un-inmoble ; https://hisenda.gva.es/va/web/tributos/novetats-tributaries-2026\n- Golden Visa – Ley Orgánica 1/2025 (BOE-A-2025-76, w życie 3.04.2025): https://www.boe.es/buscar/act.php?id=BOE-A-2025-76 ; https://www.mivau.gob.es/el-ministerio/sala-de-prensa/noticias/mie-02042025-1739"
  },
  {
    "href": "/nieruchomosci-za-granica/cypr",
    "kind": "article",
    "eyebrow": "ZA GRANICĄ · CYPR",
    "breadcrumb": "Nieruchomości na Cyprze",
    "title": "Nieruchomości na Cyprze 2026: podatki, VAT, Cypr Północny",
    "description": "Kupno nieruchomości na Cyprze: opłaty za przeniesienie własności, VAT 5% i 19%, zniesienie opłaty skarbowej i ryzyka zakupu na Cyprze Północnym.",
    "h1": "Nieruchomości na Cyprze: zakup w Republice Cypru krok po kroku",
    "lead": "Jako obywatel UE kupujesz nieruchomość w Republice Cypru bez szczególnych ograniczeń. Koszt zależy od tego, czy sprzedaż jest objęta VAT. Zakupu na Cyprze Północnym nie polecamy – wyjaśniamy dlaczego.",
    "ctas": [
      {
        "label": "Przeglądaj oferty ↗",
        "href": "{APP_URL}"
      }
    ],
    "sections": [
      {
        "id": "koszty-zakupu",
        "title": "Koszty zakupu",
        "body": "**Opłata za przeniesienie własności (Land Registry):** 3% do 85 000 €, 5% od 85 001 do 170 000 €, 8% powyżej (progi narastająco). Gdy sprzedaż nie jest objęta VAT, opłata jest obniżona o 50%; gdy zapłacono VAT – nie płaci się jej wcale.\n\n**VAT:** standardowo 19% na nowe nieruchomości. Stawka obniżona 5% obejmuje pierwsze 130 m² przy cenie do 350 000 €, jeśli mieszkanie ma do 190 m², kosztuje do 475 000 € i przez 10 lat będzie Twoim głównym miejscem zamieszkania.\n\n**Opłata skarbowa (stamp duty):** zniesiona od 1.01.2026 (ustawa 239(I)/2025). Dokumenty podpisane przez choćby jedną stronę do 31.12.2025 nadal jej podlegają."
      },
      {
        "id": "cypr-polnocny-dlaczego-odradzamy",
        "title": "Cypr Północny: dlaczego odradzamy",
        "body": "Polska nie utrzymuje stosunków dyplomatycznych z tzw. Turecką Republiką Cypru Północnego, więc opieka konsularna jest tam niemożliwa. Wiele nieruchomości na północy stoi na gruntach, których prawowici właściciele to uchodźcy grecko-cypryjscy. Kodeks karny Republiki Cypru (art. 303A) przewiduje do 7 lat więzienia za transakcje cudzą własnością, a wyroki cypryjskich sądów są wykonalne w całej UE (sprawa Apostolides v Orams)."
      },
      {
        "id": "jak-kupowac-z-vesteri-collective",
        "title": "Jak kupować z Vesteri Collective",
        "body": "Agent w Polsce łączy Cię z agentem sieci w Republice Cypru; prezentacje na żywo online, potem prawnik i rejestracja w Land Registry.\n\n[Przeglądaj oferty]({APP_URL})"
      }
    ],
    "faq": [
      {
        "q": "Czy Polak może kupić nieruchomość na Cyprze?",
        "a": "W Republice Cypru tak, jak każdy obywatel UE."
      },
      {
        "q": "Jaki VAT przy nowym mieszkaniu?",
        "a": "19%, albo 5% przy spełnieniu warunków dla głównego miejsca zamieszkania."
      },
      {
        "q": "Ile wynosi opłata za przeniesienie własności?",
        "a": "3/5/8% progowo, obniżona o 50% bez VAT, zero gdy zapłacono VAT."
      },
      {
        "q": "Czy warto kupić na Cyprze Północnym?",
        "a": "Nie polecamy: brak opieki konsularnej RP i ryzyko karne oraz cywilne z tytułu cudzej własności."
      }
    ],
    "related": [
      {
        "label": "Nieruchomości za granicą",
        "href": "/pl/nieruchomosci-za-granica"
      },
      {
        "label": "Nieruchomości w Hiszpanii",
        "href": "/pl/nieruchomosci-za-granica/hiszpania"
      },
      {
        "label": "Nieruchomości w ZEA",
        "href": "/pl/nieruchomosci-za-granica/zea"
      },
      {
        "label": "Kupno mieszkania z agentem sieci",
        "href": "/pl"
      }
    ],
    "sources": "- Opłaty za przeniesienie własności, VAT 19%/5%: https://taxsummaries.pwc.com/cyprus/individual/other-taxes\n- Kalkulator opłat (gov.cy): https://www.gov.cy/en/service/calculation-of-real-estates-transfer-fees/ ; DLS: https://portal.dls.moi.gov.cy/en/alles-ypiresies/ergaleia/\n- Zniesienie opłaty skarbowej od 1.01.2026, ustawa 239(I)/2025 (komunikat Departamentu Podatków powtórzony przez gov.cy, 29.01.2026): https://www.gov.cy/mip-md/mi-katigoriopoiimeno/katargisi-ton-peri-chartosimon-nomon-toy-1963-eos-2025/ ; https://www.companies.gov.cy/en/knowledgebase/news/repeal-of-the-stamp-duties-laws-of-1963-to-2025-law-no-239-i-2025\n- Brak stosunków dyplomatycznych RP z tzw. TRPC, brak opieki konsularnej: https://www.gov.pl/web/sport/informacja-dla-podrozujacych-do-tzw-tureckiej-republiki-polnocnego-cypru ; https://www.gov.pl/web/cypr/praca-i-pobyt\n- Art. 303A KK, Apostolides v Orams (MSZ Cypru): https://www.gov.cy/mfa/en/documents/legal-consequences-for-foreign-citizens-purchasing-greek-cypriot-owned-property-in-the-area-of-cyprus-occupied-by-turkey/\n- GOV.UK: https://www.gov.uk/guidance/how-to-property-in-cyprus"
  },
  {
    "href": "/nieruchomosci-za-granica/zea",
    "kind": "article",
    "eyebrow": "ZA GRANICĄ · ZEA",
    "breadcrumb": "Nieruchomości w ZEA",
    "title": "Nieruchomości w ZEA i Dubaju 2026: freehold, opłaty, wiza",
    "description": "Kupno nieruchomości w Dubaju i Abu Zabi: strefy freehold dla cudzoziemców, opłata DLD 4% i Golden Visa od 2 mln AED. Przewodnik dla kupujących z Polski.",
    "h1": "Nieruchomości w Zjednoczonych Emiratach Arabskich: zasady dla cudzoziemców",
    "lead": "W ZEA cudzoziemiec może kupić nieruchomość na pełną własność, ale tylko w wyznaczonych strefach. W Dubaju przy rejestracji płaci się opłatę 4% do Dubai Land Department, a zakup za co najmniej 2 mln AED może otworzyć drogę do Golden Visa.",
    "ctas": [
      {
        "label": "Przeglądaj oferty ↗",
        "href": "{APP_URL}"
      }
    ],
    "sections": [
      {
        "id": "gdzie-cudzoziemiec-moze-kupic",
        "title": "Gdzie cudzoziemiec może kupić",
        "body": "- **Dubaj:** własność typu freehold dla cudzoziemców tylko w obszarach wyznaczonych przez władze (Dubai Land Department).\n- **Abu Zabi:** w wyznaczonych strefach inwestycyjnych."
      },
      {
        "id": "koszty-w-dubaju",
        "title": "Koszty w Dubaju",
        "body": "Opłata za rejestrację przeniesienia własności w DLD wynosi 4% ceny; zwyczajowo dzielona 2% sprzedający / 2% kupujący, ale strony mogą ustalić inaczej."
      },
      {
        "id": "golden-visa",
        "title": "Golden Visa",
        "body": "Zakup nieruchomości o wartości co najmniej 2 mln AED kwalifikuje do długoterminowej wizy. Źródła rządowe podają różny okres ważności (DLD, ICP i urząd Abu Zabi: 10 lat; portal u.ae: 5 lat dla inwestorów w nieruchomości) – aktualne warunki sprawdź przed decyzją."
      },
      {
        "id": "jak-kupowac-z-vesteri-collective",
        "title": "Jak kupować z Vesteri Collective",
        "body": "Twój agent w Polsce współpracuje z agentem sieci w ZEA: wybór projektu w strefie freehold, prezentacje na żywo, weryfikacja dewelopera i rejestracja w DLD.\n\n[Przeglądaj oferty]({APP_URL})"
      }
    ],
    "faq": [
      {
        "q": "Czy Polak może kupić mieszkanie w Dubaju?",
        "a": "Tak, na własność w wyznaczonych strefach freehold."
      },
      {
        "q": "Ile wynosi opłata przy zakupie w Dubaju?",
        "a": "4% do DLD, zwykle po 2% po stronie kupującego i sprzedającego."
      },
      {
        "q": "Czy zakup daje wizę?",
        "a": "Nieruchomość za min. 2 mln AED może kwalifikować do Golden Visa; okres ważności podawany przez źródła rządowe różni się (5 lub 10 lat)."
      },
      {
        "q": "Czy mogę kupić w Abu Zabi?",
        "a": "Tak, w wyznaczonych strefach inwestycyjnych."
      }
    ],
    "related": [
      {
        "label": "Nieruchomości za granicą",
        "href": "/pl/nieruchomosci-za-granica"
      },
      {
        "label": "Nieruchomości w Hiszpanii",
        "href": "/pl/nieruchomosci-za-granica/hiszpania"
      },
      {
        "label": "Nieruchomości na Cyprze",
        "href": "/pl/nieruchomosci-za-granica/cypr"
      },
      {
        "label": "Kupno mieszkania z agentem sieci",
        "href": "/pl"
      }
    ],
    "sources": "- DLD „Know your rights” (freehold w wyznaczonych strefach): https://dubailand.gov.ae/media/wlzmuycr/know_your_rights.pdf\n- DLD Property Sale Registration (4%): https://dubailand.gov.ae/en/eservices/property-sale-registration/\n- Opłaty DLD – Executive Council Resolution 30/2013: https://dlp.dubai.gov.ae/Legislation%20Reference/2013/ECR%2030%20of%202013.html\n- Abu Zabi, strefy inwestycyjne: https://rulebook.centralbank.ae/en/entiresection/665 ; https://u.ae/en/information-and-services/moving-to-the-uae/expatriates-buying-a-property-in-the-uae\n- Golden Visa: https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa (5 lat) ; https://icp.gov.ae/en/services/uae-golden-residency/ ; https://www.added.gov.ae/en/live/long-term-residency/abu-dhabi-golden-visa/Investors/visa-for-real-estate-investors (10 lat)"
  }
];

const fill = (s: string) => s.replaceAll('{APP_URL}', MARKETPLACE_URL);

export const guides: GuideContent[] = raw.map((g) => ({
  ...g,
  ctas: g.ctas.map((c) => ({ ...c, href: fill(c.href) })),
  sections: g.sections.map((s) => ({ ...s, body: fill(s.body) })),
}));

export const guidePaths = guides.map((g) => g.href);

export function getGuide(href: GuidePathname) {
  const guide = guides.find((g) => g.href === href);
  if (!guide) throw new Error(`Unknown guide ${href}`);
  return guide;
}
