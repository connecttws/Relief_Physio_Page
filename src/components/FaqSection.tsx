'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Mujhe doctor ne surgery suggest ki hai, kya yeh treatment mere liye kaam karega?",
      answer: "Dr. Rahul ke clinical data ke anusaar, lagbhag 90% patients jinhe spine disc bulge ya knee osteoarthritis ke liye surgery kahi jati hai, unka condition evidence-based manual decompression aur stabilizer muscle strengthening se completely manage ho jata hai. First assessment session me Dr. Rahul aapki MRI/X-ray aur physical mobility test karke frankly bataenge ki conservative physiotherapy se kitna improvement possible hai."
    },
    {
      question: "Treatment me aamtaur par kitne sessions lagte hain?",
      answer: "Yeh aapke condition ki severity aur duration par depend karta hai. Acute pain (halka stiffness) me 5-8 sessions me relief aa jata hai. Chronic cases (purana sciatica ya advanced knee pain) me 3-6 weeks ka structured protocol lagta hai, jisme Step 1 aur Step 2 me pehle dard kam hota hai, aur Step 3 aur 4 me joints ko permanently strengthen kiya jata hai."
    },
    {
      question: "Kya online video consultation spine ya knee pain ke liye utna hi effective hai?",
      answer: "Haan! Agar aap Jaipur se bahar rehte hain, toh video assessment ke dauraan Dr. Rahul aapki movement analysis, nerve tests aur pain triggers live screen par guide karke evaluate karte hain. Saath hi customised guided home-routines aur ergonomic corrections provide karte hain, jisse hazaron outstation patients pain-free hue hain."
    },
    {
      question: "Pehle kisi physiotherapist ne exercises di thi jisse mera pain badh gaya, aisa kyun?",
      answer: "Generic exercise sheets dekar chhod dena sabse badi galti hoti hai. For example, agar kisi ko flexion-type disc hernia hai aur use aage jhukne wale stretches diye jaaein, toh pain trigger ho jata hai. Dr. Rahul pehle exact root-cause evaluate karte hain aur sirf wahi specific movements allow karte hain jo aapke nerve ya joint ke liye safe hain."
    },
    {
      question: "First consultation assessment me kya hota hai?",
      answer: "Initial consultation lagbhag 40-45 minutes ka hota hai. Isme aapki complete medical history, previous scan reports (agar hain), posture alignment test, range of motion, muscle strength aur nerve tension tests kiye jaate hain. Iske baad aapko clear recovery roadmap aur step-by-step plan samjhaya jata hai."
    },
    {
      question: "Kya mujhe har roz clinic aana padega?",
      answer: "Nahi. Starting phases me weekly 2 se 3 sessions recommend kiye jaate hain manual therapy ke liye. Baaki days ke liye aapko easy 5-minute home routines diye jaate hain taaki aapka time aur travel convenience maintain rahe."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-soft-teal mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Common Questions & Honest Answers
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Aapke mann me uthne wale sawalon ke transparent jawwab Dr. Rahul aur unki team ki taraf se.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-[#FAFBFD]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-[#0B4351] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-teal-50 text-[#0B4351]' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
