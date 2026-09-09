import { useEffect, useRef } from "react";

const values = [
  "Precision",
  "Craftsmanship",
  "Materials",
  "Silhouette",
  "Timelessness",
];

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);

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
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="brand-statement" ref={ref}>
      <div className="container">
        <div className="brand-statement__content animate-on-scroll">
          <p className="eyebrow">The Eleganto Ethos</p>
          <h2 className="brand-statement__headline">
            Elegance has no need for excess.
          </h2>
          <p className="brand-statement__text">
            Eleganto exists at the intersection of restraint and rigor. Every pair
            is shaped by precision, built from materials chosen for their character,
            and refined until the silhouette feels inevitable. We do not follow
            seasons — we follow proportion, touch, and time.
          </p>

          <div className="brand-statement__values">
            {values.map((v) => (
              <div key={v} className="value-item">{v}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
