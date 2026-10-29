import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, Sparkles, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';
import { createWhatsAppOrderLink } from '../utils/whatsapp';
import { CONFIG } from '../config';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
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

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    closeCart();
    navigate('/checkout');
  };

  const handleQuickWhatsApp = () => {
    const quickOrder = {
      orderNumber: 'QUICK-CART',
      customerName: 'Customer',
      phone: 'Via WhatsApp',
      address: 'Delivery address to be confirmed in chat',
      orderType: 'Delivery',
      paymentMethod: 'Cash on Delivery',
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
    };
    window.open(createWhatsAppOrderLink(quickOrder), '_blank');
  };

  const freeDeliveryPercent = Math.min(
    100,
    Math.round((subtotal / CONFIG.freeDeliveryThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-stone-900 leading-tight">
                  Your Order Cart
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Goal Tracker */}
          {cartItems.length > 0 && (
            <div className="bg-amber-50/80 border-b border-amber-200/60 px-5 py-3">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                {isFreeDelivery ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Unlocked FREE Delivery!
                  </span>
                ) : (
                  <span className="text-amber-900">
                    Add <strong className="text-red-700">{formatCurrency(amountNeededForFreeDelivery)}</strong> more for FREE Delivery!
                  </span>
                )}
                <span className="text-stone-500">{freeDeliveryPercent}%</span>
              </div>
              <div className="w-full h-2 bg-amber-200/60 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    isFreeDelivery ? 'bg-emerald-500' : 'bg-gradient-to-r from-red-500 to-amber-500'
                  }`}
                  style={{ width: `${freeDeliveryPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-stone-900">
                    Your Cart is Hungry!
                  </h4>
                  <p className="text-sm text-stone-500 mt-1 max-w-xs">
                    Explore our crispy burgers, cheesy pizzas and mega deals to add your favorites.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/menu');
                  }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-lg hover:shadow-red-600/30 transition-all"
                >
                  Explore Food Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Order Items
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="flex gap-3 p-3 bg-stone-50/70 rounded-2xl border border-stone-200/80 transition-all hover:bg-stone-50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-18 h-18 rounded-xl object-cover shrink-0 bg-stone-200"
                    />

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-display font-bold text-sm text-stone-900 truncate">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-stone-400 hover:text-red-600 p-0.5 rounded transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Variant and Add-ons tags */}
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.selectedVariant && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-stone-200 text-stone-800">
                              {item.selectedVariant.label}
                            </span>
                          )}
                          {item.addOns && item.addOns.map((addon) => (
                            <span
                              key={addon.id}
                              className="px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-amber-100 text-amber-900"
                            >
                              +{addon.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quantity & Unit Price */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/60">
                        <div className="flex items-center bg-white rounded-lg border border-stone-200 p-0.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-display font-extrabold text-sm text-stone-900">
                          {formatCurrency(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer Summary & Checkout CTAs */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 space-y-3.5">
              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 font-bold uppercase text-xs">FREE</span>
                    ) : (
                      <span className="font-semibold text-stone-900">{formatCurrency(deliveryFee)}</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-stone-200 text-stone-900">
                  <span className="font-display font-bold text-base">Grand Total</span>
                  <span className="font-display font-black text-xl text-red-600">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleCheckoutClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-sm shadow-xl shadow-red-600/25 active:scale-98 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleQuickWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Order via WhatsApp</span>
                </button>

                <div className="text-center">
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="text-xs text-stone-500 hover:text-red-600 font-semibold underline"
                  >
                    View Full Cart Page
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
