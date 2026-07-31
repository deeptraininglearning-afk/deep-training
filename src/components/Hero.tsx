import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Award, 
  Users, 
  Building2, 
  CheckCircle2, 
  Calendar,
  Activity,
  Cpu,
  Landmark,
  ShieldCheck
} from 'lucide-react';

interface HeroProps {
  onOpenRegister: (courseId?: string) => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExploreCatalog }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#001a38] via-[#002147] to-[#003366] text-white overflow-hidden py-16 lg:py-24 border-b-4 border-[#C5A059]">
      {/* Decorative Grid & Glow Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A8E8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00A8E8]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 text-xs font-semibold text-amber-300 shadow-inner">
              <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
              <span>Lembaga Pelatihan Profesional Terpercaya & Terakreditasi</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Tingkatkan Kapabilitas Profesional di Bidang{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] via-cyan-300 to-[#C5A059]">
                Digital, AI, Perbankan & Alat Medis CT Scan / MRI
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">DEEP Training & Learning Solutions</strong> menyelenggarakan pelatihan eksekutif dan teknis tingkat lanjut yang dirancang khusus sesuai standar industri terkini, dilengkapi laboratorium simulasi praktis & instruktur pakar berpengalaman.
            </p>

            {/* 4 Pillars Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#00A8E8] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Artificial Intelligence</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">CT Scan & MRI</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Perbankan & Keuangan</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Digital & Cyber Tech</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onExploreCatalog}
                className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Lihat Katalog Kursus Lengkap</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenRegister()}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded backdrop-blur-md transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Pendaftaran Daring</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="flex items-center gap-6 pt-2 text-xs text-slate-300">
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
                <span>Simulasi Lab Hands-on</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Feature Card & Upcoming Batch Highlight */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Jadwal Terdekat</span>
                  <h3 className="text-xl font-bold text-white mt-1">Batch Agustus - September 2026</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00A8E8]/20 flex items-center justify-center text-[#00A8E8]">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {/* Course highlights list */}
              <div className="space-y-4">
                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                  <div className="flex justify-between text-xs font-medium text-cyan-300 mb-1">
                    <span>ALAT MEDIS CT SCAN</span>
                    <span className="bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold">25 - 28 AGU</span>
                  </div>
                  <h4 className="font-semibold text-sm text-white">Advanced Multislice CT Scan Protocols & Radiation Safety</h4>
                  <p className="text-xs text-slate-300 mt-1">Simulasi Lab & Hands-On Workstation 3D Reconstruction.</p>
                </div>

                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                  <div className="flex justify-between text-xs font-medium text-amber-300 mb-1">
                    <span>ARTIFICIAL INTELLIGENCE</span>
                    <span className="bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">12 - 14 AGU</span>
                  </div>
                  <h4 className="font-semibold text-sm text-white">Enterprise AI & Generative AI Implementation Specialist</h4>
                  <p className="text-xs text-slate-300 mt-1">Membangun Custom AI Agent & RAG Architecture untuk Bisnis.</p>
                </div>

                <div className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                  <div className="flex justify-between text-xs font-medium text-emerald-300 mb-1">
                    <span>PERBANKAN & KEUANGAN</span>
                    <span className="bg-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded text-[10px] font-bold">18 - 20 AGU</span>
                  </div>
                  <h4 className="font-semibold text-sm text-white">Executive Banking Risk Management & AML/CFT Compliance</h4>
                  <p className="text-xs text-slate-300 mt-1">Penerapan Regulasi OJK, APU-PPT, dan Manajemen Risiko.</p>
                </div>
              </div>

              {/* Quick action in card */}
              <button
                onClick={() => onOpenRegister()}
                className="mt-6 w-full bg-gradient-to-r from-[#C5A059] to-amber-600 hover:from-amber-600 hover:to-[#C5A059] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Daftar Pelatihan Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Counter Stats Ticker */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">15,000+</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">Alumni & Profesional Terlatih</div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#00A8E8]">250+</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">Mitra Korporat & Rumah Sakit</div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">4 Pilar</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">Bidang Spesialisasi Unggulan</div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">98.4%</div>
            <div className="text-xs text-slate-300 mt-1 font-medium">Tingkat Kepuasan Peserta</div>
          </div>
        </div>

      </div>
    </section>
  );
};
