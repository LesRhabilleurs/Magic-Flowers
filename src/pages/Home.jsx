export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Magic Flowers – CBD Premium Suisse</h1>
        <p>
          Des fleurs CBD cultivées avec passion dans des conditions optimales
          pour révéler toute la richesse naturelle du cannabis.
        </p>

        <div className="hero-buttons">
          <button>Découvrir nos fleurs</button>
          <button>Voir la boutique</button>
        </div>

        <p className="hero-info">
          Culture suisse • Qualité premium • CBD légal (&lt;1% THC)
        </p>
      </section>


      {/* PRESENTATION */}
      <section className="about">
        <h2>Qui sommes-nous ?</h2>

        <p>
          Chez Magic Flowers, nous sommes passionnés par la culture du cannabis
          et la qualité des fleurs CBD. Notre mission est simple : offrir des
          fleurs d’exception cultivées en Suisse dans des conditions contrôlées,
          afin de garantir une qualité, une pureté et des arômes incomparables.
        </p>
      </section>


      {/* POURQUOI NOUS */}
      <section className="features">
        <h2>Pourquoi choisir Magic Flowers</h2>

        <div className="features-grid">

          <div className="feature">
            <h3>Qualité Premium</h3>
            <p>
              Nos fleurs sont sélectionnées pour leur richesse aromatique et
              leur apparence exceptionnelle.
            </p>
          </div>

          <div className="feature">
            <h3>Culture contrôlée</h3>
            <p>
              Nos plants sont cultivés dans des conditions optimales afin de
              préserver leurs terpènes naturels.
            </p>
          </div>

          <div className="feature">
            <h3>CBD légal suisse</h3>
            <p>
              Tous nos produits respectent la législation suisse avec moins de
              1% de THC.
            </p>
          </div>

          <div className="feature">
            <h3>Prix compétitifs</h3>
            <p>
              Nous proposons des fleurs premium au meilleur prix du marché.
            </p>
          </div>

        </div>
      </section>


      {/* PRODUITS */}
      <section className="products">
        <h2>Nos fleurs CBD</h2>

        <p>
          Découvrez une sélection de fleurs CBD riches en arômes,
          soigneusement cultivées pour offrir une expérience unique.
        </p>

        <button>Voir tous les produits</button>
      </section>


      {/* PHILOSOPHIE */}
      <section className="philosophy">
        <h2>Notre philosophie</h2>

        <p>
          Chez Magic Flowers, le cannabis est avant tout une plante
          exceptionnelle. Nous mettons tout en œuvre pour respecter sa nature,
          sa culture et ses propriétés aromatiques.
        </p>

        <p>
          Notre objectif est de proposer des fleurs CBD authentiques,
          cultivées avec soin et passion.
        </p>
      </section>


      {/* TRANSPARENCE */}
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
          Nos produits CBD sont conformes à la législation suisse et contiennent
          moins de 1% de THC. Ils ne sont pas destinés à être utilisés comme
          substitut du tabac.
        </p>
      </section>


      {/* CTA */}
      <section className="cta">
        <h2>Prêt à découvrir nos fleurs ?</h2>
        <button>Accéder à la boutique</button>
      </section>

    </div>
  )
}
