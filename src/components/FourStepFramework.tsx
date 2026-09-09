import React from 'react';
import { Search, Activity, Dumbbell, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function FourStepFramework() {
  const steps = [
    {
      number: "01",
      title: "Root-Cause Diagnosis",
      hindiHeadline: "Proper Assessment & Actual Root-Cause Discovery",
      description: "Sabse pehle hum aapke spine, knee ya neck ka in-depth physical assessment karte hain. Biomechanical movement, joint mobility, muscle imbalance aur nerve pathways check karke pata lagate hain ki pain kahan se trigger ho raha hai.",
      icon: Search,
      bullets: [
        "In-depth physical & postural gait examination",
        "Joint range-of-motion & flexibility analysis",
        "Nerve compression & radiating trigger mapping",
        "No guesswork — 100% individualised clinical diagnosis"
      ],
      badge: "Clinical Precision",
      highlightColor: "border-teal-500/40 bg-teal-50/40",
      accentBadgeColor: "bg-[#0B4351] text-white"
    },
    {
      number: "02",
      title: "Targeted Relief",
      hindiHeadline: "Hands-On Manual Therapy & Immediate Decompression",
      description: "Hands-on manual therapy aur targeted evidence-based techniques ke through joint stiffness, chronic muscle spasm aur restricted movement ko gently address kiya jata hai taaki aapko natural relief mile bina painkillers ke.",
      icon: Activity,
      bullets: [
        "Joint mobilization & decompression techniques",
        "Myofascial release for tight muscle knots",
        "Targeted neurodynamics to soothe irritated nerves",
        "Immediate decrease in pain intensity & stiffness"
      ],
      badge: "Fast Pain Relief",
      highlightColor: "border-emerald-500/40 bg-emerald-50/40",
      accentBadgeColor: "bg-emerald-700 text-white"
    },
    {
      number: "03",
      title: "Deep Strengthening",
      hindiHeadline: "Reinforce Spine & Joint Supporting Muscles",
      description: "Sirf pain ko temporarily reduce karna enough nahi hai. Hum spine discs, knee joints aur cervical vertebrae ko support karne wali deep stabilizer muscles ko step-by-step strengthen karte hain taaki pain dobara na aaye.",
      icon: Dumbbell,
      bullets: [
        "Deep core & spinal stabilizer muscle activation",
        "Quadriceps, hamstring & hip stabilizer alignment",
        "Scapular & cervical postural muscle reinforcement",
        "Prevents recurring flare-ups & disc re-injury"
      ],
      badge: "Relapse Prevention",
      highlightColor: "border-blue-500/40 bg-blue-50/40",
      accentBadgeColor: "bg-blue-700 text-white"
    },
    {
      number: "04",
      title: "Long-Term Mobility",
      hindiHeadline: "Personalised Routine for Confident Daily Life",
      description: "Finally, aapke specific work routine, lifestyle aur daily habits ke according ek customised mobility plan diya jata hai. Chahe aap office me ghanto baithe ho ya household work kar rahe ho, aap confident aur pain-free move kar sakein.",
      icon: ShieldCheck,
      bullets: [
        "Desk & office ergonomics posture recommendations",
        "5-minute daily micro-mobility exercises at home",
        "Safe lifting, bending & walking movement training",
        "Lifelong independence without doctor dependency"
      ],
      badge: "Permanent Freedom",
      highlightColor: "border-amber-500/40 bg-amber-50/40",
      accentBadgeColor: "bg-amber-600 text-white"
    }
  ];

  return (
    <section id="framework" className="py-16 md:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-soft-teal mb-3">
            Proprietary Treatment Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Dr. Rahul's <span className="text-[#0B4351]">4-Step Personalised</span> Treatment Approach
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            "Hum aapko koi generic exercise sheet dekar nahi chhodte. Har patient ke pain ka underlying trigger samajhkar yeh 4-step framework follow kiya jata hai."
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl p-7 sm:p-9 border-2 ${step.highlightColor} shadow-md hover:shadow-xl transition-all flex flex-col justify-between`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-extrabold px-3 py-1 rounded-full ${step.accentBadgeColor}`}>
                        Step {step.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        {step.badge}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0B4351]">
                      <Icon className="w-6 h-6 text-[#0D9488]" />
                    </div>
                  </div>

                  {/* Title & Hindi Headline */}
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#0B4351] mb-4">
                    {step.hindiHeadline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Bullet Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {step.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
                  <span>Part of your 1-on-1 personalized plan</span>
                  <span className="font-bold text-[#0B4351]">Evidence-Based</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar below steps */}
        <div className="mt-14 text-center max-w-xl mx-auto">
          <p className="text-slate-700 font-semibold mb-4 text-base">
            Apne spine, knee ya neck pain ka permanent root-cause diagnosis chahte hain?
          </p>
          <a
            href="#consultation"
            className="btn-accent px-8 py-4 rounded-full text-base sm:text-lg font-bold inline-flex items-center gap-2 group"
          >
            <span>Book Your Root-Cause Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
