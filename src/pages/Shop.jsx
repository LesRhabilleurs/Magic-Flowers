import React, { useState } from "react";
import products from "../data/products";
import Cart from "../components/Cart"; // ton composant panier
import "./Shop.css";

export default function Shop() {
  const [cart, setCart] = useState([]); // état du panier

  // Fonction pour ajouter un produit
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        // Si déjà dans le panier, augmenter la quantité
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Sinon ajouter le produit avec quantité 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <section className="shop">
      {/* Panier */}
      <Cart cart={cart} setCart={setCart} />

      {/* Titre centré */}
      <h1 className="shop-title">Nos Produits</h1>

      {/* Grille des produits */}
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>CHF {product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </section>
  );
}
