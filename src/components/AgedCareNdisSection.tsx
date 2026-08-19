import React from 'react';
import {
  ShieldCheck,
  FileText,
  Phone,
  Star,
  ArrowRight,
  UserCheck
} from 'lucide-react';

import sectionImage from '../assets/images/section.png';

interface AgedCareNdisSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const AgedCareNdisSection: React.FC<AgedCareNdisSectionProps> = ({
  onOpenQuote
}) => {
  return (
    <section
      id="agedcare"
      className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">

            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-950 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black">
              <ShieldCheck className="w-4 h-4 text-orange-600" />

              <span>
                Seniors, Pensioners & NDIS Home Modifications
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Safe, Independent Living for Seniors & NDIS Participants
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            {/* Senior Discount */}
            <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r-2xl">
              <div className="flex items-center gap-2 text-slate-950 font-black text-base sm:text-lg">
                <Star className="w-5 h-5 fill-orange-500 text-orange-500 shrink-0" />

                <span>
                  10% Pensioner & Senior Discount on All Labour
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio praesent libero sed cursus ante dapibus diam.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <FileText className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />

                <div>
                  <div className="text-sm font-bold text-slate-900">
                    NDIS Invoice Ready
                  </div>

                  <div className="text-xs text-slate-600 mt-0.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    line-item tax invoices.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <UserCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />

                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Police Checked & WWCC
                  </div>

                  <div className="text-xs text-slate-600 mt-0.5">
                    Vestibulum lacinia arcu eget nulla class aptent taciti
                    sociosqu ad litora.
                  </div>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">

              <a
                href="tel:0417755001"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black px-6 py-3.5 rounded-xl text-base shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />

                <span>
                  Call Darren: 0417 755 001
                </span>
              </a>

              <button
                onClick={() =>
                  onOpenQuote('Bathroom Grab Rails & Aged Care Safety')
                }
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-sm cursor-pointer transition-colors"
              >
                <span>
                  Request Safety Quote
                </span>

                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>

            </div>

          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full">

              {/* Decorative Background */}
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-70 pointer-events-none"></div>

              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-slate-200 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200 bg-slate-100">
                <img
                  src={sectionImage}
                  alt="Seniors and NDIS home modification handyman services"
                  className="w-full h-auto lg:min-h-[520px] lg:max-h-[620px] object-cover"
                  loading="lazy"
                />

                {/* Bottom Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none"></div>

                {/* Image Badge */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <ShieldCheck className="w-5 h-5 text-orange-600" />

                    <div>
                      <div className="text-sm font-black text-slate-950">
                        Safe Home Modifications
                      </div>

                      <div className="text-xs text-slate-600">
                        Seniors • Pensioners • NDIS
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
