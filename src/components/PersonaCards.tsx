'use client';
import React from 'react';
import { Monitor, Briefcase, User, Heart } from 'lucide-react';

const PERSONAS = [
  {
    icon: Monitor,
    title: 'Desk Job Professionals',
    description:
      'Long sitting hours causing lower back or neck pain that makes it hard to focus or stay productive.',
    tag: 'Office / WFH',
    color: '#00897B',
    bg: '#E0F2F1',
  },
  {
    icon: Briefcase,
    title: 'Business Owners & Entrepreneurs',
    description:
      'Persistent body pain affecting your focus, decision-making and ability to show up at your best.',
    tag: 'High-Performance',
    color: '#7C3AED',
    bg: '#F3EDFF',
  },
  {
    icon: User,
    title: 'Older Adults (55+)',
    description:
      'Gentle, safe techniques designed for better mobility, independence, and quality of life — without pushing too hard.',
    tag: 'Gentle & Safe',
    color: '#0284C7',
    bg: '#E0F2FE',
  },
  {
    icon: Heart,
    title: 'Working Parents',
    description:
      'Managing home and work despite recurring body pain — finally addressing it with a plan that fits your schedule.',
    tag: 'Flexible Slots',
    color: '#E05A2B',
    bg: '#FFF3EE',
  },
];

export default function PersonaCards() {
  return (
    <section
      id="who"
      style={{
        background: '#F7F9FC',
        paddingBlock: 'clamp(32px, 6vw, 88px)',
        paddingInline: '16px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(20px, 4vw, 44px)', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '12px' }}>
            Who This Is For
          </p>
          <h2 className="section-title">
            Built for People Like You
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: '14px auto 0', textAlign: 'center' }}
          >
            Dr. Rahul specialises in helping busy, active people get back to their best — without disrupting their life.
          </p>
          <div className="divider" style={{ margin: '20px auto 0' }} />
        </div>

        {/* Persona Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {PERSONAS.map(persona => {
            const Icon = persona.icon;
            return (
              <div
                key={persona.title}
                className="card card-hover"
                style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: persona.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={24} color={persona.color} />
                </div>
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: persona.bg,
                      color: persona.color,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      marginBottom: '8px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {persona.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: '#0B1F3A',
                      marginBottom: '8px',
                    }}
                  >
                    {persona.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#64748B',
                      lineHeight: 1.65,
                    }}
                  >
                    {persona.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
