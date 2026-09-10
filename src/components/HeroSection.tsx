'use client';
import React from 'react';
import { CheckCircle2, MapPin, Laptop } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(160deg, #F7F9FC 0%, #E8F5E9 40%, #F7F9FC 100%)',
        paddingBlock: 'clamp(60px, 10vw, 100px)',
        paddingInline: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,137,123,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,90,43,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* ── LEFT: Copy ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Eyebrow */}
          <div className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00897B', display: 'inline-block', flexShrink: 0 }} />
            For Busy Professionals · Parents · Older Adults with Spine, Knee or Neck Pain
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              color: '#0B1F3A',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Overcome Spine, Knee &amp; Neck Pain —{' '}
            <span
              style={{
                color: '#00897B',
                background: 'linear-gradient(135deg, #00897B, #004D40)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              With Real Physiotherapy
            </span>
            , Not Guesswork
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.75,
              maxWidth: '580px',
              fontWeight: 400,
            }}
          >
            Get a personalised assessment from{' '}
            <strong style={{ color: '#1E293B', fontWeight: 600 }}>Dr. Rahul</strong>,
            a qualified physiotherapist —{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
              <MapPin size={14} style={{ color: '#00897B', flexShrink: 0 }} />
              In-clinic in Mayur Vihar, Delhi
            </span>{' '}
            or{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
              <Laptop size={14} style={{ color: '#00897B', flexShrink: 0 }} />
              online, Pan-India
            </span>
            .
          </p>

          {/* Google Rating Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#fff',
              border: '1px solid #FDE68A',
              borderRadius: '12px',
              padding: '10px 16px',
              alignSelf: 'flex-start',
              boxShadow: '0 2px 12px rgba(245,158,11,0.12)',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? '#F59E0B' : '#D1D5DB'}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1E293B', lineHeight: 1.2 }}>
                4.0 · 1,430+ Reviews
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 500 }}>
                on Google
              </div>
            </div>
          </div>

          {/* CTA Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#book" className="btn btn-cta btn-cta-lg" id="hero-cta-primary">
                Book Your Consultation →
              </a>
              <a href="#process" className="btn btn-outline" id="hero-cta-secondary">
                How It Works
              </a>
            </div>

            {/* Reassurance chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '4px',
              }}
            >
              {[
                'Real diagnosis',
                'Personalised treatment plan',
                'No surgery-first approach',
              ].map(item => (
                <span
                  key={item}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: '#00695C',
                    background: '#E0F2F1',
                    borderRadius: '999px',
                    padding: '4px 12px',
                  }}
                >
                  <CheckCircle2 size={12} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Visual Card ── */}
        <div style={{ position: 'relative' }} className="hero-visual">
          {/* Main card */}
          <div
            style={{
              background: '#fff',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 60px rgba(11,31,58,0.10)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Image area */}
            <div
              style={{
                height: '320px',
                background: 'linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Placeholder visual for doctor image */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00897B, #004D40)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 40px rgba(0,137,123,0.25)',
                }}
              >
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>

              {/* Floating badge top-right */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '8px 12px',
                  boxShadow: '0 4px 16px rgba(11,31,58,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10B981',
                    display: 'block',
                    boxShadow: '0 0 0 3px rgba(16,185,129,0.2)',
                  }}
                />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1E293B' }}>
                  Accepting Patients
                </span>
              </div>

              {/* Non-surgical badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: '#FEF3C7',
                  border: '1px solid #FDE68A',
                  borderRadius: '10px',
                  padding: '6px 12px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#92400E',
                  letterSpacing: '0.03em',
                }}
              >
                🛡 Non-Surgical Focus
              </div>
            </div>

            {/* Card info strip */}
            <div
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #F1F5F9',
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0B1F3A' }}>
                  Dr. Rahul
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>
                  Physiotherapist · 12+ Years Experience
                </div>
              </div>
              <a
                href="#book"
                style={{
                  background: '#00897B',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '8px 16px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#00695C')}
                onMouseLeave={e => (e.currentTarget.style.background = '#00897B')}
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Floating stat pill */}
          <div
            style={{
              position: 'absolute',
              bottom: '-16px',
              left: '-16px',
              background: '#fff',
              borderRadius: '16px',
              padding: '12px 18px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 28px rgba(11,31,58,0.10)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
            className="floating-stat"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00897B, #004D40)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 800,
              }}
            >
              10K
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0B1F3A', lineHeight: 1.2 }}>
                Patients Treated
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Successfully</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .floating-stat { display: none; }
        }
      `}</style>
    </section>
  );
}
