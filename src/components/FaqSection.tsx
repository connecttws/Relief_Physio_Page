import React from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const faqs = [
    {
      q: 'Can physiotherapy guarantee complete pain relief?',
      a: 'Physiotherapy addresses the root cause through assessment, manual therapy and targeted exercise. Most patients see significant improvement, but results depend on condition severity, consistency and individual health factors.',
    },
    {
      q: 'What conditions does Dr Rahul treat?',
      a: 'Dr Rahul treats lower back pain, cervical spondylosis, knee osteoarthritis, sciatica, disc bulge/herniation, sports injuries, frozen shoulder, postural stiffness, and post-surgery rehabilitation.',
    },
    {
      q: 'How is the online consultation different from an in-clinic visit?',
      a: 'Online consultations are done over video call — Dr Rahul assesses your movement and pain pattern live and builds a home-based treatment plan. In-clinic visits add hands-on manual therapy where needed.',
    },
    {
      q: 'Do I need any equipment for an online session?',
      a: 'A smartphone or laptop with a stable internet connection is enough. A yoga mat or flat open space and comfortable clothing are recommended.',
    },
    {
      q: 'How do I book an appointment?',
      a: "Click any 'Book Your Consultation' button on this page, choose clinic or online, and confirm your slot. You'll receive a confirmation by WhatsApp/Email.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-shimmer inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 mb-3 border border-emerald-300/50">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Find answers to common questions to help you get the most out of your consultation with Dr. Rahul.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group glass-card rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-300 [&[open]]:shadow-lg [&[open]]:border-emerald-400"
              {...(idx === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 text-slate-950 font-bold text-base sm:text-lg cursor-pointer select-none list-none group-hover:text-emerald-700 transition-colors">
                <span className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black shrink-0 border border-emerald-200">
                    Q{idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 group-open:text-emerald-600 transition-transform duration-300 shrink-0 ml-3" />
              </summary>

              <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
