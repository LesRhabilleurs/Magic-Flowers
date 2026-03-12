import { useState } from "react";

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
      <div className="container">
        <h1>Contactez-nous 🌿</h1>
        <p>
          Une question sur nos produits CBD ou votre commande ?
          Notre équipe vous répond rapidement.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Sujet</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">
            Envoyer le message
          </button>
        </form>

        <div className="contact-info">
          <h3>Email</h3>
          <p>contact@votresitecbd.com</p>

          <h3>Service client</h3>
          <p>Lundi - Vendredi : 9h00 – 18h00</p>
        </div>
      </div>
    </div>
  );
}
