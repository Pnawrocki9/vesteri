import {
  COLLECTIVE_EMAIL,
  CONTACT_EMAIL,
  MARKETPLACE_URL,
  SITE_URL,
} from '@/lib/site';

// llms.txt — hand-maintained summary for LLM crawlers (SEO v3).
// Facts trace to the Vesteri Collective Rules v1.0 and the /agents and
// /sellers pages. Keep in sync with lib/jsonld.ts and the meta copy. The 60%
// minimum is stated ONLY for Vesteri's international portfolio. The
// marketplace host (vesteri.estalara.com) stays listed on purpose.
export const dynamic = 'force-static';

const BODY = `# Vesteri Collective

> Vesteri Collective is a selective network of vetted, independent real estate agents and agencies who cooperate under shared Fair Play & Trust principles. The public Vesteri Marketplace brings together local and international property listings published by network members. Buyers work with one trusted agent who can reach listings across the whole network; sellers keep one dedicated agent while other members can introduce buyers.

Vesteri Collective is not a developer listings portal. Selected international developments represented directly by Vesteri are one segment of the marketplace, not the whole offer.
The public website is available in Polish and English. Marketplace and agent platform (Vesteri system): ${MARKETPLACE_URL}
Operator: Time2Show, Inc., 1111B S Governors Ave STE 20579, Dover, Delaware 19904, USA.

## Key facts

- Membership: open to independent real estate agents and agencies by application; selective; Vesteri verifies identity, business activity, required licences/registrations or insurance and acceptance of Fair Play & Trust principles.
- Cost for agents: applying, membership, standard listing publication and core system features are free; premium features are paid per use or by subscription.
- Members keep their own brand, clients and commission on their own listings. Membership is not a franchise and requires no exclusivity.
- Cooperation: members are expected to cooperate with a member who has an interested buyer; declining requires a justified reason.
- Default commission split between members (general rule for all cooperation between members) (net commission received): Referral 25% referring member / 75% handling member; Joint Transaction 50% Listing Agent / 50% Buyer's Agent. Other splits only by prior agreement of both members.
- Vesteri's international portfolio only (not a general rule): for selected international developments where Vesteri or its partner is the Listing Agent, the member who brings the buyer receives at least 60% of the developer commission.
- Protection period: 12 months from the referral or buyer registration; settlements are made directly between members.
- Tools: LIVE property presentations, webinars and consultations, AI property assistance, advertising automation, meeting transcripts.
- Vesteri vets members; it does not legally or technically verify every listed property. Buyers should obtain independent due diligence.
- Not yet available: private member channels, automated deal attribution and commission settlement.

## Polski

- [Vesteri Collective – sieć agentów nieruchomości](${SITE_URL}/pl): Sieć sprawdzonych, niezależnych agentów nieruchomości i marketplace ofert w Polsce i za granicą.
- [Jak działa Vesteri Collective](${SITE_URL}/pl/jak-dziala-vesteri-collective): Członkostwo, weryfikacja, zasady Fair Play & Trust, współpraca i domyślny podział prowizji.
- [Dla agentów](${SITE_URL}/pl/dla-agentow): Członkostwo dla niezależnych agentów i biur, narzędzia systemu Vesteri, współpraca w sieci.
- [Dla sprzedających](${SITE_URL}/pl/sprzedajacy): Jeden agent prowadzi sprzedaż, inni członkowie sieci mogą przyprowadzić kupującego.
- [Regulamin Vesteri Collective](${SITE_URL}/pl/regulamin-vesteri-collective): Pełne zasady członkostwa i współpracy agentów (wersja 1.0, od 22.10.2026).
- [Program partnerski](${SITE_URL}/pl/affiliate): Program poleceń inwestorów.
- [Polityka prywatności](${SITE_URL}/pl/polityka-prywatnosci)
- [Regulamin](${SITE_URL}/pl/regulamin)
- [Informacja o AI](${SITE_URL}/pl/informacja-o-ai)
- [Zastrzeżenia](${SITE_URL}/pl/zastrzezenia)

## English

- [Vesteri Collective – real estate agent network](${SITE_URL}/en): A network of vetted, independent real estate agents and a marketplace for local and international property.
- [How Vesteri Collective works](${SITE_URL}/en/how-vesteri-collective-works): Membership, verification, Fair Play & Trust, cooperation and the default commission split.
- [For agents](${SITE_URL}/en/agents): Membership for independent agents and agencies, Vesteri system tools, collaboration across the network.
- [For sellers](${SITE_URL}/en/sellers): One agent manages the sale while other members can introduce buyers.
- [Vesteri Collective Rules](${SITE_URL}/en/vesteri-collective-rules): Full membership and cooperation rules.
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
