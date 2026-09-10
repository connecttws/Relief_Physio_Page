'use client';
import React from 'react';
import { CheckCircle2, MapPin, Laptop } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      id="book"
      style={{
        background: 'linear-gradient(160deg, #00695C 0%, #00897B 50%, #00695C 100%)',
        paddingBlock: 'clamp(72px, 12vw, 110px)',
        paddingInline: '24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 25% 50%, rgba(255,255,255,0.07) 0%, transparent 50%),
                            radial-gradient(circle at 75% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.20)',
            borderRadius: '999px',
            padding: '6px 16px',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#A7F3D0',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          Ready to Get Started?
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.9rem, 5vw, 3rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}
        >
          Book Your Consultation Today
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.80)',
            lineHeight: 1.7,
            maxWidth: '520px',
          }}
        >
          Clinic ya Online — Aapki Choice.{' '}
          <br />
          Get a real diagnosis from a qualified physiotherapist — not a generic advice sheet.
        </p>

        {/* Location options */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { icon: MapPin, label: 'In-Clinic · Mayur Vihar, Delhi', color: '#A7F3D0' },
            { icon: Laptop, label: 'Online · Pan-India', color: '#FDE68A' },
          ].map(opt => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '10px',
                  padding: '10px 16px',
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                }}
              >
                <Icon size={15} style={{ color: opt.color }} />
                {opt.label}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="tel:+91"
          id="final-cta-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            background: '#E05A2B',
            color: '#fff',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: '1.1rem',
            padding: '18px 48px',
            borderRadius: '999px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
            textDecoration: 'none',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 18px 50px rgba(0,0,0,0.30)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.25)';
          }}
        >
          Book Your Consultation →
        </a>

        {/* Reassurance row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {[
            'Real diagnosis',
            'Personalised plan',
            'No surgery-first approach',
            'In-person or online',
          ].map(item => (
            <span
              key={item}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <CheckCircle2 size={12} style={{ color: '#A7F3D0' }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
