import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Home, Compass } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-stone-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xl text-center space-y-6">
        <div className="relative inline-block">
          <span className="text-8xl sm:text-9xl font-display font-black text-amber-100 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">🍗</span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-900">
            Lost in the Flavor?
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed">
            The page you're searching for might have been eaten or never existed. 
            Don't worry, delicious burgers and cheesy pizzas are waiting for you!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <Link
            to="/menu"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
