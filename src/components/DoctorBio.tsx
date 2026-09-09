import React from 'react';
import { Award, CheckCircle2, MapPin, Globe, UserCheck, ShieldCheck } from 'lucide-react';

export default function DoctorBio() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-[#064E3B] to-[#022C22] text-white relative overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/90 border border-emerald-500/40 mb-3 shadow-inner">
            <UserCheck className="w-3.5 h-3.5" /> Clinical Lead &amp; Expert
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Meet <span className="text-emerald-400 underline decoration-emerald-500/50 underline-offset-8">Dr. Rahul</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 font-medium">
            Qualified Physiotherapist &amp; Spine Rehabilitation Specialist
          </p>
        </div>

        {/* Doctor Bio Card */}
        <div className="max-w-5xl mx-auto bg-slate-900/95 rounded-3xl border border-emerald-500/30 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 group">
                <img
                  src="/storage/herobanners/BmDEAxPn0Rg5QObeVOv1pQbDAMaq6oUf24HtnqrT.jpg"
                  alt="Dr. Rahul - Lead Physiotherapist"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>12+ Years of Physiotherapy Practice</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-2 border border-emerald-500/30">
                  Qualified Physiotherapist
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
                  Dedicated to Solving Chronic Spine, Knee &amp; Joint Pain
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Dr Rahul is a qualified physiotherapist with <strong>12+ years of experience</strong> treating chronic spine, neck and knee pain. He has helped <strong>10,000+ patients</strong> recover from chronic spine, neck and knee pain through personalised, evidence-based physiotherapy — both in-clinic in <strong>Mayur Vihar, Delhi</strong> and <strong>online Pan-India</strong>.
                </p>
              </div>

              {/* Clinic Availability Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">In-Clinic Consultations</div>
                    <div className="text-xs sm:text-sm font-bold text-white">Mayur Vihar, Delhi</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Online Tele-Physio</div>
                    <div className="text-xs sm:text-sm font-bold text-white">Pan-India Access</div>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personalised assessment &amp; root cause identification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on manual therapy &amp; targeted joint exercises</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Long-term maintenance roadmap so pain doesn&apos;t return</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href="#consultation"
            className="btn-primary-cta text-base sm:text-lg"
          >
            Book Your Consultation →
          </a>
          <div className="mt-3 text-xs sm:text-sm font-medium text-emerald-200/80 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Real diagnosis · Personalised treatment plan · No unnecessary surgery-first approach</span>
          </div>
        </div>

      </div>
    </section>
  );
}
