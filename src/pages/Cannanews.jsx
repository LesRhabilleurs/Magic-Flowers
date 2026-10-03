import { useState } from "react";
import "./Cannanews.css";

const articles = [
  {
    id: 1,
    category: "Suisse",
    date: "05 avril 2026",
    title: "Le cannabis légal en Suisse : ce qu'il faut savoir",
    excerpt:
      "Le marché suisse du cannabis et du CBD évolue. Découvrez les principales règles qui encadrent actuellement les produits à base de chanvre et de CBD.",
    content:
      "La future loi cannabis suisse suscite de nombreuses interrogations chez les particuliers romands. Actuellement, la confusion règne souvent entre le chanvre CBD autorisé et les produits riches en THC qui sont réprimés par de sévères amendes. Vous vous demandez comment la législation va évoluer et quels seront vos droits face à la police ? Cette réforme nationale promet de clarifier une situation parfois ubuesque, en mettant fin aux incohérences pénales actuelles. Au cœur des débats, un texte inédit fait l’unanimité auprès des spécialistes et ouvre la voie à un changement radical pour la société civile. Le 30 mars 2026, la Commission fédérale pour les questions liées aux addictions et à la prévention des maladies non transmissibles (CFANT) a publié un rapport particulièrement favorable concernant l’avant-projet de loi sur les produits du cannabis, abrégé LPCan. Des experts internationaux de la santé publique ont validé ce texte, qui propose un changement de paradigme majeur à l’échelle du pays. Plutôt que de poursuivre une politique de prohibition coûteuse et inefficace, la Confédération souhaite désormais réguler. Le texte prévoit de légaliser la production, l’importation, la vente et la consommation de cannabis pour les adultes résidant en Suisse, tout en instaurant un marché strictement contrôlé et à but non lucratif. Le grand avantage de cette loi cannabis suisse réside dans le cahier des charges imposé. Les cantons romands, comme Genève, Vaud ou Neuchâtel, obtiendront le monopole de la vente physique. Cela signifie que les produits seront contrôlés scientifiquement, garantis sans additifs chimiques dangereux, et avec des taux de THC strictement encadrés. Une double taxation est prévue : l’une basée sur la quantité, l’autre sur la teneur en substance psychoactive, dans le but de financer les campagnes de prévention dans les écoles vaudoises et genevoises. Pour bien saisir l’ampleur et la nécessité de la future loi cannabis suisse, il faut observer attentivement la législation en vigueur. Aujourd’hui, tout produit issu du chanvre présentant un taux de THC supérieur à 1% est considéré juridiquement comme un stupéfiant. Il est donc régi par la Loi fédérale sur les stupéfiants (LStup), cataloguée sous l’article 812.121 du recueil systématique (RS). La consommation sans autorisation médicale reste fermement punissable sous le régime des sanctions de l’article 19 LStup. Toutefois, en dehors de ces essais fermés, la possession et l’achat dans la rue restent formellement interdits. Une relative tolérance existe sous l’article 19b LStup pour la détention de moins de 10 grammes pour son propre usage. Cette quantité est considérée par le législateur comme minime. Elle ne donne pas lieu à une procédure pénale lourde, mais la consommation en public vous expose tout de même à une contravention immédiate par les agents de police municipale ou cantonale.",
    source: "Juriup.ch",
    image: "/news3.jpg",
  },
  {
    id: 2,
    category: "CBD",
    date: "25 septembre 2026",
    title: "CBD : quelles différences entre les produits ?",
    excerpt:
      "Huiles, fleurs, résines et autres produits à base de CBD : leurs caractéristiques et leur réglementation peuvent varier selon leur composition.",
    content:
      "Les produits à base de CBD existent sous différentes formes : huiles, fleurs, résines et autres préparations. Leur composition, leur mode d'utilisation et leur réglementation peuvent varier selon le produit. Avant tout achat, il est recommandé de vérifier la composition du produit ainsi que les informations fournies par le fabricant.",
    source: "Magic Botanics",
    image: "/news2.jpg",
  },
  {
    id: 3,
    category: "Actualité",
    date: "22 septembre 2026",
    title: "Les nouveautés à suivre dans le monde du CBD",
    excerpt:
      "Réglementation, nouveaux produits et évolution du marché : retrouvez les principales actualités du secteur du CBD et du chanvre.",
    content:
      "Le secteur du CBD et du chanvre continue d'évoluer. Les changements réglementaires, l'arrivée de nouveaux produits et l'évolution des habitudes des consommateurs font partie des principaux sujets à suivre. CannaNews vous propose de retrouver régulièrement les actualités importantes du secteur en Suisse.",
    source: "Magic Botanics",
    image: "/news1.jpg",
  },
];

function CannaNews() {
  const [openArticle, setOpenArticle] = useState(null);

  const handleReadMore = (id) => {
    setOpenArticle(openArticle === id ? null : id);
  };

  return (
    <main className="canna-news">
      {/* HEADER */}
      <header className="canna-news-header">
        <span className="canna-news-label">
          ACTUALITÉS
        </span>

        <h1>CannaNews</h1>

        <p>
          Retrouvez les dernières actualités autour du CBD
          et du chanvre en Suisse.
        </p>
      </header>

      {/* LISTE DES ACTUALITÉS */}
      <div className="canna-news-list">
        {articles.map((article) => (
          <article className="news-card" key={article.id}>

            {/* IMAGE */}
            <div className="news-card-image">
              <img
                src={article.image}
                alt={article.title}
              />
            </div>

            {/* CATÉGORIE + DATE */}
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
              <h2>{article.title}</h2>

              <p>{article.excerpt}</p>

              {/* ARTICLE COMPLET */}
              {openArticle === article.id && (
                <div className="news-full-content">
                  <p>{article.content}</p>
                </div>
              )}

              {/* FOOTER */}
              <div className="news-card-footer">
                <span className="news-source">
                  Source : {article.source}
                </span>

                <button
                  type="button"
                  onClick={() => handleReadMore(article.id)}
                >
                  {openArticle === article.id
                    ? "Réduire ↑"
                    : "Lire la suite →"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* INFORMATIONS */}
      <section className="canna-news-info">
        <h2>CannaNews</h2>

        <p>
          Cette rubrique sera régulièrement mise à jour avec de
          nouvelles actualités autour du CBD chaque mois.
        </p>
      </section>
    </main>
  );
}

export default CannaNews;
