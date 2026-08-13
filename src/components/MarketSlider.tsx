'use client';

import { useState } from 'react';

export type ActiveMarket = {
  key: string;
  name: string;
  coords: string;
  alt: string;
  slide: string;
  thumb: string;
  width: number;
  height: number;
};

export type SoonMarket = { key: string; name: string; svg: string };

// Markets panel on the entry landing: one large relief at a time for the live
// markets, with every market — live and planned — as a small tile underneath.
// Pointing at a live tile brings that country up in the panel; the tiles are
// buttons, so the same works from the keyboard and from a touch screen, where
// there is no hover to speak of.
export default function MarketSlider({
  active,
  soon,
  activeTag,
  activeShort,
  soonLabel,
}: {
  active: ActiveMarket[];
  soon: SoonMarket[];
  activeTag: string;
  activeShort: string;
  soonLabel: string;
}) {
  const [current, setCurrent] = useState(0);
  const shown = active[current];
  // Three tiles per row on the wide layout, two on phones. The trailing row is
  // centred, which is why this is flex rather than a grid.
  const tileBasis =
    'basis-[calc((100%-36px)/3)] max-[640px]:basis-[calc((100%-18px)/2)]';

  return (
    <>
      <div className="relative border border-line bg-paper-alt/80 p-9 pb-7 backdrop-blur-[2px] max-[640px]:p-6 max-[640px]:pb-5">
        <span className="bg-accent-gradient absolute -top-[11px] left-8 rounded-full px-[14px] py-[5px] text-[10px] font-bold tracking-[0.16em] text-paper uppercase max-[640px]:left-5">
          {activeTag}
        </span>
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <b className="text-[12px] font-bold tracking-[0.24em] text-ink uppercase">{shown.name}</b>
          <span className="text-[10.5px] tracking-[0.12em] text-muted-soft">{shown.coords}</span>
        </div>
        {/* Every slide stays in the DOM and crossfades, so switching countries
            never waits on a download. The first one is the landing's LCP
            element and keeps its priority; the rest ask for less. */}
        <div className="relative h-[300px] max-[640px]:h-[200px]">
          {active.map((market, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={market.key}
              src={market.slide}
              alt={market.alt}
              width={market.width}
              height={market.height}
              fetchPriority={i === 0 ? 'high' : 'low'}
              aria-hidden={i === current ? undefined : true}
              className={`lp-relief absolute inset-0 block h-full w-full object-contain mix-blend-multiply transition-opacity duration-500 motion-reduce:transition-none ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[18px]">
        {active.map((market, i) => (
          <button
            key={market.key}
            type="button"
            aria-pressed={i === current}
            onMouseEnter={() => setCurrent(i)}
            onFocus={() => setCurrent(i)}
            onClick={() => setCurrent(i)}
            className={`${tileBasis} flex cursor-pointer flex-col items-center gap-2 border px-[14px] pt-4 pb-3 transition-colors motion-reduce:transition-none ${
              i === current ? 'border-accent bg-paper-alt/90' : 'border-line bg-paper/80'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={market.thumb}
              alt=""
              width={market.width}
              height={market.height}
              loading="lazy"
              className="block h-[74px] w-full object-contain mix-blend-multiply"
            />
            <b className="text-[10.5px] font-bold tracking-[0.18em] text-muted-soft uppercase">
              {market.name}
            </b>
            <span className="bg-accent-gradient rounded-full px-[9px] py-[3px] text-[9px] font-semibold tracking-[0.12em] text-paper uppercase">
              {activeShort}
            </span>
          </button>
        ))}

        {soon.map((market) => (
          <div
            key={market.key}
            className={`${tileBasis} flex flex-col items-center gap-2 border border-line bg-paper/80 px-[14px] pt-4 pb-3`}
          >
            <div
              aria-hidden="true"
              className="w-full [&_svg]:block [&_svg]:h-[74px] [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: market.svg }}
            />
            <b className="text-[10.5px] font-bold tracking-[0.18em] text-muted-soft uppercase">
              {market.name}
            </b>
            <span className="rounded-full border border-line px-[9px] py-[3px] text-[9px] font-semibold tracking-[0.12em] text-muted-soft uppercase">
              {soonLabel}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
