"use client";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Check } from "lucide-react";

const PRODUITS = [
  {
    id: "ebook-1",
    name: "Ebook : Le Guide du Succès Digital",
    price: 5000,
    description: "Apprenez à bâtir votre empire en ligne avec les meilleures stratégies 2026."
  },
  {
    id: "consult-1",
    name: "Consultation Stratégique",
    price: 15000,
    description: "Une heure de coaching intensif pour propulser votre projet Greathem Lab."
  }
];

export default function Home() {
  const { addToCart, cart } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center my-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Innover. Créer. Réussir.</h1>
        <p className="text-lg text-gray-600">Découvrez nos ressources exclusives pour entrepreneurs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUITS.map((produit) => (
          <div key={produit.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-2">{produit.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{produit.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-black">{produit.price.toLocaleString()} FCFA</span>
              <button 
                onClick={() => addToCart({...produit, quantity: 1})}
                className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart size={18} />
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-12 p-4 bg-green-50 border border-green-200 rounded-xl flex justify-between items-center">
          <div className="flex items-center gap-2 text-green-700">
            <Check size={20} />
            <span>{cart.length} produit(s) dans votre panier</span>
          </div>
          <button className="font-bold text-green-800 underline">Voir le panier</button>
        </div>
      )}
    </div>
  );
}
