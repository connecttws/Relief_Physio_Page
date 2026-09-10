'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ClipboardList, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    label: 'Assessment',
    title: 'A Personalised Pain Assessment',
    description:
      'Real diagnosis of the root cause — not a generic exercise sheet. Dr. Rahul evaluates your condition, movement patterns and history through a structured clinical assessment.',
    bullets: [
      'Full movement & posture evaluation',
      'Root cause identified, not just symptoms',
      'Clear explanation of your condition',
    ],
    highlight: 'Root cause diagnosis',
    color: '#00897B',
    bg: '#E0F2F1',
    lightBg: '#F0FDF4',
  },
  {
    number: '02',
    icon: MapPin,
    label: 'Treatment Plan',
    title: 'A Physiotherapist-Led Treatment Plan',
    description:
      'Built entirely around your specific condition, lifestyle and recovery goals. Not cookie-cutter — adjusted as you progress through each phase of recovery.',
    bullets: [
      'Custom plan for your body & lifestyle',
      'Reviewed and adjusted as you improve',
      'In-clinic or home-based exercises',
    ],
    highlight: 'Adjusted as you improve',
    color: '#E05A2B',
    bg: '#FFF3EE',
    lightBg: '#FFF8F5',
  },
];

function StepCard({
  step,
  index,
  isActive,
  isLast,
}: {
  step: typeof STEPS[0];
  index: number;
  isActive: boolean;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div
      style={{
        display: 'flex',
        gap: '0',
        position: 'relative',
      }}
    >
      {/* ── Left: Timeline spine ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: '64px',
        }}
      >
        {/* Step circle */}
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: isActive
              ? `linear-gradient(135deg, ${step.color}, ${step.color}CC)`
              : '#fff',
            border: `2.5px solid ${isActive ? step.color : '#E2E8F0'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: isActive
              ? `0 0 0 6px ${step.color}18, 0 8px 24px ${step.color}30`
              : '0 2px 8px rgba(11,31,58,0.06)',
            zIndex: 2,
            position: 'relative',
          }}
        >
          <Icon
            size={22}
            color={isActive ? '#fff' : step.color}
            style={{ transition: 'color 0.8s' }}
          />
        </div>

        {/* Connecting line (not shown after last item) */}
        {!isLast && (
          <div
            style={{
              width: '2px',
              flex: 1,
              minHeight: '60px',
              marginTop: '4px',
              background: isActive
                ? `linear-gradient(to bottom, ${step.color}, #E2E8F0)`
                : '#E2E8F0',
              borderRadius: '2px',
              transition: 'background 0.8s ease',
            }}
          />
        )}
      </div>

      {/* ── Right: Content card ── */}
      <div
        style={{
          flex: 1,
          paddingLeft: '20px',
          paddingBottom: isLast ? '0' : '48px',
        }}
      >
        {/* Step label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: isActive ? step.color : '#94A3B8',
              transition: 'color 0.8s',
            }}
          >
            Step {index + 1} · {step.label}
          </span>
        </div>

        {/* Card */}
        <div
          style={{
            background: isActive ? step.lightBg : '#fff',
            border: `1.5px solid ${isActive ? step.color + '35' : '#E2E8F0'}`,
            borderRadius: '20px',
            padding: 'clamp(20px, 4vw, 32px)',
            boxShadow: isActive
              ? `0 8px 32px ${step.color}14`
              : '0 1px 4px rgba(11,31,58,0.05)',
            transition: 'all 0.8s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Active accent bar */}
          {isActive && (
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: `linear-gradient(to bottom, ${step.color}, ${step.color}60)`,
                borderRadius: '20px 0 0 20px',
              }}
            />
          )}

          {/* Number watermark */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '20px',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: '4rem',
              color: isActive ? `${step.color}10` : 'rgba(0,0,0,0.03)',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              userSelect: 'none',
              transition: 'color 0.8s',
            }}
          >
            {step.number}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: isActive ? '#0B1F3A' : '#475569',
              marginBottom: '10px',
              lineHeight: 1.3,
              transition: 'color 0.8s',
              paddingRight: '60px',
            }}
          >
            {step.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '0.9rem',
              color: isActive ? '#475569' : '#94A3B8',
              lineHeight: 1.75,
              marginBottom: '16px',
              transition: 'color 0.8s',
            }}
          >
            {step.description}
          </p>

          {/* Bullet points — shown when active */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              maxHeight: isActive ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.8s ease',
            }}
          >
            {step.bullets.map(b => (
              <div
                key={b}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <CheckCircle2 size={14} style={{ color: step.color, flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 500 }}>
                  {b}
                </span>
              </div>
            ))}
          </div>

          {/* Highlight pill */}
          {isActive && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: step.bg,
                color: step.color,
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginTop: '16px',
                border: `1px solid ${step.color}25`,
              }}
            >
              ✓ {step.highlight}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConsultationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(i);
          }
        },
        {
          threshold: 0.65,
          rootMargin: '0px 0px -20% 0px',
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section
      id="consultation"
      style={{
        background: '#fff',
        paddingBlock: 'clamp(64px, 10vw, 100px)',
        paddingInline: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#E0F2F1',
              color: '#00695C',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(0,137,123,0.20)',
              marginBottom: '16px',
            }}
          >
            What You Get
          </span>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
              color: '#0B1F3A',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            What You'll Get in Your{' '}
            <span style={{ color: '#00897B' }}>Consultation</span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#64748B',
              lineHeight: 1.7,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Scroll down to walk through each step of what happens in your first session with Dr. Rahul.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div>
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={el => { stepRefs.current[i] = el; }}
            >
              <StepCard
                step={step}
                index={i}
                isActive={activeStep === i}
                isLast={i === STEPS.length - 1}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            marginTop: '48px',
            background: 'linear-gradient(135deg, #0B1F3A, #164068)',
            borderRadius: '20px',
            padding: 'clamp(24px, 4vw, 36px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#fff',
                lineHeight: 1.4,
                marginBottom: '5px',
              }}
            >
              Every plan starts with a proper assessment.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
              No guesswork. Just clarity on what's causing your pain.
            </p>
          </div>
          <a
            href="#book"
            id="consultation-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#E05A2B',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.92rem',
              padding: '13px 26px',
              borderRadius: '999px',
              textDecoration: 'none',
              flexShrink: 0,
              boxShadow: '0 6px 20px rgba(224,90,43,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 28px rgba(224,90,43,0.45)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(224,90,43,0.35)';
            }}
          >
            Book Your Assessment <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
