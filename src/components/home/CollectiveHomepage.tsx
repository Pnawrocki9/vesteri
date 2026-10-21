/* Approved v9 reference markup adapted to React; copy lives in next-intl. */
/* eslint-disable @next/next/no-img-element */
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { propertyCards } from '@/content/collective-properties';
import CollectiveHeader from './CollectiveHeader';
import CollectiveFaq from './CollectiveFaq';
import BuyerAssistance from './BuyerAssistance';
import MarketplacePanel from './MarketplacePanel';
import PropertyCard from './PropertyCard';
import './collective.css';
const LEGAL_PAGES = [
  'privacy',
  'terms',
  'cookies',
  'gdpr',
  'ai',
  'disclaimers',
] as const;
export default async function CollectiveHomepage({
  locale,
  fontClass,
}: {
  locale: string;
  fontClass: string;
}) {
  const t = await getTranslations('collective');
  const legal = await getTranslations('legal');
  return (
    <div className={`collective ${fontClass}`}>
      <a className="skip" href="#main">
        {t('copy01')}
      </a>
      <CollectiveHeader labels={t.raw('header')} />
      <main id="main">
        <section className="hero" id="top">
          <div
            aria-label={t('top01')}
            className="hero-picture"
            role="img"
          ></div>
          <div className="wrap hero-inner">
            <span className="eyebrow light">{t('top02')}</span>
            <h1>
              {t('top03')}
              <br />
              <em>{t('top04')}</em>
            </h1>
            <p className="hero-desc">{t('top05')}</p>
            <div className="hero-actions">
              <a className="btn btn-cream" href="https://vesteri.estalara.com">
                {t('top06')}
              </a>
              <a className="btn btn-outline" href="#agents">
                {t('top07')}
              </a>
            </div>
            <div className="hero-foot">
              <span>{t('top08')}</span>
              <span>{t('top09')}</span>
              <span>{t('top10')}</span>
            </div>
          </div>
        </section>
        <MarketplacePanel content={t.raw('search')} />
        <section className="section featured" id="properties">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{t('properties01')}</span>
                <h2>{t('properties02')}</h2>
              </div>
              <div>
                <p className="lead">{t('properties03')}</p>
                <a className="btn-text" href="https://vesteri.estalara.com">
                  {t('properties04')}
                  <span className="arrow">{t('properties05')}</span>
                </a>
              </div>
            </div>
            <div className="places">
              <PropertyCard index={0}>
                <img
                  alt={t('properties06')}
                  loading="lazy"
                  src={propertyCards[0].image}
                  width="900"
                  height="900"
                />
                <div className="place-body">
                  <h3>{t('properties07')}</h3>
                  <p>{t('properties08')}</p>
                  <span className="arr">{t('properties09')}</span>
                </div>
              </PropertyCard>
              <PropertyCard index={1}>
                <img
                  alt={t('properties10')}
                  loading="lazy"
                  src={propertyCards[1].image}
                  width="900"
                  height="900"
                />
                <div className="place-body">
                  <h3>{t('properties11')}</h3>
                  <p>{t('properties12')}</p>
                  <span className="arr">{t('properties13')}</span>
                </div>
              </PropertyCard>
              <PropertyCard index={2}>
                <img
                  alt={t('properties14')}
                  loading="lazy"
                  src={propertyCards[2].image}
                  width="900"
                  height="900"
                />
                <div className="place-body">
                  <h3>{t('properties15')}</h3>
                  <p>{t('properties16')}</p>
                  <span className="arr">{t('properties17')}</span>
                </div>
              </PropertyCard>
            </div>
            <p className="note">{t('assetsNote')}</p>
          </div>
        </section>
        <section className="split buyer" id="buyers">
          <div className="copy">
            <span className="eyebrow">{t('buyers01')}</span>
            <h2>{t('buyers02')}</h2>
            <p className="lead">{t('buyers03')}</p>
            <div className="point">
              <span className="icon">{t('buyers04')}</span>
              {t('buyers05')}
            </div>
            <div className="point">
              <span className="icon">{t('buyers06')}</span>
              {t('buyers07')}
            </div>
            <div className="point">
              <span className="icon">{t('buyers08')}</span>
              {t('buyers09')}
            </div>
            <BuyerAssistance content={t.raw('buyer')} />
          </div>
          <div className="visual buyer-editorial">
            <div
              aria-label={t('buyers10')}
              className="editorial-frame buyer-frame"
            >
              <div className="ed-top">
                <span>{t('buyers11')}</span>
                <span>{t('buyers12')}</span>
              </div>
              <div className="buyer-title">
                {t('buyers13')}
                <br />
                <em>{t('buyers14')}</em>
              </div>
              <div className="ed-rule"></div>
              <div className="brief-meta">
                <span>{t('buyers15')}</span>
                <span className="brief-counter">{t('buyers16')}</span>
              </div>
              <div className="brief-details">
                <div>
                  <small>{t('buyers17')}</small>
                  <strong>{t('buyers18')}</strong>
                </div>
                <div>
                  <small>{t('buyers19')}</small>
                  <strong>{t('buyers20')}</strong>
                </div>
                <div>
                  <small>{t('buyers21')}</small>
                  <strong>{t('buyers22')}</strong>
                </div>
              </div>
              <div className="ed-rule"></div>
              <div className="matching-label">
                {t('buyers23')}
                <span>{t('buyers24')}</span>
              </div>
              <div className="editorial-stack">
                <div className="offer-chip">
                  <span className="chip-number">{t('buyers25')}</span>
                  <span>{t('buyers26')}</span>
                  <span>{t('buyers27')}</span>
                </div>
                <div className="offer-chip">
                  <span className="chip-number">{t('buyers28')}</span>
                  <span>{t('buyers29')}</span>
                  <span>{t('buyers30')}</span>
                </div>
                <div className="offer-chip">
                  <span className="chip-number">{t('buyers31')}</span>
                  <span>{t('buyers32')}</span>
                  <span>{t('buyers33')}</span>
                </div>
              </div>
              <div className="ed-foot">{t('buyers34')}</div>
            </div>
          </div>
        </section>
        <section className="split agent" id="agents">
          <div className="visual agent-editorial">
            <div
              aria-label={t('agents01')}
              className="editorial-frame agent-frame"
            >
              <div className="ed-top">
                <span>{t('agents02')}</span>
                <span>{t('agents03')}</span>
              </div>
              <div className="agent-title">
                {t('agents04')}
                <br />
                {t('agents05')}
                <br />
                <em>{t('agents06')}</em>
              </div>
              <div aria-hidden="true" className="agent-line-art">
                <span className="line-a"></span>
                <span className="line-b"></span>
                <span className="line-c"></span>
                <i></i>
                <b></b>
              </div>
              <div className="agent-paper">
                <span className="paper-overline">{t('agents07')}</span>
                <div className="paper-heading">
                  {t('agents08')}
                  <i>{t('agents09')}</i>
                </div>
                <div className="paper-row">
                  <span>{t('agents10')}</span>
                  <strong>{t('agents11')}</strong>
                </div>
                <div className="paper-row">
                  <span>{t('agents12')}</span>
                  <strong>{t('agents13')}</strong>
                </div>
                <div className="paper-row">
                  <span>{t('agents14')}</span>
                  <strong>{t('agents15')}</strong>
                </div>
                <div className="paper-foot">{t('agents16')}</div>
              </div>
              <div className="ed-foot">{t('agents17')}</div>
            </div>
          </div>
          <div className="copy">
            <span className="eyebrow light">{t('agents18')}</span>
            <h2>{t('agents19')}</h2>
            <p className="lead">{t('agents20')}</p>
            <div className="point">
              <span className="icon">{t('agents21')}</span>
              {t('agents22')}
            </div>
            <div className="point">
              <span className="icon">{t('agents23')}</span>
              {t('agents24')}
            </div>
            <div className="point">
              <span className="icon">{t('agents25')}</span>
              {t('agents26')}
            </div>
            <div className="point">
              <span className="icon">{t('agents27')}</span>
              {t('agents28')}
            </div>
            <a
              className="btn btn-cream"
              href="https://vesteri.estalara.com"
              style={{ alignSelf: 'flex-start', marginTop: 16 }}
            >
              {t('agents29')}
            </a>
          </div>
        </section>
        <section className="section membership" id="membership">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{t('membership01')}</span>
                <h2>
                  {t('membership02')}
                  <br />
                  {t('membership03')}
                </h2>
              </div>
              <p className="lead">{t('membership04')}</p>
            </div>
            <div className="membership-grid">
              <article className="membership-card buyer-access">
                <span className="pill">{t('membership05')}</span>
                <h3>{t('membership06')}</h3>
                <p>{t('membership07')}</p>
                <a
                  className="btn btn-primary"
                  href="https://vesteri.estalara.com"
                >
                  {t('membership08')}
                </a>
              </article>
              <article className="membership-card member-access">
                <span className="pill dark">{t('membership09')}</span>
                <h3>{t('membership10')}</h3>
                <p>{t('membership11')}</p>
                <a
                  className="btn btn-cream"
                  href="https://vesteri.estalara.com"
                >
                  {t('membership12')}
                </a>
              </article>
            </div>
            <div className="steps">
              <div>
                <b>{t('membership13')}</b>
                <strong>{t('membership14')}</strong>
                <small>{t('membership15')}</small>
              </div>
              <div>
                <b>{t('membership16')}</b>
                <strong>{t('membership17')}</strong>
                <small>{t('membership18')}</small>
              </div>
              <div>
                <b>{t('membership19')}</b>
                <strong>{t('membership20')}</strong>
                <small>{t('membership21')}</small>
              </div>
            </div>
            <p className="note">{t('membership22')}</p>
          </div>
        </section>
        <section className="section network" id="how">
          <div className="wrap">
            <div className="network-head">
              <span className="eyebrow">{t('how01')}</span>
              <h2>{t('how02')}</h2>
              <p className="lead">{t('how03')}</p>
            </div>
            <div className="network-flow">
              <div className="node">
                <div className="node-symbol">{t('how04')}</div>
                <strong>{t('how05')}</strong>
                <p>{t('how06')}</p>
              </div>
              <div className="flow-arrow">{t('how07')}</div>
              <div className="node middle">
                <div className="node-symbol">{t('how08')}</div>
                <strong>{t('how09')}</strong>
                <p>{t('how10')}</p>
              </div>
              <div className="flow-arrow">{t('how11')}</div>
              <div className="node">
                <div className="node-symbol">{t('how12')}</div>
                <strong>{t('how13')}</strong>
                <p>{t('how14')}</p>
              </div>
            </div>
            <p className="network-tag">{t('how15')}</p>
          </div>
        </section>
        <section className="section tech" id="technology">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{t('technology01')}</span>
                <h2>{t('technology02')}</h2>
              </div>
              <p className="lead">{t('technology03')}</p>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <div className="symbol">{t('technology04')}</div>
                <h3>
                  {t('technology05')}
                  <br />
                  {t('technology06')}
                </h3>
                <p>{t('technology07')}</p>
              </div>
              <div className="tech-item">
                <div className="symbol">{t('technology08')}</div>
                <h3>
                  {t('technology09')}
                  <br />
                  {t('technology10')}
                </h3>
                <p>{t('technology11')}</p>
              </div>
              <div className="tech-item">
                <div className="symbol">{t('technology12')}</div>
                <h3>
                  {t('technology13')}
                  <br />
                  {t('technology14')}
                </h3>
                <p>{t('technology15')}</p>
              </div>
              <div className="tech-item">
                <div className="symbol">{t('technology16')}</div>
                <h3>
                  {t('technology17')}
                  <br />
                  {t('technology18')}
                </h3>
                <p>{t('technology19')}</p>
              </div>
            </div>
            <div style={{ marginTop: 29 }}>
              <a className="btn-text" href="https://vesteri.estalara.com">
                {t('technology20')}
              </a>
            </div>
          </div>
        </section>
        <section className="section broker" id="about">
          <div className="wrap broker-layout">
            <div>
              <span className="eyebrow">{t('about01')}</span>
              <h2>{t('about02')}</h2>
              <p className="lead">{t('about03')}</p>
              <a className="btn-text" href="https://vesteri.estalara.com">
                {t('about04')}
              </a>
            </div>
            <img
              alt={t('about05')}
              loading="lazy"
              src="/img/collective/international.webp"
              width="1200"
              height="800"
            />
          </div>
        </section>
        <div className="trust-principle wrap">
          <strong>{t('main01')}</strong>
          <span>{t('main02')}</span>
        </div>
        <section className="section trust">
          <div className="wrap">
            <span className="eyebrow">{t('main03')}</span>
            <h2>{t('main04')}</h2>
            <p className="lead" style={{ maxWidth: 820 }}>
              {t('main05')}
            </p>
            <div className="trust-grid">
              <article>
                <h3>{t('main06')}</h3>
                <p>{t('main07')}</p>
              </article>
              <article>
                <h3>{t('main08')}</h3>
                <p>{t('main09')}</p>
              </article>
              <article>
                <h3>{t('main10')}</h3>
                <p>{t('main11')}</p>
              </article>
              <article>
                <h3>{t('main12')}</h3>
                <p>{t('main13')}</p>
              </article>
            </div>
            <div className="trust-manifesto">
              <div>
                <h3>{t('main14')}</h3>
                <p>{t('main15')}</p>
              </div>
              <span className="pill">{t('main16')}</span>
            </div>
          </div>
          <div className="wrap"></div>
        </section>
        <CollectiveFaq content={t.raw('faq')} />
        <section className="closing">
          <div className="wrap closing-inner">
            <div>
              <span className="eyebrow light">{t('main17')}</span>
              <h2>
                {t('main18')}
                <br />
                {t('main19')}
              </h2>
              <p className="lead">{t('main20')}</p>
            </div>
            <div className="closing-actions">
              <a className="btn btn-cream" href="https://vesteri.estalara.com">
                {t('main21')}
              </a>
              <a
                className="btn btn-outline"
                href="https://vesteri.estalara.com"
              >
                {t('main22')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">
          <div className="footer-main">
            <div>
              <a aria-label={t('footer01')} className="brand" href="#top">
                <img
                  alt={t('footer02')}
                  src="/logo/vesteri-mark-teal-gradient.svg"
                  width="42"
                  height="42"
                />
                <span className="wordmark">{t('footer03')}</span>
              </a>
              <p>{t('footer04')}</p>
            </div>
            <div>
              <h4>{t('footer05')}</h4>
              <a href="https://vesteri.estalara.com">{t('footer06')}</a>
              <a href="#buyers">{t('footer07')}</a>
              <a href="#about">{t('footer08')}</a>
            </div>
            <div>
              <h4>{t('footer09')}</h4>
              <a href="https://vesteri.estalara.com">{t('footer10')}</a>
              <a href="#how">{t('footer11')}</a>
              <a href="#technology">{t('footer12')}</a>
              <a href="#faq">{t('footer13')}</a>
            </div>
            <div>
              <h4>{t('footer14')}</h4>
              <a href="#about">{t('footer15')}</a>
              <Link href="/privacy">{t('footer16')}</Link>
              <Link href="/terms">{t('footer17')}</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t('footer18')}</span>
          </div>
        </div>
        <nav
          className="wrap footer-legal"
          aria-label={locale === 'pl' ? 'Dokumenty prawne' : 'Legal documents'}
        >
          {LEGAL_PAGES.map((slug) => (
            <Link key={slug} href={`/${slug}`}>
              {legal(slug)}
            </Link>
          ))}
          <Link href="/affiliate">{t('affiliate')}</Link>
        </nav>
      </footer>
    </div>
  );
}
