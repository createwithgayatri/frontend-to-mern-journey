import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { PRODUCTS } from './data/product';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        
        <main className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Trending Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        <Cart />
      </div>
    </CartProvider>
  );
}