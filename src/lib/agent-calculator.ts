// Pure maths behind the agent benefits calculator, kept apart from the UI so
// the model can be unit-tested. All money is PLN per year unless noted.

/** Agent share of the commission by qualifying LIVE events in a month. */
export const SHARES = [70, 73, 77, 80] as const;
/** 3+1: level 1 and level 2 rates, on the selling agent's post-split commission. */
export const LEVEL_1_RATE = 0.03;
export const LEVEL_2_RATE = 0.01;

export type CalculatorInput = {
  deals: number;
  propertyValue: number;
  commissionPct: number;
  /** Share of the commission kept today, in percent. */
  current: number;
  /** The agent's own annual costs (car, phone, accounting, own marketing).
   *  They are the same in both models, so they are deducted from both. */
  ownCosts: number;
  /** What the agent pays for property portals today. Vesteri funds portals
   *  for its agents, so this cost exists only in the current model. */
  portalsNow: number;
  adsBudget: number;
  adsFee: number;
  livePrice: number;
  livesMonth: number;
  discount: number;
  /** Simulated change in the number of transactions, in percent. */
  growth: number;
  networkOn: boolean;
  directAgents: number;
  indirectAgents: number;
  teamDeals: number;
  /** Average share of the network's agents, in percent (70–80). */
  teamShare: number;
};

export const DEFAULT_INPUT: CalculatorInput = {
  deals: 12,
  propertyValue: 800000,
  commissionPct: 2.5,
  current: 50,
  ownCosts: 12000,
  portalsNow: 0,
  adsBudget: 0,
  adsFee: 10,
  livePrice: 0,
  livesMonth: 0,
  discount: 0,
  growth: 0,
  networkOn: false,
  directAgents: 5,
  indirectAgents: 10,
  teamDeals: 8,
  teamShare: 70,
};

const nonNegative = (n: number) => Math.max(0, Number.isFinite(n) ? n : 0);
const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, Number.isFinite(n) ? n : min));

export function calculate(input: CalculatorInput) {
  const deals = nonNegative(input.deals);
  const avg =
    (nonNegative(input.propertyValue) * clamp(input.commissionPct, 0, 100)) /
    100;
  const current = clamp(input.current, 0, 100) / 100;
  const livesMonth = nonNegative(input.livesMonth);
  const level = Math.min(SHARES.length - 1, Math.floor(livesMonth));
  const sharePct = SHARES[level];
  const share = sharePct / 100;
  const growth = clamp(input.growth, -100, 500) / 100;

  const grossNow = deals * avg;
  const grossV = grossNow * (1 + growth);
  const incomeNow = grossNow * current;
  const incomeV = grossV * share;

  const teamShare = clamp(input.teamShare || 70, 70, 80) / 100;
  const teamBase = nonNegative(input.teamDeals) * avg * teamShare;
  const networkDirect = input.networkOn
    ? nonNegative(input.directAgents) * teamBase * LEVEL_1_RATE
    : 0;
  const networkIndirect = input.networkOn
    ? nonNegative(input.indirectAgents) * teamBase * LEVEL_2_RATE
    : 0;
  const network = networkDirect + networkIndirect;

  const livePrice = nonNegative(input.livePrice);
  const discount = clamp(input.discount, 0, 100) / 100;
  const liveCosts = livePrice * (1 - discount) * livesMonth * 12;
  const liveSavings = livePrice * discount * livesMonth * 12;

  const adsSpend = nonNegative(input.adsBudget) * 12;
  const adsManagement = (adsSpend * clamp(input.adsFee, 0, 100)) / 100;
  const adsTotal = adsSpend + adsManagement;

  const ownCosts = nonNegative(input.ownCosts);
  const portalsNow = nonNegative(input.portalsNow);
  // The ad budget is the agent's own spend in either model; only the
  // management fee is a cost that exists with Vesteri alone.
  const netNow = incomeNow - ownCosts - portalsNow - adsSpend;
  const netV = incomeV + network - adsTotal - liveCosts - ownCosts;
  const delta = netV - netNow;

  // Transactions a year with Vesteri needed to match today's net result.
  const breakEven =
    avg * share > 0
      ? Math.max(
          0,
          Math.ceil(
            (netNow + adsTotal + liveCosts + ownCosts - network) / (avg * share),
          ),
        )
      : null;

  return {
    avg,
    level,
    sharePct,
    growthPct: Math.round(growth * 100),
    grossNow,
    grossV,
    incomeNow,
    incomeV,
    networkDirect,
    networkIndirect,
    network,
    liveCosts,
    liveSavings,
    adsSpend,
    adsManagement,
    adsTotal,
    ownCosts,
    portalsNow,
    netNow,
    netV,
    delta,
    breakEven,
  };
}
