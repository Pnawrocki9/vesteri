/* V10.7 reference markup; editorial copy is maintained in next-intl. */
/* eslint-disable @next/next/no-img-element */
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  CHANNELS_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  DEMO_URL,
  MARKETPLACE_URL,
} from '@/lib/site';
import { CareerGuideLink, CommissionGuidance } from './MarketingExtras';
import MarketingHeader from './MarketingHeader';
import MarketingFooter from './MarketingFooter';
import ShowreelVideo from './ShowreelVideo';
import './agency.css';

type Titled = { title: string; text: string };
type ShareStep = { pct: string; label: string };
type ShareTile = { label: string; value: string; sub: string };
type WayRow = { label: string; agent: string; collective: string };

const Check = () => (
  <svg
    aria-hidden="true"
    className="ag-check"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
const Dash = () => (
  <svg
    aria-hidden="true"
    className="ag-dash"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path d="M6 12h12" />
  </svg>
);
const two = (n: number) => String(n).padStart(2, '0');
// Visible FAQ: question = faqNN, answer = faqNN+1. Keep in step with
// FAQ_RANGE in MarketingPage, which builds the FAQ JSON-LD from the same keys.
const FAQ_KEYS = Array.from({ length: 15 }, (_, i) => 3 + i * 2);

export default async function AgentsContent({ locale }: { locale: string }) {
  const t = await getTranslations('marketing.agents');
  const filmLocale = locale === 'pl' ? 'pl' : 'en';
  const shareSteps = t.raw('share.steps') as ShareStep[];
  const shareTiles = t.raw('share.tiles') as ShareTile[];
  const gains = t.raw('gains.items') as Titled[];
  const solo = t.raw('versus.solo') as string[];
  const withVesteri = t.raw('versus.vesteri') as string[];
  const wayRows = t.raw('ways.rows') as WayRow[];
  const collectivePoints = t.raw('collective.points') as string[];
  const collectiveSteps = t.raw('collective.steps') as Titled[];
  const joinSteps = t.raw('join.steps') as Titled[];
  // Table cells hold either copy or one of three marks.
  const wayCell = (value: string) =>
    value === 'yes' ? (
      <span className="ag-mark ag-mark-yes">
        <Check />
        {t('ways.yes')}
      </span>
    ) : value === 'no' || value === 'none' ? (
      <span className="ag-mark ag-mark-no">
        <Dash />
        {value === 'no' ? t('ways.no') : t('ways.none')}
      </span>
    ) : (
      value
    );
  return (
    <>
      <a className="skip" href="#main">
        {t('copy01')}
      </a>
      <MarketingHeader audience="agents" labels={t.raw('header')} />
      <main id="main">
        <section className="hero v10-agent-hero" id="top">
          <div
            aria-label={t('hero.pictureAlt')}
            className="hero-picture"
            role="img"
          ></div>
          <div className="wrap hero-inner">
            <span className="eyebrow light">{t('hero.eyebrow')}</span>
            <h1>
              {t('hero.title1')}
              <br />
              <em>{t('hero.title2')}</em>
            </h1>
            <p className="hero-desc">{t('hero.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-cream" href={DEMO_URL}>
                {t('hero.ctaDemo')}
              </a>
              <a className="btn btn-outline" href="#film-player">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                >
                  <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
                </svg>
                {t('heroWatch')}
              </a>
              <Link className="btn btn-outline" href="/calculator">
                {t('hero.ctaCalc')}
              </Link>
            </div>
            <div className="hero-foot">
              <span>{t('hero.foot1')}</span>
              <span>{t('hero.foot2')}</span>
              <span>{t('hero.foot3')}</span>
            </div>
          </div>
        </section>
        <section className="film" id="film" aria-labelledby="film-title">
          <div className="wrap film-head">
            <span className="eyebrow light">{t('filmEyebrow')}</span>
            <h2 id="film-title">{t('filmTitle')}</h2>
            <p className="lead">{t('filmIntro')}</p>
          </div>
          {/* The Polish page plays the lektor cut and the English one the
              voiceover cut; each has its own end-card poster. */}
          <ShowreelVideo
            id="film-player"
            src={`/video/vesteri-showreel-${filmLocale}.mp4`}
            poster={`/video/vesteri-showreel-poster-${filmLocale}.jpg`}
            labels={{
              play: t('videoPlay'),
              pause: t('videoPause'),
              replay: t('videoReplay'),
              soundOn: t('videoSoundOn'),
              soundOff: t('videoSoundOff'),
              seek: t('videoSeek'),
              fullscreen: t('videoFullscreen'),
            }}
          />
          <div className="wrap film-actions">
            <a className="btn btn-cream" href={DEMO_URL}>
              {t('filmCta')}
            </a>
            <a className="film-link" href="#dwie-drogi">
              {t('filmLink')}
            </a>
          </div>
        </section>
        <section className="section ag-share" id="udzial">
          <div className="wrap">
            <div className="ag-share-head">
              <div>
                <span className="eyebrow">{t('share.eyebrow')}</span>
                <h2>{t('share.title')}</h2>
                <p className="lead">{t('share.text')}</p>
              </div>
              <div
                className="ag-ladder"
                role="img"
                aria-label={t('share.ladderLabel')}
              >
                {shareSteps.map(({ pct, label }, i) => (
                  <div key={pct} className={`ag-ladder-step ag-ladder-${i}`}>
                    <strong>{pct}</strong>
                    <i></i>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ag-tiles">
              {shareTiles.map(({ label, value, sub }, i) => (
                <div
                  key={label}
                  className={i === shareTiles.length - 1 ? 'ag-tile strong' : 'ag-tile'}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>{sub}</small>
                </div>
              ))}
            </div>
            <p className="ag-note">{t('share.note')}</p>
          </div>
        </section>
        <section className="section ag-gains" id="zaplecze">
          <div className="wrap">
            <span className="eyebrow">{t('gains.eyebrow')}</span>
            <h2>{t('gains.title')}</h2>
            <div className="ag-cards">
              {gains.map(({ title, text }, i) => (
                <article key={title}>
                  <b>{two(i + 1)}</b>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
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
            <aside
              className="live-visibility"
              id="go-live"
              aria-labelledby="live-visibility-title"
            >
              <span className="eyebrow">{t('visibilityEyebrow')}</span>
              <h3 id="live-visibility-title">{t('visibilityTitle')}</h3>
              <p className="live-visibility-promise">{t('visibilityIntro')}</p>
              <p className="live-contribution">{t('visibilityContribution')}</p>
              <p className="ag-live-share">{t('visibilityShare')}</p>
              <p className="live-order-label">
                <strong>{t('visibilityOrder')}</strong>
              </p>
              <ol>
                <li>
                  <strong>{t('visibilityNowTitle')}</strong>
                  <p>{t('visibilityNow')}</p>
                </li>
                <li>
                  <strong>{t('visibilityScheduledTitle')}</strong>
                  <p>{t('visibilityScheduled')}</p>
                </li>
                <li>
                  <strong>{t('visibilityOtherTitle')}</strong>
                  <p>{t('visibilityOther')}</p>
                </li>
              </ol>
            </aside>
            <div style={{ marginTop: '29px' }}>
              <a className="btn-text" href={MARKETPLACE_URL}>
                {t('technology20')}
              </a>
            </div>
          </div>
        </section>
        <section className="section ag-versus" id="porownanie">
          <div className="wrap ag-versus-layout">
            <div>
              <span className="eyebrow">{t('versus.eyebrow')}</span>
              <h2>{t('versus.title')}</h2>
              <p className="lead">{t('versus.text')}</p>
              <Link className="btn btn-primary" href="/calculator">
                {t('versus.cta')}
              </Link>
            </div>
            <div className="ag-versus-cards">
              <article>
                <h3>{t('versus.soloTitle')}</h3>
                <ul className="ag-checks">
                  {solo.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="strong">
                <h3>{t('versus.vesteriTitle')}</h3>
                <ul className="ag-checks">
                  {withVesteri.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="section ag-team" id="model-3-1">
          <div className="wrap">
            <div className="ag-team-layout">
              <div>
                <span className="eyebrow light">{t('team.eyebrow')}</span>
                <h2>{t('team.title')}</h2>
                <p className="lead">{t('team.text1')}</p>
                <p className="lead">{t('team.text2')}</p>
              </div>
              <div className="ag-levels">
                <article>
                  <div>
                    <strong>{t('team.level1Pct')}</strong>
                    <span>{t('team.level1Name')}</span>
                  </div>
                  <p>{t('team.level1Text')}</p>
                </article>
                <article>
                  <div>
                    <strong>{t('team.level2Pct')}</strong>
                    <span>{t('team.level2Name')}</span>
                  </div>
                  <p>{t('team.level2Text')}</p>
                </article>
              </div>
            </div>
            <p className="ag-team-example">{t('team.example')}</p>
            <p className="ag-team-basis">{t('team.basis')}</p>
          </div>
        </section>
        <section className="section ag-ways" id="dwie-drogi">
          <div className="wrap">
            <span className="eyebrow">{t('ways.eyebrow')}</span>
            <h2>{t('ways.title')}</h2>
            <p className="lead">{t('ways.intro')}</p>
            <div className="ag-table-scroll">
              <table>
                <caption className="ag-sr">{t('ways.caption')}</caption>
                <thead>
                  <tr>
                    <td></td>
                    <th scope="col" className="ag-col-agent">
                      {t('ways.colAgent')}
                    </th>
                    <th scope="col">{t('ways.colCollective')}</th>
                  </tr>
                </thead>
                <tbody>
                  {wayRows.map(({ label, agent, collective }) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td className="ag-col-agent">{wayCell(agent)}</td>
                      <td>{wayCell(collective)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ag-actions">
              <a className="btn btn-primary" href={DEMO_URL}>
                {t('ways.ctaDemo')}
              </a>
              <a className="btn ag-btn-line" href={MARKETPLACE_URL}>
                {t('ways.ctaJoin')}
              </a>
            </div>
          </div>
        </section>
        <section className="section membership ag-collective" id="collective">
          <div className="wrap">
            <div className="ag-collective-layout" id="membership">
              <div>
                <span className="eyebrow">{t('collective.eyebrow')}</span>
                <h2>{t('collective.title')}</h2>
                <p className="lead">{t('collective.text')}</p>
                <div className="ag-links">
                  <a className="btn-text" href={MARKETPLACE_URL}>
                    {t('collective.join')}
                  </a>
                  <Link className="btn-text" href="/how-it-works">
                    {t('membershipHowItWorks')}
                  </Link>
                </div>
              </div>
              <aside>
                <span className="eyebrow">{t('collective.summaryTitle')}</span>
                <ul className="ag-checks">
                  {collectivePoints.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
            <div className="steps">
              {collectiveSteps.map(({ title, text }, i) => (
                <div key={title}>
                  <b>{two(i + 1)}</b>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              ))}
            </div>
            <CareerGuideLink locale={locale} />
            <p className="note">{t('collective.note')}</p>
          </div>
        </section>
        <section className="section network" id="how">
          <div className="wrap">
            <div className="network-head">
              <span className="eyebrow">{t('how01')}</span>
              <h2>{t('how02')}</h2>
              <p className="lead">{t('how03')}</p>
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
            <CommissionGuidance locale={locale === 'pl' ? 'pl' : 'en'} />
          </div>
        </section>
        <section className="section broker" id="about">
          <div className="wrap broker-layout">
            <div id="portfel-zagraniczny">
              <span className="eyebrow">{t('about01')}</span>
              <h2>{t('about02')}</h2>
              <p className="lead">
                {t.rich('about03', {
                  channels: (chunks) => (
                    <a
                      className="channels-inline-link"
                      href={CHANNELS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
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
        <section className="section ag-join" id="jak-dolaczyc">
          <div className="wrap">
            <span className="eyebrow">{t('join.eyebrow')}</span>
            <h2>{t('join.title')}</h2>
            <div className="steps">
              {joinSteps.map(({ title, text }, i) => (
                <div key={title}>
                  <b>{two(i + 1)}</b>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              ))}
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
              {FAQ_KEYS.map((n) => (
                <details key={n}>
                  <summary>{t(`faq${two(n)}`)}</summary>
                  <p>{t(`faq${two(n + 1)}`)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="v10-agents-teaser ag-cta">
          <div className="wrap">
            <h2>
              {t('cta.title1')} <em>{t('cta.title2')}</em>
            </h2>
            <div className="collective-actions">
              <a className="btn btn-cream" href={`tel:${CONTACT_PHONE_TEL}`}>
                {t('cta.call')} {CONTACT_PHONE_DISPLAY}
              </a>
              <Link className="btn btn-outline" href="/calculator">
                {t('cta.calc')}
              </Link>
              <a className="btn btn-outline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <p className="ag-cta-note">{t('cta.note')}</p>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} audience="agents" />
    </>
  );
}
