import "./CannaNews.css";

const articles = [
  {
    id: 1,
    category: "Suisse",
    date: "27 septembre 2026",
    title: "Le cannabis en Suisse : où en est la réglementation ?",
    excerpt:
      "Le cadre juridique suisse distingue notamment le cannabis contenant moins de 1 % de THC du cannabis soumis à la législation sur les stupéfiants.",
    source: "OFSP",
    link: "https://www.bag.admin.ch/fr/situation-juridique-des-produits-a-base-de-chanvre-et-de-cannabis",
  },
  {
    id: 2,
    category: "Réglementation",
    date: "27 septembre 2026",
    title: "Vers une nouvelle réglementation du cannabis en Suisse",
    excerpt:
      "Un avant-projet de loi sur les produits cannabiques prévoit un cadre réglementé pour l'utilisation du cannabis à des fins non médicales.",
    source: "OFSP",
    link: "https://www.bag.admin.ch/fr/nouvelle-loi-produits-cannabiques",
  },
  {
    id: 3,
    category: "CBD",
    date: "27 septembre 2026",
    title: "CBD et chanvre : comprendre le cadre légal suisse",
    excerpt:
      "Les produits contenant du CBD ou du chanvre peuvent relever de différentes législations selon leur composition et leur utilisation.",
    source: "OSAV",
    link: "https://www.blv.admin.ch/fr/cannabis-cannabinoides-aliments",
  },
  {
    id: 4,
    category: "Recherche",
    date: "27 septembre 2026",
    title: "Cannabis médical : ce que dit la réglementation suisse",
    excerpt:
      "Depuis août 2022, les médecins suisses peuvent prescrire certains médicaments à base de cannabis sans autorisation exceptionnelle de l'OFSP.",
    source: "OFSP",
    link: "https://www.bag.admin.ch/fr/utilisation-du-cannabis-a-des-fins-medicales",
  },
];

function CannaNews() {
  return (
    <main className="canna-news">

      {/* HEADER */}
      <section className="canna-news-header">
        <span className="canna-news-label">
          ACTUALITÉS
        </span>

        <h1>CannaNews</h1>

        <p>
          L'actualité du cannabis légal, du CBD et du chanvre
          en Suisse.
        </p>
      </section>

      {/* FILTRES */}
      <div className="canna-news-filters">
        <button className="active">
          Toutes
        </button>

        <button>
          Suisse
        </button>

        <button>
          CBD
        </button>

        <button>
          Réglementation
        </button>

        <button>
          Recherche
        </button>
      </div>

      {/* ARTICLES */}
      <section className="canna-news-grid">

        {articles.map((article) => (
          <article
            className="news-card"
            key={article.id}
          >
            <div className="news-card-top">
              <span className="news-category">
                {article.category}
              </span>

              <span className="news-date">
                {article.date}
              </span>
            </div>

            <div className="news-card-content">

              <h2>
                {article.title}
              </h2>

              <p>
                {article.excerpt}
              </p>

              <div className="news-card-footer">

                <span className="news-source">
                  Source : {article.source}
                </span>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire l'article →
                </a>

              </div>

            </div>
          </article>
        ))}

      </section>

      {/* INFORMATION */}
      <section className="canna-news-info">

        <h2>
          Une information claire et vérifiée
        </h2>

        <p>
          CannaNews a pour objectif de présenter les évolutions
          du cannabis légal, du CBD et du chanvre de manière
          simple et accessible. Les informations réglementaires
          sont accompagnées de leurs sources afin de permettre
          de consulter les informations officielles.
        </p>

      </section>

    </main>
  );
}

export default CannaNews;
