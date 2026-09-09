import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

export default function DoctorBio() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Doctor Image & Badges (Col 1-5) */}
          <div className="lg:col-span-5 relative pb-8 lg:pb-0 mb-4 lg:mb-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-emerald-400/20 rounded-3xl blur-xl -z-10" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-3/4 min-h-[320px] sm:min-h-[400px]">
                <Image
                  src="/storage/herobanners/BmDEAxPn0Rg5QObeVOv1pQbDAMaq6oUf24HtnqrT.jpg"
                  alt="Dr. Rahul - Lead Physiotherapist & Founder of Relief Physiotherapy"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Experience Badge with Responsive Fit */}
              <div className="absolute -bottom-5 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center justify-around sm:justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-teal-50 flex items-center justify-center text-[#0B4351] shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">12+ Years</p>
                    <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5">Clinical Practice</p>
                  </div>
                </div>

                <div className="h-7 w-px bg-slate-200" />

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">10,000+</p>
                    <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5">Patients Recovered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Story & Philosophy (Col 6-12) */}
          <div className="lg:col-span-7 pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[#0B4351] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-teal-200/80">
              <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" /> Founder & Lead Physiotherapist
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              &ldquo;Painkillers se dard dabaana band karein. <span className="text-[#0B4351]">Root cause theek karne par focus karein.&rdquo;</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium mt-3 sm:mt-4">
              — Dr. Rahul <span className="text-xs sm:text-sm font-normal text-slate-600">(BPT, MPT, COMT — Spine & Joint Rehabilitation Specialist)</span>
            </p>

            <div className="mt-5 space-y-3.5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">&ldquo;Over the past 12+ years,</strong> maine dekha hai ki 90% se zyaada patients jo spine, knee ya neck pain se pareshan rehte hain, unhe actually surgery ya lifelong medicines ki zarurat hi nahi hoti.
              </p>
              <p>
                Unki sabse badi problem hoti hai: unhe kisi ne yeh nahi bataya ki dard ka <em>actual origin</em> kya hai. Kabhi disc par extra pressure hota hai, toh kabhi hip ki weakness ki wajah se knee par pura weight pad raha hota hai.
              </p>
              <p className="bg-teal-50/70 p-3.5 sm:p-4 rounded-xl border border-teal-100 font-medium text-slate-800">
                Isi liye Relief Physiotherapy me hum kisi patient ko generic exercise pamphlet nahi thamaate. Hum har case ko personalised clinical protocol ke saath treat karte hain.&rdquo;
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 mt-5 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span>Zero Unnecessary Surgeries</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span>No Lifelong Painkiller Dependency</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span>Certified Orthopedic Manual Therapy</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span>Clinic Visit & Online Tele-Rehab</span>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="pt-6 sm:pt-8">
              <a
                href="#consultation"
                className="btn-teal px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-bold shadow-md inline-flex items-center gap-2"
              >
                <span>Consult Directly with Dr. Rahul</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
