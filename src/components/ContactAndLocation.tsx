import React, { useState } from 'react';
import { FAQS } from '../data/coursesData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export const ContactAndLocation: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Konsultasi Pelatihan',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Hubungi Kami & Pusat Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-3">
            Lokasi Kantor & Formulir Kontak
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Tim Advisor DEEP siap membantu perencanaan kebutuhan pelatihan individu maupun pengajuan proposal In-House Training instansi Anda.
          </p>
        </div>

        {/* Contact Info & Message Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Contact Information & Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#002147] text-white p-8 rounded-2xl shadow-xl space-y-6 border-b-4 border-[#C5A059]">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                DEEP Training & Learning Solutions
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Pusat Pelatihan Jakarta (Head Office):</strong>
                    <span>Gedung DEEP Learning Center, Jl. TB Simatupang No. 88, Cilandak, Jakarta Selatan 12430</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00A8E8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Pusat Simulasi Surabaya:</strong>
                    <span>Pusat Pelatihan Medis DEEP, Jl. Raya Darmo No. 120, Surabaya 60264</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Telepon / WhatsApp Admin:</strong>
                    <span>+62 812-8899-7700 / (021) 7890-1234</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-300 shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Email Resmi:</strong>
                    <span>info@deeptraining.co.id / registrasi@deeptraining.co.id</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-300 shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Jam Operasional:</strong>
                    <span>Senin - Jumat (08:00 - 17:00 WIB)</span>
                  </div>
                </div>
              </div>

              {/* Direct WA Button */}
              <a
                href="https://wa.me/6281288997700?text=Halo%20DEEP%20Training,%20saya%20ingin%20berkonsultasi"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Konsultasi WhatsApp Admin</span>
              </a>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-[#002147] mb-2">Kirim Pesan atau Pertanyaan</h3>
              <p className="text-xs text-slate-500 mb-6">
                Isi formulir di bawah ini untuk mendapatkan informasi detail silabus, penawaran harga korporat, atau konsultasi jadwal.
              </p>

              {!messageSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Email Aktif <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@domain.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Nomor HP / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="08123456789"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                        Topik Pertanyaan
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs font-medium text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                      >
                        <option value="Konsultasi Pelatihan">Konsultasi Program Pelatihan</option>
                        <option value="In-House Training">Pengajuan In-House Training Korporat</option>
                        <option value="Alat Medis CT/MRI">Informasi Pelatihan CT Scan / MRI</option>
                        <option value="Kerjasama & Akreditasi">Kerjasama Mitra & Akreditasi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase mb-1">
                      Pesan atau Detail Kebutuhan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tuliskan pesan atau pertanyaan Anda secara singkat..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:ring-2 focus:ring-[#002147] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Konsultasi</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-base text-[#002147]">Pesan Terkirim!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Terima kasih, tim advisor DEEP akan merespon pesan Anda melalui email/WhatsApp dalam waktu 1x24 jam kerja.
                  </p>
                  <button
                    onClick={() => setMessageSubmitted(false)}
                    className="bg-[#002147] text-white text-xs font-bold px-4 py-2 rounded"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <HelpCircle className="w-6 h-6 text-[#C5A059]" />
            <h3 className="text-xl font-bold text-[#002147]">Pertanyaan Sering Diajukan (FAQ)</h3>
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
