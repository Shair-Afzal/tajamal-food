import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, Clock, Flame } from 'lucide-react';
import { CONFIG } from '../config';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, subtotal, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Deals & Combos', path: '/menu?category=Deals' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-red-900 via-amber-800 to-red-900 text-amber-100 text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-semibold text-white tracking-wide">
              🔥 Free Delivery over 3km nearby branch  in Lahore!
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-amber-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {CONFIG.openingHours.time}
            </span>
            <a 
              href={`tel:${CONFIG.phone}`} 
              className="flex items-center gap-1.5 text-white hover:text-amber-300 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          isScrolled ? 'shadow-md border-stone-200 py-2.5' : 'border-stone-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Tajamal Fried Chicken Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-red-700 font-display leading-tight flex items-center gap-1">
                TAJAMAL <span className="text-amber-500">CHICKEN</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-amber-700">
                Taste Jo Deewana Karde
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-red-700 bg-red-50/80 font-bold'
                      : 'text-stone-700 hover:text-red-600 hover:bg-stone-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Icons: Cart & Call */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${CONFIG.phone}`}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Call to Order</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={openCart}
              id="navbar-cart-button"
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-red-700 font-black text-[11px] h-5 w-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold text-sm">
                {totalItems > 0 ? formatCurrency(subtotal) : 'Cart'}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-stone-700 hover:text-red-600 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-red-50 text-red-700 font-bold'
                        : 'text-stone-700 hover:bg-stone-50 hover:text-red-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-stone-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-stone-100 text-stone-800 font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-red-600" /> Call {CONFIG.phone}
                </a>
                <Link
                  to="/menu"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md"
                >
                  <Flame className="w-4 h-4" /> Order Online Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
