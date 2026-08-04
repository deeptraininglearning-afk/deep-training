import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Testimonial, SiteConfig, RegistrationRecord, RegistrationData } from '../types';
import { COURSES, TESTIMONIALS } from '../data/coursesData';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  whatsappNumber: '0813-8005-0039',
  email: 'info@deeptraining.id',
  phone: '0813-8005-0039',
  address: 'Gedung DEEP Learning Center, Jl. TB Simatupang No. 88, Jakarta Selatan',
  heroTitle: 'Pusat Pelatihan & Sertifikasi SDM Eksklusif',
  heroSubtitle: 'DEEP Training & Learning Solutions menyelenggarakan pelatihan eksekutif dan teknis tingkat lanjut di bidang Artificial Intelligence, CT Scan & MRI Medis, Perbankan & Keuangan, serta Cyber Security.',
  announcementText: 'Lembaga Pelatihan Terakreditasi BNSP & Kemenkes Compliance',
};

export const DEFAULT_REGISTRATIONS: RegistrationRecord[] = [
  {
    id: 'reg-101',
    code: 'DEEP-REG-2026-84921',
    courseId: 'ai-enterprise-mastery',
    courseTitle: 'Enterprise AI & Generative AI Implementation Specialist',
    batchId: 'batch-ai-1',
    batchDate: '12 - 14 Agustus 2026',
    fullName: 'Dr. Ahmad Fauzi, Sp.Rad',
    email: 'ahmad.fauzi@rs-harapan.co.id',
    whatsapp: '081298765432',
    companyName: 'RS Harapan Kita',
    jobTitle: 'Kepala Instalasi Radiologi',
    participantType: 'Utusan Perusahaan',
    paymentMethod: 'Transfer Bank / Invoice',
    submittedAt: '2026-08-01 10:15',
    status: 'Baru',
  },
  {
    id: 'reg-102',
    code: 'DEEP-REG-2026-39102',
    courseId: 'med-ctscan-advanced',
    courseTitle: 'Multislice CT Scan Advanced Protocols & Cardiac Imaging',
    batchId: 'batch-ct-1',
    batchDate: '25 - 28 Agustus 2026',
    fullName: 'Siti Sarah, S.Tr.Kes',
    email: 'siti.sarah@gmail.com',
    whatsapp: '085712345678',
    companyName: 'RSUP Fatmawati',
    jobTitle: 'Senior Radiografer',
    participantType: 'Individu',
    paymentMethod: 'Kartu Kredit',
    submittedAt: '2026-08-02 14:30',
    status: 'Dikonfirmasi',
  }
];

interface ContentContextType {
  courses: Course[];
  testimonials: Testimonial[];
  siteConfig: SiteConfig;
  registrations: RegistrationRecord[];
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (testimonial: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
  updateSiteConfig: (config: SiteConfig) => void;
  addRegistration: (data: RegistrationData) => RegistrationRecord;
  updateRegistrationStatus: (id: string, status: RegistrationRecord['status']) => void;
  deleteRegistration: (id: string) => void;
  resetToDefaults: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COURSES: 'deep_courses_v1',
  TESTIMONIALS: 'deep_testimonials_v1',
  SITE_CONFIG: 'deep_site_config_v1',
  REGISTRATIONS: 'deep_registrations_v1',
  AUTH: 'deep_admin_auth_v1',
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
      return saved ? JSON.parse(saved) : COURSES;
    } catch (e) {
      return COURSES;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : TESTIMONIALS;
    } catch (e) {
      return TESTIMONIALS;
    }
  });

  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SITE_CONFIG);
      return saved ? JSON.parse(saved) : DEFAULT_SITE_CONFIG;
    } catch (e) {
      return DEFAULT_SITE_CONFIG;
    }
  });

  const [registrations, setRegistrations] = useState<RegistrationRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      return saved ? JSON.parse(saved) : DEFAULT_REGISTRATIONS;
    } catch (e) {
      return DEFAULT_REGISTRATIONS;
    }
  });

  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch (e) {
      return false;
    }
  });

  // Save changes to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
    } catch (e) {}
  }, [courses]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
    } catch (e) {}
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SITE_CONFIG, JSON.stringify(siteConfig));
    } catch (e) {}
  }, [siteConfig]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(registrations));
    } catch (e) {}
  }, [registrations]);

  const loginAdmin = (user: string, pass: string): boolean => {
    if (user.trim() === 'admin' && pass.trim() === 'Depok2026') {
      setIsAuthenticated(true);
      try {
        localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      } catch (e) {}
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    } catch (e) {}
  };

  const addCourse = (newCourse: Course) => {
    setCourses(prev => [newCourse, ...prev]);
  };

  const updateCourse = (updated: Course) => {
    setCourses(prev => prev.map(c => c.id === updated.id ? updated : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  const addTestimonial = (item: Testimonial) => {
    setTestimonials(prev => [item, ...prev]);
  };

  const updateTestimonial = (item: Testimonial) => {
    setTestimonials(prev => prev.map(t => t.id === item.id ? item : t));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const updateSiteConfig = (config: SiteConfig) => {
    setSiteConfig(config);
  };

  const addRegistration = (data: RegistrationData): RegistrationRecord => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const code = `DEEP-REG-${new Date().getFullYear()}-${randomNum}`;
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const record: RegistrationRecord = {
      ...data,
      id: `reg-${Date.now()}`,
      code,
      submittedAt: dateStr,
      status: 'Baru',
    };

    setRegistrations(prev => [record, ...prev]);
    return record;
  };

  const updateRegistrationStatus = (id: string, status: RegistrationRecord['status']) => {
    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteRegistration = (id: string) => {
    setRegistrations(prev => prev.filter(r => r.id !== id));
  };

  const resetToDefaults = () => {
    setCourses(COURSES);
    setTestimonials(TESTIMONIALS);
    setSiteConfig(DEFAULT_SITE_CONFIG);
    setRegistrations(DEFAULT_REGISTRATIONS);
    try {
      localStorage.removeItem(STORAGE_KEYS.COURSES);
      localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
      localStorage.removeItem(STORAGE_KEYS.SITE_CONFIG);
      localStorage.removeItem(STORAGE_KEYS.REGISTRATIONS);
    } catch (e) {}
  };

  return (
    <ContentContext.Provider
      value={{
        courses,
        testimonials,
        siteConfig,
        registrations,
        isAdminOpen,
        setIsAdminOpen,
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
        addRegistration,
        updateRegistrationStatus,
        deleteRegistration,
        resetToDefaults,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
