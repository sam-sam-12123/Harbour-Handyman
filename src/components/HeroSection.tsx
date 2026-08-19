import React, { useState } from 'react';
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  Star,
  ArrowRight,
  Clock,
  Wrench,
  Sparkles
} from 'lucide-react';

import heroBackground from '../assets/images/main.png';

interface HeroSectionProps {
  onOpenQuote: (service?: string, initialData?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const [quickService, setQuickService] = useState(
    'Flyscreen Replacements & Remeshing'
  );

  const [quickSuburb, setQuickSuburb] = useState(
    'Coffs Harbour (CBD & Central)'
  );

  const [quickPhone, setQuickPhone] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onOpenQuote(quickService, {
      suburb: quickSuburb,
      phone: quickPhone
    });
  };

  return (
    <section
      className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-800 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBackground})`
      }}
    >
      {/* Dark overlay over hero image */}
      <div className="absolute inset-0 bg-slate-950/15 pointer-events-none"></div>

      {/* Subtle graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#F58220_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-3.5 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-bold backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-orange-400" />

              <span>
                YOUR ONE STOP HANDYMAN SERVICE &bull; COFFS COAST
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-lg">
              Reliable, Honest Handyman Repairs Across{' '}
              <span className="text-orange-500 underline decoration-orange-500/50 decoration-wavy decoration-2">
                Coffs Harbour
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">

              <a
                href="tel:0417755001"
                id="hero-call-now-cta"
                className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-black px-6 py-4 rounded-2xl text-lg shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Phone className="w-5 h-5 animate-pulse text-black" />

                <span>
                  Call Darren: 0417 755 001
                </span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                id="hero-online-quote-cta"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-black px-6 py-4 rounded-2xl text-base shadow-md transition-all cursor-pointer"
              >
                <span>
                  Get Free Quote
                </span>

                <ArrowRight className="w-4 h-4 text-orange-600" />
              </button>

            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/20">

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />

                <div>
                  <div className="text-xs font-bold text-white">
                    $20M Insured
                  </div>

                  <div className="text-[11px] text-slate-300">
                    Public Liability
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />

                <div>
                  <div className="text-xs font-bold text-white">
                    10% Seniors Off
                  </div>

                  <div className="text-[11px] text-slate-300">
                    Pensioner Discount
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-400 shrink-0" />

                <div>
                  <div className="text-xs font-bold text-white">
                    NDIS Compliant
                  </div>

                  <div className="text-[11px] text-slate-300">
                    Itemised Invoices
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400 shrink-0" />

                <div>
                  <div className="text-xs font-bold text-white">
                    30km Radius
                  </div>

                  <div className="text-[11px] text-slate-300">
                    $0 Callout Quotes
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">

            <div className="bg-slate-900/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl text-white border border-slate-700">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">

                <div>
                  <h2 className="text-xl font-black text-white">
                    Quick Quote Request
                  </h2>

                  <p className="text-xs font-medium text-slate-400 mt-0.5">
                    Fast response &bull; Upfront pricing
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2.5 py-1 rounded-xl text-xs font-bold">

                  <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />

                  <span>
                    5-Star Service
                  </span>

                </div>

              </div>

              {/* Quick Form */}
              <form
                onSubmit={handleQuickSubmit}
                className="space-y-4 pt-4"
              >

                {/* Service */}
                <div>

                  <label
                    htmlFor="quick-service-select"
                    className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    What job needs doing?
                  </label>

                  <select
                    id="quick-service-select"
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  >
                    <option value="Flyscreen Replacements & Remeshing">
                      Flyscreen Replacement / Remeshing
                    </option>

                    <option value="TV Wall Mounting & Bracket Installation">
                      TV Wall Mounting & Cables
                    </option>

                    <option value="Bathroom Grab Rails & Fittings">
                      Bathroom Grab Rails & Safety Fittings
                    </option>

                    <option value="Shower Screen Replacement & Seals">
                      Shower Screen Seals & Silicone
                    </option>

                    <option value="Door Replacements & Sticking Doors">
                      Door Repairs, Locks & Replacements
                    </option>

                    <option value="Plastering & Drywall Hole Patching">
                      Plastering & Drywall Hole Patching
                    </option>

                    <option value="Basic Tiling & Minor Plumbing">
                      Basic Plumbing (Taps) & Tiling
                    </option>

                    <option value="Timber Deck Repairs & Oiling">
                      Deck Repairs, Sanding & Oiling
                    </option>

                    <option value="Garden Edging & Pathways">
                      Garden Edging & Pathways
                    </option>

                    <option value="General Handyman Repairs">
                      Other Handyman Work / Multiple Jobs
                    </option>
                  </select>

                </div>

                {/* Suburb */}
                <div>

                  <label
                    htmlFor="quick-suburb-select"
                    className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Suburb (Coffs Coast 30km)
                  </label>

                  <select
                    id="quick-suburb-select"
                    value={quickSuburb}
                    onChange={(e) => setQuickSuburb(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  >

                    <option value="Coffs Harbour (CBD & Central)">
                      Coffs Harbour (2450)
                    </option>

                    <option value="Sawtell">
                      Sawtell (2452)
                    </option>

                    <option value="Toormina">
                      Toormina (2452)
                    </option>

                    <option value="Boambee / Boambee East">
                      Boambee / Boambee East (2452)
                    </option>

                    <option value="Woolgoolga">
                      Woolgoolga (2456)
                    </option>

                    <option value="Moonee Beach">
                      Moonee Beach (2450)
                    </option>

                    <option value="Sapphire Beach">
                      Sapphire Beach (2450)
                    </option>

                    <option value="Emerald Beach">
                      Emerald Beach (2456)
                    </option>

                    <option value="Sandy Beach">
                      Sandy Beach (2456)
                    </option>

                    <option value="Bonville">
                      Bonville (2450)
                    </option>

                    <option value="Urunga">
                      Urunga (2455)
                    </option>

                    <option value="Bellingen">
                      Bellingen (2454)
                    </option>

                    <option value="Karangi / Coramba">
                      Karangi / Coramba (2450)
                    </option>

                    <option value="Other Surrounding Area">
                      Other (Within 30km)
                    </option>

                  </select>

                </div>

                {/* Phone */}
                <div>

                  <label
                    htmlFor="quick-phone-input"
                    className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Mobile / Contact Number
                  </label>

                  <input
                    id="quick-phone-input"
                    type="tel"
                    placeholder="e.g. 0412 345 678"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none placeholder:text-slate-500"
                  />

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="hero-quick-quote-submit-btn"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black py-3.5 px-4 rounded-xl text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    Request Free Upfront Quote
                  </span>

                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">

                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />

                    Free Quotes
                  </span>

                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />

                    Prompt Callback
                  </span>

                </div>

              </form>

              {/* Urgent */}
              <div className="mt-4 p-3 bg-slate-800/80 border border-slate-700 rounded-2xl flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></div>

                  <span className="text-xs font-bold text-slate-200">
                    Urgent job?
                  </span>

                </div>

                <a
                  href="tel:0417755001"
                  className="text-xs font-black text-orange-400 hover:text-orange-300 underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />

                  Call Darren (0417 755 001)
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
