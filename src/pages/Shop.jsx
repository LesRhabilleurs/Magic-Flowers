import products from "../data/products"

export default function Shop() {
  return (
    <div>
      <h1>Boutique</h1>
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>CHF {product.price}</p>
            <button>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  )
}
