import React, { useState } from 'react';
import { Phone, ShieldCheck, Menu, X, MapPin } from 'lucide-react';
import { HarbourHandymanLogo } from './HarbourHandymanLogo';

interface NavbarProps {
  onOpenQuote: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-slate-950 border-b border-slate-800 text-white">
      {/* Top Announcement Bar */}
      <div className="bg-orange-600 text-white text-xs py-1.5 px-4 font-bold tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 bg-black text-white font-black px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              <MapPin className="w-3 h-3 text-orange-400" /> Coffs Coast 30km
            </span>
            <span className="text-white/95 text-xs">
              Coffs Harbour &bull; Sawtell &bull; Woolgoolga &bull; Boambee &bull; Surrounds
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1 text-white font-black">
              <ShieldCheck className="w-3.5 h-3.5" /> 10% Senior Discount | NDIS Ready
            </span>
            <a
              href="tel:0417755001"
              className="inline-flex items-center gap-1.5 font-black bg-black text-orange-400 hover:text-white px-2.5 py-0.5 rounded transition-colors"
              id="top-bar-phone-cta"
            >
              <Phone className="w-3 h-3 animate-pulse" />
              <span>0417 755 001</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none" id="brand-logo-link">
          <HarbourHandymanLogo variant="horizontal" theme="dark" className="py-1" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-200">
          <button onClick={() => scrollToSection('services')} className="hover:text-orange-400 transition-colors py-1 cursor-pointer">
            Services
          </button>
          <button onClick={() => scrollToSection('agedcare')} className="hover:text-orange-400 transition-colors py-1 flex items-center gap-1.5 text-orange-300 cursor-pointer">
            <ShieldCheck className="w-4 h-4 text-orange-400" /> Seniors & NDIS
          </button>
          <button onClick={() => scrollToSection('areas')} className="hover:text-orange-400 transition-colors py-1 cursor-pointer">
            Service Area (30km)
          </button>
          <button onClick={() => scrollToSection('why-us')} className="hover:text-orange-400 transition-colors py-1 cursor-pointer">
            Why Us
          </button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-orange-400 transition-colors py-1 cursor-pointer">
            Reviews
          </button>
          <button onClick={() => scrollToSection('faqs')} className="hover:text-orange-400 transition-colors py-1 cursor-pointer">
            FAQs
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Call Now Button */}
          <a
            href="tel:0417755001"
            id="nav-call-btn"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-orange-400" />
            <span className="hidden sm:inline">Call 0417 755 001</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Instant Quote CTA */}
          <button
            onClick={() => onOpenQuote()}
            id="nav-quote-btn"
            className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md shadow-orange-600/30 transition-all cursor-pointer"
          >
            <span>Free Quote</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
            <button
              onClick={() => { onOpenQuote(); setMobileMenuOpen(false); }}
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-2.5 px-3 rounded-xl text-sm text-center shadow-xs cursor-pointer"
            >
              Get Free Quote
            </button>
            <a
              href="tel:0417755001"
              className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-2.5 px-3 rounded-xl text-sm text-center flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone className="w-4 h-4 text-orange-400" /> Call 0417 755 001
            </a>
          </div>

          <div className="flex flex-col space-y-2 text-base font-bold text-slate-200">
            <button onClick={() => scrollToSection('services')} className="text-left py-2 px-2 hover:bg-slate-800 rounded-lg">
              All Handyman Services
            </button>
            <button onClick={() => scrollToSection('agedcare')} className="text-left py-2 px-2 hover:bg-slate-800 rounded-lg text-orange-400 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Seniors, Pensioners & NDIS
            </button>
            <button onClick={() => scrollToSection('areas')} className="text-left py-2 px-2 hover:bg-slate-800 rounded-lg">
              Coffs Coast 30km Service Radius
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-left py-2 px-2 hover:bg-slate-800 rounded-lg">
              Why Choose Darren
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 px-2 hover:bg-slate-800 rounded-lg">
              Local Customer Reviews
            </button>
            <button onClick={() => scrollToSection('faqs')} className="text-left py-2 px-2 hover:bg-slate-800 rounded-lg">
              Frequently Asked Questions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
