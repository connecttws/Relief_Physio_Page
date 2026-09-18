'use client';
import React from 'react';
import { CheckCircle2, GraduationCap, MapPin, Users, ArrowRight, Star } from 'lucide-react';

const CREDENTIALS = [
  { icon: GraduationCap, label: 'Qualified Physiotherapist (BPT/MPT)', color: '#00897B', bg: '#E0F2F1' },
  { icon: Users, label: '10,000+ Patients Treated Successfully', color: '#E05A2B', bg: '#FFF3EE' },
  { icon: MapPin, label: 'Relief Physiotherapy · Mayur Vihar Phase 1, Delhi & Online', color: '#7C3AED', bg: '#F3EDFF' },
];

const SPECIALISATIONS = [
  'Lower Back Pain', 'Cervical Spondylosis', 'Knee Osteoarthritis',
  'Neck Pain & Stiffness', 'Sports Injuries', 'Post-Surgery Rehab',
  'Shoulder Pain', 'Sciatica',
];

export default function DoctorBio() {
  return (
    <section
      id="doctor"
      style={{
        background: '#F7F9FC',
        paddingBlock: 'clamp(64px, 10vw, 100px)',
        paddingInline: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div aria-hidden style={{ position:'absolute',top:0,right:0,width:'50%',height:'100%',background:'linear-gradient(to left,rgba(0,137,123,0.03),transparent)',pointerEvents:'none' }} />

      <div style={{ maxWidth:'1120px',margin:'0 auto',position:'relative' }}>
        <div className="doctor-grid" style={{ display:'grid',gridTemplateColumns:'1fr',gap:'clamp(32px,6vw,72px)',alignItems:'center' }}>

          {/* ── LEFT: Photo card ── */}
          <div style={{ position:'relative' }}>
            {/* Main photo container */}
            <div
              style={{
                background:'linear-gradient(145deg,#00897B 0%,#004D40 100%)',
                borderRadius:'28px',
                height:'clamp(420px, 52vw, 540px)',
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'relative',
                overflow:'hidden',
                boxShadow:'0 24px 60px rgba(0,137,123,0.22)',
              }}
            >
              {/* Doctor Real Image */}
              <img
                src="/rahul.png"
                alt="Dr. Rahul - Senior Physiotherapist"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />

              {/* Bottom gradient overlay for readability */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.2) 32%, transparent 58%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Floating name card — bottom */}
              <div
                style={{
                  position:'absolute',
                  bottom:0,
                  left:0,
                  right:0,
                  background:'rgba(11,31,58,0.68)',
                  backdropFilter:'blur(12px)',
                  WebkitBackdropFilter:'blur(12px)',
                  padding:'16px 22px',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  borderTop:'1px solid rgba(255,255,255,0.14)',
                }}
              >
                <div>
                  <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:'1.15rem',color:'#fff' }}>Dr. Rahul</div>
                  <div style={{ fontSize:'0.75rem',color:'rgba(255,255,255,0.75)',marginTop:'2px' }}>Senior Physiotherapist (BPT, MPT)</div>
                </div>
                <div style={{ display:'flex',alignItems:'center',gap:'6px',background:'rgba(255,255,255,0.14)',border:'1px solid rgba(255,255,255,0.22)',borderRadius:'10px',padding:'8px 12px' }}>
                  <Star size={13} style={{ color:'#F59E0B' }} fill="#F59E0B" />
                  <span style={{ fontSize:'0.85rem',fontWeight:700,color:'#fff' }}>4.9</span>
                </div>
              </div>

              {/* Experience badge — top right */}
              <div style={{ position:'absolute',top:'18px',right:'18px',background:'rgba(255,255,255,0.95)',backdropFilter:'blur(8px)',borderRadius:'16px',padding:'10px 14px',textAlign:'center',boxShadow:'0 8px 24px rgba(0,0,0,0.18)',border:'1px solid rgba(255,255,255,0.9)',zIndex:2 }}>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:'1.6rem',color:'#00897B',lineHeight:1 }}>12+</div>
                <div style={{ fontSize:'0.65rem',color:'#64748B',fontWeight:700,marginTop:'2px',letterSpacing:'0.02em',textTransform:'uppercase' }}>Years Exp.</div>
              </div>

              {/* Patients badge — top left */}
              <div style={{ position:'absolute',top:'18px',left:'18px',background:'#E05A2B',borderRadius:'14px',padding:'10px 14px',textAlign:'center',boxShadow:'0 6px 20px rgba(224,90,43,0.38)',zIndex:2 }}>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:'1.15rem',color:'#fff',lineHeight:1 }}>10K+</div>
                <div style={{ fontSize:'0.62rem',color:'rgba(255,255,255,0.9)',fontWeight:700,marginTop:'2px',textTransform:'uppercase' }}>Patients</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Bio ── */}
          <div style={{ display:'flex',flexDirection:'column',gap:'28px' }}>
            <div>
              <span style={{ display:'inline-block',background:'#E0F2F1',color:'#00695C',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',padding:'5px 14px',borderRadius:'999px',border:'1px solid rgba(0,137,123,0.20)',marginBottom:'16px' }}>
                Meet Your Physiotherapist
              </span>
              <h2 style={{ fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:'clamp(1.8rem,4vw,2.6rem)',color:'#0B1F3A',letterSpacing:'-0.03em',lineHeight:1.15,marginBottom:'4px' }}>
                Dr. Rahul
              </h2>
              <div style={{ width:'48px',height:'4px',background:'linear-gradient(90deg,#00897B,#00695C)',borderRadius:'999px',marginTop:'10px' }} />
            </div>

            <p style={{ fontSize:'0.97rem',color:'#475569',lineHeight:1.85 }}>
              Dr. Rahul is a qualified physiotherapist with over{' '}
              <strong style={{ color:'#1E293B',fontWeight:600 }}>12 years of clinical experience</strong>{' '}
              treating spine, neck and knee pain. He has helped{' '}
              <strong style={{ color:'#1E293B',fontWeight:600 }}>10,000+ patients</strong>{' '}
              recover from chronic musculoskeletal conditions through personalised, evidence-based physiotherapy — both in-clinic at Relief Physiotherapy (B-4, Acharya Niketan, Mayur Vihar Phase 1, Delhi) and online across India.
            </p>

            {/* Credentials */}
            <div style={{ display:'flex',flexDirection:'column',gap:'10px' }}>
              {CREDENTIALS.map(cred => {
                const Icon = cred.icon;
                return (
                  <div key={cred.label} style={{ display:'flex',alignItems:'center',gap:'14px',padding:'14px 18px',background:'#fff',border:'1px solid #E2E8F0',borderRadius:'14px',boxShadow:'0 1px 4px rgba(11,31,58,0.04)' }}>
                    <div style={{ width:'40px',height:'40px',borderRadius:'12px',background:cred.bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                      <Icon size={20} color={cred.color} />
                    </div>
                    <span style={{ fontWeight:600,fontSize:'0.9rem',color:'#1E293B' }}>{cred.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Specialisations */}
            <div>
              <p style={{ fontSize:'0.72rem',fontWeight:700,color:'#94A3B8',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'12px' }}>
                Conditions Treated
              </p>
              <div style={{ display:'flex',flexWrap:'wrap',gap:'8px' }}>
                {SPECIALISATIONS.map(s => (
                  <span key={s} style={{ display:'inline-flex',alignItems:'center',gap:'5px',background:'#F0FDF4',border:'1px solid #BBF7D0',color:'#166534',borderRadius:'999px',padding:'5px 13px',fontSize:'0.78rem',fontWeight:500 }}>
                    <CheckCircle2 size={11} /> {s}
                  </span>
                ))}
              </div>
            </div>

            <a href="#book" id="doctor-cta" style={{ display:'inline-flex',alignItems:'center',gap:'8px',alignSelf:'flex-start',background:'linear-gradient(135deg,#00897B,#00695C)',color:'#fff',fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:'0.95rem',padding:'14px 28px',borderRadius:'999px',textDecoration:'none',boxShadow:'0 8px 28px rgba(0,137,123,0.28)',transition:'transform 0.2s,box-shadow 0.2s' }}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)';(e.currentTarget as HTMLAnchorElement).style.boxShadow='0 14px 36px rgba(0,137,123,0.38)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.transform='translateY(0)';(e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 28px rgba(0,137,123,0.28)';}}
            >
              Book a Session with Dr. Rahul <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .doctor-grid { grid-template-columns: 1fr 1.3fr !important; }
        }
      `}</style>
    </section>
  );
}
