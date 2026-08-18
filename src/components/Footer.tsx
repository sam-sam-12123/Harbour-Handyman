import React from 'react';
import { Phone, ShieldCheck, MapPin, Mail, Clock, Heart, ArrowUp } from 'lucide-react';
import { COFFS_COAST_SUBURBS } from '../data/suburbsData';
import { HarbourHandymanLogo } from './HarbourHandymanLogo';

interface FooterProps {
  onOpenQuote: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Identity & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start">
              <HarbourHandymanLogo variant="horizontal" theme="dark" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
              Darren McIntyre provides honest, high-standard residential and commercial repairs, aged care & NDIS safety modifications, flyscreens, deck maintenance, and home repairs across Coffs Harbour and surrounding 30km areas.
            </p>

            <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-orange-400">
                <ShieldCheck className="w-4 h-4" /> $20 Million Public Liability Insurance
              </div>
              <div>ABN: 34 422 353 650 &bull; NSW Fair Trading Compliant</div>
              <div>National Police Checked &bull; WWCC Accredited</div>
            </div>
          </div>

          {/* Col 2: Direct Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Darren McIntyre
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="tel:0417755001"
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-black transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400" /> 0417 755 001
              </a>
              <a
                href="mailto:harbourhandymanservices@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-orange-400 shrink-0" /> harbourhandymanservices@gmail.com
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>17B Tranquility Drive, Coffs Harbour NSW 2450</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" /> Mon – Sat: 7:00 AM – 6:00 PM
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                *Serving Coffs Harbour & 30km radius ($0 travel callout for quotes).
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center cursor-pointer shadow-xs transition-colors"
              >
                Request Free Online Quote
              </button>
            </div>
          </div>

          {/* Col 3: Key Core Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={() => onOpenQuote('Flyscreen Replacements & Remeshing')} className="hover:text-white transition-colors cursor-pointer">Flyscreen Remeshing</button></li>
              <li><button onClick={() => onOpenQuote('Bathroom Grab Rails & Fittings')} className="hover:text-white transition-colors cursor-pointer">Grab Rails & Safety</button></li>
              <li><button onClick={() => onOpenQuote('TV Wall Mounting & Bracket Installation')} className="hover:text-white transition-colors cursor-pointer">TV Wall Mounting</button></li>
              <li><button onClick={() => onOpenQuote('Door Replacements & Sticking Doors')} className="hover:text-white transition-colors cursor-pointer">Doors & Locks</button></li>
              <li><button onClick={() => onOpenQuote('Plastering & Drywall Hole Patching')} className="hover:text-white transition-colors cursor-pointer">Gyprock Hole Patching</button></li>
              <li><button onClick={() => onOpenQuote('Shower Screen Replacement & Seals')} className="hover:text-white transition-colors cursor-pointer">Shower Screen Seals</button></li>
              <li><button onClick={() => onOpenQuote('Timber Deck Repairs & Oiling')} className="hover:text-white transition-colors cursor-pointer">Deck Oiling & Sanding</button></li>
              <li><button onClick={() => onOpenQuote('Garden Edging & Pathways')} className="hover:text-white transition-colors cursor-pointer">Paving & Pathways</button></li>
            </ul>
          </div>

          {/* Col 4: Suburbs 30km Service Radius SEO */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              30km Service Areas
            </h4>
            <p className="text-xs text-slate-400">
              $0 travel callout fees for standard quotes across the Coffs Coast:
            </p>
            <div className="flex flex-wrap gap-1 text-[11px] text-slate-400">
              {COFFS_COAST_SUBURBS.slice(0, 14).map((s, idx) => (
                <span key={idx} className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  {s.name.split('(')[0]}
                </span>
              ))}
              <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-orange-400">
                + more
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Harbour Handyman. All Rights Reserved. Built for Coffs Coast locals.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> Proudly Serving NSW Mid North Coast
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
