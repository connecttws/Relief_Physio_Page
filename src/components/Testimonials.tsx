import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquareHeart } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rajesh Sharma',
      location: 'Mayur Vihar, Delhi',
      mode: 'In-Clinic Patient',
      rating: 5,
      text: 'I was struggling with chronic lower back stiffness for over 8 months. Dr. Rahul\'s assessment identified the exact postural trigger. The personalized exercises gave me lasting relief!',
    },
    {
      name: 'Sunita Agarwal',
      location: 'Online Tele-Physio',
      mode: 'Pan-India Video Patient',
      rating: 5,
      text: 'I did the online tele-physio consultation for knee pain. Dr. Rahul observed my gait live on camera and guided me through targeted exercises. Super effective!',
    },
    {
      name: 'Vikram Malhotra',
      location: 'Desk Job Professional',
      mode: 'Cervical Spondylosis',
      rating: 5,
      text: 'Long desk hours caused severe cervical neck pain and dizziness. Dr. Rahul provided hands-on manual guidance and an ergonomic plan that helped me recover completely.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-shimmer inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 mb-3 border border-emerald-300/50">
            <MessageSquareHeart className="w-3.5 h-3.5" /> Social Proof &amp; Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Patient Recovery <span className="gradient-text">Stories</span>
          </h2>

          {/* Google Rating Banner Badge */}
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 bg-amber-50 border border-amber-200/80 px-5 py-2.5 rounded-full shadow-xs">
            <span className="font-black text-amber-950 text-sm sm:text-base">Rated 4.0</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-amber-900 font-bold">
              | 1430+ Reviews on Google
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card hover-lift p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-md relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">{rev.location}</span>
                </div>
                
                <span className="px-2.5 py-1 rounded-md bg-emerald-100/90 text-emerald-800 text-[10px] font-bold">
                  {rev.mode}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
