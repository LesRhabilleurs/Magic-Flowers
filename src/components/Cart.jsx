import { useState, useEffect, useRef } from "react";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);

  const removeFromCart = (id) => {
    const existingProduct = cart.find(
      (item) => item.id === id
    );

    if (!existingProduct) return;

    if (existingProduct.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
      );
    } else {
      setCart(
        cart.filter((item) => item.id !== id)
      );
    }
  };

  // Ferme le panier si on clique ailleurs sur le site
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const total = cart
    .reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    )
    .toFixed(2);

  const cartQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div
      className="cart-container"
      ref={cartRef}
    >
      {/* BOUTON PANIER */}
      <button
        type="button"
        className="cart-button"
        onClick={() => setOpen(!open)}
      >
        🛒 {cartQuantity}
      </button>

      {/* PANIER */}
      {open && (
        <div className="cart-dropdown">
          <h3>Panier</h3>

          {cart.length === 0 && (
            <p>Votre panier est vide</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  marginRight: "10px",
                  borderRadius: "8px",
                }}
              />

              <span>
                {item.name} x{item.quantity}
              </span>

              <span>
                CHF{" "}
                {(item.price * item.quantity).toFixed(2)}
              </span>

              <button
                type="button"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                ✕
              </button>
            </div>
          ))}

          {cart.length > 0 && (
            <>
              <p className="cart-total">
                Total : CHF {total}
              </p>

              <button
                type="button"
                className="checkout-btn"
              >
                Commander
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
