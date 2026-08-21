import { toolkit } from '../data/content.js';
import { useReveal } from '../hooks.js';
import './Toolkit.css';

function Column({ group, i }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="tool reveal" style={{ '--d': i }}>
      <header className="tool__head">
        <span className="tool__num">{group.n}</span>
        <h3 className="tool__title">{group.title}</h3>
      </header>
      <ul className="tool__items">
        {group.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Toolkit() {
  const headRef = useReveal();

  return (
    <section className="section" id="outils">
      <div className="shell">
        <header ref={headRef} className="section__head reveal">
          <p className="label">03 — Outils</p>
          <h2 className="h-section">Ce avec quoi je travaille</h2>
          <p className="section__note">
            Une constante depuis sept ans : aller du besoin jusqu’à la mise en
            production, sans s’arrêter à la frontière d’une couche.
          </p>
        </header>

        <div className="tools">
          {toolkit.map((g, i) => (
            <Column key={g.n} group={g} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
