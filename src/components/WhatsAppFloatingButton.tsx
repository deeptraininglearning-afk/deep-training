import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg = 'Halo Admin DEEP Training & Learning Solutions, saya ingin bertanya mengenai program pelatihan.';

  const handleSendWA = (messageToSend: string) => {
    const encoded = encodeURIComponent(messageToSend || defaultMsg);
    window.open(`https://wa.me/628176707234?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Chat Box Popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#002147] text-white p-4 border-b-2 border-[#C5A059] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">Konsultasi WhatsApp DEEP</h4>
                <span className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online Advisor
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="p-4 space-y-3 bg-slate-50 text-xs">
            <p className="text-slate-600 font-medium">Silakan pilih topik atau tuliskan pesan Anda:</p>
            
            <div className="space-y-2">
              <button
                onClick={() => handleSendWA('Halo DEEP, saya ingin konsultasi pendaftaran pelatihan CT Scan / MRI Medis.')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 text-slate-800 text-[11px] font-medium transition-colors"
              >
                🏥 Pelatihan CT Scan & MRI
              </button>
              <button
                onClick={() => handleSendWA('Halo DEEP, mohon informasi mengenai program Enterprise AI & Machine Learning.')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 text-slate-800 text-[11px] font-medium transition-colors"
              >
                🤖 Pelatihan AI & Digital Tech
              </button>
              <button
                onClick={() => handleSendWA('Halo DEEP, saya mewakili instansi perusahaan untuk pengajuan In-House Training.')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 text-slate-800 text-[11px] font-medium transition-colors"
              >
                🏢 Proposal In-House Training
              </button>
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Tulis pesan..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendWA(customMsg);
                  }}
                  className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <button
                  onClick={() => handleSendWA(customMsg)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
        aria-label="Konsultasi WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-ping"></span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};
