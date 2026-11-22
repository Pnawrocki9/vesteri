'use client';
import { useId, useMemo, useState } from 'react';
import { Link } from '@/i18n/navigation';
import {
  DEFAULT_INPUT,
  SHARES,
  calculate,
  type CalculatorInput,
} from '@/lib/agent-calculator';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '@/lib/site';

type NumberField = Exclude<keyof CalculatorInput, 'networkOn'>;
type Labels = Record<string, string>;

const FIELDS = Object.keys(DEFAULT_INPUT).filter(
  (key) => key !== 'networkOn',
) as NumberField[];
const initialValues = () =>
  Object.fromEntries(
    FIELDS.map((key) => [key, String(DEFAULT_INPUT[key])]),
  ) as Record<NumberField, string>;

// min / max / step of each number input.
const LIMITS: Record<NumberField, [number, number | undefined, number]> = {
  deals: [0, undefined, 1],
  propertyValue: [0, undefined, 10000],
  commissionPct: [0, 100, 0.1],
  current: [0, 100, 1],
  ownCosts: [0, undefined, 1000],
  portalsNow: [0, undefined, 100],
  adsBudget: [0, undefined, 100],
  adsFee: [0, 100, 1],
  livePrice: [0, undefined, 10],
  livesMonth: [0, undefined, 1],
  discount: [0, 100, 1],
  growth: [-100, 500, 5],
  directAgents: [0, undefined, 1],
  indirectAgents: [0, undefined, 1],
  teamDeals: [0, undefined, 1],
  teamShare: [70, 80, 1],
};

export default function AgentCalculator({
  labels: l,
  locale,
}: {
  labels: Labels;
  locale: string;
}) {
  const uid = useId();
  const [values, setValues] = useState(initialValues);
  const [networkOn, setNetworkOn] = useState(DEFAULT_INPUT.networkOn);

  const result = useMemo(() => {
    const numbers = Object.fromEntries(
      FIELDS.map((key) => [key, Number(values[key]) || 0]),
    ) as Record<NumberField, number>;
    return calculate({ ...numbers, networkOn });
  }, [values, networkOn]);

  const money = useMemo(() => {
    const format = new Intl.NumberFormat(locale === 'pl' ? 'pl-PL' : 'en-GB', {
      style: 'currency',
      currency: 'PLN',
      maximumFractionDigits: 0,
    });
    return (n: number) => format.format(Math.round(n));
  }, [locale]);
  const signed = (n: number) => (n > 0 ? '+' : '') + money(n);
  const dealsWord = (n: number) => {
    const rule = new Intl.PluralRules(locale === 'pl' ? 'pl-PL' : 'en-GB').select(n);
    return rule === 'one' ? l.dealsOne : rule === 'few' ? l.dealsFew : l.dealsMany;
  };

  const field = (key: NumberField, hint?: string) => {
    const [min, max, step] = LIMITS[key];
    const id = `${uid}-${key}`;
    return (
      <div className="calc-field">
        <label htmlFor={id}>{l[key]}</label>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={values[key]}
          aria-describedby={hint ? `${id}-hint` : undefined}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, [key]: event.target.value }))
          }
        />
        {hint && (
          <p className="calc-hint" id={`${id}-hint`}>
            {hint}
          </p>
        )}
      </div>
    );
  };

  const better = result.delta >= 0;
  const maxBar = Math.max(1, result.netNow, result.netV);
  const bar = (n: number) => `${(Math.max(0, n) / maxBar) * 100}%`;
  const description = [
    result.growthPct !== 0
      ? l.descGrowth.replace('{pct}', String(result.growthPct))
      : l.descSame,
    networkOn ? l.descNetworkOn : l.descNetworkOff,
    result.liveCosts ? l.descLive : '',
    result.adsManagement ? l.descAds : '',
  ]
    .filter(Boolean)
    .join(' ');
  const rows: [string, string][] = [
    [l.rowGrossNow, money(result.grossNow)],
    [l.rowGrossV, money(result.grossV)],
    [l.rowIncomeNow, money(result.incomeNow)],
    [l.rowIncomeV, money(result.incomeV)],
    [l.rowNetworkDirect, money(result.networkDirect)],
    [l.rowNetworkIndirect, money(result.networkIndirect)],
    [l.rowNetwork, money(result.network)],
    [l.rowLiveCosts, money(result.liveCosts)],
    [l.rowLiveSavings, money(result.liveSavings)],
    [l.rowAdsSpend, money(result.adsSpend)],
    [l.rowAdsManagement, money(result.adsManagement)],
    [l.rowCosts, money(result.ownCosts)],
    [l.rowPortalsNow, money(result.portalsNow)],
    [l.rowPortalsV, money(0)],
  ];

  return (
    <div className="calc-layout">
      <section className="calc-panel calc-inputs" aria-labelledby={`${uid}-in`}>
        <h2 id={`${uid}-in`}>{l.inputsHeading}</h2>
        <div className="calc-grid calc-grid-3">
          {field('deals')}
          {field('propertyValue')}
          {field('commissionPct')}
        </div>
        <p className="calc-hint">
          {l.avgHint.split('{avg}')[0]}
          <strong>{money(result.avg)}</strong>
          {l.avgHint.split('{avg}')[1]}
        </p>
        {field('current', l.currentHint)}
        {field('ownCosts', l.ownCostsHint)}
        {field('portalsNow', l.portalsNowHint)}

        <h3>{l.adsHeading}</h3>
        <div className="calc-grid">
          {field('adsBudget', l.adsBudgetHint)}
          {field('adsFee', l.adsFeeHint)}
        </div>
        <p className="calc-hint">{l.adsNote}</p>

        <h3>{l.levelHeading}</h3>
        <p className="calc-hint">{l.levelIntro}</p>
        <div className="calc-grid">
          {field('livePrice', l.livePriceHint)}
          {field('livesMonth', l.livesMonthHint)}
        </div>
        {field('discount', l.discountHint)}
        <p className="calc-hint">{l.levelNote}</p>

        <h3>{l.growthHeading}</h3>
        {field('growth', l.growthHint)}

        <label className="calc-toggle">
          <input
            type="checkbox"
            checked={networkOn}
            onChange={(event) => setNetworkOn(event.target.checked)}
          />
          {l.networkToggle}
        </label>
        {networkOn && (
          <div className="calc-network">
            <div className="calc-grid">
              {field('directAgents')}
              {field('indirectAgents')}
            </div>
            <div className="calc-grid">
              {field('teamDeals')}
              {field('teamShare', l.teamShareHint)}
            </div>
            <p className="calc-hint">{l.networkNote}</p>
            <dl className="calc-callout">
              <div>
                <dt>{l.level1}</dt>
                <dd>{money(result.networkDirect)}</dd>
              </div>
              <div>
                <dt>{l.level2}</dt>
                <dd>{money(result.networkIndirect)}</dd>
              </div>
            </dl>
          </div>
        )}
        <div className="calc-actions">
          <button
            type="button"
            className="btn calc-btn-line"
            onClick={() => {
              setValues(initialValues());
              setNetworkOn(DEFAULT_INPUT.networkOn);
            }}
          >
            {l.reset}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => window.print()}
          >
            {l.print}
          </button>
        </div>
      </section>

      <div className="calc-results" aria-live="polite">
        <section className="calc-hero">
          <p className="calc-tag">{l.resultTag}</p>
          <p className={better ? 'calc-big' : 'calc-big negative'}>
            {signed(result.delta)}
          </p>
          <p className="calc-sub">{description}</p>
        </section>
        <dl className="calc-metrics">
          <div>
            <dd>{money(result.netNow)}</dd>
            <dt>{l.nowNet}</dt>
          </div>
          <div>
            <dd>{money(result.netV)}</dd>
            <dt>{l.vNet}</dt>
          </div>
          <div>
            <dd>{result.sharePct}%</dd>
            <dt>{l.shareLabel}</dt>
          </div>
        </dl>
        <section className="calc-panel">
          <h2>{l.compareHeading}</h2>
          <div className="calc-bar">
            <p>
              <span>{l.barNow}</span>
              <strong>{money(result.netNow)}</strong>
            </p>
            <div>
              <i style={{ width: bar(result.netNow) }}></i>
            </div>
          </div>
          <div className="calc-bar vesteri">
            <p>
              <span>{l.barV}</span>
              <strong>{money(result.netV)}</strong>
            </p>
            <div>
              <i style={{ width: bar(result.netV) }}></i>
            </div>
          </div>
          <p className="calc-callout">
            <strong>
              {(better ? l.better : l.worse).replace(
                '{amount}',
                money(Math.abs(result.delta)),
              )}
            </strong>{' '}
            {better ? l.betterTail : l.worseTail}
          </p>
        </section>
        <section className="calc-panel">
          <h2>{l.ladderHeading}</h2>
          <ol className="calc-steps">
            {SHARES.map((share, i) => (
              <li
                key={share}
                className={i === result.level ? 'active' : undefined}
                aria-current={i === result.level ? 'step' : undefined}
              >
                <strong>{share}%</strong>
                <span>{i === 0 ? l.ladderStart : `${i} LIVE`}</span>
              </li>
            ))}
          </ol>
          <p className="calc-hint">{l.ladderNote}</p>
          <table>
            <caption>{l.tableCaption}</caption>
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
              <tr className="total">
                <th scope="row">{l.rowDelta}</th>
                <td>{signed(result.delta)}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="calc-panel">
          <h2>{l.breakEvenHeading}</h2>
          <p className="calc-breakeven">
            {result.breakEven === null
              ? l.breakEvenNone
              : `${result.breakEven} ${dealsWord(result.breakEven)}`}
          </p>
          <p className="calc-hint">{l.breakEvenText}</p>
        </section>
        <section className="calc-panel">
          <h2>{l.moreHeading}</h2>
          <p>
            {l.moreText} <strong>{l.moreStrong}</strong>
          </p>
          <div className="calc-actions">
            <a className="btn btn-primary" href={`tel:${CONTACT_PHONE_TEL}`}>
              {l.ctaCall} {CONTACT_PHONE_DISPLAY}
            </a>
            <Link className="btn calc-btn-line" href="/agents">
              {l.ctaAgents}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
