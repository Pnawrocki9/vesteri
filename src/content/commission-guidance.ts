/** Non-binding examples: the parties choose whether and how to cooperate. */
export const commissionGuidance = {
  pl: {
    title: 'Przykładowy podział prowizji',
    intro:
      'Jeśli zdecydujecie się na współpracę, poniższe przykłady mogą być punktem wyjścia do rozmowy.',
    referral: 'Polecenie klienta',
    joint: 'Wspólna transakcja',
    referring: 'dla agenta polecającego',
    handling: 'dla agenta obsługującego',
    listing: 'dla Agenta Oferty',
    buying: 'dla Agenta Kupującego',
    freedom:
      'To niewiążące sugestie. Vesteri nie narzuca podziału prowizji ani obowiązku współpracy. Agenci mogą uzgodnić dowolne proporcje.',
    terms:
      'Podstawę rozliczenia, zakres działań i termin płatności ustalcie bezpośrednio między sobą. Bez uzgodnienia nie obowiązuje żaden domyślny podział.',
    link: 'Zobacz wskazówki dotyczące współpracy',
  },
  en: {
    title: 'Example commission splits',
    intro:
      'If you choose to work together, these examples can be a starting point for your discussion.',
    referral: 'Client referral',
    joint: 'Joint transaction',
    referring: 'for the referring agent',
    handling: 'for the servicing agent',
    listing: 'for the Listing Agent',
    buying: 'for the Buyer’s Agent',
    freedom:
      'These are non-binding suggestions. Vesteri does not impose commission splits or require agents to cooperate. Agents are free to agree any proportions.',
    terms:
      'Agree the calculation basis, scope of work and payment timing directly with each other. No default split applies without an agreement.',
    link: 'Read the cooperation guidance',
  },
} as const;

export function commissionGuidanceBody(locale: 'pl' | 'en') {
  const c = commissionGuidance[locale];
  return `${c.intro}\n\n**${c.freedom}**\n\n### ${c.referral}\n\n- **25%** ${c.referring}\n- **75%** ${c.handling}\n\n### ${c.joint}\n\n- **50%** ${c.listing}\n- **50%** ${c.buying}\n\n${c.terms}`;
}
