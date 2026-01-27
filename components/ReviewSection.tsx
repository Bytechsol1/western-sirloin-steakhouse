
import React from 'react';
import { REVIEWS } from '../constants';

const ReviewSection: React.FC = () => {
  const featuredReview = REVIEWS.find(r => r.isFeatured) || REVIEWS[0];

  return (
    <div className="py-24 bg-[#1a1411] text-stone-300 relative overflow-hidden">
      {/* Decorative Wood-like background element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">Guest Experience</h4>
          <h2 className="text-5xl font-bold text-white font-serif">Testimonials</h2>
        </div>

        {/* Featured Review Spotlight */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-stone-900/50 p-12 md:p-16 rounded-3xl border border-amber-900/30 text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-900 text-white rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H8C9.10457 3 10 3.89543 10 5V15C10 18.3137 7.31371 21 4 21H1ZM3.11803 14H6V11H3V14H3.11803Z" />
              </svg>
            </div>
            
            <div className="flex justify-center space-x-1 mb-8">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-6 h-6 text-amber-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-3xl md:text-4xl font-serif text-white italic leading-relaxed mb-10">
              "{featuredReview.comment}"
            </p>
            
            <div className="space-y-1">
              <h4 className="text-amber-500 font-bold tracking-widest text-lg">{featuredReview.author}</h4>
              <p className="text-stone-500 text-sm">{featuredReview.date}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {REVIEWS.filter(r => !r.isFeatured).map((review) => (
            <div key={review.id} className="bg-white/5 p-8 rounded-lg border border-white/5">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-amber-900/30 text-amber-500 rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-stone-200">{review.author}</h4>
                  <div className="flex text-amber-500 scale-75 origin-left">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-stone-400 font-light italic">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-stone-900 px-8 py-3 rounded-sm font-bold transition-all shadow-xl">
            Leave a Guest Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
