
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1594041680534-e8c9c2761aef?auto=format&fit=crop&q=80&w=2400"
          alt="Prime Cut Steak"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 bg-gradient-to-b from-stone-900/80 via-transparent to-stone-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-900/40 border border-red-800/60 text-red-200 text-xs font-bold tracking-[0.2em] uppercase">
              Est. 1978 • {BUSINESS_INFO.yearsInBusiness} Years of Tradition
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Western <br />
              <span className="text-amber-400">Sirloin</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-200 font-serif italic max-w-lg">
              "{BUSINESS_INFO.tagline}"
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-800 hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1"
              >
                View Our Menu
              </button>
              <button
                onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent hover:bg-white/10 text-white border border-white/50 px-10 py-5 rounded-sm font-bold text-lg transition-all"
              >
                Guest Reviews
              </button>
            </div>
          </div>

          {/* Quick Info Panel */}
          <div className="hidden lg:block animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="bg-stone-900/40 backdrop-blur-md border border-white/10 p-10 rounded-lg space-y-8">
              <div className="space-y-2">
                <h3 className="text-amber-400 text-xs font-bold uppercase tracking-widest">Open Today</h3>
                <p className="text-2xl font-serif">{BUSINESS_INFO.hours["Tue - Sun"]}</p>
                <p className="text-stone-400 text-sm italic">*Closed Mondays</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-amber-400 text-xs font-bold uppercase tracking-widest">Location</h3>
                <p className="text-2xl font-serif">{BUSINESS_INFO.address}</p>
                <p className="text-stone-400 text-sm">Moulton, Alabama 35650</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-stone-300">Call for Reservations or Takeout:</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-3xl font-bold text-white hover:text-amber-400 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center opacity-70">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;
