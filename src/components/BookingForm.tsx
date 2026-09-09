'use client';

import React, { useState } from 'react';
import { Calendar, Phone, User, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MapPin, Globe } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    painArea: 'Spine & Lower Back Pain',
    duration: '1 - 6 months',
    consultationType: 'In-Clinic (Mayur Vihar, Delhi)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-[#EBF3F5] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Section 12: Final CTA) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-shimmer inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 mb-3 border border-emerald-300/50">
            <Sparkles className="w-3.5 h-3.5" /> Fast Appointment Slot
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Book Your Consultation <span className="gradient-text">Today →</span>
          </h2>

          <p className="mt-3 text-lg font-bold text-emerald-800">
            Clinic ya Online — <span className="text-amber-600 underline font-black">Aapki Choice.</span>
          </p>
        </div>

        {/* Booking Card Main Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Panel (Col 1-5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#022C22] via-[#064E3B] to-[#022C22] text-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" /> Direct Consultation
                </div>

                <h3 className="text-xl sm:text-2xl font-black leading-tight mb-3">
                  Apna Consultation Slot Confirm Karein
                </h3>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
                  Aapko pain ke saath compromise karte rehne ki zarurat nahi hai. Har baar temporary painkillers lene ke bajay ek proper assessment karwayein.
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-slate-200 pt-4 border-t border-emerald-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-300 shrink-0 border border-emerald-700">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <span>45-Min Dedicated Clinical Evaluation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-800/80 flex items-center justify-center text-amber-300 shrink-0 border border-emerald-700">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <span>Zero Surgery / Non-Invasive Roadmap</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-800/80 flex items-center justify-center text-teal-300 shrink-0 border border-emerald-700">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <span>Mayur Vihar, Delhi Clinic &amp; Online Video</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-emerald-800/80">
                <p className="text-xs text-emerald-300 font-semibold mb-1">Clinic Coordinator Helpline:</p>
                <div className="text-base sm:text-lg font-bold text-white">
                  Mayur Vihar, Delhi · Online Pan-India
                </div>
              </div>
            </div>

            {/* Right Form Panel (Col 6-12) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-white">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-950">
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-950">{formData.fullName}</strong>. Dr. Rahul&apos;s senior clinic coordinator will contact you on <strong className="text-slate-950">{formData.phone}</strong> shortly to confirm your time slot.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-[#064E3B] bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200 cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-slate-950 mb-1">
                      Fill Your Details
                    </h4>
                    <p className="text-xs text-slate-500 mb-2">
                      Our specialist will review your pain symptoms before the call.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00984B] focus:border-transparent transition-all"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00984B] focus:border-transparent transition-all"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Two Column Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Primary Pain Concern */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Pain Concern *
                      </label>
                      <select
                        value={formData.painArea}
                        onChange={(e) => setFormData({ ...formData, painArea: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00984B] focus:border-transparent transition-all"
                      >
                        <option value="Spine & Lower Back Pain">Spine &amp; Lower Back Pain</option>
                        <option value="Knee Pain & Osteoarthritis">Knee Pain &amp; Osteoarthritis</option>
                        <option value="Neck & Cervical Spondylosis">Neck &amp; Cervical Spondylosis</option>
                        <option value="Shoulder / Frozen Shoulder">Shoulder / Frozen Shoulder</option>
                        <option value="Post-Surgery Rehabilitation">Post-Surgery Rehabilitation</option>
                        <option value="Sports Injury / Other">Sports Injury / Other</option>
                      </select>
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Dard Kab Se Hai?
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00984B] focus:border-transparent transition-all"
                      >
                        <option value="Less than 1 month">Less than 1 month</option>
                        <option value="1 - 6 months">1 - 6 months</option>
                        <option value="6 - 12 months">6 - 12 months</option>
                        <option value="More than 1 year (Chronic)">More than 1 year (Chronic)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Mode Preference */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Consultation Mode Preference *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationType: 'In-Clinic (Mayur Vihar, Delhi)' })}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 ${
                          formData.consultationType === 'In-Clinic (Mayur Vihar, Delhi)'
                            ? 'bg-emerald-50 border-[#00984B] text-[#00984B] ring-2 ring-[#00984B]/20 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" /> In-Clinic (Mayur Vihar)
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationType: 'Online Video Consult (Pan-India)' })}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 ${
                          formData.consultationType === 'Online Video Consult (Pan-India)'
                            ? 'bg-emerald-50 border-[#00984B] text-[#00984B] ring-2 ring-[#00984B]/20 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Globe className="w-3.5 h-3.5" /> Online Tele-Consult
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary-cta w-full py-4 rounded-xl text-base font-black flex items-center justify-center gap-2 group shadow-xl cursor-pointer"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book Your Consultation Today →</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-[11px] text-slate-500 mt-2.5 font-medium">
                      🔒 Your medical details are kept 100% private and confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
