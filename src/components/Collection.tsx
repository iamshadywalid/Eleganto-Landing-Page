import { useEffect, useRef } from "react";

interface Product {
  id: string;
  name: string;
  descriptor: string;
  price: string;
  tag?: string;
  primary: string;
  secondary: string;
}

const products: Product[] = [
  {
    id: "milano",
    name: "MILANO",
    descriptor: "Hand-finished leather loafer",
    price: "$420",
    tag: "Bestseller",
    primary:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1595344426488-84c961c5e8cd?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "noir",
    name: "LE NOIR",
    descriptor: "Slim derby in polished calf",
    price: "$480",
    primary:
      "https://images.unsplash.com/photo-1543163521-1bf5a16a644c?w=800&q=80&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "atelier",
    name: "L'ATELIER",
    descriptor: "Wingtip with hand-welted sole",
    price: "$650",
    tag: "Limited",
    primary:
      "https://images.unsplash.com/photo-1560393464-5c69a54e7120?w=800&q=80&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "forma",
    name: "FORMA",
    descriptor: "Minimalist loafer in suede",
    price: "$380",
    primary:
      "https://images.unsplash.com/photo-1587017539504-67cfbff50214?w=800&q=80&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1543163521-1bf5a16a644c?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "executive",
    name: "EXECUTIVE",
    descriptor: "Oxford cap-toe with Goodyear welt",
    price: "$540",
    primary:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1595344426488-84c961c5e8cd?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "essential",
    name: "ESSENTIAL",
    descriptor: "Everyday derby in full-grain",
    price: "$440",
    primary:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1587017539504-67cfbff50214?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Collection() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = gridRef.current?.querySelectorAll(".product-card");
    targets?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section collection" ref={gridRef}>
      <div className="container">
        <div className="collection__header animate-on-scroll">
          <div className="collection__title-group">
            <p className="eyebrow section__eyebrow">Curated Selection</p>
            <h2 className="section__title collection__title">THE COLLECTION</h2>
            <p className="section__sub collection__sub">
              Selected forms. Distinct character.
            </p>
          </div>
        </div>

        <div className="product-grid stagger-children animate-on-scroll">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__media">
                <img
                  src={product.primary}
                  alt={`${product.name} by Eleganto`}
                  className="product-card__img"
                  loading="lazy"
                />
                <img
                  src={product.secondary}
                  alt={`${product.name} — alternate view`}
                  className="product-card__img img-secondary"
                  loading="lazy"
                />
                {product.tag && (
                  <span className="product-card__overlay">{product.tag}</span>
                )}
              </div>
              <div className="product-card__info">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.descriptor}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.price}</span>
                  <a
                    href={`#product-${product.id}`}
                    className="product-card__arrow"
                    aria-label={`View ${product.name} details`}
                  >
                    <span>View</span>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
