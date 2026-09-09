import React from 'react';
import { Activity, Disc, Bone, Move, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ConditionsGrid() {
  const conditions = [
    {
      title: "Spine & Lower Back Pain",
      hindiSubtitle: "Sciatica, Slip Disc, Lumbar Stiffness",
      icon: Disc,
      symptoms: [
        "Sharp shooting pain down the leg (Sciatica)",
        "Stiffness while bending or standing up from chair",
        "Disc bulge / herniation nerve compression",
        "Chronic dull ache during long sitting or driving"
      ],
      solutionTag: "Decompression & Core Stabilizer Therapy"
    },
    {
      title: "Knee Pain & Degeneration",
      hindiSubtitle: "Osteoarthritis, Joint Friction, Meniscus Strain",
      icon: Bone,
      symptoms: [
        "Clicking / grinding sensation while climbing stairs",
        "Morning stiffness and difficulty walking straight",
        "Knee joint gap reduction / early osteoarthritis",
        "Weak quadriceps and unstable kneecap tracking"
      ],
      solutionTag: "Cartilage Protection & Quad Alignment"
    },
    {
      title: "Neck & Cervical Pain",
      hindiSubtitle: "Cervical Spondylosis, Tech Neck, Numbness",
      icon: Activity,
      symptoms: [
        "Severe neck stiffness after computer/mobile use",
        "Pain radiating into shoulders, upper back or hands",
        "Tingling / numbness in fingers and forearm",
        "Frequent tension headaches starting from neck base"
      ],
      solutionTag: "Postural Realignment & Nerve Flossing"
    },
    {
      title: "Shoulder & Posture Rehab",
      hindiSubtitle: "Frozen Shoulder, Rotator Cuff, Slouching",
      icon: Move,
      symptoms: [
        "Inability to lift arm overhead or reach behind back",
        "Severe night pain while sleeping on shoulder side",
        "Rounded shoulders and forward head posture",
        "Tendon inflammation & chronic shoulder impingement"
      ],
      solutionTag: "Capsular Release & Rotator Cuff Conditioning"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="badge-soft-teal mb-3">Specialized Conditions</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Konsi Problem Se <span className="text-[#0B4351]">Aap Sabse Zyaada Pareshan Hain?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dr. Rahul&apos;s 4-step framework has specialized clinical protocols for every joint and spine condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {conditions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0B4351] shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D9488]" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.solutionTag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B4351] mb-4">
                    {item.hindiSubtitle}
                  </p>

                  <div className="space-y-2.5">
                    {item.symptoms.map((symptom, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#consultation"
                    className="text-xs sm:text-sm font-bold text-[#0B4351] hover:text-[#0D9488] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Get Assessment For This Condition</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
