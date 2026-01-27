
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
                alt="Restaurant Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/20"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-stone-900 p-8 rounded-2xl shadow-xl transform rotate-3">
              <div className="text-5xl font-bold">{BUSINESS_INFO.yearsInBusiness}</div>
              <div className="text-sm font-bold uppercase tracking-wider">Years of <br />Excellence</div>
            </div>
          </div>

          <div className="mt-20 lg:mt-0 lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h4 className="text-amber-600 font-bold tracking-widest uppercase text-sm">A Legacy of Taste</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                Crafting Perfect Steaks Since 1978
              </h2>
            </div>

            <p className="text-lg text-stone-600 leading-relaxed">
              Western Sirloin Steakhouse, nestled in the charming town of Moulton, AL, offers a delightful dining experience for steak enthusiasts and food lovers alike. Priding ourselves on experts' cooked steaks, we serve quality cuts paired with fresh, locally-sourced ingredients.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-stone-900">Family Atmosphere</h3>
                <p className="text-stone-500 text-sm">A warm, alcohol-free setting perfect for family dinners and special occasions.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-stone-900">Quality Cuts</h3>
                <p className="text-stone-500 text-sm">We source from local farmers to ensure every bite of beef is fresh and flavorful.</p>
              </div>
            </div>

            <div className="bg-stone-50 p-6 border-l-4 border-amber-400 rounded-r-xl">
              <p className="italic text-stone-700">
                "Whether you're craving a hearty steak or a classic side dish, our menu is sure to satisfy your taste buds. Drop by to enjoy a flavorful meal in a relaxed setting."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
