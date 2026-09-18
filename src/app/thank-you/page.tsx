'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'PageView');
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'Lead');
    }
  }, []);

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 60%, #F7F9FC 100%)',
      }}
    >
      {/* Meta Pixel Lead Event Script */}
      <Script
        id="meta-pixel-thank-you-lead"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window.fbq === 'function') {
              fbq('track', 'PageView');
              fbq('track', 'Lead');
            }
          `,
        }}
      />
      {/* Header Bar */}
      <header
        style={{
          borderBottom: '1px solid #E2E8F0',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '16px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <img
              src="/logo.png"
              alt="Relief Physiotherapy"
              style={{ height: '36px', width: 'auto' }}
            />
            <div>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#0B1F3A',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                Relief Physiotherapy
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  color: '#00897B',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Mayur Vihar Phase 1, Delhi
              </span>
            </div>
          </Link>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#00897B',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '6px 14px',
              borderRadius: '8px',
              background: '#E0F2F1',
            }}
          >
            <ArrowLeft size={16} /> Back to Website
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 16px',
        }}
      >
        <div
          style={{
            maxWidth: '640px',
            width: '100%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '24px',
            boxShadow: '0 16px 48px rgba(11, 31, 58, 0.08)',
            padding: 'clamp(28px, 6vw, 48px)',
            textAlign: 'center',
          }}
        >
          {/* Animated Success Badge */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#E0F2F1',
              border: '3px solid #00897B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 0 0 10px rgba(0, 137, 123, 0.12)',
            }}
          >
            <CheckCircle2 size={44} style={{ color: '#00897B' }} />
          </div>

          <span
            style={{
              display: 'inline-block',
              background: '#E0F2F1',
              color: '#00695C',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: '999px',
              marginBottom: '12px',
            }}
          >
            Consultation Request Received
          </span>

          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)',
              color: '#0B1F3A',
              marginBottom: '14px',
              lineHeight: 1.2,
            }}
          >
            Thank You! We Have Received Your Details
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}
          >
            Dr. Rahul and our clinical team have received your pain assessment responses. We will review your symptoms and call you at your preferred time to discuss your personalized recovery roadmap.
          </p>

          {/* Next Steps Box */}
          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'left',
              marginBottom: '28px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: '1rem',
                color: '#0B1F3A',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Clock size={18} style={{ color: '#00897B' }} /> What Happens Next?
            </h2>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.88rem',
                color: '#334155',
              }}
            >
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00897B', fontWeight: 700 }}>1.</span>
                <span>Our physiotherapist reviews your specific symptoms and pain history.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00897B', fontWeight: 700 }}>2.</span>
                <span>We call you during your selected time slot for a free consultation overview.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00897B', fontWeight: 700 }}>3.</span>
                <span>You can choose between an in-clinic visit in Mayur Vihar, Delhi or an online session.</span>
              </li>
            </ul>
          </div>

          {/* Need Urgent Help? */}
          <div style={{ marginBottom: '24px' }}>
            <p
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#1E293B',
                marginBottom: '12px',
              }}
            >
              Need immediate assistance or want to confirm right now?
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              <a
                href="tel:+919675967575"
                className="btn btn-cta"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.92rem',
                }}
              >
                <Phone size={16} /> Call +91 96759 67575
              </a>

              <a
                href="https://wa.me/919675967575?text=Hello%20Relief%20Physiotherapy,%20I%20just%20submitted%20my%20consultation%20form"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#fff',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid #F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              fontSize: '0.8rem',
              color: '#94A3B8',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={14} style={{ color: '#00897B' }} /> Strict Privacy
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} style={{ color: '#00897B' }} /> Mayur Vihar Ph 1, Delhi
            </span>
          </div>
        </div>
      </main>

      <footer
        style={{
          borderTop: '1px solid #E2E8F0',
          padding: '16px 24px',
          textAlign: 'center',
          fontSize: '0.82rem',
          color: '#64748B',
          background: '#fff',
        }}
      >
        © {new Date().getFullYear()} Relief Physiotherapy. All rights reserved.
      </footer>
    </div>
  );
}
