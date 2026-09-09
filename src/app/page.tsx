import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemAgitation from '@/components/ProblemAgitation';
import ConsultationDeliverables from '@/components/ConsultationDeliverables';
import FourStepFramework from '@/components/FourStepFramework';
import ConditionsGrid from '@/components/ConditionsGrid';
import DoctorBio from '@/components/DoctorBio';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function ReliefPhysioPage() {
  return (
    <main className="min-h-[100dvh] w-full overflow-x-hidden flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <HeroSection />
      <ProblemAgitation />
      <ConsultationDeliverables />
      <FourStepFramework />
      <ConditionsGrid />
      <DoctorBio />
      <Testimonials />
      <BookingForm />
      <FaqSection />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
