
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 bg-wood-pattern text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold font-serif text-white">Western Sirloin Steakhouse</h3>
            <p className="max-w-md leading-relaxed">
              Serving the community of Moulton and the surrounding hills with the finest cuts of beef and authentic Southern hospitality for over 46 years.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={BUSINESS_INFO.website} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-stone-900 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-stone-900 transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Our History</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">The Menu</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Read Reviews</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Policies</h4>
            <ul className="space-y-4">
              <li>Alcohol-Free Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Reservation Info</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Western Sirloin Steakhouse. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-[10px] font-bold">VISA</span>
              <span className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-[10px] font-bold">AMEX</span>
              <span className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-[10px] font-bold">MC</span>
            </div>
            <p className="text-sm">Moulton, AL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
