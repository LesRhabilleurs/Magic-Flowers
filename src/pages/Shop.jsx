import React, { useState } from "react";
import products from "../data/products";
import "./Shop.css";
import { motion } from "framer-motion";

export default function Shop({ cart, setCart }) {
  const [flyingImage, setFlyingImage] = useState(null);

  const addToCart = (product, event) => {
    // Position de l'image cliquée
    const image = event.currentTarget
      .closest(".product")
      .querySelector(".product-image");

    // Position du panier
    const cartButton = document.querySelector(".cart-button");

    if (image && cartButton) {
      const imageRect = image.getBoundingClientRect();
      const cartRect = cartButton.getBoundingClientRect();

      setFlyingImage({
        id: Date.now(),
        src: product.image,
        startX: imageRect.left,
        startY: imageRect.top,
        endX:
          cartRect.left +
          cartRect.width / 2 -
          imageRect.width / 2,
        endY:
          cartRect.top +
          cartRect.height / 2 -
          imageRect.height / 2,
        width: imageRect.width,
        height: imageRect.height,
      });

      // Supprime l'image volante après l'animation
      setTimeout(() => {
        setFlyingImage(null);
      }, 700);
    }

    // Ajout normal au panier
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <section className="shop">
      <h1 className="shop-title">Nos Produits</h1>

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <motion.img
              className="product-image"
              src={product.image}
              alt={product.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>
              CHF {product.price.toFixed(2)}
            </p>

            <button
              onClick={(event) =>
                addToCart(product, event)
              }
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {/* Image qui vole vers le panier */}
      {flyingImage && (
        <motion.img
          src={flyingImage.src}
          alt=""
          initial={{
            position: "fixed",
            left: flyingImage.startX,
            top: flyingImage.startY,
            width: flyingImage.width,
            height: flyingImage.height,
            scale: 1,
            opacity: 1,
            zIndex: 9999,
            borderRadius: "12px",
          }}
          animate={{
            left: flyingImage.endX,
            top: flyingImage.endY,
            scale: 0.2,
            opacity: 0.3,
            rotate: 10,
          }}
          transition={{
            duration: 0.65,
            ease: "easeInOut",
          }}
          style={{
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      )}
    </section>
  );
}
