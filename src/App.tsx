import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AgedCareNdisSection } from './components/AgedCareNdisSection';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingCtaBar } from './components/FloatingCtaBar';
import { QuoteWizardModal } from './components/QuoteWizardModal';
import { ShieldCheck, Phone, CheckCircle2, MapPin, Wrench } from 'lucide-react';
import { QuoteFormData } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>(undefined);
  const [quoteInitialData, setQuoteInitialData] = useState<Partial<QuoteFormData> | undefined>(undefined);

  const handleOpenQuote = (serviceTitle?: string, initialData?: Partial<QuoteFormData>) => {
    setQuoteInitialService(serviceTitle);
    setQuoteInitialData(initialData);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">

      {/* Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenQuote={handleOpenQuote}
        />

        {/* 2. Quick Trust Bar */}
        <section className="bg-blue-900 text-white py-4 border-y border-blue-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>$20M Public Liability Insurance</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>10% Pensioner & Senior Discount</span>
            </div>

            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-300 shrink-0" />
              <span>NDIS Compliant Invoicing</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Coffs Coast 30km ($0 Callout for Quotes)</span>
            </div>
          </div>
        </section>

        {/* 3. Comprehensive Services Showcase */}
        <ServicesSection
          onOpenQuote={handleOpenQuote}
        />

        {/* 4. Dedicated Aged Care & NDIS Home Modification Section */}
        <AgedCareNdisSection
          onOpenQuote={handleOpenQuote}
        />

        {/* 5. 30km Service Area & Suburbs */}
        <ServiceAreaChecker
          onOpenQuote={handleOpenQuote}
        />

        {/* 6. Why Choose Us / Quality Pillars */}
        <WhyChooseUs />

        {/* 7. Verified Local Customer Reviews */}
        <ReviewsSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 9. Direct Call & Quote Action Banner before Footer */}
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20 border-t border-slate-800 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/section2.png')"
          }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-slate-950/65" />

          {/* Subtle Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/45 via-slate-950/20 to-blue-950/45" />

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm text-amber-400 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              Ready to get your job sorted?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg">
              Get an Honest, Upfront Quote Across Coffs Harbour Today
            </h2>

            <p className="text-slate-100 text-base sm:text-lg max-w-2xl mx-auto drop-shadow-md">
              Call Darren directly on{' '}
              <strong className="text-amber-400">0417 755 001</strong>{' '}
              for immediate assistance or submit your quote request online in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="tel:0417755001"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-2xl text-lg shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-slate-950 animate-pulse" />
                <span>Call Darren: 0417 755 001</span>
              </a>

              <button
                onClick={() => handleOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-2xl text-base shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Free Online Quote</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
      />

      {/* Sticky Mobile Floating Call / Quote Bar */}
      <FloatingCtaBar
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Fast & Clean Quote Modal */}
      <QuoteWizardModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={quoteInitialService}
        initialData={quoteInitialData}
      />

    </div>
  );
}
