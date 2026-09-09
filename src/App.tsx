import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import Collection from "./components/Collection";
import Craftsmanship from "./components/Craftsmanship";
import Cinematic from "./components/Cinematic";
import Philosophy from "./components/Philosophy";
import Journal from "./components/Journal";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen((v) => !v);

  return (
    <>
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onMenuToggle={handleMenuToggle}
      />
      <main>
        <Hero />
        <BrandStatement />
        <Collection />
        <Craftsmanship />
        <Cinematic />
        <Philosophy />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
