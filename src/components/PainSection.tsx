'use client';
import React, { useState } from 'react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

const PAIN_POINTS = [
  {
    pain: 'Your back, neck or knee pain is affecting your work, sleep and daily movement.',
    icon: '😔',
  },
  {
    pain: 'You\'ve spent money on medicines, injections or random YouTube exercises — with no lasting relief.',
    icon: '💸',
  },
  {
    pain: 'Generic therapy workshops or masseurs only give temporary relief — the pain always comes back.',
    icon: '🔄',
  },
  {
    pain: 'You\'re unsure what a real, long-term solution even looks like — or where to start.',
    icon: '❓',
  },
];

export default function PainSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="pain"
      style={{
        background: '#F7F9FC',
        paddingBlock: 'clamp(64px, 10vw, 100px)',
        paddingInline: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top border accent */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #E05A2B, #00897B, #E05A2B)',
          backgroundSize: '200% 100%',
        }}
      />

      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '56px',
          alignItems: 'start',
        }}
        className="pain-grid"
      >

        {/* ── LEFT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Eyebrow tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#FFF3EE',
              border: '1px solid rgba(224,90,43,0.25)',
              borderRadius: '999px',
              padding: '6px 16px',
              alignSelf: 'flex-start',
            }}
          >
            <span style={{ fontSize: '14px' }}>🎯</span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#E05A2B',
              }}
            >
              Do You Recognise This?
            </span>
          </div>

          {/* Main headline */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.85rem, 4.5vw, 3rem)',
              color: '#0B1F3A',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Still Living in{' '}
            <span
              style={{
                position: 'relative',
                display: 'inline-block',
                color: '#E05A2B',
              }}
            >
              Pain
              {/* Underline squiggle */}
              <svg
                viewBox="0 0 120 12"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '100%',
                  height: '10px',
                }}
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q30,0 60,6 Q90,12 120,6"
                  fill="none"
                  stroke="#E05A2B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
            {' '}Every Day?
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#64748B',
              lineHeight: 1.75,
              maxWidth: '460px',
            }}
          >
            If any of these feel familiar, you're not alone. Most people struggle for months — or years — without real answers. There is a better way.
          </p>

          {/* Visual stat card */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0B1F3A 0%, #164068 100%)',
              borderRadius: '20px',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '420px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow accent */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'rgba(0,137,123,0.20)',
                filter: 'blur(30px)',
              }}
            />
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: '2.8rem',
                color: '#fff',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              8 out of 10
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.70)', lineHeight: 1.6 }}>
              people with chronic back, knee or neck pain are treating the{' '}
              <em style={{ color: '#F59E0B', fontStyle: 'normal', fontWeight: 600 }}>symptom</em>
              , not the root cause — which is why the pain keeps returning.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <CheckCircle2 size={14} style={{ color: '#4DB6AC', flexShrink: 0 }} />
              <span style={{ fontSize: '0.8rem', color: '#4DB6AC', fontWeight: 600 }}>
                Physiotherapy addresses the actual root cause.
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Pain Point Cards ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#94A3B8',
              marginBottom: '4px',
            }}
          >
            Common Frustrations — Check what applies to you:
          </p>

          {/* 2×2 grid wrapper */}
          <div className="pain-cards-grid">

          {PAIN_POINTS.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                onClick={() => setActiveIndex(isActive ? null : i)}
                style={{
                  background: isActive ? '#FFF3EE' : '#fff',
                  border: `1.5px solid ${isActive ? '#E05A2B' : '#E2E8F0'}`,
                  borderRadius: '18px',
                  padding: '20px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive
                    ? '0 4px 20px rgba(224,90,43,0.12)'
                    : '0 1px 4px rgba(11,31,58,0.04)',
                  minHeight: '160px',
                  textAlign: 'center',
                  position: 'relative',
                }}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setActiveIndex(isActive ? null : i)}
              >
                {/* Checkbox — top-right corner */}
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  {isActive ? (
                    <XCircle size={16} style={{ color: '#E05A2B' }} />
                  ) : (
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '5px',
                        border: '2px solid #CBD5E1',
                        background: '#fff',
                      }}
                    />
                  )}
                </div>

                {/* Emoji icon */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: isActive ? 'rgba(224,90,43,0.10)' : '#F7F9FC',
                    border: `1px solid ${isActive ? 'rgba(224,90,43,0.20)' : '#E2E8F0'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    transition: 'all 0.25s ease',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: isActive ? '#C44B22' : '#475569',
                    lineHeight: 1.55,
                    fontWeight: isActive ? 600 : 400,
                    transition: 'color 0.2s',
                  }}
                >
                  {item.pain}
                </p>
              </div>
            );
          })}

          </div> {/* end pain-cards-grid */}

          {/* Closing CTA strip */}
          <div
            style={{
              marginTop: '8px',
              background: 'linear-gradient(135deg, #00897B 0%, #00695C 100%)',
              borderRadius: '16px',
              padding: '22px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#fff',
                  lineHeight: 1.4,
                  marginBottom: '4px',
                }}
              >
                Real physiotherapy can end this cycle.
              </p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.70)', lineHeight: 1.5 }}>
                In-clinic or online — built around you.
              </p>
            </div>
            <a
              href="#book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                background: '#E05A2B',
                color: '#fff',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '0.88rem',
                padding: '11px 22px',
                borderRadius: '999px',
                textDecoration: 'none',
                flexShrink: 0,
                boxShadow: '0 6px 20px rgba(0,0,0,0.20)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.20)';
              }}
            >
              Start Your Recovery <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 860px) {
          .pain-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        /* Pain cards: 2×2 grid on all screen sizes */
        .pain-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* On desktop, switch back to single column (cards have more room) */
        @media (min-width: 860px) {
          .pain-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
