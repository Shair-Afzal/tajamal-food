import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Phone, 
  MapPin, 
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { CONFIG } from '../config';
import { formatCurrency } from '../utils/formatters';
import { createWhatsAppOrderLink } from '../utils/whatsapp';

export const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const [order, setOrder] = useState(location.state?.order || null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // If not passed in location state, load from localStorage
    if (!order) {
      try {
        const saved = localStorage.getItem('tfc_latest_order');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.orderNumber === orderId) {
            setOrder(parsed);
          }
        }
      } catch (e) {
        console.error('Failed to load order', e);
      }
    }
  }, [order, orderId]);

  if (!order) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-4">
        <CheckCircle2 className="w-16 h-16 text-emerald-500" />
        <h2 className="text-2xl font-display font-bold text-stone-900">
          Order Confirmed!
        </h2>
        <p className="text-sm text-stone-500">
          Your order #{orderId} has been received. Our kitchen is preparing your meal!
        </p>
        <Link
          to="/menu"
          className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm shadow-md"
        >
          Back to Menu
        </Link>
      </div>
    );
  }

  const whatsappUrl = createWhatsAppOrderLink(order);

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(`Order #${order.orderNumber} at ${CONFIG.shopName} - Total: ${formatCurrency(order.total)}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Celebration Header Card */}
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-4 relative overflow-hidden">
          <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white stroke-[2.5]" />
          </div>

          <div>
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider inline-block mb-2">
              Order Confirmed & Received
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-black">
              Thank You, {order.customerName}!
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base mt-2 max-w-lg mx-auto">
              Your order <strong className="text-white underline">#{order.orderNumber}</strong> has been sent to our kitchen. 
              Fresh ingredients are being fried and baked!
            </p>
          </div>

          {/* Prominent WhatsApp Confirmation Button */}
          <div className="pt-4 max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-display font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-6 h-6 fill-stone-950 text-emerald-400" />
              <span>Send Order to WhatsApp Shop</span>
            </a>
            <p className="text-[11px] text-emerald-200 mt-2 font-medium">
              Tap above to send this pre-filled slip directly to TFC Lahore WhatsApp for instant confirmation.
            </p>
          </div>
        </div>

        {/* Estimated Timeline & Status Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-100 text-amber-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-semibold uppercase">Estimated Time</p>
              <p className="text-sm font-black text-stone-900">30 - 45 Mins</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center gap-3">
            <div className="p-3 rounded-xl bg-red-100 text-red-700">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-semibold uppercase">Order Helpline</p>
              <a href={`tel:${CONFIG.phone}`} className="text-sm font-black text-red-600 hover:underline">
                {CONFIG.phone}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-semibold uppercase">Order Type</p>
              <p className="text-sm font-black text-stone-900">{order.orderType}</p>
            </div>
          </div>
        </div>

        {/* Order Receipt Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <div>
              <h3 className="font-display font-black text-xl text-stone-900">
                Order Receipt
              </h3>
              <p className="text-xs text-stone-500">
                Placed on {new Date(order.createdAt).toLocaleDateString('en-PK', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            <button
              onClick={handleCopyOrder}
              className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 font-bold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>
          </div>

          {/* Delivery & Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-stone-50 p-4 rounded-2xl">
            <div>
              <p className="font-bold text-stone-400 uppercase text-[10px] tracking-wider">Customer</p>
              <p className="font-bold text-stone-900 mt-0.5">{order.customerName}</p>
              <p className="text-stone-600">{order.phone}</p>
            </div>
            <div>
              <p className="font-bold text-stone-400 uppercase text-[10px] tracking-wider">Delivery Location</p>
              <p className="font-bold text-stone-900 mt-0.5">{order.address}</p>
              {order.notes && (
                <p className="text-stone-500 italic mt-1">Note: "{order.notes}"</p>
              )}
            </div>
          </div>

          {/* Items breakdown list */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase text-stone-400 tracking-wider">
              Items Ordered
            </h4>
            <div className="divide-y divide-stone-100">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-stone-100 shrink-0"
                    />
                    <div>
                      <h5 className="font-bold text-sm text-stone-900">
                        {item.name}
                      </h5>
                      <div className="flex gap-2 text-xs text-stone-500">
                        <span>Qty: {item.quantity}</span>
                        {item.selectedVariant && <span>• {item.selectedVariant.label}</span>}
                        {item.addOns && item.addOns.length > 0 && (
                          <span>• {item.addOns.map(a => a.name).join(', ')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="font-display font-extrabold text-sm text-stone-900 shrink-0">
                    {formatCurrency(item.unitPrice * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial summary */}
          <div className="pt-4 border-t border-stone-200 space-y-2 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span className="font-semibold text-stone-900">{formatCurrency(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Delivery Charges</span>
              <span>
                {order.deliveryFee === 0 ? (
                  <span className="text-emerald-600 font-bold uppercase text-xs">FREE</span>
                ) : (
                  <span className="font-semibold text-stone-900">{formatCurrency(order.deliveryFee)}</span>
                )}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-3 border-t border-stone-200">
              <span className="font-display font-bold text-lg text-stone-900">Total Paid/Payable</span>
              <span className="font-display font-black text-2xl text-red-600">
                {formatCurrency(order.total)}
              </span>
            </div>
            <div className="flex justify-between text-xs text-stone-500 pt-1">
              <span>Payment Mode</span>
              <span className="font-semibold text-stone-700">{order.paymentMethod}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Resend WhatsApp Slip</span>
            </a>
            <Link
              to="/menu"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Order More Food</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
