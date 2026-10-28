/* V10.7 reference markup; editorial copy is maintained in next-intl. */
/* eslint-disable @next/next/no-img-element */
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { MARKETPLACE_URL } from '@/lib/site';
import { CareerGuideLink } from './MarketingExtras';
import MarketingHeader from './MarketingHeader';
import MarketingFooter from './MarketingFooter';

export default async function AgentsContent({ locale }: { locale: string }) {
  const t = await getTranslations('marketing.agents');
  return (
    <>
      <a className="skip" href="#main">
        {t('copy01')}
      </a>
      <MarketingHeader audience="agents" labels={t.raw('header')} />
      <main id="main">
        <section className="hero v10-agent-hero" id="top">
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
              <a className="btn btn-cream" href={MARKETPLACE_URL}>
                {t('top06')}
              </a>
              <a className="btn btn-outline" href="#membership">
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
          <div className="copy" id="praca-agenta">
            <span className="eyebrow light">{t('agents18')}</span>
            <h2 id="siec-zamiast-franczyzy">{t('agents19')}</h2>
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
              href={MARKETPLACE_URL}
              style={{ alignSelf: 'flex-start', marginTop: '16px' }}
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
                <h2>{t('membership02')}</h2>
              </div>
              <div>
                <p className="lead">{t('membership03')}</p>
                <p className="lead membership-how">
                  <Link href="/how-it-works">{t('membershipHowItWorks')}</Link>
                </p>
              </div>
            </div>
            <div className="membership-grid">
              <article className="membership-card member-access">
                <span className="pill dark">{t('membership04')}</span>
                <h3>{t('membership05')}</h3>
                <p>{t('membership06')}</p>
                <a className="btn btn-cream" href={MARKETPLACE_URL}>
                  {t('membership07')}
                </a>
              </article>
            </div>
            <div className="steps">
              <div>
                <b>{t('membership08')}</b>
                <strong>{t('membership09')}</strong>
                <small>{t('membership10')}</small>
              </div>
              <div>
                <b>{t('membership11')}</b>
                <strong>{t('membership12')}</strong>
                <small>{t('membership13')}</small>
              </div>
              <div>
                <b>{t('membership14')}</b>
                <strong>{t('membership15')}</strong>
                <small>{t('membership16')}</small>
              </div>
            </div>
            <CareerGuideLink locale={locale} />
            <p className="note">{t('membership17')}</p>
          </div>
        </section>
        <section className="section network" id="how">
          <div className="wrap">
            <div className="network-head">
              <span className="eyebrow">{t('how01')}</span>
              <h2>{t('how02')}</h2>
              <p className="lead" id="podzial-prowizji">
                {t('how03')}
              </p>
            </div>
            <div className="network-flow channels-topics" id="channels">
              <div className="node">
                <div className="node-symbol">{t('how04')}</div>
                <strong>{t('how05')}</strong>
                <p>{t('how06')}</p>
              </div>
              <div className="node middle">
                <div className="node-symbol">{t('how08')}</div>
                <strong>{t('how09')}</strong>
                <p>{t('how10')}</p>
              </div>
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
            <div style={{ marginTop: '29px' }}>
              <a className="btn-text" href={MARKETPLACE_URL}>
                {t('technology20')}
              </a>
            </div>
          </div>
        </section>
        <section className="section broker" id="about">
          <div className="wrap broker-layout">
            <div id="portfel-zagraniczny">
              <span className="eyebrow">{t('about01')}</span>
              <h2>{t('about02')}</h2>
              <p className="lead">{t('about03')}</p>
              <a className="btn-text" href={MARKETPLACE_URL}>
                {t('about04')}
              </a>
            </div>
            <img
              alt={t('about05')}
              loading="lazy"
              src="/img/collective/international.webp"
              width="900"
              height="600"
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
            <p className="lead" style={{ maxWidth: '820px' }}>
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
              <Link className="pill" href="/collective-rules">
                {t('main16')}
              </Link>
            </div>
          </div>
          <div className="wrap"></div>
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
              <details>
                <summary>{t('faq19')}</summary>
                <p>{t('faq20')}</p>
              </details>
              <details>
                <summary>{t('faq21')}</summary>
                <p>{t('faq22')}</p>
              </details>
              <details>
                <summary>{t('faq23')}</summary>
                <p>{t('faq24')}</p>
              </details>
              <details>
                <summary>{t('faq25')}</summary>
                <p>{t('faq26')}</p>
              </details>
            </div>
          </div>
        </section>
        <section className="v10-agents-teaser">
          <div className="wrap v10-agents-row">
            <div>
              <span className="eyebrow light">{t('main17')}</span>
              <h2>{t('main18')}</h2>
              <p>{t('main19')}</p>
            </div>
            <a className="btn btn-cream" href={MARKETPLACE_URL}>
              {t('main20')}
            </a>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} audience="agents" />
    </>
  );
}
