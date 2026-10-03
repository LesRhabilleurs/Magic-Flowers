```jsx
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
      "Le marché suisse du cannabis et du CBD évolue rapidement. En Suisse, la réglementation distingue notamment les produits contenant du THC des produits à base de CBD. Les règles applicables peuvent varier selon la composition, la teneur en THC et la destination du produit. Il est donc important de vérifier les informations disponibles et la réglementation en vigueur avant de commercialiser ou d'utiliser un produit.",
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
```

### Ce qui change

Il y a seulement trois choses importantes :

**1.** On importe `useState` :

```jsx
import { useState } from "react";
```

**2.** Chaque article possède maintenant un `content` :

```jsx
content: "Le marché suisse du cannabis et du CBD évolue..."
```

**3.** Le lien est remplacé par un bouton qui ouvre/ferme le contenu :

```jsx
<button
  type="button"
  onClick={() => handleReadMore(article.id)}
>
  {openArticle === article.id
    ? "Réduire ↑"
    : "Lire la suite →"}
</button>
```

Tu peux donc **remplacer directement ton `Cannanews.jsx` actuel par celui-ci**.

Si le bouton apparaît mais qu'il est moche par rapport au design actuel, il faudra ensuite simplement ajouter **3-4 lignes dans `Cannanews.css`** pour lui donner exactement le même style que ton ancien « Lire la suite → ».

