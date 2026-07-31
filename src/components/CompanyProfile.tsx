import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Microscope, 
  Cpu, 
  Landmark, 
  Users,
  Sparkles
} from 'lucide-react';

export const CompanyProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visi' | 'metode' | 'fasilitas' | 'akreditasi'>('visi');

  return (
    <section id="profil" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Profil & Rekam Jejak Lembaga
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-3">
            Tentang DEEP Training & Learning Solutions
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Mitra strategis terpercaya pengembangan sumber daya manusia profesional di bidang teknologi digital, kecerdasan buatan, perbankan, dan peralatan medis mutakhir di Indonesia.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'visi', label: 'Visi & Misi' },
            { id: 'metode', label: 'Metodologi Pembelajaran' },
            { id: 'fasilitas', label: 'Fasilitas & Lab Simulasi' },
            { id: 'akreditasi', label: 'Akreditasi & Standar' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-[#002147] text-white shadow-lg border-b-4 border-[#C5A059]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm min-h-[300px]">
          
          {/* TAB 1: VISI & MISI */}
          {activeTab === 'visi' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-[#002147]">Visi Perusahaan</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menjadi lembaga pelatihan dan pusat pengembangan kompetensi profesional terdepan di Asia Tenggara yang secara berkelanjutan mencetak SDM unggul berstandar internasional di bidang teknologi tinggi, keuangan, dan peralatan medis mutakhir.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#00A8E8]">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-[#002147]">Misi Utama</h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Menyelenggarakan pelatihan berbasis praktik dengan kurikulum yang diperbarui secara berkesinambungan sesuai standar industri.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Menyediakan sarana laboratorium dan instrumen simulasi mutakhir (Termasuk Workstation CT Scan & MRI, AI Agent Sandbox, dan Risk Management Simulator).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Menjangkau instansi kesehatan dan lembaga keuangan nasional dalam menyelaraskan kebutuhan kepatuhan regulasi (Kemenkes, OJK, BNSP).</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: METODE PELATIHAN */}
          {activeTab === 'metode' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-[#002147] mb-2">Metodologi Pembelajaran 70:20:10</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                DEEP menerapkan pendekatan pembelajaran holistik di mana 70% berfokus pada praktik hands-on & studi kasus nyata, 20% diskusi instruktur pakar, dan 10% pemahaman konseptual dasar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#002147] flex items-center justify-center font-bold mb-3">
                    01
                  </div>
                  <h4 className="font-bold text-sm text-[#002147] mb-1">Interactive Theory & Framework</h4>
                  <p className="text-xs text-slate-500">Penyampaian modul landasan regulasi, prinsip fisika alat medis, atau arsitektur sistem.</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#C5A059] flex items-center justify-center font-bold mb-3">
                    02
                  </div>
                  <h4 className="font-bold text-sm text-[#002147] mb-1">Hands-On Laboratory Simulation</h4>
                  <p className="text-xs text-slate-500">Praktikum langsung pada workstation CT/MRI, coding AI agent, atau simulasi audit APU-PPT.</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
                    03
                  </div>
                  <h4 className="font-bold text-sm text-[#002147] mb-1">Post-Training Support & Certification</h4>
                  <p className="text-xs text-slate-500">Ujian evaluasi kompetensi, penerbitan sertifikat verifikasi digital, dan grup diskusi alumni.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FASILITAS & LAB */}
          {activeTab === 'fasilitas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fadeIn">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002147]">Sarana & Prasarana Unggulan</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kami menginvestasikan fasilitas laboratorium canggih untuk memastikan setiap peserta merasakan pengalaman mengoperasikan perangkat nyata:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-slate-200 font-semibold text-slate-800 flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-emerald-600" />
                    <span>Lab Simulation CT Scan Multislice & MRI 1.5T Workstations</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 font-semibold text-slate-800 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#00A8E8]" />
                    <span>AI Cloud Sandbox & Enterprise GPU Cluster for GenAI Labs</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 font-semibold text-slate-800 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#C5A059]" />
                    <span>Banking Risk Simulator & Open API Testing Environment</span>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                  alt="Lab Simulasi Medis DEEP"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] bg-[#C5A059] px-2 py-0.5 rounded font-bold uppercase">Pusat Pelatihan Jakarta</span>
                  <div className="font-bold text-sm mt-1">Laboratorium Medis & Workstation Reconstruct 3D</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AKREDITASI & STANDAR */}
          {activeTab === 'akreditasi' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-[#002147]">Kepatuhan Standar & Akreditasi Industri</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                DEEP Training & Learning Solutions beroperasi dengan memenuhi standar kepatuhan regulasi teknis nasional maupun internasional.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-2">
                  <ShieldCheck className="w-8 h-8 text-[#002147] mx-auto" />
                  <div className="font-bold text-xs text-[#002147]">ISO 9001:2015</div>
                  <div className="text-[10px] text-slate-500">Sistem Manajemen Mutu Pelatihan</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-2">
                  <Award className="w-8 h-8 text-[#C5A059] mx-auto" />
                  <div className="font-bold text-xs text-[#002147]">Asesor BNSP</div>
                  <div className="text-[10px] text-slate-500">Instruktur Bersetifikasi Kompetensi</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-2">
                  <Microscope className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="font-bold text-xs text-[#002147]">BNSP / Kemenkes</div>
                  <div className="text-[10px] text-slate-500">Sesuai Standar K3 Radiasi Alat Medis</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-2">
                  <Landmark className="w-8 h-8 text-[#00A8E8] mx-auto" />
                  <div className="font-bold text-xs text-[#002147]">OJK & BI Standard</div>
                  <div className="text-[10px] text-slate-500">Modul Kepatuhan APU-PPT & SNAP BI</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
