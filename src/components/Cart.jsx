export default function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <div className="cart">
      <h3>Panier</h3>
      {cart.length === 0 && <p>Votre panier est vide</p>}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(item.id)}>X</button>
        </div>
      ))}
      {cart.length > 0 && <p>Total: ${total}</p>}
    </div>
  )
}
