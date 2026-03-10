import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaLeaf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + description */}
        <div className="footer-brand">
          <h2 className="footer-logo">
             Magic Flowers
          </h2>
          <p>
            CBD premium sélectionné avec soin. Produits naturels,
            légaux en Suisse et testés en laboratoire.
          </p>

          <div className="footer-social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <a href="/">Accueil</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Légal */}
        <div className="footer-column">
          <h4>Légal</h4>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Confidentialité</a>
          <a href="/conditions">Conditions générales</a>
        </div>


      </div>

      {/* Bas du footer */}
      <div className="footer-bottom">
        <p>© 2026 Magic Flowers — Tous droits réservés</p>
      </div>

    </footer>
  );
}
