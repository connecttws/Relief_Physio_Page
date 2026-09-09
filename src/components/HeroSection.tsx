import React from 'react';
import { Star, CheckCircle2, ShieldCheck, Users, Award, Stethoscope, ArrowRight, Sparkles, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-[#F0FDF4]/40 to-white overflow-hidden">
      
      {/* Background Decor Spheres */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Copy + CTAs + Reassurance) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-[#064E3B] bg-emerald-100/80 border border-emerald-300/60 shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Especially for Busy Professionals, Business Owners, Parents &amp; Older Adults with Spine, Knee or Neck Pain</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Overcome Spine, Knee &amp; Neck Pain — <span className="gradient-text underline decoration-emerald-500/40 underline-offset-8">With Real Physiotherapy</span>, Not Guesswork
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              Get a personalised assessment from <strong>Dr. Rahul</strong>, a qualified physiotherapist — in-clinic in <strong>Mayur Vihar, Delhi</strong> or from the comfort of your home <strong>online, Pan-India</strong>.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-amber-50/90 border border-amber-200/80 shadow-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-amber-950">
                4.0 | 1430+ Reviews on Google
              </span>
            </div>

            {/* CTA + Reassurance Block */}
            <div className="pt-2 space-y-3">
              <div>
                <a
                  href="#consultation"
                  className="btn-primary-cta w-full sm:w-auto text-base sm:text-lg group"
                >
                  <span>Book Your Consultation →</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Reassurance Line Under CTA */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 flex-wrap">
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Real diagnosis
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Personalised treatment plan
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  No unnecessary surgery-first approach
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Hero Visual Showcase Card) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-3 rounded-3xl border border-slate-200/90 shadow-2xl relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src="/images/dr_rahul_assessment.jpg"
                  alt="Dr Rahul Physiotherapy Assessment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Overlaid Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">Dr. Rahul Assessment</div>
                      <div className="text-[10px] text-slate-500">In-Clinic Mayur Vihar &amp; Tele-Physio</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Guarantee Sticker Tag */}
              <div className="absolute -top-4 -right-4 sticker-tag px-3.5 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5 z-10 animate-bounce">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>100% Non-Surgical Focus</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Section 3: Trust Counters */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Stat 1 */}
            <div className="glass-card hover-lift p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                10000+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                Patients Treated Successfully
              </div>
            </div>

            {/* Stat 2 */}
            <div className="glass-card hover-lift p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                12+ Years
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                Of Physiotherapy Practice
              </div>
            </div>

            {/* Stat 3 */}
            <div className="glass-card hover-lift p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                25+ Conditions
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                Treated (Back, Neck, Knee, Sports Injury, Post-Surgery Rehab, etc.)
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
