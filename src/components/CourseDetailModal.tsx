import React from 'react';
import { Course } from '../types';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  Award, 
  UserCheck, 
  Download, 
  BookOpen, 
  ChevronRight,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onRegisterCourse: (courseId: string, batchId?: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onRegisterCourse,
}) => {
  if (!course) return null;

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-[#002147] text-white p-6 rounded-t-2xl flex items-start justify-between border-b-2 border-[#C5A059]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#C5A059] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                {course.categoryLabel}
              </span>
              <span className="bg-white/20 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                {course.code}
              </span>
              <span className="text-amber-300 text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> {course.rating.toFixed(1)}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {course.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0"
            aria-label="Tutup Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Quick Overview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-bold text-[10px] uppercase">Durasi</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                <Clock className="w-4 h-4 text-[#00A8E8]" /> {course.duration}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block font-bold text-[10px] uppercase">Metode</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                <BookOpen className="w-4 h-4 text-emerald-600" /> {course.mode}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block font-bold text-[10px] uppercase">Level</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                <Award className="w-4 h-4 text-amber-500" /> {course.level}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block font-bold text-[10px] uppercase">Investasi</span>
              <span className="font-bold text-[#002147] text-sm mt-0.5 block">
                {formatRupiah(course.price)}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-base font-bold text-[#002147] mb-2">Deskripsi Program</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Day-by-day Syllabus */}
          <div>
            <h3 className="text-base font-bold text-[#002147] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#C5A059]" />
              <span>Silabus & Kurikulum Pelatihan</span>
            </h3>

            <div className="space-y-4">
              {course.syllabus.map((syl, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                    <span className="text-xs font-extrabold text-[#002147] uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded">
                      {syl.day}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-800 flex-1 ml-3">
                      {syl.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {syl.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience & Prerequisites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <h4 className="font-bold text-xs uppercase text-[#002147] mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#00A8E8]" /> Target Peserta
              </h4>
              <ul className="space-y-1.5">
                {course.targetAudience.map((aud, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                    <span className="text-[#00A8E8]">•</span> {aud}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              <h4 className="font-bold text-xs uppercase text-[#002147] mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" /> Prasyarat Peserta
              </h4>
              <ul className="space-y-1.5">
                {course.prerequisites.map((pre, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                    <span className="text-amber-600">•</span> {pre}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructor Bio */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#C5A059]"
            />
            <div>
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider block">Instruktur Utama</span>
              <h4 className="font-bold text-sm text-[#002147]">{course.instructor.name}</h4>
              <p className="text-xs text-slate-600 font-medium">{course.instructor.title}</p>
              <p className="text-[11px] text-slate-500 mt-1">{course.instructor.experience}</p>
            </div>
          </div>

          {/* Certification Badge */}
          <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white p-5 rounded-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">Keluaran Sertifikasi</span>
                <p className="text-xs font-semibold text-white">{course.certification}</p>
              </div>
            </div>
          </div>

          {/* Upcoming Batches Table */}
          <div>
            <h3 className="text-base font-bold text-[#002147] mb-3">Jadwal Batch Mendatang</h3>
            <div className="space-y-2">
              {course.upcomingBatches.map((batch) => (
                <div
                  key={batch.id}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#002147] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#002147] flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#00A8E8]" /> {batch.dateRange}
                      </span>
                      <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {batch.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {batch.location}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onRegisterCourse(course.id, batch.id);
                    }}
                    className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase px-4 py-2 rounded transition-all shrink-0 text-center"
                  >
                    Pilih Batch & Daftar
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 bg-slate-100 p-4 sm:px-8 border-t border-slate-200 rounded-b-2xl flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-bold block">Investasi Total</span>
            <span className="text-lg font-extrabold text-[#002147]">{formatRupiah(course.price)}</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onRegisterCourse(course.id);
              }}
              className="bg-[#002147] hover:bg-[#001D3D] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded shadow-lg transition-all flex items-center gap-2"
            >
              <span>Formulir Pendaftaran</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
