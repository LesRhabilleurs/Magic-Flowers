import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <h2>Magic Flowers 🌿</h2>

      <div>
        <Link to="/">Accueil</Link>
        <Link to="/shop">Boutique</Link>
      </div>
    </nav>
  )
}
