import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemAgitation from '@/components/ProblemAgitation';
import FourStepFramework from '@/components/FourStepFramework';
import DoctorBio from '@/components/DoctorBio';
import ComparisonTable from '@/components/ComparisonTable';
import ConditionsGrid from '@/components/ConditionsGrid';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function ReliefPhysioPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <HeroSection />
      <ProblemAgitation />
      <FourStepFramework />
      <DoctorBio />
      <ComparisonTable />
      <ConditionsGrid />
      <Testimonials />
      <BookingForm />
      <FaqSection />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
