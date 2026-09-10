'use client';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0B1F3A',
        color: 'rgba(255,255,255,0.75)',
        paddingBlock: 'clamp(40px, 6vw, 64px)',
        paddingInline: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              Dr. Rahul
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#4DB6AC',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '2px',
              }}
            >
              Physiotherapy
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '300px', color: 'rgba(255,255,255,0.55)' }}>
            Evidence-based physiotherapy for spine, knee and neck pain. In-clinic in Mayur Vihar, Delhi & online Pan-India.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#fff',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: MapPin, text: 'Mayur Vihar, Delhi', href: '#' },
              { icon: Phone, text: '+91 XXXXX XXXXX', href: 'tel:+91' },
              { icon: Mail, text: 'dr.rahul@example.com', href: 'mailto:' },
            ].map(item => {
              const Icon = item.icon;
              return (
                <a
                  key={item.text}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4DB6AC')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  <Icon size={15} style={{ flexShrink: 0, color: '#4DB6AC' }} />
                  {item.text}
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#fff',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: 'About Dr. Rahul', href: '#doctor' },
              { label: 'Treatment Process', href: '#process' },
              { label: 'Patient Reviews', href: '#reviews' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Book a Consultation', href: '#book' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4DB6AC')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: '1120px',
          margin: '36px auto 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
        }}
      >
        {/* Disclaimer */}
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '12px' }}>
          <strong style={{ color: 'rgba(255,255,255,0.50)' }}>Disclaimer:</strong>{' '}
          This content is for educational purposes only and does not guarantee specific results.
          This is not a substitute for in-person medical diagnosis where required.
          Individual results vary based on condition, consistency and medical history.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.30)' }}>
            © 2026 Dr. Rahul Physiotherapy. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.30)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.30)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
