import React from "react";
import products from "../data/products";
import "./Shop.css"; // CSS spécifique à la page

export default function Shop() {
  return (
    <section className="shop">
      {/* Titre centré */}
      <h1 className="shop-title">Nos Produits</h1>

      {/* Grille des produits */}
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>CHF {product.price.toFixed(2)}</p>
            <button>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </section>
  );
}
