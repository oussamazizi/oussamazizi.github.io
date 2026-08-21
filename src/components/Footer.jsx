import { identity } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="site-footer__name">{identity.name}</p>
        <p className="site-footer__meta">
          © {new Date().getFullYear()} — Conçu et développé avec React et Vite.
        </p>
        <a className="site-footer__top" href="#top">
          Haut de page
          <svg viewBox="0 0 14 14" aria-hidden="true">
            <path d="M7 12V2m0 0L2.5 6.5M7 2l4.5 4.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
