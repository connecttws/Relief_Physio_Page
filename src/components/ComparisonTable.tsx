import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function ComparisonTable() {
  const comparisons = [
    {
      feature: "Assessment & Diagnosis",
      typical: "2-minute superficial glance, generic painkiller prescription",
      relief: "45-minute comprehensive physical, posture & root-cause biomechanical assessment",
    },
    {
      feature: "Treatment Protocol",
      typical: "One-size-fits-all exercise sheet given to all patients",
      relief: "100% customized 4-step treatment matching your exact condition & body type",
    },
    {
      feature: "Manual Therapy",
      typical: "Only machine modality (TENS/heating pad) with zero manual joint therapy",
      relief: "Specialized hands-on manual therapy & joint decompression by certified therapist",
    },
    {
      feature: "Strengthening Strategy",
      typical: "Random stretches that often aggravate herniations or ligament strains",
      relief: "Targeted stabilizer muscle strengthening to permanently protect joints",
    },
    {
      feature: "Relapse & Recurrence",
      typical: "High recurrence rate; pain returns as soon as medicine stops",
      relief: "Long-term mobility routine preventing pain from ever coming back",
    },
    {
      feature: "Medication Dependency",
      typical: "Daily painkillers causing kidney & gastric side effects",
      relief: "Drug-free, non-surgical evidence-based rehabilitation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-soft-teal mb-3">Clear Difference</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Temporary Solutions vs. <span className="text-[#0B4351]">Dr. Rahul's Root-Cause Care</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Compare why generic painkillers and random exercises fail, while our 4-step protocol delivers lasting freedom.
          </p>
        </div>

        {/* Table Container */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <div className="grid grid-cols-12 bg-slate-100 text-xs sm:text-sm font-bold border-b border-slate-200">
            <div className="col-span-4 p-4 sm:p-5 text-slate-700">Approach Factor</div>
            <div className="col-span-4 p-4 sm:p-5 text-slate-700 bg-slate-200/60 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <span>Generic Treatments</span>
            </div>
            <div className="col-span-4 p-4 sm:p-5 text-white bg-[#0B4351] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Dr. Rahul's Protocol</span>
            </div>
          </div>

          <div className="divide-y divide-slate-200 text-xs sm:text-sm">
            {comparisons.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 items-center hover:bg-slate-50/70 transition-colors">
                <div className="col-span-4 p-4 sm:p-5 font-semibold text-slate-900">
                  {row.feature}
                </div>
                <div className="col-span-4 p-4 sm:p-5 text-slate-600 bg-slate-50/50 flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.typical}</span>
                </div>
                <div className="col-span-4 p-4 sm:p-5 text-slate-900 bg-teal-50/40 font-medium flex items-start gap-2 border-l border-teal-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.relief}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
