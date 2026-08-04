import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Course, Testimonial, SiteConfig, RegistrationRecord, CourseCategory, CourseLevel, TrainingMode } from '../types';
import { 
  X, 
  Lock, 
  User, 
  Key, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  LogOut, 
  RotateCcw, 
  Search, 
  ExternalLink, 
  Sparkles, 
  Calendar, 
  Award,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({ isOpen, onClose }) => {
  const {
    courses,
    testimonials,
    siteConfig,
    registrations,
    isAuthenticated,
    loginAdmin,
    logoutAdmin,
    addCourse,
    updateCourse,
    deleteCourse,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    updateSiteConfig,
    updateRegistrationStatus,
    deleteRegistration,
    resetToDefaults
  } = useContent();

  // Login form state
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'courses' | 'registrations' | 'testimonials' | 'site' | 'system'>('courses');

  // Filter & Search states
  const [courseSearch, setCourseSearch] = useState('');
  const [regSearch, setRegSearch] = useState('');
  const [regStatusFilter, setRegStatusFilter] = useState<string>('all');

  // Course Edit / Create Form Modal state
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isCreatingCourse, setIsCreatingCourse] = useState<boolean>(false);

  // Testimonial Edit / Create Form Modal state
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isCreatingTestimonial, setIsCreatingTestimonial] = useState<boolean>(false);

  // Site Config Form state
  const [siteForm, setSiteForm] = useState<SiteConfig>(siteConfig);
  const [configSavedToast, setConfigSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = loginAdmin(usernameInput, passwordInput);
    if (!success) {
      setLoginError('Username atau Password salah. (User: admin | Pass: Depok2026)');
    } else {
      setUsernameInput('');
      setPasswordInput('');
    }
  };

  const handleSaveSiteConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteConfig(siteForm);
    setConfigSavedToast(true);
    setTimeout(() => setConfigSavedToast(false), 3000);
  };

  const handleCreateNewCourse = () => {
    const newCourse: Course = {
      id: `course-${Date.now()}`,
      code: `DP-${Math.floor(100 + Math.random() * 900)}`,
      title: 'Judul Program Pelatihan Baru',
      category: 'ai',
      categoryLabel: 'Artificial Intelligence',
      level: 'Menengah',
      duration: '3 Hari (24 JPL)',
      mode: 'Hybrid Learning',
      price: 4500000,
      originalPrice: 5500000,
      rating: 4.9,
      reviewCount: 10,
      featured: false,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      summary: 'Ringkasan singkat mengenai manfaat utama pelatihan ini.',
      description: 'Deskripsi lengkap mengenai cakupan materi, metodologi pembelajaran, dan hasil yang akan diraih oleh peserta.',
      syllabus: [
        {
          day: 'Hari 1',
          title: 'Fondasi Utama & Arsitektur',
          topics: ['Pendahuluan & Konsep Dasar', 'Studi Kasus Industri', 'Praktikum Hands-on Lab']
        }
      ],
      upcomingBatches: [
        {
          id: `batch-${Date.now()}-1`,
          dateRange: '15 - 17 September 2026',
          location: 'DEEP Learning Center, Jakarta / Online Live',
          quotaLeft: 10,
          status: 'Buka'
        }
      ],
      targetAudience: ['Manager TI', 'Professional / Staff Ahli', 'Praktisi Industri'],
      prerequisites: ['Memahami dasar-dasar bidang terkait'],
      certification: 'Sertifikat Kompetensi Resmi DEEP Training & Digital Badge',
      instructor: {
        name: 'Instruktur Expert DEEP',
        title: 'Senior Practitioner & Expert',
        experience: '10+ Tahun Pengalaman Industri',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
      }
    };
    setEditingCourse(newCourse);
    setIsCreatingCourse(true);
  };

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse) return;
    if (isCreatingCourse) {
      addCourse(editingCourse);
    } else {
      updateCourse(editingCourse);
    }
    setEditingCourse(null);
    setIsCreatingCourse(false);
  };

  const handleCreateNewTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: `testi-${Date.now()}`,
      name: 'Nama Alumni Baru',
      role: 'Jabatan Alumni',
      company: 'Nama Instansi / Perusahaan',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      comment: 'Komentar dan ulasan positif mengenai pengalaman pelatihan di DEEP Training.',
      courseTaken: 'Pelatihan AI & Digital Transformation',
      category: 'ai'
    };
    setEditingTestimonial(newTestimonial);
    setIsCreatingTestimonial(true);
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial) return;
    if (isCreatingTestimonial) {
      addTestimonial(editingTestimonial);
    } else {
      updateTestimonial(editingTestimonial);
    }
    setEditingTestimonial(null);
    setIsCreatingTestimonial(false);
  };

  const filteredCourses = courses.filter(c => 
    c.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
    c.code.toLowerCase().includes(courseSearch.toLowerCase()) ||
    c.categoryLabel.toLowerCase().includes(courseSearch.toLowerCase())
  );

  const filteredRegistrations = registrations.filter(r => {
    const matchesSearch = 
      r.fullName.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.code.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.courseTitle.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.companyName.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.whatsapp.includes(regSearch);

    const matchesStatus = regStatusFilter === 'all' || r.status === regStatusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Header Modal Bar */}
        <div className="bg-[#001f3f] text-white p-4 sm:p-5 flex items-center justify-between shrink-0 border-b-2 border-[#C5A059]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg tracking-wide text-white flex items-center gap-2">
                Panel Admin DEEP Training
                {isAuthenticated && (
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-emerald-500/40">
                    Online
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-300">Sistem Pengelolaan Konten, Katalog Program & Data Pendaftar</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={logoutAdmin}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/40 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* LOGIN SCREEN */
          <div className="p-6 sm:p-10 max-w-md mx-auto my-auto w-full text-center space-y-6">
            <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center mx-auto text-[#C5A059] shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-[#002147]">Autentikasi Pengelola Admin</h4>
              <p className="text-xs text-slate-500 mt-1">Masukkan kredensial keamanan untuk mengakses panel kontrol.</p>
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-xl flex items-center gap-2 text-left">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Username Admin</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Masukkan Username"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password Admin</label>
                <div className="relative">
                  <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Masukkan Password"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#002147] hover:bg-[#00142d] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Masuk Panel Admin</span>
              </button>
            </form>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 text-left leading-relaxed">
              <strong>Kredensial Default:</strong><br />
              • Username: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold text-amber-950">admin</code><br />
              • Password: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold text-amber-950">Depok2026</code>
            </div>
          </div>
        ) : (
          /* AUTHENTICATED ADMIN DASHBOARD */
          <div className="flex flex-col h-full overflow-hidden">
            
            {/* Tabs Bar */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 pt-2 flex gap-1 overflow-x-auto shrink-0">
              <button
                onClick={() => setActiveTab('courses')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold flex items-center gap-2 transition-colors ${
                  activeTab === 'courses' 
                    ? 'bg-white text-[#002147] border-t-2 border-x border-[#C5A059] shadow-xs' 
                    : 'text-slate-600 hover:text-[#002147] hover:bg-slate-200/60'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#00A8E8]" />
                <span>Katalog Program ({courses.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('registrations')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold flex items-center gap-2 transition-colors relative ${
                  activeTab === 'registrations' 
                    ? 'bg-white text-[#002147] border-t-2 border-x border-[#C5A059] shadow-xs' 
                    : 'text-slate-600 hover:text-[#002147] hover:bg-slate-200/60'
                }`}
              >
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Pendaftar & Leads ({registrations.length})</span>
                {registrations.filter(r => r.status === 'Baru').length > 0 && (
                  <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ml-1 animate-pulse">
                    {registrations.filter(r => r.status === 'Baru').length} Baru
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold flex items-center gap-2 transition-colors ${
                  activeTab === 'testimonials' 
                    ? 'bg-white text-[#002147] border-t-2 border-x border-[#C5A059] shadow-xs' 
                    : 'text-slate-600 hover:text-[#002147] hover:bg-slate-200/60'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-amber-500" />
                <span>Ulasan Alumni ({testimonials.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('site')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold flex items-center gap-2 transition-colors ${
                  activeTab === 'site' 
                    ? 'bg-white text-[#002147] border-t-2 border-x border-[#C5A059] shadow-xs' 
                    : 'text-slate-600 hover:text-[#002147] hover:bg-slate-200/60'
                }`}
              >
                <Settings className="w-4 h-4 text-cyan-600" />
                <span>Pengaturan Kontak</span>
              </button>

              <button
                onClick={() => setActiveTab('system')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold flex items-center gap-2 transition-colors ${
                  activeTab === 'system' 
                    ? 'bg-white text-[#002147] border-t-2 border-x border-[#C5A059] shadow-xs' 
                    : 'text-slate-600 hover:text-[#002147] hover:bg-slate-200/60'
                }`}
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>System & Reset</span>
              </button>
            </div>

            {/* Tab Views Container */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-50">

              {/* TAB 1: COURSES MANAGEMENT */}
              {activeTab === 'courses' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Cari program berdasarkan judul, kode, atau kategori..."
                        value={courseSearch}
                        onChange={(e) => setCourseSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>

                    <button
                      onClick={handleCreateNewCourse}
                      className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase px-4 py-2 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Program Baru</span>
                    </button>
                  </div>

                  {/* Course Cards / Table */}
                  <div className="grid grid-cols-1 gap-3">
                    {filteredCourses.map((course) => (
                      <div 
                        key={course.id}
                        className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:border-[#C5A059]/60 transition-all flex flex-col md:flex-row justify-between gap-4 items-start md:items-center"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-16 h-16 rounded-lg object-cover shrink-0 border border-slate-200"
                          />
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="bg-slate-100 text-slate-700 font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                                {course.code}
                              </span>
                              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                {course.categoryLabel}
                              </span>
                              <span className="text-[11px] text-slate-500">
                                {course.duration} • {course.mode}
                              </span>
                            </div>
                            <h4 className="font-extrabold text-sm text-[#002147]">{course.title}</h4>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{course.summary}</p>
                            <div className="text-xs font-bold text-[#C5A059] mt-1">
                              Rp {course.price.toLocaleString('id-ID')}
                              {course.originalPrice && (
                                <span className="text-slate-400 line-through text-[11px] ml-2 font-normal">
                                  Rp {course.originalPrice.toLocaleString('id-ID')}
                                </span>
                              )}
                              <span className="text-slate-400 font-normal text-[11px] ml-3">
                                ({course.upcomingBatches?.length || 0} Batch Tersedia)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          <button
                            onClick={() => {
                              setEditingCourse({ ...course });
                              setIsCreatingCourse(false);
                            }}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                          >
                            <Edit className="w-3.5 h-3.5 text-[#002147]" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Apakah Anda yakin ingin menghapus program "${course.title}"?`)) {
                                deleteCourse(course.id);
                              }
                            }}
                            className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Hapus</span>
                          </button>
                        </div>
                      </div>
                    ))}

                    {filteredCourses.length === 0 && (
                      <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
                        Tidak ada program pelatihan yang sesuai dengan kata kunci "{courseSearch}".
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: REGISTRATIONS & LEADS */}
              {activeTab === 'registrations' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Cari berdasarkan nama pendaftar, instansi, WA, atau kode..."
                        value={regSearch}
                        onChange={(e) => setRegSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <label className="text-xs font-bold text-slate-600">Status:</label>
                      <select
                        value={regStatusFilter}
                        onChange={(e) => setRegStatusFilter(e.target.value)}
                        className="py-1.5 px-3 rounded-lg border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      >
                        <option value="all">Semua Status</option>
                        <option value="Baru">Baru</option>
                        <option value="Dikonfirmasi">Dikonfirmasi</option>
                        <option value="Selesai">Selesai</option>
                        <option value="Dibatalkan">Dibatalkan</option>
                      </select>
                    </div>
                  </div>

                  {/* Registrations List */}
                  <div className="space-y-3">
                    {filteredRegistrations.map((reg) => {
                      const waMsg = encodeURIComponent(`Halo ${reg.fullName}, kami dari Admin DEEP Training & Learning Solutions ingin mengonfirmasi pendaftaran Anda untuk program ${reg.courseTitle} (Kode: ${reg.code}). Mohon info jadwal pengerjaan invoice/pembayaran.`);
                      const waLink = `https://wa.me/62${reg.whatsapp.replace(/^0/, '')}?text=${waMsg}`;

                      return (
                        <div 
                          key={reg.id}
                          className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:border-slate-300 transition-all"
                        >
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-[#002147] bg-slate-100 px-2 py-0.5 rounded">
                                {reg.code}
                              </span>
                              <span className="text-[11px] text-slate-400">
                                {reg.submittedAt}
                              </span>
                              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                                reg.status === 'Baru' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                                reg.status === 'Dikonfirmasi' ? 'bg-blue-100 text-blue-900 border border-blue-300' :
                                reg.status === 'Selesai' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' :
                                'bg-slate-100 text-slate-600'
                              }`}>
                                {reg.status}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] px-3 py-1 rounded-lg transition-all flex items-center gap-1 shadow-xs"
                              >
                                <Phone className="w-3 h-3" />
                                <span>Hubungi WA</span>
                              </a>

                              <select
                                value={reg.status}
                                onChange={(e) => updateRegistrationStatus(reg.id, e.target.value as any)}
                                className="text-xs font-bold py-1 px-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none"
                              >
                                <option value="Baru">Ubah: Baru</option>
                                <option value="Dikonfirmasi">Ubah: Dikonfirmasi</option>
                                <option value="Selesai">Ubah: Selesai</option>
                                <option value="Dibatalkan">Ubah: Dibatalkan</option>
                              </select>

                              <button
                                onClick={() => {
                                  if (window.confirm(`Hapus pendaftar ${reg.fullName}?`)) {
                                    deleteRegistration(reg.id);
                                  }
                                }}
                                className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                            <div>
                              <div className="text-slate-400 text-[10px] font-bold uppercase">Calon Peserta</div>
                              <div className="font-bold text-slate-800">{reg.fullName}</div>
                              <div className="text-slate-500">{reg.email} • {reg.whatsapp}</div>
                            </div>

                            <div>
                              <div className="text-slate-400 text-[10px] font-bold uppercase">Program & Batch</div>
                              <div className="font-bold text-[#002147]">{reg.courseTitle}</div>
                              <div className="text-slate-500">{reg.batchDate}</div>
                            </div>

                            <div>
                              <div className="text-slate-400 text-[10px] font-bold uppercase">Instansi & Pembayaran</div>
                              <div className="font-bold text-slate-800">{reg.companyName || 'Individu'} ({reg.jobTitle || 'Profesional'})</div>
                              <div className="text-amber-800 font-semibold">{reg.paymentMethod} ({reg.participantType})</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {filteredRegistrations.length === 0 && (
                      <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
                        Belum ada data pendaftar online yang sesuai.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: TESTIMONIALS */}
              {activeTab === 'testimonials' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <h4 className="font-bold text-xs text-[#002147]">Daftar Ulasan & Testimoni Alumni</h4>
                    <button
                      onClick={handleCreateNewTestimonial}
                      className="bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Testimoni</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {testimonials.map((t) => (
                      <div key={t.id} className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs relative space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border" />
                            <div>
                              <h5 className="font-bold text-xs text-[#002147]">{t.name}</h5>
                              <p className="text-[11px] text-slate-500">{t.role} - {t.company}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => {
                                setEditingTestimonial({ ...t });
                                setIsCreatingTestimonial(false);
                              }}
                              className="p-1 text-slate-600 hover:text-[#002147]"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => deleteTestimonial(t.id)}
                              className="p-1 text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          "{t.comment}"
                        </p>
                        <div className="text-[11px] font-bold text-[#C5A059]">
                          Program: {t.courseTaken}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SITE & CONTACT CONFIG */}
              {activeTab === 'site' && (
                <form onSubmit={handleSaveSiteConfig} className="space-y-4 max-w-2xl bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h4 className="font-extrabold text-sm text-[#002147] border-b border-slate-100 pb-2">
                    Pengaturan Kontak Resmi & Konten Banner
                  </h4>

                  {configSavedToast && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3 rounded-xl flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Pengaturan kontak & banner berhasil diperbarui secara langsung!</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nomor WhatsApp Resmi</label>
                      <input
                        type="text"
                        required
                        value={siteForm.whatsappNumber}
                        onChange={(e) => setSiteForm({ ...siteForm, whatsappNumber: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Resmi Info</label>
                      <input
                        type="email"
                        required
                        value={siteForm.email}
                        onChange={(e) => setSiteForm({ ...siteForm, email: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Kantor DEEP Learning</label>
                    <textarea
                      rows={2}
                      value={siteForm.address}
                      onChange={(e) => setSiteForm({ ...siteForm, address: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Judul Utama Hero Banner</label>
                    <input
                      type="text"
                      value={siteForm.heroTitle}
                      onChange={(e) => setSiteForm({ ...siteForm, heroTitle: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi Sub-Judul Hero</label>
                    <textarea
                      rows={2}
                      value={siteForm.heroSubtitle}
                      onChange={(e) => setSiteForm({ ...siteForm, heroSubtitle: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#002147] hover:bg-[#00142d] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>Simpan Perubahan Kontak</span>
                  </button>
                </form>
              )}

              {/* TAB 5: SYSTEM & RESET */}
              {activeTab === 'system' && (
                <div className="space-y-6 max-w-2xl bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <div>
                    <h4 className="font-extrabold text-sm text-[#002147]">Status Sistem & Pemulihan Data</h4>
                    <p className="text-xs text-slate-500 mt-1">Kelola penyimpanan data lokal dan opsi pemulihan data pabrik.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xl font-extrabold text-[#002147]">{courses.length}</div>
                      <div className="text-[11px] text-slate-500 font-medium">Total Program</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xl font-extrabold text-emerald-600">{registrations.length}</div>
                      <div className="text-[11px] text-slate-500 font-medium">Total Pendaftar</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xl font-extrabold text-amber-600">{testimonials.length}</div>
                      <div className="text-[11px] text-slate-500 font-medium">Total Ulasan</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <h5 className="text-xs font-bold text-red-600 mb-2">Risiko & Pemulihan Pabrik</h5>
                    <p className="text-xs text-slate-600 mb-4">
                      Jika Anda ingin mengembalikan semua data katalog, kontak, dan ulasan ke kondisi awal bawaan aplikasi, tekan tombol di bawah ini.
                    </p>
                    <button
                      onClick={() => {
                        if (window.confirm('APAKAH ANDA YAKIN? Seluruh perubahan program, kontak, dan pendaftar akan dikembalikan ke data default pabrik!')) {
                          resetToDefaults();
                          alert('Seluruh data berhasil dikembalikan ke default.');
                        }
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset Semua Data ke Default</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* COURSE EDIT / CREATE SUB-MODAL */}
      {editingCourse && (
        <div className="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h4 className="font-extrabold text-base text-[#002147]">
                {isCreatingCourse ? 'Tambah Program Pelatihan Baru' : `Edit Program: ${editingCourse.title}`}
              </h4>
              <button onClick={() => setEditingCourse(null)} className="p-1 rounded text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCourse} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kode Program</label>
                  <input
                    type="text"
                    required
                    value={editingCourse.code}
                    onChange={(e) => setEditingCourse({ ...editingCourse, code: e.target.value })}
                    className="w-full p-2 rounded-lg border text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kategori Utama</label>
                  <select
                    value={editingCourse.category}
                    onChange={(e) => {
                      const cat = e.target.value as CourseCategory;
                      const labels: Record<string, string> = {
                        ai: 'Artificial Intelligence',
                        medical: 'Alat Medis CT Scan & MRI',
                        banking: 'Perbankan & Financial Risk',
                        digital: 'Cyber Security & Digital IT'
                      };
                      setEditingCourse({ 
                        ...editingCourse, 
                        category: cat as any, 
                        categoryLabel: labels[cat] || 'Umum' 
                      });
                    }}
                    className="w-full p-2 rounded-lg border text-xs"
                  >
                    <option value="ai">Artificial Intelligence</option>
                    <option value="medical">Alat Medis CT Scan & MRI</option>
                    <option value="banking">Perbankan & Financial Risk</option>
                    <option value="digital">Cyber Security & Digital IT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Judul Lengkap Program</label>
                <input
                  type="text"
                  required
                  value={editingCourse.title}
                  onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                  className="w-full p-2 rounded-lg border text-xs font-bold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Biaya / Harga (IDR)</label>
                  <input
                    type="number"
                    required
                    value={editingCourse.price}
                    onChange={(e) => setEditingCourse({ ...editingCourse, price: Number(e.target.value) })}
                    className="w-full p-2 rounded-lg border text-xs font-bold text-amber-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Durasi</label>
                  <input
                    type="text"
                    required
                    value={editingCourse.duration}
                    onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                    className="w-full p-2 rounded-lg border text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mode Pelatihan</label>
                  <select
                    value={editingCourse.mode}
                    onChange={(e) => setEditingCourse({ ...editingCourse, mode: e.target.value as TrainingMode })}
                    className="w-full p-2 rounded-lg border text-xs"
                  >
                    <option value="Hybrid Learning">Hybrid Learning</option>
                    <option value="Tatap Muka (Offline)">Tatap Muka (Offline)</option>
                    <option value="Online Live Interactive">Online Live Interactive</option>
                    <option value="In-House Training">In-House Training</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">URL Gambar Sampul</label>
                <input
                  type="text"
                  required
                  value={editingCourse.image}
                  onChange={(e) => setEditingCourse({ ...editingCourse, image: e.target.value })}
                  className="w-full p-2 rounded-lg border text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Ringkasan Singkat (Summary)</label>
                <textarea
                  rows={2}
                  required
                  value={editingCourse.summary}
                  onChange={(e) => setEditingCourse({ ...editingCourse, summary: e.target.value })}
                  className="w-full p-2 rounded-lg border text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi Lengkap</label>
                <textarea
                  rows={3}
                  required
                  value={editingCourse.description}
                  onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
                  className="w-full p-2 rounded-lg border text-xs"
                />
              </div>

              <div className="border-t pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="px-4 py-2 rounded-lg border text-xs font-bold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#002147] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Simpan Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TESTIMONIAL EDIT / CREATE SUB-MODAL */}
      {editingTestimonial && (
        <div className="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h4 className="font-extrabold text-base text-[#002147]">
                {isCreatingTestimonial ? 'Tambah Ulasan Alumni Baru' : 'Edit Ulasan Alumni'}
              </h4>
              <button onClick={() => setEditingTestimonial(null)} className="p-1 rounded text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTestimonial} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Alumni</label>
                <input
                  type="text"
                  required
                  value={editingTestimonial.name}
                  onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                  className="w-full p-2 rounded-lg border text-xs font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Jabatan / Posisi</label>
                  <input
                    type="text"
                    required
                    value={editingTestimonial.role}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                    className="w-full p-2 rounded-lg border text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Instansi / RS</label>
                  <input
                    type="text"
                    required
                    value={editingTestimonial.company}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, company: e.target.value })}
                    className="w-full p-2 rounded-lg border text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Program Yang Diikuti</label>
                <input
                  type="text"
                  required
                  value={editingTestimonial.courseTaken}
                  onChange={(e) => setEditingTestimonial({ ...editingTestimonial, courseTaken: e.target.value })}
                  className="w-full p-2 rounded-lg border text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Ulasan / Testimoni</label>
                <textarea
                  rows={3}
                  required
                  value={editingTestimonial.comment}
                  onChange={(e) => setEditingTestimonial({ ...editingTestimonial, comment: e.target.value })}
                  className="w-full p-2 rounded-lg border text-xs"
                />
              </div>

              <div className="border-t pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingTestimonial(null)}
                  className="px-4 py-2 rounded-lg border text-xs font-bold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#002147] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Simpan Testimoni
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
