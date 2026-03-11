import React, { useState } from "react";
import products from "../data/products";
import "./Shop.css";
import { motion } from "framer-motion";

export default function Shop({ cart, setCart }) {

  const [flyingProduct, setFlyingProduct] = useState(null);

  const addToCart = (product) => {

    setFlyingProduct(product);

    setTimeout(() => {
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

      setFlyingProduct(null);

    }, 600);
  };

  return (
    <section className="shop">

      <h1 className="shop-title">Nos Produits</h1>

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

      {flyingProduct && (
        <motion.img
          src={flyingProduct.image}
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{ x: 500, y: -300, scale: 0.2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed",
            bottom: "200px",
            left: "40%",
            width: "100px",
            pointerEvents: "none",
            zIndex: 1000
          }}
        />
      )}

    </section>
  );
}
