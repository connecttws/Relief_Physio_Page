import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <aside className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-emerald-500/30 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-white text-xs font-bold">
          <span className="pulse-dot"></span>
          <span>Clinic ya Online — Choice Aapki</span>
        </div>
        
        <a
          href="#consultation"
          className="btn-primary-cta !py-2.5 !px-4 !text-xs uppercase tracking-wider shrink-0"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Consultation →</span>
        </a>
      </div>
    </aside>
  );
}
