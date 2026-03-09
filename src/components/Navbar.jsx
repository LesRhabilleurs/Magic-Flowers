import { Link } from "react-router-dom"
import Cart from "./Cart"       // le composant panier
import logo from "../assets/logo.png"  // chemin vers ton logo

export default function Navbar({ cart, setCart }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Magic Flowers" className="logo" />
      </Link>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/shop">Boutique</Link>
        <Link to="/">Accesoires</Link>
        <Link to="/">FAQ</Link>
      </div>

      <Cart cart={cart} setCart={setCart} />
    </nav>
  )
}
