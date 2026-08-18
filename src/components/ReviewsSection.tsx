import React from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Star, CheckCircle2, MapPin } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-950 border border-orange-200 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            Local Reputation & Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Trusted by Coffs Harbour Homeowners & Seniors
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Honest feedback from verified residential and commercial clients across Sawtell, Woolgoolga, Moonee Beach, and Coffs Harbour.
          </p>

          {/* Rating Summary Pill */}
          <div className="mt-4 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-xs border border-slate-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <div className="text-sm font-black text-slate-950">
              5.0 / 5.0 Rating
            </div>
            <span className="text-xs text-slate-500 font-semibold border-l border-slate-200 pl-3">
              100% Local Recommendation
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Stars & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-500" /> Verified Client
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg inline-block">
                  {rev.serviceCategory}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Suburb Footer */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-950 text-orange-400 font-black text-xs flex items-center justify-center shadow-xs">
                  {rev.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{rev.name}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-orange-500" /> {rev.suburb} &bull; {rev.date}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
