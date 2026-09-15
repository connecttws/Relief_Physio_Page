'use client';
import React from 'react';
import { CheckCircle2, MapPin, Laptop } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(160deg, #F7F9FC 0%, #E8F5E9 40%, #F7F9FC 100%)',
        paddingBlock: 'clamp(28px, 6vw, 90px)',
        paddingInline: '16px',
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
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <div className="badge badge-teal" style={{ alignSelf: 'center', fontSize: 'clamp(0.64rem, 2.2vw, 0.72rem)', padding: '4px 12px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00897B', display: 'inline-block', flexShrink: 0 }} />
          For Busy Professionals · Parents · Older Adults with Spine, Knee or Neck Pain
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 4.2vw, 3rem)',
            color: '#0B1F3A',
            letterSpacing: '-0.025em',
            lineHeight: 1.22,
            maxWidth: '780px',
            textAlign: 'center',
          }}
        >
          Overcome Spine, Knee &amp; Neck Pain
          <span style={{ display: 'block', marginTop: '6px' }}>
            With{' '}
            <span
              style={{
                color: '#00897B',
                background: 'linear-gradient(135deg, #00897B, #004D40)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Physiotherapy
            </span>
            , Not Guesswork
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(0.84rem, 1.9vw, 0.96rem)',
            color: '#475569',
            lineHeight: 1.6,
            maxWidth: '640px',
            fontWeight: 400,
            marginInline: 'auto',
          }}
        >
          Get a personalised assessment at{' '}
          <strong style={{ color: '#1E293B', fontWeight: 600 }}>Relief Physiotherapy</strong>{' '}
          with Dr. Rahul —{' '}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
            <MapPin size={14} style={{ color: '#00897B', flexShrink: 0 }} />
            In-clinic at Mayur Vihar Phase 1, Delhi
          </span>{' '}
          or{' '}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
            <Laptop size={14} style={{ color: '#00897B', flexShrink: 0 }} />
            online, Pan-India
          </span>
          .
        </p>

        {/* VSL Video Frame */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 16px 45px rgba(11,31,58,0.14)',
            aspectRatio: '16/9',
            background: '#0B1F3A',
            border: '3px solid #FFFFFF',
            width: '100%',
            maxWidth: '780px',
            marginBlock: '6px',
          }}
          className="vsl-video-frame"
        >
          <iframe
            src="https://fast.wistia.net/embed/iframe/87lbd2qoja?seo=false&videoFoam=true"
            title="Relief Physiotherapy Overview Video"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </div>

        {/* CTA Block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%', marginTop: '4px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
              justifyContent: 'center',
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
    </section>
  );
}
