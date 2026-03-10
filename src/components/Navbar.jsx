import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import logo from "../assets/logo.png";
import "./Navbar.css"; // CSS dans le même dossier

export default function Navbar({ cart, setCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Magic Flowers" className="logo" />
      </Link>

      {/* Liens de navigation */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Boutique</Link>
        <Link to="/accessoires" onClick={() => setMenuOpen(false)}>Accessoires</Link>
        <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
      </div>

      {/* Panier */}
      <Cart cart={cart} setCart={setCart} />

      {/* Burger menu mobile */}
      <div
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
