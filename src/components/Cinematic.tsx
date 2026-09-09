import { useEffect, useRef } from "react";

export default function Cinematic() {
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
    <section className="cinematic" ref={ref}>
      <div className="cinematic__media">
        <img
          src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=2000&q=80&auto=format&fit=crop"
          alt="Eleganto footwear — craft and silhouette"
          loading="lazy"
        />
      </div>
      <div className="cinematic__overlay" />
      <div className="cinematic__content animate-on-scroll">
        <p className="eyebrow eyebrow-light">The Eleganto Standard</p>
        <h2 className="cinematic__text">
          MADE TO OUTLAST<br />THE MOMENT.
        </h2>
      </div>
    </section>
  );
}
