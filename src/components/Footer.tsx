import React from 'react';
import { Logo } from './Logo';
import { useContent } from '../context/ContentContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Award,
  Heart,
  Lock
} from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
  onOpenRegister: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection, onOpenRegister, onOpenAdmin }) => {
  const { siteConfig, setIsAdminOpen } = useContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001a38] text-white border-t-4 border-[#C5A059] pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-3 rounded-xl inline-block backdrop-blur-md">
              <Logo size="md" variant="dark" />
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm pt-2">
              Lembaga penyelenggara pelatihan profesional, sertifikasi kompetensi, dan solusi pembelajaran terpadu di bidang Teknologi Digital, Artificial Intelligence, Perbankan & Keuangan, serta Peralatan Medis CT Scan & MRI.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Ikuti Kami:</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded bg-white/10 hover:bg-[#00A8E8] transition-colors flex items-center justify-center text-xs font-bold">
                in
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded bg-white/10 hover:bg-[#00A8E8] transition-colors flex items-center justify-center text-xs font-bold">
                ig
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded bg-white/10 hover:bg-[#00A8E8] transition-colors flex items-center justify-center text-xs font-bold">
                yt
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded bg-white/10 hover:bg-[#00A8E8] transition-colors flex items-center justify-center text-xs font-bold">
                fb
              </a>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#C5A059]">Navigasi Utama</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('layanan')} className="hover:text-amber-300 transition-colors">
                  Bidang Layanan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('katalog')} className="hover:text-amber-300 transition-colors">
                  Katalog Kursus Lengkap
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('jadwal')} className="hover:text-amber-300 transition-colors">
                  Jadwal & Unduh Brosur
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('profil')} className="hover:text-amber-300 transition-colors">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => onOpenRegister()} className="text-amber-400 font-bold hover:underline">
                  Formulir Pendaftaran Daring
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Specialty Programs */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#C5A059]">Spesialisasi Utama</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• CT Scan Multislice Protocols</li>
              <li>• High-Field MRI 1.5T/3.0T Safety</li>
              <li>• Enterprise GenAI & RAG Agent</li>
              <li>• Applied Machine Learning</li>
              <li>• Banking Risk & AML/CFT</li>
              <li>• Digital Banking SNAP BI</li>
              <li>• ISO 27001 Cyber Security</li>
            </ul>
          </div>

          {/* Column 5: Legal & Accreditation */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#C5A059]">Kepatuhan & Kontak</h4>
            <p className="text-slate-300 leading-relaxed">
              {siteConfig.address || 'Gedung DEEP Learning Center, Jl. TB Simatupang No. 88, Jakarta Selatan.'}
            </p>
            <div className="space-y-1 text-slate-300 pt-1">
              <div>WA: {siteConfig.whatsappNumber}</div>
              <div>Email: {siteConfig.email}</div>
            </div>
            <div className="bg-white/5 p-2 rounded border border-white/10 text-[10px] text-amber-300 font-medium mt-2">
              ✓ Terakreditasi Standar Pelatihan Kemenkes & Regulator
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} <strong>DEEP Training & Learning Solutions</strong>. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenAdmin ? onOpenAdmin() : setIsAdminOpen(true)}
              className="text-[#C5A059] hover:underline flex items-center gap-1 font-bold text-xs"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Panel Admin (Kelola Konten)</span>
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={scrollToTop}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-white p-2.5 rounded-full shadow-lg transition-all"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
