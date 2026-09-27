```jsx
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">

        <div className="contact-header">
          <h1>Contactez-nous</h1>
          <p>
            Une question sur nos produits CBD ou votre commande ?
            Notre équipe est là pour vous aider.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://api.staticforms.dev/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="apiKey"
            value="sf_7694efb2fa7ccadd0fe00ffb"
          />

          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              name="name"
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
            />
          </div>

          <button type="submit">
            Envoyer le message
          </button>
        </form>

        <div className="contact-info">
          <h3>Email</h3>
          <p>magic-flowers@info.ch</p>

          <h3>Support</h3>
          <p>Lundi - Vendredi : 9h - 18h</p>
        </div>

      </div>
    </div>
  );
}
```
