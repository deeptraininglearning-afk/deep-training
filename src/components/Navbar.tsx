import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  BookmarkCheck,
  ShieldCheck
} from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface NavbarProps {
  onOpenRegister: (courseId?: string) => void;
  onOpenAdmin: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenAdmin, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { siteConfig, isAuthenticated } = useContent();

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'layanan', label: 'Bidang Layanan' },
    { id: 'katalog', label: 'Katalog Kursus' },
    { id: 'jadwal', label: 'Jadwal & Brosur' },
    { id: 'profil', label: 'Tentang Kami' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Bar - Clean Contact & Accreditations */}
      <div className="bg-[#001f3f] text-white text-xs py-2 px-4 border-b border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-5 text-slate-300 text-[11px] sm:text-xs">
            <a href="tel:+6281380050039" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#00A8E8]" />
              <span className="font-semibold tracking-wide">0813-8005-0039</span>
            </a>
            <a href="mailto:info@deeptraining.id" className="hidden sm:flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#00A8E8]" />
              <span>info@deeptraining.id</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-amber-300 font-medium border-l border-white/20 pl-4 text-[11px]">
              <BookmarkCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              Lembaga Terakreditasi BNSP & Compliance Kemenkes
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs">
            <a 
              href={`https://wa.me/62${siteConfig.whatsappNumber.replace(/[^0-9]/g, '').replace(/^0/, '')}?text=Halo%20DEEP%20Training,%20saya%20ingin%20berkonsultasi%20mengenai%20program%20pelatihan`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 transition-all shadow-xs text-[11px]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Konsultasi WhatsApp</span>
            </a>

            <button
              onClick={onOpenAdmin}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold px-3 py-1 rounded-full flex items-center gap-1.5 transition-all shadow-xs text-[11px]"
              title="Panel Admin Pengelola Konten"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAuthenticated ? 'Admin (Aktif)' : 'Panel Admin'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none rounded p-0.5 transition-opacity hover:opacity-95"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'text-[#002147] bg-amber-500/10 font-bold border-b-2 border-[#C5A059]'
                    : 'text-slate-600 hover:text-[#002147] hover:bg-slate-100/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenRegister()}
            className="hidden sm:flex bg-[#002147] hover:bg-[#00142d] text-white text-xs font-bold px-4 py-2.5 rounded-xl tracking-wider uppercase transition-all shadow-xs hover:shadow-md items-center gap-1.5"
          >
            <span>Daftar Pelatihan</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#002147] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-slate-100 text-[#002147] font-bold border-l-4 border-[#C5A059]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full bg-[#002147] text-white text-xs font-bold py-3 rounded-lg uppercase tracking-wider text-center"
            >
              Formulir Pendaftaran
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full bg-[#C5A059] text-white text-xs font-bold py-2.5 rounded-lg uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isAuthenticated ? 'Panel Admin (Aktif)' : 'Panel Admin (Pengelola)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
