export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=2000&q=85&auto=format&fit=crop"
          alt="Eleganto — footwear shaped by precision and timeless design"
          loading="eager"
        />
      </div>
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow eyebrow-light hero__eyebrow">
          The Art of Refined Motion
        </p>

        <h1 className="hero__headline">
          <span className="hero__headline-accent">
            WALK
          </span>
          <span>
            WITH
          </span>
          <span>
            INTENTION.
          </span>
        </h1>

        <p className="hero__sub">
          Footwear shaped by precision, restraint, and timeless design.
        </p>

        <div className="hero__actions">
          <a href="#collection" className="btn btn-primary">
            Explore the Collection
          </a>
          <a href="#philosophy" className="btn btn-ghost">
            Discover Eleganto
          </a>
        </div>
      </div>

      <a
        href="#brand-statement"
        className="hero__scroll"
        aria-label="Scroll to brand statement"
      >
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
