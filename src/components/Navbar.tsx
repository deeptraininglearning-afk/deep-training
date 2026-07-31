import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles,
  Search,
  BookmarkCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenRegister: (courseId?: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'layanan', label: 'Bidang Layanan' },
    { id: 'katalog', label: 'Katalog Kursus' },
    { id: 'jadwal', label: 'Jadwal & Brosur' },
    { id: 'profil', label: 'Tentang Kami' },
    { id: 'sosmed', label: 'Media Sosial' },
    { id: 'kontak', label: 'Kontak' },
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
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#002147] text-white text-xs py-2 px-4 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-slate-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#00A8E8]" />
              +62 812-8899-7700 / (021) 7890-1234
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#00A8E8]" />
              info@deeptraining.co.id
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-amber-300 font-medium">
              <BookmarkCheck className="w-3.5 h-3.5" />
              Lembaga Pelatihan Terakreditasi BAPETEN & Kemenkes Compliance
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded bg-white/10 hover:bg-[#00A8E8] transition-colors flex items-center justify-center text-white" title="LinkedIn">
                <span className="font-bold text-[10px]">in</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded bg-white/10 hover:bg-[#00A8E8] transition-colors flex items-center justify-center text-white" title="Instagram">
                <span className="font-bold text-[10px]">ig</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded bg-white/10 hover:bg-[#00A8E8] transition-colors flex items-center justify-center text-white" title="YouTube">
                <span className="font-bold text-[10px]">yt</span>
              </a>
            </div>

            {/* Direct WhatsApp CTA */}
            <a 
              href="https://wa.me/6281288997700?text=Halo%20DEEP%20Training,%20saya%20ingin%20berkonsultasi%20mengenai%20program%20pelatihan"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-2.5 py-1 rounded flex items-center gap-1 transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Konsultasi WA</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded p-1 transition-opacity hover:opacity-95"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors relative py-1 ${
                  isActive 
                    ? 'text-[#002147] font-bold' 
                    : 'text-slate-600 hover:text-[#002147]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C5A059] rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('katalog')}
            className="p-2 text-slate-600 hover:text-[#002147] hover:bg-slate-100 rounded-full transition-colors"
            title="Cari Kursus"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => onOpenRegister()}
            className="bg-[#C5A059] hover:bg-[#b08d48] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Pendaftaran Daring</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenRegister()}
            className="bg-[#C5A059] text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm flex items-center gap-1"
          >
            Daftar
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slideout Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 animate-fadeIn px-4 py-5 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-between text-left py-2.5 px-3 rounded hover:bg-slate-800 text-sm font-medium border-b border-slate-800/50"
              >
                <span className={activeSection === item.id ? 'text-[#C5A059] font-bold' : 'text-slate-200'}>
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full bg-[#C5A059] text-white text-xs font-bold uppercase py-3 rounded text-center shadow-lg"
              >
                Formulir Pendaftaran Daring
              </button>
              <a
                href="https://wa.me/6281288997700"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 text-white text-xs font-bold py-3 rounded text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
