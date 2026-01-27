
import React, { useState } from 'react';
// Fix: Added BUSINESS_INFO to imports
import { MENU_ITEMS, BUSINESS_INFO } from '../constants';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const categories: MenuItem['category'][] = ['Steaks', 'Seafood', 'Chicken', 'Appetizers', 'Sides', 'Desserts'];
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('Steaks');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-red-800 font-bold tracking-[0.3em] uppercase text-xs">A Culinary Tradition</h4>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 font-serif">The Dining Room Menu</h2>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="h-px w-12 bg-stone-300"></div>
            <div className="text-amber-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="h-px w-12 bg-stone-300"></div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-sm font-bold tracking-widest uppercase border transition-all ${activeCategory === cat
                  ? 'bg-red-900 border-red-900 text-white'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-x-20 lg:gap-y-12 animate-in fade-in duration-500">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 pt-2">
                <div className="flex justify-between items-baseline mb-2 border-b border-dotted border-stone-300 pb-1">
                  <h3 className="text-xl font-bold text-stone-900 font-serif group-hover:text-red-800 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-red-900 font-bold ml-4">{item.price}</span>
                </div>
                <p className="text-stone-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-white border border-stone-200 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-serif text-stone-900 mb-4">Planning a private event?</h3>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8 font-light">
            With over 46 years in business, we specialize in large family gatherings and local events.
            Our alcohol-free atmosphere provides a comfortable setting for all ages.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-block border-2 border-stone-900 px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all"
          >
            Call for Inquiries
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
