import React from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export const MobileBottomBar = () => {
  const { totalItems, subtotal, openCart } = useCart();
  const location = useLocation();

  // Hide on checkout or order confirmation pages
  const isHiddenRoute = 
    location.pathname === '/checkout' || 
    location.pathname.startsWith('/order-success');

  if (totalItems === 0 || isHiddenRoute) {
    return null;
  }

  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden animate-slide-up">
      <button
        onClick={openCart}
        className="w-full flex items-center justify-between p-3.5 bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white rounded-2xl shadow-2xl shadow-red-900/40 border border-amber-400/30 active:scale-98 transition-all"
        aria-label="View Cart"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-xs">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-red-700 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-extrabold shadow">
              {totalItems}
            </span>
          </div>
          <div className="text-left">
            <p className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in cart
            </p>
            <p className="font-display font-black text-base text-white leading-tight">
              {formatCurrency(subtotal)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-white text-stone-900 px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-md">
          <span>View Cart</span>
          <ArrowRight className="w-3.5 h-3.5 text-red-600" />
        </div>
      </button>
    </div>
  );
};
