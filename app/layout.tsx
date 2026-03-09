import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greathem Lab | Excellence & Technologie",
  description: "Boutique officielle de ressources numériques de haute qualité.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <header className="bg-black text-white p-4 text-center font-bold text-xl">
              GREATHEM LAB
            </header>
            <main>{children}</main>
            <footer className="p-8 text-center text-gray-500 text-sm">
              © 2026 Greathem Lab. Tous droits réservés.
            </body>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
