import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
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
    <div className="cart-container">
      {/* BOUTON PANIER */}
      <button
        type="button"
        className="cart-button"
      >
        🛒 {cartQuantity}
      </button>

      {/* PANIER */}
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

            <Link
              to="/checkout"
              className="checkout-btn"
            >
              Commander
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
