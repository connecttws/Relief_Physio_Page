'use client';
import React from 'react';
import { Monitor, Briefcase, User, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

const PERSONAS = [
  {
    icon: Monitor,
    title: 'Desk Job Professionals',
    description:
      'Long sitting hours causing lower back or neck pain that makes it hard to focus or stay productive throughout the day.',
    tag: 'Office / WFH',
    symptoms: ['Lower back ache', 'Neck stiffness', 'Shoulder tension'],
    color: '#00897B',
    bg: '#E0F2F1',
    lightBg: '#F0FDF9',
  },
  {
    icon: Briefcase,
    title: 'Business Owners & Entrepreneurs',
    description:
      'Persistent body pain affecting your focus, decision-making and ability to show up at your absolute best every day.',
    tag: 'High-Performance',
    symptoms: ['Chronic back pain', 'Headaches', 'Postural issues'],
    color: '#7C3AED',
    bg: '#F3EDFF',
    lightBg: '#FAF7FF',
  },
  {
    icon: User,
    title: 'Older Adults (55+)',
    description:
      'Gentle, safe physiotherapy designed for better mobility, independence and quality of life — without overexertion.',
    tag: 'Gentle & Safe',
    symptoms: ['Knee arthritis', 'Stiff joints', 'Balance issues'],
    color: '#0284C7',
    bg: '#E0F2FE',
    lightBg: '#F0F9FF',
  },
  {
    icon: Heart,
    title: 'Working Parents',
    description:
      'Managing home and work despite recurring body pain — finally addressing it with a plan that fits your schedule.',
    tag: 'Flexible Slots',
    symptoms: ['Hip/back pain', 'Fatigue-related pain', 'Muscle tightness'],
    color: '#E05A2B',
    bg: '#FFF3EE',
    lightBg: '#FFF8F5',
  },
];

export default function PersonaCards() {
  return (
    <section
      id="who"
      style={{
        background: '#F7F9FC',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── HERO BANNER with image ── */}
      <div
        style={{
          position: 'relative',
          height: 'clamp(280px, 40vw, 460px)',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <img
          src="/back-pain-hero.jpg"
          alt="Person experiencing back pain"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            display: 'block',
          }}
        />

        {/* Dark overlay gradient — heavier at bottom so cards float above */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(11,31,58,0.30) 0%, rgba(11,31,58,0.60) 60%, rgba(11,31,58,0.92) 100%)',
          }}
        />

        {/* Text on image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
            paddingBottom: '80px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '999px',
              padding: '5px 16px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#A7F3D0',
              marginBottom: '16px',
            }}
          >
            Who This Is For
          </span>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '12px',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            Built for People Like{' '}
            <span
              style={{
                color: '#4DB6AC',
              }}
            >
              You
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.7,
              maxWidth: '500px',
            }}
          >
            Dr. Rahul specialises in helping busy, active people get back to their best — without disrupting their life.
          </p>
        </div>
      </div>

      {/* ── CARDS — overlapping the image bottom ── */}
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 24px',
          paddingBottom: 'clamp(64px, 10vw, 96px)',
          marginTop: '-60px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {PERSONAS.map(persona => {
            const Icon = persona.icon;
            return (
              <div
                key={persona.title}
                style={{
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(11,31,58,0.08)',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(11,31,58,0.13)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(11,31,58,0.08)';
                }}
              >
                {/* Coloured top stripe */}
                <div
                  style={{
                    height: '4px',
                    background: `linear-gradient(90deg, ${persona.color}, ${persona.color}80)`,
                  }}
                />

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                  {/* Icon + Tag row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        background: persona.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color={persona.color} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: persona.color,
                        background: persona.bg,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        border: `1px solid ${persona.color}20`,
                      }}
                    >
                      {persona.tag}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: '#0B1F3A',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {persona.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#64748B',
                        lineHeight: 1.7,
                      }}
                    >
                      {persona.description}
                    </p>
                  </div>

                  {/* Symptom pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid #F1F5F9',
                    }}
                  >
                    {persona.symptoms.map(s => (
                      <span
                        key={s}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          color: '#475569',
                          background: '#F7F9FC',
                          border: '1px solid #E2E8F0',
                          padding: '3px 9px',
                          borderRadius: '999px',
                        }}
                      >
                        <CheckCircle2 size={10} style={{ color: persona.color }} />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>
            Not sure if this applies to you?{' '}
            <strong style={{ color: '#0B1F3A' }}>Book a free consultation</strong> and Dr. Rahul will confirm.
          </p>
          <a
            href="#book"
            id="who-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #00897B, #00695C)',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '14px 32px',
              borderRadius: '999px',
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(0,137,123,0.28)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 14px 36px rgba(0,137,123,0.38)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(0,137,123,0.28)';
            }}
          >
            Book Your Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
