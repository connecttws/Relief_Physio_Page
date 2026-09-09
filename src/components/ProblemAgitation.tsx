import React from 'react';
import { Pill, Flame, Video, AlertTriangle, XCircle, ArrowDown } from 'lucide-react';

export default function ProblemAgitation() {
  const traps = [
    {
      icon: Pill,
      title: "Temporary Painkillers & Balms",
      hindiQuote: "Kuch ghante ka relief, phir wahi dard...",
      explanation: "Painkillers brain ko pain signal bhejna band kar dete hain, lekin aapke spine disc compression, knee joint friction ya pinched nerve ko theek nahi karte. Medicine ka effect khatam hote hi pain wapas aa jata hai.",
      tag: "Masks Symptoms",
      tagColor: "bg-rose-100 text-rose-800",
    },
    {
      icon: Flame,
      title: "Random Massages & Heat Packs",
      hindiQuote: "Stiffness kuch der kam lagti hai...",
      explanation: "Heat packs ya massages blood circulation temporarily badhate hain aur superficial muscles relax karte hain. Lekin agar joint misalignment ya structural weakness hai, toh 2 din baad wahi stiffness laut aati hai.",
      tag: "Short-Lived Comfort",
      tagColor: "bg-amber-100 text-amber-800",
    },
    {
      icon: Video,
      title: "Generic YouTube Exercises",
      hindiQuote: "Dusron ki exercise aapke liye harmful ho sakti hai...",
      explanation: "YouTube par bataye gaye stretches bina proper clinical diagnosis ke try karne se disc hernia, ligament tear ya nerve irritation aur zyaada aggravate ho sakti hai. Ek generic routine sabke liye fit nahi hoti.",
      tag: "High Injury Risk",
      tagColor: "bg-red-100 text-red-800",
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-200">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> The Pain Loop Cycle
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Kyun Baar-Baar Wapas Aa Jata Hai Aapka <span className="text-rose-600">Spine, Knee ya Neck Pain?</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Agar aapne painkillers, massages ya online videos try kiye hain, toh galti aapki nahi hai.
            Galti un <strong className="text-slate-900">temporary shortcuts</strong> ki hai jo sirf symptoms ko chupate hain.
          </p>
        </div>

        {/* 3 Traps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {traps.map((trap, idx) => {
            const Icon = trap.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#FAFBFD] p-5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />
                    </div>
                    <span className={`text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md ${trap.tagColor}`}>
                      {trap.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2">
                    {trap.title}
                  </h3>

                  <p className="text-xs font-medium text-rose-700 bg-rose-50/70 p-2.5 rounded-lg mb-3 italic">
                    &ldquo;{trap.hindiQuote}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {trap.explanation}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-rose-600">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Does not treat the underlying root cause</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Root Cause Breakdown Banner */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-[#072B34] to-[#0B4351] text-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-teal-900/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold tracking-wider uppercase border border-emerald-400/30">
              The Clinical Truth from Dr. Rahul
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
              &ldquo;Generic exercises aur temporary treatments kuch time relief de sakte hain, lekin root cause ke bina pain dobara trigger hoga.&rdquo;
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Jab tak spine ki disc alignment, knee joint ka biomechanical load, aur neck ki postural muscle weakness ko accurately test nahi kiya jata, tab tak permanent relief milna namumkin hai.
            </p>

            <div className="pt-2 flex justify-center">
              <a
                href="#framework"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-[#0B4351] hover:bg-teal-50 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>Dekhiye Hamara 4-Step Solution</span>
                <ArrowDown className="w-4 h-4 text-[#0D9488] shrink-0" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
