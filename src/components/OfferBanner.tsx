'use client';
import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

export default function OfferBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #00695C 0%, #00897B 50%, #00695C 100%)',
        color: '#fff',
        padding: '7px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        position: 'relative',
        fontSize: 'clamp(0.68rem, 2.5vw, 0.82rem)',
        fontWeight: 600,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <MapPin size={13} style={{ flexShrink: 0 }} />
        <span style={{ whiteSpace: 'nowrap' }}>
          In-Clinic in Mayur Vihar, Delhi · Also Available Online, Pan-India
        </span>
      </div>

      <a
        href="#book"
        style={{
          background: 'rgba(255,255,255,0.18)',
          border: '1px solid rgba(255,255,255,0.35)',
          color: '#fff',
          borderRadius: '999px',
          padding: '2px 10px',
          fontSize: '0.72rem',
          fontWeight: 700,
          cursor: 'pointer',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
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
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.7)',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
