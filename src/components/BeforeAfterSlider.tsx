import React, { useState } from 'react';
import { BEFORE_AFTER_DATA } from '../data/beforeAfterData';
import { Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenQuote: (service?: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const currentProject = BEFORE_AFTER_DATA[activeTab];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Real Coffs Coast Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            See the Quality in Our Work
          </h2>
          <p className="text-slate-300 text-base mt-2">
            Drag the slider across each image to inspect before & after results of our local repairs, restorations, and installations.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {BEFORE_AFTER_DATA.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {proj.service} ({proj.suburb.split(',')[0]})
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          
          {/* Comparison Slider on Left / Top */}
          <div className="lg:col-span-7">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden select-none border border-slate-800">
              
              {/* After Image (Full Background) */}
              <img
                src={currentProject.afterImg}
                alt={`${currentProject.title} After`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-xs text-white text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider">
                After
              </div>

              {/* Before Image (Clipped Left) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentProject.beforeImg}
                  alt={`${currentProject.title} Before`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', minWidth: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-xs text-slate-200 text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider">
                  Before
                </div>
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white -ml-3.5">
                  &harr;
                </div>
              </div>

              {/* Range Input on Top for Touch / Drag */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Before and after comparison slider"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-medium mt-2 px-1">
              <span>&larr; Drag to reveal Before</span>
              <span>Drag to reveal After &rarr;</span>
            </div>
          </div>

          {/* Details & Highlights on Right */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentProject.suburb}</span>
            </div>

            <h3 className="text-2xl font-black text-white leading-tight">
              {currentProject.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentProject.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Work Highlights:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900 p-2 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Action */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => onOpenQuote(currentProject.service)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Get a Quote for {currentProject.service}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
