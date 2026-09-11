'use client';
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#081629',
        color: 'rgba(255,255,255,0.78)',
        paddingBlock: 'clamp(32px, 6vw, 64px)',
        paddingInline: '20px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(28px, 4vw, 44px)',
        }}
        className="footer-grid"
      >
        {/* Brand Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                flexShrink: 0,
              }}
            >
              <img
                src="/logo.png"
                alt="Relief Physiotherapy Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                Relief Physiotherapy
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#4DB6AC',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                Mayur Vihar Phase 1, Delhi
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.86rem',
              lineHeight: 1.75,
              maxWidth: '360px',
              color: 'rgba(255,255,255,0.65)',
              margin: 0,
            }}
          >
            Evidence-based physiotherapy for spine, knee and neck pain. In-clinic treatment in Mayur Vihar Phase 1, Delhi and online consultations across India.
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
            <a
              href="https://wa.me/919675967575"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Relief Physiotherapy"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25D366',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#25D366';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
                e.currentTarget.style.color = '#25D366';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/reliefphysiotherapy00"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Relief Physiotherapy"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(225, 48, 108, 0.15)',
                border: '1px solid rgba(225, 48, 108, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E1306C',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#E1306C';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(225, 48, 108, 0.15)';
                e.currentTarget.style.color = '#E1306C';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61557264788000#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Relief Physiotherapy"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(24, 119, 242, 0.15)',
                border: '1px solid rgba(24, 119, 242, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1877F2',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1877F2';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(24, 119, 242, 0.15)';
                e.currentTarget.style.color = '#1877F2';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#fff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Clinic &amp; Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Address */}
            <a
              href="https://maps.google.com/?q=B-4,+Acharya+Niketan,+Mayur+Vihar+Phase+1,+Behind+Bansal+Sweets,+Delhi+-+110091"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '0.86rem',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.55,
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4DB6AC')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
            >
              <MapPin size={18} style={{ flexShrink: 0, color: '#4DB6AC', marginTop: '2px' }} />
              <span>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Address:</strong>
                B-4, Acharya Niketan, Mayur Vihar Phase 1, Behind Bansal Sweets, Delhi - 110091
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919675967575"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.86rem',
                color: 'rgba(255,255,255,0.72)',
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4DB6AC')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
            >
              <Phone size={17} style={{ flexShrink: 0, color: '#4DB6AC' }} />
              <span>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '1px' }}>Phone:</strong>
                +91 96759 67575
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:reliefphysiotherapy1@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.86rem',
                color: 'rgba(255,255,255,0.72)',
                transition: 'color 0.2s',
                textDecoration: 'none',
                wordBreak: 'break-all',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4DB6AC')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
            >
              <Mail size={17} style={{ flexShrink: 0, color: '#4DB6AC' }} />
              <span>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '1px' }}>Email:</strong>
                reliefphysiotherapy1@gmail.com
              </span>
            </a>

            {/* Working Hours */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.5,
              }}
            >
              <Clock size={16} style={{ flexShrink: 0, color: '#4DB6AC', marginTop: '2px' }} />
              <span>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '1px' }}>Working Hours:</strong>
                Open 24 Hours
              </span>
            </div>
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
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'About Relief Physiotherapy', href: '#doctor' },
              { label: 'Treatment Process', href: '#process' },
              { label: 'Patient Reviews', href: '#reviews' },
              { label: 'Frequently Asked Questions', href: '#faq' },
              { label: 'Book a Consultation', href: '#book' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.86rem',
                  color: 'rgba(255,255,255,0.65)',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4DB6AC')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
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
          maxWidth: '1140px',
          margin: '36px auto 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
        }}
      >
        {/* Disclaimer */}
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: '12px' }}>
          <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Disclaimer:</strong>{' '}
          This content is for educational purposes and does not substitute for in-person clinical diagnosis where required.
          Individual recovery results vary based on condition severity, consistency, and adherence to prescribed exercises.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', margin: 0 }}>
            © {new Date().getFullYear()} Relief Physiotherapy. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.40)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}
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
            grid-template-columns: 1.8fr 1.6fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

