import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Magic Flowers - Tous droits réservés</p>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
          <a href="/shop">Boutique</a>
        </div>
      </div>
    </footer>
  );
}
