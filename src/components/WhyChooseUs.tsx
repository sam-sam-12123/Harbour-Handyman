import React from 'react';
import { ShieldCheck, Clock, UserCheck, DollarSign, Sparkles, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Punctual & Reliable',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
      icon: Clock
    },
    {
      title: '$20M Public Liability Insured',
      desc: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum.',
      icon: ShieldCheck
    },
    {
      title: 'Police Checked & WWCC',
      desc: 'Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
      icon: UserCheck
    },
    {
      title: 'Fixed Upfront Quotes',
      desc: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor pellentesque nibh aenean.',
      icon: DollarSign
    },
    {
      title: 'Spotless Clean Work Area',
      desc: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa vestibulum.',
      icon: Sparkles
    },
    {
      title: '10% Senior Discount',
      desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas proin pharetra.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            The Harbour Handyman Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Locals Choose Our Handyman Services
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:bg-orange-50/20 transition-all space-y-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-orange-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-950">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Seal Box */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-950 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 text-black flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">
              100%
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-white">Our 100% Workmanship Guarantee</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <a
            href="tel:0417755001"
            className="bg-orange-500 hover:bg-orange-400 text-black font-black px-6 py-3.5 rounded-2xl text-sm whitespace-nowrap shadow-md flex items-center justify-center gap-2"
          >
            <span>Call Darren: 0417 755 001</span>
          </a>
        </div>

      </div>
    </section>
  );
};
