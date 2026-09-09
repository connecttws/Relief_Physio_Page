import React from 'react';
import { Layers, ArrowRight, CheckCircle2, Award } from 'lucide-react';

export default function FourStepFramework() {
  const steps = [
    {
      num: 'Step 1',
      title: 'Diagnosis: Identifying the Real Root Cause',
      desc: "Thorough assessment that goes beyond a quick look — pinpointing what's actually causing the pain.",
      pillColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      accentBorder: 'border-t-emerald-500',
    },
    {
      num: 'Step 2',
      title: 'Relief: Targeted Manual Therapy',
      desc: 'Hands-on techniques to ease muscle tightness and reduce pain without medication.',
      pillColor: 'bg-teal-100 text-teal-800 border-teal-300',
      accentBorder: 'border-t-teal-500',
    },
    {
      num: 'Step 3',
      title: 'Strengthening: Rebuilding Support',
      desc: 'Guided exercises to strengthen the muscles protecting the affected joint or spine.',
      pillColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      accentBorder: 'border-t-emerald-600',
    },
    {
      num: 'Step 4',
      title: 'Long-Term Mobility: Flexibility & Prevention',
      desc: "A maintenance plan so pain doesn't return once the active treatment phase ends.",
      pillColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      accentBorder: 'border-t-cyan-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden" id="framework">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300/80 mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-700" /> The Rahul Recovery Method
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            The Treatment Process <span className="gradient-text">(4 Steps)</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Learn how Dr. Rahul&apos;s evidence-based <strong>4-Step Process</strong> can make your life <strong className="text-emerald-700 underline decoration-emerald-400">Pain-Free for the Long Term</strong>.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`glass-card hover-lift p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 border-t-4 ${step.accentBorder} shadow-md relative flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${step.pillColor}`}>
                    {step.num}
                  </span>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-emerald-300 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-950 mb-3 leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700">
                <span>Clinical Phase 0{idx + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
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
