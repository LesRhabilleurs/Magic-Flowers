import { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

export default function Checkout({ cart, setCart }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    const item = cart.find(
      (product) => product.id === id
    );

    if (!item) return;

    if (item.quantity > 1) {
      setCart(
        cart.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
      );
    } else {
      setCart(
        cart.filter((product) => product.id !== id)
      );
    }
  };

  const removeProduct = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const total = cart
    .reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    )
    .toFixed(2);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Votre commande a bien été préparée !"
    );
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">
          <h1>Votre panier est vide</h1>

          <p>
            Ajoutez des produits à votre panier
            avant de passer commande.
          </p>

          <Link
            to="/shop"
            className="checkout-back"
          >
            Retour à la boutique
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">

        <h1>Finaliser ma commande</h1>

        <div className="checkout-content">

          {/* RÉCAPITULATIF */}
          <section className="checkout-summary">
            <h2>Votre panier</h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="checkout-product"
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="checkout-product-info">
                  <h3>{item.name}</h3>

                  <p>
                    CHF{" "}
                    {item.price.toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="checkout-product-right">
                  <strong>
                    CHF{" "}
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </strong>

                  <button
                    type="button"
                    className="remove-product"
                    onClick={() =>
                      removeProduct(item.id)
                    }
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}

            <div className="checkout-total">
              <span>Total</span>

              <strong>
                CHF {total}
              </strong>
            </div>
          </section>

          {/* INFORMATIONS CLIENT */}
          <section className="checkout-form-section">
            <h2>Vos coordonnées</h2>

            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    Prénom
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Nom
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Adresse e-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Téléphone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">
                  Adresse
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="postalCode">
                    NPA
                  </label>

                  <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    value={form.postalCode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">
                    Ville
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="place-order-btn"
              >
                Passer la commande — CHF {total}
              </button>

            </form>
          </section>

        </div>
      </div>
    </main>
  );
}
