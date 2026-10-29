import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag, Flame, Eye, Sparkles } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';

export const ItemCard = ({ item, onQuickView }) => {
  const { addToCart } = useCart();
  const hasVariants = item.variants && item.variants.length > 0;
  
  // Default selected variant (first variant if available)
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? item.variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const currentPrice = selectedVariant ? selectedVariant.price : item.price;

  const handleIncrement = (e) => {
    e.stopPropagation();
    setQuantity((q) => q + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(item, quantity, selectedVariant);
    setTimeout(() => setIsAdding(false), 500);
    setQuantity(1); // Reset counter
  };

  return (
    <div
      onClick={() => onQuickView && onQuickView(item)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/80 food-card-shadow flex flex-col justify-between cursor-pointer transition-all duration-300"
    >
      {/* Top Media Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-black/20" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {item.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500 text-stone-950 shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> {item.badge}
            </span>
          )}
          {item.isSpicy && (
            <span className="px-2 py-1 rounded-full text-[11px] font-bold bg-red-600 text-white shadow-md flex items-center gap-0.5">
              <Flame className="w-3 h-3 fill-white" /> Spicy
            </span>
          )}
          {item.isVeg && (
            <span className="px-2 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-md">
              Veg
            </span>
          )}
        </div>

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 bg-black/20 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 text-stone-900 font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-4 h-4 text-red-600" /> Quick View
          </span>
        </div>

        {/* Price Tag Overlay on image */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="px-3 py-1.5 rounded-xl bg-stone-950/85 backdrop-blur-md text-amber-400 font-display font-extrabold text-sm sm:text-base shadow-lg border border-stone-800">
            {formatCurrency(currentPrice)}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-amber-700 block mb-1">
            {item.category}
          </span>
          <h3 className="font-display font-bold text-base sm:text-lg text-stone-900 group-hover:text-red-600 transition-colors line-clamp-1">
            {item.name}
          </h3>
          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {item.includes && item.includes.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2.5">
              {item.includes.map((inc, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200/70"
                >
                  ✓ {inc}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Variants Selector (if any) */}
        <div className="mt-4 pt-3 border-t border-stone-100 space-y-3">
          {hasVariants && (
            <div className="space-y-1.5" onClick={(e) => e.stopPropagation()}>
              <label className="text-[11px] font-semibold text-stone-400 block">
                Select Option:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {item.variants.map((v) => (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                      selectedVariant?.label === v.label
                        ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-600/30'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Row: Quantity + Add to Cart */}
          <div className="flex items-center justify-between gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
            {/* Quantity stepper */}
            <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200">
              <button
                type="button"
                onClick={handleDecrement}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-200 transition-colors disabled:opacity-40"
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-7 text-center font-bold text-xs text-stone-800">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-200 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all active:scale-95 ${
                isAdding
                  ? 'bg-emerald-600'
                  : 'bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 hover:shadow-lg'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isAdding ? 'Added!' : 'Add'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
