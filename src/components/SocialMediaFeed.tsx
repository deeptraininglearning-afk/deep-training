import React from 'react';
import { SOCIAL_POSTS } from '../data/coursesData';
import { 
  Share2, 
  ThumbsUp, 
  ExternalLink, 
  MessageCircle,
  Play,
  BookmarkCheck
} from 'lucide-react';

export const SocialMediaFeed: React.FC = () => {
  return (
    <section id="sosmed" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Kanal Komunitas & Media Sosial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-3">
            Terhubung Dengan DEEP di Media Sosial
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Dapatkan pembaruan tips seputar AI, panduan teknis CT Scan / MRI, analisa regulasi perbankan, dan jadwal webinar gratis setiap minggunya.
          </p>
        </div>

        {/* Social Network Banner Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0077B5] hover:bg-[#005E93] text-white p-4 rounded-2xl flex items-center justify-between transition-transform hover:-translate-y-1 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                in
              </div>
              <div>
                <div className="font-bold text-sm">LinkedIn</div>
                <div className="text-[11px] text-blue-100">12,500+ Followers</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/80" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-2xl flex items-center justify-between transition-transform hover:-translate-y-1 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                ig
              </div>
              <div>
                <div className="font-bold text-sm">Instagram</div>
                <div className="text-[11px] text-pink-100">28,400+ Followers</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/80" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#FF0000] hover:bg-[#CC0000] text-white p-4 rounded-2xl flex items-center justify-between transition-transform hover:-translate-y-1 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                yt
              </div>
              <div>
                <div className="font-bold text-sm">YouTube</div>
                <div className="text-[11px] text-red-100">45,000+ Subscribers</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/80" />
          </a>

          <a
            href="https://wa.me/628176707234"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-2xl flex items-center justify-between transition-transform hover:-translate-y-1 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="font-bold text-sm">WhatsApp Direct</div>
                <div className="text-[11px] text-emerald-100">Respon Cepat 24/7</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/80" />
          </a>

        </div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOCIAL_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#002147] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    {post.platform}
                  </div>
                  {post.platform === 'youtube' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600/90 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-3">
                  <div className="text-[11px] text-[#C5A059] font-bold">{post.tag}</div>
                  <h3 className="font-bold text-sm text-[#002147] line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
                <span>{post.date} • {post.likesOrViews}</span>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#002147] hover:text-[#00A8E8] flex items-center gap-1"
                >
                  <span>Lihat Post</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
