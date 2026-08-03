import React, { useState } from 'react';
import { FAQS } from '../data/coursesData';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle
} from 'lucide-react';

export const ContactAndLocation: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <HelpCircle className="w-6 h-6 text-[#C5A059]" />
            <div>
              <h3 className="text-xl font-bold text-[#002147]">Pertanyaan Sering Diajukan (FAQ)</h3>
              <p className="text-xs text-slate-500 mt-0.5">Informasi seputar pendaftaran, sertifikasi, dan metode pelatihan DEEP.</p>
            </div>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#002147] flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

