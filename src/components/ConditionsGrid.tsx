import React from 'react';
import { Laptop, Briefcase, Heart, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ConditionsGrid() {
  const audiences = [
    {
      icon: Laptop,
      title: 'Desk Job Professionals',
      desc: 'Long sitting hours causing back or neck pain and posture stiffness',
      color: 'from-emerald-500 to-teal-700',
      tag: 'Office / Remote',
    },
    {
      icon: Briefcase,
      title: 'Business Owners & Entrepreneurs',
      desc: 'Pain affecting focus, travel, and business productivity',
      color: 'from-amber-500 to-orange-600',
      tag: 'High Energy',
    },
    {
      icon: Heart,
      title: 'Older Adults (55+)',
      desc: 'Gentle, safe techniques for better mobility, joint comfort, and independence',
      color: 'from-rose-500 to-pink-600',
      tag: 'Gentle Care',
    },
    {
      icon: Users,
      title: 'Working Parents',
      desc: 'Managing home and work despite body pain and fatigue',
      color: 'from-blue-500 to-indigo-600',
      tag: 'Active Lifestyle',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-shimmer inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 mb-3 border border-emerald-300/50">
            <Sparkles className="w-3.5 h-3.5" /> Target Audience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Who This Is <span className="gradient-text">For</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Designed specifically for individuals who want targeted, long-lasting relief without surgery.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, idx) => {
            const IconComp = aud.icon;
            return (
              <div
                key={idx}
                className="glass-card hover-lift p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-md relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${aud.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 text-[10px] font-bold uppercase tracking-wider">
                      {aud.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                    {aud.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {aud.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Tailored Recovery Plan</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
