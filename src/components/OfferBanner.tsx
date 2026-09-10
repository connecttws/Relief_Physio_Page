'use client';
import React, { useState } from 'react';
import { X, MapPin, Video } from 'lucide-react';

export default function OfferBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #00695C 0%, #00897B 50%, #00695C 100%)',
        color: '#fff',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        position: 'relative',
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.01em',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9 }}>
        <MapPin size={14} style={{ flexShrink: 0 }} />
        <span>In-Clinic: Mayur Vihar, Delhi</span>
      </span>
      <span style={{ opacity: 0.5 }}>·</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9 }}>
        <Video size={14} style={{ flexShrink: 0 }} />
        <span>Online Consultations — Pan-India</span>
      </span>
      <span style={{ opacity: 0.5, display: 'none' }} className="md-show">·</span>
      <a
        href="#book"
        style={{
          background: 'rgba(255,255,255,0.18)',
          border: '1px solid rgba(255,255,255,0.35)',
          color: '#fff',
          borderRadius: '999px',
          padding: '4px 14px',
          fontSize: '0.78rem',
          fontWeight: 700,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
      >
        Book Now
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.7)',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <X size={15} />
      </button>
    </div>
  );
}
