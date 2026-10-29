import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle, Heart, Flame } from 'lucide-react';
import { CONFIG } from '../config';
import { createWhatsAppInquiryLink } from '../utils/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-28 md:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Tajamal Fried Chicken"
                className="h-14 w-auto object-contain bg-white/10 rounded-2xl p-1"
              />
              <div>
                <span className="text-2xl font-black text-white font-display">
                  TAJAMAL <span className="text-amber-500">CHICKEN</span>
                </span>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Taste Jo Deewana Karde
                </p>
              </div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Lahore’s favorite destination for crave-worthy crispy fried chicken, cheesy wood-baked pizzas, 
              stuffed paratha rolls and jumbo family deals.
            </p>
            <div className="pt-2">
              <a
                href={createWhatsAppInquiryLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Menu Categories */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-4 tracking-wide flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500" /> Crave Menu
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/menu?category=Deals" className="hover:text-amber-400 transition-colors">
                  🔥 Value Deals & Combos
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Burgers" className="hover:text-amber-400 transition-colors">
                  🍔 Zinger & Gourmet Burgers
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Pizzas" className="hover:text-amber-400 transition-colors">
                  🍕 Hand-Tossed Cheesy Pizzas
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Shawarma" className="hover:text-amber-400 transition-colors">
                  🌯 Oven Bake Shawarma
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Parathas" className="hover:text-amber-400 transition-colors">
                  🫓 Crispy Paratha Rolls
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Wings%20%26%20Nuggets" className="hover:text-amber-400 transition-colors">
                  🍗 Saucy Wings & Crispy Nuggets
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Service */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-400 transition-colors">
                  Full Food Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  Our Lahore Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact & Map
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-amber-400 transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Address & Timings */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-4 tracking-wide">
              Visit or Order Direct
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  {CONFIG.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <a href={`tel:${CONFIG.phone}`} className="hover:text-amber-400 block font-semibold">
                    {CONFIG.phone}
                  </a>
                  <a href={`tel:${CONFIG.phoneAlt}`} className="hover:text-amber-400 block text-xs text-stone-400">
                    {CONFIG.phoneAlt}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{CONFIG.openingHours.days}</p>
                  <p className="text-xs text-stone-400">{CONFIG.openingHours.time} (Late Night Delivery)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {CONFIG.shopName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-stone-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for fast food lovers in Lahore
          </p>
        </div>
      </div>
    </footer>
  );
};
