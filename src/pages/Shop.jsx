import React, { useState } from "react";
import products from "../data/products";
import "./Shop.css";
import { motion } from "framer-motion";

export default function Shop({ cart, setCart }) {

  const [flying, setFlying] = useState(null);

  const addToCart = (product, event) => {

    const img = event.currentTarget
      .closest(".product")
      .querySelector("img");

    const rect = img.getBoundingClientRect();

    setFlying({
      image: product.image,
      x: rect.left,
      y: rect.top
    });

    setTimeout(() => {

      const existingProduct = cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCart([
          ...cart,
          { ...product, quantity: 1 }
        ]);
      }

      setFlying(null);

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

            <button onClick={(e) => addToCart(product, e)}>
              Ajouter au panier
            </button>

          </div>
        ))}
      </div>

      {flying && (
        <motion.img
          src={flying.image}
          initial={{
            x: flying.x,
            y: flying.y,
            scale: 1,
            opacity: 1
          }}
          animate={{
            x: window.innerWidth - 120,
            y: 30,
            scale: 0.2,
            opacity: 0
          }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed",
            width: "100px",
            pointerEvents: "none",
            zIndex: 9999
          }}
        />
      )}

    </section>
  );
}
