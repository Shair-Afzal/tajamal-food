import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';
import { createWhatsAppOrderLink } from '../utils/whatsapp';
import { CONFIG } from '../config';

export const CartPage = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    isFreeDelivery,
    amountNeededForFreeDelivery,
    total,
    totalItems,
  } = useCart();

  const navigate = useNavigate();

  const handleQuickWhatsApp = () => {
    const quickOrder = {
      orderNumber: 'QUICK-CART',
      customerName: 'Customer',
      phone: 'Via WhatsApp',
      address: 'Address to be confirmed in WhatsApp chat',
      orderType: 'Delivery',
      paymentMethod: 'Cash on Delivery',
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
    };
    window.open(createWhatsAppOrderLink(quickOrder), '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-5">
        <div className="w-24 h-24 rounded-full bg-red-100/70 text-red-600 flex items-center justify-center">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <div>
          <h1 className="text-3xl font-display font-black text-stone-900">
            Your Cart is Empty
          </h1>
          <p className="text-sm text-stone-500 mt-2">
            Looks like you haven't added any crispy goodness yet. Discover our gourmet burgers, cheesy pizzas and family deals!
          </p>
        </div>
        <Link
          to="/menu"
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-xl shadow-red-600/30 hover:scale-105 active:scale-95 transition-all"
        >
          Explore Food Menu
        </Link>
      </div>
    );
  }

  const freeDeliveryPercent = Math.min(
    100,
    Math.round((subtotal / CONFIG.freeDeliveryThreshold) * 100)
  );

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-6 border-b border-stone-200">
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-stone-900">
              Shopping Cart
            </h1>
            <p className="text-sm text-stone-500 mt-1">
              Review your items and proceed to fast home delivery
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs sm:text-sm text-red-600 hover:text-red-700 font-bold flex items-center gap-1.5"
          >
            <Trash2 className="w-4 h-4" /> Clear Cart
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items Table / List */}
          <div className="lg:col-span-8 space-y-4">
            {/* Free Delivery Banner */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-sm font-bold text-emerald-800">Free Home Delivery Included! 🎉</p>
                <p className="text-xs text-emerald-700">All orders delivered free within Lahore.</p>
              </div>
            </div>

            {/* Items Card List */}
            {cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover bg-stone-100 shrink-0"
                  />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-stone-900">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.selectedVariant && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-stone-100 text-stone-800">
                          {item.selectedVariant.label}
                        </span>
                      )}
                      {item.addOns && item.addOns.map((addon) => (
                        <span
                          key={addon.id}
                          className="px-2 py-0.5 rounded-md text-xs font-medium bg-amber-100 text-amber-900"
                        >
                          +{addon.name}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-stone-500 block mt-1">
                      Unit: {formatCurrency(item.unitPrice)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                  {/* Quantity Stepper */}
                  <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-200 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-stone-800">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-200 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Total item price */}
                  <div className="text-right min-w-[90px]">
                    <span className="font-display font-black text-lg text-stone-900 block">
                      {formatCurrency(item.unitPrice * item.quantity)}
                    </span>
                  </div>

                  {/* Delete Item */}
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="p-2 text-stone-400 hover:text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-md space-y-6">
              <h3 className="font-display font-black text-xl text-stone-900 pb-3 border-b border-stone-100">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Items Subtotal ({totalItems})</span>
                  <span className="font-bold text-stone-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold py-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Home Delivery Included</span>
                </div>
                <div className="flex justify-between items-baseline pt-3 border-t border-stone-200 text-stone-900">
                  <span className="font-display font-bold text-lg">Total Amount</span>
                  <span className="font-display font-black text-2xl text-red-600">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/checkout')}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-sm shadow-xl shadow-red-600/30 active:scale-98 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleQuickWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct Order via WhatsApp</span>
                </button>

                <Link
                  to="/menu"
                  className="block text-center text-xs text-stone-500 hover:text-stone-800 font-semibold pt-1"
                >
                  ← Continue Ordering Food
                </Link>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-3 text-xs text-stone-500">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Cash on Delivery available on all orders in Lahore.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
