import {
  commissionGuidance,
  commissionGuidanceBody,
} from './commission-guidance';

// Bilingual explanatory copy, checked against the current Collective Rules and
// approved marketing pages. FAQ answers feed both the visible FAQ and JSON-LD.
// Section IDs stay the same across locales so language switching retains anchors.
export type HowItWorksSection = {
  id: string;
  title: string;
  body: string;
};

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
  contentsTitle: string;
  skipLabel: string;
  sections: HowItWorksSection[];
  faq: { q: string; a: string }[];
};

export const howItWorks: Record<'pl' | 'en', HowItWorksContent> = {
  pl: {
    title: 'Jak działa Vesteri Collective — Vesteri Market i społeczność',
    description:
      'Społeczność niezależnych agentów, Vesteri Market i Vesteri Channels. Publikuj oferty, zdobywaj wiedzę i wymieniaj doświadczenia pod własną marką.',
    eyebrow: 'VESTERI COLLECTIVE · JAK TO DZIAŁA',
    h1: 'Jak działa Vesteri Collective',
    lead: 'Vesteri Collective to społeczność niezależnych agentów i biur nieruchomości. Łączą nas Vesteri Market, standardy profesjonalnej obsługi oraz Vesteri Channels — przestrzeń do zdobywania wiedzy, rozmów i wymiany doświadczeń. Działasz pod własną marką i samodzielnie ustalasz warunki usług z klientami.',
    ctaApply: 'Dołącz do Collective ↗',
    ctaBrowse: 'Przeglądaj nieruchomości ↗',
    faqTitle: 'Najczęstsze pytania',
    rulesNote:
      'Pełne warunki członkostwa, publikowania ofert i korzystania z Vesteri Channels zawiera Regulamin Vesteri Collective.',
    rulesLink: 'Regulamin Vesteri Collective',
    contentsTitle: 'Na tej stronie',
    skipLabel: 'Przejdź do treści',
    faq: [
      {
        q: 'Dlaczego warto dołączyć do Vesteri Collective?',
        a: 'Zyskujesz Vesteri Market do prezentowania ofert oraz Vesteri Channels — przestrzeń do zdobywania wiedzy, rozmów z agentami i wymiany doświadczeń. Zachowujesz własną markę i klientów. Możesz też korzystać z dostępnych narzędzi sprzedażowych systemu Vesteri.',
      },
      {
        q: 'Kto może zgłosić się do Vesteri Collective?',
        a: 'Konto mogą założyć niezależni agenci i biura nieruchomości, także rozpoczynający działalność. Każdemu agentowi po rejestracji wysyłamy zaproszenie do Vesteri Channels. Publikowanie ofert wymaga osobnej weryfikacji tożsamości, działalności oraz wymaganych na danym rynku uprawnień lub ubezpieczenia; w Polsce jest to OC pośrednika.',
      },
      {
        q: 'Czy mogę publikować oferty przed zatwierdzeniem konta?',
        a: 'Nie. Publikowanie nieruchomości wymaga zatwierdzenia konta. Dostęp do Vesteri Channels jest osobny: każdemu agentowi, który założy konto, wysyłamy zaproszenie e-mailem.',
      },
      {
        q: 'Czy zgłoszenie i publikowanie ofert są płatne?',
        a: 'Założenie konta, członkostwo, dostęp do Vesteri Channels i standardowe publikowanie ofert są bezpłatne. Promocja ofert w samym portalu Vesteri Market jest bezpłatna — o widoczności decyduje aktywność LIVE i webinarów. Zaproszenie do Channels otrzymuje każdy agent po rejestracji. Publikowanie ofert wymaga osobnego zatwierdzenia konta. Ceny pozostałych narzędzi premium znajdziesz na koncie agenta.',
      },
      {
        q: 'Czy zachowam własną markę i klientów?',
        a: 'Tak. Działasz pod własną marką i samodzielnie ustalasz warunki usług z klientami. Collective zapewnia Vesteri Market, społeczność i dostępne narzędzia.',
      },
      {
        q: 'Czym jest Vesteri Channels?',
        a: 'To przestrzeń komunikacji społeczności Vesteri Collective. Agenci mogą zadawać pytania, dzielić się wiedzą, wymieniać informacje o rynkach i rozmawiać o codziennej pracy.',
      },
      {
        q: 'Jak otrzymam dostęp do Vesteri Channels?',
        a: 'Załóż konto agenta na platformie Vesteri. Każdemu agentowi po rejestracji wysyłamy ręcznie zaproszenie e-mailem. Zaproszenie nie pojawia się automatycznie po utworzeniu konta. Jeśli potrzebujesz pomocy z dostępem, napisz na collective@vesteri.com.',
      },
      {
        q: 'Na czym polegają zasady Fair Play & Trust?',
        a: 'To zasady rzetelnych ofert, przejrzystej reprezentacji, szacunku wobec klientów i innych agentów oraz ochrony prywatności. W Vesteri Channels obowiązują także kultura rozmowy i zakaz spamu. Zgłoszenia naruszeń są rozpatrywane zgodnie z regulaminem.',
      },
      {
        q: 'Czy muszę podpisywać umowę na wyłączność z Vesteri?',
        a: 'Nie. Collective jest siecią niezależnych profesjonalistów, a nie tradycyjną franczyzą. Samo członkostwo nie wymaga wyłączności. Ewentualne prawa do konkretnych ofert lub inne zobowiązania umowne wymagają osobnych ustaleń zgodnych z lokalnym prawem.',
      },
      {
        q: 'Jak przebiega weryfikacja do publikowania ofert?',
        a: 'Vesteri sprawdza tożsamość, działalność i wymagane na danym rynku uprawnienia lub ubezpieczenie oraz akceptację standardów. Czas weryfikacji zależy od kraju i kompletności zgłoszenia. Zaproszenie do Vesteri Channels otrzymuje każdy agent po założeniu konta, niezależnie od tej weryfikacji.',
      },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Collective w trzech zdaniach',
        body: '- **Dla kupujących:** oferty lokalne i zagraniczne w Vesteri Market oraz bezpośredni kontakt z agentami, którzy je prezentują.\n\n- **Dla sprzedających:** profesjonalna obsługa na warunkach ustalonych z agentem i możliwość publikacji nieruchomości w Vesteri Market.\n\n- **Dla agentów:** własna marka i klienci, Vesteri Market oraz Vesteri Channels do zdobywania wiedzy i wymiany doświadczeń.',
      },
      {
        id: 'membership',
        title: 'Rejestracja i dostęp do społeczności',
        body: '1. **Załóż konto agenta** poprzez rejestrację nVesteri Market.\n\n2. **Odbierz zaproszenie e-mailem.** Każdemu agentowi po rejestracji ręcznie wysyłamy zaproszenie do Vesteri Channels.\n\n3. **Dołącz do rozmów.** Zadawaj pytania, poznawaj innych agentów i wymieniaj doświadczenia.\n\nZaproszenie jest wysyłane przez nasz zespół, dlatego nie pojawia się automatycznie po utworzeniu konta. W sprawie dostępu napisz na [collective@vesteri.com](mailto:collective@vesteri.com).',
      },
      {
        id: 'marketplace',
        title: 'Vesteri Market i publikowanie ofert',
        body: 'Vesteri Market prezentuje nieruchomości lokalne i zagraniczne publikowane przez zatwierdzonych agentów. Kupujący kontaktuje się z agentem wskazanym przy wybranej ofercie.\n\nPrzed zatwierdzeniem publikacji Vesteri sprawdza tożsamość, działalność oraz wymagane na danym rynku uprawnienia lub ubezpieczenie; w Polsce jest to OC pośrednika. Agent musi mieć uprawnienie do prezentowania nieruchomości i odpowiada za prawdziwość oraz aktualność oferty.\n\nZakres obsługi klienta, wynagrodzenie i warunki umowy ustalane są bezpośrednio między klientem a agentem.',
      },
      {
        id: 'channels',
        title: 'Vesteri Channels — wiedza i rozmowy',
        body: 'Dołącz do Vesteri Channels — miejsca, w którym agenci Collective dzielą się wiedzą, wymieniają informacje o rynkach i rozmawiają o codziennej pracy. Zadawaj pytania, poznawaj doświadczenia innych i dziel się własnymi.\n\n### Zdobywaj wiedzę\n\nKorzystaj z materiałów i doświadczeń udostępnianych przez społeczność.\n\n### Rozmawiaj z agentami\n\nZadawaj pytania i poznawaj profesjonalistów z różnych rynków.\n\n### Wymieniaj doświadczenia\n\nDziel się informacjami i praktycznymi wnioskami z codziennej pracy.',
      },
      {
        id: 'commission',
        title: commissionGuidance.pl.title,
        body: commissionGuidanceBody('pl'),
      },
      {
        id: 'fair-play',
        title: 'Wspólne standardy',
        body: '- **Rzetelne oferty:** prawdziwe i aktualne informacje oraz jasne wskazanie agenta odpowiedzialnego za prezentację.\n\n- **Szacunek wobec klientów:** przejrzyste warunki usług, ochrona prywatności i uczciwe przedstawianie nieruchomości.\n\n- **Kultura rozmowy:** rzeczowe dyskusje, szacunek wobec innych członków i brak spamu.\n\n- **Poufność:** nie publikuj danych klientów ani poufnych dokumentów w kanałach społeczności.\n\n- **Odpowiedzialność:** udostępniaj materiały, do których masz prawa, i odróżniaj doświadczenie lub opinię od zweryfikowanych informacji.',
      },
      {
        id: 'international',
        title: 'Nieruchomości na różnych rynkach',
        body: 'W Vesteri Market znajdziesz także wybrane inwestycje zagraniczne prezentowane przez Vesteri lub jego partnerów. Poznaj dostępne projekty, ich lokalizacje i materiały, a o szczegóły zapytaj agenta wskazanego przy ofercie.',
      },
      {
        id: 'tools',
        title: 'Narzędzia i koszty',
        body: 'Założenie konta, członkostwo, dostęp do Vesteri Channels, standardowa publikacja ofert i podstawowe funkcje systemu Vesteri są bezpłatne. Publikowanie ofert wymaga zatwierdzenia konta.\n\nPromocja ofert w samym portalu Vesteri Market jest bezpłatna. Widoczność budujesz aktywnością: najpierw wyświetlane są oferty z trwającym LIVE lub webinarem, potem z zaplanowanymi wydarzeniami od najbliższej daty, a następnie bez zaplanowanych wydarzeń. Organizując wydarzenia, wspierasz własne oferty, społeczność i klientów. System udostępnia także narzędzia konsultacji i wsparcia AI. Aktualny zakres funkcji, limity i ceny narzędzi premium sprawdzisz na koncie agenta.\n\nVesteri przeznacza co najmniej 10% swoich przychodów z działalności Vesteri na promocję Collective jako całości. Nie jest to gwarancja ruchu, zapytań ani sprzedaży dla poszczególnych członków.',
      },
      {
        id: 'breaches',
        title: 'Pomoc i zgłaszanie naruszeń',
        body: 'W sprawie członkostwa, zaproszenia do Channels lub naruszenia zasad napisz na [collective@vesteri.com](mailto:collective@vesteri.com). Przy zgłoszeniu naruszenia opisz sytuację i dołącz dostępne dowody.\n\nVesteri rozpatruje sprawę i umożliwia członkowi złożenie wyjaśnień. Środki obejmują upomnienie, usunięcie treści, ograniczenie dostępu, zawieszenie lub zakończenie członkostwa. Terminy, tryb odwołania i szczegółowe warunki określa regulamin.',
      },
      {
        id: 'limitations',
        title: 'Zakres odpowiedzialności',
        body: 'Agenci działają niezależnie i odpowiadają za swoje oferty oraz usługi. Vesteri zapewnia Vesteri Market, narzędzia i przestrzeń społeczności. Weryfikacja agenta nie oznacza sprawdzenia stanu prawnego ani technicznego każdej nieruchomości.\n\nMateriały i rozmowy w Channels służą wymianie wiedzy; nie zastępują indywidualnej analizy prawnej, podatkowej ani inwestycyjnej. Członkostwo nie gwarantuje liczby zapytań, transakcji ani przychodów.',
      },
    ],
  },
  en: {
    title: 'How Vesteri Collective works — Vesteri Market and community',
    description:
      'A community of independent agents, Vesteri Market and Vesteri Channels. Publish listings, learn and exchange experience while keeping your own brand.',
    eyebrow: 'VESTERI COLLECTIVE · HOW IT WORKS',
    h1: 'How Vesteri Collective works',
    lead: 'Vesteri Collective is a community of independent real estate agents and agencies. Members share Vesteri Market, professional service standards and Vesteri Channels — a space for learning, conversation and exchanging experience. Work under your own brand and agree service terms independently with your clients.',
    ctaApply: 'Join Collective ↗',
    ctaBrowse: 'Browse properties ↗',
    faqTitle: 'Frequently asked questions',
    rulesNote:
      'The Vesteri Collective Rules set out the full terms for membership, listing publication and use of Vesteri Channels.',
    rulesLink: 'Vesteri Collective Rules',
    contentsTitle: 'On this page',
    skipLabel: 'Skip to content',
    faq: [
      {
        q: 'Why join Vesteri Collective?',
        a: 'You gain Vesteri Market for your listings and Vesteri Channels — a space to learn, talk to agents and exchange experience. Keep your own brand and clients, and use the sales tools available in the Vesteri system.',
      },
      {
        q: 'Who can apply to Vesteri Collective?',
        a: 'Independent agents and agencies, including those starting out, can create an account. Every agent receives a Vesteri Channels invitation after registration. Publishing listings requires separate verification of identity, business activity and any qualifications or insurance required locally; in Poland this includes professional liability insurance.',
      },
      {
        q: 'Can I publish property listings before approval?',
        a: 'No. Publishing property listings requires account approval. Access to Vesteri Channels is separate: we email an invitation to every agent who creates an account.',
      },
      {
        q: 'Does it cost anything to apply or publish listings?',
        a: 'Account creation, membership, Vesteri Channels access and standard listing publication are free. Listing promotion within the Vesteri Market portal itself is free — visibility is driven by LIVE viewing and webinar activity. Every agent receives a Channels invitation after registration. Publishing listings requires separate account approval. Check your agent account for other premium tool prices.',
      },
      {
        q: 'Do I keep my own brand and clients?',
        a: 'Yes. Work under your own brand and agree service terms independently with your clients. Collective provides Vesteri Market, a community and available tools.',
      },
      {
        q: 'What is Vesteri Channels?',
        a: 'It is the communication space for the Vesteri Collective community. Agents can ask questions, share knowledge, exchange market information and discuss their day-to-day work.',
      },
      {
        q: 'How do I get access to Vesteri Channels?',
        a: 'Create an agent account on the Vesteri platform. We manually email an invitation to every agent after registration, so it does not appear automatically when the account is created. For help with access, contact collective@vesteri.com.',
      },
      {
        q: 'What are the Fair Play & Trust principles?',
        a: 'These principles cover accurate listings, transparent representation, respect for clients and other agents, and privacy. Vesteri Channels also requires considerate discussion and prohibits spam. Reported breaches are reviewed under the rules.',
      },
      {
        q: 'Do I need an exclusive agreement with Vesteri?',
        a: 'No. Collective is designed for independent professionals, not as a conventional franchise. Joining does not itself require exclusivity. Any specific listing rights or other contractual obligations must be separately agreed and comply with local law.',
      },
      {
        q: 'How does verification for publishing listings work?',
        a: 'Vesteri reviews identity, business activity, locally required qualifications or insurance, and acceptance of the standards. Verification time depends on the country and completeness of the application. Every agent receives a Vesteri Channels invitation after creating an account, independently of this verification.',
      },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Collective in three sentences',
        body: '- **For buyers:** local and international listings in Vesteri Market, with direct contact with the agents presenting them.\n\n- **For sellers:** professional services agreed with an agent and the opportunity to list a property in Vesteri Market.\n\n- **For agents:** your own brand and clients, Vesteri Market and Vesteri Channels for learning and exchanging experience.',
      },
      {
        id: 'membership',
        title: 'Registration and community access',
        body: '1. **Create an agent account** by registering on Vesteri Market.\n\n2. **Receive your email invitation.** We manually send a Vesteri Channels invitation to every agent after registration.\n\n3. **Join the conversation.** Ask questions, meet other agents and exchange experience.\n\nOur team sends invitations, so they do not appear automatically when an account is created. For access support, email [collective@vesteri.com](mailto:collective@vesteri.com).',
      },
      {
        id: 'marketplace',
        title: 'Vesteri Market and listing publication',
        body: 'Vesteri Market presents local and international properties published by approved agents. Buyers contact the agent identified on their chosen listing.\n\nBefore approving listing publication, Vesteri verifies identity, business activity and locally required qualifications or insurance; in Poland this includes professional liability insurance. An agent must be authorised to market the property and is responsible for accurate, current listing information.\n\nThe client and agent agree services, fees and contract terms directly.',
      },
      {
        id: 'channels',
        title: 'Vesteri Channels — knowledge and conversation',
        body: 'Join Vesteri Channels — a space where Collective agents share knowledge, exchange market information and discuss their day-to-day work. Ask questions, learn from others and share your own experience.\n\n### Build your knowledge\n\nExplore resources and experience shared by the community.\n\n### Talk to agents\n\nAsk questions and meet professionals from different markets.\n\n### Share experience\n\nExchange information and practical lessons from your day-to-day work.',
      },
      {
        id: 'commission',
        title: commissionGuidance.en.title,
        body: commissionGuidanceBody('en'),
      },
      {
        id: 'fair-play',
        title: 'Shared standards',
        body: '- **Accurate listings:** truthful, current information and clear identification of the agent presenting the property.\n\n- **Respect for clients:** transparent service terms, privacy and fair presentation of properties.\n\n- **Considerate conversation:** constructive discussions, respect for other members and no spam.\n\n- **Confidentiality:** do not post client data or confidential documents in community channels.\n\n- **Responsibility:** share materials you have the right to use and distinguish experience or opinion from verified information.',
      },
      {
        id: 'international',
        title: 'Properties across markets',
        body: 'Vesteri Market also features selected international developments presented by Vesteri or its partners. Explore available projects, locations and materials, and ask the agent named on the listing for details.',
      },
      {
        id: 'tools',
        title: 'Tools and costs',
        body: 'Account creation, membership, access to Vesteri Channels, standard listing publication and core Vesteri features are free. Publishing listings requires account approval.\n\nListing promotion within the Vesteri Market portal itself is free. Build visibility through activity: listings with a LIVE viewing or webinar in progress appear first, followed by scheduled events in nearest-date order, then listings without scheduled events. Hosting events supports your listings, the community and your clients. The system also provides consultation and AI assistance tools. Check your agent account for current features, limits and premium pricing.\n\nVesteri commits at least 10% of its Vesteri revenue to promoting Collective as a whole. This is not a guarantee of traffic, enquiries or sales for individual members.',
      },
      {
        id: 'breaches',
        title: 'Support and reporting breaches',
        body: 'For membership, Channels invitations or reporting a breach, email [collective@vesteri.com](mailto:collective@vesteri.com). Describe the issue and include available evidence when reporting a breach.\n\nVesteri reviews the case and gives the member an opportunity to respond. Measures include a warning, content removal, access restrictions, suspension or termination of membership. The rules set out deadlines, appeals and detailed conditions.',
      },
      {
        id: 'limitations',
        title: 'Scope of responsibility',
        body: 'Agents work independently and are responsible for their listings and services. Vesteri provides Vesteri Market, tools and community space. Agent verification does not mean that every property has undergone legal or technical checks.\n\nChannels resources and discussions support knowledge sharing; they do not replace individual legal, tax or investment advice. Membership does not guarantee enquiries, transactions or revenue.',
      },
    ],
  },
};
