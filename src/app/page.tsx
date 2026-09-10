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

/** Thin gradient line divider — matches the clean edge at the bottom of TrustCounters */
function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden
      style={{
        height: '1px',
        background: dark
          ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)'
          : 'linear-gradient(90deg, transparent, #CBD5E1 30%, #CBD5E1 70%, transparent)',
        margin: 0,
      }}
    />
  );
}

export default function ReliefPhysioPage() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden min-h-[100dvh]">
      <OfferBanner />
      <Navbar />

      <HeroSection />
      <Divider />
      <TrustCounters />
      <Divider dark />
      <PainSection />
      <Divider />
      <ConsultationSection />
      <Divider />
      <ProcessSteps />
      <Divider />
      <PersonaCards />
      <Divider />
      <DoctorBio />
      <Divider />
      <Testimonials />
      <Divider dark />
      <FaqSection />
      <Divider />
      <FinalCTA />
      <Divider dark />
      <Footer />
    </main>
  );
}
