'use client';
import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

const PAIN_POINTS = [
  'Your pain is affecting work, sleep, and daily movement.',
  'You\'ve spent money on medicines, injections, or random YouTube exercises — with no lasting relief.',
  'Generic therapy workshops or masseurs give only temporary relief.',
  'You\'re unsure what a real, long-term solution actually looks like.',
];

export default function PainSection() {
  return (
    <section
      id="pain"
      style={{
        background: 'linear-gradient(160deg, #0B1F3A 0%, #0D2B4A 60%, #113355 100%)',
        paddingBlock: 'clamp(64px, 10vw, 96px)',
        paddingInline: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0,137,123,0.12) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(224,90,43,0.08) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div
            className="badge"
            style={{
              background: 'rgba(0,137,123,0.15)',
              color: '#4DB6AC',
              border: '1px solid rgba(77,182,172,0.25)',
              marginBottom: '16px',
            }}
          >
            <AlertCircle size={12} />
            Do You Recognise This?
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              maxWidth: '640px',
            }}
          >
            Living with Spine, Knee or Neck Pain?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1rem',
              marginTop: '12px',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            If any of these feel familiar, you're not alone — and there is a better way.
          </p>
        </div>

        {/* Pain points grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,137,123,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)';
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(224,90,43,0.15)',
                  border: '1px solid rgba(224,90,43,0.30)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                  color: '#F87171',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {i + 1}
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line + CTA */}
        <div
          style={{
            background: 'rgba(0,137,123,0.12)',
            border: '1px solid rgba(0,137,123,0.25)',
            borderRadius: '20px',
            padding: '32px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              style={{
                color: '#fff',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                lineHeight: 1.4,
                marginBottom: '6px',
              }}
            >
              Whether at home or in-clinic, real physiotherapy can help.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.5 }}>
              Manage your pain effectively with a plan built around <em>you</em>.
            </p>
          </div>
          <a
            href="#book"
            className="btn"
            style={{
              background: '#E05A2B',
              color: '#fff',
              padding: '14px 28px',
              fontSize: '0.95rem',
              flexShrink: 0,
              boxShadow: '0 8px 28px rgba(224,90,43,0.35)',
              borderRadius: '999px',
            }}
          >
            Start Your Recovery <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
