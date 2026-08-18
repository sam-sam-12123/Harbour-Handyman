import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { HandymanService } from '../types';
import { CheckCircle2, Clock, DollarSign, ArrowRight, ShieldCheck, Star, X, Phone } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceModal, setActiveServiceModal] = useState<HandymanService | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'repairs', label: 'Repairs & Flyscreens' },
    { id: 'installations', label: 'Mounting & Fixtures' },
    { id: 'agedcare', label: 'Aged Care & Safety' },
    { id: 'bathroom', label: 'Bathrooms & Tiling' },
    { id: 'outdoor', label: 'Decks & Paving' },
    { id: 'commercial', label: 'Rental & Commercial' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            Your One Stop Handyman Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Handyman Services Across Coffs Coast
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                {/* Badges on image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    {service.categoryLabel}
                  </span>
                  {service.popular && (
                    <span className="bg-orange-500 text-black text-[11px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black text-black" /> Popular
                    </span>
                  )}
                  {service.seniorFavorite && (
                    <span className="bg-slate-800 text-orange-400 border border-orange-500/30 text-[11px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Senior Favourite
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-black text-white leading-snug drop-shadow-xs">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Common Tasks bullets */}
                <div className="space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    Common Tasks Done:
                  </div>
                  {service.commonTasks.slice(0, 3).map((task, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{task}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Duration Bar */}
                <div className="flex items-center justify-between text-xs font-semibold pt-2 border-t border-slate-100 text-slate-600">
                  <span className="flex items-center gap-1 text-slate-900 font-bold">
                    <DollarSign className="w-3.5 h-3.5 text-orange-600" /> {service.priceGuide}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {service.typicalTime}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveServiceModal(service)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-xs text-center transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenQuote(service.title)}
                    className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-slate-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Lorem ipsum dolor sit amet consectetur?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:0417755001"
              className="bg-orange-500 hover:bg-orange-400 text-black font-black px-6 py-3.5 rounded-xl text-sm text-center shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0417 755 001</span>
            </a>
            <button
              onClick={() => onOpenQuote('Multiple Small Jobs')}
              className="bg-white hover:bg-slate-100 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm text-center cursor-pointer shadow-md"
            >
              Submit Job List
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-200 my-8">
            <div className="relative h-48 bg-slate-900">
              <img
                src={activeServiceModal.imageUrl}
                alt={activeServiceModal.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="absolute top-3 right-3 text-white bg-slate-900/80 hover:bg-slate-950 p-1.5 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="bg-orange-500 text-black text-[10px] font-black px-2 py-0.5 rounded">
                  {activeServiceModal.categoryLabel}
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {activeServiceModal.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeServiceModal.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  What Darren handles:
                </h4>
                <ul className="space-y-1.5">
                  {activeServiceModal.commonTasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Quality materials & standards:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeServiceModal.materialsUsed.map((m, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg font-medium">
                      &bull; {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-orange-50 rounded-2xl border border-orange-200 flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Indicative Guide: {activeServiceModal.priceGuide}</span>
                <span>Typical Duration: {activeServiceModal.typicalTime}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <a
                href="tel:0417755001"
                className="text-xs font-bold text-slate-700 hover:text-slate-950 py-2 px-3 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" /> 0417 755 001
              </a>
              <button
                onClick={() => {
                  const sTitle = activeServiceModal.title;
                  setActiveServiceModal(null);
                  onOpenQuote(sTitle);
                }}
                className="bg-orange-600 hover:bg-orange-500 text-white font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs cursor-pointer"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
