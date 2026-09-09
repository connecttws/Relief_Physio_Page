import React from 'react';
import { Phone, Calendar, ShieldCheck, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      {/* Top Notification Banner */}
      <div className="bg-[#072B34] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-teal-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto md:mx-0 font-medium text-teal-100 text-center sm:text-left">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Consultations Available This Week: In-Clinic (Jaipur) & Online Tele-Physio</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-teal-200">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" /> Mon - Sat: 8:00 AM - 8:00 PM
            </span>
            <span className="text-teal-600">•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100% Evidence-Based Care
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          {/* Brand Identity (Logo Image Removed) */}
          <a href="#" className="flex flex-col justify-center group shrink-0">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0D9488]">
              Dr. Rahul&apos;s
            </span>
            <span className="text-base sm:text-xl font-extrabold text-[#0B4351] tracking-tight leading-none group-hover:text-[#0D9488] transition-colors">
              Relief Physiotherapy
            </span>
          </a>

          {/* Quick Badges / Contact */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-[#0B4351] font-bold text-xs shrink-0">
                12+
              </div>
              <div>
                <p className="font-semibold text-slate-800 leading-none">Years Experience</p>
                <p className="text-xs text-slate-600 mt-0.5">Spine, Knee & Neck Rehab</p>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold text-xs shrink-0">
                10k+
              </div>
              <div>
                <p className="font-semibold text-slate-800 leading-none">Patients Treated</p>
                <p className="text-xs text-slate-600 mt-0.5">Non-Surgical Recovery</p>
              </div>
            </div>
          </div>

          {/* Call & CTA Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:+919829000000"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#0B4351] hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>Talk to Expert</span>
            </a>

            <a
              href="#consultation"
              className="btn-accent px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
