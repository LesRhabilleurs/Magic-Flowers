```jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import logo from "../assets/Logo.png";
import "./Navbar.css";

export default function Navbar({ cart, setCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <div className="logo-container">
          <img
            src={logo}
            alt="Magic Botanics"
            className="logo"
          />
        </div>
      </Link>

      {/* Liens de navigation */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Accueil
        </Link>

        <Link to="/shop" onClick={closeMenu}>
          Boutique
        </Link>

        <Link to="/cannanews" onClick={closeMenu}>
          Cannanews
        </Link>

        <Link to="/faq" onClick={closeMenu}>
          FAQ
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      {/* Panier */}
      <Cart cart={cart} setCart={setCart} />

      {/* Menu burger */}
      <button
        type="button"
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
```
