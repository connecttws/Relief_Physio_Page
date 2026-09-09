import React from 'react';
import { Check, X, ShieldAlert, Sparkles, ArrowRightLeft } from 'lucide-react';

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
    <section className="py-12 sm:py-16 md:py-24 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="badge-soft-teal mb-3">Clear Difference</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Temporary Solutions vs. <span className="text-[#0B4351]">Dr. Rahul&apos;s Root-Cause Care</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Compare why generic painkillers and random exercises fail, while our 4-step protocol delivers lasting freedom.
          </p>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex items-center justify-end text-xs text-slate-500 mb-2 sm:hidden gap-1 font-medium">
          <ArrowRightLeft className="w-3.5 h-3.5 text-teal-600" />
          <span>Swipe horizontally to compare</span>
        </div>

        {/* Table Container with Horizontal Scroll Protection on Mobile */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[560px] sm:min-w-0 max-w-4xl mx-auto rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-100 text-xs sm:text-sm font-bold border-b border-slate-200">
              <div className="col-span-4 p-3.5 sm:p-5 text-slate-700">Approach Factor</div>
              <div className="col-span-4 p-3.5 sm:p-5 text-slate-700 bg-slate-200/60 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Generic Treatments</span>
              </div>
              <div className="col-span-4 p-3.5 sm:p-5 text-white bg-[#0B4351] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dr. Rahul&apos;s Protocol</span>
              </div>
            </div>

            <div className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparisons.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center hover:bg-slate-50/70 transition-colors">
                  <div className="col-span-4 p-3.5 sm:p-5 font-semibold text-slate-900">
                    {row.feature}
                  </div>
                  <div className="col-span-4 p-3.5 sm:p-5 text-slate-600 bg-slate-50/50 flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.typical}</span>
                  </div>
                  <div className="col-span-4 p-3.5 sm:p-5 text-slate-900 bg-teal-50/40 font-medium flex items-start gap-2 border-l border-teal-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.relief}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
