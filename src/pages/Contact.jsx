import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // ici tu pourras connecter ton backend ou EmailJS
    alert("Message envoyé !");
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
  <div className="contact-container">

    <div className="contact-header">
      <h1>Contactez-nous</h1>
      <p>Une question sur nos produits CBD ou votre commande ? Notre équipe est là pour vous aider.</p>
    </div>

    <form className="contact-form">
      <div className="form-group">
        <label>Nom</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" />
      </div>

      <div className="form-group">
        <label>Sujet</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea rows="5"></textarea>
      </div>

      <button>Envoyer le message</button>
    </form>

    <div className="contact-info">
      <h3>Email</h3>
      <p>magic-flowers@info.ch.com</p>

      <h3>Support</h3>
      <p>Lundi - Vendredi : 9h - 18h</p>
    </div>

  </div>
</div>
  );
}
