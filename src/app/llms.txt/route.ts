import {
  COLLECTIVE_EMAIL,
  CONTACT_EMAIL,
  MARKETPLACE_URL,
  SITE_URL,
} from '@/lib/site';

// llms.txt — hand-maintained summary for LLM crawlers (SEO v3).
// Keep this summary aligned with the marketing pages and Collective Rules.
export const dynamic = 'force-static';

const BODY = `# Vesteri Collective

> Vesteri Collective is a community of independent real estate agents and agencies. Members share Vesteri Market, professional standards and Vesteri Channels for learning, conversation and exchanging experience. Buyers contact the agents presenting individual listings. Sellers agree services and publication terms directly with an agent.

The public website is available in Polish and English. Vesteri Market and agent platform: ${MARKETPLACE_URL}
Operator: Time2Show, Inc., 1111B S Governors Ave STE 20579, Dover, Delaware 19904, USA.

## Key facts

- Every agent who creates a Vesteri platform account is manually emailed an invitation to Vesteri Channels. Invitations are not automatic.
- Channels is a place to ask questions, share knowledge, exchange market information and discuss professional experience.
- Listing publication requires separate verification of identity, business activity and required qualifications or insurance. Channels invitations do not wait for that approval.
- Account creation, membership, Channels access, standard listing publication and core system features are free. Premium features are paid according to the current price list.
- Agents may choose to cooperate and freely agree all terms, including any commission split. Suggested examples are non-binding; no default split applies.
- Members keep their brands and client relationships and agree services and fees independently with clients. Membership is not a franchise and requires no exclusivity with Vesteri.
- Approved agents publish local and international properties. Selected developments presented by Vesteri or its partners are part of Vesteri Market.
- Tools include LIVE property presentations, webinars, consultations, AI assistance and listing promotion, subject to available features and plan terms.
- Fair Play & Trust means accurate listings, transparent representation, privacy and respectful community communication.
- Agent verification does not mean that every property has undergone legal or technical due diligence.

## Polski

- [Vesteri Collective – sieć agentów nieruchomości](${SITE_URL}/pl): Sieć sprawdzonych, niezależnych agentów nieruchomości i Vesteri Market z ofertami w Polsce i za granicą.
- [Jak działa Vesteri Collective](${SITE_URL}/pl/jak-dziala-vesteri-collective): Rejestracja, Vesteri Channels, Vesteri Market i standardy publikowania ofert.
- [Dla agentów](${SITE_URL}/pl/dla-agentow): Społeczność niezależnych agentów, wiedza, Vesteri Channels i narzędzia Vesteri.
- [Dla sprzedających](${SITE_URL}/pl/sprzedajacy): Profesjonalna obsługa sprzedaży i publikacja oferty w Vesteri Market.
- [Regulamin Vesteri Collective](${SITE_URL}/pl/regulamin-vesteri-collective): Zasady członkostwa, publikowania ofert i Vesteri Channels (wersja 2.2, od 28.10.2026).
- [Program partnerski](${SITE_URL}/pl/affiliate): Program poleceń inwestorów.
- [Polityka prywatności](${SITE_URL}/pl/polityka-prywatnosci)
- [Regulamin](${SITE_URL}/pl/regulamin)
- [Informacja o AI](${SITE_URL}/pl/informacja-o-ai)
- [Zastrzeżenia](${SITE_URL}/pl/zastrzezenia)

## English

- [Vesteri Collective – real estate agent network](${SITE_URL}/en): A network of vetted, independent real estate agents and Vesteri Market for local and international property.
- [How Vesteri Collective works](${SITE_URL}/en/how-vesteri-collective-works): Registration, Vesteri Channels, Vesteri Market and listing standards.
- [For agents](${SITE_URL}/en/agents): A community of independent agents, knowledge sharing, Vesteri Channels and Vesteri tools.
- [For sellers](${SITE_URL}/en/sellers): Professional selling services and listing publication in Vesteri Market.
- [Vesteri Collective Rules](${SITE_URL}/en/vesteri-collective-rules): Membership, listing publication and Vesteri Channels rules (version 2.2, effective 28 October 2026).
- [Affiliate programme](${SITE_URL}/en/affiliate): Investor referral programme.
- [Privacy policy](${SITE_URL}/en/privacy-policy)
- [Terms of service](${SITE_URL}/en/terms-of-service)
- [AI notice](${SITE_URL}/en/ai-notice)
- [Disclaimers](${SITE_URL}/en/disclaimers)

## Optional

- [Cookies (PL)](${SITE_URL}/pl/cookies), [RODO](${SITE_URL}/pl/rodo), [Cookies (EN)](${SITE_URL}/en/cookies), [GDPR](${SITE_URL}/en/gdpr)

Contact: ${CONTACT_EMAIL} · Collective membership: ${COLLECTIVE_EMAIL}
Sitemap: ${SITE_URL}/sitemap.xml
`;

export function GET() {
  return new Response(BODY, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
