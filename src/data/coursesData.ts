import { Course, Testimonial, SocialPost } from '../types';

export const COURSES: Course[] = [
  // --- ARTIFICIAL INTELLIGENCE ---
  {
    id: 'ai-enterprise-mastery',
    code: 'AI-101',
    title: 'Enterprise AI & Generative AI Implementation Specialist',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    level: 'Lanjutan',
    duration: '3 Hari (24 JPL)',
    mode: 'Hybrid Learning',
    price: 4500000,
    originalPrice: 5500000,
    rating: 4.9,
    reviewCount: 128,
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    summary: 'Master penerapan Generative AI, Prompt Engineering, LLM Integration, dan Otomasi Workflow AI untuk enterprise.',
    description: 'Pelatihan komprehensif yang dirancang untuk manajer TI, pimpinan bisnis, dan engineer untuk mengintegrasikan teknologi Generative AI & Large Language Models (LLM) ke dalam proses bisnis perusahaan. Dilengkapi dengan studi kasus nyata dan laboratorium pembuatan AI Agent.',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Foundations of Generative AI & Enterprise Architecture',
        topics: [
          'Pengenalan Ekosistem GenAI & Arsitektur Model (LLM, RAG, Vision)',
          'Privasi Data, Keamanan, & Etika Implementasi AI Enterprise',
          'Teknik Prompt Engineering Tingkat Lanjut (Few-shot, Chain-of-Thought)'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Building Custom Knowledge base with RAG Architecture',
        topics: [
          'Pengenalan Retrieval-Augmented Generation (RAG)',
          'Integrasi Vector Database (Chroma, Pinecone) dengan dokumen internal',
          'Mengembangkan AI Chatbot khusus untuk SOP & Knowledge Management Perusahaan'
        ]
      },
      {
        day: 'Hari 3',
        title: 'Autonomous AI Agents & Enterprise Workflow Automation',
        topics: [
          'Membangun Multi-Agent System untuk analisis dokumen & otomatisasi tugas',
          'Deploy & Monitoring Model AI di Cloud Infrastructure',
          'Presentasi Project & Sertifikasi Kompetensi'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-ai-1', dateRange: '12 - 14 Agustus 2026', location: 'Hotel Gran Melia, Jakarta / Live Online', quotaLeft: 4, status: 'Hampir Penuh' },
      { id: 'batch-ai-2', dateRange: '09 - 11 September 2026', location: 'Hotel JW Marriott, Surabaya / Live Online', quotaLeft: 12, status: 'Buka' },
      { id: 'batch-ai-3', dateRange: '14 - 16 Oktober 2026', location: 'In-House Training / Online', quotaLeft: 15, status: 'Buka' }
    ],
    targetAudience: [
      'IT Director & Manager',
      'Chief Technology Officer (CTO)',
      'Data Scientist & Software Engineers',
      'Business Analyst & Digital Transformation Lead'
    ],
    prerequisites: [
      'Memahami dasar logika pemrosesan data',
      'Memiliki pemahaman umum tentang teknologi web / API (nilai plus)'
    ],
    certification: 'Sertifikat Kompetensi DEEP Enterprise AI Specialist & Badge Digital Verified',
    instructor: {
      name: 'Dr. Hendra Wijaya, M.Sc.',
      title: 'Principal AI Researcher & Ex-Senior Data Scientist',
      experience: '14+ Tahun Pengalaman di Industri AI & Machine Learning Enterprise',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'ai-prompt-analytics',
    code: 'AI-102',
    title: 'Applied Machine Learning & Predictive Analytics for Business',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    level: 'Menengah',
    duration: '2 Hari (16 JPL)',
    mode: 'Tatap Muka (Offline)',
    price: 3750000,
    originalPrice: 4500000,
    rating: 4.8,
    reviewCount: 94,
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    summary: 'Pelajari pemodelan Machine Learning, analisis prediktif churn pelanggan, forecasting penjualan, dan visualisasi interaktif.',
    description: 'Pelatihan praktis penggunaan Python dan kerangka kerja Machine Learning untuk memprediksi tren bisnis, mengoptimalkan pengambilan keputusan berdasarkan data, serta menyajikan visualisasi data yang berdampak tinggi.',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Exploratory Data Analysis & Supervised Learning',
        topics: [
          'Pembersihan Data & Feature Engineering dengan Python (Pandas/Scikit-learn)',
          'Algoritma Regresi untuk Prediksi Penjualan & Revenue',
          'Algoritma Klasifikasi untuk Churn Rate Customer'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Time-Series Forecasting & Business Dashboarding',
        topics: [
          'Model Forecasting (ARIMA, Prophet) untuk Stok & Demand',
          'Deploying Model ML sebagai Rest API',
          'Pembuatan Executive Dashboard Interaktif'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-ml-1', dateRange: '19 - 20 Agustus 2026', location: 'DEEP Learning Center, Jakarta Selatan', quotaLeft: 6, status: 'Buka' },
      { id: 'batch-ml-2', dateRange: '23 - 24 September 2026', location: 'Hotel Aston, Bandung', quotaLeft: 10, status: 'Buka' }
    ],
    targetAudience: [
      'Data Analyst & Business Intelligence',
      'Finance & Risk Analyst',
      'Operational Excellence Team'
    ],
    prerequisites: ['Dasar Python/Excel untuk analisis data'],
    certification: 'Sertifikat DEEP Predictive Analytics Professional',
    instructor: {
      name: 'Budi Santoso, S.T., M.Kom.',
      title: 'Senior Data Architect & Machine Learning Trainer',
      experience: '10+ Tahun Mengelola Proyek Big Data Banking & Telco',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    }
  },

  // --- ALAT MEDIS: CT SCAN & MRI ---
  {
    id: 'med-ctscan-advanced',
    code: 'MED-201',
    title: 'Advanced Multislice CT Scan Protocols & Radiation Safety Management',
    category: 'medical',
    categoryLabel: 'Alat Medis CT Scan & MRI',
    level: 'Lanjutan',
    duration: '4 Hari (32 JPL)',
    mode: 'Tatap Muka (Offline)',
    price: 6500000,
    originalPrice: 8000000,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    summary: 'Pelatihan teknis operasional CT Scan Multislice (128/256 Slice), teknik Angiografi, optimasi Dosis Radiasi, dan QC/QA.',
    description: 'Pelatihan komprehensif bagi Radiografer, Fisikawan Medis, dan Teknisi Elektromedis untuk menguasai protokol pencitraan CT Scan mutakhir, teknik rekonstruksi citra 3D/Angiografi, penghematan dosis radiasi pasien (ALARA), serta pengujian kualitas alat (Quality Assurance).',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Arsitektur Sistem CT Scan Multislice & Physics Fundamentals',
        topics: [
          'Prinsip Kerja Detektor, Tube Cooling, & Gantry CT Scan Modern',
          'Pemilihan Kv, mA, Pitch, dan Rotation Time untuk Hasil Optimal',
          'Manajemen Dosis Radiasi (DLP, CTDIvol) & Implementasi ALARA'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Protokol Khusus: Cardiac CT, CTA, & Trauma Protocol',
        topics: [
          'Protokol CT Angiografi (Brain, Coronary, Abdominal)',
          'Gating Jantung & Pengaturan Injektor Kontras Otomatis',
          'Pengurangan Artifak Logam & Motion Artifacts'
        ]
      },
      {
        day: 'Hari 3',
        title: 'Post-Processing, 3D Reconstruction & Workstation',
        topics: [
          'Penguasaan Workstation Multiplanar Reconstruction (MPR), MIP, & VRT',
          'Praktik Langsung Pengolahan Citra Pembuluh Darah & Tumor Mass',
          'Pencatatan DICOM & Integrasi PACS Hospital'
        ]
      },
      {
        day: 'Hari 4',
        title: 'Quality Assurance (QA), Calibration & Troubleshooting',
        topics: [
          'Pengujian Kontras Spasial, Kebisingan, & Hounsfield Unit (HU) Calibration',
          'Penanganan Masalah Teknis Harian & Error Code CT Scan',
          'Ujian Praktik Simulasi & Evaluasi Sertifikasi'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-ct-1', dateRange: '25 - 28 Agustus 2026', location: 'Simulasi Lab DEEP & RS Mitra, Jakarta', quotaLeft: 3, status: 'Hampir Penuh' },
      { id: 'batch-ct-2', dateRange: '15 - 18 September 2026', location: 'Pusat Pelatihan Medis, Surabaya', quotaLeft: 8, status: 'Buka' }
    ],
    targetAudience: [
      'Radiografer (Penata Rontgen)',
      'Dokter Spesialis Radiologi (Refresher Technical)',
      'Fisikawan Medis',
      'Teknisi Elektromedis (ATEM) RS'
    ],
    prerequisites: ['Pendidikan D3/D4/S1 Radiologi, Fisika Medis, atau Elektromedis'],
    certification: 'Sertifikat Kompetensi Pengoperasian & QA CT Scan Multislice (Akreditasi BNSP/Kemenkes Standards)',
    instructor: {
      name: 'Siti Rahmawati, S.ST., M.Tr.ID.',
      title: 'Senior Application Specialist CT Scan & Master Radiographer',
      experience: '18+ Tahun Pengalaman Operasional & Application CT Scan Hospital',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'med-mri-mastery',
    code: 'MED-202',
    title: 'High-Field MRI Sequences, Artifact Mitigation & Safety Officer Certification',
    category: 'medical',
    categoryLabel: 'Alat Medis CT Scan & MRI',
    level: 'Lanjutan',
    duration: '4 Hari (32 JPL)',
    mode: 'Tatap Muka (Offline)',
    price: 7200000,
    originalPrice: 8500000,
    rating: 5.0,
    reviewCount: 112,
    featured: true,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    summary: 'Spesialisasi sekuens MRI 1.5T & 3.0T, teknik MRA, Diffusion/Perfusion Weighted Imaging, serta KESELAMATAN (MRI Safety Zones).',
    description: 'Panduan mendalam penguasaan sekuens Magnetik Resonansi (T1, T2, FLAIR, STIR, DWI, SWI, MRA), pemilihan parameter TR/TE/Flip Angle, pencegahan bahaya medan magnet tinggi (Zone I-IV), dan mitagasi artifak pada pemeriksaan Neuro, Musculoskeletal, & Abdomen.',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Fisika Magnetik Resonansi & Sekuens Dasar (T1, T2, PD)',
        topics: [
          'Interaksi Spin Proton, Medan Magnet Utama (B0), & Radiofrekuensi (RF)',
          'Pemahaman TR, TE, Flip Angle, & Contrast Mechanism',
          'Pemilihan Koil Khusus (Head, Spine, Knee, Body Array)'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Sekuens Canggih: DWI, Perfusion, Spectroscopy & MRA',
        topics: [
          'Diffusion Weighted Imaging (DWI) & ADC Map untuk Iskemik Stroke',
          'MR Angiography (TOF 3D, CE-MRA) & MRCP Abdomen',
          'Susceptibility Weighted Imaging (SWI) & Functional MRI Basics'
        ]
      },
      {
        day: 'Hari 3',
        title: 'MRI Safety Officer Protocol & Zone Control (Zone I - IV)',
        topics: [
          'Penanganan Bahaya Quench (Cryogen Leakage) & Prosedur Darurat',
          'Screening Implan Logam, Pacemaker, & Implan Otropedi (MR Safe/Conditional)',
          'Manajemen SAR (Specific Absorption Rate) & Thermal Safety'
        ]
      },
      {
        day: 'Hari 4',
        title: 'Artifact Elimination & Practical Lab Session',
        topics: [
          'Identifikasi & Pengeliminasian Motion, Chemical Shift, Wrap-around Artifact',
          'Praktik Penyesuaian Protokol pada Pasien Non-Kooperatif',
          'Ujian Sertifikasi MRI Safety Officer & Specialist'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-mri-1', dateRange: '08 - 11 September 2026', location: 'DEEP Medical Simulation Center, Jakarta', quotaLeft: 5, status: 'Buka' },
      { id: 'batch-mri-2', dateRange: '13 - 16 Oktober 2026', location: 'Pusat Pelatihan Radiologi, Bali', quotaLeft: 9, status: 'Buka' }
    ],
    targetAudience: [
      'Radiografer Khusus MRI',
      'Dokter Spesialis Radiologi',
      'Kepala Instalasi Radiologi Rumah Sakit',
      'Fisikawan Medis & Safety Officer'
    ],
    prerequisites: ['Pendidikan D3/D4/S1 Radiologi dengan pengalaman dasar MRI'],
    certification: 'Sertifikat MRI Specialist & Certified MRI Safety Officer (Sesuai Standar Akreditasi Kemenkes)',
    instructor: {
      name: 'Agus Setiawan, S.Si., M.Si.',
      title: 'Consultant Medical Physicist & Senior MRI Instructor',
      experience: '16+ Tahun Mengisi Pelatihan MRI 1.5T & 3.0T di Indonesia & Asia Tenggara',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    }
  },

  // --- PERBANKAN & KEUANGAN ---
  {
    id: 'bank-risk-aml',
    code: 'BNK-301',
    title: 'Executive Banking Risk Management & AML/CFT Compliance',
    category: 'banking',
    categoryLabel: 'Perbankan & Keuangan',
    level: 'Executive',
    duration: '3 Hari (24 JPL)',
    mode: 'Hybrid Learning',
    price: 4800000,
    originalPrice: 6000000,
    rating: 4.9,
    reviewCount: 142,
    featured: true,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    summary: 'Manajemen Risiko Perbankan (Kredit, Pasar, Operasional, Likuiditas), regulasi OJK/BI, serta pencegahan APU-PPT (AML/CFT).',
    description: 'Program sertifikasi kesiapan manajemen risiko lembaga keuangan sesuai dengan regulasi Otoritas Jasa Keuangan (OJK) dan Bank Indonesia. Membekali peserta dengan metodologi stres testing, penilaian profil risiko, serta mitigasi kejahatan keuangan & pencucian uang.',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Kerangka Manajemen Risiko Terintegrasi (OJK & Basel III/IV)',
        topics: [
          'Penerapan Manajemen Risiko untuk 8 Risiko Perbankan',
          'Penetapan Risk Appetite & Risk Tolerance Framework',
          'Governance, Risk, and Compliance (GRC) di Era Digital Banking'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Penerapan Anti Pencucian Uang & Pencegahan Pendanaan Terorisme (APU-PPT)',
        topics: [
          'Metodologi Customer Due Diligence (CDD) & Enhanced Due Diligence (EDD)',
          'Deteksi Transaksi Keuangan Mencurigakan (TKM) dengan Algoritma Smart Rules',
          'Penerapan International Sanctions & PEP (Politically Exposed Persons) Screening'
        ]
      },
      {
        day: 'Hari 3',
        title: 'Risk Assessment Simulation & Audit Compliance',
        topics: [
          'Simulasi Pembuatan Laporan Profil Risiko (RCSA & Key Risk Indicators)',
          'Audit Kepatuhan & Persiapan Penilaian Regulator (OJK)',
          'Studi Kasus Penanganan Pembobolan Rekening & Cyber Fraud'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-bnk-1', dateRange: '18 - 20 Agustus 2026', location: 'Hotel Indonesia Kempinski, Jakarta / Online', quotaLeft: 7, status: 'Buka' },
      { id: 'batch-bnk-2', dateRange: '22 - 24 September 2026', location: 'Hotel Ritz-Carlton, Jakarta', quotaLeft: 12, status: 'Buka' }
    ],
    targetAudience: [
      'Analis Risiko Perbankan & Lembaga Keuangan',
      'Compliance Officer & Internal Auditor',
      'Branch Manager & Head of Operations',
      'Tim Anti-Money Laundering (AML)'
    ],
    prerequisites: ['Pengalaman minimal 1 tahun di industri keuangan/perbankan'],
    certification: 'Sertifikat Kompetensi Manajemen Risiko Perbankan DEEP Executive',
    instructor: {
      name: 'Drs. Bambang Kurniadi, M.B.A., FRM',
      title: 'Senior Banking Executive & Ex-Risk Committee Officer',
      experience: '22+ Tahun Memimpin Manajemen Risiko di BUMN & Bank Swasta Nasional',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'bank-digital-transformation',
    code: 'BNK-302',
    title: 'Digital Banking Transformation & Fintech Integration Architecture',
    category: 'banking',
    categoryLabel: 'Perbankan & Keuangan',
    level: 'Menengah',
    duration: '2 Hari (16 JPL)',
    mode: 'Online Live Interactive',
    price: 3200000,
    originalPrice: 4000000,
    rating: 4.8,
    reviewCount: 88,
    featured: false,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    summary: 'Strategi modernisasi Core Banking, Open API SNAP BI, integrasi Fintech, dan keamanan transaksi pembayaran digital.',
    description: 'Membahas arsitektur perbankan digital masa depan: microservices, sertifikasi Open API sesuai standar SNAP Bank Indonesia, pengalaman nasabah (CX/UX digital), serta skema kerja sama Open Banking dengan ekosistem e-commerce dan Fintech.',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Digital Banking Ecosystem & Open Banking Standards',
        topics: [
          'Regulasi Open API (SNAP) Bank Indonesia & Arsitektur API Gateway',
          'Arsitektur Legacy Core Banking vs Cloud-Native Microservices',
          'Desain Onboarding Nasabah Digital (Digital Customer Onboarding & e-KYC)'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Payment Systems, Cyber Resilience & Business Models',
        topics: [
          'Integrasi QRIS, BI-FAST, & Real-time Gross Settlement',
          'Keamanan Transaksi Digital (Encryption, Tokenization, PCI-DSS)',
          'Monetisasi API & Kemitraan dengan Fintech/E-commerce'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-db-1', dateRange: '02 - 03 September 2026', location: 'Live Interactive Zoom / LMS', quotaLeft: 14, status: 'Buka' },
      { id: 'batch-db-2', dateRange: '07 - 08 Oktober 2026', location: 'Live Interactive Zoom / LMS', quotaLeft: 20, status: 'Buka' }
    ],
    targetAudience: [
      'Digital Product Manager Perbankan',
      'IT Architect & API Developers',
      'Strategic Planning & Business Development'
    ],
    prerequisites: ['Pemahaman umum alur bisnis transaksi keuangan'],
    certification: 'Sertifikat DEEP Digital Banking Specialist',
    instructor: {
      name: 'Rian Prasetya, S.Kom., M.M.',
      title: 'VP Digital Banking & Open API Evangelist',
      experience: '12+ Tahun Memimpin Transformasi Digital Banking & QRIS Systems',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
    }
  },

  // --- DIGITAL & INFORMATION TECHNOLOGY ---
  {
    id: 'digi-cybersecurity',
    code: 'DGT-401',
    title: 'Cyber Security Leadership & Enterprise Threat Defense',
    category: 'digital',
    categoryLabel: 'Digital & Teknologi',
    level: 'Lanjutan',
    duration: '3 Hari (24 JPL)',
    mode: 'Hybrid Learning',
    price: 4200000,
    originalPrice: 5200000,
    rating: 4.9,
    reviewCount: 104,
    featured: true,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    summary: 'Pertahanan siber perusahaan, arsitektur Zero Trust, audit ISO 27001, Penilaian Kerentanan, & Penanganan Insiden.',
    description: 'Pelatihan strategis dan teknis untuk melindungi aset digital perusahaan dari serangan Ransomware, Phishing, Social Engineering, dan data breach. Dilengkapi latihan penanganan insiden darurat (Incident Response Plan) dan audit keamanan.',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Enterprise Threat Landscape & ISO 27001 ISMS',
        topics: [
          'Anatomi Serangan Siber Modern (Ransomware, Zero-day, APT)',
          'Implementasi ISO 27001:2022 Information Security Management',
          'Arsitektur Keamanan Zero Trust Architecture (ZTA)'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Vulnerability Assessment & Penetration Testing Overview',
        topics: [
          'Teknik Penilaian Kerentanan Sistem (Vulnerability Scanning)',
          'Penetration Testing Framework (OWASP Top 10 Web & Mobile)',
          'Manajemen Patching & Hardening Server/Database'
        ]
      },
      {
        day: 'Hari 3',
        title: 'SOC, Incident Response & Business Continuity Plan',
        topics: [
          'Pengoperasian Security Operations Center (SOC) & SIEM/EDR',
          'Langkah Penanganan Insiden Peretasan (Incident Response)',
          'Simulasi Disaster Recovery & Business Continuity Management'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-sec-1', dateRange: '26 - 28 Agustus 2026', location: 'Hotel Shangri-La, Jakarta / Online', quotaLeft: 5, status: 'Buka' },
      { id: 'batch-sec-2', dateRange: '28 - 30 September 2026', location: 'In-House / Online', quotaLeft: 11, status: 'Buka' }
    ],
    targetAudience: [
      'Chief Information Security Officer (CISO)',
      'IT Security Analyst & Network Engineer',
      'System Administrator & Risk Management'
    ],
    prerequisites: ['Pemahaman dasar jaringan komputer dan sistem operasi'],
    certification: 'Sertifikat DEEP Certified Cyber Security Defender',
    instructor: {
      name: 'Fikri Ardiansyah, S.T., CISA, CISSP',
      title: 'Enterprise Security Consultant & Lead Penetration Tester',
      experience: '15+ Tahun Pengalaman Audit Keamanan Siber di BUMN & Multi-National Companies',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'digi-cloud-devops',
    code: 'DGT-402',
    title: 'Cloud Native Architecture, Kubernetes & Enterprise DevOps Pipelines',
    category: 'digital',
    categoryLabel: 'Digital & Teknologi',
    level: 'Menengah',
    duration: '3 Hari (24 JPL)',
    mode: 'Online Live Interactive',
    price: 3900000,
    originalPrice: 4800000,
    rating: 4.8,
    reviewCount: 76,
    featured: false,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    summary: 'Mastering Docker Containerization, Orchestrasi Kubernetes, CI/CD Pipeline, & Infrastructure as Code (Terraform).',
    description: 'Pelatihan hands-on membangun infrastruktur aplikasi cloud modern yang cepat, andal, dan otomatis (DevOps). Menggunakan Docker, Kubernetes, GitHub Actions, dan Terraform untuk efisiensi rilis perangkat lunak.',
    syllabus: [
      {
        day: 'Hari 1',
        title: 'Containerization dengan Docker & CI/CD Fundamentals',
        topics: [
          'Membuat & Mengoptimalkan Dockerfile untuk Multi-stage Build',
          'Docker Compose untuk Aplikasi Multi-Service',
          'Membangun CI/CD Automation Pipeline'
        ]
      },
      {
        day: 'Hari 2',
        title: 'Kubernetes Orchestration & Cluster Management',
        topics: [
          'Arsitektur Kubernetes (Pods, Deployments, Services, Ingress)',
          'Auto-scaling & High Availability Application Deployment',
          'Secret Management & Security Hardening'
        ]
      },
      {
        day: 'Hari 3',
        title: 'Infrastructure as Code (IaC) & Cloud Monitoring',
        topics: [
          'Provisi Infrastruktur dengan Terraform',
          'Monitoring & Alerting dengan Prometheus & Grafana',
          'Praktik Terbaik Cost Optimization di Cloud'
        ]
      }
    ],
    upcomingBatches: [
      { id: 'batch-cloud-1', dateRange: '10 - 12 September 2026', location: 'Live Interactive Online', quotaLeft: 10, status: 'Buka' },
      { id: 'batch-cloud-2', dateRange: '15 - 17 Oktober 2026', location: 'Live Interactive Online', quotaLeft: 16, status: 'Buka' }
    ],
    targetAudience: [
      'DevOps Engineer & System Engineer',
      'Software Developers / Backend Leads',
      'Cloud Infrastructure Specialist'
    ],
    prerequisites: ['Memahami perintah Linux CLI dasar'],
    certification: 'Sertifikat DEEP Cloud & DevOps Architect',
    instructor: {
      name: 'Maya Indah, S.Kom., M.T.',
      title: 'Lead Cloud Infrastructure Engineer',
      experience: '11+ Tahun Membangun Arsitektur Cloud Skala Besar',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'dr. Antonius Gunawan, Sp.Rad.',
    role: 'Kepala Instalasi Radiologi',
    company: 'RSUP Mitra Medika Jakarta',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Pelatihan CT Scan & MRI dari DEEP luar biasa presisi. Radiografer kami yang mengikuti pelatihan mengalami peningkatan signifikan dalam efisiensi sekuens MRI dan pengurangan artefak citra. Materi QA & safety-nya sangat membantu standar akreditasi rumah sakit kami.',
    courseTaken: 'Advanced Multislice CT Scan & High-Field MRI',
    category: 'medical'
  },
  {
    id: 't-2',
    name: 'Deni Kurniawan, S.T.',
    role: 'Head of Enterprise IT Architecture',
    company: 'Bank Swasta Nasional',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Kami mengirim 12 engineer untuk pelatihan Generative AI & Digital Banking SNAP BI. Instruktur dari DEEP memiliki kredibilitas praktisi yang langsung menguasai problem riil di lapangan. Implementasi AI Agent kami jadi 3x lebih cepat!',
    courseTaken: 'Enterprise AI & Generative AI Implementation',
    category: 'ai'
  },
  {
    id: 't-3',
    name: 'Siti Sarah, S.E., MM, Risk',
    role: 'Senior Compliance & Risk Officer',
    company: 'Lembaga Keuangan Mikro BUMN',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Modul APU-PPT dan Manajemen Risiko Perbankan dari DEEP sangat aplikatif. Penyampaian studi kasus OJK dan simulasi auditnya memberikan kejelasan nyata, bukan sekadar teori akademis belaka.',
    courseTaken: 'Executive Banking Risk Management & AML/CFT',
    category: 'banking'
  },
  {
    id: 't-4',
    name: 'Rahmat Hidayat, S.ST.',
    role: 'Radiografer Senior / Penata Rontgen',
    company: 'RS Daerah Jawa Timur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Instruktur praktikal langsung mendampingi simulasi pengoperasian CT Angiography dan penentuan Hounsfield Unit. Tempat pelatihan dan fasilitas pendukungnya sangat profesional!',
    courseTaken: 'Advanced Multislice CT Scan Protocols',
    category: 'medical'
  }
];

export const CLIENT_LOGOS = [
  { name: 'RSUP Nasional', category: 'Medical' },
  { name: 'Bank Mandiri', category: 'Banking' },
  { name: 'BCA Financial', category: 'Banking' },
  { name: 'Siemens Healthineers Partner', category: 'Medical' },
  { name: 'Telkom Indonesia', category: 'Digital' },
  { name: 'RS Siloam Hospitals', category: 'Medical' },
  { name: 'Bank BRI', category: 'Banking' },
  { name: 'Kementerian Kesehatan RI', category: 'Government' }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'sp-1',
    platform: 'instagram',
    title: 'Suasana Pelatihan Hands-On CT Scan Multislice & Reconstruction 3D bersama para Radiografer Senior RSUP',
    date: '2 Hari lalu',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    likesOrViews: '1,420 Likes',
    link: 'https://instagram.com',
    tag: '#MedicalTraining #CTScan #DEEPLearning'
  },
  {
    id: 'sp-2',
    platform: 'linkedin',
    title: 'Bagaimana Enterprise AI & RAG Architecture Mengubah Efisiensi Operasional Perbankan di Tahun 2026',
    date: '4 Hari lalu',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
    likesOrViews: '850 Shares & Comments',
    link: 'https://linkedin.com',
    tag: '#EnterpriseAI #Fintech #DigitalTransformation'
  },
  {
    id: 'sp-3',
    platform: 'youtube',
    title: 'Webinar Gratis: Mitigasi Risiko Kebocoran Data & Penerapan Standar ISO 27001 di Era Digital Banking',
    date: '1 Minggu lalu',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    likesOrViews: '12,400 Views',
    link: 'https://youtube.com',
    tag: '#CyberSecurity #FreeWebinar #DEEPTraining'
  }
];

export const FAQS = [
  {
    question: 'Siapa saja yang dapat mengikuti pelatihan di DEEP Training & Learning Solutions?',
    answer: 'Pelatihan kami terbuka untuk profesional individu (dokter, radiografer, engineer, analis bank, manajer IT) maupun utusan instansi/perusahaan (In-House Training). Persyaratan khusus tercantum pada masing-masing silabus kursus.'
  },
  {
    question: 'Apakah peserta akan mendapatkan sertifikat resmi?',
    answer: 'Ya, seluruh peserta yang memenuhi kriteria kehadiran minimum (80%) dan lulus evaluasi praktik/ujian kompetensi akan menerima Sertifikat Resmi DEEP Training & Learning Solutions lengkap dengan ID Verifikasi Digital yang diakui industri.'
  },
  {
    question: 'Bagaimana prosedur pendaftaran untuk In-House Training (Utusan Perusahaan)?',
    answer: 'Untuk kebutuhan In-House Training atau pemesanan khusus grup instansi, Anda dapat mengisi formulir pendaftaran daring dengan memilih kategori "Utusan Perusahaan" atau langsung menghubungi Tim Advisor kami melalui WhatsApp. Kami dapat menyelaraskan modul sesuai studi kasus spesifik perusahaan Anda.'
  },
  {
    question: 'Metode pembayaran apa saja yang disediakan?',
    answer: 'Kami menerima pembayaran melalui Transfer Bank (Virtual Account BNI/Mandiri/BCA), Kartu Kredit, E-Wallet, serta penerbitan Faktur / Invoice Resmi & Purchase Order (PO) untuk instansi korporasi.'
  },
  {
    question: 'Apakah alat simulasi CT Scan dan MRI menggunakan perangkat fisik nyata?',
    answer: 'Ya, untuk bidang pelatihan Alat Medis (CT Scan & MRI), kami bekerjasama dengan Pusat Simulasi Medis dan Rumah Sakit Mitra khusus yang dilengkapi alat Multislice CT Scan dan High-Field MRI 1.5T/3.0T untuk praktikum hands-on.'
  }
];
