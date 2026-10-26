/* V10.7 reference markup; editorial copy is maintained in next-intl. */
import { getTranslations } from 'next-intl/server';
import { MARKETPLACE_URL } from '@/lib/site';
import { ExtraFaq, ExtraSections } from './MarketingExtras';
import MarketingHeader from './MarketingHeader';
import MarketingFooter from './MarketingFooter';

export default async function SellersContent({ locale }: { locale: string }) {
  const t = await getTranslations('marketing.sellers');
  return (
    <>
      <a className="skip" href="#main">
        {t('copy01')}
      </a>
      <MarketingHeader audience="sellers" labels={t.raw('header')} />
      <main id="main">
        <section className="hero v106-seller" id="top">
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
              <a
                className="btn btn-cream"
                href="mailto:contact@vesteri.com?subject=Property%20sale"
              >
                {t('top06')}
              </a>
              <a className="btn btn-outline" href="#how-it-works">
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
        <section className="seller-section" id="how-it-works">
          <div className="wrap seller-intro-grid">
            <div>
              <span className="seller-kicker">{t('how-it-works01')}</span>
              <h2 className="seller-title">{t('how-it-works02')}</h2>
              <p className="seller-lead">{t('how-it-works03')}</p>
            </div>
            <div className="seller-signature">
              <span className="over">{t('how-it-works04')}</span>
              <div className="big">{t('how-it-works05')}</div>
              <span className="under">{t('how-it-works06')}</span>
            </div>
          </div>
        </section>
        <section className="seller-section alt" id="benefits">
          <div className="wrap">
            <span className="seller-kicker">{t('benefits01')}</span>
            <h2 className="seller-title">{t('benefits02')}</h2>
            <div className="seller-benefits">
              <article>
                <b>{t('benefits03')}</b>
                <h3>{t('benefits04')}</h3>
                <p>{t('benefits05')}</p>
              </article>
              <article>
                <b>{t('benefits06')}</b>
                <h3>{t('benefits07')}</h3>
                <p>{t('benefits08')}</p>
              </article>
              <article>
                <b>{t('benefits09')}</b>
                <h3>{t('benefits10')}</h3>
                <p>{t('benefits11')}</p>
              </article>
            </div>
          </div>
        </section>
        <section className="seller-section" id="choose">
          <div className="wrap">
            <span className="seller-kicker">{t('choose01')}</span>
            <h2 className="seller-title">{t('choose02')}</h2>
            <p className="seller-lead">{t('choose03')}</p>
            <div className="seller-steps">
              <div className="seller-step">
                <span>{t('choose04')}</span>
                <h3>{t('choose05')}</h3>
                <p>{t('choose06')}</p>
              </div>
              <div className="seller-step">
                <span>{t('choose07')}</span>
                <h3>{t('choose08')}</h3>
                <p>{t('choose09')}</p>
              </div>
              <div className="seller-step">
                <span>{t('choose10')}</span>
                <h3>{t('choose11')}</h3>
                <p>{t('choose12')}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="seller-section dark" id="promotion">
          <div className="wrap">
            <span className="seller-kicker">{t('promotion01')}</span>
            <h2 className="seller-title">{t('promotion02')}</h2>
            <p className="seller-lead">{t('promotion03')}</p>
            <div className="seller-tools">
              <article className="seller-tool">
                <div className="symbol">{t('promotion04')}</div>
                <h3>{t('promotion05')}</h3>
                <p>{t('promotion06')}</p>
              </article>
              <article className="seller-tool">
                <div className="symbol">{t('promotion07')}</div>
                <h3>{t('promotion08')}</h3>
                <p>{t('promotion09')}</p>
              </article>
              <article className="seller-tool">
                <div className="symbol">{t('promotion10')}</div>
                <h3>{t('promotion11')}</h3>
                <p>{t('promotion12')}</p>
              </article>
            </div>
          </div>
        </section>
        <section className="seller-section alt" id="terms">
          <div className="wrap seller-agreement">
            <div>
              <span className="seller-kicker">{t('terms01')}</span>
              <h2 className="seller-title">{t('terms02')}</h2>
              <p className="seller-lead">{t('terms03')}</p>
            </div>
            <ul className="seller-points">
              <li>{t('terms04')}</li>
              <li>{t('terms05')}</li>
              <li>{t('terms06')}</li>
            </ul>
          </div>
        </section>
        <ExtraSections locale={locale} audience="sellers" />
        <section
          aria-labelledby="sellerFaqTitle"
          className="section faq seller-faq"
          id="faq"
        >
          <div className="wrap">
            <div className="faq-intro">
              <span className="eyebrow">{t('faq01')}</span>
              <h2 id="sellerFaqTitle">{t('sellerFaqTitle01')}</h2>
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
              <ExtraFaq locale={locale} audience="sellers" />
            </div>
          </div>
        </section>
        <section className="seller-cta">
          <div className="wrap">
            <span className="seller-kicker">{t('main01')}</span>
            <h2 className="seller-title">{t('main02')}</h2>
            <p>{t('main03')}</p>
            <div className="buttons">
              <a
                className="btn btn-cream"
                href="mailto:contact@vesteri.com?subject=Property%20sale"
              >
                {t('main04')}
              </a>
              <a className="btn btn-outline" href={MARKETPLACE_URL}>
                {t('main05')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} audience="sellers" />
    </>
  );
}
