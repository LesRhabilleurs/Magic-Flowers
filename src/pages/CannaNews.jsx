import "./CannaNews.css";

const articles = [
  {
    id: 1,
    category: "Suisse",
    date: "27 septembre 2026",
    title: "Le cannabis légal en Suisse : ce qu'il faut savoir",
    excerpt:
      "Le marché suisse du cannabis et du CBD évolue. Découvrez les principales règles qui encadrent actuellement les produits à base de chanvre et de cannabis.",
    source: "Magic Flowers",
  },
  {
    id: 2,
    category: "CBD",
    date: "25 septembre 2026",
    title: "CBD : quelles différences entre les produits ?",
    excerpt:
      "Huiles, fleurs, résines et autres produits à base de CBD : leurs caractéristiques et leur réglementation peuvent varier selon leur composition.",
    source: "Magic Flowers",
  },
  {
    id: 3,
    category: "Actualité",
    date: "22 septembre 2026",
    title: "Les nouveautés à suivre dans le monde du cannabis légal",
    excerpt:
      "Réglementation, nouveaux produits et évolution du marché : retrouvez prochainement dans CannaNews les principales actualités du secteur.",
    source: "Magic Flowers",
  },
];

function CannaNews() {
  return (
    <main className="canna-news">

      {/* HEADER */}
      <header className="canna-news-header">
        <span className="canna-news-label">
          ACTUALITÉS
        </span>

        <h1>CannaNews</h1>

        <p>
          Retrouvez les dernières actualités autour du cannabis légal,
          du CBD et du chanvre en Suisse.
        </p>
      </header>

      {/* NEWS */}
      <section className="canna-news-grid">

        {articles.map((article) => (
          <article
            className="news-card"
            key={article.id}
          >
            {/* HAUT DE LA CARTE */}
            <div className="news-card-top">

              <span className="news-category">
                {article.category}
              </span>

              <span className="news-date">
                {article.date}
              </span>

            </div>

            {/* CONTENU */}
            <div className="news-card-content">

              <h2>
                {article.title}
              </h2>

              <p>
                {article.excerpt}
              </p>

              {/* BAS DE LA CARTE */}
              <div className="news-card-footer">

                <span className="news-source">
                  Source : {article.source}
                </span>

                <a href="#">
                  Lire la suite →
                </a>

              </div>

            </div>
          </article>
        ))}

      </section>

      {/* INFORMATIONS */}
      <section className="canna-news-info">

        <h2>
          CannaNews
        </h2>

        <p>
          Cette rubrique sera régulièrement mise à jour avec
          les actualités du cannabis légal, du CBD et du chanvre.
        </p>

      </section>

    </main>
  );
}

export default CannaNews;
  );
}

export default CannaNews;
