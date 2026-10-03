```jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import logo from "../assets/Logo.png";
import "./Navbar.css";

export default function Navbar({ cart, setCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo + Nom du site */}
      <Link to="/" className="logo-link">
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

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Accueil
        </Link>

        <Link
          to="/shop"
          onClick={() => setMenuOpen(false)}
        >
          Boutique
        </Link>

        <Link
          to="/cannanews"
          onClick={() => setMenuOpen(false)}
        >
          CannaNews
        </Link>

        <Link
          to="/faq"
          onClick={() => setMenuOpen(false)}
        >
          FAQ
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

      </div>

      {/* Panier */}
      <Cart
        cart={cart}
        setCart={setCart}
      />

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
```

Maintenant, **ne change rien d'autre**.

Le lien du menu **CannaNews** pointe bien vers :

```text
/cannanews
```

et ta route `App.jsx` doit également être :

```jsx
<Route path="/cannanews" element={<CannaNews />} />
```

Si tu veux, ensuite je peux te refaire **`Cannanews.jsx` + `Cannanews.css` ensemble**, avec les 3 articles correctement affichés et une mise en page propre.
