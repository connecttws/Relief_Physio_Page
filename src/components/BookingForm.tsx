'use client';

import React, { useState } from 'react';
import { Calendar, Phone, User, Clock, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    painArea: 'Spine & Lower Back',
    duration: '1 - 6 months',
    consultationType: 'In-Clinic (Jaipur)',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F4F8F8] to-[#EBF3F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Panel (Col 1-5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#072B34] to-[#0B4351] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Consultation
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
                  Apna Consultation Slot Confirm Karein
                </h3>

                <p className="text-slate-200 text-sm leading-relaxed mb-6">
                  "Aapko pain ke saath compromise karte rehne ki zarurat nahi hai. Har baar temporary painkillers lene ke bajay ek proper assessment karwayein."
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-slate-200 pt-2 border-t border-teal-800/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-800/80 flex items-center justify-center text-teal-300 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>45-Min Dedicated Clinical Evaluation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-800/80 flex items-center justify-center text-emerald-300 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span>Zero Surgery / Non-Invasive Roadmap</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-800/80 flex items-center justify-center text-amber-300 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>Fast Callback Within 2 Hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-teal-800/60">
                <p className="text-xs text-teal-300 font-semibold mb-1">Clinic Contact Helpline:</p>
                <a href="tel:+919829000000" className="text-lg font-bold text-white hover:text-emerald-300 transition-colors">
                  +91 98290 XXXXX
                </a>
              </div>
            </div>

            {/* Right Form Panel (Col 6-12) */}
            <div className="lg:col-span-7 p-8 sm:p-10 bg-white">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Consultation Request Received!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Dr. Rahul's senior clinic coordinator will contact you on <strong className="text-slate-900">{formData.phone}</strong> shortly to confirm your time slot.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0B4351] bg-teal-50 hover:bg-teal-100 transition-colors"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      Fill Your Details
                    </h4>
                    <p className="text-xs text-slate-700 mb-4">
                      Our specialist will review your pain symptoms before the call.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Two Column Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Primary Pain Area */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Pain Concern *
                      </label>
                      <select
                        value={formData.painArea}
                        onChange={(e) => setFormData({ ...formData, painArea: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                      >
                        <option value="Spine & Lower Back">Spine & Lower Back Pain</option>
                        <option value="Knee Pain">Knee Pain & Osteoarthritis</option>
                        <option value="Neck & Cervical">Neck & Cervical Spondylosis</option>
                        <option value="Shoulder / Frozen Shoulder">Shoulder / Frozen Shoulder</option>
                        <option value="Multiple Joints / Other">Multiple Joints / Other</option>
                      </select>
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Dard Kab Se Hai?
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                      >
                        <option value="Less than 1 month">Less than 1 month</option>
                        <option value="1 - 6 months">1 - 6 months</option>
                        <option value="6 - 12 months">6 - 12 months</option>
                        <option value="More than 1 year">More than 1 year (Chronic)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Mode */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Consultation Mode Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationType: 'In-Clinic (Jaipur)' })}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                          formData.consultationType === 'In-Clinic (Jaipur)'
                            ? 'bg-teal-50 border-[#0B4351] text-[#0B4351] ring-2 ring-[#0B4351]/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        🏥 In-Clinic Visit
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationType: 'Online Video Consult' })}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                          formData.consultationType === 'Online Video Consult'
                            ? 'bg-teal-50 border-[#0B4351] text-[#0B4351] ring-2 ring-[#0B4351]/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        📱 Online Tele-Consult
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="btn-accent w-full py-4 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 group shadow-xl"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Confirm Consultation Slot Today</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-[11px] text-slate-700 mt-2 font-medium">
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
