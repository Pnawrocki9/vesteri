// Polish-only city and Poradnik pages; five articles updated from the owner’s
// do_publikacji.zip package on 2026-10-30. Foreign-property guides retain their
// existing copy. FAQ answers
// are plain text because they feed both the visible FAQ and FAQPage JSON-LD.
// "{APP_URL}" marks the marketplace link and is resolved to MARKETPLACE_URL.
import { MARKETPLACE_URL } from '@/lib/site';

export type GuidePathname =
  | '/agent-nieruchomosci/krakow'
  | '/poradnik/jak-sprzedac-mieszkanie'
  | '/poradnik/kupno-mieszkania-z-agentem'
  | '/poradnik/prowizja-agenta-nieruchomosci'
  | '/poradnik/jak-zostac-agentem-nieruchomosci'
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
  modified?: string;
  ctas: { label: string; href: string }[];
  sections: { id: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
  sources: string;
};

// First publication of this batch; bump dateModified when copy changes.
export const GUIDES_PUBLISHED = '2026-10-26';
export const GUIDES_MODIFIED = '2026-10-28';

const raw: GuideContent[] = [
  {
    "href": "/agent-nieruchomosci/krakow",
    "kind": "webpage",
    "eyebrow": "AGENT NIERUCHOMOŚCI · KRAKÓW",
    "breadcrumb": "Agent nieruchomości w Krakowie",
    "title": "Agent nieruchomości w Krakowie | Vesteri",
    "description": "Agent nieruchomości w Krakowie z Vesteri Collective. Poznaj obsługę sprzedaży i zakupu, przeglądaj oferty i kontaktuj się z agentami.",
    "h1": "Agent nieruchomości w Krakowie",
    "lead": "Sprzedajesz albo kupujesz mieszkanie w Krakowie? Zobacz, jak pracuje rzetelny agent nieruchomości, co powinien dla Ciebie zrobić na każdym etapie transakcji i jakie dokumenty sprawdzić, zanim pojawi się kupujący lub zanim wpłacisz zadatek. W Vesteri Market możesz porównywać oferty i kontaktować się bezpośrednio z agentami, którzy je prezentują.",
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
        "body": "Vesteri Collective to społeczność niezależnych agentów i biur nieruchomości, Vesteri Market oraz Vesteri Channels do zdobywania wiedzy i wymiany doświadczeń.\n\nW Vesteri Market porównujesz oferty i kontaktujesz się bezpośrednio z agentem prezentującym wybraną nieruchomość. Jeśli sprzedajesz, ustalasz z agentem zakres usług, wynagrodzenie i plan promocji, w tym publikację oferty. Możliwość prezentacji online zależy od danej nieruchomości i agenta.\n\nPublikowanie ofert wymaga weryfikacji tożsamości, działalności i ubezpieczenia OC pośrednika. Szczegóły: [Jak działa Vesteri Collective](/pl/jak-dziala-vesteri-collective)."
      },
      {
        "id": "jak-wyglada-wspolpraca-z-agentem-proces-krok-po-kroku",
        "title": "Jak wygląda współpraca z agentem – proces krok po kroku",
        "body": "Dobry agent nie zaczyna od wystawienia ogłoszenia. Zaczyna od zrozumienia Twojej sytuacji: po co sprzedajesz lub kupujesz, w jakim terminie, z jakim budżetem i jakie masz ograniczenia. Typowa ścieżka współpracy wygląda tak:\n\n- **Pierwsza rozmowa i diagnoza.** Agent ustala, czy rozmawia z właścicielem (lub osobą decyzyjną), jaki jest cel transakcji, termin, oczekiwania cenowe i stan dokumentów. Uczciwy agent już na tym etapie powie, czy jest w stanie zrealizować Twoje oczekiwania.\n- **Spotkanie i oględziny.** Agent ogląda nieruchomość, notuje atuty, wady i elementy do poprawy, pyta o historię lokalu (jak i kiedy został nabyty, czy są współwłaściciele, hipoteka, osoby zameldowane).\n- **Weryfikacja stanu prawnego.** Zanim oferta trafi do internetu, agent sprawdza księgę wieczystą i dokument, na podstawie którego właściciel nabył nieruchomość (szczegóły niżej).\n- **Wycena i strategia ceny.** Agent pokazuje ceny transakcyjne podobnych lokali i wyjaśnia, jak cena ofertowa wpłynie na liczbę zapytań i czas sprzedaży.\n- **Umowa pośrednictwa.** Dopiero gdy wiesz, co agent zrobi i za ile, podpisujecie umowę pośrednictwa – w formie pisemnej lub elektronicznej pod rygorem nieważności (art. 180 ust. 3 ustawy o gospodarce nieruchomościami), z kopią polisy OC pośrednika w załączniku.\n- Przygotowanie i promocja oferty, prezentacje, negocjacje, umowa rezerwacyjna lub przedwstępna, akt notarialny i wydanie lokalu – na każdym z tych etapów agent koordynuje terminy, dokumenty i komunikację między stronami."
      },
      {
        "id": "sprzedaz-mieszkania-w-krakowie-jak-przygotowac-oferte",
        "title": "Sprzedaż mieszkania w Krakowie: jak przygotować ofertę",
        "body": "**Cena zgodna z rynkiem.** Według danych NBP (baza BaRN) średnia cena transakcyjna mieszkania na krakowskim rynku wtórnym w II kwartale 2026 r. wyniosła 14 792 zł/m², a średnia cena ofertowa 16 838 zł/m². Ceny w ogłoszeniach są więc zwykle wyższe niż te, za które mieszkania faktycznie się sprzedają. To średnie dla całego miasta, więc konkretną wycenę trzeba zrobić dla Twojej lokalizacji i standardu. Ceny transakcyjne z okolicy sprawdzisz w Rejestrze Cen Nieruchomości: od 13 lutego 2026 r. dane RCN są udostępniane bezpłatnie, także na mapie w serwisie geoportal.gov.pl (moduł „Rejestr Cen Nieruchomości”).\n\n**Rynek wtórny a pierwotny.** W tym samym kwartale średnia cena transakcyjna na krakowskim rynku pierwotnym wyniosła według NBP 15 923 zł/m². Mieszkanie z rynku wtórnego konkuruje więc z nowymi inwestycjami. Atutami bywają lokalizacja, gotowość do zamieszkania i brak czekania na odbiór.\n\n**Strategia ceny.** Cena ofertowa to narzędzie marketingowe – ma uruchomić popyt, a nie tylko potwierdzić oczekiwania właściciela. Kupujący porównuje Twoje mieszkanie z najtańszymi sensownymi alternatywami w okolicy. Rzetelny agent przedstawia zwykle kilka scenariuszy (szybka sprzedaż, cena rynkowa, cena testowa powyżej rynku) i z góry umawia się z Tobą, po jakim czasie i na podstawie jakich danych (liczba zapytań, prezentacji, opinie oglądających) ocenicie, czy cenę utrzymać, czy skorygować.\n\n**Prezentacja oferty.** Profesjonalna oferta to uporządkowane wnętrze, dobre zdjęcia w dziennym świetle (w praktyce co najmniej kilkanaście–dwadzieścia ujęć), rzut lokalu z pomiarem, opis pisany pod konkretną grupę kupujących oraz – coraz częściej – krótki film lub prezentacja na żywo. Jedna oferta powinna mieć w internecie jedną cenę, jeden opis i jeden zestaw zdjęć; różne ceny tego samego mieszkania w wielu ogłoszeniach osłabiają Twoją pozycję w negocjacjach.\n\n### Dokumenty, które agent sprawdzi przed publikacją oferty\n\nKupujący, jego bank i notariusz i tak zapytają o stan prawny, dlatego dobry agent kompletuje dokumenty od początku, a nie tydzień przed aktem. Zwykle chodzi o:\n\n- księgę wieczystą – numer KW i aktualna treść wszystkich działów (dział I – oznaczenie nieruchomości, dział II – właściciel, dział III – ograniczenia, roszczenia, służebności, dział IV – hipoteki); dane z KW powinny być zgodne z dokumentami i ze stanem faktycznym,\n- akt nabycia, czyli dokument potwierdzający prawo własności i sposób nabycia nieruchomości: akt notarialny umowy sprzedaży, darowizny lub ustanowienia odrębnej własności lokalu, postanowienie sądu o stwierdzeniu nabycia spadku albo notarialny akt poświadczenia dziedziczenia, umowa o dział spadku lub podział majątku, a w spółdzielni – przydział lub umowa ze spółdzielnią; sposób nabycia ma znaczenie m.in. dla podatku od sprzedaży i dla tego, czy potrzebne będą dodatkowe zaświadczenia,\n- przy nabyciu w drodze spadku lub darowizny – dokument z urzędu skarbowego potwierdzający rozliczenie podatku od spadków i darowizn (albo zwolnienie z niego); dokładny wymóg ustala notariusz,\n- zaświadczenie od wspólnoty lub spółdzielni o braku zaległości w opłatach,\n- informację o osobach zameldowanych (lub o ich braku),\n- przy spółdzielczym własnościowym prawie do lokalu – zaświadczenie ze spółdzielni o przysługującym prawie (zwłaszcza gdy lokal nie ma założonej księgi wieczystej),\n- przy hipotece – zaświadczenie banku o saldzie zadłużenia i zgodę banku na wykreślenie hipoteki po spłacie z ceny sprzedaży,\n- świadectwo charakterystyki energetycznej,\n- jeśli dotyczy: pełnomocnictwa, zgodę małżonka (gdy lokal należy do majątku wspólnego).\n\nAgent nie zastępuje notariusza ani prawnika – ostateczną listę dokumentów do aktu potwierdza notariusz. Rolą agenta jest jednak wyłapać ryzyka wcześniej (np. nieuregulowany spadek, współwłaściciel za granicą, roszczenie w dziale III KW) i nie obiecywać terminu, dopóki stan prawny nie jest jasny."
      },
      {
        "id": "kupno-mieszkania-w-krakowie-z-agentem",
        "title": "Kupno mieszkania w Krakowie z agentem",
        "body": "Agent kupującego pomaga zawęzić poszukiwania do dzielnic i budżetu, sprawdza stan prawny (księga wieczysta, obciążenia, sposób rozliczenia ze spółdzielnią) i negocjuje cenę. Przed zakupem warto, by razem z Tobą lub notariuszem przeanalizował nie tylko księgę wieczystą, ale też akt nabycia sprzedającego – z niego wynika, czy sprzedający jest jedynym właścicielem, czy nieruchomość pochodzi np. ze spadku lub darowizny i czy wszystkie formalności zostały zamknięte. Agent pomoże też ustalić sposób finansowania (gotówka, kredyt, sprzedaż innej nieruchomości) i zgrać terminy umowy przedwstępnej, decyzji kredytowej i aktu notarialnego.\n\nW Vesteri Market możesz samodzielnie przeglądać oferty i kontaktować się z agentami wskazanymi przy nieruchomościach.\n\n**Podatek PCC.** Przy zakupie na rynku wtórnym zapłacisz podatek od czynności cywilnoprawnych – 2% wartości rynkowej (pobiera go notariusz przy akcie). Od 31 sierpnia 2023 r. nie płacisz go, jeśli kupujesz pierwsze mieszkanie lub dom: zwolnienie przysługuje osobie fizycznej, która ani w dniu zakupu, ani wcześniej nie miała prawa własności mieszkania, domu jednorodzinnego ani spółdzielczego własnościowego prawa do lokalu mieszkalnego lub domu – ani udziału w tych prawach (wyjątek: udział do 50% nabyty w spadku). Przy zakupie razem z kimś warunek musi spełnić każdy kupujący (art. 9 pkt 17 ustawy o PCC). Jeśli kupujesz od dewelopera i sprzedaż jest opodatkowana VAT, PCC nie występuje (art. 2 pkt 4 ustawy o PCC). Uwaga: gdy sprzedaż nieruchomości przez przedsiębiorcę jest zwolniona z VAT, PCC 2% co do zasady jest należny."
      },
      {
        "id": "ile-kosztuje-agent-nieruchomosci-w-krakowie",
        "title": "Ile kosztuje agent nieruchomości w Krakowie",
        "body": "Wynagrodzenie agenta to zwykle prowizja liczona procentowo od ceny transakcyjnej, do której doliczany jest VAT. Jej wysokość i to, kto ją płaci, ustalasz w umowie pośrednictwa. Nie ma stawki urzędowej. Sprawdź w umowie także, kiedy prowizja staje się wymagalna (przy umowie przedwstępnej, przy akcie czy w ratach) i czy należy się ona po wygaśnięciu umowy, jeśli kupi osoba wskazana przez agenta. Więcej o tym, od czego zależy prowizja: [poradnik o prowizji](/pl/poradnik/prowizja-agenta-nieruchomosci)."
      },
      {
        "id": "jestes-agentem-z-krakowa-dolacz-do-collective",
        "title": "Jesteś agentem z Krakowa? Dołącz do Collective",
        "body": "Pracujesz w Krakowie jako agent albo dopiero zaczynasz? Zachowaj własną markę i klientów. Dołącz do społeczności, która dzieli się wiedzą i doświadczeniem w Vesteri Channels, oraz publikuj oferty w Vesteri Market po zatwierdzeniu konta. Każdemu agentowi po rejestracji wysyłamy zaproszenie do Channels e-mailem. → [Poznaj Collective](/pl/dla-agentow)"
      }
    ],
    "faq": [
      {
        "q": "Jak znaleźć dobrego agenta nieruchomości w Krakowie?",
        "a": "Sprawdź, czy ma aktualne ubezpieczenie OC pośrednika (kopia polisy musi być załączona do umowy), ile transakcji przeprowadził w Twojej dzielnicy i jak będzie promował ofertę. Poproś o wzór umowy przed podpisaniem i o pisemny plan działań: co agent zrobi, w jakim terminie i jak będzie raportował postępy. Dobry agent mówi prawdę o cenie, nie obiecuje kwoty oderwanej od rynku tylko po to, żeby podpisać umowę, i od początku pyta o dokumenty. Agenci Vesteri Collective przechodzą weryfikację przed uzyskaniem uprawnień do publikowania ofert."
      },
      {
        "q": "Ile wynosi prowizja agenta w Krakowie?",
        "a": "Nie ma jednej stawki – prowizję ustala się indywidualnie w umowie pośrednictwa, najczęściej jako procent ceny plus VAT. Zapytaj, czy podana stawka jest netto czy brutto i kto ją płaci. Więcej w poradniku o prowizji."
      },
      {
        "q": "Ile trwa sprzedaż mieszkania w Krakowie?",
        "a": "To zależy przede wszystkim od ceny w stosunku do rynku, lokalizacji i stanu mieszkania, a także od tego, czy dokumenty są gotowe do transakcji. Agent na podstawie transakcji z okolicy (Rejestr Cen Nieruchomości) pomoże ustalić cenę, która nie wydłuży sprzedaży."
      },
      {
        "q": "Czy agent pomoże przy kredycie?",
        "a": "Agent może skierować Cię do doradcy kredytowego i dopilnować terminów między umową przedwstępną a aktem notarialnym. Samą ofertę kredytu przygotowuje bank lub doradca."
      },
      {
        "q": "Dlaczego agent prosi o dane osobowe i pyta o źródło pieniędzy?",
        "a": "Pośrednik w obrocie nieruchomościami jest instytucją obowiązaną w rozumieniu ustawy o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu. Musi zidentyfikować klienta (a w przypadku firmy – także beneficjenta rzeczywistego), ocenić ryzyko, zapytać, czy klient zajmuje eksponowane stanowisko polityczne (PEP), oraz w uzasadnionych przypadkach o cel transakcji i pochodzenie środków. Dane przetwarza zgodnie z RODO, a zgody marketingowe muszą być dobrowolne i odrębne."
      },
      {
        "q": "Czy mogę sprzedać mieszkanie w Krakowie, mieszkając w innym mieście?",
        "a": "Tak. Agent może prowadzić prezentacje, w tym na żywo online, a do aktu notarialnego możesz ustanowić pełnomocnika. Umowę pośrednictwa można zawrzeć w formie elektronicznej. Jeśli jesteś konsumentem i podpisujesz umowę poza biurem agenta albo na odległość, masz 14 dni na odstąpienie od niej bez podania przyczyny (ustawa o prawach konsumenta)."
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
    "sources": "- Ceny transakcyjne NBP, Kraków, II kw. 2026: wtórny 14 792 zł/m², pierwotny 15 923 zł/m² – źródło: zametr.pl, „Kraków – ceny mieszkań i zmiany cen”, sekcja „Ceny transakcyjne NBP” ( <https://zametr.pl/ceny-mieszkan/krakow> , dostęp 26.10.2026). Średnia cena ofertowa NBP na rynku wtórnym 16 838 zł/m² (NBP BaRN, II kw. 2026) wg zgodnych źródeł: <https://blog.ongeo.pl/ceny-mieszkan-ii-kwartal-2026-nbp> , <https://hesiahome.pl/blog/ceny-transakcyjne-mieszkan> , <https://vtgroup-realestate.pl/blog/ceny-mieszkan-krakow-2026/> , <https://www.activ-investment.eu/blog/rynek-mieszkaniowy-krakow-ii-kwartal-2026/> .\n- RCN bezpłatny od 13.02.2026: <https://www.geoportal.gov.pl/aktualnosci/zmiany-w-udostepnianiu-danych-z-rcn-nowelizacja-rozporzadzenia-w-sprawie-egib/> ; <https://www.geoportal.gov.pl/pl/dane/rejestr-cen-nieruchomosci-rcn/> (ustawa z 26.09.2025, Dz.U. poz. 1542)\n- Art. 180–181 ugn (umowa pośrednictwa, OC): <https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html>\n- PCC: art. 2 pkt 4, art. 7, art. 9 pkt 17 ustawy o PCC (t.j. Dz.U. 2024 poz. 295): <https://eli.gov.pl/api/acts/DU/2024/295/text.html> ; zwolnienie od 31.08.2023: <https://www.gov.pl/web/rozwoj-technologia/kupno-mieszkania-lub-domu-na-rynku-wtornym-bez-podatku-pcc>\n- Ustawa z 1.03.2018 o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (pośrednik jako instytucja obowiązana, art. 2 ust. 1 pkt 18)\n- Ustawa z 30.05.2014 o prawach konsumenta (prawo odstąpienia, 14 dni)\n- Fakty o Vesteri: www.vesteri.com llms.txt (26.10.2026)",
    "modified": "2026-10-30"
  },
  {
    "href": "/poradnik/jak-sprzedac-mieszkanie",
    "kind": "article",
    "eyebrow": "PORADNIK · SPRZEDAŻ",
    "breadcrumb": "Jak sprzedać mieszkanie",
    "title": "Jak sprzedać mieszkanie szybko i bezpiecznie: krok po kroku | Vesteri",
    "description": "Jak sprzedać mieszkanie: dokumenty, wycena, umowa z agentem, notariusz i podatek. Praktyczny przewodnik dla sprzedających w 2026 roku.",
    "h1": "Jak sprzedać mieszkanie szybko i bezpiecznie: krok po kroku",
    "lead": "Sprzedaż mieszkania to kilka etapów: komplet dokumentów, realna cena, dobra prezentacja, bezpieczna obsługa kupujących, negocjacje, umowa przedwstępna, akt notarialny i wydanie lokalu. Jeśli sprzedajesz przed upływem 5 lat od końca roku zakupu, musisz też rozliczyć podatek. Poniżej opisujemy każdy krok, pokazujemy, jak w praktyce pracuje rzetelny agent, i podpowiadamy, kiedy warto oddać mu sprzedaż.",
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
        "body": "Kupujący, jego bank i notariusz zapytają o stan prawny lokalu, więc warto zebrać papiery przed publikacją ogłoszenia – braki wykryte tuż przed aktem to najczęstsza przyczyna przesuniętych terminów. Zwykle potrzebne są:\n\n- numer księgi wieczystej i sprawdzenie jej treści we wszystkich działach – oznaczenie lokalu, właściciel, ograniczenia i roszczenia, hipoteki (treść KW można sprawdzić bezpłatnie w systemie Ministerstwa Sprawiedliwości: ekw.ms.gov.pl),\n- akt nabycia, czyli dokument potwierdzający prawo własności i sposób nabycia nieruchomości: akt notarialny umowy sprzedaży, darowizny lub ustanowienia odrębnej własności lokalu, postanowienie sądu o stwierdzeniu nabycia spadku albo notarialny akt poświadczenia dziedziczenia, umowa o dział spadku lub podział majątku, przydział spółdzielczy,\n- przy nabyciu w spadku lub darowiźnie – dokument z urzędu skarbowego potwierdzający rozliczenie podatku od spadków i darowizn albo zwolnienie z niego,\n- zaświadczenie o braku zaległości w opłatach (od wspólnoty lub spółdzielni) i o braku osób zameldowanych,\n- przy spółdzielczym własnościowym prawie: zaświadczenie ze spółdzielni,\n- świadectwo charakterystyki energetycznej,\n- jeśli dotyczy: zaświadczenie banku o saldzie kredytu i zgoda na wykreślenie hipoteki, pełnomocnictwo (np. gdy właściciel przebywa za granicą), zgoda małżonka przy lokalu z majątku wspólnego.\n\nDokładną listę potwierdzi notariusz, który będzie sporządzał akt. Jeśli w KW jest hipoteka, ustal z bankiem, jak zostanie spłacona z ceny sprzedaży.\n\nAgent zwykle prosi też o wypełnienie karty opisu nieruchomości (parametry, stan techniczny, instalacje, forma własności, numer KW, obciążenia, sposób i data nabycia) i o podpisanie oświadczenia, że dane są zgodne ze stanem faktycznym i prawnym. Dzięki temu oferta nie zawiera błędów, a kupujący dostaje rzetelne informacje."
      },
      {
        "id": "krok-2-wycena-ile-naprawde-jest-warte-mieszkanie",
        "title": "Krok 2. Wycena: ile naprawdę jest warte mieszkanie",
        "body": "Ceny w ogłoszeniach to oczekiwania sprzedających, a nie ceny zawartych transakcji. Ceny transakcyjne z Twojej okolicy sprawdzisz w Rejestrze Cen Nieruchomości: od 13 lutego 2026 r. dane RCN są udostępniane bezpłatnie, także na mapie w serwisie geoportal.gov.pl. Porównuj lokale podobne pod względem metrażu, piętra, stanu i roku budowy. Agent przygotuje taką analizę za Ciebie i pomoże ustalić cenę wyjściową z marginesem na negocjacje.\n\nRzetelny agent nie obiecuje najwyższej ceny tylko po to, żeby podpisać umowę. Zamiast tego przedstawia scenariusze:\n\n- cena poniżej konkurencji – gdy liczy się szybka sprzedaż; daje największe zainteresowanie w pierwszych tygodniach,\n- cena rynkowa – przy standardowym terminie sprzedaży; po kilku tygodniach ocenia się liczbę zapytań i prezentacji,\n- cena testowa powyżej rynku – przy unikalnej nieruchomości i małej podaży; z góry ustala się, kiedy i o ile nastąpi korekta, jeśli nie będzie wartościowych zapytań.\n\nZbyt wysoka cena zwykle nie „zostawia miejsca na negocjacje”, tylko wydłuża sprzedaż i sprawia, że oferta się „opatruje”."
      },
      {
        "id": "krok-3-samodzielnie-czy-z-agentem",
        "title": "Krok 3. Samodzielnie czy z agentem?",
        "body": "|  | Samodzielnie | Z agentem |\n| --- | --- | --- |\n| Koszt | brak prowizji | prowizja ustalona w umowie (zob. [prowizja agenta](/pl/poradnik/prowizja-agenta-nieruchomosci)) |\n| Wycena | sam porównujesz ogłoszenia i RCN | analiza transakcji z okolicy |\n| Dokumenty i stan prawny | sam kompletujesz i sprawdzasz | agent weryfikuje KW i akt nabycia, kompletuje zaświadczenia i koordynuje z notariuszem |\n| Ogłoszenia i zdjęcia | robisz sam | po stronie agenta |\n| Prezentacje i bezpieczeństwo | w Twoim czasie, oglądający często anonimowi | agent umawia i prowadzi, weryfikuje oglądających |\n| Negocjacje | bezpośrednio z kupującym | agent jako pośrednik |\n| Formalności | sam kompletujesz dokumenty | agent pomaga i koordynuje z notariuszem |\n\nSamodzielna sprzedaż ma sens, gdy masz czas, znasz rynek i masz już kupującego. Agent przydaje się, gdy zależy Ci na czasie, mieszkasz w innym mieście albo nie chcesz sam prowadzić prezentacji, selekcji kupujących i negocjacji.\n\nPośrednik musi mieć obowiązkowe ubezpieczenie OC, a kopię polisy dołącza do umowy pośrednictwa (art. 181 ustawy o gospodarce nieruchomościami). Umowa pośrednictwa wymaga formy pisemnej lub elektronicznej pod rygorem nieważności. Jeśli podpisujesz ją jako konsument poza biurem agenta albo na odległość, masz 14 dni na odstąpienie bez podania przyczyny."
      },
      {
        "id": "krok-4-umowa-na-wylacznosc-kiedy-sie-oplaca",
        "title": "Krok 4. Umowa na wyłączność: kiedy się opłaca",
        "body": "Umowa otwarta pozwala współpracować z wieloma biurami naraz. Umowa na wyłączność oznacza jednego pośrednika na określony czas. Wyłączność ma sens, gdy agent w zamian zobowiązuje się do konkretnych działań, np. sesji zdjęciowej, promocji płatnej i regularnych raportów. Dobrze prowadzona wyłączność nie zawęża rynku: agent udostępnia ofertę współpracującym pośrednikom, więc ich klienci także ją zobaczą – ale z jedną ceną, jednym opisem i jednym standardem zdjęć.\n\nPrzed podpisaniem sprawdź czas trwania umowy, warunki wypowiedzenia, obowiązek wypowiedzenia wcześniejszych umów z innymi biurami i to, czy prowizja należy się także wtedy, gdy sam znajdziesz kupującego. Uczciwe umowy przewidują w takiej sytuacji np. zwrot uzgodnionych kosztów zamiast pełnej prowizji albo wskazanie z góry kręgu osób (rodzina, znajomi), przy sprzedaży którym prowizja nie obowiązuje.\n\nPublikację w Vesteri Market możesz uzgodnić z zatwierdzonym agentem Collective w ramach planu promocji nieruchomości.\n\n### Plan marketingowy, którego możesz oczekiwać\n\n- **Analiza nieruchomości:** dokumenty, stan prawny, układ, standard, lokalizacja i potencjał sprzedażowy.\n- **Strategia ceny:** rekomendacja na podstawie rynku, konkurencji i popytu.\n- **Przygotowanie oferty:** porządek i drobne naprawy, profesjonalne zdjęcia (w praktyce co najmniej ok. 20 ujęć), rzut lokalu z pomiarem, opis pisany pod grupę docelową (dla kogo to mieszkanie ma sens i dlaczego), w razie potrzeby film, wizualizacje lub home staging.\n- **Publikacja i promocja:** portale ogłoszeniowe, strona agenta lub biura, wspólne bazy ofert z innymi pośrednikami, media społecznościowe, baza własnych klientów, baner, dni otwarte; dla ofert premium także sprzedaż poza ogłoszeniami (off-market).\n- Publikacja tylko za Twoją pisemną akceptacją (np. e-mailem) i regularne odświeżanie ofert oraz kontrola ich widoczności na portalach.\n- **Obsługa zainteresowanych:** selekcja zapytań, weryfikacja potrzeb i sposobu finansowania.\n- Prezentacje i informacja zwrotna po każdej z nich.\n- **Raporty:** liczba zapytań i prezentacji, opinie oglądających, porównanie z konkurencją, statystyki ogłoszeń i rekomendacja kolejnego kroku (utrzymać cenę, zmienić zdjęcie główne, skorygować cenę, zmienić grupę docelową).\n- **Negocjacje i finalizacja:** rezerwacja, umowa przedwstępna, akt notarialny, protokół zdawczo-odbiorczy."
      },
      {
        "id": "krok-5-prezentacja-i-negocjacje",
        "title": "Krok 5. Prezentacja i negocjacje",
        "body": "- Uporządkuj mieszkanie i usuń drobne usterki przed zdjęciami.\n- Zdjęcia w dziennym świetle i rzut lokalu pomagają w pierwszym kontakcie.\n- Przygotuj odpowiedzi na typowe pytania: opłaty, koszty mediów, stan instalacji, miejsce postojowe.\n- **Bezpieczeństwo prezentacji:** nie wpuszczaj anonimowych osób. Agent weryfikuje tożsamość oglądających, rejestruje prezentacje i uprzedza Cię o każdej wizycie; warto też ustalić z góry zasady prezentacji (dni, godziny, klucze).\n- Po każdej prezentacji agent powinien przekazać Ci konkretną informację zwrotną: czy oglądający jest zainteresowany, co mu się podoba, co blokuje decyzję i z jakimi ofertami porównuje Twoje mieszkanie.\n- W negocjacjach ustal wcześniej swoją cenę minimalną i to, co możesz zaoferować poza ceną (np. termin wydania lokalu, wyposażenie). Kompletna oferta kupującego to nie tylko cena, ale też forma płatności (gotówka czy kredyt), wysokość zadatku, termin aktu i wydania lokalu. Każde ustalenie warto potwierdzić na piśmie."
      },
      {
        "id": "krok-6-umowa-przedwstepna-notariusz-i-podatek",
        "title": "Krok 6. Rezerwacja, umowa przedwstępna, notariusz i podatek",
        "body": "**Umowa rezerwacyjna.** Po uzgodnieniu warunków strony często podpisują krótką umowę rezerwacyjną, zwykle z zadatkiem, na czas potrzebny do przygotowania umowy przedwstępnej lub aktu. Powinna wskazywać nieruchomość, cenę, termin zawarcia kolejnej umowy, wysokość zadatku i sposób zapłaty pozostałej części ceny (np. z kredytu).\n\n**Umowa przedwstępna** określa cenę, termin umowy końcowej i zadatek lub zaliczkę. Zadatek (art. 394 Kodeksu cywilnego) chroni obie strony: jeśli kupujący się wycofa z własnej winy, sprzedający zatrzymuje zadatek; jeśli wycofa się sprzedający, kupujący może żądać zwrotu dwukrotności. Forma aktu notarialnego daje stronom silniejszą ochronę niż zwykła forma pisemna.\n\nPrzed aktem agent pomaga skompletować dokumenty, przekazuje notariuszowi dane do projektu aktu i pilnuje terminów płatności (np. spłata hipoteki z części ceny, wpłata kredytu kupującego).\n\n**Akt notarialny** przenosi własność. Notariusz sprawdza dokumenty, odczytuje akt i składa wniosek do księgi wieczystej. PCC przy zakupie na rynku wtórnym płaci kupujący, nie sprzedający.\n\n**Wydanie lokalu.** Strony podpisują protokół zdawczo-odbiorczy: stany liczników, klucze, piloty, wyposażenie. Agent pomaga w przepisaniu mediów i przekazaniu informacji zarządcy budynku.\n\n**Podatek dochodowy (PIT).** Jeśli sprzedajesz mieszkanie przed upływem 5 lat licząc od końca roku, w którym je kupiłeś lub wybudowałeś, składasz zeznanie PIT-39 (od 15 lutego do 30 kwietnia następnego roku), a dochód jest opodatkowany stawką 19%. Przykład z podatki.gov.pl: mieszkanie kupione w lutym 2020 r. można od 1 stycznia 2026 r. sprzedać bez podatku i bez zeznania. Dochód jest zwolniony, jeśli przeznaczysz przychód na własne cele mieszkaniowe w ciągu 3 lat od końca roku sprzedaży (tzw. ulga mieszkaniowa). Przy mieszkaniu ze spadku 5 lat liczy się od końca roku, w którym nabył je spadkodawca. Dlatego sposób i data nabycia z aktu nabycia mają znaczenie także podatkowe. Agent nie jest doradcą podatkowym – w razie wątpliwości skonsultuj się z doradcą lub urzędem skarbowym."
      },
      {
        "id": "sprzedaz-z-agentem-vesteri-collective",
        "title": "Sprzedaż z agentem Vesteri Collective",
        "body": "Ustal z niezależnym agentem Collective zakres obsługi, wynagrodzenie i plan promocji. Zatwierdzony agent może opublikować Twoją nieruchomość w Vesteri Market, zgodnie z Waszą umową. Omów przygotowanie oferty, organizację prezentacji i raportowanie postępów.\n\n[Sprzedaż z agentem Collective](/pl/sprzedajacy)"
      }
    ],
    "faq": [
      {
        "q": "Jakie dokumenty są potrzebne do sprzedaży mieszkania?",
        "a": "Najczęściej: numer księgi wieczystej, akt nabycia (dokument potwierdzający prawo własności i sposób nabycia), zaświadczenia o braku zaległości i zameldowanych osób, przy lokalu spółdzielczym zaświadczenie ze spółdzielni oraz świadectwo charakterystyki energetycznej; przy spadku lub darowiźnie także dokument z urzędu skarbowego, a przy hipotece zaświadczenie banku. Ostateczną listę poda notariusz."
      },
      {
        "q": "Ile trwa sprzedaż mieszkania?",
        "a": "Nie ma jednej odpowiedzi. Czas zależy głównie od ceny w stosunku do podobnych transakcji, lokalizacji i stanu lokalu, a także od tego, czy kupujący bierze kredyt i czy dokumenty są gotowe."
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
    "sources": "- PIT od sprzedaży nieruchomości, 5 lat, 19%, PIT-39, ulga 3 lata, spadek: <https://www.podatki.gov.pl/podatki-osobiste/pit/informacje-podstawowe/co-jest-opodatkowane/zbycie-nieruchomosci> (aktualizacja 19.08.2026)\n- RCN bezpłatny od 13.02.2026: <https://www.geoportal.gov.pl/aktualnosci/zmiany-w-udostepnianiu-danych-z-rcn-nowelizacja-rozporzadzenia-w-sprawie-egib/>\n- OC pośrednika, art. 181 ust. 3–3b ugn: <https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html>\n- Zadatek: art. 394 Kodeksu cywilnego\n- Księgi wieczyste online: <https://ekw.ms.gov.pl>",
    "modified": "2026-10-30"
  },
  {
    "href": "/poradnik/kupno-mieszkania-z-agentem",
    "kind": "article",
    "eyebrow": "PORADNIK · KUPNO",
    "breadcrumb": "Kupno mieszkania z agentem",
    "title": "Kupno mieszkania z agentem nieruchomości: przewodnik | Vesteri",
    "description": "Jak kupić mieszkanie z agentem nieruchomości: rola agenta kupującego, kroki od budżetu do aktu, kto płaci prowizję i jak sprawdzić stan prawny.",
    "h1": "Kupno mieszkania z agentem nieruchomości: przewodnik",
    "lead": "Agent po stronie kupującego szuka mieszkań pasujących do Twojego budżetu, umawia oglądanie, pomaga sprawdzić stan prawny lokalu i negocjuje cenę. Za tę pracę płacisz prowizję ustaloną w umowie pośrednictwa z Twoim agentem. Poniżej wyjaśniamy, jak wygląda taka współpraca krok po kroku i jakie dokumenty warto zobaczyć, zanim wpłacisz zadatek.",
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
        "body": "- doprecyzowuje z Tobą kryteria: lokalizację, metraż, liczbę pokoi, piętro, budżet, termin wprowadzenia się, rynek pierwotny czy wtórny,\n- sprawdza z Tobą sposób finansowania: gotówka, kredyt (wkład własny, zdolność kredytowa), sprzedaż innej nieruchomości – bo od tego zależą terminy i warunki negocjacji,\n- wyszukuje oferty, także te, które nie są jeszcze szeroko ogłaszane (np. dzięki współpracy z innymi agentami),\n- umawia i prowadzi oglądanie lub prezentację na żywo online; po oglądaniu pyta wprost, czy lokal jest „w grze” i przy jakich warunkach,\n- pomaga zebrać i przeczytać dokumenty lokalu,\n- negocjuje cenę i warunki, koordynuje umowę rezerwacyjną lub przedwstępną, termin u notariusza i wydanie lokalu."
      },
      {
        "id": "agent-kupujacego-a-agent-sprzedajacego",
        "title": "Agent kupującego a agent sprzedającego",
        "body": "Agent sprzedającego reprezentuje właściciela i dba o jak najlepszą cenę sprzedaży. Agent kupującego działa na Twoje zlecenie: jego zadaniem jest znaleźć lokal i wynegocjować dobre warunki dla Ciebie. Zakres obowiązków i wynagrodzenie zawsze określa umowa pośrednictwa w formie pisemnej lub elektronicznej (art. 180 ustawy o gospodarce nieruchomościami). Pośrednik ma obowiązkowe OC, a kopia polisy jest załącznikiem do umowy (art. 181).\n\nZdarza się, że jeden pośrednik obsługuje obie strony transakcji. Jest to możliwe, jeśli strony wyrażą na to zgodę w umowach, a pośrednik zobowiąże się do równego traktowania obu stron. Zapytaj o to wprost.\n\nUmowa pośrednictwa kupna jest zwykle umową otwartą, zawieraną na czas nieokreślony z możliwością wypowiedzenia. Sprawdź w niej: kiedy usługę uznaje się za wykonaną (zwykle gdy kupisz nieruchomość, którą agent Ci przedstawił), jak dokumentuje się prezentację (np. podpisany druk potwierdzenia albo wysłanie adresu e-mailem), czy prowizja należy się także wtedy, gdy lokal kupi Twoja bliska osoba, oraz jak długo po rozwiązaniu umowy obowiązuje prowizja za nieruchomości, które agent Ci pokazał. Jeśli podpisujesz umowę poza biurem agenta albo na odległość jako konsument, masz 14 dni na odstąpienie bez podania przyczyny."
      },
      {
        "id": "kroki-zakupu",
        "title": "Kroki zakupu",
        "body": "1. **Budżet i kredyt.** Sprawdź zdolność kredytową przed szukaniem. Pamiętaj o kosztach poza ceną: taksa notarialna, opłaty sądowe za wpisy w KW (w tym wpis hipoteki przy kredycie), podatek PCC na rynku wtórnym, ewentualna prowizja agenta i koszty kredytu.\n2. **Wyszukiwanie.** Ceny transakcyjne z okolicy sprawdzisz w Rejestrze Cen Nieruchomości, bezpłatnie od 13.02.2026 (geoportal.gov.pl).\n3. **Oglądanie.** Na miejscu albo jako prezentacja na żywo, gdy jesteś w innym mieście. Agent sprzedającego może poprosić Cię o dane i potwierdzenie prezentacji – to standard bezpieczeństwa (właściciel ma prawo wiedzieć, kto ogląda jego mieszkanie), a pośrednik jako instytucja obowiązana AML musi identyfikować strony transakcji.\n4. **Stan prawny.** Księgę wieczystą przeczytasz bezpłatnie na ekw.ms.gov.pl. Sprawdź oznaczenie lokalu i jego zgodność ze stanem faktycznym (dział I), właściciela (dział II), ograniczenia, roszczenia i służebności (dział III) oraz hipoteki (dział IV).\n5. **Dokumenty sprzedającego.** Sama księga wieczysta nie mówi wszystkiego. Agent powinien zweryfikować:\n   - akt nabycia, czyli dokument potwierdzający prawo własności i sposób nabycia nieruchomości przez sprzedającego (umowa sprzedaży, darowizny, postanowienie o stwierdzeniu nabycia spadku lub akt poświadczenia dziedziczenia, dział spadku, podział majątku, przydział spółdzielczy) – z niego wynika m.in., czy sprzedający jest jedynym właścicielem i czy potrzebna jest zgoda małżonka,\n   - przy spadku lub darowiźnie – rozliczenie podatku od spadków i darowizn (dokument z urzędu skarbowego), zwykle wymagane przez notariusza,\n   - zaświadczenie o braku zaległości w opłatach wobec wspólnoty lub spółdzielni,\n   - informację o osobach zameldowanych i zobowiązanie do wymeldowania przed wydaniem lokalu,\n   - przy spółdzielczym własnościowym prawie bez księgi wieczystej – zaświadczenie ze spółdzielni,\n   - przy hipotece sprzedającego – zaświadczenie banku o saldzie i zgodę na wykreślenie hipoteki po spłacie z ceny (część ceny trafia wtedy bezpośrednio do banku sprzedającego),\n   - świadectwo charakterystyki energetycznej,\n   - przy domu lub działce dodatkowo m.in. wypis i wyrys z ewidencji gruntów, informację o przeznaczeniu w planie miejscowym albo decyzję o warunkach zabudowy oraz dokumenty dotyczące legalności budowy i użytkowania budynku.\n\n   Jeśli coś budzi wątpliwości (współwłaściciel za granicą, nieuregulowany spadek, wpis w dziale III), agent nie bagatelizuje sprawy, tylko eskaluje ją do notariusza lub prawnika, zanim wpłacisz pieniądze.\n6. **Rezerwacja.** Gdy strony uzgodnią cenę, często podpisuje się krótką umowę rezerwacyjną, która zabezpiecza zamiar zakupu do czasu przygotowania umowy przedwstępnej. Powinna zawierać m.in. dane nieruchomości, cenę, termin zawarcia kolejnej umowy i zasady rozliczenia wpłaconej kwoty.\n7. **Negocjacje i umowa przedwstępna.** Cena, zadatek lub zaliczka, termin aktu końcowego, termin wydania lokalu, wyposażenie, warunki kredytowe. Zadatek i zaliczka to nie to samo: jeśli umowa nie dojdzie do skutku z winy jednej strony, druga może zatrzymać otrzymany zadatek albo żądać zwrotu dwukrotności zadatku, który dała (art. 394 Kodeksu cywilnego); zaliczka co do zasady podlega zwrotowi. Przy kredycie warto zapisać w umowie, co się dzieje, gdy bank odmówi finansowania. Forma aktu notarialnego daje stronom silniejszą ochronę niż zwykła forma pisemna. Po każdej rundzie negocjacji agent powinien potwierdzić ustalenia na piśmie (e-mail, SMS).\n8. **Akt notarialny i podatek.** Na rynku wtórnym PCC wynosi 2% wartości rynkowej i pobiera go notariusz. Od 31.08.2023 r. jest z niego zwolniony kupujący pierwsze mieszkanie lub dom (własność lokalu, domu jednorodzinnego albo spółdzielcze własnościowe prawo) – osoba fizyczna, która w dniu zakupu ani wcześniej nie miała żadnego z tych praw ani udziału w nich, z wyjątkiem udziału do 50% nabytego w spadku; przy zakupie wspólnym warunek musi spełnić każdy kupujący (art. 9 pkt 17 ustawy o PCC). Na rynku pierwotnym PCC co do zasady nie ma, bo sprzedaż jest opodatkowana VAT (art. 2 pkt 4 ustawy o PCC). Wyjątki: przy zakupie od dewelopera szóstego i kolejnego lokalu w tej samej inwestycji przez tego samego kupującego obowiązuje PCC 6% (art. 7a), a gdy sprzedaż nieruchomości przez firmę jest zwolniona z VAT, PCC 2% jest należny.\n9. **Wydanie lokalu.** Po akcie (lub w terminie z umowy) strony podpisują protokół zdawczo-odbiorczy: stany liczników, klucze, piloty, wyposażenie, ewentualne usterki. Agent pomaga przepisać media i przekazać kontakt do zarządcy budynku."
      },
      {
        "id": "ile-kosztuje-i-kto-placi",
        "title": "Ile kosztuje i kto płaci",
        "body": "Prowizję płaci strona, która zawarła umowę z pośrednikiem. Jeśli masz własnego agenta, płacisz mu stawkę ustaloną w umowie. Umowa określa też, kiedy prowizja jest wymagalna – np. w całości po akcie notarialnym albo w dwóch częściach: przy umowie przedwstępnej i przy umowie przyrzeczonej. Typowe widełki opisujemy w poradniku o [prowizji agenta](/pl/poradnik/prowizja-agenta-nieruchomosci)."
      },
      {
        "id": "jak-to-dziala-w-vesteri-collective",
        "title": "Jak to działa w Vesteri Collective",
        "body": "Vesteri Market łączy oferty lokalne i zagraniczne. Przeglądaj nieruchomości i kontaktuj się bezpośrednio z agentem wskazanym przy interesującej Cię ofercie. Zakres usług, wynagrodzenie i warunki obsługi ustalasz z nim indywidualnie.\n\n[Przeglądaj oferty](https://vesteri.estalara.com)"
      }
    ],
    "faq": [
      {
        "q": "Czy kupujący płaci prowizję agentowi?",
        "a": "Tylko jeśli podpisał umowę pośrednictwa. Stawkę ustala się w tej umowie."
      },
      {
        "q": "Czy agent sprawdzi stan prawny mieszkania?",
        "a": "Agent pomoże zebrać dokumenty i przeanalizować księgę wieczystą oraz akt nabycia sprzedającego. Ostateczną weryfikację przed aktem wykonuje notariusz; w złożonych sprawach warto skonsultować się z prawnikiem."
      },
      {
        "q": "Dlaczego agent pyta mnie o źródło pieniędzy?",
        "a": "Pośrednik w obrocie nieruchomościami musi stosować przepisy o przeciwdziałaniu praniu pieniędzy: identyfikuje klienta, pyta o status PEP, a w uzasadnionych przypadkach o cel transakcji i pochodzenie środków. To obowiązek ustawowy, nie wyraz nieufności."
      },
      {
        "q": "Jak ustalić zakres pomocy agenta?",
        "a": "Zapytaj, jakie działania obejmuje usługa, kto odpowiada za prezentacje i formalności oraz jakie są koszty. Uzgodnienia zapiszcie w umowie przed rozpoczęciem obsługi."
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
    "sources": "- Art. 180–181 ugn: <https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html>\n- PCC – art. 2 pkt 4, art. 7a, art. 9 pkt 17 ustawy o PCC (t.j. Dz.U. 2024 poz. 295): <https://eli.gov.pl/api/acts/DU/2024/295/text.html> ; zwolnienie pierwszego mieszkania od 31.08.2023: <https://www.gov.pl/web/rozwoj-technologia/kupno-mieszkania-lub-domu-na-rynku-wtornym-bez-podatku-pcc>\n- Zadatek: art. 394 Kodeksu cywilnego\n- Ustawa z 1.03.2018 o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu\n- RCN bezpłatny od 13.02.2026: <https://www.geoportal.gov.pl/aktualnosci/zmiany-w-udostepnianiu-danych-z-rcn-nowelizacja-rozporzadzenia-w-sprawie-egib/>\n- Księgi wieczyste: <https://ekw.ms.gov.pl>",
    "modified": "2026-10-30"
  },
  {
    "href": "/poradnik/prowizja-agenta-nieruchomosci",
    "kind": "article",
    "eyebrow": "PORADNIK · PROWIZJA",
    "breadcrumb": "Prowizja agenta nieruchomości",
    "title": "Prowizja agenta nieruchomości: ile wynosi i za co płacisz | Vesteri",
    "description": "Ile bierze agent nieruchomości? Typowe stawki prowizji, VAT, kto płaci, umowa na wyłączność i negocjacje. Przewodnik dla sprzedających i kupujących.",
    "h1": "Prowizja agenta nieruchomości: ile wynosi i za co płacisz",
    "lead": "Prowizja agenta nieruchomości to wynagrodzenie za skuteczne pośrednictwo, zwykle procent od ceny transakcyjnej. Poradniki branżowe z 2025 r. najczęściej podają 2–3% netto przy sprzedaży mieszkania, plus 23% VAT. Nie ma stawki urzędowej: wysokość, moment zapłaty i to, kto płaci, ustala umowa pośrednictwa. Poniżej wyjaśniamy też, za jaką pracę płacisz i które zapisy umowy warto przeczytać szczególnie uważnie.",
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
        "body": "Nie ma jednej stawki. Przepisy nie określają wysokości prowizji, a wynagrodzenie pośrednika ustala się w umowie pośrednictwa (art. 180 ustawy o gospodarce nieruchomościami).\n\nW praktyce poradniki branżowe z 2025 r. podają podobne widełki:\n\n- **sprzedaż mieszkania lub domu:** najczęściej 2–3% netto ceny transakcyjnej, w niektórych przypadkach (nieruchomości luksusowe, trudne do sprzedania) wyżej.\n\nTo orientacyjne dane z rynku, a nie statystyka urzędowa – nie znaleźliśmy badania stawek prowizji z opisaną metodologią. Źródła: towerservice.pl, marberdom.pl, rynekpierwotny.pl (dostęp 26.10.2026).\n\nPrzy tańszych nieruchomościach część agentów stosuje zamiast procentu kwotę ryczałtową, bo nakład pracy (dokumenty, marketing, prezentacje, negocjacje) jest podobny niezależnie od ceny.\n\n**Przykład (ilustracja):** mieszkanie sprzedane za 600 000 zł, prowizja 2,5% netto → 15 000 zł netto, czyli 18 450 zł brutto z 23% VAT."
      },
      {
        "id": "prowizja-netto-czy-brutto-vat",
        "title": "Prowizja netto czy brutto: VAT",
        "body": "Usługi pośrednictwa w obrocie nieruchomościami podlegają co do zasady podstawowej stawce VAT 23%, jeśli pośrednik jest czynnym podatnikiem VAT. Zawsze sprawdź, czy stawka w umowie jest podana netto, czy brutto – różnica przy cenie mieszkania jest istotna. Agent korzystający ze zwolnienia podmiotowego nie dolicza VAT. Od 1 stycznia 2026 r. limit tego zwolnienia wynosi 240 000 zł sprzedaży rocznie (art. 113 ust. 1 ustawy o VAT)."
      },
      {
        "id": "kto-placi-prowizje-sprzedajacy-kupujacy-czy-obie-strony",
        "title": "Kto płaci prowizję: sprzedający, kupujący czy obie strony",
        "body": "Prawo nie wskazuje, kto płaci. Płaci ta strona, która podpisała umowę pośrednictwa i się w niej do tego zobowiązała. Spotkasz trzy modele:\n\n- **płaci sprzedający** – agent działa na jego zlecenie, kupujący nie ponosi kosztów,\n- **płaci kupujący** – zwykle gdy zleca agentowi szukanie nieruchomości,\n- **płacą obie strony** – każda na podstawie własnej umowy i za swoją zgodą. Jeśli jeden pośrednik obsługuje obie strony, powinien mieć na to zgodę każdej z nich i traktować je jednakowo.\n\nSpotyka się też model, w którym właściciel podaje kwotę, jaką chce otrzymać „na rękę”, a wynagrodzenie agenta jest uwzględnione w cenie ofertowej ponad tę kwotę. Taki model trzeba jasno opisać w umowie (cena ofertowa, cena minimalna, sposób liczenia prowizji).\n\nJeśli kupujesz i nie podpisujesz z agentem żadnej umowy, nie powinieneś być obciążany prowizją. Zapytaj o to wprost na pierwszym spotkaniu."
      },
      {
        "id": "kiedy-placisz-prowizje-i-co-musi-byc-w-umowie",
        "title": "Kiedy płacisz prowizję i co musi być w umowie",
        "body": "Prowizja jest wynagrodzeniem za skutek, więc umowa powinna precyzyjnie określać, kiedy się należy. Zwróć uwagę na:\n\n- **Moment wymagalności** – zwykle w określonym terminie (np. kilka dni) po zawarciu umowy przyrzeczonej, czasem w dwóch ratach: część po umowie przedwstępnej, reszta po akcie notarialnym.\n- **Podstawę naliczenia** – procent od ceny z umowy przedwstępnej lub przyrzeczonej albo kwota stała; sprawdź, co się dzieje, gdy nie przekażesz agentowi informacji o cenie (niektóre umowy liczą wtedy prowizję od ceny ofertowej).\n- **Okres ochronny** – czy i jak długo po rozwiązaniu lub wygaśnięciu umowy prowizja należy się, jeśli transakcję zawrzesz z osobą przedstawioną przez agenta (lub z osobą jej bliską). Długość tego okresu wynika wyłącznie z umowy.\n- **Sposób dokumentowania „pozyskania” kupującego** – np. podpisany druk prezentacji albo przekazanie adresu nieruchomości e-mailem.\n- **Odstąpienie konsumenckie** – przy umowie zawartej poza lokalem biura lub na odległość konsument ma 14 dni na odstąpienie; jeśli zażąda rozpoczęcia usług przed upływem tego terminu, płaci za usługi spełnione do chwili odstąpienia."
      },
      {
        "id": "za-co-placisz-agentowi",
        "title": "Za co płacisz agentowi",
        "body": "Zakres usług określa umowa. Typowo obejmuje:\n\n- analizę nieruchomości i weryfikację dokumentów: księga wieczysta, akt nabycia, czyli dokument potwierdzający prawo własności i sposób nabycia, zaświadczenia o braku zaległości i osobach zameldowanych, dokumenty spółdzielni, hipoteka, świadectwo charakterystyki energetycznej,\n- wycenę i ustalenie strategii cenowej na podstawie cen transakcyjnych i konkurencji,\n- przygotowanie oferty: profesjonalne zdjęcia, rzut lokalu, opis pod grupę docelową, ewentualnie film lub home staging,\n- publikację i promocję: portale ogłoszeniowe, strona agenta lub biura, wspólne bazy ofert z innymi pośrednikami, media społecznościowe, baza własnych klientów, baner, dni otwarte,\n- prezentacje i selekcję kupujących (weryfikacja tożsamości i finansowania, rejestracja prezentacji),\n- regularne raporty: zapytania, prezentacje, opinie, oferty cenowe, rekomendacje,\n- negocjacje,\n- pomoc przy umowie rezerwacyjnej, przedwstępnej i akcie notarialnym oraz przy wydaniu nieruchomości.\n\nPośrednik nie świadczy w ramach prowizji doradztwa prawnego, podatkowego ani inwestycyjnego – w tych sprawach kieruje do specjalistów.\n\nPośrednik musi mieć obowiązkowe ubezpieczenie OC, a kopia polisy jest załącznikiem do umowy pośrednictwa (art. 181 ust. 3a ugn). Jeśli jej nie dostaniesz, możesz wezwać pośrednika na piśmie do jej przedłożenia w ciągu 7 dni. Jeśli tego nie zrobi, możesz wypowiedzieć umowę ze skutkiem natychmiastowym (art. 181 ust. 3b)."
      },
      {
        "id": "umowa-otwarta-czy-na-wylacznosc",
        "title": "Umowa otwarta czy na wyłączność",
        "body": "**Umowa otwarta** pozwala zlecić sprzedaż kilku biurom. Płacisz temu, kto doprowadzi do transakcji. Minusem bywa mniejsze zaangażowanie agentów i to samo mieszkanie w wielu ogłoszeniach w różnych cenach.\n\n**Umowa na wyłączność** oznacza jednego agenta przez określony czas. W zamian możesz oczekiwać pełnego planu marketingowego (sesja zdjęciowa, rzut, płatna promocja, udostępnienie oferty współpracującym pośrednikom) i regularnych raportów. Dobrze prowadzona wyłączność nie ogranicza zasięgu – dzięki współpracy z innymi agentami oferta trafia do ich klientów, ale ma jedną cenę i jeden opis. Sprawdź w umowie:\n\n- czas trwania wyłączności i warunki wcześniejszego rozwiązania,\n- obowiązek wypowiedzenia wcześniejszych umów z innymi biurami,\n- co się dzieje, gdy sam znajdziesz kupującego – czy należy się pełna prowizja, zryczałtowany zwrot kosztów poniesionych przez agenta, czy np. można z góry wskazać krąg osób (rodzina, znajomi), przy sprzedaży którym prowizja nie obowiązuje,\n- jakie konkretne działania marketingowe agent się zobowiązuje wykonać i jak często będzie raportował."
      },
      {
        "id": "czy-prowizje-mozna-negocjowac",
        "title": "Czy prowizję można negocjować",
        "body": "Tak, prowizja jest umowna. Argumentami są zwykle: wyższa wartość nieruchomości, umowa na wyłączność, łatwa do sprzedania oferta albo zlecenie kilku transakcji. Negocjuj też zakres usług, nie tylko procent – porównuj nie samą stawkę, ale efekt: cenę końcową, czas sprzedaży, bezpieczeństwo transakcji, jakość marketingu i obsługę dokumentów. Tańszy agent bez profesjonalnych zdjęć i promocji może w efekcie kosztować więcej przez niższą cenę sprzedaży."
      },
      {
        "id": "prowizja-w-vesteri-collective",
        "title": "Prowizja w Vesteri Collective",
        "body": "Stawkę, zakres usług i moment zapłaty ustalasz bezpośrednio z agentem w umowie pośrednictwa. Vesteri nie narzuca klientom jednej stawki. Przed zawarciem umowy poproś o kwotę brutto, informację o dodatkowych kosztach i jasny opis działań.\n\n[Sprzedaż z agentem Collective](/pl/sprzedajacy)"
      }
    ],
    "faq": [
      {
        "q": "Ile bierze agent nieruchomości?",
        "a": "Nie ma stawki urzędowej. Poradniki branżowe z 2025 r. podają najczęściej 2–3% netto ceny przy sprzedaży mieszkania, plus 23% VAT. Dokładną stawkę określa umowa pośrednictwa."
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
        "a": "Nie musi być. Wyłączność bywa argumentem do negocjacji niższej stawki, bo agent ma pewność, że jego praca nie przepadnie. W zamian agent zwykle inwestuje więcej we własny marketing oferty."
      },
      {
        "q": "Czy kupujący też płaci prowizję?",
        "a": "Tylko jeśli podpisał umowę pośrednictwa, w której się do tego zobowiązał. Zapytaj agenta o to przed pierwszą prezentacją."
      },
      {
        "q": "Czy muszę zapłacić prowizję, jeśli sprzedam po wygaśnięciu umowy?",
        "a": "Jeśli umowa przewiduje okres ochronny, a kupującym jest osoba przedstawiona przez agenta w trakcie umowy – tak. Przeczytaj ten zapis przed podpisaniem."
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
    "sources": "- Art. 180–181 ugn: <https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html>\n- Widełki 2–3% netto + VAT (2025): <https://towerservice.pl/prowizja-biura-nieruchomosci-ile-wynosi-i-jak-negocjowac> ; <https://marberdom.pl/ile-kosztuje-posrednik-nieruchomosci-stawki-vat-i-jak-obnizyc> ; <https://rynekpierwotny.pl/wiadomosci-mieszkaniowe/na-czym-zarabia-posrednik-nieruchomosci/7300/> (2–5%, 2025)\n- VAT 23% na pośrednictwo (stawka podstawowa): <https://pszczelna.pl/prowizja-biura-nieruchomosci-netto-czy-brutto-vat-w-cenie>\n- Limit zwolnienia VAT 240 000 zł od 1.01.2026: ustawa z 24.06.2025, Dz.U. 2025 poz. 896, <https://www.dziennikustaw.gov.pl/D2025000089601.pdf> ; <https://podatki.gov.pl/podatki-firmowe/vat/poradniki-i-informatory/zwolnienie-podmiotowe-od-podatku-vat>\n- Ustawa z 30.05.2014 o prawach konsumenta (odstąpienie od umowy zawartej poza lokalem lub na odległość)",
    "modified": "2026-10-30"
  },
  {
    "href": "/poradnik/jak-zostac-agentem-nieruchomosci",
    "kind": "article",
    "eyebrow": "PORADNIK · DLA AGENTÓW",
    "breadcrumb": "Jak zostać agentem nieruchomości",
    "title": "Jak zostać agentem nieruchomości w 2026: zarobki, licencja i kursy | Vesteri",
    "description": "Wymagania, licencja pośrednika, OC, kursy i zarobki agenta nieruchomości w 2026 roku. Krok po kroku: od pomysłu do pierwszej transakcji.",
    "h1": "Jak zostać agentem nieruchomości w 2026: zarobki, licencja i kursy",
    "lead": "Aby zostać agentem nieruchomości w Polsce, nie potrzebujesz państwowej licencji – zniesiono ją 1 stycznia 2014 r. Jeśli działasz na własny rachunek, musisz mieć firmę i obowiązkowe ubezpieczenie OC pośrednika. Kurs nie jest wymagany, ale bardzo pomaga. Brak licencji nie zwalnia jednak z profesjonalizmu: agent odpowiada za rzetelność informacji, bezpieczeństwo transakcji i przestrzeganie przepisów (m.in. o ochronie konsumentów, AML i RODO). Możesz zacząć w biurze, we franczyzie albo jako niezależny agent w sieci.",
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
        "body": "Agent nieruchomości (w ustawie: pośrednik w obrocie nieruchomościami) pomaga klientom sprzedać lub kupić nieruchomość. Klient rzadko potrzebuje tylko „wrzucenia ogłoszenia na portal” – zwykle przychodzi z sytuacją życiową, finansową lub inwestycyjną, którą trzeba bezpiecznie przeprowadzić. Dlatego praca agenta to przede wszystkim kontrola całego procesu. Na co dzień to:\n\n- pozyskiwanie ofert: polecenia, własna baza kontaktów, znajomość mikrorejonu, media społecznościowe, portale, współpraca z innymi agentami,\n- diagnoza potrzeb klienta: cel, termin, oczekiwana cena, sposób finansowania, kto podejmuje decyzję,\n- podpisywanie umów pośrednictwa (na wyłączność lub otwartych) wraz z wymaganymi załącznikami,\n- sprawdzanie stanu prawnego nieruchomości: księga wieczysta (wszystkie działy), akt nabycia, czyli dokument potwierdzający prawo własności i sposób nabycia, współwłasność, hipoteki, służebności, osoby zameldowane, zaległości w opłatach,\n- wycena i strategia ceny na podstawie cen transakcyjnych i konkurencji,\n- przygotowanie oferty: zdjęcia, rzut lokalu, pomiar, opis, publikacja, prezentacje,\n- szukanie kupujących i wyszukiwanie ofert dla kupujących, w tym weryfikacja tożsamości i finansowania osób oglądających,\n- raportowanie klientowi: liczba zapytań i prezentacji, opinie oglądających, porównanie z konkurencją, rekomendacja kolejnego kroku,\n- negocjacje ceny i warunków (termin aktu i wydania, zadatek, wyposażenie, finansowanie),\n- pomoc przy umowie rezerwacyjnej, przedwstępnej i akcie notarialnym oraz przy wydaniu lokalu (protokół zdawczo-odbiorczy, stany liczników, klucze).\n\nZakres usługi określa umowa pośrednictwa, która musi mieć formę pisemną lub elektroniczną pod rygorem nieważności. Dużo pracy dzieje się poza biurem: telefony, spotkania, prezentacje wieczorami i w weekendy. Jeśli lubisz ludzi, potrafisz negocjować i nie przeraża Cię dochód zależny od wyników, to zawód może Ci pasować."
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
        "id": "obowiazki-prawne-ktore-agent-stosuje-od-pierwszego-dnia",
        "title": "Obowiązki prawne, które agent stosuje od pierwszego dnia",
        "body": "Oprócz OC agent musi znać kilka obszarów przepisów, bo dotyczą każdej umowy:\n\n- **Umowa pośrednictwa.** Forma pisemna lub elektroniczna pod rygorem nieważności (art. 180 ust. 3 ugn). W umowie określa się m.in. nieruchomość, rodzaj umowy (otwarta albo na wyłączność i okres wyłączności), cenę ofertową, wynagrodzenie i moment jego wymagalności, zakres usług i obowiązki stron. Zmiany umowy także wymagają formy pisemnej.\n- **Prawa konsumenta.** Jeśli klient jest konsumentem, a umowa jest zawierana poza lokalem biura albo na odległość, agent przekazuje pouczenie o prawie odstąpienia w ciągu 14 dni oraz wzór formularza odstąpienia. Jeżeli klient chce, by agent zaczął działać przed upływem tego terminu, musi to wyraźnie zażądać – i warto to udokumentować w umowie.\n- **AML.** Pośrednik w obrocie nieruchomościami jest instytucją obowiązaną w rozumieniu ustawy z 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu. Oznacza to identyfikację i weryfikację klienta (a przy firmach – beneficjenta rzeczywistego), ocenę ryzyka, oświadczenie o statusie osoby zajmującej eksponowane stanowisko polityczne (PEP), w razie potrzeby informację o celu transakcji i źródle środków, a także prowadzenie wewnętrznej procedury i szkoleń.\n- **RODO.** Dane klienta przetwarza się w konkretnym celu (wykonanie umowy, obowiązek prawny, marketing za zgodą). Zgody marketingowe muszą być dobrowolne i rozdzielone. Dokumentów klientów nie przesyła się przez prywatne komunikatory ani nie wkleja do narzędzi zewnętrznych bez anonimizacji.\n- **Świadectwo charakterystyki energetycznej.** Przy sprzedaży właściciel przekazuje je nabywcy; agent powinien o tym przypomnieć na początku, a nie tuż przed aktem.\n- **Prawa do zdjęć.** Jeśli korzystasz ze zdjęć przekazanych przez właściciela, zadbaj o jego pisemne oświadczenie, że ma do nich prawa i zgadza się na publikację."
      },
      {
        "id": "wartosci-na-ktorych-opiera-sie-dobra-praktyka",
        "title": "Wartości, na których opiera się dobra praktyka",
        "body": "Klient powierza agentowi jedną z najważniejszych decyzji majątkowych w życiu. Profesjonalny agent kieruje się kilkoma zasadami:\n\n- **Bezpieczeństwo** – nie prezentuje nieruchomości anonimowym osobom, weryfikuje tożsamość i finansowanie oglądających, rejestruje prezentacje.\n- **Należyta staranność** – sprawdza dokumenty, zamiast opierać się wyłącznie na deklaracjach klienta.\n- **Transparentność** – mówi prawdę o cenie, wadach, konkurencji i ryzykach; klient zawsze wie, na jakim etapie jest transakcja.\n- **Odpowiedzialność** – odpowiada za przygotowanie, promocję, negocjacje i finalizację, a nie tylko za ogłoszenie; nie udaje przy tym prawnika, rzeczoznawcy ani doradcy podatkowego i we właściwym momencie kieruje do specjalisty.\n- **Poufność** – sytuacja rodzinna, finansowanie i powody sprzedaży to informacje wrażliwe.\n- **Dokumentowanie** – ustalenia potwierdza pisemnie (e-mail, SMS, notatka w systemie CRM); to, czego nie zapisano, trudno później udowodnić.\n- **Partnerstwo** – umowa ma porządkować współpracę, a nie blokować klienta; agent działa bez presji i manipulacji."
      },
      {
        "id": "kursy-dla-agentow-nieruchomosci-jak-wybrac",
        "title": "Kursy dla agentów nieruchomości: jak wybrać",
        "body": "Kurs nie jest obowiązkowy, ale skraca naukę na własnych błędach. Przy wyborze sprawdź:\n\n1. **Program.** Czy obejmuje stan prawny nieruchomości (księgi wieczyste, akty nabycia, spółdzielcze prawa), umowy pośrednictwa, prawa konsumenta, AML i RODO, podatki, marketing ofert i negocjacje?\n2. **Prowadzących.** Czy to praktycy, którzy sami prowadzą transakcje?\n3. **Praktykę.** Czy są ćwiczenia na realnych dokumentach i symulacje rozmów z klientem?\n4. **Formę.** Stacjonarnie, online, studia podyplomowe – zależnie od czasu i budżetu.\n5. **Opinie absolwentów** i to, czy kurs daje dostęp do mentora lub stażu.\n\nKoszt i czas trwania kursów bardzo się różnią, dlatego porównaj kilka aktualnych ofert."
      },
      {
        "id": "ile-zarabia-agent-nieruchomosci",
        "title": "Ile zarabia agent nieruchomości?",
        "body": "Krótko: to zależy przede wszystkim od liczby zamkniętych transakcji. Większość agentów jest rozliczana prowizyjnie, więc dochód bywa nieregularny, szczególnie na początku.\n\nPubliczne zestawienia płacowe dla tego zawodu są nieliczne i zwykle nie podają roku badania, dlatego nie przytaczamy tu konkretnych kwot. Dostępne raporty dotyczą głównie osób zatrudnionych w biurach. Nie pokazują dochodów agentów na własnej działalności, którzy zatrzymują większą część prowizji, ale sami ponoszą koszty (ZUS, OC, marketing, samochód).\n\n### Od czego zależą zarobki\n\n- **Liczba transakcji** i średnia cena nieruchomości na Twoim rynku,\n- **Stawka prowizji** – ustalana indywidualnie w umowie z klientem,\n- **Wynagrodzenie uzgodnione z biurem**, jeśli w nim pracujesz (w modelu B2B często jako ustalony procentowy podział prowizji),\n- **Portfel umów na wyłączność** – pozwala planować pracę i inwestować w marketing ofert,\n- **Doświadczenie i polecenia** – z czasem więcej klientów przychodzi z rekomendacji.\n\n### Przykład (ilustracja, nie średnia rynkowa)\n\nSprzedajesz mieszkanie za 600 000 zł z prowizją 2% netto: to 12 000 zł netto prowizji. Ile z tego zostaje Tobie, zależy od umowy z biurem i od Twoich kosztów.\n\n### Zarobki na start\n\nPierwsze miesiące to zwykle budowanie bazy ofert i kontaktów. Do pierwszej transakcji może minąć kilka miesięcy, dlatego warto mieć oszczędności lub inne źródło dochodu na ten czas."
      },
      {
        "id": "gdzie-zaczac-biuro-franczyza-czy-niezaleznie-w-sieci",
        "title": "Gdzie zacząć: biuro, franczyza czy niezależnie w sieci",
        "body": "| Model | Plusy | Minusy |\n| --- | --- | --- |\n| Biuro nieruchomości (pracownik/współpracownik) | Szkolenia, marka, oferty biura | Mniejsza część prowizji, mniej swobody |\n| Franczyza | Rozpoznawalna marka, system i szkolenia | Opłaty franczyzowe, narzucone standardy |\n| Własna działalność, samodzielnie | Pełna prowizja i swoboda | Wszystko na Twojej głowie, mała baza ofert |\n| Niezależnie w społeczności agentów (np. Vesteri Collective) | Własna marka, Vesteri Market, wymiana wiedzy i doświadczeń | Samodzielne pozyskiwanie klientów i odpowiedzialność za usługi |"
      },
      {
        "id": "start-w-vesteri-collective-jako-poczatkujacy-agent",
        "title": "Start w Vesteri Collective jako początkujący agent",
        "body": "W Vesteri Collective możesz rozwijać się także na początku kariery. Załóż konto agenta na platformie Vesteri; zaproszenie do Vesteri Channels wyślemy Ci ręcznie e-mailem. W społeczności możesz zadawać pytania, poznawać doświadczenia innych i dzielić się informacjami.\n\nPublikowanie ofert wymaga osobnego zatwierdzenia konta i spełnienia wymogów zawodowych, w tym prowadzenia legalnej działalności i wymaganego ubezpieczenia OC. Przed zatwierdzeniem możesz już korzystać z Channels. Konto, członkostwo i standardowa publikacja ofert są bezpłatne.\n\n[Poznaj Collective →](/pl/dla-agentow)"
      },
      {
        "id": "pierwsze-90-dni-plan-krok-po-kroku",
        "title": "Pierwsze 90 dni: plan krok po kroku",
        "body": "1. **Tydzień 1–2:** wybierz model pracy (biuro, franczyza, sieć). Zarejestruj działalność, jeśli działasz na swój rachunek.\n2. **Przed pierwszą umową:** kup polisę OC pośrednika (najpóźniej dzień przed rozpoczęciem czynności) i przygotuj komplet dokumentów: wzór umowy pośrednictwa (sprzedaż i kupno; otwarta i na wyłączność), pouczenie i formularz odstąpienia dla konsumenta, oświadczenia AML/PEP, klauzule RODO i zgody marketingowe, kartę opisu nieruchomości, druk potwierdzenia prezentacji, wzór protokołu zdawczo-odbiorczego.\n3. **Tydzień 2–4:** kurs lub mentoring; naucz się czytać księgę wieczystą i akty nabycia, poznaj procedurę AML.\n4. **Dni 0–30:** obserwacja – udział w spotkaniach z klientami i prezentacjach doświadczonego agenta, nauka systemu CRM i dokumentów.\n5. **Miesiąc 1–2:** wybierz specjalizację (dzielnica, typ nieruchomości) i zbuduj bazę kontaktów; zacznij samodzielnie umawiać spotkania i przygotowywać oferty.\n6. **Miesiąc 2–3:** pozyskaj pierwsze oferty, przygotuj dobre zdjęcia, rzut i opis, organizuj prezentacje – także online – i raportuj klientom ich wyniki; ucz się wyceny z argumentacją, negocjacji i prowadzenia transakcji do aktu.\n7. **Cały czas:** rozwijaj wiedzę, pytaj doświadczonych profesjonalistów i analizuj wnioski z własnej pracy. Dobrym nawykiem jest stały rytm: codzienne telefony i aktualizacja notatek po kontaktach, informacja zwrotna dla właściciela po każdej prezentacji, regularne (np. cotygodniowe) odświeżanie ofert i kontrola ich widoczności na portalach."
      }
    ],
    "faq": [
      {
        "q": "Czy agent nieruchomości musi mieć licencję?",
        "a": "Nie. Licencja pośrednika w obrocie nieruchomościami nie jest wymagana od 1 stycznia 2014 r. Obowiązkowe jest ubezpieczenie OC pośrednika z minimalną sumą gwarancyjną 25 000 euro."
      },
      {
        "q": "Ile zarabia początkujący agent nieruchomości?",
        "a": "Nie ma wiarygodnych, aktualnych statystyk dla początkujących. Na starcie dochód jest zwykle niższy i nieregularny, bo zależy od pierwszych zamkniętych transakcji, stawki prowizji oraz warunków umowy z biurem, jeśli w nim pracujesz."
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
        "q": "Czy agent musi stosować przepisy AML?",
        "a": "Tak. Pośrednik w obrocie nieruchomościami jest instytucją obowiązaną, więc musi identyfikować klientów, oceniać ryzyko i dokumentować zastosowane środki bezpieczeństwa finansowego zgodnie z ustawą i własną procedurą wewnętrzną."
      },
      {
        "q": "Czy można łączyć pracę agenta z inną pracą?",
        "a": "Prawo tego nie zabrania. W praktyce prezentacje odbywają się często po południu i w weekendy, więc da się zacząć dorywczo, ale klienci oczekują szybkiego kontaktu."
      },
      {
        "q": "Czy Vesteri Collective przyjmuje początkujących agentów?",
        "a": "Tak. Załóż konto agenta, a zaproszenie do Vesteri Channels wyślemy Ci e-mailem. Publikowanie ofert wymaga osobnego zatwierdzenia konta i spełnienia wymogów zawodowych. Szczegóły znajdziesz na stronie dla agentów."
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
    "sources": "- Art. 180 ust. 3, art. 181 ust. 3–3b ugn: <https://przepisy.gofin.pl/przepisy,3,42,42,980,379372,20240101,art-179-183a-posrednictwo-w-obrocie-nieruchomosciami.html>\n- Rozporządzenie MF z 26.04.2019 (Dz.U. 2019 poz. 804): <https://eli.gov.pl/api/acts/DU/2019/804/text.html>\n- Deregulacja od 1.01.2014: <https://www.rp.pl/ekonomia/art12630581-uwolnione-zawody-z-nowymi-ubezpieczeniami>\n- OC, obowiązki i kara: <https://pprn.pl/posrednicy/ubezpieczenia-oc-posrednikow/>\n- Ustawa z 1.03.2018 o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu, art. 2 ust. 1 pkt 18\n- Ustawa z 30.05.2014 o prawach konsumenta\n- Fakty o Vesteri: www.vesteri.com llms.txt (26.10.2026)",
    "modified": "2026-10-30"
  },
  {
    "href": "/nieruchomosci-za-granica",
    "kind": "webpage",
    "eyebrow": "NIERUCHOMOŚCI ZA GRANICĄ",
    "breadcrumb": "Nieruchomości za granicą",
    "title": "Nieruchomości za granicą – kupno z agentem | Vesteri Collective",
    "description": "Kupno nieruchomości za granicą z agentem Vesteri Collective: Hiszpania, Cypr, ZEA. Podatki, formalności i ryzyka w każdym kraju – w jednym miejscu.",
    "h1": "Nieruchomości za granicą: przygotuj się do zakupu",
    "lead": "Kupno mieszkania za granicą to inne podatki, procedury i ryzyka niż w Polsce. W Vesteri Market możesz przeglądać oferty i kontaktować się z agentami, którzy je prezentują. Poniżej zebraliśmy najważniejsze różnice między wybranymi krajami.",
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
        "body": "1. Przeglądaj nieruchomości w Vesteri Market i porównuj dostępne oferty.\n2. Skontaktuj się z agentem wskazanym przy wybranej nieruchomości.\n3. Zapytaj o dokumenty, koszty, dostępne prezentacje i warunki obsługi.\n4. Zleć niezależnemu lokalnemu prawnikowi analizę dokumentów i ustal procedurę zawarcia umowy oraz rejestracji.\n\n[Przeglądaj oferty]({APP_URL})"
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
        "label": "Zapytaj agenta o nieruchomości w Hiszpanii",
        "href": "#kontakt"
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
        "body": "Dziś nie mamy w aplikacji ofert z Hiszpanii. Napisz do nas – agent sieci odpowie, czy i jak może pomóc w wybranym regionie.\n\n[Zapytaj agenta o nieruchomości w Hiszpanii](#kontakt)"
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
        "body": "Przeglądaj dostępne nieruchomości w Vesteri Market i skontaktuj się z agentem wskazanym przy ofercie. Zapytaj o dokumentację projektu, dostępne prezentacje, koszty i warunki zakupu. Analizę prawną i procedurę rejestracji uzgodnij z niezależnym doradcą znającym lokalne przepisy.\n\n[Przeglądaj oferty]({APP_URL})"
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
        "body": "Przeglądaj dostępne nieruchomości w Vesteri Market i skontaktuj się z agentem wskazanym przy ofercie. Zapytaj o dokumentację projektu, dostępne prezentacje, koszty i warunki zakupu. Analizę prawną i procedurę rejestracji uzgodnij z niezależnym doradcą znającym lokalne przepisy.\n\n[Przeglądaj oferty]({APP_URL})"
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
