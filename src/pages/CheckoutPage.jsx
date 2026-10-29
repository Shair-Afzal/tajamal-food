import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Store, 
  Banknote, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight,
  AlertCircle,
  Phone,
  User,
  MapPin,
  FileText
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency, generateOrderNumber } from '../utils/formatters';
import { CONFIG } from '../config';

export const CheckoutPage = () => {
  const {
    cartItems,
    subtotal,
    deliveryFee,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    address: '',
    area: 'Ghoray Shah & Surrounding, Lahore',
    orderType: 'Delivery', // 'Delivery' or 'Pickup'
    paymentMethod: 'Cash on Delivery',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, redirect to menu
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-4">
        <ShoppingBag className="w-16 h-16 text-stone-300" />
        <h2 className="text-2xl font-display font-bold text-stone-900">
          Your Cart is Empty
        </h2>
        <p className="text-sm text-stone-500">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          to="/menu"
          className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm shadow-md"
        >
          View Menu
        </Link>
      </div>
    );
  }

  const effectiveDeliveryFee = formData.orderType === 'Pickup' ? 0 : deliveryFee;
  const effectiveTotal = subtotal + effectiveDeliveryFee;

  const validate = () => {
    const newErrors = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid active phone number (e.g. 0314-4308301)';
    }

    if (formData.orderType === 'Delivery') {
      if (!formData.address.trim() || formData.address.trim().length < 5) {
        newErrors.address = 'Please enter your complete delivery street and house address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const orderNumber = generateOrderNumber();
    const orderData = {
      orderNumber,
      customerName: formData.customerName.trim(),
      phone: formData.phone.trim(),
      address: formData.orderType === 'Delivery' ? formData.address.trim() : `Pickup from: ${CONFIG.address}`,
      area: formData.area,
      orderType: formData.orderType,
      paymentMethod: formData.paymentMethod,
      notes: formData.notes.trim(),
      items: cartItems,
      subtotal,
      deliveryFee: effectiveDeliveryFee,
      total: effectiveTotal,
      createdAt: new Date().toISOString(),
    };

    try {
      // Save order to history
      const savedOrders = JSON.parse(localStorage.getItem('tfc_order_history') || '[]');
      savedOrders.unshift(orderData);
      localStorage.setItem('tfc_order_history', JSON.stringify(savedOrders));
      localStorage.setItem('tfc_latest_order', JSON.stringify(orderData));

      // Clear cart
      clearCart();

      // Navigate to confirmation page
      navigate(`/order-success/${orderNumber}`, { state: { order: orderData } });
    } catch (err) {
      console.error('Failed to save order', err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block">
            Final Step
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-stone-900 mt-1">
            Complete Your Food Order
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            Fill in your delivery details below. Fast hot delivery right to your door!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Customer Details Form Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Delivery vs Pickup Selector */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-lg text-stone-900 flex items-center gap-2">
                <span>1. Choose Order Type</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, orderType: 'Delivery' })}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                    formData.orderType === 'Delivery'
                      ? 'border-red-600 bg-red-50/80 text-red-900 ring-2 ring-red-600/20'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${formData.orderType === 'Delivery' ? 'bg-red-600 text-white' : 'bg-stone-100 text-stone-600'}`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Home Delivery</p>
                    <p className="text-xs text-stone-500">To your Lahore address</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, orderType: 'Pickup' })}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                    formData.orderType === 'Pickup'
                      ? 'border-amber-600 bg-amber-50/80 text-amber-950 ring-2 ring-amber-600/20'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${formData.orderType === 'Pickup' ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-600'}`}>
                    <Store className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Self Pickup</p>
                    <p className="text-xs text-stone-500">From Ghoray Shah shop</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Contact & Address Fields */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-lg text-stone-900">
                2. Contact & Delivery Information
              </h3>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. Ali Raza"
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border text-sm text-stone-900 outline-none transition-all ${
                      errors.customerName
                        ? 'border-red-500 ring-2 ring-red-500/20'
                        : 'border-stone-200 focus:border-red-500 focus:bg-white'
                    }`}
                  />
                </div>
                {errors.customerName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.customerName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0314-1234567"
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border text-sm text-stone-900 outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 ring-2 ring-red-500/20'
                        : 'border-stone-200 focus:border-red-500 focus:bg-white'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Street Address (If Delivery) */}
              {formData.orderType === 'Delivery' && (
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Delivery Address & Landmark *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                    <textarea
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="House / Flat No, Street, Nearby Landmark or Sector, Lahore"
                      className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border text-sm text-stone-900 outline-none transition-all ${
                        errors.address
                          ? 'border-red-500 ring-2 ring-red-500/20'
                          : 'border-stone-200 focus:border-red-500 focus:bg-white'
                      }`}
                    />
                  </div>
                  {errors.address && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.address}
                    </p>
                  )}
                </div>
              )}

              {/* Order Notes */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Special Cooking / Delivery Instructions (Optional)
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Extra spicy, no onions, ring doorbell twice"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 outline-none focus:border-red-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-lg text-stone-900">
                3. Payment Method
              </h3>

              <div className="space-y-3">
                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'Cash on Delivery' })}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'Cash on Delivery'
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-600/20'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                      <Banknote className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Cash on Delivery (COD)</p>
                      <p className="text-xs text-stone-500">Pay cash upon rider arrival</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'Cash on Delivery'}
                    onChange={() => {}}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                </label>

                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'JazzCash / EasyPaisa (Online)' })}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'JazzCash / EasyPaisa (Online)'
                      ? 'border-amber-600 bg-amber-50/70 text-amber-950 ring-2 ring-amber-600/20'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">JazzCash / EasyPaisa Transfer</p>
                      <p className="text-xs text-stone-500">Send screenshot via WhatsApp after submit</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'JazzCash / EasyPaisa (Online)'}
                    onChange={() => {}}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-md space-y-5 sticky top-28">
              <h3 className="font-display font-black text-xl text-stone-900 pb-3 border-b border-stone-100">
                Order Review ({cartItems.length} items)
              </h3>

              {/* Mini Item List */}
              <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-stone-800 bg-stone-100 px-2 py-1 rounded-md">
                        {item.quantity}×
                      </span>
                      <div>
                        <p className="font-bold text-stone-900 truncate max-w-[170px]">
                          {item.name}
                        </p>
                        {item.selectedVariant && (
                          <p className="text-[10px] text-stone-400">
                            {item.selectedVariant.label}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="font-bold text-stone-800">
                      {formatCurrency(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 pt-3 border-t border-stone-100 text-xs sm:text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-stone-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Delivery Charges</span>
                  <span>
                    {effectiveDeliveryFee === 0 ? (
                      <span className="text-emerald-600 font-extrabold uppercase text-xs">FREE</span>
                    ) : (
                      <span className="font-bold text-stone-900">{formatCurrency(effectiveDeliveryFee)}</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-stone-200">
                  <span className="font-display font-bold text-base text-stone-900">Total Payable</span>
                  <span className="font-display font-black text-2xl text-red-600">
                    {formatCurrency(effectiveTotal)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-700 hover:to-amber-700 text-white font-display font-bold text-base shadow-xl shadow-red-600/30 active:scale-98 transition-all disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Placing Order...' : 'Confirm & Place Order'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-stone-500 text-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>On confirmation, WhatsApp order slip will be generated automatically!</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
