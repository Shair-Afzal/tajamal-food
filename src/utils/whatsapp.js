import { CONFIG } from '../config';
import { formatCurrency } from './formatters';

/**
 * Generate a prefilled WhatsApp link with the full order details
 * @param {Object} order - Full order object
 * @returns {string} - WhatsApp direct URL
 */
export const createWhatsAppOrderLink = (order) => {
  const {
    orderNumber = 'NEW',
    customerName = '',
    phone = '',
    address = '',
    orderType = 'Delivery',
    paymentMethod = 'Cash on Delivery',
    notes = '',
    items = [],
    subtotal = 0,
    deliveryFee = 0,
    total = 0,
  } = order;

  let message = `🍗 *NEW ORDER - ${CONFIG.shopName.toUpperCase()}* 🍗\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  if (orderNumber) message += `📋 *Order ID:* #${orderNumber}\n`;
  message += `👤 *Customer:* ${customerName || 'Guest'}\n`;
  message += `📞 *Phone:* ${phone}\n`;
  message += `🚚 *Order Type:* ${orderType}\n`;
  if (orderType === 'Delivery' && address) {
    message += `📍 *Delivery Address:* ${address}\n`;
  }
  if (notes) {
    message += `📝 *Special Instructions:* ${notes}\n`;
  }
  message += `\n🛒 *ITEMS ORDERED:*\n`;

  items.forEach((item, index) => {
    const variantText = item.selectedVariant ? ` (${item.selectedVariant.label})` : '';
    const addOnsText = item.addOns && item.addOns.length > 0 
      ? ` + [${item.addOns.map(a => a.name).join(', ')}]` 
      : '';
    const itemTotal = (item.unitPrice || item.price) * item.quantity;
    message += `${index + 1}. *${item.name}*${variantText}${addOnsText}\n`;
    message += `   Qty: ${item.quantity} × ${formatCurrency(item.unitPrice || item.price)} = *${formatCurrency(itemTotal)}*\n`;
  });

  message += `\n💰 *PAYMENT BREAKDOWN:*\n`;
  message += `Subtotal: ${formatCurrency(subtotal)}\n`;
  if (orderType === 'Delivery') {
    message += `Delivery Fee: ${deliveryFee === 0 ? 'FREE' : formatCurrency(deliveryFee)}\n`;
  }
  message += `*TOTAL AMOUNT: ${formatCurrency(total)}*\n`;
  message += `Payment Method: ${paymentMethod}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Sent via TFC Online Website_`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
};

/**
 * Generate a generic inquiry WhatsApp link
 * @param {string} text 
 * @returns {string}
 */
export const createWhatsAppInquiryLink = (text = 'Hello TFC! I would like to inquire about your menu.') => {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
