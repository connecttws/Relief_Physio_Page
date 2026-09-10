'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Can physiotherapy guarantee complete pain relief?',
    a: 'Physiotherapy addresses the root cause through assessment, manual therapy and targeted exercise. Most patients see significant improvement, but results depend on condition severity, consistency and individual health factors. Dr. Rahul will give you an honest assessment of what to expect from your first session.',
  },
  {
    q: 'What conditions does Dr. Rahul treat?',
    a: 'Lower back pain, cervical spondylosis, knee osteoarthritis, neck pain & stiffness, sports injuries, post-surgery rehabilitation, sciatica, shoulder pain, and more. Book a consultation to confirm if your specific condition is covered.',
  },
  {
    q: 'How is the online consultation different from an in-clinic visit?',
    a: 'Online consultations are done over video call — Dr. Rahul assesses your movement and pain pattern live and builds a home-based treatment plan. In-clinic visits add hands-on manual therapy where needed. Both are equally thorough in terms of diagnosis.',
  },
  {
    q: 'Do I need any equipment for an online session?',
    a: 'A smartphone or laptop with a stable internet connection is enough. A yoga mat or flat open space and comfortable clothing are recommended. No special equipment is required.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Click any "Book Your Consultation" button on this page, choose clinic or online, and confirm your slot. You\'ll receive a confirmation via WhatsApp.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This varies depending on your condition and how long you have had the problem. Most patients see meaningful improvement within 4–8 sessions. Dr. Rahul will give you a clearer estimate after your initial assessment.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: '#fff',
        paddingBlock: 'clamp(32px, 6vw, 88px)',
        paddingInline: '16px',
      }}
    >
      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 'clamp(20px, 4vw, 44px)', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '12px' }}>
            FAQ
          </p>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <div className="divider" style={{ margin: '16px auto 0' }} />
        </div>

        {/* Accordion */}
        <div
          style={{
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: i < FAQS.length - 1 ? '1px solid #F1F5F9' : 'none',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 24px',
                    background: isOpen ? '#F0FDF4' : '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.2s',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: isOpen ? '#00697C' : '#1E293B',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      flexShrink: 0,
                      color: isOpen ? '#00897B' : '#94A3B8',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, color 0.2s',
                    }}
                  />
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      background: '#F0FDF4',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#475569',
                        lineHeight: 1.75,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div
          style={{
            marginTop: '32px',
            textAlign: 'center',
            padding: '24px',
            background: '#F7F9FC',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
          }}
        >
          <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '12px' }}>
            Still have questions? Book a consultation and ask Dr. Rahul directly.
          </p>
          <a href="#book" className="btn btn-outline" id="faq-cta" style={{ fontSize: '0.88rem' }}>
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
