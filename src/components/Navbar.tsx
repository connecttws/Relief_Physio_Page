'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#doctor' },
  { label: 'Treatment', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
    borderBottom: `1px solid ${scrolled ? '#E2E8F0' : '#F1F5F9'}`,
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 1px 20px rgba(11,31,58,0.07)' : 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <nav style={navStyle} role="navigation" aria-label="Main navigation">
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: '1.15rem',
              color: '#0B1F3A',
              letterSpacing: '-0.03em',
            }}
          >
            Dr. Rahul
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '0.65rem',
              color: '#00897B',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Physiotherapy
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  color: '#475569',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  transition: 'color 0.2s, background 0.2s',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#00897B';
                  e.currentTarget.style.background = '#E0F2F1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <a
            href="tel:+91"
            aria-label="Call Dr. Rahul"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1.5px solid #E2E8F0',
              color: '#475569',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#00897B';
              e.currentTarget.style.color = '#00897B';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.color = '#475569';
            }}
          >
            <Phone size={15} />
          </a>
          <a
            href="#book"
            className="btn btn-cta desktop-nav-btn"
            style={{ padding: '8px 18px', fontSize: '0.82rem' }}
          >
            Book Consultation
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#0B1F3A',
              padding: '4px',
              flexShrink: 0,
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '68px',
            left: 0,
            right: 0,
            background: '#fff',
            borderBottom: '1px solid #E2E8F0',
            padding: '12px 24px 20px',
            boxShadow: '0 8px 24px rgba(11,31,58,0.10)',
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontWeight: 500,
                fontSize: '1rem',
                color: '#1E293B',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="btn btn-cta"
            style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
          >
            Book Consultation
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 540px) {
          .desktop-nav-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
