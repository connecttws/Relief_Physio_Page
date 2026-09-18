'use client';
import React from 'react';
import { CheckCircle2, MapPin, Laptop, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      id="final-contact"
      style={{
        background: 'linear-gradient(160deg, #00695C 0%, #00897B 50%, #00695C 100%)',
        paddingBlock: 'clamp(36px, 8vw, 100px)',
        paddingInline: '16px',
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
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(0,0,0,0.12) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(20px, 3.5vw, 32px)',
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.85)',
            background: 'rgba(255,255,255,0.12)',
            padding: '6px 16px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          Relief Physiotherapy · Take the First Step
        </span>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.7rem, 5.5vw, 2.75rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Your Recovery Starts With{' '}
          <span
            style={{
              color: '#FDE68A',
              display: 'inline-block',
            }}
          >
            One Assessment
          </span>
        </h2>

        {/* Supporting copy */}
        <p
          style={{
            fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.7,
            margin: 0,
            maxWidth: '540px',
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
            { icon: MapPin, label: 'In-Clinic · Mayur Vihar Phase 1, Delhi', color: '#A7F3D0' },
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

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
          }}
        >
          <a
            href="tel:+919675967575"
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
              fontSize: '1.05rem',
              padding: '16px 36px',
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
            <Phone size={18} /> Call +91 96759 67575
          </a>

          <a
            href="https://wa.me/919675967575?text=Hello%20Relief%20Physiotherapy,%20I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#25D366',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              padding: '16px 32px',
              borderRadius: '999px',
              boxShadow: '0 8px 24px rgba(37,211,102,0.30)',
              textDecoration: 'none',
              transition: 'transform 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            WhatsApp Booking
          </a>
        </div>

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
