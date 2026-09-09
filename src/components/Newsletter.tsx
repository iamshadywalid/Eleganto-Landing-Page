import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("That email address does not look right.");
      return;
    }

    // Demo: simulate submission — no backend
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <section className="newsletter">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--black-40)" }}>
            You are on the list
          </p>
          <h2 className="section__title newsletter__title" style={{ color: "var(--ink)" }}>
            Welcome to the house.
          </h2>
          <p className="newsletter__text" style={{ margin: "0 auto var(--space-12)" }}>
            Expect new collections, private releases, and stories from Eleganto —
            delivered with restraint.
          </p>
          <button
            className="btn btn-ghost-dark"
            onClick={() => setSubmitted(false)}
            style={{ margin: "0 auto" }}
          >
            Subscribe another address
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section--dark newsletter">
      <div className="container">
        <div className="animate-on-scroll">
          <p className="eyebrow eyebrow-light">The Eleganto Dispatch</p>
          <h2 className="section__title newsletter__title">
            ENTER THE WORLD OF ELEGANTO.
          </h2>
          <p className="newsletter__text">
            Receive new collections, private releases, and stories from the house.
          </p>

          <form
            className="newsletter__form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Newsletter subscription"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              className="newsletter__input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              autoComplete="email"
              required
            />
            <button type="submit" className="newsletter__btn">
              Join the House
            </button>
          </form>

          {error && <p className="newsletter__error" role="alert">{error}</p>}
          <p className="newsletter__privacy">
            By subscribing you agree to receive email from Eleganto. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
