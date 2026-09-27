import { useEffect, useState } from "react";
import "./AgeGate.css";

const AGE_GATE_KEY = "magicFlowersAgeVerified";

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(`${dateOfBirth}T00:00:00`);

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export default function AgeGate({ children }) {
  const [verified, setVerified] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedVerification = localStorage.getItem(AGE_GATE_KEY);

    setVerified(savedVerification === "true");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!dateOfBirth) {
      setError("Veuillez indiquer votre date de naissance.");
      return;
    }

    const birthDate = new Date(`${dateOfBirth}T00:00:00`);
    const today = new Date();

    if (birthDate > today) {
      setError("Veuillez indiquer une date de naissance valide.");
      return;
    }

    const age = calculateAge(dateOfBirth);

    if (age >= 18) {
      localStorage.setItem(AGE_GATE_KEY, "true");
      setVerified(true);
    } else {
      setError(
        "Désolé, l'accès à ce site est réservé aux personnes majeures."
      );
    }
  };

  // Évite d'afficher brièvement le site avant la vérification
  if (verified === null) {
    return null;
  }

  // Utilisateur vérifié
  if (verified) {
    return children;
  }

  // Écran de restriction
  return (
    <div className="age-gate">
      <div className="age-gate-card">

        <div className="age-gate-logo">
          MAGIC FLOWERS
        </div>

        <div className="age-gate-badge">
          18+
        </div>

        <h1>Bienvenue chez Magic Flowers</h1>

        <p className="age-gate-intro">
          Notre site propose des produits destinés aux personnes
          majeures.
        </p>

        <p className="age-gate-question">
          Pour accéder au site, veuillez confirmer votre date de naissance.
        </p>

        <form onSubmit={handleSubmit} className="age-gate-form">

          <label htmlFor="dateOfBirth">
            Date de naissance
          </label>

          <input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            max={new Date().toISOString().split("T")[0]}
            required
          />

          {error && (
            <p className="age-gate-error">
              {error}
            </p>
          )}

          <button type="submit">
            Entrer sur le site
          </button>
        </form>

        <p className="age-gate-legal">
          En entrant sur ce site, vous confirmez avoir au moins 18 ans.
        </p>

      </div>
    </div>
  );
}
