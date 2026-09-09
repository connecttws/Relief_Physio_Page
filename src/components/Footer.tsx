import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#072B34] text-white pt-16 pb-24 md:pb-16 border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-800/60">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-44 h-12 flex items-center bg-white/10 p-2 rounded-xl backdrop-blur-xs">
              <Image
                src="/storage/company/logos/6UyZyveDaep3fF5vqhLpkZEJfhvqKRWtnmMXx35N.png"
                alt="Dr. Rahul's Relief Physiotherapy"
                width={170}
                height={48}
                className="object-contain brightness-0 invert"
              />
            </div>

            <p className="text-sm text-teal-100 leading-relaxed max-w-sm">
              Dr. Rahul's Relief Physiotherapy is dedicated to evidence-based, non-surgical pain management for spine, knee, and neck conditions through personalized root-cause rehabilitation.
            </p>

            <div className="flex items-center gap-3 text-xs text-teal-200">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Certified Manual Therapy
              </span>
              <span>•</span>
              <span>10,000+ Treated</span>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Treatment Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-teal-200">
              <li><a href="#framework" className="hover:text-emerald-300 transition-colors">4-Step Personalised Framework</a></li>
              <li><a href="#consultation" className="hover:text-emerald-300 transition-colors">Spine & Sciatica Therapy</a></li>
              <li><a href="#consultation" className="hover:text-emerald-300 transition-colors">Knee Osteoarthritis Care</a></li>
              <li><a href="#consultation" className="hover:text-emerald-300 transition-colors">Cervical & Tech Neck Rehab</a></li>
              <li><a href="#consultation" className="hover:text-emerald-300 transition-colors">Post-Surgery Rehabilitation</a></li>
            </ul>
          </div>

          {/* Clinic Timings & Location (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Clinic & Appointments
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-teal-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Relief Physiotherapy Centre, Main Clinic, Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98290 XXXXX / Consultation Helpline</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monday – Saturday: 8:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#consultation"
                className="btn-accent py-2.5 px-5 rounded-lg text-xs font-bold inline-block"
              >
                Book Your Consultation Slot
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-center sm:flex sm:justify-between sm:text-left text-xs text-teal-400 space-y-3 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} Dr. Rahul's Relief Physiotherapy. All rights reserved.
          </p>
          <p className="text-[11px] text-teal-300 max-w-xl">
            Medical Disclaimer: Individual outcomes may vary depending on patient compliance and diagnostic severity. Consult our specialist for personalized medical guidance.
          </p>
        </div>

      </div>
    </footer>
  );
}
