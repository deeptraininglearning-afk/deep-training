import React, { useState, useEffect } from 'react';
import { Course, RegistrationData } from '../types';
import { useContent } from '../context/ContentContext';
import { 
  X, 
  CheckCircle2, 
  Send, 
  FileText, 
  Sparkles, 
  MessageCircle, 
  Building, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  CreditCard,
  Printer,
  Download,
  ShieldCheck,
  Check
} from 'lucide-react';

interface RegistrationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  initialCourseId?: string;
  initialBatchId?: string;
}

export const RegistrationFormModal: React.FC<RegistrationFormModalProps> = ({
  isOpen,
  onClose,
  courses,
  initialCourseId,
  initialBatchId,
}) => {
  const { addRegistration, siteConfig } = useContent();
  const [formData, setFormData] = useState<RegistrationData>({
    courseId: '',
    courseTitle: '',
    batchId: '',
    batchDate: '',
    fullName: '',
    email: '',
    whatsapp: '',
    companyName: '',
    jobTitle: '',
    participantType: 'Individu',
    notes: '',
    paymentMethod: 'Transfer Bank / Invoice',
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationCode, setRegistrationCode] = useState('');

  // Auto initialize selected course
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setStep(1);
      
      const targetCourse = courses.find((c) => c.id === initialCourseId) || courses[0];
      const targetBatch = targetCourse
        ? targetCourse.upcomingBatches.find((b) => b.id === initialBatchId) || targetCourse.upcomingBatches[0]
        : null;

      setFormData((prev) => ({
        ...prev,
        courseId: targetCourse ? targetCourse.id : '',
        courseTitle: targetCourse ? targetCourse.title : '',
        batchId: targetBatch ? targetBatch.id : '',
        batchDate: targetBatch ? targetBatch.dateRange : '',
      }));
    }
  }, [isOpen, initialCourseId, initialBatchId, courses]);

  if (!isOpen) return null;

  const currentCourse = courses.find((c) => c.id === formData.courseId) || courses[0];

  const handleCourseChange = (courseId: string) => {
    const selected = courses.find((c) => c.id === courseId);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        courseId: selected.id,
        courseTitle: selected.title,
        batchId: selected.upcomingBatches[0]?.id || '',
        batchDate: selected.upcomingBatches[0]?.dateRange || '',
      }));
    }
  };

  const handleBatchChange = (batchId: string) => {
    if (currentCourse) {
      const batch = currentCourse.upcomingBatches.find((b) => b.id === batchId);
      if (batch) {
        setFormData((prev) => ({
          ...prev,
          batchId: batch.id,
          batchDate: batch.dateRange,
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const record = addRegistration(formData);
    setRegistrationCode(record.code);
    setIsSubmitted(true);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Admin DEEP Training & Learning Solutions,\nSaya telah melakukan pendaftaran online dengan data berikut:\n` +
    `• Kode Registrasi: ${registrationCode}\n` +
    `• Nama: ${formData.fullName}\n` +
    `• Instansi: ${formData.companyName || 'Individu'}\n` +
    `• Kursus: ${formData.courseTitle}\n` +
    `• Jadwal: ${formData.batchDate}\n` +
    `• Metode Pembayaran: ${formData.paymentMethod}\n\nMohon informasi petunjuk invoice dan verifikasi pendaftaran. Terima kasih!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#002147] text-white p-6 border-b-2 border-[#C5A059] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center font-bold text-white text-lg shadow">
              D
            </div>
            <div>
              <span className="text-[10px] text-amber-300 font-bold uppercase tracking-widest block">Formulir Resmi</span>
              <h2 className="text-xl font-bold text-white">Pendaftaran Daring DEEP</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Tutup Formulir"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!isSubmitted ? (
          <div>
            {/* Steps Navigation Bar */}
            <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
              <div className={`py-1.5 rounded-md ${step >= 1 ? 'bg-[#002147] text-white' : 'text-slate-500'}`}>
                1. Pilih Program
              </div>
              <div className={`py-1.5 rounded-md ${step >= 2 ? 'bg-[#002147] text-white' : 'text-slate-500'}`}>
                2. Data Peserta
              </div>
              <div className={`py-1.5 rounded-md ${step >= 3 ? 'bg-[#002147] text-white' : 'text-slate-500'}`}>
                3. Pembayaran
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* STEP 1: Program & Batch */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                      Pilih Program Pelatihan <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.courseId}
                      onChange={(e) => handleCourseChange(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs font-medium text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                    >
                      {courses.map((c) => (
                        <option key={c.id} value={c.id}>
                          [{c.code}] {c.title} - {formatRupiah(c.price)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {currentCourse && (
                    <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100 text-xs">
                      <div className="font-bold text-[#002147]">{currentCourse.title}</div>
                      <div className="text-slate-600 text-[11px] mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <span>• Durasi: <strong>{currentCourse.duration}</strong></span>
                        <span>• Metode: <strong>{currentCourse.mode}</strong></span>
                        <span>• Sertifikasi: <strong>{currentCourse.certification}</strong></span>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                      Pilih Jadwal Batch / Lokasi <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.batchId}
                      onChange={(e) => handleBatchChange(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs font-medium text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                    >
                      {currentCourse?.upcomingBatches.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.dateRange} | {b.location} ({b.status})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                      Kategori Keikutsertaan
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, participantType: 'Individu' })}
                        className={`p-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          formData.participantType === 'Individu'
                            ? 'bg-[#002147] text-white border-[#002147]'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <User className="w-4 h-4" />
                        <span>Peserta Individu</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, participantType: 'Utusan Perusahaan' })}
                        className={`p-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          formData.participantType === 'Utusan Perusahaan'
                            ? 'bg-[#002147] text-white border-[#002147]'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <Building className="w-4 h-4" />
                        <span>Utusan Perusahaan / RS</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase px-6 py-3 rounded shadow transition-all"
                    >
                      Lanjut: Data Peserta &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Participant Info */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                      Nama Lengkap (Lengkap dengan Gelar) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: dr. Ahmad Subagyo, Sp.Rad / Budi Hartono, S.T."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Email Aktif <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@instansi.co.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Nomor WhatsApp / HP <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Nama Instansi / Rumah Sakit / Perusahaan
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: RSUP Nasional / Bank BCA / Mandiri"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Jabatan / Posisi
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Radiografer / Risk Analyst / CTO"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="bg-slate-200 text-slate-700 font-bold text-xs uppercase px-5 py-3 rounded"
                    >
                      &larr; Kembali
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.fullName || !formData.email || !formData.whatsapp) {
                          alert('Mohon isi Nama Lengkap, Email, dan Nomor WhatsApp Anda.');
                          return;
                        }
                        setStep(3);
                      }}
                      className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase px-6 py-3 rounded shadow transition-all"
                    >
                      Lanjut: Metode Pembayaran &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Payment & Confirmation */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase mb-2">
                      Pilih Metode Pembayaran / Skema Pembayaran
                    </label>
                    <div className="space-y-2">
                      {[
                        'Transfer Bank / Invoice Resmi (Virtual Account BNI/Mandiri/BCA)',
                        'E-Wallet (QRIS / GoPay / OVO)',
                        'Kartu Kredit / Debit Online',
                        'Purchase Order (PO B2B Perusahaan / Faktur Pajak)'
                      ].map((method, idx) => (
                        <label
                          key={idx}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer text-xs transition-colors ${
                            formData.paymentMethod === method
                              ? 'bg-amber-50 border-[#C5A059] font-bold text-[#002147]'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={formData.paymentMethod === method}
                            onChange={() => setFormData({ ...formData, paymentMethod: method as any })}
                            className="text-[#002147] focus:ring-[#002147]"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                      Catatan Tambahan / Permintaan Khusus
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Membutuhkan Faktur Pajak instansi, usulan akomodasi hotel, dsb."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
                    <div className="font-bold text-[#002147] text-sm border-b border-slate-200 pb-1.5 mb-1.5">
                      Ringkasan Pendaftaran
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Program:</span>
                      <span className="font-semibold text-slate-800">{formData.courseTitle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Jadwal:</span>
                      <span className="font-semibold text-slate-800">{formData.batchDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Peserta:</span>
                      <span className="font-semibold text-slate-800">{formData.fullName} ({formData.participantType})</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-200 text-sm font-extrabold text-[#002147]">
                      <span>Total Biaya Pelatihan:</span>
                      <span>{formatRupiah(currentCourse ? currentCourse.price : 0)}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-slate-200 text-slate-700 font-bold text-xs uppercase px-5 py-3 rounded"
                    >
                      &larr; Kembali
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded shadow-lg transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pendaftaran Daring</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          /* SUCCESS REGISTRATION RECEIPT */
          <div className="p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-[#002147]">Pendaftaran Daring Berhasil!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Terima kasih, pendaftaran Anda telah tercatat di sistem DEEP Training & Learning Solutions.
              </p>
            </div>

            {/* Print Ticket Card */}
            <div id="registration-receipt" className="bg-slate-50 border-2 border-dashed border-[#002147] p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Kode Registrasi Unik</span>
                  <span className="text-lg font-mono font-bold text-[#002147]">{registrationCode}</span>
                </div>
                <div className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full">
                  Status: Terkonfirmasi
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Nama Peserta</span>
                  <span className="font-semibold text-slate-800">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Instansi / HP</span>
                  <span className="font-semibold text-slate-800">{formData.companyName || '-'} / {formData.whatsapp}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Program Kursus</span>
                  <span className="font-semibold text-slate-800">{formData.courseTitle}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Jadwal Pelatihan</span>
                  <span className="font-semibold text-slate-800">{formData.batchDate}</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs flex justify-between items-center">
                <span className="text-slate-600 font-medium">Metode Pembayaran Selected:</span>
                <span className="font-bold text-[#002147]">{formData.paymentMethod}</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/6281380050039?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Konfirmasi via WhatsApp Admin</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handlePrintReceipt}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-lg text-xs uppercase flex items-center justify-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Simpan Bukti</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full bg-[#002147] hover:bg-[#001D3D] text-white font-bold py-3 rounded-lg text-xs uppercase"
                >
                  Selesai
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
