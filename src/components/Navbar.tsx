import React from 'react';
import { MapPin, Phone, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      
      {/* 1. Top Offer Banner */}
      <div className="bg-gradient-to-r from-[#022C22] via-[#064E3B] to-[#022C22] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="pulse-dot"></span>
          <span className="text-emerald-300 uppercase tracking-widest font-extrabold text-[11px]">Book Your Consultation:</span>
          <span className="text-slate-100">
            In-Clinic in <strong className="text-emerald-300 underline font-bold">Mayur Vihar, Delhi</strong> · Also Available <strong className="text-amber-300 font-bold">Online, Pan-India</strong>
          </span>
          <a
            href="#consultation"
            className="ml-2 inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-colors shadow-sm"
          >
            <Sparkles className="w-3 h-3" /> Book Now
          </a>
        </div>
      </div>

      {/* Main Glass Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00984B] to-[#064E3B] text-white flex items-center justify-center font-black text-xl shadow-md shadow-emerald-600/20 border border-emerald-400/30">
            DR
          </div>
          <div>
            <div className="text-base sm:text-lg font-black text-slate-900 leading-none tracking-tight">
              Dr. Rahul <span className="text-[#00984B]">Physiotherapy</span>
            </div>
            <div className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
              <span>Spine, Knee &amp; Joint Rehabilitation</span>
            </div>
          </div>
        </div>

        {/* Desktop Quick Info & CTA */}
        <div className="hidden md:flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium bg-slate-100/80 px-3.5 py-2 rounded-xl border border-slate-200">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900 text-[11px]">Mayur Vihar, Delhi</div>
              <div className="text-[10px] text-slate-500">In-Clinic &amp; Online</div>
            </div>
          </div>

          <a
            href="#consultation"
            className="btn-primary-cta !py-2.5 !px-5 !text-xs uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </a>
        </div>

      </div>
    </header>
  );
}
