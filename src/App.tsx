import React, { useState } from 'react';
import { Course, CourseCategory } from './types';
import { ContentProvider, useContent } from './context/ContentContext';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryOverview } from './components/CategoryOverview';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseDetailModal } from './components/CourseDetailModal';
import { RegistrationFormModal } from './components/RegistrationFormModal';
import { ScheduleAndBrochure } from './components/ScheduleAndBrochure';
import { CompanyProfile } from './components/CompanyProfile';
import { TestimonialsAndClients } from './components/TestimonialsAndClients';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { AdminPanelModal } from './components/AdminPanelModal';

function MainApp() {
  const { courses, isAdminOpen, setIsAdminOpen } = useContent();

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  
  // Modals state
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [registrationCourseId, setRegistrationCourseId] = useState<string | undefined>(undefined);
  const [registrationBatchId, setRegistrationBatchId] = useState<string | undefined>(undefined);

  // Handlers
  const handleOpenCourseDetail = (course: Course) => {
    setSelectedCourseForDetail(course);
  };

  const handleOpenRegister = (courseId?: string, batchId?: string) => {
    setRegistrationCourseId(courseId);
    setRegistrationBatchId(batchId);
    setIsRegisterModalOpen(true);
  };

  const handleOpenAdmin = () => {
    setIsAdminOpen(true);
  };

  const handleSelectCategoryFromOverview = (cat: CourseCategory) => {
    setSelectedCategory(cat);
    setActiveSection('katalog');
    const catalogElement = document.getElementById('katalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCatalog = () => {
    setActiveSection('katalog');
    const catalogElement = document.getElementById('katalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenRegister={handleOpenRegister}
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner with Stats */}
        <Hero
          onOpenRegister={handleOpenRegister}
          onExploreCatalog={handleExploreCatalog}
          onSelectCategory={handleSelectCategoryFromOverview}
        />

        {/* 4 Core Pillars Overview */}
        <CategoryOverview
          onSelectCategory={handleSelectCategoryFromOverview}
        />

        {/* Full Course Catalog with Search & Filters */}
        <CourseCatalog
          courses={courses}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onOpenCourseDetail={handleOpenCourseDetail}
          onOpenRegister={handleOpenRegister}
        />

        {/* Schedule Matrix & Downloadable PDF Brochure */}
        <ScheduleAndBrochure
          courses={courses}
          onOpenRegister={handleOpenRegister}
        />

        {/* Company Profile (Vision, Mission, Labs, Accreditations) */}
        <CompanyProfile />

        {/* Testimonials & Corporate Client Badges */}
        <TestimonialsAndClients />

        {/* FAQ Section */}
        <ContactAndLocation />
      </main>

      {/* Footer */}
      <Footer
        setActiveSection={setActiveSection}
        onOpenRegister={handleOpenRegister}
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Modals */}
      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onRegisterCourse={handleOpenRegister}
      />

      <RegistrationFormModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        courses={courses}
        initialCourseId={registrationCourseId}
        initialBatchId={registrationBatchId}
      />

      {/* Admin Panel Modal */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* WhatsApp Floating Consultation Widget */}
      <WhatsAppFloatingButton />

    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <MainApp />
    </ContentProvider>
  );
}
