import "./CannaNews.css";

const articles = [
  {
    id: 1,
    category: "Suisse",
    date: "27 septembre 2026",
    title: "Cannabis en Suisse : comprendre le cadre légal",
    excerpt:
      "En Suisse, le cadre légal distingue notamment les produits contenant moins de 1 % de THC des produits soumis à la législation sur les stupéfiants.",
    source: "OFSP",
    link: "https://www.bag.admin.ch/fr/situation-juridique-des-produits-a-base-de-chanvre-et-de-cannabis",
  },
  {
    id: 2,
    category: "Réglementation",
    date: "27 septembre 2026",
    title: "Le cadre réglementaire du cannabis évolue",
    excerpt:
      "Les autorités suisses travaillent sur l'évolution du cadre applicable aux produits cannabiques et à leur utilisation.",
    source: "OFSP",
    link: "https://www.bag.admin.ch/fr/nouvelle-loi-produits-cannabiques",
  },
  {
    id: 3,
    category: "CBD",
    date: "27 septembre 2026",
    title: "CBD et produits à base de chanvre",
    excerpt:
      "Les produits contenant des cannabinoïdes peuvent être soumis à différentes réglementations selon leur composition et leur utilisation.",
    source: "OSAV",
    link: "https://www.blv.admin.ch/fr/cannabis-cannabinoides-aliments",
  },
  {
    id: 4,
    category: "Santé",
    date: "27 septembre 2026",
    title: "Cannabis médical en Suisse",
    excerpt:
      "Le cannabis médical dispose d'un cadre spécifique en Suisse. Les médecins peuvent prescrire certains médicaments à base de cannabis dans les conditions prévues par la réglementation.",
    source: "OFSP",
    link: "https://www.bag.admin.ch/fr/utilisation-du-cannabis-a-des-fins-medicales",
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
          Toute l'actualité du cannabis légal, du CBD et du chanvre.
        </p>
      </header>

      {/* ARTICLES */}
      <section className="canna-news-grid">
        {articles.map((article) => (
          <article className="news-card" key={article.id}>

            <div className="news-card-top">
              <span className="news-category">
                {article.category}
              </span>

              <span className="news-date">
                {article.date}
              </span>
            </div>

            <div className="news-card-content">

              <h2>{article.title}</h2>

              <p>{article.excerpt}</p>

              <div className="news-card-footer">

                <span className="news-source">
                  Source : {article.source}
                </span>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire la source →
                </a>

              </div>

            </div>

          </article>
        ))}
      </section>

      {/* INFORMATION */}
      <section className="canna-news-info">

        <h2>
          CannaNews
        </h2>

        <p>
          Cette rubrique présente des informations sur le cannabis
          légal, le CBD, le chanvre et leur réglementation. Les
          informations réglementaires sont accompagnées de leurs
          sources officielles.
        </p>

      </section>

    </main>
  );
}

export default CannaNews;
