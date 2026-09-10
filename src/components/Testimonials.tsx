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
    condition: 'Lower Back Pain',
  },
  {
    name: 'Amit K.',
    location: 'Mumbai (Online)',
    rating: 5,
    text: 'The online session was incredibly detailed. He watched my movement, corrected my posture and gave a proper exercise plan. My cervical pain reduced significantly.',
    initials: 'AK',
    color: '#7C3AED',
    condition: 'Cervical Pain',
  },
  {
    name: 'Sunita M.',
    location: 'Noida',
    rating: 4,
    text: 'After years of knee pain, Dr. Rahul\'s treatment plan finally made a difference. Very patient, listens carefully, and explains everything clearly.',
    initials: 'SM',
    color: '#E05A2B',
    condition: 'Knee Osteoarthritis',
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      style={{
        background: 'linear-gradient(180deg, #0B1F3A 0%, #112B48 100%)',
        paddingBlock: 'clamp(64px, 10vw, 100px)',
        paddingInline: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div aria-hidden style={{ position:'absolute',top:'-100px',left:'50%',transform:'translateX(-50%)',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,137,123,0.10) 0%,transparent 65%)',pointerEvents:'none' }} />

      <div style={{ maxWidth:'1120px',margin:'0 auto',position:'relative',zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:'center',marginBottom:'clamp(36px,6vw,60px)' }}>
          <span style={{ display:'inline-block',background:'rgba(0,137,123,0.15)',border:'1px solid rgba(77,182,172,0.25)',borderRadius:'999px',padding:'5px 16px',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#4DB6AC',marginBottom:'16px' }}>
            Patient Reviews
          </span>
          <h2 style={{ fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',letterSpacing:'-0.03em',lineHeight:1.15,marginBottom:'20px' }}>
            What Patients Say
          </h2>

          {/* Google rating badge */}
          <div style={{ display:'inline-flex',alignItems:'center',gap:'12px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(253,230,138,0.35)',borderRadius:'14px',padding:'12px 22px' }}>
            <div style={{ display:'flex',gap:'2px' }}>
              {[...Array(5)].map((_,i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i<4?'#F59E0B':'#374151'}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span style={{ fontWeight:700,fontSize:'0.95rem',color:'#fff' }}>4.0 on Google</span>
            <span style={{ color:'rgba(255,255,255,0.3)' }}>·</span>
            <span style={{ fontSize:'0.85rem',color:'rgba(255,255,255,0.55)',fontWeight:500 }}>1,430+ verified reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'20px' }}>
          {REVIEWS.map(review => (
            <div
              key={review.name}
              style={{
                background:'rgba(255,255,255,0.04)',
                border:'1px solid rgba(255,255,255,0.09)',
                borderRadius:'20px',
                padding:'28px',
                display:'flex',flexDirection:'column',gap:'16px',
                transition:'background 0.3s,border-color 0.3s,transform 0.3s',
                backdropFilter:'blur(8px)',
              }}
              onMouseEnter={e=>{
                const el = e.currentTarget as HTMLElement;
                el.style.background='rgba(255,255,255,0.08)';
                el.style.borderColor='rgba(255,255,255,0.16)';
                el.style.transform='translateY(-4px)';
              }}
              onMouseLeave={e=>{
                const el = e.currentTarget as HTMLElement;
                el.style.background='rgba(255,255,255,0.04)';
                el.style.borderColor='rgba(255,255,255,0.09)';
                el.style.transform='translateY(0)';
              }}
            >
              {/* Condition tag */}
              <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                <span style={{ fontSize:'0.7rem',fontWeight:700,color:review.color,background:`${review.color}18`,border:`1px solid ${review.color}30`,padding:'3px 10px',borderRadius:'999px',letterSpacing:'0.04em' }}>
                  {review.condition}
                </span>
                {/* Stars */}
                <div style={{ display:'flex',gap:'2px' }}>
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i<review.rating?'#F59E0B':'#374151'}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>

              {/* Big quote */}
              <div style={{ fontSize:'3rem',lineHeight:0.8,color:`${review.color}40`,fontFamily:'Georgia,serif',userSelect:'none' }}>"</div>

              {/* Review text */}
              <p style={{ fontSize:'0.92rem',color:'rgba(255,255,255,0.78)',lineHeight:1.75,flex:1,fontStyle:'italic' }}>
                {review.text}
              </p>

              {/* Author */}
              <div style={{ display:'flex',alignItems:'center',gap:'12px',paddingTop:'14px',borderTop:'1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width:'42px',height:'42px',borderRadius:'50%',background:`linear-gradient(135deg,${review.color},${review.color}99)`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:'0.82rem',color:'#fff',flexShrink:0,boxShadow:`0 4px 12px ${review.color}40` }}>
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontWeight:700,fontSize:'0.9rem',color:'#fff' }}>{review.name}</div>
                  <div style={{ fontSize:'0.75rem',color:'rgba(255,255,255,0.40)',marginTop:'1px' }}>{review.location}</div>
                </div>
                <div style={{ marginLeft:'auto',fontSize:'0.62rem',fontWeight:700,color:'#4DB6AC',background:'rgba(0,137,123,0.15)',padding:'3px 9px',borderRadius:'999px',letterSpacing:'0.05em',textTransform:'uppercase',border:'1px solid rgba(77,182,172,0.2)' }}>
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign:'center',marginTop:'28px',fontSize:'0.75rem',color:'rgba(255,255,255,0.25)',fontStyle:'italic' }}>
          Reviews are representative. Real patient testimonials to be added with consent.
        </p>
      </div>
    </section>
  );
}
