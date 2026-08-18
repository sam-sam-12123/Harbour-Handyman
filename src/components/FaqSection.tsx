import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqsData';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Search } from 'lucide-react';

interface FaqSectionProps {
  onOpenQuote: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  const [openId, setOpenId] = useState<string>(FAQS_DATA[0].id);
  const [search, setSearch] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const filteredFaqs = FAQS_DATA.filter(
    f => f.question.toLowerCase().includes(search.toLowerCase()) ||
         f.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Straightforward answers about our handyman services, pricing, travel radius, and discounts.
          </p>

          {/* Quick Search */}
          <div className="max-w-md mx-auto mt-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search questions (e.g. quote, NDIS, emergency, discount)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-orange-500 bg-orange-50/20' : 'border-slate-200 bg-slate-50 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-orange-600' : 'text-slate-400'}`} />
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    isOpen ? 'bg-orange-500 text-black' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 bg-slate-950 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border border-slate-800 shadow-xl">
          <div>
            <h4 className="text-base font-bold text-white">Have a unique job or questions?</h4>
            <p className="text-xs text-slate-300 mt-0.5">Darren is always happy to talk through your repairs over the phone.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:0417755001"
              className="bg-orange-500 hover:bg-orange-400 text-black font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow-md"
            >
              <Phone className="w-4 h-4" /> 0417 755 001
            </a>
            <button
              onClick={onOpenQuote}
              className="bg-white hover:bg-slate-100 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer shadow-md"
            >
              Ask via Free Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
