import React from 'react';
import { CourseCategory } from '../types';
import { 
  Cpu, 
  Activity, 
  Landmark, 
  ShieldCheck, 
  ChevronRight,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface CategoryOverviewProps {
  onSelectCategory: (category: CourseCategory) => void;
}

export const CategoryOverview: React.FC<CategoryOverviewProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'ai' as CourseCategory,
      title: 'Artificial Intelligence (AI)',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      borderColor: 'border-[#00A8E8]',
      badgeColor: 'bg-cyan-100 text-cyan-800',
      description: 'Penguasaan Generative AI, Large Language Models (LLM), RAG Architecture, Machine Learning, dan otomatisasi workflow bisnis.',
      highlights: [
        'Enterprise GenAI & Custom Agent',
        'Prompt Engineering & RAG Labs',
        'Predictive Analytics for Business',
        'AI Ethics & Governance'
      ],
      courseCount: '12 Kursus'
    },
    {
      id: 'medical' as CourseCategory,
      title: 'Alat Medis: CT Scan & MRI',
      icon: Activity,
      color: 'from-emerald-600 to-teal-700',
      borderColor: 'border-emerald-500',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      description: 'Pelatihan teknis spesialisasi pengoperasian Multislice CT Scan (128/256 Slice), High-Field MRI 1.5T/3.0T, K3 Radiasi, & QA/QC.',
      highlights: [
        'CT Angiography & 3D Reconstruction',
        'High-Field MRI Sequences & Safety',
        'Quality Assurance (QA) & Calibration',
        'Radiology Workstation DICOM/PACS'
      ],
      courseCount: '10 Kursus'
    },
    {
      id: 'banking' as CourseCategory,
      title: 'Perbankan & Keuangan',
      icon: Landmark,
      color: 'from-[#002147] to-blue-900',
      borderColor: 'border-[#C5A059]',
      badgeColor: 'bg-amber-100 text-amber-900',
      description: 'Manajemen Risiko Perbankan (Kredit, Pasar, Operasional), APU-PPT (AML/CFT), Sertifikasi OJK, & Transformasi Digital Banking SNAP BI.',
      highlights: [
        'Banking Risk Management (Basel III/IV)',
        'Anti-Money Laundering (AML/CFT)',
        'Digital Banking SNAP BI Integration',
        'Financial Compliance & Audit'
      ],
      courseCount: '15 Kursus'
    },
    {
      id: 'digital' as CourseCategory,
      title: 'Digital & Cyber Security',
      icon: ShieldCheck,
      color: 'from-slate-800 to-slate-900',
      borderColor: 'border-slate-700',
      badgeColor: 'bg-slate-100 text-slate-800',
      description: 'Keamanan Siber Enterprise (ISO 27001), Pertahanan Threat Defense, Cloud Native Architecture, Kubernetes, & DevOps Pipelines.',
      highlights: [
        'ISO 27001 Threat Defense & SOC',
        'Vulnerability Assessment & PenTest',
        'Cloud Native Kubernetes & DevOps',
        'Software Engineering Architecture'
      ],
      courseCount: '14 Kursus'
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Fokus Spesialisasi Pelatihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-3">
            Bidang Pelatihan Profesional DEEP
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            Kami menyediakan program pelatihan berstandar internasional yang disesuaikan dengan kebutuhan transformasi industri di bidang Digital, kecerdasan buatan (AI), perbankan, dan peralatan medis mutakhir.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 ${cat.borderColor} flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Background accent icon */}
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Icon className="w-36 h-36 text-slate-900" />
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                      {cat.courseCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#002147] mb-2 group-hover:text-[#00A8E8] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                    {cat.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectCategory(cat.id)}
                  className="w-full mt-2 bg-slate-100 hover:bg-[#002147] hover:text-white text-[#002147] font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  <span>Lihat Katalog Kursus</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Corporate In-House Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#002147] to-[#003366] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059] flex items-center justify-center shrink-0 text-white shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Membutuhkan Pelatihan Khusus In-House Training Perusahaan?</h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Kami merancang kurikulum kustomized sesuai kebutuhan spesifik instansi atau rumah sakit Anda, lengkap dengan pengujian laboratorium dan studi kasus riil.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6281380050039?text=Halo%20DEEP%20Training,%20saya%20tertarik%20dengan%20layanan%20In-House%20Training%20perusahaan"
            target="_blank"
            rel="noreferrer"
            className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-lg transition-all shrink-0 text-center"
          >
            Konsultasi Program In-House
          </a>
        </div>

      </div>
    </section>
  );
};
