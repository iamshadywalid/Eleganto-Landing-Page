export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <a href="/" className="footer__logo" aria-label="Eleganto home">
              ELEGANTO
            </a>
            <p className="footer__tagline">
              Footwear shaped by precision, restraint, and timeless design.
              <br />
              Elegance is not worn. It is embodied.
            </p>
            <div className="footer__social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Eleganto on Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Eleganto on Pinterest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.13-5.37 1.13-5.37s-.29-.59-.29-1.49c0-1.38.85-2.43 1.91-2.43.9 0 1.34.69 1.34 1.52 0 .94-.58 2.34-.87 3.64-.25 1.09.53 1.98 1.56 1.98 1.85 0 3.27-1.89 3.27-4.59 0-2.31-1.44-4.1-3.57-4.1-2.04 0-3.47 1.43-3.47 3.12 0 .82.31 1.47.75 1.97.08.08.13.18.11.31-.07.32-.24 1.03-.28 1.17-.05.19-.15.23-.34.15-1.07-.51-1.84-2.13-1.84-3.43 0-2.83 2.03-5.44 5.94-5.44 3.18 0 5.54 2.23 5.54 5.1 0 3.21-1.97 5.78-4.75 5.78-1.1 0-2.11-.54-2.43-1.16l-.66 2.53c-.24.94-.88 2.04-1.31 2.72.94.37 1.97.58 3.04.58 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Eleganto on TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 100 8 4 4 0 000-8z"/>
                  <path d="M10 21a8 8 0 008-8v-1a6 6 0 00-6-6h-2a4 4 0 00-4 4v1h-4v2h4v7h2a6 6 0 006-6v-2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Explore</h4>
            <ul className="footer__links">
              <li><a href="#collection" className="footer__link">Collection</a></li>
              <li><a href="#craftsmanship" className="footer__link">Craftsmanship</a></li>
              <li><a href="#philosophy" className="footer__link">Philosophy</a></li>
              <li><a href="#journal" className="footer__link">Journal</a></li>
              <li><a href="#contact" className="footer__link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Policies</h4>
            <ul className="footer__links">
              <li><a href="#privacy" className="footer__link">Privacy</a></li>
              <li><a href="#terms" className="footer__link">Terms</a></li>
              <li><a href="#shipping" className="footer__link">Shipping</a></li>
              <li><a href="#returns" className="footer__link">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">About</h4>
            <ul className="footer__links">
              <li><a href="#about" className="footer__link">The House</a></li>
              <li><a href="#craftsmanship" className="footer__link">Craft</a></li>
              <li><a href="#contact" className="footer__link">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 ELEGANTO. ALL RIGHTS RESERVED.
          </p>
          <div className="footer__legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#shipping">Shipping</a>
            <a href="#returns">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
