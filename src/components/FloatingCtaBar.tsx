import React from 'react';
import { Phone, Send } from 'lucide-react';

interface FloatingCtaBarProps {
  onOpenQuote: () => void;
}

export const FloatingCtaBar: React.FC<FloatingCtaBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl p-2.5 sm:hidden">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        
        {/* Direct Phone Call Button */}
        <a
          href="tel:0417755001"
          id="floating-call-btn"
          className="flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 active:bg-slate-700 text-white rounded-xl py-3 px-3 text-center shadow-xs font-bold"
        >
          <Phone className="w-4 h-4 text-orange-400 animate-pulse" />
          <span className="text-xs font-black leading-tight">Call 0417 755 001</span>
        </a>

        {/* Free Quote Button */}
        <button
          onClick={onOpenQuote}
          id="floating-quote-btn"
          className="flex items-center justify-center gap-2 bg-orange-600 active:bg-orange-500 text-white rounded-xl py-3 px-3 text-center shadow-xs cursor-pointer font-black"
        >
          <Send className="w-4 h-4" />
          <span className="text-xs leading-tight">Free Quote</span>
        </button>

      </div>
    </div>
  );
};
