import React from 'react';
import { MapPin, CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COFFS_COAST_SUBURBS } from '../data/suburbsData';

interface ServiceAreaCheckerProps {
  onOpenQuote: (service?: string, initialData?: any) => void;
}

export const ServiceAreaChecker: React.FC<ServiceAreaCheckerProps> = ({ onOpenQuote }) => {
  const centralSuburbs = COFFS_COAST_SUBURBS.filter(s => s.zone === 'Central Coffs Coast');
  const northernSuburbs = COFFS_COAST_SUBURBS.filter(s => s.zone === 'Northern Beaches');
  const southernSuburbs = COFFS_COAST_SUBURBS.filter(s => s.zone === 'Southern Suburbs & Coast');
  const valleySuburbs = COFFS_COAST_SUBURBS.filter(s => s.zone === 'Inland & Valley');

  return (
    <section id="areas" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            Local Coffs Coast 30km Radius
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Serving Coffs Harbour & Surrounding Towns
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Locally based at 17B Tranquility Drive, Coffs Harbour. We service all suburbs within 30km with $0 travel callout fees for standard quote consultations.
          </p>
        </div>

        {/* Suburbs Grid by Region */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Central */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-900 font-black text-base">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <h3>Coffs Central</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {centralSuburbs.map(s => (
                <li key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> {s.name}
                  </span>
                  <span className="text-xs text-slate-400">({s.postcode})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Northern Beaches */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-900 font-black text-base">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <h3>Northern Beaches</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {northernSuburbs.map(s => (
                <li key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> {s.name}
                  </span>
                  <span className="text-xs text-slate-400">({s.postcode})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Southern Coast */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-900 font-black text-base">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <h3>Southern Suburbs</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {southernSuburbs.map(s => (
                <li key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> {s.name}
                  </span>
                  <span className="text-xs text-slate-400">({s.postcode})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Valleys & Inland */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-900 font-black text-base">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <h3>Inland & Valleys</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {valleySuburbs.map(s => (
                <li key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> {s.name}
                  </span>
                  <span className="text-xs text-slate-400">({s.postcode})</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Quick Call Out Banner */}
        <div className="mt-8 bg-slate-950 text-white rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-lg">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-orange-400 shrink-0" />
            <div>
              <h4 className="font-black text-lg text-white">Need a Handyman on the Coffs Coast?</h4>
              <p className="text-sm text-slate-300">Darren McIntyre travels 30km daily with transparent, honest upfront quotes.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="tel:0417755001"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-black px-5 py-3 rounded-xl text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0417 755 001</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-black px-5 py-3 rounded-xl text-sm shadow-md cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 text-orange-600" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
