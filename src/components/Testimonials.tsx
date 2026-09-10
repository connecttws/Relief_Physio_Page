'use client';
import React from 'react';

const REVIEWS = [
  {
    name: 'Priya S.',
    location: 'Delhi',
    rating: 5,
    text: 'Dr. Rahul diagnosed my chronic lower back pain accurately in the first session. After 6 sessions, I was back to my regular gym routine. Highly recommended!',
    initials: 'PS',
    color: '#00897B',
  },
  {
    name: 'Amit K.',
    location: 'Mumbai (Online)',
    rating: 5,
    text: 'The online session was incredibly detailed. He watched my movement, corrected my posture and gave a proper exercise plan. My cervical pain reduced significantly.',
    initials: 'AK',
    color: '#7C3AED',
  },
  {
    name: 'Sunita M.',
    location: 'Noida',
    rating: 4,
    text: 'After years of knee pain, Dr. Rahul\'s treatment plan finally made a difference. Very patient, listens carefully, and explains everything clearly.',
    initials: 'SM',
    color: '#E05A2B',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? '#F59E0B' : '#E2E8F0'}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      style={{
        background: '#F7F9FC',
        paddingBlock: 'clamp(64px, 10vw, 96px)',
        paddingInline: '24px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '12px' }}>
            Patient Reviews
          </p>
          <h2 className="section-title">
            What Patients Say
          </h2>
          {/* Google rating block */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#fff',
              border: '1px solid #FDE68A',
              borderRadius: '12px',
              padding: '10px 20px',
              marginTop: '20px',
              boxShadow: '0 2px 12px rgba(245,158,11,0.10)',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? '#F59E0B' : '#D1D5DB'}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1E293B' }}>
              4.0 on Google
            </span>
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>·</span>
            <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
              1,430+ verified reviews
            </span>
          </div>
          <div className="divider" style={{ margin: '20px auto 0' }} />
        </div>

        {/* Review cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {REVIEWS.map(review => (
            <div
              key={review.name}
              className="card card-hover"
              style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontSize: '2.5rem',
                  color: '#E2E8F0',
                  lineHeight: 1,
                  fontFamily: 'Georgia, serif',
                  marginTop: '-4px',
                }}
              >
                "
              </div>

              {/* Rating */}
              <StarRating count={review.rating} />

              {/* Text */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {review.text}
              </p>

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid #F1F5F9',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `${review.color}18`,
                    border: `2px solid ${review.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: review.color,
                    flexShrink: 0,
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1E293B' }}>
                    {review.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{review.location}</div>
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#00897B',
                    background: '#E0F2F1',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about testimonials */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '0.78rem',
            color: '#94A3B8',
            fontStyle: 'italic',
          }}
        >
          Reviews are representative. Real patient testimonials to be added with consent.
        </p>
      </div>
    </section>
  );
}
