import { useEffect, useRef } from "react";

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  onMenuToggle: () => void;
}

export default function Navbar({ scrolled, menuOpen, onMenuToggle }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll", "is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = navRef.current?.querySelectorAll(".nav-link");
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}
        aria-label="Primary"
      >
        <div className="container navbar__inner">
          <a href="/" className="navbar__logo" aria-label="Eleganto">
            ELEGANTO
          </a>

          <ul className="navbar__links" role="list">
            <li>
              <a href="#collection" className="nav-link">
                Collection
              </a>
            </li>
            <li>
              <a href="#craftsmanship" className="nav-link">
                Craftsmanship
              </a>
            </li>
            <li>
              <a href="#philosophy" className="nav-link">
                Philosophy
              </a>
            </li>
            <li>
              <a href="#journal" className="nav-link">
                Journal
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className="nav-icon-btn"
              aria-label="Search"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button
              className="nav-icon-btn"
              aria-label="Open bag"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
            <button
              className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
              onClick={onMenuToggle}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              type="button"
            >
              <span className="hamburger__line" />
              <span className="hamburger__line" />
              <span className="hamburger__line" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <a
          href="#collection"
          className="mobile-menu__link"
          onClick={onMenuToggle}
        >
          Collection
        </a>
        <a
          href="#craftsmanship"
          className="mobile-menu__link"
          onClick={onMenuToggle}
        >
          Craftsmanship
        </a>
        <a
          href="#philosophy"
          className="mobile-menu__link"
          onClick={onMenuToggle}
        >
          Philosophy
        </a>
        <a
          href="#journal"
          className="mobile-menu__link"
          onClick={onMenuToggle}
        >
          Journal
        </a>
      </div>
    </>
  );
}
