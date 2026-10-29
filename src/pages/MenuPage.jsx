import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Flame, Sparkles, X } from 'lucide-react';
import menuData from '../data/menu.json';
import { ItemCard } from '../components/ItemCard';
import { ItemModal } from '../components/ItemModal';
import { CATEGORIES } from '../config';

export const MenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVeg, setFilterVeg] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);
  const [filterDealsOnly, setFilterDealsOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);

  // Sync category with URL query params
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('All');
    }
  }, [categoryParam]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  // Category list based on exact order
  const categories = useMemo(() => {
    return ['All', ...CATEGORIES];
  }, []);

  // Filter & sort logic
  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      // Category filter
      if (activeCategory !== 'All' && item.category !== activeCategory) {
        return false;
      }
      // Deals only filter
      if (filterDealsOnly && item.category !== 'Deals') {
        return false;
      }
      // Veg filter
      if (filterVeg && !item.isVeg) {
        return false;
      }
      // Spicy filter
      if (filterSpicy && !item.isSpicy) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description?.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [activeCategory, filterDealsOnly, filterVeg, filterSpicy, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setFilterVeg(false);
    setFilterSpicy(false);
    setFilterDealsOnly(false);
    setSortBy('default');
    setSearchParams({});
  };

  const hasActiveFilters = 
    activeCategory !== 'All' || 
    searchQuery !== '' || 
    filterVeg || 
    filterSpicy || 
    filterDealsOnly || 
    sortBy !== 'default';

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Menu Header */}
      <div className="bg-stone-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
            <Flame className="w-3.5 h-3.5" /> 100% Fresh & Made to Order
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
            Tajamal Fast Food Menu
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto">
            Choose from authentic crispy fried chicken, cheesy wood-baked pizzas, 
            gourmet burgers, loaded fries and family combo deals.
          </p>
        </div>
      </div>

      {/* Sticky Categories & Search Bar Container */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3">
          {/* Search Box & Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burgers, pizzas, wraps..."
                className="w-full pl-10 pr-9 py-2.5 bg-stone-100 hover:bg-stone-150 focus:bg-white rounded-2xl text-xs sm:text-sm text-stone-900 border border-transparent focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Filter Toggle Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setFilterSpicy(!filterSpicy)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                  filterSpicy
                    ? 'bg-red-600 text-white shadow'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <Flame className="w-3.5 h-3.5" /> Spicy
              </button>

              <button
                type="button"
                onClick={() => setFilterDealsOnly(!filterDealsOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                  filterDealsOnly
                    ? 'bg-amber-500 text-stone-950 shadow font-extrabold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Combos
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold rounded-xl outline-none focus:border-red-500 shrink-0 cursor-pointer"
              >
                <option value="default">Sort: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-xs text-red-600 hover:text-red-700 font-bold px-2 py-1 underline shrink-0"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Sticky Horizontal Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-600/20 scale-[1.02]'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Result Counter & Active Filter Badge */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-bold text-stone-600">
            Showing <span className="text-red-700 font-extrabold">{filteredItems.length}</span> delicious items
            {activeCategory !== 'All' && ` in "${activeCategory}"`}
          </p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-lg mx-auto space-y-4 my-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-50 text-red-600 flex items-center justify-center">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-xl text-stone-900">
              No Food Items Found
            </h3>
            <p className="text-sm text-stone-500">
              We couldn't find any dishes matching your filters. Try clearing your search query or selecting a different category.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onQuickView={(it) => setSelectedItemForModal(it)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick View Customization Modal */}
      <ItemModal
        item={selectedItemForModal}
        isOpen={Boolean(selectedItemForModal)}
        onClose={() => setSelectedItemForModal(null)}
      />
    </div>
  );
};
