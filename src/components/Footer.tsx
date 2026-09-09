import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 text-white font-black text-base sm:text-lg tracking-wider uppercase">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>DR RAHUL PHYSIOTHERAPY · RELIEF PHYSIOTHERAPY CLINIC</span>
        </div>

        <p className="max-w-3xl mx-auto text-xs sm:text-sm text-slate-500 leading-relaxed">
          This content is for educational purposes only and does not guarantee specific results. This is not a substitute for in-person medical diagnosis where required. Individual results vary based on condition, consistency and medical history.
        </p>

        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 font-medium">
            © 2026 Dr. Rahul Physiotherapy Clinic. All rights reserved.
          </div>

          <nav className="flex items-center gap-4 text-slate-400" aria-label="Legal">
            <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="/terms-conditions" className="hover:text-emerald-400 transition-colors">Terms of Use</a>
            <span>·</span>
            <a href="/refund-policy" className="hover:text-emerald-400 transition-colors">Refund Policy</a>
          </nav>
        </div>

      </div>
    </footer>
  );
}
