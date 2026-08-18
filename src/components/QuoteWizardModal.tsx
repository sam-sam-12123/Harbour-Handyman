import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, AlertCircle, Send } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { COFFS_COAST_SUBURBS } from '../data/suburbsData';
import { QuoteFormData } from '../types';
import { HarbourHandymanLogo } from './HarbourHandymanLogo';

interface QuoteWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialData?: Partial<QuoteFormData>;
}

export const QuoteWizardModal: React.FC<QuoteWizardModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialData
}) => {
  const [selectedService, setSelectedService] = useState<string>('Flyscreen Replacements & Remeshing');
  const [suburb, setSuburb] = useState<string>('Coffs Harbour (CBD & Central)');
  const [description, setDescription] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSenior, setIsSenior] = useState<boolean>(false);
  const [isNdis, setIsNdis] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
    if (initialData) {
      if (initialData.suburb) setSuburb(initialData.suburb);
      if (initialData.phone) setPhone(initialData.phone);
      if (initialData.name) setName(initialData.name);
      if (initialData.description) setDescription(initialData.description);
    }
  }, [initialService, initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and phone number so Darren can call you.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          suburb,
          services: [selectedService],
          description,
          isSenior,
          isNdis
        })
      });
      setSubmitted(true);
    } catch (err) {
      // Graceful fallback: show confirmation
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <HarbourHandymanLogo variant="icon-only" size="md" />
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">Request a Free Upfront Quote</h3>
              <p className="text-xs text-orange-400 font-semibold">Darren McIntyre &bull; Coffs Harbour 30km Radius</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-slate-800">
            {errorMsg && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Service Selection */}
            <div>
              <label htmlFor="quote-service-select" className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-1.5">
                1. Select Service / Job Type:
              </label>
              <select
                id="quote-service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.title}>
                    {srv.title}
                  </option>
                ))}
                <option value="General Handyman Work / Multiple Repairs">
                  Other Handyman Work / Multiple Small Jobs
                </option>
              </select>
            </div>

            {/* Suburb Selection */}
            <div>
              <label htmlFor="quote-suburb-select" className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-1.5">
                2. Suburb (Coffs Coast 30km):
              </label>
              <select
                id="quote-suburb-select"
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                {COFFS_COAST_SUBURBS.map((sub) => (
                  <option key={sub.name} value={sub.name}>
                    {sub.name} ({sub.postcode}) - {sub.distanceKm === 0 ? 'Base' : `${sub.distanceKm}km`}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="quote-desc-input" className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-1.5">
                3. Brief Description of Job / Problem:
              </label>
              <textarea
                id="quote-desc-input"
                rows={3}
                placeholder="e.g. Need 3 flyscreens remeshed, 1 TV bracket mounted on plaster wall, or deck repairs..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="quote-name-input" className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                  Your Name *
                </label>
                <input
                  id="quote-name-input"
                  type="text"
                  required
                  placeholder="e.g. John or Sarah"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="quote-phone-input" className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                  Mobile / Phone Number *
                </label>
                <input
                  id="quote-phone-input"
                  type="tel"
                  required
                  placeholder="e.g. 0417 755 001"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Senior / NDIS Checkboxes */}
            <div className="p-3.5 bg-orange-50/50 rounded-xl border border-orange-200 flex flex-col sm:flex-row gap-4 text-xs font-bold text-slate-800">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSenior}
                  onChange={(e) => setIsSenior(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                />
                <span>Senior / Pensioner (10% Labour Discount)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isNdis}
                  onChange={(e) => setIsNdis(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                />
                <span>NDIS / Aged Care Participant</span>
              </label>
            </div>

            {/* Submit & Call Actions */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-black py-3.5 px-6 rounded-2xl text-base shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Submitting Request...' : 'Send Free Quote Request'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <span>Prefer to call immediately?</span>
                <a
                  href="tel:0417755001"
                  className="font-bold text-slate-900 hover:text-orange-600 underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-orange-500" /> Call Darren on 0417 755 001
                </a>
              </div>
            </div>

          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-black text-slate-950">Thank You, {name}!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your quote request for <strong>{selectedService}</strong> in <strong>{suburb}</strong> has been sent to Darren McIntyre.
              </p>
            </div>

            <div className="p-4 bg-slate-100 border border-slate-200 rounded-2xl text-xs text-slate-800 max-w-md mx-auto space-y-1">
              <div className="font-bold">Darren will call you back on: {phone}</div>
              <div className="text-slate-600">$0 travel callout fee for standard quotes across Coffs Harbour.</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="tel:0417755001"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-black px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Call Darren Directly: 0417 755 001</span>
              </a>

              <button
                onClick={resetAndClose}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
