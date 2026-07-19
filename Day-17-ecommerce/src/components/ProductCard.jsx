import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            {product.category}
          </span>
          <h3 className="text-sm font-medium text-gray-800 mt-1 line-clamp-2">
            {product.name}
          </h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus className="w-3.5 h-3.5" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}