import React from 'react';
import { CourseCategory } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Activity,
  Cpu,
  Landmark,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenRegister: (courseId?: string) => void;
  onExploreCatalog: () => void;
  onSelectCategory?: (category: CourseCategory) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExploreCatalog, onSelectCategory }) => {
  const handleCategoryClick = (category: CourseCategory) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    } else {
      onExploreCatalog();
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#00142b] via-[#002147] to-[#003366] text-white py-16 lg:py-22 border-b-4 border-[#C5A059] overflow-hidden">
      {/* Decorative background radial pattern & subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A8E8_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00A8E8]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Executive Message */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-[#C5A059]/50 text-xs font-semibold text-amber-300 shadow-sm">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>Lembaga Pelatihan Terakreditasi BNSP & Kemenkes Compliance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white">
              Pusat Pelatihan & Sertifikasi SDM Eksklusif
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              <strong className="text-white font-semibold">DEEP Training & Learning Solutions</strong> menyelenggarakan pelatihan eksekutif dan teknis tingkat lanjut di bidang <span className="text-[#00A8E8] font-semibold">Artificial Intelligence</span>, <span className="text-emerald-400 font-semibold">CT Scan & MRI Medis</span>, <span className="text-amber-300 font-semibold">Perbankan & Keuangan</span>, serta <span className="text-cyan-300 font-semibold">Cyber Security</span>.
            </p>

            {/* Interactive 4 Pillars Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <button
                onClick={() => handleCategoryClick('ai')}
                className="bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#00A8E8] rounded-xl p-3 flex items-center gap-2.5 text-left transition-all group"
              >
                <Cpu className="w-4 h-4 text-[#00A8E8] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">Artificial Intelligence</span>
              </button>

              <button
                onClick={() => handleCategoryClick('medical')}
                className="bg-white/5 hover:bg-white/15 border border-white/10 hover:border-emerald-400 rounded-xl p-3 flex items-center gap-2.5 text-left transition-all group"
              >
                <Activity className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">CT Scan & MRI</span>
              </button>

              <button
                onClick={() => handleCategoryClick('banking')}
                className="bg-white/5 hover:bg-white/15 border border-white/10 hover:border-amber-400 rounded-xl p-3 flex items-center gap-2.5 text-left transition-all group"
              >
                <Landmark className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">Perbankan & Risk</span>
              </button>

              <button
                onClick={() => handleCategoryClick('digital')}
                className="bg-white/5 hover:bg-white/15 border border-white/10 hover:border-cyan-400 rounded-xl p-3 flex items-center gap-2.5 text-left transition-all group"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">Cyber Security</span>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Lihat Katalog Kursus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenRegister()}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl backdrop-blur-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Pendaftaran Online</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sertifikat Terverifikasi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instruktur Praktisi Senior</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Simulasi Lab Workstation</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Executive Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4 relative">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-extrabold text-[#C5A059] uppercase tracking-wider">Jadwal Spotlight</span>
                  <h3 className="text-lg font-extrabold text-[#002147]">Batch Terbaru 2026</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C5A059] shadow-xs">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors">
                  <div className="flex justify-between text-[11px] font-bold text-[#002147] mb-1">
                    <span className="text-[#002147] uppercase font-bold">CT SCAN & MRI MEDIS</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md text-[10px] font-extrabold">25-28 AGU</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Multislice CT Scan Protocols & Safety</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sertifikasi Kemenkes Compliance & Lab Simulation.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors">
                  <div className="flex justify-between text-[11px] font-bold text-cyan-800 mb-1">
                    <span className="text-cyan-800 uppercase font-bold">ARTIFICIAL INTELLIGENCE</span>
                    <span className="bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded-md text-[10px] font-extrabold">12-14 AGU</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Enterprise GenAI & RAG Agent Specialist</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Implementasi LLM & Workflow Automation Bisnis.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors">
                  <div className="flex justify-between text-[11px] font-bold text-emerald-800 mb-1">
                    <span className="text-emerald-800 uppercase font-bold">PERBANKAN & RISK</span>
                    <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md text-[10px] font-extrabold">18-20 AGU</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Banking Risk Management & AML/CFT</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Penerapan Regulasi OJK & Audit Compliance.</p>
                </div>
              </div>

              <button
                onClick={() => onOpenRegister()}
                className="w-full bg-[#002147] hover:bg-[#00142d] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 mt-2"
              >
                <span>Daftar Batch Sekarang</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Counter Stats Ticker */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">15,000+</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Alumni & Profesional Terlatih</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#00A8E8]">250+</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Instansi & RS Partner</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">4 Pilar</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Spesialisasi Utama</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">98.4%</div>
            <div className="text-xs text-slate-300 mt-0.5 font-medium">Tingkat Kepuasan Peserta</div>
          </div>
        </div>

      </div>
    </section>
  );
};


