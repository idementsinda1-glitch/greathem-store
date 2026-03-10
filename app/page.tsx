"use client";
import React from 'react';
import { ShoppingCart, ShieldCheck, Zap } from "lucide-react";

export default function GlobalStore() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh', color: '#1a1a1a' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #000 0%, #222 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-1px', marginBottom: '10px' }}>GREATHEM LAB</h1>
        <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>L'Excellence Digitale à votre portée</p>
      </section>

      {/* Product Grid */}
      <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Produit 1 */}
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
          <div style={{ backgroundColor: '#000', color: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <Zap size={20} />
          </div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Ebook : Succès Digital</h2>
          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>La stratégie complète pour bâtir votre empire en ligne dès aujourd'hui.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>5 000 FCFA</span>
            <button style={{ backgroundColor: '#000', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
              Acheter
            </button>
          </div>
        </div>

        {/* Produit 2 */}
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
          <div style={{ backgroundColor: '#000', color: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <ShieldCheck size={20} />
          </div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Consultation Privée</h2>
          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>Un accompagnement sur mesure pour vos projets Greathem Lab.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>15 000 FCFA</span>
            <button style={{ backgroundColor: '#000', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
              Réserver
            </button>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#999', fontSize: '0.8rem' }}>
        © 2026 GREATHEM LAB. Tous droits réservés. Propriété exclusive.
      </footer>
    </div>
  );
}
