import { useEffect, useRef } from "react";

const principles = [
  {
    number: "01",
    title: "MATERIAL",
    desc: "Only materials selected for character, durability, and touch. Leather that ages with intention, not against it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "FORM",
    desc: "Every silhouette is refined until proportion becomes effortless. Nothing extra. Nothing missing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "DETAIL",
    desc: "Precision lives in the details most people never notice. That is by design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "TIME",
    desc: "Made slowly. Designed to remain. Footwear that outlasts the moment it was made for.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
];

export default function Craftsmanship() {
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
      { threshold: 0.2 }
    );
    const targets = gridRef.current?.querySelectorAll(".principle");
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section--dark craftsmanship" ref={gridRef}>
      <div className="container">
        <div className="craftsmanship__header animate-on-scroll">
          <p className="eyebrow">The House Standard</p>
          <h2 className="section__title craftsmanship__title">
            CRAFTED WITH INTENT.
          </h2>
          <p className="craftsmanship__sub">Four principles. One standard.</p>
        </div>

        <div className="craftsmanship__grid stagger-children animate-on-scroll">
          {principles.map((p) => (
            <div key={p.number} className="principle">
              <p className="principle__number">{p.number} — {p.title}</p>
              <div className="principle__icon">{p.icon}</div>
              <h3 className="principle__title">{p.title}</h3>
              <p className="principle__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
