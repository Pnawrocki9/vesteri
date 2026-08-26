// Bottom-of-funnel comparison pages, aimed at the developer audience — the
// one with a working call to action. Framing follows the site’s positioning:
// portals, own sales offices and broker networks all have their place; Vesteri
// is the demand-and-qualification layer that hands the developer a described
// investor. Every Vesteri claim here restates existing site copy — no new
// product claims.
//
// Slugs are localized per locale, the same way articles work: the language
// versions of one comparison do not share an address.

export type CompareLocale = 'pl' | 'en' | 'es' | 'de';

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
      es: {
        slug: 'leads-de-portales',
        breadcrumbName: 'Leads de portales',
        metaTitle: '¿Leads de portales o un inversor tras el webinar? | VESTERI',
        metaDescription:
          'Un lead de portal es un correo de un formulario. Vesteri entrega un inversor cualificado en un webinar, con scoring y el registro completo de sus preguntas. Una comparativa honesta.',
        cardTitle: 'Comprar leads de portales',
        cardBlurb:
          'Un formulario frente a un inversor que sale del webinar con su perfil de intención. ¿Qué llega de verdad a tu equipo?',
        h1: 'La alternativa a comprar leads de portales',
        sub: 'Los portales están hechos para el alcance, y lo hacen bien. Pero un lead de portal sigue siendo solo un formulario: sin presupuesto, sin plazos, sin ninguna prueba de que alguien vaya a coger el teléfono. Vesteri genera demanda con campañas, la cualifica en un webinar y entrega a tu equipo un inversor que llega preparado.',
        verdict: {
          kicker: 'La respuesta corta',
          h2: 'Los portales dan alcance. Vesteri entrega un inversor descrito.',
          body: [
            'A un lead de portal tu equipo empieza a conocerlo desde cero. Alguien llama, indaga, explica lo básico, muchas veces en un idioma extranjero, y así durante varias conversaciones que en su mayoría no llevan a nada. Pagas por el contacto y la cualificación la sigues haciendo tú.',
            'Con Vesteri, la cualificación ocurre antes de la entrega. Nosotros hacemos el marketing local de tus proyectos, un asistente de IA basado únicamente en tus materiales responde en el idioma del inversor, y en el webinar presentas tú con nuestro moderador al lado. El sistema evalúa la disposición de compra por lo que cada participante hace de verdad y solo te pasa a quienes superan el umbral de cualificación, con el registro completo de sus preguntas e intereses.',
          ],
        },
        table: {
          kicker: 'Lado a lado',
          h2: 'Un lead de portal frente a un inversor de Vesteri',
          dimensionLabel: 'Lo que importa',
          competitorLabel: 'Lead de portal',
          vesteriLabel: 'Inversor de Vesteri',
          rows: [
            {
              dimension: 'Qué recibe tu equipo',
              them: 'Un correo y un teléfono de un formulario. El resto hay que averiguarlo.',
              vesteri:
                'Un inversor que asistió a un webinar, con su perfil de intención completo: el registro de sus preguntas e intereses.',
            },
            {
              dimension: 'Cualificación',
              them: 'Declaraciones de un formulario, sin comportamiento que las respalde.',
              vesteri:
                'Scoring por preferencias reveladas; solo se entregan quienes superan el umbral de cualificación.',
            },
            {
              dimension: 'Quién responde a las preguntas',
              them: 'Tu equipo, desde cero, muchas veces en un idioma extranjero.',
              vesteri:
                'Un asistente de IA en el idioma del inversor, basado únicamente en los materiales del promotor. Trabaja durante el webinar y mucho después.',
            },
            {
              dimension: 'De dónde viene la demanda',
              them: 'El tráfico que el portal tenga ese día en tu mercado.',
              vesteri:
                'Campañas segmentadas por geografía e idioma en los mercados de origen. Polonia está activa y vienen más países.',
            },
            {
              dimension: 'Después de la entrega',
              them: 'El contacto se acaba ahí, y el siguiente lead vuelve a costar.',
              vesteri:
                'Los contactos de despachos independientes ganan la confianza del inversor, y los participantes vuelven a los siguientes webinars y traen a sus conocidos.',
            },
          ],
        },
        honest: {
          kicker: 'Siendo justos',
          h2: 'Cuándo bastan los leads de portales',
          intro: 'Los portales ganan de verdad en alcance amplio. Puede que no necesites una capa de cualificación, por ejemplo cuando:',
          points: [
            'Vendes sobre todo a compradores locales que conocen el mercado y pueden visitarte esa misma semana.',
            'Tu equipo tiene capacidad de sobra y cualifica a mano grandes volúmenes de consultas sin filtrar.',
            'Lo que buscas es sobre todo visibilidad de tus anuncios en los resultados de búsqueda.',
          ],
        },
        advantage: {
          kicker: 'Qué cambia con Vesteri',
          h2: 'Del formulario a la conversación con un inversor preparado',
          cards: [
            {
              title: 'Un perfil de intención, no una lista de correos',
              body: 'La plataforma registra en qué proyecto se detiene cada participante, qué pregunta, qué se salta y cuándo se desconecta. De una sola reunión sale un perfil de interés.',
            },
            {
              title: 'El webinar como cualificación',
              body: 'Nuestro moderador conduce la conversación, tú presentas y respondes en directo. El inversor conoce el proyecto por ti, no por una ficha.',
            },
            {
              title: 'IA en lugar de la vigésima llamada',
              body: 'El asistente conoce a fondo cada proyecto de la cartera y responde al momento, en el idioma del inversor. Tu equipo deja de explicar lo mismo por vigésima vez.',
            },
            {
              title: 'Contacto directo',
              body: 'Recibes demanda, datos y contacto directo con tus clientes, sin intermediarios. La venta sigue siendo tuya, y nosotros ayudamos cuando tú quieres.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Preguntas frecuentes',
          items: [
            {
              q: '¿Tengo que dejar los portales para trabajar con Vesteri?',
              a: 'No. Vesteri genera su propia demanda con campañas y webinars, así que los portales pueden seguir en paralelo. La diferencia está en lo que llega a tu equipo: un formulario o un inversor descrito.',
            },
            {
              q: '¿En qué se diferencia un inversor entregado de un lead?',
              a: 'Un lead son datos de contacto. Un inversor de Vesteri asistió a un webinar, el sistema evaluó su disposición de compra y guardó el historial completo de sus preguntas e intereses. Llamas sabiendo quién está al otro lado y qué busca.',
            },
            {
              q: '¿Qué necesito preparar para empezar?',
              a: 'La documentación de tu promoción. La recogemos, la ordenamos y la convertimos en la base de conocimiento del chat de IA, para que los inversores reciban respuestas basadas únicamente en tus materiales.',
            },
            {
              q: '¿Cuánto se tarda en entrar en un nuevo mercado de origen?',
              a: 'Semanas, no trimestres. No montamos estructuras comerciales locales, así que el arranque no espera a una oficina ni a un equipo.',
            },
          ],
        },
        finalCta: {
          h2: 'Mira cómo es un inversor con perfil de intención',
          body: 'Reserva una llamada y te enseñamos el proceso, de la campaña local a la entrega, incluido exactamente lo que recibe tu equipo.',
        },
      },
      de: {
        slug: 'leads-von-portalen',
        breadcrumbName: 'Leads von Portalen',
        metaTitle: 'Portal-Leads oder ein Investor nach dem Webinar? | VESTERI',
        metaDescription:
          'Ein Portal-Lead ist eine E-Mail-Adresse aus einem Formular. Vesteri übergibt einen im Webinar qualifizierten Investor, mit Scoring und allen Fragen im Protokoll. Ein ehrlicher Vergleich.',
        cardTitle: 'Leads von Portalen kaufen',
        cardBlurb:
          'Ein Formular gegen einen Investor, der mit Interessenprofil aus dem Webinar kommt. Was landet wirklich bei Ihrem Team?',
        h1: 'Die Alternative zum Kauf von Portal-Leads',
        sub: 'Portale sind für Reichweite gebaut, und das können sie gut. Nur bleibt ein Portal-Lead eben ein Formular: ohne Budget, ohne Zeitplan, ohne jeden Beleg, dass jemand ans Telefon geht. Vesteri baut Nachfrage mit Kampagnen auf, qualifiziert sie im Webinar und übergibt Ihrem Team einen Investor, der vorbereitet ankommt.',
        verdict: {
          kicker: 'Die kurze Antwort',
          h2: 'Portale liefern Reichweite. Vesteri liefert einen beschriebenen Investor.',
          body: [
            'Einen Portal-Lead lernt Ihr Team von null an kennen. Jemand ruft an, fragt nach, erklärt die Grundlagen, oft in einer Fremdsprache, und das über mehrere Gespräche, von denen die meisten ins Leere laufen. Sie zahlen für den Kontakt und qualifizieren trotzdem selbst.',
            'Bei Vesteri passiert die Qualifizierung vor der Übergabe. Wir machen das lokale Marketing für Ihre Projekte, ein KI-Assistent, der ausschließlich auf Ihren Unterlagen beruht, antwortet in der Sprache des Investors, und im Webinar präsentieren Sie, mit unserem Moderator an der Seite. Das System bewertet die Kaufbereitschaft danach, was jeder Teilnehmer wirklich tut, und übergibt Ihnen nur Personen über der Qualifikationsschwelle, mit der vollständigen Aufzeichnung ihrer Fragen und Interessen.',
          ],
        },
        table: {
          kicker: 'Im Vergleich',
          h2: 'Ein Portal-Lead gegen einen Vesteri-Investor',
          dimensionLabel: 'Worauf es ankommt',
          competitorLabel: 'Portal-Lead',
          vesteriLabel: 'Vesteri-Investor',
          rows: [
            {
              dimension: 'Was Ihr Team bekommt',
              them: 'Eine E-Mail-Adresse und eine Nummer aus einem Formular. Den Rest müssen Sie selbst herausfinden.',
              vesteri:
                'Einen Investor nach dem Webinar, mit vollständigem Interessenprofil: der Aufzeichnung seiner Fragen und Interessen.',
            },
            {
              dimension: 'Qualifizierung',
              them: 'Angaben aus einem Formular, ohne Verhalten dahinter.',
              vesteri:
                'Scoring nach tatsächlichem Verhalten; übergeben werden nur Personen über der Qualifikationsschwelle.',
            },
            {
              dimension: 'Wer die Fragen beantwortet',
              them: 'Ihr Team, von null an, oft in einer Fremdsprache.',
              vesteri:
                'Ein KI-Assistent in der Sprache des Investors, ausschließlich auf den Unterlagen des Bauträgers aufgebaut. Er arbeitet während des Webinars und lange danach.',
            },
            {
              dimension: 'Woher die Nachfrage kommt',
              them: 'Der Verkehr, den das Portal gerade auf Ihrem Markt hat.',
              vesteri:
                'Nach Geografie und Sprache ausgesteuerte Kampagnen auf den Quellmärkten. Polen ist aktiv, weitere Länder folgen.',
            },
            {
              dimension: 'Nach der Übergabe',
              them: 'Der Kontakt endet dort, und der nächste Lead kostet wieder.',
              vesteri:
                'Kontakte zu unabhängigen Kanzleien schaffen Vertrauen beim Investor, und Teilnehmer kommen zu weiteren Webinaren zurück und bringen Bekannte mit.',
            },
          ],
        },
        honest: {
          kicker: 'Der Fairness halber',
          h2: 'Wann Portal-Leads genügen',
          intro: 'Bei großer Reichweite gewinnen Portale wirklich. Eine Qualifizierungsschicht brauchen Sie unter Umständen nicht, etwa wenn:',
          points: [
            'Sie überwiegend an lokale Käufer verkaufen, die den Markt kennen und noch in derselben Woche vorbeikommen können.',
            'Ihr Team freie Kapazitäten hat und große Mengen ungeprüfter Anfragen problemlos von Hand qualifiziert.',
            'Es Ihnen vor allem um die Sichtbarkeit Ihrer Anzeigen in den Suchergebnissen geht.',
          ],
        },
        advantage: {
          kicker: 'Was sich mit Vesteri ändert',
          h2: 'Vom Formular zum Gespräch mit einem vorbereiteten Investor',
          cards: [
            {
              title: 'Ein Interessenprofil, keine Adressliste',
              body: 'Die Plattform erfasst, bei welchem Projekt ein Teilnehmer verweilt, was er fragt, was er überspringt und wann er sich ausklinkt. Aus einem einzigen Termin entsteht ein Interessenprofil.',
            },
            {
              title: 'Das Webinar als Qualifizierung',
              body: 'Unser Moderator führt durch das Gespräch, Sie präsentieren und antworten live. Der Investor lernt das Projekt von Ihnen kennen, nicht aus einem Exposé.',
            },
            {
              title: 'KI statt des zwanzigsten Anrufs',
              body: 'Der Assistent kennt jedes Projekt im Portfolio im Detail und antwortet sofort, in der Sprache des Investors. Ihr Team erklärt nichts mehr zum zwanzigsten Mal.',
            },
            {
              title: 'Direkter Kontakt',
              body: 'Sie bekommen Nachfrage, Daten und direkten Kontakt zu Ihren Kunden, ohne Zwischenhändler. Der Verkauf bleibt bei Ihnen, und wir helfen, wann immer Sie wollen.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Häufige Fragen',
          items: [
            {
              q: 'Muss ich meine Portale aufgeben, um mit Vesteri zu arbeiten?',
              a: 'Nein. Vesteri baut mit Kampagnen und Webinaren eigene Nachfrage auf, die Portale können also parallel weiterlaufen. Der Unterschied liegt darin, was Ihr Team erreicht: ein Formular oder ein beschriebener Investor.',
            },
            {
              q: 'Was unterscheidet einen übergebenen Investor von einem Lead?',
              a: 'Ein Lead sind Kontaktdaten. Ein Vesteri-Investor hat ein Webinar besucht, das System hat seine Kaufbereitschaft bewertet und die komplette Historie seiner Fragen und Interessen festgehalten. Sie rufen an und wissen, wer am anderen Ende ist und was er sucht.',
            },
            {
              q: 'Was muss ich für den Start vorbereiten?',
              a: 'Ihre Projektdokumentation. Wir sammeln und ordnen sie und machen daraus die Wissensbasis des KI-Chats, damit Investoren Antworten bekommen, die ausschließlich auf Ihren Unterlagen beruhen.',
            },
            {
              q: 'Wie lange dauert der Eintritt in einen neuen Quellmarkt?',
              a: 'Wochen, nicht Quartale. Wir bauen keine lokalen Vertriebsstrukturen auf, der Start wartet also weder auf ein Büro noch auf ein Team.',
            },
          ],
        },
        finalCta: {
          h2: 'Sehen Sie, wie ein Investor mit Interessenprofil aussieht',
          body: 'Vereinbaren Sie ein Gespräch, und wir führen Sie durch den Prozess, von der lokalen Kampagne bis zur Übergabe, einschließlich dessen, was genau Ihr Team erhält.',
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
      es: {
        slug: 'oficina-de-ventas-propia',
        breadcrumbName: 'Oficina de ventas propia',
        metaTitle: '¿Oficina de ventas propia en el extranjero o Vesteri? | VESTERI',
        metaDescription:
          'Montar tu propia estructura en un mercado de origen cuesta trimestres y plantilla. Vesteri entra en semanas, sin estructuras locales. Una comparativa honesta.',
        cardTitle: 'Tu propia estructura en un mercado de origen',
        cardBlurb:
          'Trimestres montando oficina y equipo frente a entrar en un mercado en semanas, sin estructuras comerciales locales.',
        h1: 'Vesteri o tu propia estructura de ventas en un mercado de origen',
        sub: 'Una oficina en el mercado del que vienen tus compradores te da control total. También te da costes totales: contratación, alquiler, marketing desde cero, todo en un idioma que no es el tuyo. Vesteri existe para generar esa misma demanda sin montar las estructuras.',
        verdict: {
          kicker: 'La respuesta corta',
          h2: 'Semanas, no trimestres.',
          body: [
            'Antes de que tu propia estructura te entregue su primer comprador, tiene que existir. El local. Un equipo que hay que encontrar y formar en tu cartera. Campañas en un idioma que no hablas, y procesos que aún tienen que asentarse. Eso se cuenta en trimestres antes de que devuelva nada.',
            'Entrar con Vesteri no espera a nada de eso, porque no montamos estructuras comerciales locales. Nosotros hacemos el marketing local y cualificamos la demanda en nuestra propia plataforma de webinars, tú presentas los proyectos y recibes inversores con su perfil de intención completo. La venta sigue siendo tuya, y llevas el proceso solo o con nuestra ayuda.',
          ],
        },
        table: {
          kicker: 'Lado a lado',
          h2: 'Tu propia estructura frente a Vesteri',
          dimensionLabel: 'Lo que importa',
          competitorLabel: 'Oficina propia en el extranjero',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Tiempo de entrada al mercado',
              them: 'Trimestres: local, contratación, formación, procesos por asentar.',
              vesteri: 'Semanas, porque no se monta ninguna estructura comercial local.',
            },
            {
              dimension: 'El equipo',
              them: 'Plantilla en un mercado que aún estás aprendiendo.',
              vesteri: 'Nosotros conducimos el programa como moderadores. El experto y el vendedor eres tú.',
            },
            {
              dimension: 'Conocimiento del producto',
              them: 'Un equipo nuevo aprende tu cartera durante meses y comete sus errores con clientes.',
              vesteri:
                'El asistente de IA conoce cada proyecto a fondo y responde únicamente a partir de tu documentación.',
            },
            {
              dimension: 'Idioma y comunicación',
              them: 'Todo en el idioma del mercado de origen, a tu costa.',
              vesteri:
                'Los inversores reciben respuestas en su idioma, y las campañas se segmentan por geografía e idioma.',
            },
            {
              dimension: 'Escalar a más mercados',
              them: 'Cada país nuevo es una estructura nueva desde cero.',
              vesteri:
                'El mismo proceso de webinars. Los nuevos mercados de origen llegan sin oficinas nuevas: Polonia está activa y vienen más países.',
            },
          ],
        },
        honest: {
          kicker: 'Siendo justos',
          h2: 'Cuándo tiene sentido una estructura propia',
          intro: 'Una oficina propia puede ser la decisión correcta. Considérala si:',
          points: [
            'Te comprometes con un solo mercado de origen durante años y el volumen de ventas justifica plantilla fija.',
            'Tu marca necesita presencia física: un showroom, una oficina, servicio posventa sobre el terreno.',
            'Quieres controlar personalmente cada paso del proceso, incluido el primer contacto.',
          ],
        },
        advantage: {
          kicker: 'Qué cambia con Vesteri',
          h2: 'Demanda de un mercado nuevo sin montar una empresa en él',
          cards: [
            {
              title: 'Un arranque medido en semanas',
              body: 'Entrar en un mercado nuevo lleva semanas porque no se construye ninguna estructura comercial local. Empiezas con una campaña en lugar de con una ronda de contratación.',
            },
            {
              title: 'Tu equipo no crece',
              body: 'La cualificación la hace la plataforma: scoring por preferencias reveladas y un umbral por debajo del cual nadie llega a tu mesa.',
            },
            {
              title: 'Datos de cada webinar',
              body: 'Cada campaña enseña al sistema un poco más sobre lo que lleva a una compra, y de una sola reunión sale el perfil de interés real de cada participante.',
            },
            {
              title: 'La venta sigue siendo tuya',
              body: 'Te entregamos un inversor con su perfil de intención completo y tú llevas el proceso desde ahí, solo o con nuestra ayuda. No estás solo en esto.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Preguntas frecuentes',
          items: [
            {
              q: '¿Vesteri se queda con mi venta?',
              a: 'No. Entregamos demanda, datos y contacto directo con tus clientes. La venta sigue siendo tuya, y nosotros ayudamos cuando lo pides.',
            },
            {
              q: '¿De dónde sale la demanda?',
              a: 'De campañas de marketing locales para tus proyectos, segmentadas por geografía e idioma. Polonia es el mercado activo, y pronto llegarán más países de origen.',
            },
            {
              q: '¿Qué recibe exactamente mi equipo?',
              a: 'Un inversor que superó el umbral de cualificación, junto con el registro completo de sus preguntas e intereses del webinar.',
            },
            {
              q: '¿Qué necesitáis de mí para empezar?',
              a: 'Tu documentación de la promoción y tu presencia en el webinar. Nuestro moderador conduce la conversación, tú presentas y respondes en directo.',
            },
          ],
        },
        finalCta: {
          h2: 'Calcula con nosotros una entrada de mercado',
          body: 'Reserva una llamada y comparamos cómo queda tu entrada en un mercado de origen con Vesteri y sin él.',
        },
      },
      de: {
        slug: 'eigenes-vertriebsbuero',
        breadcrumbName: 'Eigenes Vertriebsbüro',
        metaTitle: 'Eigenes Vertriebsbüro im Ausland oder Vesteri? | VESTERI',
        metaDescription:
          'Eine eigene Struktur auf einem Quellmarkt kostet Quartale und Personal. Vesteri steigt in Wochen ein, ohne lokale Strukturen. Ein ehrlicher Vergleich.',
        cardTitle: 'Eigene Struktur auf einem Quellmarkt',
        cardBlurb:
          'Quartale für Büro und Team gegen einen Markteintritt in Wochen, ohne lokale Vertriebsstrukturen.',
        h1: 'Vesteri oder eine eigene Vertriebsstruktur auf dem Quellmarkt',
        sub: 'Ein Büro auf dem Markt, aus dem Ihre Käufer kommen, gibt Ihnen volle Kontrolle. Es gibt Ihnen auch volle Kosten: Personalsuche, Miete, Marketing von null, alles in einer Sprache, die nicht Ihre ist. Vesteri gibt es, um dieselbe Nachfrage aufzubauen, ohne die Strukturen zu bauen.',
        verdict: {
          kicker: 'Die kurze Antwort',
          h2: 'Wochen statt Quartale.',
          body: [
            'Bevor Ihre eigene Struktur Ihnen den ersten Käufer übergibt, muss sie erst einmal entstehen. Die Räume. Ein Team, das gefunden und auf Ihr Portfolio geschult werden muss. Kampagnen in einer Sprache, die Sie nicht sprechen, und Prozesse, die sich erst einspielen. Das rechnen Sie in Quartalen, bevor irgendetwas zurückkommt.',
            'Der Einstieg mit Vesteri wartet auf nichts davon, weil wir keine lokalen Vertriebsstrukturen aufbauen. Wir machen das lokale Marketing und qualifizieren die Nachfrage auf unserer eigenen Webinar-Plattform, Sie präsentieren die Projekte und erhalten Investoren mit vollständigem Interessenprofil. Der Verkauf bleibt bei Ihnen, und Sie führen den Prozess allein oder mit unserer Hilfe.',
          ],
        },
        table: {
          kicker: 'Im Vergleich',
          h2: 'Ihre eigene Struktur gegen Vesteri',
          dimensionLabel: 'Worauf es ankommt',
          competitorLabel: 'Eigenes Büro im Ausland',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Zeit bis zum Markteintritt',
              them: 'Quartale: Räume, Personalsuche, Schulung, Prozesse, die sich einspielen müssen.',
              vesteri: 'Wochen, weil gar keine lokalen Vertriebsstrukturen entstehen.',
            },
            {
              dimension: 'Das Team',
              them: 'Personal auf einem Markt, den Sie selbst noch lernen.',
              vesteri: 'Wir führen als Moderator durch das Programm. Der Experte und der Verkäufer sind Sie.',
            },
            {
              dimension: 'Produktwissen',
              them: 'Ein neues Team lernt Ihr Portfolio über Monate und macht seine Fehler an Kunden.',
              vesteri:
                'Der KI-Assistent kennt jedes Projekt im Detail und antwortet ausschließlich auf Basis Ihrer Dokumentation.',
            },
            {
              dimension: 'Sprache und Kommunikation',
              them: 'Alles in der Sprache des Quellmarkts, auf Ihre Kosten.',
              vesteri:
                'Investoren bekommen Antworten in ihrer Sprache, und die Kampagnen werden nach Geografie und Sprache ausgesteuert.',
            },
            {
              dimension: 'Skalierung auf weitere Märkte',
              them: 'Jedes neue Land ist eine neue Struktur von null.',
              vesteri:
                'Derselbe Webinar-Prozess. Neue Quellmärkte kommen ohne neue Büros dazu: Polen ist aktiv, weitere Länder folgen.',
            },
          ],
        },
        honest: {
          kicker: 'Der Fairness halber',
          h2: 'Wann eine eigene Struktur sinnvoll ist',
          intro: 'Ein eigenes Büro kann die richtige Entscheidung sein. Denken Sie darüber nach, wenn:',
          points: [
            'Sie sich für Jahre auf einen einzigen Quellmarkt festlegen und das Verkaufsvolumen feste Stellen rechtfertigt.',
            'Ihre Marke eine physische Präsenz braucht: einen Showroom, ein Büro, After-Sales-Service vor Ort.',
            'Sie jeden Schritt des Prozesses persönlich kontrollieren wollen, einschließlich des Erstkontakts.',
          ],
        },
        advantage: {
          kicker: 'Was sich mit Vesteri ändert',
          h2: 'Nachfrage aus einem neuen Markt, ohne dort eine Firma zu gründen',
          cards: [
            {
              title: 'Ein Start in Wochen',
              body: 'Der Eintritt in einen neuen Markt dauert Wochen, weil keine lokalen Vertriebsstrukturen gebaut werden. Sie beginnen mit einer Kampagne statt mit einer Einstellungsrunde.',
            },
            {
              title: 'Ihr Team wächst nicht',
              body: 'Die Qualifizierung übernimmt die Plattform: Scoring nach tatsächlichem Verhalten und eine Schwelle, unter der niemand auf Ihrem Tisch landet.',
            },
            {
              title: 'Daten aus jedem Webinar',
              body: 'Jede Kampagne lehrt das System ein wenig mehr darüber, was zu einem Kauf führt, und aus einem einzigen Termin entsteht das Interessenprofil jedes Teilnehmers.',
            },
            {
              title: 'Der Verkauf bleibt Ihrer',
              body: 'Wir übergeben einen Investor mit vollständigem Interessenprofil, und Sie führen den Prozess von dort weiter, allein oder mit unserer Hilfe. Sie sind damit nicht allein.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Häufige Fragen',
          items: [
            {
              q: 'Übernimmt Vesteri meinen Verkauf?',
              a: 'Nein. Wir liefern Nachfrage, Daten und direkten Kontakt zu Ihren Kunden. Der Verkauf bleibt bei Ihnen, und wir helfen, wenn Sie darum bitten.',
            },
            {
              q: 'Woher kommt die Nachfrage?',
              a: 'Aus lokalen Marketingkampagnen für Ihre Projekte, ausgesteuert nach Geografie und Sprache. Polen ist der aktive Markt, weitere Quellländer folgen bald.',
            },
            {
              q: 'Was genau erhält mein Team?',
              a: 'Einen Investor, der die Qualifikationsschwelle überschritten hat, zusammen mit der vollständigen Aufzeichnung seiner Fragen und Interessen aus dem Webinar.',
            },
            {
              q: 'Was brauchen Sie von mir für den Start?',
              a: 'Ihre Projektdokumentation und Ihre Anwesenheit im Webinar. Unser Moderator führt durch das Gespräch, Sie präsentieren und antworten live.',
            },
          ],
        },
        finalCta: {
          h2: 'Rechnen Sie mit uns einen Markteintritt durch',
          body: 'Vereinbaren Sie ein Gespräch, und wir vergleichen, wie Ihr Einstieg in einen Quellmarkt mit Vesteri aussieht und ohne ihn.',
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
      es: {
        slug: 'redes-de-intermediarios',
        breadcrumbName: 'Redes de intermediarios',
        metaTitle: '¿Red de intermediarios o contacto directo con el inversor? | VESTERI',
        metaDescription:
          'Un intermediario con decenas de inmuebles en cartera es un filtro entre tú y el comprador. Vesteri da al promotor el contacto directo. Una comparativa honesta de ambos canales.',
        cardTitle: 'Vender a través de redes de intermediarios',
        cardBlurb:
          'Un agente con una cartera llena de inmuebles frente a tu propia presentación en directo y el contacto directo con el comprador.',
        h1: 'Vesteri o una red de intermediarios',
        sub: 'Una red de intermediarios te da manos en un mercado donde no las tienes. Solo que cada uno de esos intermediarios lleva muchos inmuebles en cartera, no conoce a fondo ninguno y se coloca entre tú y el comprador. Con Vesteri presentas tú, y el contacto se queda contigo.',
        verdict: {
          kicker: 'La respuesta corta',
          h2: 'Un intermediario es un filtro. Vesteri te da el contacto.',
          body: [
            'Un comercial con una cartera de inmuebles vende lo que esa semana resulta más fácil de vender, y conoce cada inmueble solo hasta donde le dio el tiempo. El comprador recibe conocimiento de segunda mano. Tú ves la relación con tu cliente a través de las notas de otro.',
            'Con Vesteri no hay filtro. Nuestro moderador conduce el webinar, pero el proyecto lo presentas tú y las preguntas las respondes tú en directo. Entre reuniones se encarga un asistente de IA basado únicamente en tus materiales. Tras la entrega, el inversor es tuyo, con el registro completo de sus preguntas e intereses y sin nadie en medio.',
          ],
        },
        table: {
          kicker: 'Lado a lado',
          h2: 'Una red de intermediarios frente a Vesteri',
          dimensionLabel: 'Lo que importa',
          competitorLabel: 'Red de intermediarios',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Quién conoce tu proyecto',
              them: 'Un agente que lleva muchos inmuebles y no conoce a fondo ninguno.',
              vesteri:
                'Tú presentas en directo, y el asistente de IA conoce cada proyecto a fondo, únicamente a partir de tu documentación.',
            },
            {
              dimension: 'Contacto con el comprador',
              them: 'A través del intermediario, así que la relación es suya.',
              vesteri: 'Directo: el inversor llega a tu equipo, sin nadie en medio.',
            },
            {
              dimension: 'Qué sabes del comprador',
              them: 'Lo que el intermediario anote y quiera pasarte.',
              vesteri:
                'Un perfil de intención completo: el registro de preguntas e intereses del webinar, más el scoring de disposición de compra.',
            },
            {
              dimension: 'Prioridad del canal',
              them: 'El agente vende de toda su cartera, así que tu proyecto compite dentro de ella.',
              vesteri:
                'El webinar trata de tus proyectos, y los participantes vuelven a las siguientes reuniones y traen a sus conocidos.',
            },
            {
              dimension: 'La confianza del comprador',
              them: 'Construida sobre la persona del agente. Se va con él.',
              vesteri:
                'Construida de manera sistemática: contactos de despachos jurídicos independientes en el mercado de destino.',
            },
          ],
        },
        honest: {
          kicker: 'Siendo justos',
          h2: 'Cuándo basta una red de intermediarios',
          intro: 'Las redes de intermediarios tienen su lugar. Pueden bastar si:',
          points: [
            'Quieres cero implicación en la presentación: que alguien venda por ti, aunque sea a costa de la profundidad.',
            'Tu producto se vende localmente a la primera y no necesita explicación para un comprador extranjero.',
            'Valoras canales de relaciones personales que ninguna plataforma puede sustituir.',
          ],
        },
        advantage: {
          kicker: 'Qué cambia con Vesteri',
          h2: 'De la segunda mano a la primera',
          cards: [
            {
              title: 'Sin filtro',
              body: 'Recibes demanda, datos y contacto directo con tus clientes en lugar de otro comercial con una cartera llena de inmuebles y sin conocimiento profundo de ninguno.',
            },
            {
              title: 'Conocimiento sin lagunas',
              body: 'La base de conocimiento se construye con tu documentación y el asistente de IA responde únicamente a partir de ella. Nada se queda fuera porque a alguien le faltara información.',
            },
            {
              title: 'Presentas tú',
              body: 'Nuestro moderador conduce la conversación, tú presentas y respondes en directo. El experto y el vendedor eres tú.',
            },
            {
              title: 'Confianza por diseño',
              body: 'El inversor recibe contactos de despachos jurídicos independientes y verificados en el mercado de destino. Esa confianza no depende de una sola persona.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Preguntas frecuentes',
          items: [
            {
              q: '¿No es Vesteri simplemente otro intermediario?',
              a: 'No en el sentido en que lo es un agente con cartera. Entregamos demanda, datos y contacto directo con tus clientes. Presentas tú, y la venta sigue siendo tuya.',
            },
            {
              q: '¿Quién conduce el webinar?',
              a: 'Nuestro moderador conduce la conversación; tú presentas el proyecto y respondes a las preguntas en directo.',
            },
            {
              q: '¿Puedo combinar Vesteri con una red de intermediarios existente?',
              a: 'Sí. Vesteri genera su propia demanda en los mercados de origen y te la entrega directamente, así que tus canales actuales pueden seguir en paralelo.',
            },
            {
              q: '¿Cómo llega de preparado el inversor a la primera llamada?',
              a: 'Asistió a un webinar, hizo preguntas y recibió respuestas basadas en tus materiales, y el sistema evaluó su disposición de compra. Te llega con su perfil de intención completo.',
            },
          ],
        },
        finalCta: {
          h2: 'Hablemos de un canal sin filtros',
          body: 'Reserva una llamada y te enseñamos cómo es un webinar de promotor y qué llega exactamente a tu equipo tras la entrega.',
        },
      },
      de: {
        slug: 'maklernetzwerke',
        breadcrumbName: 'Maklernetzwerke',
        metaTitle: 'Maklernetzwerk oder direkter Kontakt zum Investor? | VESTERI',
        metaDescription:
          'Ein Makler mit Dutzenden Objekten im Portfolio ist ein Puffer zwischen Ihnen und dem Käufer. Vesteri gibt dem Bauträger den direkten Kontakt. Ein ehrlicher Vergleich beider Kanäle.',
        cardTitle: 'Verkauf über Maklernetzwerke',
        cardBlurb:
          'Ein Makler mit vollem Portfolio gegen Ihre eigene Live-Präsentation und den direkten Kontakt zum Käufer.',
        h1: 'Vesteri oder ein Maklernetzwerk',
        sub: 'Ein Maklernetzwerk gibt Ihnen Hände auf einem Markt, auf dem Sie keine haben. Nur trägt jeder dieser Makler viele Objekte im Portfolio, kennt keines davon im Detail und stellt sich zwischen Sie und den Käufer. Mit Vesteri präsentieren Sie selbst, und der Kontakt bleibt bei Ihnen.',
        verdict: {
          kicker: 'Die kurze Antwort',
          h2: 'Ein Makler ist ein Puffer. Vesteri gibt Ihnen den Kontakt.',
          body: [
            'Ein Verkäufer mit einem Portfolio voller Objekte verkauft, was sich in dieser Woche am leichtesten verkauft, und kennt jedes Objekt nur so gut, wie seine Zeit es zuließ. Der Käufer bekommt Wissen aus zweiter Hand. Sie sehen die Beziehung zu Ihrem Kunden durch die Notizen eines anderen.',
            'Bei Vesteri gibt es keinen Puffer. Unser Moderator führt durch das Webinar, aber das Projekt präsentieren Sie, und die Fragen beantworten Sie live. Zwischen den Terminen übernimmt ein KI-Assistent, der ausschließlich auf Ihren Unterlagen beruht. Nach der Übergabe gehört der Investor Ihnen, mit der vollständigen Aufzeichnung seiner Fragen und Interessen und niemandem dazwischen.',
          ],
        },
        table: {
          kicker: 'Im Vergleich',
          h2: 'Ein Maklernetzwerk gegen Vesteri',
          dimensionLabel: 'Worauf es ankommt',
          competitorLabel: 'Maklernetzwerk',
          vesteriLabel: 'Vesteri',
          rows: [
            {
              dimension: 'Wer Ihr Projekt kennt',
              them: 'Ein Makler, der viele Objekte führt und keines davon im Detail kennt.',
              vesteri:
                'Sie präsentieren live, und der KI-Assistent kennt jedes Projekt im Detail, ausschließlich aus Ihrer Dokumentation.',
            },
            {
              dimension: 'Kontakt zum Käufer',
              them: 'Über den Makler, die Beziehung gehört also ihm.',
              vesteri: 'Direkt: Der Investor landet bei Ihrem Team, niemand dazwischen.',
            },
            {
              dimension: 'Was Sie über den Käufer wissen',
              them: 'So viel, wie der Makler notiert und weitergeben mag.',
              vesteri:
                'Ein vollständiges Interessenprofil: die Aufzeichnung der Fragen und Interessen aus dem Webinar, plus das Scoring der Kaufbereitschaft.',
            },
            {
              dimension: 'Priorität im Kanal',
              them: 'Der Makler verkauft aus dem ganzen Portfolio, Ihr Projekt konkurriert also darin.',
              vesteri:
                'Das Webinar dreht sich um Ihre Projekte, und die Teilnehmer kommen zu weiteren Terminen zurück und bringen Bekannte mit.',
            },
            {
              dimension: 'Das Vertrauen des Käufers',
              them: 'Aufgebaut auf der Person des Maklers. Es geht mit ihm.',
              vesteri:
                'Systematisch aufgebaut: Kontakte zu unabhängigen Kanzleien auf dem Zielmarkt.',
            },
          ],
        },
        honest: {
          kicker: 'Der Fairness halber',
          h2: 'Wann ein Maklernetzwerk genügt',
          intro: 'Maklernetzwerke haben ihren Platz. Sie können genügen, wenn:',
          points: [
            'Sie null Beteiligung an der Präsentation wollen: Jemand soll für Sie verkaufen, auch auf Kosten der Tiefe.',
            'Ihr Produkt sich lokal auf Anhieb verkauft und einem ausländischen Käufer nichts erklärt werden muss.',
            'Sie auf persönliche Beziehungskanäle setzen, die keine Plattform ersetzen kann.',
          ],
        },
        advantage: {
          kicker: 'Was sich mit Vesteri ändert',
          h2: 'Aus zweiter Hand in die erste',
          cards: [
            {
              title: 'Ohne Puffer',
              body: 'Sie bekommen Nachfrage, Daten und direkten Kontakt zu Ihren Kunden statt eines weiteren Verkäufers mit vollem Portfolio und ohne tiefes Wissen über eines der Objekte.',
            },
            {
              title: 'Wissen ohne Lücken',
              body: 'Die Wissensbasis entsteht aus Ihrer Dokumentation, und der KI-Assistent antwortet ausschließlich auf ihrer Grundlage. Nichts fällt weg, weil jemandem das Wissen fehlte.',
            },
            {
              title: 'Sie präsentieren selbst',
              body: 'Unser Moderator führt durch das Gespräch, Sie präsentieren und antworten live. Der Experte und der Verkäufer sind Sie.',
            },
            {
              title: 'Vertrauen mit System',
              body: 'Der Investor erhält Kontakte zu geprüften, unabhängigen Kanzleien auf dem Zielmarkt. Dieses Vertrauen hängt nicht an einer einzelnen Person.',
            },
          ],
        },
        faq: {
          kicker: 'FAQ',
          h2: 'Häufige Fragen',
          items: [
            {
              q: 'Ist Vesteri nicht einfach ein weiterer Vermittler?',
              a: 'Nicht in dem Sinne, in dem es ein Makler mit Portfolio ist. Wir liefern Nachfrage, Daten und direkten Kontakt zu Ihren Kunden. Sie präsentieren, und der Verkauf bleibt bei Ihnen.',
            },
            {
              q: 'Wer führt durch das Webinar?',
              a: 'Unser Moderator führt durch das Gespräch; Sie präsentieren das Projekt und beantworten die Fragen live.',
            },
            {
              q: 'Kann ich Vesteri mit einem bestehenden Maklernetzwerk kombinieren?',
              a: 'Ja. Vesteri baut auf den Quellmärkten eigene Nachfrage auf und übergibt sie direkt an Sie, Ihre bisherigen Kanäle können also parallel weiterlaufen.',
            },
            {
              q: 'Wie vorbereitet kommt der Investor ins erste Gespräch?',
              a: 'Er hat ein Webinar besucht, Fragen gestellt und Antworten auf Basis Ihrer Unterlagen bekommen, und das System hat seine Kaufbereitschaft bewertet. Bei Ihnen kommt er mit vollständigem Interessenprofil an.',
            },
          ],
        },
        finalCta: {
          h2: 'Sprechen wir über einen Kanal ohne Puffer',
          body: 'Vereinbaren Sie ein Gespräch, und wir zeigen Ihnen, wie ein Bauträger-Webinar aussieht und was genau nach der Übergabe bei Ihrem Team ankommt.',
        },
      },
    },
  },
];

/** A comparison found by its localized slug, or null. */
export function findComparison(locale: CompareLocale, slug: string) {
  return COMPARISONS.find((c) => c.locales[locale].slug === slug) ?? null;
}
