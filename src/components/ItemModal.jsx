import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Sparkles, Flame, Check } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';

// Popular dips/add-ons from menu flyer
const AVAILABLE_ADD_ONS = [
  { id: 'dip-garlic-mayo', name: 'Garlic Mayo Dip', price: 40 },
  { id: 'dip-dynamite', name: 'Dynamite Sauce', price: 40 },
  { id: 'dip-cheese', name: 'Extra Cheese Slice', price: 60 },
  { id: 'dip-jalapeno', name: 'Jalapeno Sauce', price: 40 },
];

export const ItemModal = ({ item, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Initialize variant when item changes
  useEffect(() => {
    if (item) {
      if (item.variants && item.variants.length > 0) {
        setSelectedVariant(item.variants[0]);
      } else {
        setSelectedVariant(null);
      }
      setSelectedAddOns([]);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [item]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const basePrice = selectedVariant ? selectedVariant.price : item.price;
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = basePrice + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  const toggleAddOn = (addon) => {
    setSelectedAddOns((prev) => {
      const exists = prev.some((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const handleAddToCart = () => {
    addToCart(item, quantity, selectedVariant, selectedAddOns);
    setIsAdded(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative aspect-[16/10] w-full bg-stone-900 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex gap-2">
            {item.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-stone-950 flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" /> {item.badge}
              </span>
            )}
            {item.isSpicy && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white flex items-center gap-1 shadow-lg">
                <Flame className="w-3.5 h-3.5" /> Spicy
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
              {item.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black leading-tight">
              {item.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {item.description}
          </p>

          {item.includes && item.includes.length > 0 && (
            <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/70 space-y-1.5">
              <span className="text-xs font-bold text-amber-900 block uppercase tracking-wider">
                Deal Package Includes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.includes.map((inc, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white text-stone-800 border border-amber-200 shadow-sm"
                  >
                    ✓ {inc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Variants Selection */}
          {item.variants && item.variants.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-stone-100">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-sm text-stone-900 uppercase tracking-wider">
                  Choose Size / Variant
                </h4>
                <span className="text-xs text-red-600 font-semibold">Required</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {item.variants.map((variant) => {
                  const isSelected = selectedVariant?.label === variant.label;
                  return (
                    <button
                      key={variant.label}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-red-600 bg-red-50/70 ring-2 ring-red-600/20'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                      }`}
                    >
                      <span className={`text-xs font-bold ${isSelected ? 'text-red-700' : 'text-stone-800'}`}>
                        {variant.label}
                      </span>
                      <span className="text-sm font-black text-stone-900 mt-1">
                        {formatCurrency(variant.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add-on extras */}
          <div className="space-y-3 pt-2 border-t border-stone-100">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-sm text-stone-900 uppercase tracking-wider">
                Add Dips & Extra Sauces
              </h4>
              <span className="text-xs text-stone-400">Optional</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AVAILABLE_ADD_ONS.map((addon) => {
                const isChecked = selectedAddOns.some((a) => a.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddOn(addon)}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                      isChecked
                        ? 'border-amber-500 bg-amber-50/70 text-stone-900'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-amber-500 border-amber-500 text-stone-950' : 'border-stone-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-bold">{addon.name}</span>
                    </div>
                    <span className="text-xs font-extrabold text-stone-900">
                      +{formatCurrency(addon.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center bg-white rounded-2xl border border-stone-200 p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
              disabled={quantity <= 1}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center font-display font-extrabold text-base text-stone-900">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full sm:w-auto flex-1 flex items-center justify-between px-6 py-3.5 rounded-2xl font-bold text-white shadow-xl transition-all ${
              isAdded
                ? 'bg-emerald-600'
                : 'bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:shadow-red-600/30 active:scale-98'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>{isAdded ? 'Added to Cart!' : 'Add to Order'}</span>
            </div>
            <span className="font-display font-black text-lg">
              {formatCurrency(totalPrice)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
