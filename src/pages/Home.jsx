import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Truck, 
  ShieldCheck, 
  PhoneCall
} from 'lucide-react';
import menuData from '../data/menu.json';
import { CONFIG } from '../config';
import { ItemCard } from '../components/ItemCard';
import { ItemModal } from '../components/ItemModal';
import { formatCurrency } from '../utils/formatters';

export const Home = () => {
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);

  // Filter featured items
  const featuredItems = menuData.filter((item) => item.featured).slice(0, 8);
  const dealItems = menuData.filter((item) => item.category === 'Deals').slice(0, 4);

  const categories = [
    { name: 'Deals', icon: '🔥', count: menuData.filter(i => i.category === 'Deals').length },
    { name: 'Burgers', icon: '🍔', count: menuData.filter(i => i.category === 'Burgers').length },
    { name: 'Pizzas', icon: '🍕', count: menuData.filter(i => i.category === 'Pizzas').length },
    { name: 'Shawarma', icon: '🌯', count: menuData.filter(i => i.category === 'Shawarma').length },
    { name: 'Parathas', icon: '🫓', count: menuData.filter(i => i.category === 'Parathas').length },
    { name: 'Wraps', icon: '🌮', count: menuData.filter(i => i.category === 'Wraps').length },
    { name: 'Wings & Nuggets', icon: '🍗', count: menuData.filter(i => i.category === 'Wings & Nuggets').length },
    { name: 'Sandwiches', icon: '🥪', count: menuData.filter(i => i.category === 'Sandwiches').length },
    { name: 'Loaded Fries', icon: '🍟', count: menuData.filter(i => i.category === 'Loaded Fries').length },
    { name: 'Simple Fries', icon: '🍟', count: menuData.filter(i => i.category === 'Simple Fries').length },
    { name: 'Dips', icon: '🥫', count: menuData.filter(i => i.category === 'Dips').length },
  ];

  const reviews = [
    {
      name: 'Hamza Tariq',
      area: 'Lahore',
      rating: 5,
      comment: 'The Zinger Burger and Oven Baked Shawarma are on another level! Crispy, juicy, and the spice level is just perfection. Delivered hot and fresh.',
      date: '2 days ago'
    },
    {
      name: 'Ayesha Malik',
      area: 'Ghoray Shah',
      rating: 5,
      comment: 'Best Crown Crust Pizza in the area. Ordered the Family Feast deal for weekend dinner and everyone loved the loaded toppings and saucy wings!',
      date: '1 week ago'
    },
    {
      name: 'Bilal Ahmed',
      area: 'Lahore',
      rating: 5,
      comment: 'Quick WhatsApp ordering and arrived in 30 minutes flat. Cheetos burger is truly addictive. Taste Jo Deewana Karde is 100% accurate!',
      date: '3 days ago'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-950 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
        {/* Background glow and patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              <span>TASTE JO DEEWANA KARDE • LAHORE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.1]">
              Crispiest Fried Chicken & <span className="bg-gradient-to-r from-red-500 via-amber-400 to-amber-500 bg-clip-text text-transparent">Cheesy Pizzas</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hand-breaded fresh daily, bursting with secret spices, and baked to golden perfection. 
              Enjoy Lahore’s favorite burgers, wraps, stuffed shawarmas and mega value deals delivered hot to your doorstep!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-display font-extrabold text-base shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Order Online Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/menu?category=Deals"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-base border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>View Combos & Deals</span>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-stone-800 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-black text-amber-400">100%</p>
                <p className="text-xs text-stone-400 font-medium">Fresh Zabiha Halal</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-black text-white">30 Min</p>
                <p className="text-xs text-stone-400 font-medium">Fast Lahore Delivery</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-black text-red-500">4.9 ★</p>
                <p className="text-xs text-stone-400 font-medium">5,000+ Happy Foodies</p>
              </div>
            </div>
          </div>

          {/* Right Image/Banner Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-stone-700/60 shadow-2xl shadow-red-950/60 group">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
                alt="Signature TFC Burger"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Floating Featured Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-700 text-white shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    Most Popular
                  </span>
                  <p className="font-display font-black text-lg text-white">
                    Double Zinger Deluxe
                  </p>
                  <p className="text-xs text-stone-400">Marinated in signature fiery rub</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400 line-through block">Rs. 600</span>
                  <span className="font-display font-black text-xl text-amber-400">
                    Rs. 540
                  </span>
                </div>
              </div>

              {/* Top floating chef badge */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-red-600/90 backdrop-blur-md text-white text-xs font-black shadow-lg flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span>HOT & CRISPY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 block">
              Craving Something Special?
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-stone-900 mt-1">
              Explore Our Categories
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/menu?category=${encodeURIComponent(cat.name)}`}
              className="group p-4 bg-white rounded-2xl border border-stone-200/80 food-card-shadow text-center flex flex-col items-center justify-center transition-all hover:border-amber-400 hover:bg-amber-50/40"
            >
              <span className="text-3xl sm:text-4xl mb-2 transition-transform group-hover:scale-125 duration-300">
                {cat.icon}
              </span>
              <h3 className="font-display font-bold text-xs sm:text-sm text-stone-900 group-hover:text-red-600 transition-colors">
                {cat.name}
              </h3>
              <span className="text-[10px] text-stone-400 font-medium mt-0.5">
                {cat.count} items
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best-Selling / Featured Items Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Best Sellers
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900">
            Lahore's Top Cravings
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Our most popular and highly rated chicken burgers, artisan pizzas, and shawarma rolls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onQuickView={(it) => setSelectedItemForModal(it)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-lg transition-all"
          >
            <span>See All {menuData.length} Items</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Special Deals & Combos Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white p-6 sm:p-10 lg:p-12 border border-red-900/50 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-wider">
                Unbeatable Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black mt-2">
                Save Big with TFC Combos & Family Deals
              </h2>
              <p className="text-sm text-stone-300 mt-1 max-w-xl">
                Loaded combos with free drinks and sides designed for sharing with friends and family.
              </p>
            </div>
            <Link
              to="/menu?category=Deals"
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-display font-black text-sm shadow-xl transition-all"
            >
              Browse All 9 Deals
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dealItems.map((deal) => (
              <div
                key={deal.id}
                onClick={() => setSelectedItemForModal(deal)}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 hover:border-amber-400 hover:bg-white/15 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full aspect-[4/3] rounded-xl object-cover mb-3"
                  />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block mb-1">
                    {deal.badge || 'Value Deal'}
                  </span>
                  <h4 className="font-display font-bold text-base text-white">
                    {deal.name}
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    {deal.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/10">
                  <span className="font-display font-black text-lg text-amber-400">
                    {formatCurrency(deal.price)}
                  </span>
                  <span className="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg shadow">
                    Order Deal
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 block">
            The TFC Standard
          </span>
          <h2 className="text-3xl font-display font-black text-stone-900 mt-1">
            Why Lahore Loves Tajamal
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-stone-200/80 food-card-shadow text-center space-y-3"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-red-50 to-amber-50 border border-amber-200/50 flex items-center justify-center text-red-600">
                {idx === 0 && <ShieldCheck className="w-7 h-7 text-amber-600" />}
                {idx === 1 && <Flame className="w-7 h-7 text-red-600" />}
                {idx === 2 && <Sparkles className="w-7 h-7 text-amber-500" />}
                {idx === 3 && <Truck className="w-7 h-7 text-emerald-600" />}
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900">
                {feature.title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-amber-50/50 py-16 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block">
              Loved by Foodies
            </span>
            <h2 className="text-3xl font-display font-black text-stone-900 mt-1">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-stone-900 block">{rev.name}</span>
                    <span className="text-stone-400">{rev.area}</span>
                  </div>
                  <span className="text-stone-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Order Quick Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-red-600 to-amber-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-red-600/20">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-2xl sm:text-3xl font-display font-black">
              Craving Late Night Fast Food?
            </h3>
            <p className="text-amber-100 text-sm">
              We deliver late night until 4:00 AM! Call or place order online.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONFIG.phone}`}
              className="px-6 py-3.5 rounded-2xl bg-white text-stone-950 font-bold text-sm shadow-md hover:bg-stone-100 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>{CONFIG.phone}</span>
            </a>
            <Link
              to="/menu"
              className="px-6 py-3.5 rounded-2xl bg-stone-950/40 hover:bg-stone-950/60 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <ItemModal
        item={selectedItemForModal}
        isOpen={Boolean(selectedItemForModal)}
        onClose={() => setSelectedItemForModal(null)}
      />
    </div>
  );
};
