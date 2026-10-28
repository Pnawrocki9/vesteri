import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import en from "../../messages/en.json";
import pl from "../../messages/pl.json";
import { propertyCards } from "../collective-properties";

const reference =
  "design-reference/Vesteri_Collective_V10_7_Codex_Handoff/preview";
const decode = (text: string) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&nbsp;", "\u00a0");
const normalize = (text: string) => decode(text).replace(/\s+/g, " ").trim();
const roles = [
  { id: "buyers", en: "en/index.html", pl: "pl/index.html", count: 8 },
  {
    id: "sellers",
    en: "en/sellers/index.html",
    pl: "pl/sprzedajacy/index.html",
    count: 7,
  },
  {
    id: "agents",
    en: "en/agents/index.html",
    pl: "pl/dla-agentow/index.html",
    count: 12,
  },
] as const;
const SEO_TITLES = {
  pl: {
    buyers: "Agent nieruchomości – kupno i sprzedaż z siecią | Vesteri",
    sellers: "Sprzedaż nieruchomości z agentem sieci | Vesteri Collective",
    agents: "Praca agenta nieruchomości: dołącz do Vesteri Collective",
  },
  en: {
    buyers: "Vesteri Collective | Real Estate Agent Network, Local & Abroad",
    sellers: "Sell Your Property with a Network Agent | Vesteri Collective",
    agents: "Real Estate Agent Network – Join Vesteri Collective",
  },
} as const;
const T1_H1: Record<string, Record<string, [string, string]>> = {
  buyers: {
    "Twój agent.": ["top03", "Agent nieruchomości "],
    "Możliwości całej sieci.": ["top04", "z możliwościami całej sieci"],
  },
  agents: {
    "Zachowaj niezależność.": ["top03", "Praca agenta nieruchomości"],
    "Zyskaj siłę współpracy.": ["top04", "na własnych zasadach"],
  },
};
// Owner-approved integration of Polish SEO copy into existing sections.
const INTEGRATED_PL_COPY = [
  {
    role: "buyers",
    key: "buyers03",
    previousStart:
      "Nie musisz ograniczać się do ofert jednej agencji. Twój agent moż",
  },
  {
    role: "buyers",
    key: "faq10",
    previousStart:
      "Tak, jeśli agent podejmie się prowadzenia Twoich poszukiwań. Może",
  },
  {
    role: "sellers",
    key: "how-it-works03",
    previousStart:
      "W tradycyjnym modelu podpisujesz umowę z jednym biurem i liczysz,",
  },
  {
    role: "sellers",
    key: "terms03",
    previousStart:
      "Umowa na wyłączność może uporządkować odpowiedzialność jednego ag",
  },
  {
    role: "agents",
    key: "agents20",
    previousStart:
      "Dołącz do sieci niezależnych agentów. Pokazuj swoje oferty, docie",
  },
  {
    role: "agents",
    key: "how03",
    previousStart:
      "Jeśli nie masz odpowiedniej nieruchomości, możesz sprawdzić ofert",
  },
  {
    role: "agents",
    key: "about03",
    previousStart:
      "Vesteri współpracuje z deweloperami zagranicznymi. Na wybranych r",
  },
  {
    role: "agents",
    key: "faq06",
    previousStart:
      "Zgłaszać się mogą niezależni agenci i biura nieruchomości. Vester",
  },
];

const flatten = (value: unknown): string[] =>
  typeof value === "string"
    ? [value]
    : value && typeof value === "object"
      ? Object.values(value).flatMap(flatten)
      : [];
// Owner-approved buyer choice: several agents without exclusivity, or one contact.
const BUYER_CHOICE_REPLACES = {
  pl: [
    "Jeden agent. Więcej możliwości.",
    "Czy jeden agent pomoże mi znaleźć nieruchomość w całej sieci?",
  ],
  en: [
    "One agent. More options.",
    "You are not limited to one agency’s listings.",
    "Will one agent help me find properties across the network?",
    "Yes, if an agent agrees to guide your search.",
  ],
};
describe("V10.7 authoritative bilingual content and routes", () => {
  for (const [locale, messages] of Object.entries({ en, pl }) as [
    "en" | "pl",
    typeof en,
  ][]) {
    for (const role of roles) {
      it(`preserves all ${role.count} FAQ entries and editorial text for ${locale}/${role.id}`, () => {
        const html = readFileSync(join(reference, role[locale]), "utf8");
        const content = messages.marketing[role.id];
        const values = flatten(content).map(normalize);
        const questions = [
          ...html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g),
        ].map((m) => normalize(m[1]));
        expect(questions).toHaveLength(role.count);
        for (const question of questions) {
          expect(values).toContain(
            role.id === "buyers" &&
              question ===
                BUYER_CHOICE_REPLACES[locale][locale === "pl" ? 1 : 2]
              ? content.faq09
              : question,
          );
        }
        const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)![1];
        for (const match of main.matchAll(/>([^<>]+)</g)) {
          const text = normalize(match[1]);
          // The owner replaced the original uppercase eyebrow with a two-line title.
          if (
            role.id === "buyers" &&
            text ===
              (locale === "pl"
                ? "JEDNA SIEĆ. WIĘKSZE MOŻLIWOŚCI."
                : "ONE NETWORK. MORE POSSIBILITIES.")
          ) {
            expect(messages.marketing.buyers.introTitle).toEqual(
              locale === "pl"
                ? { first: "Jedna sieć.", second: "Większe możliwości." }
                : { first: "One network.", second: "More possibilities." },
            );
          } else if (
            role.id === "buyers" &&
            text ===
              (locale === "pl"
                ? "VESTERI COLLECTIVE · NIERUCHOMOŚCI W POLSCE I ZA GRANICĄ"
                : "VESTERI COLLECTIVE · LOCAL & INTERNATIONAL PROPERTY")
          ) {
            // SEO v3: the owner approved a descriptive hero eyebrow.
            expect(messages.marketing.buyers.top02).toBe(
              locale === "pl"
                ? "Sieć agentów nieruchomości w Polsce i za granicą"
                : "Real estate agent network, locally and abroad",
            );
          } else if (
            role.id === "agents" &&
            text ===
              (locale === "pl"
                ? "Twoja marka. Twoje zasady. Nasza wspólna siła."
                : "Your brand. Your terms. Our collective strength.")
          ) {
            // The owner replaced individual terms with shared rules.
            expect(messages.marketing.agents.main18).toBe(
              locale === "pl"
                ? "Twoja marka. Wspólne zasady. Nasza wspólna siła."
                : "Your brand. Shared rules. Our collective strength.",
            );
          } else if (
            locale === "pl" &&
            T1_H1[role.id as keyof typeof T1_H1]?.[text]
          ) {
            // SEO T1 (plan v5.1): owner-approved keyword H1 on pl buyers/agents.
            const [key, expected] = T1_H1[role.id as keyof typeof T1_H1][text];
            expect(
              (
                messages.marketing as unknown as Record<
                  string,
                  Record<string, string>
                >
              )[role.id][key],
            ).toBe(expected);
          } else if (
            locale === "pl" &&
            INTEGRATED_PL_COPY.some(
              (change) =>
                change.role === role.id &&
                text.startsWith(change.previousStart),
            )
          ) {
            const change = INTEGRATED_PL_COPY.find(
              (change) =>
                change.role === role.id &&
                text.startsWith(change.previousStart),
            )!;
            const updated = (content as unknown as Record<string, string>)[
              change.key
            ];
            expect(updated.length).toBeGreaterThan(60);
            expect(normalize(updated)).not.toBe(text);
          } else if (
            role.id === "buyers" &&
            BUYER_CHOICE_REPLACES[locale].some((previous) =>
              text.startsWith(previous),
            )
          ) {
            // These four fields now explain the approved non-exclusive model.
            expect(messages.marketing.buyers.buyers03.length).toBeGreaterThan(100);
            expect(content.faq10.length).toBeGreaterThan(100);
          } else if (text && !text.startsWith("<!--"))
            expect(values).toContain(text);
        }
        // SEO v3: titles deliberately diverge from the V10.7 reference.
        expect(content.meta.title).toBe(SEO_TITLES[locale][role.id]);
      });
    }
  }
  it("keeps illustrative photographs local and individual listing links pending", () => {
    expect(propertyCards).toHaveLength(3);
    for (const card of propertyCards) {
      expect(existsSync(join("public", card.image))).toBe(true);
      if (card.listingUrl)
        expect(new URL(card.listingUrl).origin).toBe(
          "https://vesteri.estalara.com",
        );
    }
  });
});
