import React from "react";
import products from "../data/products";
import "./Shop.css";

export default function Shop({ cart, setCart }) {

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <section className="shop">

      {/* Titre */}
      <h1 className="shop-title">Nos Produits</h1>

      {/* Grille produits */}
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product">

            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>CHF {product.price.toFixed(2)}</p>

            <button onClick={() => addToCart(product)}>
              Ajouter au panier
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}
