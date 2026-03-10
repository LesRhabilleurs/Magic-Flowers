import React from "react"
import Footer from "../components/Footer"
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Bienvenue chez Magic Flowers</h1>
        <p>
          Chez nous vous trouverez des fleurs de CBD cultivées avec passion et dans des conditions optimales
          pour révéler toute la richesse naturelle du cannabis.
        </p>
        <div className="hero-buttons">
          <button>Découvrir nos fleurs</button>
        </div>
        <p className="hero-info">
          Culture 100% suisse • Qualité exclusive • Produits légaux (&lt;1% THC)
        </p>
      </section>

      {/* POURQUOI NOUS */}
      <section className="features">
        <h2>Pourquoi choisir Magic Flowers</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Qualité Premium</h3>
            <p>
              Fleurs sélectionnées pour leur richesse aromatique et leur
              apparence exceptionnelle.
            </p>
          </div>

          <div className="feature">
            <h3>Culture contrôlée</h3>
            <p>
              Plants cultivés dans des conditions optimales pour préserver leurs
              terpènes naturels.
            </p>
          </div>

          <div className="feature">
            <h3>CBD légal suisse</h3>
            <p>
              Produits conformes à la législation suisse avec moins de 1% de THC.
            </p>
          </div>

          <div className="feature">
            <h3>Prix compétitifs</h3>
            <p>Fleurs premium au meilleur prix du marché.</p>
          </div>
        </div>
      </section>

      
      {/* PHILOSOPHIE */}
      <section className="philosophy">
        <h2>Notre philosophie</h2>
        <p>
          Le cannabis est avant tout une plante
          exceptionnelle. Nous mettons tout en œuvre pour respecter sa nature,
          sa culture et ses propriétés aromatiques.
        </p>
        <p>
          Notre objectif est de proposer des fleurs CBD authentiques,
          d'une qualité exclusive et au meilleur prix.
        </p>
      </section>

      {/* NOTRE ENGAGEMENT */}
      <section className="transparency">
        <h2>Notre engagement</h2>
        <ul>
          <li>✔ Culture suisse</li>
          <li>✔ Produits testés</li>
          <li>✔ Respect de la législation</li>
          <li>✔ Fleurs naturelles</li>
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section className="legal">
        <p>
          "Nos produits CBD sont conformes à la législation suisse et contiennent
          moins de 1% de THC. Ils ne sont pas destinés à être utilisés comme
          substitut du tabac."
          <h2>Prêt à découvrir nos fleurs ?</h2>
        </p>
      </section>


      {/* FOOTER */}
      <Footer />

    </div>
  )
}
