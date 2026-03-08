import { useState } from "react"

export default function Cart({ cart, setCart }) {
  const [open, setOpen] = useState(false)

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <div className="cart-container">
      {/* Bouton pour ouvrir/fermer le panier */}
      <button onClick={() => setOpen(!open)}>
        🛒 {cart.length}
      </button>

      {/* Dropdown panier */}
      {open && (
        <div className="cart-dropdown">
          <h3>Panier</h3>

          {cart.length === 0 && <p>Votre panier est vide</p>}

          {cart.map(item => (
            <div key={item.id} className="cart-item">
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>X</button>
            </div>
          ))}

          {cart.length > 0 && (
            <>
              <p>Total: ${total}</p>
              <button className="checkout-btn">Checkout</button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
