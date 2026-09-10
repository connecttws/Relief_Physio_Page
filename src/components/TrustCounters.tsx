'use client';
import React from 'react';
import { Users, Award, Layers } from 'lucide-react';

const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Patients Treated',
    sub: 'Successfully across India',
    color: '#00897B',
    bg: '#E0F2F1',
    gradient: 'linear-gradient(135deg,#00897B,#00695C)',
  },
  {
    icon: Award,
    value: '12+ Years',
    label: 'Clinical Experience',
    sub: 'Evidence-based practice',
    color: '#E05A2B',
    bg: '#FFF3EE',
    gradient: 'linear-gradient(135deg,#E05A2B,#C44B22)',
  },
  {
    icon: Layers,
    value: '25+',
    label: 'Conditions Treated',
    sub: 'Spine · Knee · Neck & more',
    color: '#7C3AED',
    bg: '#F3EDFF',
    gradient: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
  },
];

export default function TrustCounters() {
  return (
    <section
      style={{
        background: '#0B1F3A',
        paddingBlock: '40px',
        paddingInline: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '2px',
        }}
      >
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          const isMiddle = i === 1;
          return (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '28px 32px',
                background: isMiddle ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = isMiddle ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)'}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: stat.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 6px 20px ${stat.color}40`,
                }}
              >
                <Icon size={24} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontWeight: 900,
                    fontSize: '1.7rem',
                    color: '#fff',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.80)', marginTop: '2px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)', marginTop: '1px' }}>
                  {stat.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
