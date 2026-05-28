export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src="/assets/logo.png" alt="" width={32} height={32} />
          <span>HERO.IO</span>
        </div>
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
      <div className="footer__divider" />
      <p className="footer__copy">Copyright © 2025 - All right reserved</p>
    </footer>
  );
}
