import React from 'react';
import { AlertCircle, HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ProblemAgitation() {
  const painQuestions = [
    {
      num: '01',
      question: 'Is your pain affecting your daily life and work?',
      detail: 'Struggling to sit for long desk hours, drive, play with your kids, or get a restful night of sleep without posture discomfort.',
    },
    {
      num: '02',
      question: 'Are you spending money and time on medicines, injections or random YouTube exercises without a real solution?',
      detail: 'Relying on temporary painkillers or unguided online routines that only mask symptoms instead of diagnosing the root cause.',
    },
    {
      num: '03',
      question: 'Are you tired of generic “therapy workshops” or masseurs that only give temporary relief?',
      detail: 'Short-lived massage therapy sessions that leave you back in pain within a few hours or days.',
    },
    {
      num: '04',
      question: 'Are you unsure what an actual long-term solution looks like?',
      detail: 'Confused between MRI reports, surgery recommendations, and conflicting advice from different practitioners.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100/90 border border-rose-300/60 mb-3 shadow-xs">
            <AlertCircle className="w-3.5 h-3.5" /> Pain-Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Living with Spine, Knee or <span className="text-rose-600 underline decoration-rose-400/50 underline-offset-8">Neck Pain?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            If any of these scenarios sound familiar, you are not alone — and you don&apos;t have to settle for constant pain.
          </p>
        </div>

        {/* 4 Pain Question Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painQuestions.map((q, idx) => (
            <div
              key={idx}
              className="glass-card hover-lift p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 font-black text-sm flex items-center justify-center border border-rose-200 shadow-xs">
                    {q.num}
                  </span>
                  <HelpCircle className="w-5 h-5 text-slate-300 group-hover:text-rose-500 transition-colors" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 mb-2 leading-snug">
                  {q.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {q.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-rose-600">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Requires Clinical Diagnosis</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Reassurance Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-[#022C22] via-[#064E3B] to-[#022C22] text-white p-6 sm:p-8 rounded-3xl shadow-xl text-center border border-emerald-500/30">
          <div className="flex items-center justify-center gap-2 mb-2 text-emerald-300 font-extrabold uppercase text-xs tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>The Path Forward</span>
          </div>
          <p className="text-base sm:text-xl font-black text-white leading-relaxed">
            &ldquo;Whether at home or in-clinic, real physiotherapy can help you manage your pain effectively.&rdquo;
          </p>
          <div className="mt-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Book Dr. Rahul&apos;s Assessment Now →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
