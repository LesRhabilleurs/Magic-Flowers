import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <HeroSection />

      {/* SECTION ENGAGEMENT */}
      <section className="transparency">
        <h2>Notre engagement</h2>
        <ul>
          <li>✔ Culture suisse</li>
          <li>✔ Produits testés</li>
          <li>✔ Respect de la législation</li>
          <li>✔ Fleurs naturelles</li>
        </ul>
      </section>

      {/* SECTION PRODUITS PREVIEW */}
      <section className="products-preview">
        <h2>Nos fleurs CBD</h2>
        <p>
          Découvrez une sélection de fleurs CBD riches en arômes,
          cultivées avec soin dans les meilleures conditions.
        </p>

        <a href="/shop" className="hero-btn">
          Voir la boutique
        </a>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
