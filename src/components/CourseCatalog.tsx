import React, { useState, useMemo } from 'react';
import { Course, CourseCategory, CourseLevel, TrainingMode } from '../types';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  BookOpen, 
  UserCheck, 
  Check, 
  Sparkles,
  ChevronRight,
  ShieldAlert,
  SlidersHorizontal,
  X
} from 'lucide-react';

interface CourseCatalogProps {
  courses: Course[];
  selectedCategory: CourseCategory;
  setSelectedCategory: (category: CourseCategory) => void;
  onOpenCourseDetail: (course: Course) => void;
  onOpenRegister: (courseId?: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  courses,
  selectedCategory,
  setSelectedCategory,
  onOpenCourseDetail,
  onOpenRegister,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price-low' | 'price-high'>('popular');

  const categories: { id: CourseCategory; label: string }[] = [
    { id: 'all', label: 'Semua Kursus' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'medical', label: 'CT Scan & MRI Medis' },
    { id: 'banking', label: 'Perbankan & Keuangan' },
    { id: 'digital', label: 'Digital & Cyber Tech' },
  ];

  // Filter & Search Logic
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Category Match
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false;
      }

      // Search Match
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesCode = course.code.toLowerCase().includes(query);
        const matchesSummary = course.summary.toLowerCase().includes(query);
        const matchesInstructor = course.instructor.name.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCode && !matchesSummary && !matchesInstructor) {
          return false;
        }
      }

      // Level Match
      if (selectedLevel !== 'all' && course.level !== selectedLevel) {
        return false;
      }

      // Mode Match
      if (selectedMode !== 'all' && course.mode !== selectedMode) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return b.reviewCount - a.reviewCount; // popular
    });
  }, [courses, selectedCategory, searchTerm, selectedLevel, selectedMode, sortBy]);

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="katalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Katalog Kursus Lengkap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-3">
            Program Pelatihan & Sertifikasi Industri
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Pilih program pelatihan profesional sesuai jenjang karier dan kebutuhan teknologi instansi Anda.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-6">
          
          {/* Top Row: Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#002147] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                {selectedCategory === cat.id && (
                  <span className="bg-[#C5A059] text-white text-[10px] w-4 h-4 rounded-full inline-flex items-center justify-center">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Bottom Row: Search & Sub-filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari kata kunci (cth: CT Scan, AI, Risk, Cyber)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-lg text-xs border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147]"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-xs border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#002147]"
              >
                <option value="all">Semua Level Peserta</option>
                <option value="Pemula">Pemula (Basic)</option>
                <option value="Menengah">Menengah (Intermediate)</option>
                <option value="Lanjutan">Lanjutan (Advanced)</option>
                <option value="Executive">Executive Level</option>
              </select>
            </div>

            {/* Mode Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-xs border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#002147]"
              >
                <option value="all">Semua Metode</option>
                <option value="Tatap Muka (Offline)">Tatap Muka (Lab)</option>
                <option value="Online Live Interactive">Online Live</option>
                <option value="Hybrid Learning">Hybrid Learning</option>
              </select>
            </div>

            {/* Sorting */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-xs border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#002147]"
              >
                <option value="popular">Terpopuler</option>
                <option value="rating">Rating Tergi</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
              </select>
            </div>

          </div>

        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6 text-xs text-slate-500">
          <span>Menampilkan <strong>{filteredCourses.length}</strong> program pelatihan</span>
          {(searchTerm || selectedCategory !== 'all' || selectedLevel !== 'all' || selectedMode !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
                setSelectedLevel('all');
                setSelectedMode('all');
              }}
              className="text-[#002147] font-bold hover:underline"
            >
              Reset Semua Filter
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl p-12 text-center border border-dashed border-slate-300">
            <ShieldAlert className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">Tidak ada program pelatihan yang sesuai</h3>
            <p className="text-xs text-slate-500 mt-1">Coba sesuaikan pencarian atau pilih kategori lainnya.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
                setSelectedLevel('all');
                setSelectedMode('all');
              }}
              className="mt-4 bg-[#002147] text-white text-xs font-bold px-4 py-2 rounded"
            >
              Tampilkan Semua Kursus
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-[#002147]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md border border-white/20">
                      {course.categoryLabel}
                    </div>

                    {/* Level Badge */}
                    <div className="absolute top-3 right-3 bg-[#C5A059] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                      {course.level}
                    </div>

                    {/* Code & Rating Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-mono bg-black/40 px-2 py-0.5 rounded text-[11px]">
                        {course.code}
                      </span>
                      <div className="flex items-center gap-1 bg-amber-500/90 text-white font-bold px-2 py-0.5 rounded text-[11px]">
                        <Star className="w-3 h-3 fill-current text-amber-200" />
                        <span>{course.rating.toFixed(1)} ({course.reviewCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-base text-[#002147] line-clamp-2 leading-snug group-hover:text-[#00A8E8] transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                      {course.summary}
                    </p>

                    {/* Key Attributes */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{course.mode}</span>
                      </div>
                    </div>

                    {/* Upcoming Batch Snippet */}
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                      <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold mb-0.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#00A8E8]" /> Batch Terdekat
                        </span>
                        <span className="text-emerald-600 font-bold">{course.upcomingBatches[0].status}</span>
                      </div>
                      <div className="font-medium text-slate-800 text-[11px]">
                        {course.upcomingBatches[0].dateRange}
                      </div>
                    </div>

                    {/* Instructor Row */}
                    <div className="flex items-center gap-2 pt-1">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <div className="text-[11px] truncate">
                        <div className="font-medium text-slate-800 truncate">{course.instructor.name}</div>
                        <div className="text-slate-400 text-[10px] truncate">{course.instructor.title}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Price & Buttons */}
                <div className="p-5 pt-0 mt-2">
                  <div className="flex items-baseline justify-between mb-4 border-t border-slate-100 pt-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Investasi Pelatihan</span>
                      <span className="text-base font-extrabold text-[#002147]">
                        {formatRupiah(course.price)}
                      </span>
                    </div>
                    {course.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {formatRupiah(course.originalPrice)}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenCourseDetail(course)}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded text-center transition-colors"
                    >
                      Silabus Detail
                    </button>

                    <button
                      onClick={() => onOpenRegister(course.id)}
                      className="w-full bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded text-center shadow-md hover:shadow-lg transition-all"
                    >
                      Daftar Kursus
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
