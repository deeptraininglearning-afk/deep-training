import React, { useState } from 'react';
import { Course } from '../types';
import { 
  Calendar, 
  Download, 
  MapPin, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Printer,
  ShieldCheck
} from 'lucide-react';

interface ScheduleAndBrochureProps {
  courses: Course[];
  onOpenRegister: (courseId?: string, batchId?: string) => void;
}

export const ScheduleAndBrochure: React.FC<ScheduleAndBrochureProps> = ({ courses, onOpenRegister }) => {
  const [selectedMonth, setSelectedMonth] = useState<'all' | 'agustus' | 'september' | 'oktober'>('all');
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  // Flatten batches for schedule view
  const allSchedules = courses.flatMap((course) =>
    course.upcomingBatches.map((batch) => ({
      courseId: course.id,
      courseTitle: course.title,
      courseCode: course.code,
      categoryLabel: course.categoryLabel,
      batchId: batch.id,
      dateRange: batch.dateRange,
      location: batch.location,
      status: batch.status,
      quotaLeft: batch.quotaLeft,
      price: course.price,
    }))
  );

  const filteredSchedules = allSchedules.filter((sched) => {
    if (selectedMonth === 'agustus') return sched.dateRange.toLowerCase().includes('agustus');
    if (selectedMonth === 'september') return sched.dateRange.toLowerCase().includes('september');
    if (selectedMonth === 'oktober') return sched.dateRange.toLowerCase().includes('oktober');
    return true;
  });

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="jadwal" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Kalender Pelatihan & Unduh Dokumentasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-3">
            Jadwal Pelatihan & Brosur Lengkap
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Pantau jadwal pelaksanaan pelatihan tatap muka, hybrid, maupun online live interactive untuk kuartal ketiga & keempat tahun 2026.
          </p>
        </div>

        {/* Schedule Matrix Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
          
          {/* Month Filter Bar */}
          <div className="bg-[#002147] p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-[#C5A059]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C5A059]" />
              <span className="font-bold text-sm">Jadwal Agenda Pelatihan DEEP</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setSelectedMonth('all')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  selectedMonth === 'all' ? 'bg-[#C5A059] text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                Semua Bulan
              </button>
              <button
                onClick={() => setSelectedMonth('agustus')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  selectedMonth === 'agustus' ? 'bg-[#C5A059] text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                Agustus 2026
              </button>
              <button
                onClick={() => setSelectedMonth('september')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  selectedMonth === 'september' ? 'bg-[#C5A059] text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                September 2026
              </button>
              <button
                onClick={() => setSelectedMonth('oktober')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  selectedMonth === 'oktober' ? 'bg-[#C5A059] text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                Oktober 2026
              </button>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4">Kode & Program Pelatihan</th>
                  <th className="p-4">Bidang</th>
                  <th className="p-4">Jadwal Pelaksanaan</th>
                  <th className="p-4">Lokasi / Metode</th>
                  <th className="p-4">Status Kuota</th>
                  <th className="p-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filteredSchedules.map((sched, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold text-[#002147]">
                      <span className="font-mono text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded mr-2">
                        {sched.courseCode}
                      </span>
                      {sched.courseTitle}
                    </td>
                    <td className="p-4">
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                        {sched.categoryLabel}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-slate-800">
                      {sched.dateRange}
                    </td>
                    <td className="p-4 text-slate-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        {sched.location}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          sched.status === 'Hampir Penuh'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {sched.status} ({sched.quotaLeft} Kursi Sisa)
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => onOpenRegister(sched.courseId, sched.batchId)}
                        className="bg-[#C5A059] hover:bg-[#b08d48] text-white text-[11px] font-bold px-3 py-1.5 rounded transition-all shadow-sm"
                      >
                        Daftar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Brochure Download Hero Box */}
        <div className="bg-gradient-to-r from-[#002147] via-[#003366] to-[#001a38] rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden border border-amber-500/40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span>Dokumen Resmi Perusahaan</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Unduh Katalog Lengkap & Brosur Pelatihan DEEP 2026
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Dapatkan dokumen lengkap silabus, skema akreditasi, profil instruktur, harga penawaran khusus korporasi, serta syarat pendaftaran dalam format PDF.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setShowBrochureModal(true)}
                  className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-xl transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Brosur Katalog (PDF)</span>
                </button>

                <span className="text-xs text-slate-400">Ukuran Berkas: 4.2 MB (Format PDF)</span>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div 
                onClick={() => setShowBrochureModal(true)}
                className="w-48 bg-white text-slate-900 rounded-xl p-4 shadow-2xl border-2 border-[#C5A059] cursor-pointer hover:scale-105 transition-transform relative group"
              >
                <div className="bg-[#002147] text-white p-2 text-center rounded mb-3 text-[10px] font-bold tracking-widest">
                  DEEP BROCHURE 2026
                </div>
                <div className="space-y-1.5 text-[9px] text-slate-600">
                  <div className="font-bold text-[#002147] text-[11px]">Katalog Pelatihan Executive</div>
                  <div>• AI & Machine Learning</div>
                  <div>• CT Scan Multislice & MRI</div>
                  <div>• Perbankan & Compliance</div>
                  <div>• Cyber Security & Cloud</div>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-200 text-center text-[10px] font-bold text-[#C5A059] group-hover:underline">
                  Klik untuk Preview &rarr;
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* BROCHURE PREVIEW MODAL */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-200">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs text-[#C5A059] font-bold uppercase">Preview Dokumentasi</span>
                <h3 className="text-lg font-bold text-[#002147]">Brosur E-Katalog DEEP Solutions 2026</h3>
              </div>
              <button 
                onClick={() => setShowBrochureModal(false)}
                className="p-1 hover:bg-slate-100 rounded text-slate-500"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-xs space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#002147]" />
                <div>
                  <div className="font-bold text-sm text-[#002147]">DEEP_Training_Brochure_Catalog_2026.pdf</div>
                  <div className="text-slate-500 text-[11px]">Terdaftar Akreditasi & Kompatibel untuk Pengajuan Corporate Budgeting</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="font-bold text-slate-800">Daftar Isi Berkas:</div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Silabus Lengkap 24+ Program Pelatihan</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Portofolio & Rekam Jejak Instruktur Pakar</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Prosedur Pengajuan In-House Training Korporat</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Formulir Aplikasi Pendaftaran Manual / Offline</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowBrochureModal(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded"
              >
                Tutup
              </button>
              <a
                href="data:text/plain;charset=utf-8,Brosur%20Katalog%20Lengkap%20DEEP%20Training%20%26%20Learning%20Solutions%202026.%20Silakan%20hubungi%20info%40deeptraining.id%20atau%20WhatsApp%2008176707234%20untuk%20versi%20cetak%20resmi."
                download="DEEP_Training_Brochure_2026.txt"
                onClick={() => {
                  alert('Mengunduh Berkas Brosur Katalog DEEP Training & Learning Solutions 2026...');
                  setShowBrochureModal(false);
                }}
                className="bg-[#002147] hover:bg-[#001D3D] text-white font-bold text-xs uppercase px-5 py-2.5 rounded shadow flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Mulai Mengunduh</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
