'use client';
import React from 'react';
import { ClipboardList, Map } from 'lucide-react';

const DELIVERABLES = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'A Personalised Pain Assessment',
    description:
      'Real diagnosis of the root cause — not a generic exercise sheet. Dr. Rahul evaluates your specific condition through a structured clinical assessment.',
    highlight: 'Root cause, not symptoms',
    color: '#00897B',
    bg: '#E0F2F1',
  },
  {
    number: '02',
    icon: Map,
    title: 'A Physiotherapist-Led Treatment Plan',
    description:
      'Built around your specific condition, lifestyle and recovery goals — reviewed and adjusted as you progress. Nothing cookie-cutter.',
    highlight: 'Adjusted as you improve',
    color: '#E05A2B',
    bg: '#FFF3EE',
  },
];

export default function ConsultationSection() {
  return (
    <section
      id="consultation"
      style={{
        background: '#F7F9FC',
        paddingBlock: 'clamp(32px, 6vw, 88px)',
        paddingInline: '16px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(20px, 4vw, 44px)', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '12px' }}>
            What You Get
          </p>
          <h2 className="section-title">
            What You'll Get in Your Consultation
          </h2>
          <div className="divider" style={{ margin: '16px auto 0' }} />
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {DELIVERABLES.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="card card-hover"
                style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Number + Icon Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 900,
                      fontSize: '3rem',
                      color: `${item.color}18`,
                      letterSpacing: '-0.05em',
                      lineHeight: 1,
                    }}
                  >
                    {item.number}
                  </span>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: item.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} color={item.color} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#0B1F3A',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#64748B',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Highlight pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: item.bg,
                    color: item.color,
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    alignSelf: 'flex-start',
                    border: `1px solid ${item.color}22`,
                  }}
                >
                  ✓ {item.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
