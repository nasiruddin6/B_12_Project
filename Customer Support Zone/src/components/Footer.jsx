import BrandIcon from './BrandIcon';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow footer__glow--left" aria-hidden="true" />
      <div className="footer__glow footer__glow--right" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__app">
          <p className="footer__app-name">Customer Support Zone</p>
          <nav className="footer__links" aria-label="Footer navigation">
            <a href="#tickets">Tickets</a>
            <a href="#task-status">Task Status</a>
            <a href="#resolved">Resolved</a>
          </nav>
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

export default Footer;
