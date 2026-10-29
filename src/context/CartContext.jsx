import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CONFIG } from '../config';
import { useToast } from './ToastContext';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'tfc_cart_items_v1';

export const CartProvider = ({ children }) => {
  const { showToast } = useToast();
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse cart items from localStorage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart items to localStorage', e);
    }
  }, [cartItems]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  /**
   * Helper to compute unique cart item key
   */
  const getCartItemId = (itemId, variant, addOns = []) => {
    const variantKey = variant ? variant.label : 'default';
    const addOnsKey = addOns.length > 0 
      ? addOns.map(a => a.id).sort().join('-') 
      : 'none';
    return `${itemId}_${variantKey}_${addOnsKey}`;
  };

  /**
   * Add item to cart with optional variant and add-ons
   */
  const addToCart = (item, quantity = 1, selectedVariant = null, addOns = []) => {
    const addOnsTotal = addOns.reduce((sum, a) => sum + (a.price || 0), 0);
    const basePrice = selectedVariant ? selectedVariant.price : item.price;
    const unitPrice = basePrice + addOnsTotal;
    const cartItemId = getCartItemId(item.id, selectedVariant, addOns);

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((i) => i.cartItemId === cartItemId);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        const newItem = {
          cartItemId,
          id: item.id,
          name: item.name,
          category: item.category,
          image: item.image,
          selectedVariant,
          addOns,
          unitPrice,
          price: unitPrice,
          quantity,
        };
        return [...prevItems, newItem];
      }
    });

    const variantLabel = selectedVariant ? ` (${selectedVariant.label})` : '';
    showToast(`Added ${quantity}× ${item.name}${variantLabel} to cart!`);
  };

  /**
   * Update item quantity
   */
  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  /**
   * Remove item from cart
   */
  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((i) => i.cartItemId === cartItemId);
      if (itemToRemove) {
        showToast(`Removed ${itemToRemove.name} from cart`, 'info');
      }
      return prevItems.filter((i) => i.cartItemId !== cartItemId);
    });
  };

  /**
   * Empty entire cart
   */
  const clearCart = () => {
    setCartItems([]);
  };

  // Computations
  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  }, [cartItems]);

  const isFreeDelivery = true;
  const deliveryFee = 0;
  const amountNeededForFreeDelivery = 0;
  const total = subtotal;

  const value = {
    cartItems,
    isCartOpen,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    deliveryFee,
    isFreeDelivery,
    amountNeededForFreeDelivery,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
