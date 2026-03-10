import { useState } from "react"
import "./Cart.css"


export default function Cart({ cart, setCart }) {

  const [open, setOpen] = useState(false)

  const removeFromCart = (id) => {
    const existingProduct = cart.find(item => item.id === id)

    if (existingProduct.quantity > 1) {
      setCart(
        cart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      )
    } else {
      setCart(cart.filter(item => item.id !== id))
    }
  }

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <div className="cart-container">

      {/* Bouton panier */}
      <button onClick={() => setOpen(!open)}>
        🛒 {cart.reduce((sum, item) => sum + item.quantity, 0)}
      </button>

      {/* Dropdown panier */}
      {open && (
        <div className="cart-dropdown">

          <h3>Panier</h3>

          {cart.length === 0 && <p>Votre panier est vide</p>}

          {cart.map(item => (
            <div key={item.id} className="cart-item">

              <span>
                {item.name} x{item.quantity}
              </span>

              <span>
                CHF {(item.price * item.quantity).toFixed(2)}
              </span>

              <button onClick={() => removeFromCart(item.id)}>
                ✕
              </button>

            </div>
          ))}

          {cart.length > 0 && (
            <>
              <p className="cart-total">
                Total : CHF {total}
              </p>

              <button className="checkout-btn">
                Commander
              </button>
            </>
          )}

        </div>
      )}

    </div>
  )
}
