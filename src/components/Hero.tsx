import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Activity,
  Cpu,
  Landmark,
  ShieldCheck,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenRegister: (courseId?: string) => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExploreCatalog }) => {
  return (
    <section id="home" className="relative bg-[#001a38] text-white py-14 lg:py-20 border-b-4 border-[#C5A059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clean Core Typography */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-md border border-[#C5A059]/40 text-xs font-semibold text-amber-300">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>Terakreditasi BNSP & Kemenkes Compliance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white">
              Pusat Pelatihan & Sertifikasi SDM Profesional
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              <strong className="text-white">DEEP Training & Learning Solutions</strong> menyelenggarakan pelatihan eksekutif dan teknis di bidang <span className="text-[#00A8E8]">Artificial Intelligence</span>, <span className="text-emerald-400">CT Scan & MRI Medis</span>, <span className="text-amber-300">Perbankan & Keuangan</span>, serta <span className="text-cyan-300">Cyber Security</span>.
            </p>

            {/* 4 Pillars Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00A8E8] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Artificial Intelligence</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">CT Scan & MRI</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Perbankan & Risk</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Cyber Security</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={onExploreCatalog}
                className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Katalog Program Pelatihan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenRegister()}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Pendaftaran Online</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sertifikat Resmi Kompetensi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instruktur Praktisi Senior</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Simulasi Lab Hands-on</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Spotlight Batch Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">Jadwal Terdekat</span>
                  <h3 className="text-lg font-bold text-[#002147]">Batch Terbaru 2026</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-[#C5A059]">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between text-[11px] font-bold text-[#002147] mb-1">
                    <span>ALAT MEDIS CT SCAN</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-[10px]">25-28 AGU</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-800">Multislice CT Scan Protocols & Safety</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sertifikasi BNSP / Kemenkes Compliance.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between text-[11px] font-bold text-cyan-700 mb-1">
                    <span>ARTIFICIAL INTELLIGENCE</span>
                    <span className="bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded text-[10px]">12-14 AGU</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-800">Enterprise GenAI & RAG Agent Specialist</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Implementasi LLM & Workflow Automation.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between text-[11px] font-bold text-emerald-700 mb-1">
                    <span>PERBANKAN & RISK</span>
                    <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded text-[10px]">18-20 AGU</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-800">Banking Risk Management & AML/CFT</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Penerapan Regulasi OJK & Audit Kepatuhan.</p>
                </div>
              </div>

              <button
                onClick={() => onOpenRegister()}
                className="w-full bg-[#002147] hover:bg-[#00142d] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Daftar Batch Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Counter Stats Ticker */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <div className="text-2xl font-extrabold text-[#C5A059]">15,000+</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Alumni Terlatih</div>
          </div>

          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <div className="text-2xl font-extrabold text-[#00A8E8]">250+</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Instansi & RS Partner</div>
          </div>

          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <div className="text-2xl font-extrabold text-emerald-400">4 Pilar</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Bidang Spesialisasi</div>
          </div>

          <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
            <div className="text-2xl font-extrabold text-amber-300">98.4%</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Tingkat Kepuasan</div>
          </div>
        </div>

      </div>
    </section>
  );
};

