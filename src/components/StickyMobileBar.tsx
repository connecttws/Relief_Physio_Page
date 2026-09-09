import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href="tel:+919829000000"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 bg-white shadow-xs hover:bg-slate-50 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
          <span>Call Clinic</span>
        </a>

        <a
          href="#consultation"
          className="btn-accent flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-extrabold shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
        </a>
      </div>
    </div>
  );
}
