import React from 'react';
import { ShieldCheck, PlayCircle, Award, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-[#F4F8F8] to-[#F8FAFC] overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-teal-100/40 via-emerald-100/30 to-amber-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#0D9488]" />
            <span className="text-xs sm:text-sm font-semibold text-[#0B4351] tracking-wide uppercase">
              Evidence-Based Root-Cause Pain Rehabilitation
            </span>
          </div>
        </div>

        {/* Main Hero Hook */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-5">
            Kya Aap <span className="text-[#0B4351] underline decoration-[#0D9488]/40 decoration-4">Spine, Knee ya Neck Pain</span> Se Pareshan Hain?
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Painkillers, massages aur random YouTube exercises try kiye, <br className="hidden sm:inline" />
            <span className="text-rose-600 font-semibold">lekin pain baar-baar wapas aa jata hai?</span>
          </p>

          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 inline-block max-w-2xl mx-auto text-left sm:text-center">
            <p className="text-sm sm:text-base text-amber-900 font-semibold">
              ⚠️ Problem sirf pain nahi hai — problem yeh hai ki pain ki <span className="underline decoration-amber-500 font-bold">actual root cause</span> identify hi nahi hui hai.
            </p>
          </div>
        </div>

        {/* Grid: VSL Video Box & Quick Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
          
          {/* VSL Video Container (Col 1-7) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border-4 border-white aspect-video group">
              {/* Fallback / Poster Frame with Video Embed Overlay */}
              <iframe
                src="https://fast.wistia.net/embed/iframe/ad519uqga2?seo=false&videoFoam=true"
                title="Dr. Rahul - 4 Step Root Cause Physiotherapy Approach"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />

              {/* Top Video Tag */}
              <div className="absolute top-3 left-3 pointer-events-none z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                  <PlayCircle className="w-3.5 h-3.5 text-amber-400" />
                  Dr. Rahul Explains The 4 Steps (Watch Now)
                </span>
              </div>
            </div>

            <p className="text-center text-xs sm:text-sm text-slate-700 mt-3 font-medium flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Watch this 3-minute video to understand why your pain keeps returning
            </p>
          </div>

          {/* Right Action & Value Card (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 text-[#0B4351] text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4 text-[#0D9488]" /> 12+ Years Clinical Authority
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Meet Dr. Rahul & The Relief Physio Team
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Helped <strong className="text-slate-900">10,000+ patients</strong> overcome chronic spine, knee & neck pain without unnecessary surgery or lifelong medicines.
              </p>
            </div>

            {/* Quick Benefits Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100 text-sm text-slate-700 font-medium">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No generic exercise sheets</strong> — 100% customised protocol</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Root-Cause physical assessment</strong> before any therapy begins</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Advanced hands-on manual therapy</strong> for fast stiffness relief</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Strengthening & ergonomic plan</strong> for permanent mobility</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="pt-2">
              <a
                href="#consultation"
                className="btn-accent w-full py-4 px-6 rounded-xl text-base sm:text-lg font-bold flex items-center justify-center gap-2 group"
              >
                <span>Book Your Consultation Slot</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-xs text-slate-700 mt-2.5">
                ⚡ Limited slots available this week • Clinic & Online Available
              </p>
            </div>
          </div>

        </div>

        {/* 4 Trust Counters */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0B4351]">10,000+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Patients Relieved</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0B4351]">12+ Years</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Clinical Experience</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700">0 Surgery</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Non-Invasive Focus</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-600">4-Step</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Proven Framework</p>
          </div>
        </div>

      </div>
    </section>
  );
}
