import { useEffect, useState } from 'react';
import { identity, nav } from '../data/content.js';
import { useScrollSpy, useScrolled } from '../hooks.js';
import './Header.css';

const ids = nav.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);
  const scrolled = useScrolled();

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-stuck' : ''}`}>
      <div className="shell site-header__inner">
        <a className="masthead" href="#top" onClick={() => setOpen(false)}>
          <span className="masthead__initials">{identity.initials}</span>
          <span className="masthead__name">{identity.name}</span>
        </a>

        <nav
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Navigation principale"
        >
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-current' : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="site-nav__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="cv-link" href={identity.cv} download>
            CV
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 2v9m0 0 3.2-3.2M8 11 4.8 7.8M2.5 13h11" />
            </svg>
          </a>

          <button
            type="button"
            className="burger"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
