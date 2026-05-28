import { Link } from 'react-router-dom';
import BrandIcon from './BrandIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow footer__glow--left" aria-hidden="true" />
      <div className="footer__glow footer__glow--right" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__top">
          <Link to="/" className="footer__brand">
            <img src="/assets/logo.png" alt="" width={32} height={32} />
            <span>HERO.IO</span>
          </Link>
          <div className="footer__social">
            <p>Social Links</p>
            <div className="footer__icons">
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                𝕏
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                f
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__branding">
          <div className="footer__brand-row">
            <div className="footer__name-block">
              <span className="footer__name-script">Nasir</span>
              <span className="footer__name-rule" aria-hidden="true" />
              <span className="footer__name-sans">UDDIN</span>
            </div>
            <BrandIcon className="footer__brand-icon" />
          </div>
          <p className="footer__brand-tagline">
            &copy; {year} | Crafted with Passion &amp; Code
          </p>
        </div>
      </div>
    </footer>
  );
}
