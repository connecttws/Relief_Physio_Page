'use client';
import React from 'react';
import { CheckCircle2, GraduationCap, MapPin, Users } from 'lucide-react';

const CREDENTIALS = [
  { icon: GraduationCap, label: 'Qualified Physiotherapist (BPT/MPT)', color: '#00897B' },
  { icon: Users, label: '10,000+ Patients Treated', color: '#E05A2B' },
  { icon: MapPin, label: 'Clinic: Mayur Vihar, Delhi', color: '#7C3AED' },
];

const SPECIALISATIONS = [
  'Lower Back Pain',
  'Cervical Spondylosis',
  'Knee Osteoarthritis',
  'Neck Pain & Stiffness',
  'Sports Injuries',
  'Post-Surgery Rehabilitation',
  'Shoulder Pain',
  'Sciatica',
];

export default function DoctorBio() {
  return (
    <section
      id="doctor"
      style={{
        background: '#fff',
        paddingBlock: 'clamp(32px, 6vw, 88px)',
        paddingInline: '16px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(24px, 5vw, 52px)',
            alignItems: 'center',
          }}
          className="doctor-grid"
        >
          {/* LEFT: Photo area */}
          <div style={{ position: 'relative' }}>
            {/* Photo card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #E0F2F1 0%, #B2DFDB 100%)',
                borderRadius: '24px',
                height: '380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Placeholder avatar */}
              <div
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00897B, #004D40)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 16px 48px rgba(0,137,123,0.3)',
                }}
              >
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>

              {/* Years badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '12px 16px',
                  boxShadow: '0 4px 20px rgba(11,31,58,0.10)',
                  textAlign: 'center',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: '1.6rem',
                    color: '#00897B',
                    lineHeight: 1,
                  }}
                >
                  12+
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                  Years Exp.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Bio content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>
                Meet Your Physiotherapist
              </p>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
                  color: '#0B1F3A',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                }}
              >
                Dr. Rahul
              </h2>
              <div className="divider" style={{ marginTop: '12px' }} />
            </div>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#475569',
                lineHeight: 1.8,
              }}
            >
              Dr. Rahul is a qualified physiotherapist with over{' '}
              <strong style={{ color: '#1E293B' }}>12 years of clinical experience</strong> treating
              spine, neck and knee pain. He has helped{' '}
              <strong style={{ color: '#1E293B' }}>10,000+ patients</strong> recover from chronic
              musculoskeletal conditions through personalised, evidence-based physiotherapy — both
              in-clinic at Mayur Vihar, Delhi and online across India.
            </p>

            {/* Credential pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CREDENTIALS.map(cred => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      background: '#F7F9FC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: `${cred.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color={cred.color} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1E293B' }}>
                      {cred.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Specialisations */}
            <div>
              <p
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#94A3B8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                Conditions Treated
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {SPECIALISATIONS.map(s => (
                  <span
                    key={s}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: '#F0FDF4',
                      border: '1px solid #BBF7D0',
                      color: '#166534',
                      borderRadius: '999px',
                      padding: '4px 12px',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircle2 size={11} />
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a href="#book" className="btn btn-cta" id="doctor-cta" style={{ alignSelf: 'flex-start' }}>
              Book a Session with Dr. Rahul →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .doctor-grid {
            grid-template-columns: 1fr 1.4fr !important;
          }
        }
      `}</style>
    </section>
  );
}
