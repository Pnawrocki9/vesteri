import {
  COLLECTIVE_EMAIL,
  CONTACT_EMAIL,
  MARKETPLACE_URL,
  SITE_URL,
} from '@/lib/site';

// llms.txt — hand-maintained summary for LLM crawlers (SEO v3).
// Keep this summary aligned with the marketing pages (agency model: Vesteri
// agent 70–80% and 3+1, alongside Vesteri Collective).
export const dynamic = 'force-static';

const BODY = `# Vesteri

> Vesteri is a modern real estate agency and a network of cooperating agents. Vesteri agents work within the agency and keep 70–80% of their commission. Vesteri Collective is the community of independent agents and agencies who keep their own brands. Both groups publish listings in Vesteri Market and cooperate on transactions. Buyers contact the agents presenting individual listings.

The public website is available in Polish and English. Vesteri Market and agent platform: ${MARKETPLACE_URL}
Operator: Time2Show, Inc., 1111B S Governors Ave STE 20579, Dover, Delaware 19904, USA.

## Key facts

- There are two ways to work with Vesteri: as a Vesteri agent (agency model) or as a Vesteri Collective member (own brand).
- A Vesteri agent keeps 70% of the commission. Each qualifying LIVE viewing or webinar on Vesteri Market in a month raises that month's share: 73% after one, 77% after two, 80% after three or more. Every month starts again at 70%.
- A Vesteri agent pays no subscription. Only LIVE viewings and webinars are paid, at an agent discount; none are included. Prices are given before the agreement is signed.
- Vesteri signs the brokerage agreement with a Vesteri agent's client. A Collective member signs client agreements independently.
- Vesteri 3+1 is a voluntary referral programme for Vesteri agents: 3% (level 1) and 1% (level 2) of the selling agent's commission after the split, funded from Vesteri's share. Payments arise only from closed transactions, never from an invitation alone.
- A Collective member works under their own brand and may use the designation "Member of Vesteri Collective". They use Vesteri Market at a price list that is provided before signing and forms part of the agreement; prices are available on request.
- Consent to cooperate with Vesteri agents and other members is a condition of Collective membership. Agents agree the commission split for each transaction between themselves; suggested examples are non-binding.
- Vesteri professional and operational support, training and the 3+1 programme are for Vesteri agents, not Collective members. Vesteri Channels is open to both groups.
- Every agent who creates a Vesteri platform account is manually emailed an invitation to Vesteri Channels. Invitations are not automatic.
- Listing publication requires separate verification of identity, business activity and required qualifications or insurance.
- Approved agents publish local and international properties. Selected developments presented by Vesteri or its partners are part of Vesteri Market.
- Tools include LIVE property presentations, webinars, consultations, AI assistance, a CRM and listing promotion, subject to available features and agreement terms.
- Listing order in Vesteri Market follows activity: listings with a LIVE viewing or webinar in progress first, then scheduled events by nearest date, then the rest.
- Fair Play & Trust means accurate listings, transparent representation, privacy and respectful community communication.
- Agent verification does not mean that every property has undergone legal or technical due diligence.
- Vesteri does not guarantee enquiries, transactions or income. The benefits calculator is a simulation, not an earnings forecast.

## Polski

- [Vesteri – nieruchomości lokalnie i za granicą](${SITE_URL}/pl): Vesteri Market z ofertami w Polsce i za granicą oraz agenci, którzy je prezentują.
- [Dla agentów](${SITE_URL}/pl/dla-agentow): Agent Vesteri zatrzymuje 70–80% prowizji; zaplecze agencji, program 3+1 oraz porównanie z Vesteri Collective.
- [Kalkulator korzyści agenta](${SITE_URL}/pl/kalkulator): Symulacja wyniku agenta w Vesteri na własnych liczbach.
- [Jak działa Vesteri Collective](${SITE_URL}/pl/jak-dziala-vesteri-collective): Rejestracja, Vesteri Channels, Vesteri Market, współpraca agentów i standardy publikowania ofert.
- [Dla sprzedających](${SITE_URL}/pl/sprzedajacy): Profesjonalna obsługa sprzedaży i publikacja oferty w Vesteri Market.
- [Regulamin Vesteri Collective](${SITE_URL}/pl/regulamin-vesteri-collective): Zasady członkostwa, publikowania ofert i Vesteri Channels (wersja 2.2, od 28.10.2026).
- [Polityka prywatności](${SITE_URL}/pl/polityka-prywatnosci)
- [Regulamin](${SITE_URL}/pl/regulamin)
- [Informacja o AI](${SITE_URL}/pl/informacja-o-ai)
- [Zastrzeżenia](${SITE_URL}/pl/zastrzezenia)

## English

- [Vesteri – local and international property](${SITE_URL}/en): Vesteri Market for local and international property and the agents who present it.
- [For agents](${SITE_URL}/en/agents): A Vesteri agent keeps 70–80% of the commission; agency back office, the 3+1 programme and a comparison with Vesteri Collective.
- [Agent benefits calculator](${SITE_URL}/en/calculator): Simulate an agent's result with Vesteri using your own figures.
- [How Vesteri Collective works](${SITE_URL}/en/how-vesteri-collective-works): Registration, Vesteri Channels, Vesteri Market, agent cooperation and listing standards.
- [For sellers](${SITE_URL}/en/sellers): Professional selling services and listing publication in Vesteri Market.
- [Vesteri Collective Rules](${SITE_URL}/en/vesteri-collective-rules): Membership, listing publication and Vesteri Channels rules (version 2.2, effective 28 October 2026).
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
