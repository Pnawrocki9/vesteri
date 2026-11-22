import { describe, expect, it } from 'vitest';
import { DEFAULT_INPUT, calculate } from '../agent-calculator';

describe('agent benefits calculator', () => {
  it('matches the worked default example', () => {
    const r = calculate(DEFAULT_INPUT);
    expect(r.avg).toBe(20000);
    expect(r.sharePct).toBe(70);
    expect(r.netNow).toBe(108000);
    expect(r.netV).toBe(156000);
    expect(r.delta).toBe(48000);
    expect(r.breakEven).toBe(9);
  });

  it('steps the share 70 / 73 / 77 / 80 with LIVE events in the month', () => {
    const share = (livesMonth: number) =>
      calculate({ ...DEFAULT_INPUT, livesMonth }).sharePct;
    expect([0, 1, 2, 3, 7].map(share)).toEqual([70, 73, 77, 80, 80]);
  });

  it('pays 3+1 on the selling agent’s commission after the split', () => {
    const r = calculate({ ...DEFAULT_INPUT, networkOn: true });
    // 5 agents × 8 deals × 20 000 × 70% × 3% and 10 × 8 × 20 000 × 70% × 1%.
    expect(r.networkDirect).toBeCloseTo(16800);
    expect(r.networkIndirect).toBeCloseTo(11200);
    const top = calculate({ ...DEFAULT_INPUT, networkOn: true, teamShare: 80 });
    expect(top.networkDirect).toBeCloseTo(19200);
  });

  it('charges LIVE at the discounted price and deducts own costs from Vesteri', () => {
    const r = calculate({
      ...DEFAULT_INPUT,
      livePrice: 200,
      discount: 25,
      livesMonth: 3,
      costV: 6000,
    });
    expect(r.liveCosts).toBe(5400);
    expect(r.liveSavings).toBe(1800);
    // 240 000 × 80% − 5 400 − 6 000.
    expect(r.netV).toBe(180600);
  });

  it('ignores negative and non-numeric input', () => {
    const r = calculate({ ...DEFAULT_INPUT, deals: -4, costNow: Number.NaN });
    expect(r.grossNow).toBe(0);
    expect(r.costNow).toBe(0);
  });
});
