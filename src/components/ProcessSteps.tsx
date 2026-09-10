'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Search, Hand, Dumbbell, TrendingUp, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: 1,
    icon: Search,
    title: 'Diagnosis',
    subtitle: 'Identifying the Real Root Cause',
    description:
      'A thorough assessment that goes beyond a quick look — pinpointing what\'s actually causing the pain, not just treating the symptom.',
    detail: 'Movement analysis · Posture evaluation · Pain pattern mapping',
    color: '#00897B',
    bg: '#E0F2F1',
    lightBg: '#F0FDF9',
    tag: 'Session 1',
  },
  {
    step: 2,
    icon: Hand,
    title: 'Relief',
    subtitle: 'Targeted Manual Therapy',
    description:
      'Hands-on techniques to ease muscle tightness and reduce pain — without medication or unnecessary procedures.',
    detail: 'Joint mobilisation · Soft tissue release · Trigger point therapy',
    color: '#7C3AED',
    bg: '#F3EDFF',
    lightBg: '#FAF7FF',
    tag: 'Sessions 2–4',
  },
  {
    step: 3,
    icon: Dumbbell,
    title: 'Strengthening',
    subtitle: 'Rebuilding Support',
    description:
      'Guided exercises to strengthen the muscles protecting the affected joint or spine — building a foundation for lasting recovery.',
    detail: 'Progressive loading · Core stability · Functional movement',
    color: '#E05A2B',
    bg: '#FFF3EE',
    lightBg: '#FFF8F5',
    tag: 'Sessions 4–8',
  },
  {
    step: 4,
    icon: TrendingUp,
    title: 'Long-Term Mobility',
    subtitle: 'Flexibility & Prevention',
    description:
      'A maintenance plan so pain doesn\'t return once the active treatment phase ends. You stay mobile — on your terms.',
    detail: 'Maintenance routine · Lifestyle guidance · Relapse prevention',
    color: '#0284C7',
    bg: '#E0F2FE',
    lightBg: '#F0F9FF',
    tag: 'Ongoing',
  },
];

function StepRow({
  step,
  isActive,
  isLast,
}: {
  step: typeof STEPS[0];
  isActive: boolean;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div style={{ display: 'flex', gap: '0', position: 'relative' }}>

      {/* ── LEFT: Big number + spine ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '72px',
          flexShrink: 0,
        }}
      >
        {/* Big number circle */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: isActive
              ? `linear-gradient(135deg, ${step.color}, ${step.color}BB)`
              : '#F1F5F9',
            border: `2px solid ${isActive ? step.color : '#E2E8F0'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: '1.2rem',
            color: isActive ? '#fff' : '#CBD5E1',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: isActive
              ? `0 0 0 6px ${step.color}18, 0 8px 24px ${step.color}28`
              : 'none',
            zIndex: 2,
            position: 'relative',
            flexShrink: 0,
          }}
        >
          {isActive ? <Icon size={22} color="#fff" /> : step.step}
        </div>

        {/* Spine line */}
        {!isLast && (
          <div
            style={{
              width: '2px',
              flex: 1,
              minHeight: '48px',
              marginTop: '6px',
              background: isActive
                ? `linear-gradient(to bottom, ${step.color}90, #E2E8F0)`
                : '#E2E8F0',
              transition: 'background 0.8s ease',
              borderRadius: '2px',
            }}
          />
        )}
      </div>

      {/* ── RIGHT: Content ── */}
      <div
        style={{
          flex: 1,
          paddingLeft: '20px',
          paddingBottom: isLast ? '0' : '40px',
        }}
      >
        {/* Session tag */}
        <div
          style={{
            display: 'inline-block',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isActive ? step.color : '#94A3B8',
            marginBottom: '8px',
            transition: 'color 0.4s',
          }}
        >
          {step.tag}
        </div>

        {/* Main card */}
        <div
          style={{
            background: isActive ? step.lightBg : '#FAFAFA',
            border: `1.5px solid ${isActive ? step.color + '30' : '#F1F5F9'}`,
            borderRadius: '20px',
            padding: 'clamp(18px, 3vw, 28px)',
            transition: 'all 0.8s ease',
            boxShadow: isActive
              ? `0 8px 32px ${step.color}12`
              : '0 1px 3px rgba(11,31,58,0.04)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Active left bar */}
          {isActive && (
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: step.color,
                borderRadius: '20px 0 0 20px',
              }}
            />
          )}

          {/* Header row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '10px',
            }}
          >
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: isActive ? '#0B1F3A' : '#94A3B8',
                  lineHeight: 1.25,
                  marginBottom: '4px',
                  transition: 'color 0.4s',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: isActive ? step.color : '#CBD5E1',
                  transition: 'color 0.4s',
                }}
              >
                {step.subtitle}
              </p>
            </div>

            {/* Icon badge — visible always */}
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: isActive ? step.bg : '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.4s',
              }}
            >
              <Icon size={19} color={isActive ? step.color : '#CBD5E1'} />
            </div>
          </div>

          {/* Description — slides in when active */}
          <div
            style={{
              maxHeight: isActive ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.8s ease',
            }}
          >
            <p
              style={{
                fontSize: '0.88rem',
                color: '#475569',
                lineHeight: 1.75,
                marginBottom: '14px',
              }}
            >
              {step.description}
            </p>

            {/* Technique pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {step.detail.split(' · ').map(t => (
                <span
                  key={t}
                  style={{
                    display: 'inline-block',
                    background: step.bg,
                    color: step.color,
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: `1px solid ${step.color}20`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Collapsed preview */}
          {!isActive && (
            <p
              style={{
                fontSize: '0.82rem',
                color: '#CBD5E1',
                lineHeight: 1.6,
                marginTop: '4px',
              }}
            >
              {step.description.slice(0, 60)}…
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.65, rootMargin: '0px 0px -20% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section
      id="process"
      style={{
        background: '#F7F9FC',
        paddingBlock: 'clamp(64px, 10vw, 100px)',
        paddingInline: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '60px',
          alignItems: 'start',
        }}
        className="process-grid"
      >

        {/* ── LEFT: Sticky header block ── */}
        <div className="process-sticky">
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
            The Treatment Process
          </span>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#0B1F3A',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            4 Steps to{' '}
            <span style={{ color: '#00897B' }}>Pain-Free</span>{' '}
            Living
          </h2>

          <p
            style={{
              fontSize: '0.97rem',
              color: '#64748B',
              lineHeight: 1.75,
              maxWidth: '420px',
              marginBottom: '28px',
            }}
          >
            A structured, evidence-based approach — personalised to your condition and lifestyle. Scroll to walk through each phase.
          </p>

          {/* Progress indicator */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                onClick={() => setActiveStep(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  padding: '6px 10px',
                  borderRadius: '10px',
                  background: activeStep === i ? `${s.color}10` : 'transparent',
                  transition: 'background 0.3s',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: activeStep === i ? s.color : '#E2E8F0',
                    transition: 'background 0.3s, transform 0.3s',
                    transform: activeStep === i ? 'scale(1.4)' : 'scale(1)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: activeStep === i ? 700 : 400,
                    color: activeStep === i ? s.color : '#94A3B8',
                    transition: 'color 0.3s, font-weight 0.3s',
                  }}
                >
                  {s.step}. {s.title}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#book"
            id="process-cta"
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
              marginTop: '28px',
              boxShadow: '0 6px 20px rgba(224,90,43,0.30)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 28px rgba(224,90,43,0.40)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(224,90,43,0.30)';
            }}
          >
            Book Your Assessment <ArrowRight size={16} />
          </a>
        </div>

        {/* ── RIGHT: Scroll timeline ── */}
        <div>
          {STEPS.map((step, i) => (
            <div
              key={step.step}
              ref={el => { stepRefs.current[i] = el; }}
            >
              <StepRow
                step={step}
                isActive={activeStep === i}
                isLast={i === STEPS.length - 1}
              />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr 1.4fr !important;
          }
          .process-sticky {
            position: sticky;
            top: 88px;
          }
        }
      `}</style>
    </section>
  );
}
