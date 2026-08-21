import { education, experience } from '../data/content.js';
import { useReveal } from '../hooks.js';
import './Experience.css';

function Row({ job, i }) {
  const ref = useReveal();

  return (
    <li ref={ref} className="reveal" style={{ '--d': i }}>
      <article className={`job${job.current ? ' job--current' : ''}`}>
        <div className="job__period">
          {job.current && <span className="job__now">En poste</span>}
          <time>{job.period}</time>
        </div>

        <div className="job__main">
          <h3 className="job__role">
            {job.role}
            {job.note && <span className="job__note">{job.note}</span>}
          </h3>
          <p className="job__company">
            {job.company}
            <span className="job__city">{job.city}</span>
          </p>
        </div>

        <ul className="stack-list job__stack">
          {job.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default function Experience() {
  const headRef = useReveal();
  const eduRef = useReveal();

  return (
    <section className="section section--tinted" id="parcours">
      <div className="shell">
        <header ref={headRef} className="section__head reveal">
          <p className="label">02 — Parcours</p>
          <h2 className="h-section">Expérience
            <br />
            en entreprise</h2>
          <p className="section__note">
            Mes postes salariés et les technologies que j’y ai pratiquées. Sans
            détail des projets internes, qui appartiennent à ces entreprises.
          </p>
        </header>

        <ol className="jobs">
          {experience.map((job, i) => (
            <Row key={job.company} job={job} i={i} />
          ))}
        </ol>

        <div ref={eduRef} className="education reveal">
          <p className="label">Formation</p>
          <div className="education__grid">
            {education.map((e) => (
              <div key={e.school} className="education__item">
                <p className="education__period">{e.period}</p>
                <p className="education__degree">{e.degree}</p>
                <p className="education__school">{e.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
