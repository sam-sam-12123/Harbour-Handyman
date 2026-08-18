import React from 'react';
import { ShieldCheck, Heart, FileText, CheckCircle2, Phone, Star, ArrowRight, UserCheck, Award } from 'lucide-react';

interface AgedCareNdisSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const AgedCareNdisSection: React.FC<AgedCareNdisSectionProps> = ({ onOpenQuote }) => {
  const safetyFeatures = [
    {
      title: 'Solid Stud Grab Rails',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus.',
      icon: ShieldCheck
    },
    {
      title: 'Threshold & Step Safety',
      desc: 'Vestibulum lacinia arcu eget nulla class aptent taciti sociosqu ad litora torquent per conubia.',
      icon: Award
    },
    {
      title: 'Easy-Turn Lever Taps',
      desc: 'Curabitur sodales ligula in libero sed dignissim lacinia nunc curabitur tortor pellentesque nibh.',
      icon: Heart
    },
    {
      title: 'Shower Benches & Hand Showers',
      desc: 'Duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper porta mauris massa.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="agedcare" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-950 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>Seniors, Pensioners & NDIS Home Modifications</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Safe, Independent Living for Seniors & NDIS Participants
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            {/* 10% Senior Discount Callout Banner */}
            <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r-2xl">
              <div className="flex items-center gap-2 text-slate-950 font-black text-base sm:text-lg">
                <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                <span>10% Pensioner & Senior Discount on All Labour</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.
              </p>
            </div>

            {/* NDIS & Home Care Package Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <FileText className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">NDIS Invoice Ready</div>
                  <div className="text-xs text-slate-600 mt-0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit line-item tax invoices.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <UserCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Police Checked & WWCC</div>
                  <div className="text-xs text-slate-600 mt-0.5">Vestibulum lacinia arcu eget nulla class aptent taciti sociosqu ad litora.</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="tel:0417755001"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black px-6 py-3.5 rounded-xl text-base shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Darren: 0417 755 001</span>
              </a>

              <button
                onClick={() => onOpenQuote('Bathroom Grab Rails & Aged Care Safety')}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-sm cursor-pointer"
              >
                <span>Request Safety Quote</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Safety Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-black text-white">Home Safety Standards</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                {safetyFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-xs text-orange-200">
                <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  Respectful & Clean Work Guarantee
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
