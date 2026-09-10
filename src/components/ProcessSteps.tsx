'use client';
import React from 'react';
import { Search, Hand, Dumbbell, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    step: 1,
    icon: Search,
    title: 'Diagnosis',
    subtitle: 'Identifying the Real Root Cause',
    description:
      'A thorough assessment that goes beyond a quick look — pinpointing what\'s actually causing the pain, not just treating the symptom.',
    color: '#00897B',
    bg: '#E0F2F1',
  },
  {
    step: 2,
    icon: Hand,
    title: 'Relief',
    subtitle: 'Targeted Manual Therapy',
    description:
      'Hands-on techniques to ease muscle tightness and reduce pain — without medication or unnecessary procedures.',
    color: '#7C3AED',
    bg: '#F3EDFF',
  },
  {
    step: 3,
    icon: Dumbbell,
    title: 'Strengthening',
    subtitle: 'Rebuilding Support',
    description:
      'Guided exercises to strengthen the muscles protecting the affected joint or spine — building a foundation for lasting recovery.',
    color: '#E05A2B',
    bg: '#FFF3EE',
  },
  {
    step: 4,
    icon: TrendingUp,
    title: 'Long-Term Mobility',
    subtitle: 'Flexibility & Prevention',
    description:
      'A maintenance plan so pain doesn\'t return once the active treatment phase ends. You stay mobile — on your terms.',
    color: '#0284C7',
    bg: '#E0F2FE',
  },
];

export default function ProcessSteps() {
  return (
    <section
      id="process"
      style={{
        background: '#fff',
        paddingBlock: 'clamp(64px, 10vw, 96px)',
        paddingInline: '24px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '12px' }}>
            The Treatment Process
          </p>
          <h2 className="section-title">
            4 Steps to Pain-Free Living
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: '14px auto 0', textAlign: 'center' }}
          >
            A structured, evidence-based approach — personalised to your condition and lifestyle.
          </p>
          <div className="divider" style={{ margin: '20px auto 0' }} />
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '24px',
          }}
        >
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === STEPS.length - 1;
            return (
              <div
                key={step.step}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
              >
                {/* Connector line */}
                {!isLast && (
                  <div
                    aria-hidden
                    style={{
                      display: 'none',
                    }}
                    className="step-line"
                  />
                )}

                <div
                  className="card card-hover"
                  style={{
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    flex: 1,
                    borderTop: `3px solid ${step.color}`,
                  }}
                >
                  {/* Step number + icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 900,
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: step.color,
                        background: step.bg,
                        padding: '4px 10px',
                        borderRadius: '999px',
                      }}
                    >
                      Step {step.step}
                    </span>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: step.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} color={step.color} />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: '#0B1F3A',
                        marginBottom: '4px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: step.color,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#64748B',
                      lineHeight: 1.65,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA nudge */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '28px',
            background: '#F7F9FC',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              marginBottom: '16px',
              lineHeight: 1.6,
            }}
          >
            Every treatment plan begins with a proper assessment. No guesswork — just clarity.
          </p>
          <a href="#book" className="btn btn-cta" id="process-cta">
            Book Your Assessment →
          </a>
        </div>
      </div>
    </section>
  );
}
