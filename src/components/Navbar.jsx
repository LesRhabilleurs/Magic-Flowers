import { Link } from "react-router-dom";
import Cart from "./Cart";
import logo from "../assets/logo.png";

export default function Navbar({ cart, setCart }) {
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Magic Flowers" className="logo" />
      </Link>

      {/* Liens de navigation */}
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/shop">Boutique</Link>
        <Link to="/accessoires">Accessoires</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      {/* Panier */}
      <Cart cart={cart} setCart={setCart} />

      {/* Burger menu pour mobile */}
      <div className="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
