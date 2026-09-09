import React from 'react';
import { ClipboardCheck, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ConsultationDeliverables() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-shimmer inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 mb-3 border border-emerald-300/50">
            <Sparkles className="w-3.5 h-3.5" /> Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            What You&apos;ll Get in Your <span className="gradient-text">Consultation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Clear, clinical deliverables tailored to put an end to pain guesswork.
          </p>
        </div>

        {/* 2 Deliverables + Visual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: 2 Main Deliverables Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Deliverable 1 */}
            <div className="glass-card hover-lift p-7 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-md relative group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00984B] to-[#064E3B] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-600/20 shrink-0">
                  1
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1 block">Deliverable 01</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 leading-snug">
                    A Personalised Pain Assessment
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Real diagnosis of the root cause — <em className="text-slate-900 font-semibold not-italic underline decoration-emerald-500 decoration-2">not a generic exercise sheet.</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Deliverable 2 */}
            <div className="glass-card hover-lift p-7 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-md relative group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-900 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-teal-600/20 shrink-0">
                  2
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-1 block">Deliverable 02</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 leading-snug">
                    A Physiotherapist-Led Treatment Plan
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Built around your specific condition, lifestyle and recovery goals — <em className="text-slate-900 font-semibold not-italic underline decoration-teal-500 decoration-2">reviewed and adjusted as you progress.</em>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Spine Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-3 rounded-3xl border border-slate-200/90 shadow-xl relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src="/images/spine_knee_relief_3d.jpg"
                  alt="3D Spine and Knee Alignment Analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Evidence-Based Biomechanical Protocol</span>
                  </div>
                  <div className="text-xs text-slate-200 font-medium">
                    Designed for long-term spinal, lumbar &amp; knee joint stability.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Action CTA */}
        <div className="mt-12 text-center">
          <a
            href="#consultation"
            className="btn-primary-cta text-base sm:text-lg"
          >
            Book Your Consultation →
          </a>
          <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-500 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Real diagnosis · Personalised treatment plan</span>
          </div>
        </div>

      </div>
    </section>
  );
}
