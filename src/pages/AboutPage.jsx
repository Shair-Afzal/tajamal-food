import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Award, Heart, Users, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Hero Header */}
      <div className="bg-stone-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-red-500" /> Taste Jo Deewana Karde
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight">
            The Story Behind <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">Tajamal Fried Chicken</span>
          </h1>
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Born on the bustling streets of Lahore with one uncompromising obsession: 
            serving the crispiest, juiciest fried chicken and cheesiest hand-tossed pizzas in town.
          </p>
        </div>
      </div>

      {/* Main Story Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Brand Card with Logo Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-50 to-red-50 rounded-3xl border border-amber-200/60">
            <img
              src="/logo.png"
              alt="Tajamal Fried Chicken Chef Logo"
              className="w-48 sm:w-60 h-auto object-contain drop-shadow-lg"
            />
            <p className="font-display font-black text-xl text-stone-900 mt-4 text-center">
              Chef Tajamal's Promise
            </p>
            <p className="text-xs text-amber-800 font-bold uppercase tracking-widest text-center mt-1">
              "Taste Jo Deewana Karde"
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-900">
              Crafted with Passion & Secret Spices
            </h2>
            <p>
              Located opposite the PSO Petrol Pump on Ghoray Shah Road in Lahore, 
              <strong> Tajamal Fried Chicken (TFC)</strong> started with a vision: delicious fast food does not have to cut corners.
            </p>
            <p>
              Every piece of chicken is 100% fresh Zabiha halal, sourced daily from certified farms. 
              Our chicken marinates for 12 hours in Chef Tajamal’s secret rub of 14 natural herbs and spices before being hand-breaded and pressure-fried to seal in maximum tenderness and crunch.
            </p>
            <p>
              From our famous Double Zinger and oven-baked cheese shawarmas to our signature Crown Crust pizzas and crunchy tortilla wraps, we prepare every single order fresh upon request.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Browse Our Menu
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-2xl bg-stone-100 text-stone-800 hover:bg-stone-200 font-bold text-sm transition-all"
              >
                Find Us on Map
              </Link>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="mt-16 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block">
              Our Core Pillars
            </span>
            <h2 className="text-3xl font-display font-black text-stone-900 mt-1">
              What Sets TFC Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900">
                100% Zabiha Halal
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Strict adherence to genuine Zabiha Halal meat protocols, guaranteed fresh cuts every morning with zero compromises.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900">
                Always Hot & Made to Order
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Nothing sits on heat lamps. Our fryers and pizza ovens fire up the moment you place your order so you always get piping hot crunch.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900">
                Midnight Craving Kings
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Open until 3:00 AM every night! Whether it is a study session, late work shift, or late night friends hangout, TFC delivers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
