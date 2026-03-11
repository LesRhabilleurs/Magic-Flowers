import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les cartes de crédit (Visa, MasterCard), PayPal et les virements bancaires."
  },
  {
    question: "Puis-je retourner un produit ?",
    answer: "Oui, vous avez 14 jours pour retourner un produit non utilisé et non ouvert. Les frais de retour sont à votre charge."
  },
  {
    question: "Comment suivre ma commande ?",
    answer: "Après expédition, vous recevrez un email avec un numéro de suivi pour suivre votre colis."
  },
  {
    question: "Proposez-vous la livraison internationale ?",
    answer: "Oui, nous livrons dans la plupart des pays. Les frais et délais varient selon la destination."
  },
  {
    question: "Puis-je retourner un produit ?",
    answer: "Oui, vous avez 14 jours pour retourner un produit non utilisé et non ouvert. Les frais de retour sont à votre charge."
  },
  {
    question: "Comment suivre ma commande ?",
    answer: "Après expédition, vous recevrez un email avec un numéro de suivi pour suivre votre colis."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h1>Foire aux Questions</h1>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
