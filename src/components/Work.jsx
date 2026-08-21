import { projects } from '../data/content.js';
import { useReveal } from '../hooks.js';
import { EmbliaVisual, GlanceHudVisual, KarneoVisual } from './Visuals.jsx';
import './Work.css';

const visuals = {
  emblia: EmbliaVisual,
  karneo: KarneoVisual,
  glancehud: GlanceHudVisual,
};

function Spread({ project, flipped }) {
  const ref = useReveal();
  const Visual = visuals[project.id];

  return (
    <article
      ref={ref}
      className={`spread reveal${flipped ? ' spread--flipped' : ''}`}
      id={project.id}
    >
      {/* --- manchette du projet --- */}
      <header className="spread__head">
        <span className="spread__index">{project.index}</span>
        <h3 className="spread__name">{project.name}</h3>
        <span className="spread__status">
          <i
            className={`spread__pip${project.live ? ' spread__pip--live' : ''}`}
            aria-hidden="true"
          />
          {project.status}
        </span>
      </header>

      <hr className="rule--ink rule" />

      <div className="spread__grid">
        {/* --- colonne texte --- */}
        <div className="spread__text">
          <p className="spread__tagline">{project.tagline}</p>
          <p className="spread__lede">{project.lede}</p>

          {project.body.map((p, i) => (
            <p key={i} className="spread__para">
              {p}
            </p>
          ))}

          <ul className="spread__features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        {/* --- colonne visuel + fiche --- */}
        <div className="spread__aside">
          <figure className="spread__figure">
            <Visual />
          </figure>

          <dl className="spread__specs">
            <div>
              <dt>Rôle</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Année</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Disponible sur</dt>
              <dd>
                {project.href ? (
                  <a
                    className="arrow-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.hrefLabel}
                    <svg viewBox="0 0 14 14" aria-hidden="true">
                      <path d="M3 11 11 3m0 0H4.5M11 3v6.5" />
                    </svg>
                  </a>
                ) : (
                  project.hrefLabel
                )}
              </dd>
            </div>
          </dl>

          <div className="spread__stack">
            <p className="spread__stack-label">Construit avec</p>
            <ul className="stack-list">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const headRef = useReveal();

  return (
    <section className="section work" id="travaux">
      <div className="shell">
        <header ref={headRef} className="section__head reveal">
          <p className="label">01 — Projets personnels</p>
          <h2 className="h-section">
            Trois produits
            <br />
            à moi, publics.
          </h2>
          <p className="section__note">
            Mes projets personnels, menés en dehors du travail : conçus,
            développés et exploités seul, de la première ligne de code jusqu’aux
            utilisateurs. Mon travail en entreprise ne figure pas ici.
          </p>
        </header>

        {projects.map((p, i) => (
          <Spread key={p.id} project={p} flipped={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
