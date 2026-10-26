// Polish-only SEO pages from plan v5.1 (P1–P2): one city page and four
// Poradnik guides. Copy comes from SEO Copywriter's v5.1 packages. FAQ answers
// are plain text because they feed both the visible FAQ and FAQPage JSON-LD.
// "{APP_URL}" marks the marketplace link and is resolved to MARKETPLACE_URL.
import { MARKETPLACE_URL } from '@/lib/site';

export type GuidePathname =
  | '/agent-nieruchomosci/krakow'
  | '/poradnik/jak-sprzedac-mieszkanie'
  | '/poradnik/kupno-mieszkania-z-agentem'
  | '/poradnik/prowizja-agenta-nieruchomosci'
  | '/poradnik/jak-zostac-agentem-nieruchomosci';

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
    "href": "/agent-nieruchomosci/krakow",
    "kind": "webpage",
    "eyebrow": "AGENT NIERUCHOMOŚCI · KRAKÓW",
    "breadcrumb": "Agent nieruchomości w Krakowie",
    "title": "Agent nieruchomości Kraków – kupno i sprzedaż | Vesteri",
    "description": "Agent nieruchomości w Krakowie z Vesteri Collective. Sprzedaż i kupno mieszkania z lokalnym agentem i dostępem do ofert całej sieci.",
    "h1": "Agent nieruchomości w Krakowie",
    "lead": "Sprzedajesz albo kupujesz mieszkanie w Krakowie? Agent Vesteri Collective zna lokalny rynek, a jednocześnie pracuje w sieci niezależnych agentów. Twoja oferta trafia do nich wszystkich, a jeśli szukasz mieszkania, agent sprawdzi oferty całej sieci, nie tylko swojego biura.",
    "ctas": [
      {
        "label": "Zobacz oferty w Krakowie ↗",
        "href": "{APP_URL}"
      },
      {
        "label": "Sprzedaj mieszkanie z agentem",
        "href": "/sellers"
      }
    ],
    "sections": [
      {
        "id": "jak-pracuje-agent-vesteri-collective-w-krakowie",
        "title": "Jak pracuje agent Vesteri Collective w Krakowie",
        "body": "Vesteri Collective to sieć sprawdzonych, niezależnych agentów i biur nieruchomości. Każdy członek działa pod własną marką, ale przy transakcjach współpracuje z innymi i dzieli się prowizją na spisanych zasadach.\n\nDla Ciebie oznacza to jedną osobę do kontaktu. Jeśli sprzedajesz, Twój agent prowadzi ofertę, a inni członkowie sieci mogą przyprowadzić do niej kupujących. Jeśli kupujesz, agent nie ogranicza się do własnych ogłoszeń: sprawdza oferty innych członków i kontaktuje się z ich agentami. Prezentację możesz obejrzeć na miejscu albo na żywo online, co przydaje się, gdy nie mieszkasz w Krakowie.\n\nKażdy członek przechodzi weryfikację (tożsamość, działalność, ubezpieczenie OC pośrednika) i przyjmuje zasady Fair Play & Trust. Szczegóły: [Jak działa Vesteri Collective](/pl/jak-dziala-vesteri-collective)."
      },
      {
        "id": "sprzedaz-mieszkania-w-krakowie-jak-przygotowac-oferte",
        "title": "Sprzedaż mieszkania w Krakowie: jak przygotować ofertę",
        "body": "**Cena zgodna z rynkiem.** Według danych NBP (baza BaRN) średnia cena transakcyjna mieszkania na krakowskim rynku wtórnym w II kwartale 2026 r. wyniosła 14 792 zł/m², a średnia cena ofertowa 16 838 zł/m². Ceny w ogłoszeniach są więc zwykle wyższe niż te, za które mieszkania faktycznie się sprzedają. To średnie dla całego miasta, więc konkretną wycenę trzeba zrobić dla Twojej lokalizacji i standardu. Ceny transakcyjne z okolicy sprawdzisz w Rejestrze Cen Nieruchomości: od 13 lutego 2026 r. dane RCN są udostępniane bezpłatnie, także na mapie w serwisie geoportal.gov.pl (moduł „Rejestr Cen Nieruchomości”).\n\n**Rynek wtórny a pierwotny.** W tym samym kwartale średnia cena transakcyjna na krakowskim rynku pierwotnym wyniosła według NBP 15 923 zł/m². Mieszkanie z rynku wtórnego konkuruje więc z nowymi inwestycjami. Atutami bywają lokalizacja, gotowość do zamieszkania i brak czekania na odbiór.\n\n**Dokumenty.** Przygotuj numer księgi wieczystej, zaświadczenie o braku zaległości w opłatach i o osobach zameldowanych, a przy spółdzielczym własnościowym prawie – zaświadczenie ze spółdzielni. Agent pomoże skompletować resztę."
      },
      {
        "id": "kupno-mieszkania-w-krakowie-z-agentem",
        "title": "Kupno mieszkania w Krakowie z agentem",
        "body": "Agent kupującego pomaga zawęzić poszukiwania do dzielnic i budżetu, sprawdza stan prawny (księga wieczysta, obciążenia, sposób rozliczenia ze spółdzielnią) i negocjuje cenę. W Vesteri Collective może też zaproponować mieszkania innych członków sieci, więc nie musisz dzwonić do kilku biur. Przy zakupie na rynku wtórnym pamiętaj o podatku od czynności cywilnoprawnych (2% wartości rynkowej). Od 31 sierpnia 2023 r. nie płacisz go, jeśli kupujesz pierwsze mieszkanie lub dom: zwolnienie przysługuje osobie fizycznej, która ani w dniu zakupu, ani wcześniej nie miała prawa własności mieszkania, domu jednorodzinnego ani spółdzielczego własnościowego prawa do lokalu (wyjątek: odziedziczony udział do 50%). Przy zakupie razem z kimś warunek musi spełnić każdy kupujący (art. 9 pkt 17 ustawy o PCC)."
      },
      {
        "id": "ile-kosztuje-agent-nieruchomosci-w-krakowie",
        "title": "Ile kosztuje agent nieruchomości w Krakowie",
        "body": "Wynagrodzenie agenta to zwykle prowizja liczona procentowo od ceny transakcyjnej, do której doliczany jest VAT. Jej wysokość i to, kto ją płaci, ustalasz w umowie pośrednictwa. Nie ma stawki urzędowej. Więcej o tym, od czego zależy prowizja: [poradnik o prowizji](/pl/poradnik/prowizja-agenta-nieruchomosci)."
      },
      {
        "id": "jestes-agentem-z-krakowa-dolacz-do-collective",
        "title": "Jesteś agentem z Krakowa? Dołącz do Collective",
        "body": "Pracujesz w Krakowie jako agent albo dopiero zaczynasz? Zachowaj własną markę i klientów, a zyskaj dostęp do ofert i kupujących innych członków sieci. Zgłoszenie i członkostwo są bezpłatne. Przyjmujemy też początkujących agentów. → [Zgłoś się do Collective](/pl/dla-agentow)"
      }
    ],
    "faq": [
      {
        "q": "Jak znaleźć dobrego agenta nieruchomości w Krakowie?",
        "a": "Sprawdź, czy ma aktualne ubezpieczenie OC pośrednika (kopia polisy musi być załączona do umowy), ile transakcji przeprowadził w Twojej dzielnicy i jak będzie promował ofertę. Poproś o wzór umowy przed podpisaniem. Agenci Vesteri Collective przechodzą weryfikację przed przyjęciem do sieci."
      },
      {
        "q": "Ile wynosi prowizja agenta w Krakowie?",
        "a": "Nie ma jednej stawki – prowizję ustala się indywidualnie w umowie pośrednictwa, najczęściej jako procent ceny plus VAT. Zapytaj, czy podana stawka jest netto czy brutto i kto ją płaci. Więcej w poradniku o prowizji."
      },
      {
        "q": "Ile trwa sprzedaż mieszkania w Krakowie?",
        "a": "To zależy przede wszystkim od ceny w stosunku do rynku, lokalizacji i stanu mieszkania. Agent na podstawie transakcji z okolicy (Rejestr Cen Nieruchomości) pomoże ustalić cenę, która nie wydłuży sprzedaży."
      },
      {
        "q": "Czy agent pomoże przy kredycie?",
        "a": "Agent może skierować Cię do doradcy kredytowego i dopilnować terminów między umową przedwstępną a aktem notarialnym. Samą ofertę kredytu przygotowuje bank lub doradca."
      },
      {
        "q": "Czy mogę sprzedać mieszkanie w Krakowie, mieszkając w innym mieście?",
        "a": "Tak. Agent może prowadzić prezentacje, w tym na żywo online, a do aktu notarialnego możesz ustanowić pełnomocnika. Umowę pośrednictwa można zawrzeć w formie elektronicznej."
      }
    ],
    "related": [
      {
        "label": "Sprzedaż z agentem sieci",
        "href": "/pl/sprzedajacy"
      },
      {
        "label": "Jak sprzedać mieszkanie",
        "href": "/pl/poradnik/jak-sprzedac-mieszkanie"
      },
      {
        "label": "Kupno mieszkania z agentem",
        "href": "/pl/poradnik/kupno-mieszkania-z-agentem"
      },
      {
        "label": "Prowizja agenta nieruchomości",
        "href": "/pl/poradnik/prowizja-agenta-nieruchomosci"
      },
      {
        "label": "Dla agentów: dołącz do Vesteri Collective",
        "href": "/pl/dla-agentow"
      },
      {
        "label": "Jak działa Vesteri Collective",
        "href": "/pl/jak-dziala-vesteri-collective"
      }
    ],
    "sources": "- Ceny transakcyjne NBP, Kraków, II kw. 2026: wtórny 14 792 zł/m², pierwotny 15 923 zł/m² – źródło: zametr.pl, „Kraków – ceny mieszkań i zmiany cen”, sekcja „Ceny transakcyjne NBP” (https://zametr.pl/ceny-mieszkan/krakow, dostęp 26.10.2026). Średnia cena ofertowa NBP na rynku wtórnym 16 838 zł/m² (NBP BaRN, II kw. 2026) wg zgodnych źródeł: https://blog.ongeo.pl/ceny-mieszkan-ii-kwartal-2026-nbp , https://hesiahome.pl/blog/ceny-transakcyjne-mieszkan , https://vtgroup-realestate.pl/blog/ceny-mieszkan-krakow-2026/ , https://www.activ-investment.eu/blog/rynek-mieszkaniowy-krakow-ii-kwartal-2026/ .\n- RCN bezpłatny od 13.02.2026: https://www.geoportal.gov.pl/aktualnosci/zmiany-w-udostepnianiu-danych-z-rcn-nowelizacja-rozporzadzenia-w-sprawie-egib/ ; https://www.geoportal.gov.pl/pl/dane/rejestr-cen-nieruchomosci-rcn/ (ustawa z 26.09.2025, Dz.U. poz. 1542)\n- Art. 180–181 ugn (umowa pośrednictwa, OC): https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html\n- PCC: art. 9 pkt 17 ustawy o PCC (t.j. Dz.U. 2024 poz. 295): https://eli.gov.pl/api/acts/DU/2024/295/text.html ; zwolnienie od 31.08.2023: https://www.gov.pl/web/rozwoj-technologia/kupno-mieszkania-lub-domu-na-rynku-wtornym-bez-podatku-pcc\n- Fakty o Vesteri: www.vesteri.com llms.txt (26.10.2026)"
  },
  {
    "href": "/poradnik/jak-sprzedac-mieszkanie",
    "kind": "article",
    "eyebrow": "PORADNIK · SPRZEDAŻ",
    "breadcrumb": "Jak sprzedać mieszkanie",
    "title": "Jak sprzedać mieszkanie w 2026? Krok po kroku, z agentem i bez",
    "description": "Jak sprzedać mieszkanie: dokumenty, wycena, umowa z agentem, notariusz i podatek. Praktyczny przewodnik dla sprzedających w 2026 roku.",
    "h1": "Jak sprzedać mieszkanie szybko i bezpiecznie: krok po kroku",
    "lead": "Sprzedaż mieszkania to kilka etapów: komplet dokumentów, realna cena, dobra prezentacja, negocjacje, umowa przedwstępna i akt notarialny. Jeśli sprzedajesz przed upływem 5 lat od końca roku zakupu, musisz też rozliczyć podatek. Poniżej opisujemy każdy krok i podpowiadamy, kiedy warto oddać sprzedaż agentowi.",
    "ctas": [
      {
        "label": "Sprzedaj z agentem sieci",
        "href": "/sellers"
      }
    ],
    "sections": [
      {
        "id": "krok-1-dokumenty-i-stan-prawny",
        "title": "Krok 1. Dokumenty i stan prawny",
        "body": "Kupujący i jego bank zapytają o stan prawny lokalu, więc warto zebrać papiery przed publikacją ogłoszenia. Zwykle potrzebne są:\n- numer księgi wieczystej (treść KW można sprawdzić bezpłatnie w systemie Ministerstwa Sprawiedliwości: ekw.ms.gov.pl),\n- dokument nabycia (akt notarialny, postanowienie o nabyciu spadku itp.),\n- zaświadczenie o braku zaległości w opłatach (od wspólnoty lub spółdzielni) i o braku osób zameldowanych,\n- przy spółdzielczym własnościowym prawie: zaświadczenie ze spółdzielni,\n- świadectwo charakterystyki energetycznej.\n\nDokładną listę potwierdzi notariusz, który będzie sporządzał akt. Jeśli w KW jest hipoteka, ustal z bankiem, jak zostanie spłacona z ceny sprzedaży."
      },
      {
        "id": "krok-2-wycena-ile-naprawde-jest-warte-mieszkanie",
        "title": "Krok 2. Wycena: ile naprawdę jest warte mieszkanie",
        "body": "Ceny w ogłoszeniach to oczekiwania sprzedających, a nie ceny zawartych transakcji. Ceny transakcyjne z Twojej okolicy sprawdzisz w Rejestrze Cen Nieruchomości: od 13 lutego 2026 r. dane RCN są udostępniane bezpłatnie, także na mapie w serwisie geoportal.gov.pl. Porównuj lokale podobne pod względem metrażu, piętra, stanu i roku budowy. Agent przygotuje taką analizę za Ciebie i pomoże ustalić cenę wyjściową z marginesem na negocjacje."
      },
      {
        "id": "krok-3-samodzielnie-czy-z-agentem",
        "title": "Krok 3. Samodzielnie czy z agentem?",
        "body": "| | Samodzielnie | Z agentem |\n|---|---|---|\n| Koszt | brak prowizji | prowizja ustalona w umowie (zob. [prowizja agenta](/pl/poradnik/prowizja-agenta-nieruchomosci)) |\n| Wycena | sam porównujesz ogłoszenia i RCN | analiza transakcji z okolicy |\n| Ogłoszenia i zdjęcia | robisz sam | po stronie agenta |\n| Prezentacje | w Twoim czasie | agent umawia i prowadzi |\n| Negocjacje | bezpośrednio z kupującym | agent jako pośrednik |\n| Formalności | sam kompletujesz dokumenty | agent pomaga i koordynuje z notariuszem |\n\nSamodzielna sprzedaż ma sens, gdy masz czas, znasz rynek i masz już kupującego. Agent przydaje się, gdy zależy Ci na czasie, mieszkasz w innym mieście albo nie chcesz sam prowadzić negocjacji.\n\nPośrednik musi mieć obowiązkowe ubezpieczenie OC, a kopię polisy dołącza do umowy pośrednictwa (art. 181 ustawy o gospodarce nieruchomościami)."
      },
      {
        "id": "krok-4-umowa-na-wylacznosc-kiedy-sie-oplaca",
        "title": "Krok 4. Umowa na wyłączność: kiedy się opłaca",
        "body": "Umowa otwarta pozwala współpracować z wieloma biurami naraz. Umowa na wyłączność oznacza jednego pośrednika na określony czas. Wyłączność ma sens, gdy agent w zamian zobowiązuje się do konkretnych działań, np. sesji zdjęciowej, promocji płatnej i regularnych raportów. Przed podpisaniem sprawdź czas trwania umowy, warunki wypowiedzenia i to, czy prowizja należy się także wtedy, gdy sam znajdziesz kupującego.\n\nW Vesteri Collective wyłączność nie zamyka oferty w jednym biurze: Twój agent może udostępnić ją innym agentom sieci, którzy mają kupujących."
      },
      {
        "id": "krok-5-prezentacja-i-negocjacje",
        "title": "Krok 5. Prezentacja i negocjacje",
        "body": "- Uporządkuj mieszkanie i usuń drobne usterki przed zdjęciami.\n- Zdjęcia w dziennym świetle i rzut lokalu pomagają w pierwszym kontakcie.\n- Przygotuj odpowiedzi na typowe pytania: opłaty, koszty mediów, stan instalacji, miejsce postojowe.\n- W negocjacjach ustal wcześniej swoją cenę minimalną i to, co możesz zaoferować poza ceną (np. termin wydania lokalu)."
      },
      {
        "id": "krok-6-umowa-przedwstepna-notariusz-i-podatek",
        "title": "Krok 6. Umowa przedwstępna, notariusz i podatek",
        "body": "**Umowa przedwstępna** określa cenę, termin umowy końcowej i zadatek lub zaliczkę. Forma aktu notarialnego daje stronom silniejszą ochronę niż zwykła forma pisemna.\n\n**Akt notarialny** przenosi własność. Notariusz sprawdza dokumenty, odczytuje akt i składa wniosek do księgi wieczystej.\n\n**Podatek dochodowy (PIT).** Jeśli sprzedajesz mieszkanie przed upływem 5 lat licząc od końca roku, w którym je kupiłeś lub wybudowałeś, składasz zeznanie PIT-39 (od 15 lutego do 30 kwietnia następnego roku), a dochód jest opodatkowany stawką 19%. Przykład z podatki.gov.pl: mieszkanie kupione w lutym 2020 r. można od 1 stycznia 2026 r. sprzedać bez podatku i bez zeznania. Dochód jest zwolniony, jeśli przeznaczysz przychód na własne cele mieszkaniowe w ciągu 3 lat od końca roku sprzedaży (tzw. ulga mieszkaniowa). Przy mieszkaniu ze spadku 5 lat liczy się od końca roku, w którym nabył je spadkodawca."
      },
      {
        "id": "sprzedaz-z-agentem-vesteri-collective",
        "title": "Sprzedaż z agentem Vesteri Collective",
        "body": "Pracujesz z jednym agentem, który zna Twoją okolicę. Twoja oferta trafia też do innych agentów sieci, którzy mają kupujących. Płacisz jedną prowizję ustaloną w umowie z Twoim agentem; podział prowizji między agentami to ich wewnętrzne rozliczenie i nie zwiększa Twojego kosztu.\n\n[Sprzedaj z agentem sieci](/pl/sprzedajacy)"
      }
    ],
    "faq": [
      {
        "q": "Jakie dokumenty są potrzebne do sprzedaży mieszkania?",
        "a": "Najczęściej: numer księgi wieczystej, dokument nabycia, zaświadczenia o braku zaległości i zameldowanych osób, przy lokalu spółdzielczym zaświadczenie ze spółdzielni oraz świadectwo charakterystyki energetycznej. Ostateczną listę poda notariusz."
      },
      {
        "q": "Ile trwa sprzedaż mieszkania?",
        "a": "Nie ma jednej odpowiedzi. Czas zależy głównie od ceny w stosunku do podobnych transakcji, lokalizacji i stanu lokalu, a także od tego, czy kupujący bierze kredyt."
      },
      {
        "q": "Czy muszę zapłacić podatek od sprzedaży mieszkania?",
        "a": "Tylko jeśli sprzedajesz przed upływem 5 lat od końca roku nabycia. Wtedy dochód jest opodatkowany stawką 19% (PIT-39), chyba że w ciągu 3 lat wydasz przychód na własne cele mieszkaniowe."
      },
      {
        "q": "Czy warto podpisać umowę na wyłączność?",
        "a": "Tak, jeśli agent w zamian zobowiązuje się do konkretnych działań marketingowych i raportowania, a umowa ma rozsądny czas trwania i jasne warunki wypowiedzenia."
      },
      {
        "q": "Ile kosztuje agent nieruchomości?",
        "a": "Prowizja jest ustalana indywidualnie w umowie pośrednictwa. Typowe widełki i to, od czego zależą, opisujemy w poradniku o prowizji agenta."
      },
      {
        "q": "Czy mogę sprzedać mieszkanie, mieszkając w innym mieście?",
        "a": "Tak. Agent na miejscu prowadzi prezentacje i negocjacje, a do aktu notarialnego możesz udzielić pełnomocnictwa w formie aktu notarialnego albo przyjechać tylko na podpisanie."
      }
    ],
    "related": [
      {
        "label": "Sprzedaż z agentem sieci",
        "href": "/pl/sprzedajacy"
      },
      {
        "label": "Prowizja agenta nieruchomości",
        "href": "/pl/poradnik/prowizja-agenta-nieruchomosci"
      },
      {
        "label": "Kupno mieszkania z agentem",
        "href": "/pl/poradnik/kupno-mieszkania-z-agentem"
      },
      {
        "label": "Agent nieruchomości w Krakowie",
        "href": "/pl/agent-nieruchomosci/krakow"
      }
    ],
    "sources": "- PIT od sprzedaży nieruchomości, 5 lat, 19%, PIT-39, ulga 3 lata, spadek: https://www.podatki.gov.pl/podatki-osobiste/pit/informacje-podstawowe/co-jest-opodatkowane/zbycie-nieruchomosci (aktualizacja 19.08.2026)\n- RCN bezpłatny od 13.02.2026: https://www.geoportal.gov.pl/aktualnosci/zmiany-w-udostepnianiu-danych-z-rcn-nowelizacja-rozporzadzenia-w-sprawie-egib/\n- OC pośrednika, art. 181 ust. 3–3b ugn: https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html\n- Księgi wieczyste online: https://ekw.ms.gov.pl"
  },
  {
    "href": "/poradnik/kupno-mieszkania-z-agentem",
    "kind": "article",
    "eyebrow": "PORADNIK · KUPNO",
    "breadcrumb": "Kupno mieszkania z agentem",
    "title": "Kupno mieszkania z agentem: jak to działa i ile kosztuje",
    "description": "Jak kupić mieszkanie z agentem nieruchomości: rola agenta kupującego, kroki od budżetu do aktu, kto płaci prowizję i jak sprawdzić stan prawny.",
    "h1": "Kupno mieszkania z agentem nieruchomości: przewodnik",
    "lead": "Agent po stronie kupującego szuka mieszkań pasujących do Twojego budżetu, umawia oglądanie, pomaga sprawdzić księgę wieczystą i negocjuje cenę. Za tę pracę płacisz prowizję ustaloną w umowie pośrednictwa z Twoim agentem. Poniżej wyjaśniamy, jak wygląda taka współpraca krok po kroku.",
    "ctas": [
      {
        "label": "Przeglądaj oferty ↗",
        "href": "{APP_URL}"
      },
      {
        "label": "Znajdź agenta",
        "href": "/"
      }
    ],
    "sections": [
      {
        "id": "co-robi-agent-po-stronie-kupujacego",
        "title": "Co robi agent po stronie kupującego",
        "body": "- doprecyzowuje z Tobą kryteria: lokalizację, metraż, budżet, termin,\n- wyszukuje oferty, także te, które nie są jeszcze szeroko ogłaszane,\n- umawia i prowadzi oglądanie lub prezentację na żywo online,\n- pomaga zebrać i przeczytać dokumenty lokalu,\n- negocjuje cenę i warunki, koordynuje termin u notariusza."
      },
      {
        "id": "agent-kupujacego-a-agent-sprzedajacego",
        "title": "Agent kupującego a agent sprzedającego",
        "body": "Agent sprzedającego reprezentuje właściciela i dba o jak najlepszą cenę sprzedaży. Agent kupującego działa na Twoje zlecenie: jego zadaniem jest znaleźć lokal i wynegocjować dobre warunki dla Ciebie. Zakres obowiązków i wynagrodzenie zawsze określa pisemna umowa pośrednictwa (art. 180 ustawy o gospodarce nieruchomościami). Pośrednik ma obowiązkowe OC, a kopia polisy jest załącznikiem do umowy (art. 181)."
      },
      {
        "id": "kroki-zakupu",
        "title": "Kroki zakupu",
        "body": "1. **Budżet i kredyt.** Sprawdź zdolność kredytową przed szukaniem. Pamiętaj o kosztach poza ceną: notariusz, wpisy do KW, podatek PCC na rynku wtórnym.\n2. **Wyszukiwanie.** Ceny transakcyjne z okolicy sprawdzisz w Rejestrze Cen Nieruchomości, bezpłatnie od 13.02.2026 (geoportal.gov.pl).\n3. **Oglądanie.** Na miejscu albo jako prezentacja na żywo, gdy jesteś w innym mieście.\n4. **Stan prawny.** Księgę wieczystą przeczytasz bezpłatnie na ekw.ms.gov.pl. Sprawdź właściciela (dział II), ograniczenia i roszczenia (dział III) oraz hipoteki (dział IV).\n5. **Negocjacje i umowa przedwstępna.** Cena, zadatek, termin aktu końcowego.\n6. **Akt notarialny i podatek.** Na rynku wtórnym PCC wynosi 2%; kupujący pierwsze mieszkanie (własność lub spółdzielcze własnościowe prawo) jest z niego zwolniony od 31.08.2023 r. (art. 9 pkt 17 ustawy o PCC). Na rynku pierwotnym PCC nie ma, bo sprzedaż obejmuje VAT."
      },
      {
        "id": "ile-kosztuje-i-kto-placi",
        "title": "Ile kosztuje i kto płaci",
        "body": "Prowizję płaci strona, która zawarła umowę z pośrednikiem. Jeśli masz własnego agenta, płacisz mu stawkę ustaloną w umowie. Typowe widełki opisujemy w poradniku o [prowizji agenta](/pl/poradnik/prowizja-agenta-nieruchomosci)."
      },
      {
        "id": "jak-to-dziala-w-vesteri-collective",
        "title": "Jak to działa w Vesteri Collective",
        "body": "Pracujesz z jednym agentem, a on ma dostęp do ofert i agentów całej sieci. Nie musisz podpisywać umów z kilkoma biurami. Jeśli mieszkanie wystawia inny agent sieci, rozliczają się między sobą; podział prowizji nie zwiększa Twojego kosztu.\n\n[Przeglądaj oferty]({APP_URL}) · [Znajdź agenta](/pl)"
      }
    ],
    "faq": [
      {
        "q": "Czy kupujący płaci prowizję agentowi?",
        "a": "Tylko jeśli podpisał umowę pośrednictwa. Stawkę ustala się w tej umowie."
      },
      {
        "q": "Czy agent sprawdzi stan prawny mieszkania?",
        "a": "Agent pomoże zebrać dokumenty i przeanalizować księgę wieczystą. Ostateczną weryfikację przed aktem wykonuje notariusz; w złożonych sprawach warto skonsultować się z prawnikiem."
      },
      {
        "q": "Czy warto mieć jednego agenta?",
        "a": "Tak, jeśli ma dostęp do szerokiej bazy ofert. Unikasz wtedy wielu umów i powtarzania swoich kryteriów w różnych biurach."
      },
      {
        "q": "Czy mogę kupić mieszkanie z rynku pierwotnego z agentem?",
        "a": "Tak. Agent pomoże porównać inwestycje i przeczytać umowę deweloperską. Zasady wynagrodzenia ustala umowa pośrednictwa."
      },
      {
        "q": "Czy mogę kupić mieszkanie zdalnie?",
        "a": "Tak. Oglądanie może odbyć się jako prezentacja na żywo, a do aktu notarialnego można ustanowić pełnomocnika w formie aktu notarialnego."
      }
    ],
    "related": [
      {
        "label": "Agent nieruchomości w Krakowie",
        "href": "/pl/agent-nieruchomosci/krakow"
      },
      {
        "label": "Prowizja agenta nieruchomości",
        "href": "/pl/poradnik/prowizja-agenta-nieruchomosci"
      },
      {
        "label": "Jak sprzedać mieszkanie",
        "href": "/pl/poradnik/jak-sprzedac-mieszkanie"
      }
    ],
    "sources": "- Art. 180–181 ugn: https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html\n- PCC – zwolnienie pierwszego mieszkania, art. 9 pkt 17 (od 31.08.2023): https://www.gov.pl/web/rozwoj-technologia/kupno-mieszkania-lub-domu-na-rynku-wtornym-bez-podatku-pcc ; t.j. Dz.U. 2024 poz. 295\n- RCN bezpłatny od 13.02.2026: https://www.geoportal.gov.pl/aktualnosci/zmiany-w-udostepnianiu-danych-z-rcn-nowelizacja-rozporzadzenia-w-sprawie-egib/\n- Księgi wieczyste: https://ekw.ms.gov.pl"
  },
  {
    "href": "/poradnik/prowizja-agenta-nieruchomosci",
    "kind": "article",
    "eyebrow": "PORADNIK · PROWIZJA",
    "breadcrumb": "Prowizja agenta nieruchomości",
    "title": "Prowizja agenta nieruchomości 2026: ile wynosi i od czego zależy",
    "description": "Ile bierze agent nieruchomości? Typowe stawki prowizji, VAT, kto płaci, umowa na wyłączność i negocjacje. Przewodnik dla sprzedających i kupujących.",
    "h1": "Prowizja agenta nieruchomości: ile wynosi i za co płacisz",
    "lead": "Prowizja agenta nieruchomości to wynagrodzenie za skuteczne pośrednictwo, zwykle procent od ceny transakcyjnej. Poradniki branżowe z 2025 r. najczęściej podają 2–3% netto przy sprzedaży mieszkania, plus 23% VAT. Nie ma stawki urzędowej: wysokość, moment zapłaty i to, kto płaci, ustala umowa pośrednictwa.",
    "ctas": [
      {
        "label": "Sprzedaj z agentem sieci",
        "href": "/sellers"
      }
    ],
    "sections": [
      {
        "id": "ile-wynosi-prowizja-posrednika-nieruchomosci-w-polsce",
        "title": "Ile wynosi prowizja pośrednika nieruchomości w Polsce",
        "body": "Nie ma jednej stawki. Przepisy nie określają wysokości prowizji, a wynagrodzenie pośrednika ustala się w umowie pośrednictwa (art. 180 ustawy o gospodarce nieruchomościami).\n\nW praktyce poradniki branżowe z 2025 r. podają podobne widełki:\n- **sprzedaż mieszkania lub domu:** najczęściej 2–3% netto ceny transakcyjnej, w niektórych przypadkach (nieruchomości luksusowe, trudne do sprzedania) wyżej,\n- **najem:** często równowartość jednego miesięcznego czynszu netto, plus VAT.\n\nTo orientacyjne dane z rynku, a nie statystyka urzędowa – nie znaleźliśmy badania stawek prowizji z opisaną metodologią. Źródła: [towerservice.pl](https://towerservice.pl/prowizja-biura-nieruchomosci-ile-wynosi-i-jak-negocjowac), [marberdom.pl](https://marberdom.pl/ile-kosztuje-posrednik-nieruchomosci-stawki-vat-i-jak-obnizyc), [rynekpierwotny.pl](https://rynekpierwotny.pl/wiadomosci-mieszkaniowe/na-czym-zarabia-posrednik-nieruchomosci/7300/) (dostęp 26.10.2026).\n\n**Przykład (ilustracja):** mieszkanie sprzedane za 600 000 zł, prowizja 2,5% netto → 15 000 zł netto, czyli 18 450 zł brutto z 23% VAT."
      },
      {
        "id": "prowizja-netto-czy-brutto-vat",
        "title": "Prowizja netto czy brutto: VAT",
        "body": "Usługi pośrednictwa w obrocie nieruchomościami podlegają co do zasady podstawowej stawce VAT 23%, jeśli pośrednik jest czynnym podatnikiem VAT. Zawsze sprawdź, czy stawka w umowie jest podana netto, czy brutto – różnica przy cenie mieszkania jest istotna. Agent korzystający ze zwolnienia podmiotowego nie dolicza VAT. Od 1 stycznia 2026 r. limit tego zwolnienia wynosi 240 000 zł sprzedaży rocznie (art. 113 ust. 1 ustawy o VAT)."
      },
      {
        "id": "kto-placi-prowizje-sprzedajacy-kupujacy-czy-obie-strony",
        "title": "Kto płaci prowizję: sprzedający, kupujący czy obie strony",
        "body": "Prawo nie wskazuje, kto płaci. Płaci ta strona, która podpisała umowę pośrednictwa i się w niej do tego zobowiązała. Spotkasz trzy modele:\n- **płaci sprzedający** – agent działa na jego zlecenie, kupujący nie ponosi kosztów,\n- **płaci kupujący** – zwykle gdy zleca agentowi szukanie nieruchomości,\n- **płacą obie strony** – każda na podstawie własnej umowy i za swoją zgodą.\n\nJeśli kupujesz i nie podpisujesz z agentem żadnej umowy, nie powinieneś być obciążany prowizją. Zapytaj o to wprost na pierwszym spotkaniu."
      },
      {
        "id": "za-co-placisz-agentowi",
        "title": "Za co płacisz agentowi",
        "body": "Zakres usług określa umowa. Typowo obejmuje:\n- wycenę i ustalenie strategii cenowej,\n- weryfikację dokumentów i stanu prawnego,\n- zdjęcia, opis i publikację oferty,\n- prezentacje i selekcję kupujących,\n- negocjacje,\n- pomoc przy umowie przedwstępnej i akcie notarialnym.\n\nPośrednik musi mieć obowiązkowe ubezpieczenie OC, a kopia polisy jest załącznikiem do umowy pośrednictwa (art. 181 ust. 3a ugn). Jeśli jej nie dostaniesz, możesz wezwać pośrednika na piśmie do jej przedłożenia w ciągu 7 dni. Jeśli tego nie zrobi, możesz wypowiedzieć umowę ze skutkiem natychmiastowym (art. 181 ust. 3b)."
      },
      {
        "id": "umowa-otwarta-czy-na-wylacznosc",
        "title": "Umowa otwarta czy na wyłączność",
        "body": "**Umowa otwarta** pozwala zlecić sprzedaż kilku biurom. Płacisz temu, kto doprowadzi do transakcji. Minusem bywa mniejsze zaangażowanie agentów i to samo mieszkanie w wielu ogłoszeniach w różnych cenach.\n\n**Umowa na wyłączność** oznacza jednego agenta przez określony czas. W zamian możesz oczekiwać pełnego planu marketingowego i regularnych raportów. Sprawdź w umowie czas jej trwania, warunki wypowiedzenia i co się dzieje, gdy sam znajdziesz kupującego."
      },
      {
        "id": "czy-prowizje-mozna-negocjowac",
        "title": "Czy prowizję można negocjować",
        "body": "Tak, prowizja jest umowna. Argumentami są zwykle: wyższa wartość nieruchomości, umowa na wyłączność, łatwa do sprzedania oferta albo zlecenie kilku transakcji. Negocjuj też zakres usług, nie tylko procent – tańszy agent bez profesjonalnych zdjęć i promocji może w efekcie kosztować więcej przez niższą cenę sprzedaży."
      },
      {
        "id": "prowizja-w-vesteri-collective",
        "title": "Prowizja w Vesteri Collective",
        "body": "Stawkę ustala z Tobą Twój agent, w swojej umowie pośrednictwa. Vesteri nie narzuca stawek klientom. Różnica polega na tym, że płacisz jedną prowizję jednemu agentowi, a nad sprzedażą Twojego mieszkania mogą pracować także inni członkowie sieci, którzy przyprowadzą kupujących. Podział prowizji między agentami to ich wewnętrzne rozliczenie i nie zwiększa Twojego kosztu.\n\n→ [Sprzedaj z agentem sieci](/pl/sprzedajacy)"
      }
    ],
    "faq": [
      {
        "q": "Ile bierze agent nieruchomości?",
        "a": "Nie ma stawki urzędowej. Poradniki branżowe z 2025 r. podają najczęściej 2–3% netto ceny przy sprzedaży mieszkania, plus 23% VAT, a przy najmie zwykle jeden miesięczny czynsz. Dokładną stawkę określa umowa pośrednictwa."
      },
      {
        "q": "Kiedy płaci się prowizję?",
        "a": "Zwykle po zawarciu umowy przyrzeczonej (akt notarialny), czasem częściowo przy umowie przedwstępnej. Termin musi wynikać z umowy pośrednictwa."
      },
      {
        "q": "Czy prowizja zawiera VAT?",
        "a": "Stawki podaje się zwykle netto. Jeśli pośrednik jest czynnym podatnikiem VAT, dolicza 23%. Sprawdź w umowie, czy kwota jest netto czy brutto."
      },
      {
        "q": "Czy przy wyłączności prowizja jest wyższa?",
        "a": "Nie musi być. Wyłączność bywa argumentem do negocjacji niższej stawki, bo agent ma pewność, że jego praca nie przepadnie."
      },
      {
        "q": "Czy kupujący też płaci prowizję?",
        "a": "Tylko jeśli podpisał umowę pośrednictwa, w której się do tego zobowiązał. Zapytaj agenta o to przed pierwszą prezentacją."
      }
    ],
    "related": [
      {
        "label": "Sprzedaż z agentem sieci",
        "href": "/pl/sprzedajacy"
      },
      {
        "label": "Jak sprzedać mieszkanie",
        "href": "/pl/poradnik/jak-sprzedac-mieszkanie"
      },
      {
        "label": "Kupno mieszkania z agentem",
        "href": "/pl/poradnik/kupno-mieszkania-z-agentem"
      },
      {
        "label": "Agent nieruchomości w Krakowie",
        "href": "/pl/agent-nieruchomosci/krakow"
      },
      {
        "label": "Jak działa Vesteri Collective",
        "href": "/pl/jak-dziala-vesteri-collective"
      }
    ],
    "sources": "- Art. 180–181 ugn: https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html\n- Widełki 2–3% netto + VAT, najem = 1 czynsz (2025): https://towerservice.pl/prowizja-biura-nieruchomosci-ile-wynosi-i-jak-negocjowac ; https://marberdom.pl/ile-kosztuje-posrednik-nieruchomosci-stawki-vat-i-jak-obnizyc ; https://rynekpierwotny.pl/wiadomosci-mieszkaniowe/na-czym-zarabia-posrednik-nieruchomosci/7300/ (2–5%, 2025)\n- VAT 23% na pośrednictwo (stawka podstawowa): https://pszczelna.pl/prowizja-biura-nieruchomosci-netto-czy-brutto-vat-w-cenie\n- Limit zwolnienia VAT 240 000 zł od 1.01.2026: ustawa z 24.06.2025, Dz.U. 2025 poz. 896, https://www.dziennikustaw.gov.pl/D2025000089601.pdf ; https://podatki.gov.pl/podatki-firmowe/vat/poradniki-i-informatory/zwolnienie-podmiotowe-od-podatku-vat"
  },
  {
    "href": "/poradnik/jak-zostac-agentem-nieruchomosci",
    "kind": "article",
    "eyebrow": "PORADNIK · DLA AGENTÓW",
    "breadcrumb": "Jak zostać agentem nieruchomości",
    "title": "Jak zostać agentem nieruchomości? Zarobki, licencja, kursy",
    "description": "Wymagania, licencja pośrednika, OC, kursy i zarobki agenta nieruchomości w 2026 roku. Krok po kroku: od pomysłu do pierwszej transakcji.",
    "h1": "Jak zostać agentem nieruchomości w 2026: zarobki, licencja i kursy",
    "lead": "Aby zostać agentem nieruchomości w Polsce, nie potrzebujesz państwowej licencji – zniesiono ją 1 stycznia 2014 r. Jeśli działasz na własny rachunek, musisz mieć firmę i obowiązkowe ubezpieczenie OC pośrednika. Kurs nie jest wymagany, ale bardzo pomaga. Możesz zacząć w biurze, we franczyzie albo jako niezależny agent w sieci.",
    "ctas": [
      {
        "label": "Zgłoś się do Collective",
        "href": "/agents"
      }
    ],
    "sections": [
      {
        "id": "co-robi-agent-nieruchomosci",
        "title": "Co robi agent nieruchomości",
        "body": "Agent nieruchomości (w ustawie: pośrednik w obrocie nieruchomościami) pomaga klientom sprzedać, kupić lub wynająć nieruchomość. Na co dzień to:\n- pozyskiwanie ofert i podpisywanie umów pośrednictwa,\n- sprawdzanie stanu prawnego nieruchomości (księga wieczysta, dokumenty),\n- przygotowanie oferty: zdjęcia, opis, publikacja, prezentacje,\n- szukanie kupujących i wyszukiwanie ofert dla kupujących,\n- negocjacje ceny i warunków,\n- pomoc przy umowie przedwstępnej i aktach notarialnych.\n\nZakres usługi określa umowa pośrednictwa, która musi mieć formę pisemną lub elektroniczną. Dużo pracy dzieje się poza biurem: telefony, spotkania, prezentacje wieczorami i w weekendy. Jeśli lubisz ludzi, potrafisz negocjować i nie przeraża Cię dochód zależny od wyników, to zawód może Ci pasować."
      },
      {
        "id": "czy-potrzebna-jest-licencja-posrednika-nieruchomosci",
        "title": "Czy potrzebna jest licencja pośrednika nieruchomości?",
        "body": "Nie. Do końca 2013 r. pośrednik musiał mieć licencję zawodową. Ustawa deregulacyjna zniosła ten wymóg z dniem 1 stycznia 2014 r. Od tego czasu pośrednictwem może się zajmować każdy, kto spełni pozostałe warunki, przede wszystkim posiada ubezpieczenie OC.\n\nNa rynku nadal funkcjonują dobrowolne licencje i certyfikaty wydawane przez organizacje branżowe (stowarzyszenia i federacje pośredników). Nie są obowiązkowe, ale dla części klientów są sygnałem profesjonalizmu, a członkostwo zwykle wiąże się ze szkoleniami i kodeksem etyki."
      },
      {
        "id": "wymagania-wyksztalcenie-dzialalnosc-oc",
        "title": "Wymagania: wykształcenie, działalność, OC",
        "body": "**Wykształcenie.** Prawo nie wymaga konkretnego kierunku ani dyplomu. Przydaje się wiedza z prawa nieruchomości, podstaw podatków i umiejętność sprzedaży.\n\n**Forma pracy.** Wielu agentów działa na własnej działalności gospodarczej (B2B) i współpracuje z biurem albo prowadzi własne. Spotyka się też umowę o pracę z podstawą i prowizją.\n\n**Ubezpieczenie OC.** Pośrednik w obrocie nieruchomościami podlega obowiązkowemu ubezpieczeniu OC (art. 181 ust. 3 ustawy o gospodarce nieruchomościami). Minimalna suma gwarancyjna to równowartość 25 000 euro na jedno i na wszystkie zdarzenia w okresie ubezpieczenia (rozporządzenie MF z 26 kwietnia 2019 r.). Obowiązek powstaje najpóźniej dzień przed rozpoczęciem czynności pośrednictwa. Kopię polisy dołącza się do każdej umowy pośrednictwa. Jeśli pracujesz pod nadzorem innego pośrednika, obejmuje Cię jego polisa."
      },
      {
        "id": "kursy-dla-agentow-nieruchomosci-jak-wybrac",
        "title": "Kursy dla agentów nieruchomości: jak wybrać",
        "body": "Kurs nie jest obowiązkowy, ale skraca naukę na własnych błędach. Przy wyborze sprawdź:\n1. **Program.** Czy obejmuje stan prawny nieruchomości, umowy pośrednictwa, podatki, marketing ofert i negocjacje?\n2. **Prowadzących.** Czy to praktycy, którzy sami prowadzą transakcje?\n3. **Praktykę.** Czy są ćwiczenia na realnych dokumentach i symulacje rozmów z klientem?\n4. **Formę.** Stacjonarnie, online, studia podyplomowe – zależnie od czasu i budżetu.\n5. **Opinie absolwentów** i to, czy kurs daje dostęp do mentora lub stażu.\n\nKoszt i czas trwania kursów bardzo się różnią, dlatego porównaj kilka aktualnych ofert."
      },
      {
        "id": "ile-zarabia-agent-nieruchomosci",
        "title": "Ile zarabia agent nieruchomości?",
        "body": "Krótko: to zależy przede wszystkim od liczby zamkniętych transakcji. Większość agentów jest rozliczana prowizyjnie, więc dochód bywa nieregularny, szczególnie na początku.\n\nPubliczne zestawienia płacowe dla tego zawodu są nieliczne i zwykle nie podają roku badania, dlatego nie przytaczamy tu konkretnych kwot. Dostępne raporty dotyczą głównie osób zatrudnionych w biurach. Nie pokazują dochodów agentów na własnej działalności, którzy zatrzymują większą część prowizji, ale sami ponoszą koszty (ZUS, OC, marketing, samochód).\n\n### Od czego zależą zarobki\n- **Liczba transakcji** i średnia cena nieruchomości na Twoim rynku,\n- **Stawka prowizji** – ustalana indywidualnie w umowie z klientem,\n- **Podział prowizji** z biurem lub siecią,\n- **Doświadczenie i polecenia** – z czasem więcej klientów przychodzi z rekomendacji.\n\n### Przykład (ilustracja, nie średnia rynkowa)\nSprzedajesz mieszkanie za 600 000 zł z prowizją 2% netto: to 12 000 zł netto prowizji. Ile z tego zostaje Tobie, zależy od umowy z biurem albo siecią i od Twoich kosztów.\n\n### Zarobki na start\nPierwsze miesiące to zwykle budowanie bazy ofert i kontaktów. Do pierwszej transakcji może minąć kilka miesięcy, dlatego warto mieć oszczędności lub inne źródło dochodu na ten czas."
      },
      {
        "id": "gdzie-zaczac-biuro-franczyza-czy-niezaleznie-w-sieci",
        "title": "Gdzie zacząć: biuro, franczyza czy niezależnie w sieci",
        "body": "| Model | Plusy | Minusy |\n|---|---|---|\n| Biuro nieruchomości (pracownik/współpracownik) | Szkolenia, marka, oferty biura | Mniejsza część prowizji, mniej swobody |\n| Franczyza | Rozpoznawalna marka, system i szkolenia | Opłaty franczyzowe, narzucone standardy |\n| Własna działalność, samodzielnie | Pełna prowizja i swoboda | Wszystko na Twojej głowie, mała baza ofert |\n| Niezależnie w sieci agentów (np. Vesteri Collective) | Własna marka, oferty i kupujący innych członków, jasny podział prowizji | Trzeba aktywnie współpracować i przestrzegać zasad sieci |"
      },
      {
        "id": "start-w-vesteri-collective-jako-poczatkujacy-agent",
        "title": "Start w Vesteri Collective jako początkujący agent",
        "body": "Vesteri Collective przyjmuje także agentów, którzy dopiero zaczynają. Pracujesz pod własną marką i masz swoich klientów, a od pierwszego dnia możesz współpracować z doświadczonymi członkami sieci: polecać im klientów albo prowadzić wspólne transakcje. Podział prowizji przy współpracy jest spisany w zasadach sieci ([zasady sieci](/pl/jak-dziala-vesteri-collective)). Do dyspozycji masz też narzędzia: prezentacje LIVE, webinary i asystenta AI.\n\nCo musisz mieć: działalność, ubezpieczenie OC pośrednika i akceptację zasad Fair Play & Trust. Zgłoszenie i członkostwo są bezpłatne.\n\n> **Dołącz też bez doświadczenia.** [Zgłoś się do Collective →](/pl/dla-agentow)"
      },
      {
        "id": "pierwsze-90-dni-plan-krok-po-kroku",
        "title": "Pierwsze 90 dni: plan krok po kroku",
        "body": "1. **Tydzień 1–2:** wybierz model pracy (biuro, franczyza, sieć). Zarejestruj działalność, jeśli działasz na swój rachunek.\n2. **Przed pierwszą umową:** kup polisę OC pośrednika (najpóźniej dzień przed rozpoczęciem czynności).\n3. **Tydzień 2–4:** kurs lub mentoring; przygotuj wzór umowy pośrednictwa.\n4. **Miesiąc 1–2:** wybierz specjalizację (dzielnica, typ nieruchomości) i zbuduj bazę kontaktów.\n5. **Miesiąc 2–3:** pozyskaj pierwsze oferty, przygotuj dobre zdjęcia i opisy, organizuj prezentacje – także online.\n6. **Cały czas:** współpracuj z innymi agentami. Klient, którego nie obsłużysz własną ofertą, nie musi być stracony."
      }
    ],
    "faq": [
      {
        "q": "Czy agent nieruchomości musi mieć licencję?",
        "a": "Nie. Licencja pośrednika w obrocie nieruchomościami nie jest wymagana od 1 stycznia 2014 r. Obowiązkowe jest ubezpieczenie OC pośrednika z minimalną sumą gwarancyjną 25 000 euro."
      },
      {
        "q": "Ile zarabia początkujący agent nieruchomości?",
        "a": "Nie ma wiarygodnych, aktualnych statystyk dla początkujących. Na starcie dochód jest zwykle niższy i nieregularny, bo zależy od pierwszych zamkniętych transakcji, stawki prowizji i jej podziału z biurem lub siecią."
      },
      {
        "q": "Ile trwa kurs i ile kosztuje?",
        "a": "To zależy od formy: od krótkich szkoleń online po studia podyplomowe. Porównaj program, prowadzących i praktykę, a cenę sprawdź w aktualnej ofercie organizatora."
      },
      {
        "q": "Czy można być agentem na B2B/JDG?",
        "a": "Tak, to najczęstszy model. Na własnej działalności musisz mieć własne OC pośrednika."
      },
      {
        "q": "Czy można łączyć pracę agenta z inną pracą?",
        "a": "Prawo tego nie zabrania. W praktyce prezentacje odbywają się często po południu i w weekendy, więc da się zacząć dorywczo, ale klienci oczekują szybkiego kontaktu."
      },
      {
        "q": "Czy Vesteri Collective przyjmuje początkujących agentów?",
        "a": "Tak. Możesz dołączyć bez doświadczenia, jeśli prowadzisz działalność, masz ubezpieczenie OC pośrednika i przyjmujesz zasady Fair Play & Trust. Zgłoszenie złożysz na stronie dla agentów."
      }
    ],
    "related": [
      {
        "label": "Dla agentów: dołącz do Vesteri Collective",
        "href": "/pl/dla-agentow"
      },
      {
        "label": "Jak działa Vesteri Collective",
        "href": "/pl/jak-dziala-vesteri-collective"
      },
      {
        "label": "Prowizja agenta nieruchomości",
        "href": "/pl/poradnik/prowizja-agenta-nieruchomosci"
      }
    ],
    "sources": "- Art. 181 ust. 3–3b ugn: https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html\n- Rozporządzenie MF z 26.04.2019 (Dz.U. 2019 poz. 804): https://eli.gov.pl/api/acts/DU/2019/804/text.html\n- Deregulacja od 1.01.2014: https://www.rp.pl/ekonomia/art12630581-uwolnione-zawody-z-nowymi-ubezpieczeniami\n- OC, obowiązki i kara: https://pprn.pl/posrednicy/ubezpieczenia-oc-posrednikow/\n- Fakty o Vesteri: www.vesteri.com llms.txt (26.10.2026)"
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
