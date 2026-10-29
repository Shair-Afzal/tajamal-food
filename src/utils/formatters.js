import { CONFIG } from '../config';

/**
 * Format price in PKR currency
 * @param {number} amount
 * @returns {string} e.g. "Rs. 450"
 */
export const formatCurrency = (amount) => {
  const num = Number(amount) || 0;
  return `${CONFIG.currency} ${num.toLocaleString('en-PK')}`;
};

/**
 * Generate a unique random order number
 * @returns {string} e.g. "TFC-8492"
 */
export const generateOrderNumber = () => {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `TFC-${random}`;
};
