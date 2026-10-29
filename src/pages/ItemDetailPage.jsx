import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingBag, Sparkles, Flame, Check } from 'lucide-react';
import menuData from '../data/menu.json';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

const AVAILABLE_ADD_ONS = [
  { id: 'dip-garlic-mayo', name: 'Garlic Mayo Dip', price: 40 },
  { id: 'dip-dynamite', name: 'Dynamite Sauce', price: 40 },
  { id: 'dip-cheese', name: 'Extra Cheese Slice', price: 60 },
  { id: 'dip-jalapeno', name: 'Jalapeno Sauce', price: 40 },
];

export const ItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const item = menuData.find((m) => m.id === id);

  const [selectedVariant, setSelectedVariant] = useState(
    item && item.variants && item.variants.length > 0 ? item.variants[0] : null
  );
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-4">
        <h2 className="text-2xl font-display font-bold text-stone-900">Item Not Found</h2>
        <p className="text-sm text-stone-500">We couldn't find the dish you're looking for.</p>
        <Link to="/menu" className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm shadow">
          Explore Menu
        </Link>
      </div>
    );
  }

  const basePrice = selectedVariant ? selectedVariant.price : item.price;
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = basePrice + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  const toggleAddOn = (addon) => {
    setSelectedAddOns((prev) => {
      const exists = prev.some((a) => a.id === addon.id);
      return exists ? prev.filter((a) => a.id !== addon.id) : [...prev, addon];
    });
  };

  const handleAddToCart = () => {
    addToCart(item, quantity, selectedVariant, selectedAddOns);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 800);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Menu
        </button>

        <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Media Column */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] lg:aspect-auto bg-stone-900">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
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
          </div>

          {/* Details & Customization Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 block">
                  {item.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-display font-black text-stone-900 mt-1">
                  {item.name}
                </h1>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* Variants */}
              {item.variants && item.variants.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-stone-100">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Choose Size / Variant:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {item.variants.map((v) => {
                      const isSel = selectedVariant?.label === v.label;
                      return (
                        <button
                          key={v.label}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`p-3 rounded-2xl border text-left transition-all ${
                            isSel
                              ? 'border-red-600 bg-red-50 text-red-900 ring-2 ring-red-600/20'
                              : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          <p className="text-xs font-bold">{v.label}</p>
                          <p className="text-sm font-black text-stone-900 mt-0.5">{formatCurrency(v.price)}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Add-ons */}
              <div className="space-y-2.5 pt-3 border-t border-stone-100">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  Add Sauces & Dips (Optional):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {AVAILABLE_ADD_ONS.map((addon) => {
                    const isChecked = selectedAddOns.some((a) => a.id === addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddOn(addon)}
                        className={`flex items-center justify-between p-3 rounded-2xl border text-xs font-bold transition-all ${
                          isChecked
                            ? 'border-amber-500 bg-amber-50 text-stone-900'
                            : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked ? 'bg-amber-500 border-amber-500 text-stone-950' : 'border-stone-300'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{addon.name}</span>
                        </div>
                        <span className="font-extrabold text-stone-900">+{formatCurrency(addon.price)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stepper & Add Button */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center bg-stone-100 rounded-2xl p-1 border border-stone-200">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  disabled={quantity <= 1}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-stone-700 hover:bg-stone-200 disabled:opacity-40 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-display font-extrabold text-base text-stone-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-stone-700 hover:bg-stone-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full sm:w-auto flex-1 flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-white shadow-xl transition-all ${
                  isAdded
                    ? 'bg-emerald-600'
                    : 'bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:shadow-red-600/30 active:scale-95'
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
      </div>
    </div>
  );
};
