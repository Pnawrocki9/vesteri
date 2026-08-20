// Bottom-of-funnel comparison pages, aimed at the developer audience — the
// one with a working call to action. Framing follows the site’s positioning:
// portals, own sales offices and broker networks all have their place; Vesteri
// is the demand-and-qualification layer that hands the developer a described
// investor. Every Vesteri claim here restates existing site copy — no new
// product claims.
//
// Slugs are localized per locale, the same way articles work: the Polish and
// English versions of one comparison do not share an address.

export type CompareLocale = 'pl' | 'en';

export type ComparisonCopy = {
  slug: string;
  breadcrumbName: string;
  metaTitle: string;
  metaDescription: string;
  cardTitle: string;
  cardBlurb: string;
  h1: string;
  sub: string;
  verdict: { kicker: string; h2: string; body: string[] };
  table: {
    kicker: string;
    h2: string;
    dimensionLabel: string;
    competitorLabel: string;
    vesteriLabel: string;
    rows: { dimension: string; them: string; vesteri: string }[];
  };
  honest: { kicker: string; h2: string; intro: string; points: string[] };
  advantage: { kicker: string; h2: string; cards: { title: string; body: string }[] };
  faq: { kicker: string; h2: string; items: { q: string; a: string }[] };
  finalCta: { h2: string; body: string };
};

export type Comparison = { id: string; locales: Record<CompareLocale, ComparisonCopy> };

export const COMPARISONS: Comparison[] = [
  {
    id: 'portal-leads',
    locales: {
      pl: {
        slug: 'leady-z-portali',
        breadcrumbName: 'Leady z portali',
        metaTitle: 'Leady z portali czy inwestor po webinarze? | VESTERI',
        metaDescription:
          'Lead z portalu to adres e-mail z formularza. Vesteri przekazuje inwestora po webinarze, ze scoringiem i pełnym zapisem pytań. Uczciwe porównanie obu dróg.',
        cardTitle: 'Kupowanie leadów z portali',
        cardBlurb:
          'Adres z formularza kontra inwestor po webinarze z profilem intencji. Co naprawdę trafia do Twojego zespołu?',
        h1: 'Alternatywa dla kupowania leadów z portali',
        sub: 'Portale są zbudowane do zasięgu i robią to dobrze. Tyle że lead z portalu to wciąż tylko formularz: bez budżetu, bez terminu, bez dowodu, że ktoś w ogóle odbierze telefon. Vesteri buduje popyt kampanią, kwalifikuje go na webinarze i przekazuje Twojemu zespołowi inwestora, który przychodzi przygotowany.',
        verdict: {
          kicker: 'Krótka odpowiedź',
          h2: 'Portale dają zasięg. Vesteri oddaje opisanego inwestora.',
          body: [
            'Lead z portalu Twój zespół dopiero zaczyna poznawać. Ktoś dzwoni, dopytuje, tłumaczy podstawy, często w obcym języku, i tak przez kilka rozmów, z których większość kończy się niczym. Płacisz za kontakt, a kwalifikację i tak wykonujesz sam.',
            'W Vesteri kwalifikacja dzieje się przed przekazaniem. Prowadzimy lokalny marketing Twoich projektów, komplet informacji podaje w języku inwestora asystent AI oparty wyłącznie na Twoich materiałach, a na webinarze prezentujesz Ty, przy naszym moderatorze. System ocenia gotowość zakupową po tym, co uczestnik naprawdę robi, i przekazuje Ci wyłącznie osoby powyżej progu kwalifikacji, z pełnym zapisem ich pytań i zainteresowań.',
          ],
        },
        table: {
          kicker: 'Obok siebie',
          h2: 'Lead z portalu a inwestor z Vesteri',
          dimensionLabel: 'Co się liczy',
          competitorLabel: 'Lead z portalu',
          vesteriLabel: 'Inwestor z Vesteri',
          rows: [
            {
              dimension: 'Co dostaje Twój zespół',
              them: 'Adres e-mail i numer z formularza. Resztę trzeba ustalić samodzielnie.',
              vesteri:
                'Inwestora po webinarze, z pełnym profilem intencji: zapisem pytań i zainteresowań.',
            },
            {
              dimension: 'Kwalifikacja',
              them: 'Deklaracje z formularza, bez pokrycia w zachowaniu.',
              vesteri:
                'Scoring według ujawnionych preferencji; przekazywani są wyłącznie ci powyżej progu kwalifikacji.',
            },
            {
              dimension: 'Kto odpowiada na pytania',
              them: 'Twój zespół, od zera, często w obcym języku.',
              vesteri:
                'Asystent AI w języku inwestora, oparty wyłącznie na materiałach dewelopera. Działa w trakcie webinaru i długo po nim.',
            },
            {
              dimension: 'Skąd popyt',
              them: 'Ruch, który portal akurat ma na Twoim rynku.',
              vesteri:
                'Kampanie targetowane geograficznie i językowo na rynkach źródłowych. Polska jest aktywna, kolejne kraje w drodze.',
            },
            {
              dimension: 'Po przekazaniu',
              them: 'Kontakt się kończy, a następny lead znów kosztuje.',
              vesteri:
                'Kontakty do niezależnych kancelarii budują zaufanie inwestora, a uczestnicy wracają na kolejne webinary i polecają je znajomym.',
            },
          ],
        },
        honest: {
          kicker: 'Uczciwie',
          h2: 'Kiedy leady z portali wystarczą',
          intro: 'Portale naprawdę wygrywają na szerokim zasięgu. Bywa, że warstwa kwalifikacji nie jest potrzebna, na przykład gdy:',
          points: [
            'Sprzedajesz głównie lokalnym kupującym, którzy znają rynek i mogą przyjechać na miejsce w tym samym tygodniu.',
            'Twój zespół ma wolne moce i bez problemu ręcznie kwalifikuje duże wolumeny niesprawdzonych zapytań.',
            'Zależy Ci głównie na obecności ogłoszeń w wynikach wyszukiwania.',
          ],
        },
        advantage: {
          kicker: 'Co zmienia Vesteri',
          h2: 'Od formularza do rozmowy z przygotowanym inwestorem',
          cards: [
            {
              title: 'Profil intencji, nie lista adresów',
              body: 'Platforma rejestruje, przy którym projekcie uczestnik zostaje, o co pyta, co pomija i kiedy się rozłącza. Z jednego spotkania powstaje profil zainteresowania.',
            },
            {
              title: 'Webinar jako kwalifikacja',
              body: 'Nasz moderator prowadzi dyskusję, Ty prezentujesz i odpowiadasz na pytania na żywo. Inwestor poznaje projekt od Ciebie, nie z opisu.',
            },
            {
              title: 'AI zamiast dwudziestego telefonu',
              body: 'Asystent zna każdy projekt w portfelu dogłębnie i odpowiada od razu, w języku inwestora. Twój zespół nie tłumaczy tego samego dwudziesty raz.',
            },
            {
              title: 'Kontakt bezpośredni',
              body: 'Dostajesz popyt, dane i bezpośredni kontakt z klientami, bez pośredników. Sprzedaż zostaje po Twojej stronie, a my pomagamy, kiedy tego chcesz.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Częste pytania',
          items: [
            {
              q: 'Czy muszę rezygnować z portali, żeby pracować z Vesteri?',
              a: 'Nie. Vesteri buduje własny popyt kampaniami i webinarami, więc portale mogą działać równolegle. Różnica dotyczy tego, co trafia do Twojego zespołu: formularz albo opisany inwestor.',
            },
            {
              q: 'Czym różni się przekazany inwestor od leada?',
              a: 'Lead to dane kontaktowe. Inwestor z Vesteri przeszedł webinar, a system ocenił jego gotowość zakupową i zapisał pełną historię pytań i zainteresowań. Dzwonisz, wiedząc, kto jest po drugiej stronie i czego szuka.',
            },
            {
              q: 'Co muszę przygotować na start?',
              a: 'Dokumentację inwestycji. Zbieramy ją od Ciebie, porządkujemy i tworzymy z niej bazę wiedzy dla czatu AI. Inwestorzy dostają dzięki temu odpowiedzi oparte wyłącznie na Twoich materiałach.',
            },
            {
              q: 'Ile trwa wejście na nowy rynek źródłowy?',
              a: 'Tygodnie, nie kwartały. Nie budujemy lokalnych struktur sprzedażowych, więc start nie czeka na biuro ani na zespół.',
            },
          ],
        },
        finalCta: {
          h2: 'Zobacz, jak wygląda inwestor z profilem intencji',
          body: 'Umów rozmowę. Pokażemy Ci proces od lokalnej kampanii do przekazania inwestora i to, co dokładnie dostaje Twój zespół.',
        },
      },
      en: {
        slug: 'portal-leads',
        breadcrumbName: 'Portal leads',
        metaTitle: 'Portal Leads vs Webinar-Qualified Investors | VESTERI',
        metaDescription:
          'A portal lead is a form fill. Vesteri hands your team an investor qualified on a live webinar, with a full record of their questions. An honest comparison.',
        cardTitle: 'Buying portal leads',
        cardBlurb:
          'A form fill versus a webinar-qualified investor with an intent profile. What actually lands on your team’s desk?',
        h1: 'The alternative to buying portal leads',
        sub: 'Portals are built for reach, and they are good at it. A portal lead is still just a form, though: no budget, no timeline, no evidence anyone will pick up the phone. Vesteri builds demand with campaigns, qualifies it on a live webinar and hands your team an investor who arrives ready.',
        verdict: {
          kicker: 'The short answer',
          h2: 'Portals deliver reach. Vesteri delivers a described investor.',
          body: [
            'A portal lead is someone your team starts learning about from zero. Somebody calls, probes, explains the basics, often in a foreign language, across several conversations that mostly go nowhere. You pay for the contact and still do the qualifying yourself.',
            'With Vesteri, qualification happens before the handover. We run local marketing for your projects, an AI assistant grounded solely in your materials answers in the investor’s language, and on the webinar you present while our moderator hosts. The system rates purchase readiness by what each participant actually does, then passes on only those who clear the qualification bar, together with a full record of their questions and interests.',
          ],
        },
        table: {
          kicker: 'Side by side',
          h2: 'A portal lead vs a Vesteri investor',
          dimensionLabel: 'What matters',
          competitorLabel: 'Portal lead',
          vesteriLabel: 'Vesteri investor',
          rows: [
            {
              dimension: 'What your team receives',
              them: 'An email address and a number from a form. Everything else is yours to find out.',
              vesteri:
                'An investor who attended a webinar, with a full intent profile: the record of their questions and interests.',
            },
            {
              dimension: 'Qualification',
              them: 'Form declarations, with no behaviour to back them up.',
              vesteri:
                'Scoring by revealed preferences; only those who clear the qualification bar are passed on.',
            },
            {
              dimension: 'Who answers the questions',
              them: 'Your team, from scratch, often in a foreign language.',
              vesteri:
                'An AI assistant in the investor’s language, grounded solely in the developer’s materials. It works during the webinar and long after.',
            },
            {
              dimension: 'Where the demand comes from',
              them: 'Whatever traffic the portal happens to have on your market.',
              vesteri:
                'Campaigns targeted by geography and language on source markets. Poland is active, with more countries on the way.',
            },
            {
              dimension: 'After the handover',
              them: 'The contact ends there, and the next lead costs again.',
              vesteri:
                'Contacts to independent law firms earn investor trust, and participants come back to future webinars and bring their friends.',
            },
          ],
        },
        honest: {
          kicker: 'Fair is fair',
          h2: 'When portal leads alone are enough',
          intro: 'Portals genuinely win at broad reach. You may not need a qualification layer if:',
          points: [
            'You sell mostly to local buyers who know the market and can visit in person the same week.',
            'Your team has spare capacity and is happy manually qualifying high volumes of unvetted enquiries.',
            'What you mainly want is listing visibility in search results.',
          ],
        },
        advantage: {
          kicker: 'What changes with Vesteri',
          h2: 'From a form fill to a conversation with a prepared investor',
          cards: [
            {
              title: 'An intent profile, not an address list',
              body: 'The platform records which project holds a participant’s attention, what they ask, what they skip and when they leave. A single meeting produces a profile of real interest.',
            },
            {
              title: 'The webinar as qualification',
              body: 'Our moderator hosts the discussion; you present and answer questions live. The investor learns the project from you, not from a listing.',
            },
            {
              title: 'AI instead of the twentieth phone call',
              body: 'The assistant knows every project in the portfolio in depth and answers on the spot, in the investor’s language. Your team stops explaining the same thing for the twentieth time.',
            },
            {
              title: 'Direct contact',
              body: 'You get demand, data and direct contact with your clients, with no middlemen. Sales stay on your side, and we help whenever you want us to.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Common questions',
          items: [
            {
              q: 'Do I have to drop my portals to work with Vesteri?',
              a: 'No. Vesteri builds its own demand with campaigns and webinars, so portals can run in parallel. The difference is what reaches your team: a form fill or a described investor.',
            },
            {
              q: 'How is a handed-over investor different from a lead?',
              a: 'A lead is contact data. A Vesteri investor attended a webinar, the system rated their purchase readiness, and the full history of their questions and interests comes with them. You call knowing who is on the other end and what they are looking for.',
            },
            {
              q: 'What do I need to prepare to start?',
              a: 'Your investment documentation. We collect and organise it, then turn it into the knowledge base behind the AI chat, so investors get answers grounded solely in your materials.',
            },
            {
              q: 'How long does entering a new source market take?',
              a: 'Weeks, not quarters. We build no local sales structures, so the start never waits for an office or a team.',
            },
          ],
        },
        finalCta: {
          h2: 'See what an investor with an intent profile looks like',
          body: 'Book a call and we will walk you through the process, from a local campaign to the handover, including exactly what your team receives.',
        },
      },
    },
  },

  {
    id: 'own-sales-office',
    locales: {
      pl: {
        slug: 'wlasne-biuro-sprzedazy',
        breadcrumbName: 'Własne biuro sprzedaży',
        metaTitle: 'Własne biuro sprzedaży za granicą czy Vesteri? | VESTERI',
        metaDescription:
          'Budowa własnej struktury na rynku źródłowym to kwartały i etaty. Vesteri wchodzi na rynek w tygodnie, bez lokalnych struktur. Uczciwe porównanie.',
        cardTitle: 'Własna struktura na rynku źródłowym',
        cardBlurb:
          'Kwartały budowania biura i zespołu kontra wejście na rynek w tygodnie, bez lokalnych struktur sprzedażowych.',
        h1: 'Vesteri czy własna struktura sprzedaży na rynku źródłowym',
        sub: 'Własne biuro na rynku, z którego pochodzą kupujący, daje pełną kontrolę. Daje też pełne koszty: rekrutację, wynajem, marketing od zera, wszystko w obcym języku. Vesteri istnieje po to, żeby ten sam popyt zbudować bez stawiania struktur.',
        verdict: {
          kicker: 'Krótka odpowiedź',
          h2: 'Tygodnie, nie kwartały.',
          body: [
            'Zanim własna struktura odda pierwszego kupującego, musi najpierw powstać. Lokal. Zespół, który trzeba znaleźć i wyszkolić z Twojego portfela. Kampanie w języku, którego nie znasz, i procesy, które dopiero się dotrą. Liczysz to w kwartałach, zanim cokolwiek zacznie się zwracać.',
            'Wejście z Vesteri nie czeka na żadną z tych rzeczy, bo nie budujemy lokalnych struktur sprzedażowych. My prowadzimy lokalny marketing i kwalifikację popytu na własnej platformie webinarowej, Ty prezentujesz projekty i dostajesz inwestorów z pełnym profilem intencji. Sprzedaż zostaje po Twojej stronie i prowadzisz ją samodzielnie albo z naszą pomocą.',
          ],
        },
        table: {
          kicker: 'Obok siebie',
          h2: 'Własna struktura a Vesteri',
          dimensionLabel: 'Co się liczy',
          competitorLabel: 'Własne biuro za granicą',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Czas wejścia na rynek',
              them: 'Kwartały: lokal, rekrutacja, szkolenia, docieranie procesów.',
              vesteri: 'Tygodnie, bo lokalne struktury sprzedażowe nie powstają wcale.',
            },
            {
              dimension: 'Zespół',
              them: 'Etaty na rynku, którego dopiero się uczysz.',
              vesteri:
                'My prowadzimy show jako moderator. Ekspertem i sprzedawcą jesteś Ty.',
            },
            {
              dimension: 'Wiedza o produkcie',
              them: 'Nowy zespół uczy się portfela miesiącami i popełnia błędy na klientach.',
              vesteri:
                'Asystent AI zna każdy projekt dogłębnie i odpowiada wyłącznie na podstawie Twojej dokumentacji.',
            },
            {
              dimension: 'Język i komunikacja',
              them: 'Wszystko w języku rynku źródłowego, na Twój koszt.',
              vesteri:
                'Inwestorzy otrzymują odpowiedzi w swoim języku, a kampanie są targetowane geograficznie i językowo.',
            },
            {
              dimension: 'Skalowanie na kolejne rynki',
              them: 'Każdy nowy kraj to nowa struktura od zera.',
              vesteri:
                'Ten sam proces webinarowy. Kolejne rynki źródłowe dochodzą bez nowych biur: Polska jest aktywna, następne kraje w drodze.',
            },
          ],
        },
        honest: {
          kicker: 'Uczciwie',
          h2: 'Kiedy własna struktura ma sens',
          intro: 'Własne biuro potrafi być właściwą decyzją. Rozważ je, jeśli:',
          points: [
            'Wiążesz się z jednym rynkiem źródłowym na lata, a wolumen sprzedaży uzasadnia stałe etaty.',
            'Twoja marka wymaga fizycznej obecności: showroomu, biura, obsługi posprzedażowej na miejscu.',
            'Chcesz kontrolować każdy etap procesu osobiście, łącznie z pierwszym kontaktem.',
          ],
        },
        advantage: {
          kicker: 'Co zmienia Vesteri',
          h2: 'Popyt z nowego rynku bez budowania na nim firmy',
          cards: [
            {
              title: 'Start w tygodnie',
              body: 'Wejście na nowy rynek trwa tygodnie, bo nie powstają żadne lokalne struktury sprzedażowe. Zaczynasz od kampanii zamiast od rekrutacji.',
            },
            {
              title: 'Twój zespół nie rośnie',
              body: 'Kwalifikację prowadzi platforma: scoring według ujawnionych preferencji i próg, poniżej którego nikt nie trafia na Twoje biurko.',
            },
            {
              title: 'Dane z każdego webinaru',
              body: 'Każda kampania uczy system, co naprawdę prowadzi do zakupu, a z jednego spotkania powstaje profil zainteresowania każdego uczestnika.',
            },
            {
              title: 'Sprzedaż zostaje Twoja',
              body: 'Przekazujemy inwestora z pełnym profilem intencji, a proces prowadzisz dalej samodzielnie albo z naszą pomocą. Nie jesteś z tym sam.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Częste pytania',
          items: [
            {
              q: 'Czy Vesteri przejmuje moją sprzedaż?',
              a: 'Nie. Dostarczamy popyt, dane i bezpośredni kontakt z klientami. Sprzedaż zostaje po Twojej stronie, a my pomagamy wtedy, kiedy o to poprosisz.',
            },
            {
              q: 'Skąd bierze się popyt?',
              a: 'Z lokalnych kampanii marketingowych Twoich projektów, targetowanych geograficznie i językowo. Polska jest rynkiem aktywnym, a kolejne kraje źródłowe dojdą wkrótce.',
            },
            {
              q: 'Co dokładnie dostaje mój zespół?',
              a: 'Inwestora, który przeszedł próg kwalifikacji, razem z pełnym zapisem jego pytań i zainteresowań z webinaru.',
            },
            {
              q: 'Czego potrzebujecie ode mnie na start?',
              a: 'Dokumentacji inwestycji i Twojej obecności na webinarze. Nasz moderator prowadzi dyskusję, Ty prezentujesz i odpowiadasz na pytania na żywo.',
            },
          ],
        },
        finalCta: {
          h2: 'Policz z nami wejście na nowy rynek',
          body: 'Umów rozmowę. Porównamy, jak wygląda Twój plan wejścia na rynek źródłowy z Vesteri i bez niego.',
        },
      },
      en: {
        slug: 'own-sales-office',
        breadcrumbName: 'Own sales office',
        metaTitle: 'Own Foreign Sales Office vs Vesteri | VESTERI',
        metaDescription:
          'Building your own structure on a source market takes quarters and headcount. Vesteri enters in weeks, with no local structures. An honest comparison.',
        cardTitle: 'Your own structure on a source market',
        cardBlurb:
          'Quarters of building an office and a team versus entering a market in weeks, with no local sales structures.',
        h1: 'Vesteri vs your own sales structure on a source market',
        sub: 'An office on the market your buyers come from gives you full control. It also gives you full costs: recruitment, rent, marketing from zero, all in a language that is not yours. Vesteri exists to build the same demand without building the structures.',
        verdict: {
          kicker: 'The short answer',
          h2: 'Weeks, not quarters.',
          body: [
            'Before your own structure hands you its first buyer, it has to exist. Premises. A team you must find and train on your portfolio. Campaigns in a language you do not speak, and processes that still need to settle. You count that in quarters before it returns anything.',
            'Entering with Vesteri waits for none of it, because we build no local sales structures. We run the local marketing and qualify the demand on our own webinar platform, you present the projects and receive investors with a full intent profile. Sales stay on your side, and you run the process yourself or with our help.',
          ],
        },
        table: {
          kicker: 'Side by side',
          h2: 'Your own structure vs Vesteri',
          dimensionLabel: 'What matters',
          competitorLabel: 'Own office abroad',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Time to enter the market',
              them: 'Quarters: premises, recruitment, training, processes settling in.',
              vesteri: 'Weeks, because no local sales structures get built at all.',
            },
            {
              dimension: 'The team',
              them: 'Headcount on a market you are still learning.',
              vesteri: 'We run the show as moderator. The expert and the seller is you.',
            },
            {
              dimension: 'Product knowledge',
              them: 'A new team learns your portfolio for months and makes its mistakes on clients.',
              vesteri:
                'The AI assistant knows every project in depth and answers solely from your documentation.',
            },
            {
              dimension: 'Language and communication',
              them: 'Everything in the source market’s language, at your expense.',
              vesteri:
                'Investors get answers in their own language, and campaigns are targeted by geography and language.',
            },
            {
              dimension: 'Scaling to further markets',
              them: 'Every new country is a new structure from zero.',
              vesteri:
                'The same webinar process. New source markets arrive without new offices: Poland is active, with more countries on the way.',
            },
          ],
        },
        honest: {
          kicker: 'Fair is fair',
          h2: 'When your own structure makes sense',
          intro: 'An office of your own can be the right call. Consider it if:',
          points: [
            'You are committing to one source market for years and the sales volume justifies permanent headcount.',
            'Your brand needs a physical presence: a showroom, an office, after-sales service on the ground.',
            'You want to control every step of the process personally, including the first contact.',
          ],
        },
        advantage: {
          kicker: 'What changes with Vesteri',
          h2: 'Demand from a new market without building a company on it',
          cards: [
            {
              title: 'A start measured in weeks',
              body: 'Entering a new market takes weeks because no local sales structures are built. You start with a campaign, not a recruitment round.',
            },
            {
              title: 'Your team does not grow',
              body: 'The platform does the qualifying: scoring by revealed preferences, and a bar below which nobody reaches your desk.',
            },
            {
              title: 'Data from every webinar',
              body: 'Every campaign teaches the system a little more about what leads to a purchase, and a single meeting produces a profile of each participant’s real interest.',
            },
            {
              title: 'Sales stay yours',
              body: 'We hand over an investor with a full intent profile, and you take the process from there, on your own or with our help. You are not alone in it.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Common questions',
          items: [
            {
              q: 'Does Vesteri take over my sales?',
              a: 'No. We deliver demand, data and direct contact with your clients. Sales stay on your side, and we help whenever you ask.',
            },
            {
              q: 'Where does the demand come from?',
              a: 'From local marketing campaigns for your projects, targeted by geography and language. Poland is the active market, with more source countries coming.',
            },
            {
              q: 'What exactly does my team receive?',
              a: 'An investor who cleared the qualification bar, together with the full record of their webinar questions and interests.',
            },
            {
              q: 'What do you need from me to start?',
              a: 'Your investment documentation and your presence on the webinar. Our moderator hosts the discussion, you present and answer questions live.',
            },
          ],
        },
        finalCta: {
          h2: 'Price out a market entry with us',
          body: 'Book a call and we will compare what your source-market entry looks like with Vesteri and without it.',
        },
      },
    },
  },

  {
    id: 'broker-networks',
    locales: {
      pl: {
        slug: 'siec-posrednikow',
        breadcrumbName: 'Sieć pośredników',
        metaTitle: 'Sieć pośredników czy kontakt bezpośredni? | VESTERI',
        metaDescription:
          'Pośrednik z dziesiątkami ofert w portfolio to bufor między Tobą a kupującym. Vesteri oddaje deweloperowi kontakt bezpośredni. Uczciwe porównanie.',
        cardTitle: 'Sprzedaż przez sieci pośredników',
        cardBlurb:
          'Agent z wieloma ofertami w portfolio kontra Twoja prezentacja na żywo i kontakt bezpośredni z kupującym.',
        h1: 'Vesteri czy sieć pośredników',
        sub: 'Sieć pośredników daje ręce do pracy na rynku, na którym ich nie masz. Tyle że każdy z tych pośredników ma w portfolio wiele ofert, żadnej nie zna dogłębnie i staje między Tobą a kupującym. Vesteri odwraca ten układ: prezentujesz Ty, a kontakt zostaje u Ciebie.',
        verdict: {
          kicker: 'Krótka odpowiedź',
          h2: 'Pośrednik to bufor. Vesteri oddaje Ci kontakt.',
          body: [
            'Sprzedawca z wieloma ofertami w portfolio sprzedaje to, co w danym tygodniu łatwiej sprzedać, a każdą z tych ofert zna tylko na tyle, na ile starczyło mu czasu. Kupujący dostaje wiedzę z drugiej ręki. Ty relację z klientem oglądasz przez cudze notatki.',
            'W Vesteri nie ma bufora. Nasz moderator prowadzi webinar, ale projekt prezentujesz Ty i to Ty odpowiadasz na pytania na żywo. Między spotkaniami pytania obsługuje asystent AI oparty wyłącznie na Twoich materiałach. Po przekazaniu inwestor jest Twój, z pełnym zapisem pytań i zainteresowań, bez nikogo pomiędzy.',
          ],
        },
        table: {
          kicker: 'Obok siebie',
          h2: 'Sieć pośredników a Vesteri',
          dimensionLabel: 'Co się liczy',
          competitorLabel: 'Sieć pośredników',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Kto zna Twój projekt',
              them: 'Agent, który ma w portfolio wiele ofert i żadnej nie zna dogłębnie.',
              vesteri:
                'Ty prezentujesz na żywo, a asystent AI zna każdy projekt dogłębnie, wyłącznie z Twojej dokumentacji.',
            },
            {
              dimension: 'Kontakt z kupującym',
              them: 'Przez pośrednika, więc relacja należy do niego.',
              vesteri: 'Bezpośredni: inwestor trafia do Twojego zespołu, bez nikogo pomiędzy.',
            },
            {
              dimension: 'Co wiesz o kupującym',
              them: 'Tyle, ile pośrednik zanotuje i zechce przekazać.',
              vesteri:
                'Pełny profil intencji: zapis pytań i zainteresowań z webinaru, scoring gotowości zakupowej.',
            },
            {
              dimension: 'Priorytet kanału',
              them: 'Agent sprzedaje z całego portfolio, więc Twoja oferta konkuruje u niego z innymi.',
              vesteri:
                'Webinar dotyczy Twoich projektów, a uczestnicy wracają na kolejne spotkania i polecają je znajomym.',
            },
            {
              dimension: 'Zaufanie kupującego',
              them: 'Oparte na osobie agenta. Kończy się razem z nim.',
              vesteri:
                'Budowane systemowo: kontakty do niezależnych kancelarii prawnych na rynku docelowym.',
            },
          ],
        },
        honest: {
          kicker: 'Uczciwie',
          h2: 'Kiedy sieć pośredników wystarczy',
          intro: 'Sieci pośredników mają swoje miejsce. Mogą wystarczyć, jeśli:',
          points: [
            'Chcesz zerowego zaangażowania w prezentację: ktoś ma sprzedawać za Ciebie, nawet kosztem głębi.',
            'Twój produkt sprzedaje się lokalnie od ręki i nie wymaga tłumaczenia zagranicznemu kupującemu.',
            'Zależy Ci na obecności w kanałach relacyjnych, których żadna platforma nie zastąpi.',
          ],
        },
        advantage: {
          kicker: 'Co zmienia Vesteri',
          h2: 'Z drugiej ręki na pierwszą',
          cards: [
            {
              title: 'Bez bufora',
              body: 'Dostajesz popyt, dane i kontakt bezpośredni z klientami zamiast kolejnego sprzedawcy z wieloma ofertami w portfolio i brakiem dogłębnej wiedzy o każdej z nich.',
            },
            {
              title: 'Wiedza bez luk',
              body: 'Baza wiedzy powstaje z Twojej dokumentacji, a asystent AI odpowiada wyłącznie na jej podstawie. Nikt niczego nie pominie, bo zabrakło mu wiedzy.',
            },
            {
              title: 'Prezentujesz Ty',
              body: 'Nasz moderator prowadzi dyskusję, Ty prezentujesz i odpowiadasz na pytania na żywo. Ekspertem i sprzedawcą jesteś Ty.',
            },
            {
              title: 'Zaufanie systemowe',
              body: 'Inwestor dostaje kontakty do zweryfikowanych, niezależnych biur prawnych na rynku docelowym. Takie zaufanie nie zależy od jednej osoby.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Częste pytania',
          items: [
            {
              q: 'Czy Vesteri jest po prostu kolejnym pośrednikiem?',
              a: 'Nie w tym sensie, w jakim jest nim agent z portfolio ofert. Dostarczamy popyt, dane i bezpośredni kontakt z klientami. Prezentujesz Ty, a sprzedaż zostaje po Twojej stronie.',
            },
            {
              q: 'Kto prowadzi webinar?',
              a: 'Nasz moderator prowadzi dyskusję; Ty prezentujesz projekt i odpowiadasz na pytania na żywo.',
            },
            {
              q: 'Czy mogę łączyć Vesteri z istniejącą siecią pośredników?',
              a: 'Tak. Vesteri buduje własny popyt na rynkach źródłowych i przekazuje go bezpośrednio Tobie, więc dotychczasowe kanały mogą działać równolegle.',
            },
            {
              q: 'Jak przygotowany jest inwestor przed rozmową?',
              a: 'Obejrzał webinar, zadawał pytania i dostał odpowiedzi oparte na Twoich materiałach, a system ocenił jego gotowość zakupową. Do Ciebie trafia z pełnym profilem intencji.',
            },
          ],
        },
        finalCta: {
          h2: 'Porozmawiajmy o kanale bez bufora',
          body: 'Umów rozmowę. Pokażemy, jak wygląda webinar deweloperski i co dokładnie trafia do Twojego zespołu po przekazaniu.',
        },
      },
      en: {
        slug: 'broker-networks',
        breadcrumbName: 'Broker networks',
        metaTitle: 'Broker Networks vs Direct Investor Contact | VESTERI',
        metaDescription:
          'A broker with dozens of listings is a buffer between you and the buyer. Vesteri gives the developer direct contact. An honest comparison of both channels.',
        cardTitle: 'Selling through broker networks',
        cardBlurb:
          'An agent juggling a portfolio of listings versus your own live presentation and direct contact with the buyer.',
        h1: 'Vesteri vs a broker network',
        sub: 'A broker network gives you hands on a market where you have none. Each of those brokers carries many listings, though, knows none of them deeply, and stands between you and the buyer. With Vesteri you present yourself, and the contact stays with you.',
        verdict: {
          kicker: 'The short answer',
          h2: 'A broker is a buffer. Vesteri hands you the contact.',
          body: [
            'A salesperson with a portfolio of listings sells whatever is easiest to sell that week, and knows each listing only as well as their time allowed. The buyer gets second-hand knowledge. You watch your client relationship through someone else’s notes.',
            'With Vesteri there is no buffer. Our moderator hosts the webinar, but you present the project and answer the questions live. Between meetings an AI assistant grounded solely in your materials takes over. After the handover the investor is yours, with the full record of their questions and interests and nobody in between.',
          ],
        },
        table: {
          kicker: 'Side by side',
          h2: 'A broker network vs Vesteri',
          dimensionLabel: 'What matters',
          competitorLabel: 'Broker network',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Who knows your project',
              them: 'An agent who carries many listings and knows none of them deeply.',
              vesteri:
                'You present live, and the AI assistant knows every project in depth, solely from your documentation.',
            },
            {
              dimension: 'Contact with the buyer',
              them: 'Through the broker, so the relationship belongs to them.',
              vesteri: 'Direct: the investor lands with your team, nobody in between.',
            },
            {
              dimension: 'What you know about the buyer',
              them: 'As much as the broker notes down and chooses to pass on.',
              vesteri:
                'A full intent profile: the webinar record of questions and interests, plus a purchase-readiness score.',
            },
            {
              dimension: 'Channel priority',
              them: 'The agent sells from the whole portfolio, so your project competes inside it.',
              vesteri:
                'The webinar is about your projects, and participants come back to future meetings and bring their friends.',
            },
            {
              dimension: 'Buyer trust',
              them: 'Built on one agent’s persona. It leaves with them.',
              vesteri:
                'Built systemically: contacts to independent law firms on the target market.',
            },
          ],
        },
        honest: {
          kicker: 'Fair is fair',
          h2: 'When a broker network is enough',
          intro: 'Broker networks have their place. They may be enough if:',
          points: [
            'You want zero involvement in presenting: someone should sell for you, even at the cost of depth.',
            'Your product sells locally on sight and needs no explaining to a foreign buyer.',
            'You value relationship channels that no platform can replace.',
          ],
        },
        advantage: {
          kicker: 'What changes with Vesteri',
          h2: 'From second-hand to first-hand',
          cards: [
            {
              title: 'No buffer',
              body: 'You get demand, data and direct contact with your clients instead of another salesperson juggling a portfolio of listings without deep knowledge of any of them.',
            },
            {
              title: 'Knowledge without gaps',
              body: 'The knowledge base is built from your documentation and the AI assistant answers solely from it. Nothing gets skipped because somebody ran out of knowledge.',
            },
            {
              title: 'You do the presenting',
              body: 'Our moderator hosts the discussion; you present and answer questions live. The expert and the seller is you.',
            },
            {
              title: 'Trust by design',
              body: 'The investor receives contacts to verified, independent law firms on the target market. That kind of trust does not depend on one person.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Common questions',
          items: [
            {
              q: 'Isn’t Vesteri just another middleman?',
              a: 'Not in the sense a portfolio agent is. We deliver demand, data and direct contact with your clients. You do the presenting, and sales stay on your side.',
            },
            {
              q: 'Who runs the webinar?',
              a: 'Our moderator hosts the discussion; you present the project and answer questions live.',
            },
            {
              q: 'Can I combine Vesteri with an existing broker network?',
              a: 'Yes. Vesteri builds its own demand on source markets and hands it directly to you, so your existing channels can run in parallel.',
            },
            {
              q: 'How prepared is the investor before the first call?',
              a: 'They attended a webinar, asked questions and got answers grounded in your materials, and the system rated their purchase readiness. They reach you with a full intent profile.',
            },
          ],
        },
        finalCta: {
          h2: 'Let’s talk about a channel with no buffer',
          body: 'Book a call and we will show you what a developer webinar looks like, along with exactly what reaches your team after the handover.',
        },
      },
    },
  },
];

/** A comparison found by its localized slug, or null. */
export function findComparison(locale: CompareLocale, slug: string) {
  return COMPARISONS.find((c) => c.locales[locale].slug === slug) ?? null;
}
