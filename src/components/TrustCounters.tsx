'use client';
import React from 'react';
import { Users, Award, Layers } from 'lucide-react';

const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Patients Treated',
    sub: 'Successfully',
    color: '#00897B',
    bg: '#E0F2F1',
  },
  {
    icon: Award,
    value: '12+ Years',
    label: 'Physiotherapy Practice',
    sub: 'Expert experience',
    color: '#E05A2B',
    bg: '#FFF3EE',
  },
  {
    icon: Layers,
    value: '25+',
    label: 'Conditions Treated',
    sub: 'Back, neck, knee & more',
    color: '#7C3AED',
    bg: '#F3EDFF',
  },
];

export default function TrustCounters() {
  return (
    <section
      style={{
        background: '#fff',
        paddingBlock: '48px',
        paddingInline: '24px',
        borderTop: '1px solid #F1F5F9',
        borderBottom: '1px solid #F1F5F9',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}
      >
        {STATS.map(stat => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                background: '#FAFAFA',
                border: '1px solid #F1F5F9',
                borderRadius: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(11,31,58,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: stat.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={24} color={stat.color} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.55rem',
                    color: '#0B1F3A',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1E293B', marginTop: '2px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '1px' }}>
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
