import { useEffect, useRef } from "react";

export default function Philosophy() {
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
      { threshold: 0.2 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section philosophy" ref={ref} id="philosophy">
      <div className="container">
        <div className="philosophy__grid">
          <div className="philosophy__text-col animate-on-scroll">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="philosophy__headline">
              LESS.<br />
              BUT BETTER.
            </h2>
            <p className="philosophy__text">
              Eleganto begins with a simple conviction: elegance is not accumulated,
              it is distilled. We design footwear that asks less of the eye and more
              of the hand. Every decision — material, proportion, stitch, silhouette —
              is made in service of permanence. Not fashion. Not trend. The kind of
              presence that does not need to announce itself.
            </p>
            <p className="philosophy__text" style={{ marginTop: "var(--space-6)" }}>
              We make fewer pairs, and make them carefully. The result is footwear
              that fits the foot, the occasion, and the years between.
            </p>
          </div>

          <div className="philosophy__image-col">
            <div className="philosophy__image">
              <img
                src="https://images.unsplash.com/photo-1587017539504-67cfbff50214?w=800&q=80&auto=format&fit=crop"
                alt="Eleganto — the discipline of silhouette"
                loading="lazy"
              />
              <div className="philosophy__caption">
                THE DISCIPLINE OF SILHOUETTE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
