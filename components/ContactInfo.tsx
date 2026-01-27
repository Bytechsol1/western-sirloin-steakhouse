
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const ContactInfo: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-4">
            <h4 className="text-red-800 font-bold tracking-widest uppercase text-sm">Visit Us</h4>
            <h2 className="text-5xl font-bold text-stone-900">Location & Hours</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-red-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold text-stone-900">Address</h3>
              </div>
              <p className="text-stone-600 pl-9">
                {BUSINESS_INFO.address}<br />
                {BUSINESS_INFO.cityState}
              </p>
              <div className="flex items-center space-x-3 text-red-800 pt-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-xl font-bold text-stone-900">Phone</h3>
              </div>
              <p className="text-stone-600 pl-9">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-red-800 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-red-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-stone-900">Hours</h3>
              </div>
              <ul className="pl-9 space-y-2 text-stone-600">
                {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                  <li key={day} className="flex justify-between max-w-[200px]">
                    <span className="font-bold">{day}</span>
                    <span className={hours === 'Closed' ? 'text-red-600 font-bold' : ''}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[450px] bg-stone-200 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
          {/* Placeholder for real Google Map */}
          <div className="absolute inset-0 bg-stone-300 flex flex-col items-center justify-center space-y-4">
            <svg className="w-16 h-16 text-stone-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className="text-center">
               <p className="text-stone-600 font-bold">{BUSINESS_INFO.address}</p>
               <p className="text-stone-500 text-sm">Moulton, Alabama</p>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address + ' ' + BUSINESS_INFO.cityState)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-stone-800 transition-colors"
            >
              Get Real Directions
            </a>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
            alt="Map Preview" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
