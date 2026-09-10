import React from 'react';
import OfferBanner from '@/components/OfferBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustCounters from '@/components/TrustCounters';
import PainSection from '@/components/PainSection';
import ConsultationSection from '@/components/ConsultationSection';
import ProcessSteps from '@/components/ProcessSteps';
import PersonaCards from '@/components/PersonaCards';
import DoctorBio from '@/components/DoctorBio';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function ReliefPhysioPage() {
  return (
    <main>
      <OfferBanner />
      <Navbar />
      <HeroSection />
      <TrustCounters />
      <PainSection />
      <ConsultationSection />
      <ProcessSteps />
      <PersonaCards />
      <DoctorBio />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
