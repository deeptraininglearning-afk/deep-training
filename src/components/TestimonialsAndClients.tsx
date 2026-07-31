import React, { useState } from 'react';
import { Testimonial } from '../types';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/coursesData';
import { Star, Quote, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsAndClients: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filterCategory === 'all') return true;
    return t.category === filterCategory;
  });

  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Ulasan & Pengalaman Alumni
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-3">
            Dipercaya Oleh Ribuan Profesional & Rumah Sakit
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Dengar cerita sukses dari dokter spesialis radiologi, radiografer, pimpinan IT, dan compliance officer yang telah mengikuti pelatihan di DEEP.
          </p>
        </div>

        {/* Corporate Client Badges Carousel Grid */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-16">
          <div className="text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-6">
            Dipercaya Oleh Instansi & Mitra Terkemuka
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-[#002147] hover:text-white p-3 rounded-xl border border-slate-200 transition-all text-[11px] font-bold text-slate-700 flex flex-col justify-center items-center h-16 shadow-xs"
              >
                <span className="leading-tight">{client.name}</span>
                <span className="text-[9px] text-[#C5A059] mt-0.5">{client.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Semua Ulasan' },
            { id: 'medical', label: 'CT Scan & MRI' },
            { id: 'ai', label: 'Artificial Intelligence' },
            { id: 'banking', label: 'Perbankan & Keuangan' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                filterCategory === tab.id
                  ? 'bg-[#002147] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-amber-100 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C5A059]"
                  />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#002147]">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.role} - <strong>{item.company}</strong></p>
                  </div>
                </div>

                <span className="text-[10px] bg-slate-100 font-semibold text-slate-600 px-2.5 py-1 rounded">
                  {item.courseTaken}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
