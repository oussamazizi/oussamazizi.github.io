import { identity } from '../data/content.js';
import { useReveal } from '../hooks.js';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="contact" id="contact">
      <div className="shell">
        <div ref={ref} className="reveal">
          <p className="label label--invert">04 — Contact</p>

          <h2 className="contact__title">
            Parlons de
            <br />
            <span className="contact__accent">votre projet.</span>
          </h2>

          <p className="contact__note">
            Poste, mission ou collaboration — j’écris à tout le monde en retour.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__key">E-mail</span>
              <a className="contact__value" href={`mailto:${identity.email}`}>
                {identity.email}
              </a>
            </li>
            <li>
              <span className="contact__key">Téléphone</span>
              <a className="contact__value" href={`tel:${identity.phoneHref}`}>
                {identity.phone}
              </a>
            </li>
            <li>
              <span className="contact__key">Localisation</span>
              <span className="contact__value contact__value--plain">
                {identity.location}
              </span>
            </li>
            <li>
              <span className="contact__key">Curriculum</span>
              <a className="contact__value" href={identity.cv} download>
                Télécharger le PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
