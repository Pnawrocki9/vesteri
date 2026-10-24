/* V10.7 reference markup; editorial copy is maintained in next-intl. */
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { MARKETPLACE_URL } from '@/lib/site';
import MarketingHeader from './MarketingHeader';
import MarketingFooter from './MarketingFooter';
import PropertyCard from './PropertyCard';
import { propertyCards } from '@/content/collective-properties';

export default async function BuyersContent({ locale }: { locale: string }) {
  const t = await getTranslations('marketing.buyers');
  return (
    <>
      <a className="skip" href="#main">
        {t('copy01')}
      </a>
      <MarketingHeader audience="buyers" labels={t.raw('header')} />
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
              <em>{t('top04')}</em>
            </h1>
            <p className="hero-desc">{t('top05')}</p>
            <div className="hero-actions">
              <a className="btn btn-cream" href={MARKETPLACE_URL}>
                {t('top06')}
              </a>
              <Link className="btn btn-outline" href="/agents">
                {t('top07')}
              </Link>
            </div>
            <div className="hero-foot">
              <span>{t('top08')}</span>
              <span>{t('top09')}</span>
              <span>{t('top10')}</span>
            </div>
          </div>
        </section>
        <div className="v10-intro">
          <div className="wrap v10-intro-inner">
            <h2 className="v10-intro-title">
              <span>{t('introTitle.first')}</span>
              <span>{t('introTitle.second')}</span>
            </h2>
            <p>{t('main02')}</p>
          </div>
        </div>
        <section className="section featured" id="properties">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{t('properties01')}</span>
                <h2>{t('properties02')}</h2>
              </div>
              <div>
                <p className="lead">{t('properties03')}</p>
                <a className="btn-text" href={MARKETPLACE_URL}>
                  {t('properties04')}
                  <span className="arrow">{t('properties05')}</span>
                </a>
              </div>
            </div>
            <div className="places">
              <PropertyCard
                property={propertyCards[0]}
                className="place"
                alt={t('properties06')}
              >
                <div className="place-body">
                  <h3>{t('properties07')}</h3>
                  <p>{t('properties08')}</p>
                </div>
              </PropertyCard>
              <PropertyCard
                property={propertyCards[1]}
                className="place"
                alt={t('properties10')}
              >
                <div className="place-body">
                  <h3>{t('properties11')}</h3>
                  <p>{t('properties12')}</p>
                </div>
              </PropertyCard>
              <PropertyCard
                property={propertyCards[2]}
                className="place"
                alt={t('properties14')}
              >
                <div className="place-body">
                  <h3>{t('properties15')}</h3>
                  <p>{t('properties16')}</p>
                </div>
              </PropertyCard>
            </div>
          </div>
        </section>
        <section className="section v10-events" id="events">
          <div className="wrap">
            <div className="v10-events-head">
              <div>
                <span className="eyebrow">{t('events01')}</span>
                <h2>{t('events02')}</h2>
              </div>
              <p className="lead">{t('events03')}</p>
            </div>
            <div className="v10-events-grid">
              <div className="v10-event-card">
                <span className="v10-event-number">{t('events04')}</span>
                <h3>{t('events05')}</h3>
                <p>{t('events06')}</p>
              </div>
              <div className="v10-event-card">
                <span className="v10-event-number">{t('events07')}</span>
                <h3>{t('events08')}</h3>
                <p>{t('events09')}</p>
              </div>
              <div className="v10-event-card">
                <span className="v10-event-number">{t('events10')}</span>
                <h3>{t('events11')}</h3>
                <p>{t('events12')}</p>
              </div>
            </div>
            <div className="v10-events-bottom">
              <span>{t('events13')}</span>
              <a className="btn btn-primary" href={MARKETPLACE_URL}>
                {t('events14')}
              </a>
            </div>
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
            <a
              className="btn btn-primary"
              href={MARKETPLACE_URL}
              style={{ alignSelf: 'flex-start', marginTop: '19px' }}
            >
              {t('buyers10')}
            </a>
          </div>
          <div className="visual buyer-editorial">
            <div
              aria-label={t('buyers11')}
              className="editorial-frame buyer-frame"
            >
              <div className="ed-top">
                <span>{t('buyers12')}</span>
                <span>{t('buyers13')}</span>
              </div>
              <div className="buyer-title">
                {t('buyers14')}
                <br />
                <em>{t('buyers15')}</em>
              </div>
              <div className="ed-rule"></div>
              <div className="brief-meta">
                <span>{t('buyers16')}</span>
                <span className="brief-counter">{t('buyers17')}</span>
              </div>
              <div className="brief-details">
                <div>
                  <small>{t('buyers18')}</small>
                  <strong>{t('buyers19')}</strong>
                </div>
                <div>
                  <small>{t('buyers20')}</small>
                  <strong>{t('buyers21')}</strong>
                </div>
                <div>
                  <small>{t('buyers22')}</small>
                  <strong>{t('buyers23')}</strong>
                </div>
              </div>
              <div className="ed-rule"></div>
              <div className="matching-label">
                {t('buyers24')}
              </div>
              <div className="editorial-stack">
                <div className="offer-chip">
                  <span className="chip-number">{t('buyers26')}</span>
                  <span>{t('buyers27')}</span>
                </div>
                <div className="offer-chip">
                  <span className="chip-number">{t('buyers29')}</span>
                  <span>{t('buyers30')}</span>
                </div>
                <div className="offer-chip">
                  <span className="chip-number">{t('buyers32')}</span>
                  <span>{t('buyers33')}</span>
                </div>
              </div>
              <div className="ed-foot">{t('buyers35')}</div>
            </div>
          </div>
        </section>
        <section className="v10-values">
          <div className="wrap">
            <span className="eyebrow">{t('main03')}</span>
            <h2>{t('main04')}</h2>
            <div className="v10-value-grid">
              <div>
                <b>{t('main05')}</b>
                <h3>{t('main06')}</h3>
                <p>{t('main07')}</p>
              </div>
              <div>
                <b>{t('main08')}</b>
                <h3>{t('main09')}</h3>
                <p>{t('main10')}</p>
              </div>
              <div>
                <b>{t('main11')}</b>
                <h3>{t('main12')}</h3>
                <p>{t('main13')}</p>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="faqTitle" className="section faq" id="faq">
          <div className="wrap">
            <div className="faq-intro">
              <span className="eyebrow">{t('faq01')}</span>
              <h2 id="faqTitle">{t('faqTitle01')}</h2>
              <p className="lead">{t('faq02')}</p>
            </div>
            <div className="faq-group active">
              <details>
                <summary>{t('faq03')}</summary>
                <p>{t('faq04')}</p>
              </details>
              <details>
                <summary>{t('faq05')}</summary>
                <p>{t('faq06')}</p>
              </details>
              <details>
                <summary>{t('faq07')}</summary>
                <p>{t('faq08')}</p>
              </details>
              <details>
                <summary>{t('faq09')}</summary>
                <p>{t('faq10')}</p>
              </details>
              <details>
                <summary>{t('faq11')}</summary>
                <p>{t('faq12')}</p>
              </details>
              <details>
                <summary>{t('faq13')}</summary>
                <p>{t('faq14')}</p>
              </details>
              <details>
                <summary>{t('faq15')}</summary>
                <p>{t('faq16')}</p>
              </details>
              <details>
                <summary>{t('faq17')}</summary>
                <p>{t('faq18')}</p>
              </details>
            </div>
          </div>
        </section>
        <section className="v10-agents-teaser">
          <div className="wrap v10-agents-row">
            <div>
              <span className="eyebrow light">{t('main14')}</span>
              <h2>{t('main15')}</h2>
              <p>{t('main16')}</p>
            </div>
            <Link className="btn btn-cream" href="/agents">
              {t('main17')}
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} audience="buyers" />
    </>
  );
}
