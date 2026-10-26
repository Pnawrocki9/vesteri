// Copy for the "How Vesteri Collective works" page (/pl/jak-dziala-vesteri-collective,
// /en/how-vesteri-collective-works). Every fact traces to the Vesteri Collective
// Rules v1.0 (src/content/legal/*/collective-rules.md) and the /agents and
// /sellers pages. The FAQ array feeds BOTH the visible FAQ and the FAQPage
// JSON-LD, so structured data cannot drift from what visitors see.
//
// The 60% minimum applies ONLY to Vesteri's international portfolio; cooperation
// between members follows the default 25/75 (Referral) and 50/50 (Joint
// Transaction) split.

export type HowItWorksContent = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ctaApply: string;
  ctaBrowse: string;
  faqTitle: string;
  rulesNote: string;
  rulesLink: string;
  body: string;
  faq: { q: string; a: string }[];
};

export const howItWorks: Record<'pl' | 'en', HowItWorksContent> = {
  "pl": {
    "title": "Jak działa Vesteri Collective – zasady i podział prowizji",
    "description": "Jak działa sieć agentów Vesteri Collective: członkostwo i weryfikacja, zasady Fair Play & Trust, współpraca agentów i domyślny podział prowizji.",
    "eyebrow": "VESTERI COLLECTIVE · JAK TO DZIAŁA",
    "h1": "Jak działa Vesteri Collective",
    "lead": "Vesteri Collective to selektywna sieć sprawdzonych, niezależnych agentów i biur nieruchomości, którzy współpracują na wspólnych zasadach Fair Play & Trust. Publiczny Vesteri Marketplace łączy oferty lokalne i zagraniczne publikowane przez członków sieci. Każdy członek działa pod własną marką, a dzięki współpracy może zaproponować klientowi więcej niż ofertę jednego biura.",
    "ctaApply": "Zgłoś się do Collective ↗",
    "ctaBrowse": "Przeglądaj nieruchomości ↗",
    "faqTitle": "Najczęstsze pytania",
    "rulesNote": "Pełne i wiążące zasady zawiera",
    "rulesLink": "Regulamin Vesteri Collective",
    "body": "## Sieć w trzech zdaniach\n\n- **Dla kupujących:** jeden zaufany agent może sprawdzić oferty innych członków sieci i skontaktować się z agentami, którzy mają odpowiednie nieruchomości.\n\n- **Dla sprzedających:** jeden opiekun prowadzi sprzedaż, a inni członkowie Collective mogą przedstawić ofertę swoim klientom, zgodnie z ustaleniami.\n\n- **Dla agentów:** zachowujesz markę, klientów i prowizję z własnych ofert, a współpracujesz na jasnych, wspólnych zasadach.\n\n## Członkostwo i weryfikacja\n\n### Kto może dołączyć\n\nO członkostwo mogą ubiegać się niezależni agenci i biura nieruchomości prowadzący legalną działalność pośrednictwa na swoim rynku.\n\n### Jak przebiega weryfikacja\n\nZgłoszenie składasz bezpłatnie w systemie Vesteri. Vesteri sprawdza tożsamość, prowadzoną działalność, wymagane na danym rynku licencje, wpisy lub ubezpieczenie (w Polsce: ubezpieczenie OC pośrednika) oraz akceptację zasad Fair Play & Trust. Członkostwo jest selektywne – nie każde zgłoszenie zostaje przyjęte, a czas weryfikacji zależy od kraju i kompletności zgłoszenia.\n\n### Co daje status członka\n\nPo zatwierdzeniu możesz publikować oferty w Vesteri Marketplace, korzystać z systemu Vesteri, współpracować z innymi członkami i posługiwać się oznaczeniem „Członek Vesteri Collective”. Członkostwo nie tworzy wyłączności, franczyzy ani spółki z Vesteri.\n\n### Ile to kosztuje\n\nZgłoszenie, członkostwo, standardowa publikacja ofert i podstawowe funkcje systemu są bezpłatne. Płatne są wyłącznie funkcje premium – za użycie albo w abonamencie, według cennika na koncie członka.\n\n## Zasady Fair Play & Trust\n\nKażdy członek zobowiązuje się do:\n\n1. **Rzetelności ofert** – publikuje tylko oferty, do których ma umocowanie, z prawdziwymi i aktualnymi danymi; niedostępne oferty wycofuje w ciągu 3 dni roboczych.\n\n2. **Przejrzystej reprezentacji** – jasno wskazuje, kogo reprezentuje; każda oferta wskazuje odpowiedzialnego agenta.\n\n3. **Szacunku wobec kupujących** – bez presji, bez ukrywania istotnych informacji i bez obietnic dotyczących zwrotu z inwestycji, terminów czy finansowania, których nie może dotrzymać.\n\n4. **Poszanowania relacji** – nie przejmuje klientów innych członków i nie pomija ich przy transakcji.\n\n5. **Dotrzymywania ustaleń** – wykonuje uzgodnione polecenia i wspólne transakcje oraz rozlicza się terminowo.\n\n6. **Lojalności wobec sieci** – nie wykorzystuje danych z systemu poza celem współpracy.\n\n7. **Zgodności z prawem** – przestrzega przepisów o pośrednictwie, AML, ochronie konsumentów i danych osobowych.\n\n8. **Komunikacji** – odpowiada na zapytania innych członków w ciągu 2 dni roboczych.\n\n## Jak współpracują agenci\n\n### Obowiązek współpracy\n\nCzłonek, do którego zwraca się inny członek mający zainteresowanego kupującego, podejmuje współpracę. Odmowa jest dopuszczalna tylko z uzasadnionego powodu (np. brak zgody właściciela, konflikt interesów) i wymaga krótkiego wyjaśnienia w systemie.\n\n### Dwie formy współpracy\n\n- **Polecenie** – przekazujesz kontakt do kupującego lub sprzedającego innemu członkowi, bez dalszej obsługi klienta.\n\n- **Wspólna Transakcja** – Agent Oferty i Agent Kupującego wspólnie obsługują klienta aż do zamknięcia transakcji.\n\nFormę i zakres obowiązków ustalacie przed pierwszą prezentacją nieruchomości.\n\n## Podział prowizji\n\nZasada ogólna Collective: agenci współpracują i dzielą się prowizją. Domyślny podział liczony jest od prowizji netto faktycznie otrzymanej od klienta:\n\n| Forma współpracy | Podział |\n|---|---|\n| Polecenie | 25% członek polecający · 75% członek obsługujący |\n| Wspólna Transakcja | 50% Agent Oferty · 50% Agent Kupującego |\n\nInny podział jest możliwy tylko za zgodą obu członków, potwierdzoną w systemie lub e-mailem przed pierwszą prezentacją. Brak takiego uzgodnienia oznacza podział domyślny.\n\n### Przypisanie kupującego i okres ochrony\n\nKupujący jest przypisany do członka, który jako pierwszy zarejestrował go w systemie dla danej oferty lub poszukiwania, chyba że inny członek wykaże wcześniejszą, udokumentowaną relację. Prawo do udziału w prowizji trwa 12 miesięcy. W tym czasie obowiązuje zakaz obchodzenia członka, który polecił lub przedstawił klienta.\n\n### Rozliczenie\n\nCzłonkowie rozliczają się bezpośrednio między sobą: informacja o zamknięciu transakcji w ciągu 7 dni, wypłata udziału na podstawie faktury w ciągu 14 dni od otrzymania prowizji. Automatyczne przypisywanie transakcji i rozliczanie prowizji w systemie jest jeszcze rozwijane.\n\n## Inwestycje zagraniczne w portfolio Vesteri\n\nVesteri udostępnia członkom wybrane inwestycje zagraniczne, w których Vesteri lub jego partner pełni rolę Agenta Oferty na podstawie umów z deweloperami. Członek, który pozyska kupującego, otrzymuje większą część prowizji należnej od dewelopera – **nie mniej niż 60%** – na warunkach z karty oferty lub uzgodnionych indywidualnie przed pierwszą prezentacją. **Próg 60% dotyczy wyłącznie tych inwestycji zagranicznych Vesteri.** Przy współpracy między członkami obowiązuje domyślny podział opisany wyżej (25/75 lub 50/50). Vesteri organizuje prezentacje LIVE, webinary i kontakt z deweloperem.\n\n## Narzędzia systemu Vesteri\n\nPrezentacje nieruchomości LIVE, webinary i konsultacje, wsparcie kupujących dzięki AI, automatyzacja reklam oraz transkrypcje spotkań i rozmów w jednym miejscu. Vesteri przeznacza co najmniej 10% swoich przychodów na promocję Collective jako całości – nie jest to gwarancja ruchu ani zapytań dla poszczególnych członków.\n\n## Naruszenia zasad\n\nNaruszenie można zgłosić na collective@vesteri.com. Członek ma 7 dni na wyjaśnienia, Vesteri wydaje decyzję z uzasadnieniem. Możliwe środki: upomnienie, obowiązek naprawienia naruszenia, zawieszenie do 90 dni lub wykluczenie. Od decyzji przysługuje odwołanie w ciągu 14 dni.\n\n## Czego Collective nie robi\n\n- Vesteri weryfikuje członków, a nie stan prawny i techniczny każdej nieruchomości – przed zakupem warto zlecić niezależną analizę.\n\n- Vesteri nie jest stroną umów pośrednictwa ani rozliczeń między członkami.\n\n- Prywatne kanały członków i automatyczne rozliczanie prowizji nie są jeszcze dostępne.\n",
    "faq": [
      {
        "q": "Czym jest Vesteri Collective?",
        "a": "Vesteri Collective to selektywna sieć sprawdzonych, niezależnych agentów i biur nieruchomości, którzy współpracują na wspólnych zasadach Fair Play & Trust. Publiczny Vesteri Marketplace łączy oferty lokalne i zagraniczne publikowane przez członków sieci."
      },
      {
        "q": "Kto może zostać członkiem Collective?",
        "a": "Niezależni agenci i biura nieruchomości prowadzący legalną działalność pośrednictwa na swoim rynku. Vesteri weryfikuje tożsamość, działalność, wymagane licencje, wpisy lub ubezpieczenie (w Polsce: ubezpieczenie OC pośrednika) oraz akceptację zasad Fair Play & Trust. Członkostwo jest selektywne i nie każde zgłoszenie zostaje przyjęte."
      },
      {
        "q": "Ile kosztuje członkostwo?",
        "a": "Zgłoszenie, członkostwo, standardowa publikacja ofert i podstawowe funkcje systemu Vesteri są bezpłatne. Płatne są wyłącznie funkcje premium, rozliczane za użycie albo w abonamencie, według cennika dostępnego na koncie członka."
      },
      {
        "q": "Czy członek zachowuje własną markę, klientów i prowizję?",
        "a": "Tak. Członek zachowuje własną markę, klientów i prowizję z własnych ofert. Członkostwo nie tworzy wyłączności, franczyzy ani spółki z Vesteri."
      },
      {
        "q": "Jak wygląda współpraca między agentami?",
        "a": "Członek, do którego zwraca się inny członek mający zainteresowanego kupującego, podejmuje współpracę. Odmowa jest możliwa tylko z uzasadnionego powodu i wymaga krótkiego wyjaśnienia w systemie. Współpraca ma formę Polecenia albo Wspólnej Transakcji, a jej formę i zakres agenci ustalają przed pierwszą prezentacją nieruchomości."
      },
      {
        "q": "Jak dzielona jest prowizja między członkami?",
        "a": "Domyślnie, od prowizji netto faktycznie otrzymanej od klienta: przy Poleceniu 25% dla członka polecającego i 75% dla członka obsługującego, a przy Wspólnej Transakcji 50% dla Agenta Oferty i 50% dla Agenta Kupującego. Inny podział jest możliwy tylko za zgodą obu członków, potwierdzoną przed pierwszą prezentacją."
      },
      {
        "q": "Czy agent zawsze otrzymuje 60% prowizji?",
        "a": "Nie. Próg co najmniej 60% dotyczy wyłącznie wybranych inwestycji zagranicznych z portfolio Vesteri, w których Vesteri lub jego partner jest Agentem Oferty: członek, który pozyska kupującego, otrzymuje nie mniej niż 60% prowizji należnej od dewelopera. Przy współpracy między członkami obowiązuje domyślny podział 25/75 przy Poleceniu i 50/50 przy Wspólnej Transakcji."
      },
      {
        "q": "Jak długo agent jest chroniony po poleceniu kupującego?",
        "a": "Prawo do udziału w prowizji trwa 12 miesięcy od Polecenia lub rejestracji kupującego w systemie. W tym czasie członkowie nie mogą zawrzeć transakcji z poleconym klientem z pominięciem członka, który go polecił lub przedstawił."
      },
      {
        "q": "Kto rozlicza prowizje?",
        "a": "Członkowie rozliczają się bezpośrednio między sobą. Członek, który otrzymał prowizję, informuje drugiego o zamknięciu transakcji w ciągu 7 dni i wypłaca należny udział na podstawie faktury w ciągu 14 dni od otrzymania prowizji. Automatyczne rozliczanie prowizji w systemie jest jeszcze rozwijane."
      },
      {
        "q": "Co oznaczają zasady Fair Play & Trust?",
        "a": "Członkowie publikują tylko rzetelne oferty, do których mają umocowanie, jasno wskazują, kogo reprezentują, szanują kupujących i relacje z klientami innych członków, dotrzymują ustaleń, przestrzegają prawa i odpowiadają na zapytania innych członków w ciągu 2 dni roboczych."
      },
      {
        "q": "Co grozi za naruszenie zasad?",
        "a": "W zależności od wagi naruszenia: upomnienie, obowiązek naprawienia naruszenia, zawieszenie do 90 dni albo wykluczenie. Członek ma 7 dni na wyjaśnienia, a od decyzji przysługuje odwołanie w ciągu 14 dni."
      },
      {
        "q": "Czy Vesteri sprawdza stan prawny nieruchomości?",
        "a": "Nie. Vesteri weryfikuje członków sieci, a nie stan prawny i techniczny każdej publikowanej nieruchomości. Przed zakupem warto zlecić niezależną analizę prawną i techniczną."
      }
    ]
  },
  "en": {
    "title": "How Vesteri Collective Works – Rules & Commission Split",
    "description": "How the Vesteri Collective agent network works: membership and vetting, Fair Play & Trust, agent cooperation and the default commission split.",
    "eyebrow": "VESTERI COLLECTIVE · HOW IT WORKS",
    "h1": "How Vesteri Collective works",
    "lead": "Vesteri Collective is a selective network of vetted, independent real estate agents and agencies who cooperate under shared Fair Play & Trust principles. The public Vesteri Marketplace brings together local and international listings published by network members. Every member works under their own brand and, by cooperating, can offer clients more than a single agency's portfolio.",
    "ctaApply": "Apply to Join ↗",
    "ctaBrowse": "Browse properties ↗",
    "faqTitle": "Frequently asked questions",
    "rulesNote": "The full, binding rules are in the",
    "rulesLink": "Vesteri Collective Rules",
    "body": "## The network in three sentences\n\n- **For buyers:** one trusted agent can review other members' listings and contact agents with suitable properties.\n\n- **For sellers:** one dedicated agent manages the sale, while other Collective members can introduce the property to their clients, as agreed.\n\n- **For agents:** you keep your brand, clients and the commission on your own listings, and cooperate under clear, shared rules.\n\n## Membership and vetting\n\n### Who can join\n\nIndependent real estate agents and agencies lawfully operating as property intermediaries in their market.\n\n### How vetting works\n\nYou apply for free in the Vesteri system. Vesteri reviews identity, business activity, licences, registrations or insurance required in your market (in Poland: professional liability insurance for real estate intermediaries) and acceptance of the Fair Play & Trust principles. Membership is selective – not every application is approved, and review time depends on the country and the completeness of the application.\n\n### What membership gives you\n\nOnce approved, you can publish listings on Vesteri Marketplace, use the Vesteri system, cooperate with other members and use the \"Vesteri Collective Member\" designation. Membership does not create exclusivity, a franchise or a partnership with Vesteri.\n\n### What it costs\n\nApplying, membership, standard listing publication and core system features are free. Only premium features are paid – per use or by subscription, according to the price list in the member account.\n\n## Fair Play & Trust principles\n\nEvery member commits to:\n\n1. **Accurate listings** – only listings they are authorised to market, with true and current data; unavailable listings removed within 3 business days.\n\n2. **Transparent representation** – clearly stating whom they represent; every listing names the responsible agent.\n\n3. **Respect for buyers** – no pressure, no hiding material information, no promises on returns, timelines or financing they cannot keep.\n\n4. **Respect for relationships** – no taking over or bypassing other members' clients.\n\n5. **Keeping agreements** – honouring agreed referrals and joint transactions and settling on time.\n\n6. **Loyalty to the network** – no use of system data beyond the purpose of cooperation.\n\n7. **Legal compliance** – brokerage, AML, consumer protection and data protection rules.\n\n8. **Communication** – replying to other members' enquiries within 2 business days.\n\n## How agents cooperate\n\n### A duty to cooperate\n\nA member approached by another member who has an interested buyer is expected to cooperate. Declining is only allowed for a justified reason (e.g. no owner consent, a conflict of interest) and requires a short explanation in the system.\n\n### Two forms of cooperation\n\n- **Referral** – you pass a buyer or seller contact to another member without further client handling.\n\n- **Joint Transaction** – the Listing Agent and the Buyer's Agent serve the client together until closing.\n\nThe form and scope are agreed before the first property viewing.\n\n## Commission split\n\nThe general Collective rule: agents cooperate and share commission. The default split is based on the net commission actually received from the client:\n\n| Form of cooperation | Split |\n|---|---|\n| Referral | 25% referring member · 75% handling member |\n| Joint Transaction | 50% Listing Agent · 50% Buyer's Agent |\n\nA different split is only possible with both members' agreement, confirmed in the system or by email before the first viewing. Without such agreement, the default applies.\n\n### Buyer attribution and protection period\n\nA buyer is attributed to the member who first registered them in the system for a given listing or search, unless another member shows an earlier, documented relationship. The right to a commission share lasts 12 months, during which bypassing the referring or introducing member is prohibited.\n\n### Settlement\n\nMembers settle directly with each other: notice of a closed deal within 7 days, payment of the share against an invoice within 14 days of receiving the commission. Automated deal attribution and commission settlement are still being developed.\n\n## International developments in Vesteri's portfolio\n\nVesteri makes selected international developments available to members, where Vesteri or its partner acts as the Listing Agent under agreements with developers. The member who brings the buyer receives the larger share of the developer commission – **at least 60%** – on the terms in the listing card or agreed individually before the first viewing. **The 60% minimum applies only to these Vesteri international developments.** Cooperation between members follows the default split described above (25/75 or 50/50). Vesteri arranges LIVE presentations, webinars and contact with the developer.\n\n## Vesteri system tools\n\nLIVE property presentations, webinars and consultations, AI-powered buyer assistance, advertising automation, and transcripts of meetings and conversations in one place. Vesteri commits at least 10% of its revenue to promoting Collective as a whole – this is not a guarantee of traffic or enquiries for individual members.\n\n## Breaches of the rules\n\nBreaches can be reported to collective@vesteri.com. The member has 7 days to respond and Vesteri issues a reasoned decision. Possible measures: a warning, an obligation to remedy, suspension for up to 90 days or removal. Decisions can be appealed within 14 days.\n\n## What Collective does not do\n\n- Vesteri vets members, not the legal and technical status of every property – consider independent due diligence before buying.\n\n- Vesteri is not a party to brokerage agreements or settlements between members.\n\n- Private member channels and automated commission settlement are not yet available.\n",
    "faq": [
      {
        "q": "What is Vesteri Collective?",
        "a": "Vesteri Collective is a selective network of vetted, independent real estate agents and agencies who cooperate under shared Fair Play & Trust principles. The public Vesteri Marketplace brings together local and international listings published by network members."
      },
      {
        "q": "Who can become a Collective member?",
        "a": "Independent real estate agents and agencies lawfully operating as property intermediaries in their market. Vesteri reviews identity, business activity, required licences, registrations or insurance (in Poland: professional liability insurance for real estate intermediaries) and acceptance of the Fair Play & Trust principles. Membership is selective and not every application is approved."
      },
      {
        "q": "How much does membership cost?",
        "a": "Applying, membership, standard listing publication and core Vesteri system features are free. Only premium features are paid, either per use or by subscription, according to the price list in the member account."
      },
      {
        "q": "Do members keep their brand, clients and commission?",
        "a": "Yes. Members keep their own brand, clients and the commission on their own listings. Membership does not create exclusivity, a franchise or a partnership with Vesteri."
      },
      {
        "q": "How does cooperation between agents work?",
        "a": "A member approached by another member who has an interested buyer is expected to cooperate. Declining is only allowed for a justified reason and requires a short explanation in the system. Cooperation takes the form of a Referral or a Joint Transaction, and agents agree its form and scope before the first property viewing."
      },
      {
        "q": "How is commission shared between members?",
        "a": "By default, based on the net commission actually received from the client: for a Referral, 25% to the referring member and 75% to the member handling the client; for a Joint Transaction, 50% to the Listing Agent and 50% to the Buyer's Agent. A different split is only possible with both members' agreement, confirmed before the first viewing."
      },
      {
        "q": "Does an agent always receive 60% of the commission?",
        "a": "No. The minimum 60% applies only to selected international developments in Vesteri's portfolio, where Vesteri or its partner is the Listing Agent: the member who brings the buyer receives at least 60% of the commission due from the developer. For cooperation between members, the default split is 25/75 for a Referral and 50/50 for a Joint Transaction."
      },
      {
        "q": "How long is an agent protected after referring a buyer?",
        "a": "The right to a share of the commission lasts 12 months from the Referral or the buyer's registration in the system. During that period, members may not close a deal with a referred client while bypassing the member who referred or introduced them."
      },
      {
        "q": "Who settles commissions?",
        "a": "Members settle directly with each other. The member who received the commission informs the other member of the closed deal within 7 days and pays the share due, against an invoice, within 14 days of receiving the commission. Automated commission settlement in the system is still being developed."
      },
      {
        "q": "What do the Fair Play & Trust principles mean?",
        "a": "Members publish only accurate listings they are authorised to market, clearly state whom they represent, respect buyers and other members' client relationships, keep their agreements, comply with the law and reply to other members' enquiries within 2 business days."
      },
      {
        "q": "What happens if a member breaks the rules?",
        "a": "Depending on severity: a warning, an obligation to remedy the breach, suspension for up to 90 days or removal. The member has 7 days to respond, and decisions can be appealed within 14 days."
      },
      {
        "q": "Does Vesteri check the legal status of properties?",
        "a": "No. Vesteri vets network members, not the legal and technical status of every listed property. Before buying, consider independent legal and technical due diligence."
      }
    ]
  }
};
