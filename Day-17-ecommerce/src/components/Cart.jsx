import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    subtotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
          {/* Header */}
          <div className="px-4 py-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" /> Shopping Cart
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* List content */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                <ShoppingCart className="w-16 h-16 stroke-1 mb-2" />
                <p className="text-base font-medium">Your cart is empty</p>
                <p className="text-xs max-w-xs mt-1">Add items from the listing page to see them here.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-white border" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</h4>
                      <p className="text-sm font-bold text-blue-600 mt-0.5">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-gray-100 text-gray-500 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm font-medium text-gray-700 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-gray-100 text-gray-500 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Area Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium shadow-sm transition-colors focus:outline-none">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}