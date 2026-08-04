export type CourseCategory = 'all' | 'digital' | 'ai' | 'banking' | 'medical';

export type CourseLevel = 'Pemula' | 'Menengah' | 'Lanjutan' | 'Executive';

export type TrainingMode = 'Tatap Muka (Offline)' | 'Online Live Interactive' | 'Hybrid Learning' | 'In-House Training';

export interface Course {
  id: string;
  title: string;
  code: string;
  category: 'digital' | 'ai' | 'banking' | 'medical';
  categoryLabel: string;
  level: CourseLevel;
  duration: string; // e.g., "3 Hari (24 JPL)"
  mode: TrainingMode;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  summary: string;
  description: string;
  featured?: boolean;
  image: string;
  syllabus: {
    day: string;
    title: string;
    topics: string[];
  }[];
  upcomingBatches: {
    id: string;
    dateRange: string;
    location: string;
    quotaLeft: number;
    status: 'Buka' | 'Hampir Penuh' | 'Selesai';
  }[];
  targetAudience: string[];
  prerequisites: string[];
  certification: string;
  instructor: {
    name: string;
    title: string;
    experience: string;
    avatar: string;
  };
}

export interface RegistrationData {
  courseId: string;
  courseTitle: string;
  batchId: string;
  batchDate: string;
  fullName: string;
  email: string;
  whatsapp: string;
  companyName: string;
  jobTitle: string;
  participantType: 'Individu' | 'Utusan Perusahaan';
  notes?: string;
  paymentMethod: 'Transfer Bank / Invoice' | 'E-Wallet' | 'Kartu Kredit' | 'PO Perusahaan (B2B)';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  courseTaken: string;
  category: 'digital' | 'ai' | 'banking' | 'medical';
}

export interface SiteConfig {
  whatsappNumber: string;
  email: string;
  phone: string;
  address: string;
  heroTitle: string;
  heroSubtitle: string;
  announcementText: string;
}

export interface RegistrationRecord extends RegistrationData {
  id: string;
  code: string;
  submittedAt: string;
  status: 'Baru' | 'Dikonfirmasi' | 'Selesai' | 'Dibatalkan';
}

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'linkedin' | 'youtube';
  title: string;
  date: string;
  image: string;
  likesOrViews: string;
  link: string;
  tag: string;
}
