import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          Shop<span className="text-blue-600">Ease</span>
        </h1>
        
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors focus:outline-none"
        >
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}