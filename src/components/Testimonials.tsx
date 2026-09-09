import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      age: "48 years, Bank Manager",
      condition: "Severe L4-L5 Disc Herniation & Sciatica",
      feedback: "Mai pichle 2 saal se painkillers le raha tha aur YouTube ki exercises se mera pain aur badh gaya tha. Doctors ne surgery suggest ki thi. Dr. Rahul ke 4-step framework ke 3rd week me hi mera nerve pain 80% kam ho gaya. Aaj mai bina kisi dawai ke normal walk kar pa raha hoon!",
      stars: 5,
      reliefDays: "Pain-free in 4 weeks"
    },
    {
      name: "Sunita Agarwal",
      age: "54 years, Homemaker",
      condition: "Grade 3 Knee Osteoarthritis",
      feedback: "Seedhiyan chadhne me itni takleef hoti thi ki lagta tha knee replacement hi aakhri option hai. Dr. Rahul ne manual joint therapy aur targeted quad strengthening karwayi. Aaj 6 mahine ho gaye, no knee swelling and completely independent mobility!",
      stars: 5,
      reliefDays: "Surgery avoided completely"
    },
    {
      name: "Vikram Malhotra",
      age: "36 years, Senior IT Consultant",
      condition: "Chronic Cervical Spondylosis & Arm Numbness",
      feedback: "10-12 ghante laptop par kaam karne se right haath me tingling hoti thi. Generic physiotherapy centres par sirf heating machine lagate the. Dr. Rahul ne root cause pakdi — meri upper spine locked thi. Unke manual treatment se 100% cure hua.",
      stars: 5,
      reliefDays: "Full range of motion restored"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-soft-teal mb-3">Real Patient Results</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            10,000+ Log <span className="text-[#0B4351]">Dard Se Azaad Ho Chuke Hain</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read how patients stopped recurring pain and avoided unnecessary surgery through Dr. Rahul's personalized approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAFBFD] rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.stars)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-200" />
                </div>

                <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-teal-50 text-[#0B4351] border border-teal-200 mb-3">
                  {rev.condition}
                </span>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                    <p className="text-xs text-slate-700">{rev.age}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{rev.reliefDays}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
