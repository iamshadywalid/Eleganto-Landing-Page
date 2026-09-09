import { useEffect, useRef } from "react";

const articles = [
  {
    category: "Materials",
    title: "The Language of Leather",
    excerpt:
      "How grain, temper, and finish shape the character of a pair — and why the best leather improves with use.",
    media:
      "https://images.unsplash.com/photo-1595344426488-84c961c5e8cd?w=600&q=80&auto=format&fit=crop",
  },
  {
    category: "Design",
    title: "Why Silhouette Matters",
    excerpt:
      "The outline of a shoe is its quietest argument. A study in proportion, restraint, and the geometry of ease.",
    media:
      "https://images.unsplash.com/photo-1543163521-1bf5a16a644c?w=600&q=80&auto=format&fit=crop",
  },
  {
    category: "Craft",
    title: "The Quiet Power of Black",
    excerpt:
      "Black is not an absence. It is a surface that reflects discipline, depth, and the decision to let form speak.",
    media:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Journal() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const targets = gridRef.current?.querySelectorAll(".journal-card");
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section journal" ref={gridRef}>
      <div className="container">
        <div className="journal__header animate-on-scroll">
          <p className="eyebrow">From the House</p>
          <h2 className="section__title journal__title">JOURNAL</h2>
        </div>

        <div className="journal__grid stagger-children animate-on-scroll">
          {articles.map((article, i) => (
            <article key={i} className="journal-card">
              <div className="journal-card__media">
                <img
                  src={article.media}
                  alt={`${article.title} — Eleganto Journal`}
                  loading="lazy"
                />
              </div>
              <div className="journal-card__content">
                <p className="journal-card__category">{article.category}</p>
                <h3 className="journal-card__title">{article.title}</h3>
                <p className="journal-card__excerpt">{article.excerpt}</p>
                <a href={`#article-${i}`} className="journal-card__link">
                  <span>Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
