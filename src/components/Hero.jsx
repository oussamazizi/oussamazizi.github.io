import { identity, intro } from '../data/content.js';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero__meta">
          <span className="hero__slug">Portfolio</span>
          <span className="hero__dateline">
            {identity.region} — {new Date().getFullYear()}
          </span>
        </div>

        <hr className="rule--ink rule" />

        {/* Le titre : deux mots, pleine largeur, encre pleine */}
        <h1 className="hero__title">
          <span className="hero__line">Ingénieur</span>
          <span className="hero__line hero__line--accent">Logiciel</span>
        </h1>

        <div className="hero__body">
          <p className="hero__lede">{intro.lede}</p>

          <div className="hero__columns">
            {intro.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="hero__facts">
          {intro.facts.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a className="hero__scroll" href="#travaux" aria-label="Aller aux travaux">
        <span>Voir les trois produits</span>
        <svg viewBox="0 0 20 28" aria-hidden="true">
          <path d="M10 1v24m0 0 6-6m-6 6-6-6" />
        </svg>
      </a>
    </section>
  );
}
