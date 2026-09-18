'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  User,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Activity,
  CalendarCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function BookingFormSection() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    gender: 'Male',
    city: '',
    painCondition: '',
    painConditionOther: '',
    duration: '',
    profession: '',
    professionOther: '',
    treatmentHistory: '',
    preferredTime: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Question Options
  const genderOptions = ['Male', 'Female', 'Other'];

  const painOptions = [
    'Lower Back Pain',
    'Neck Pain / Stiffness',
    'Knee Pain',
    'Shoulder Pain',
    'Other',
  ];

  const durationOptions = [
    'Less than 1 week',
    '1–4 weeks',
    '1–3 months',
    '3–6 months',
    'More than 6 months',
  ];

  const professionOptions = [
    'Working Professional / Desk Job',
    'Business Owner / Entrepreneur',
    'Senior Citizen / Retired',
    'Sportsperson / Gym-goer',
    'Other',
  ];

  const treatmentOptions = [
    'Yes, but the pain keeps coming back',
    'Yes, but I have not seen enough improvement',
    'No, I have not tried any treatment yet',
    'I am currently taking treatment',
  ];

  const preferredTimeOptions = [
    'Morning – 9 AM to 12 PM',
    'Afternoon – 12 PM to 3 PM',
    'Evening – 3 PM to 6 PM',
    'Evening – 6 PM to 9 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSelectOption = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }

    if (!formData.painCondition) {
      newErrors.painCondition = 'Please select your current pain or condition';
    } else if (formData.painCondition === 'Other' && !formData.painConditionOther.trim()) {
      newErrors.painConditionOther = 'Please describe your condition';
    }

    if (!formData.duration) {
      newErrors.duration = 'Please select how long you have had this problem';
    }

    if (!formData.profession) {
      newErrors.profession = 'Please select which best describes you';
    } else if (formData.profession === 'Other' && !formData.professionOther.trim()) {
      newErrors.professionOther = 'Please specify your profession';
    }

    if (!formData.treatmentHistory) {
      newErrors.treatmentHistory = 'Please select your previous treatment status';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select your preferred callback time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to the first error
      const firstError = document.querySelector('.form-field-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Save lead to session storage
    try {
      sessionStorage.setItem('relief_physio_lead', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }));
    } catch {
      // Safe fallback
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit form.');
      }

      router.push('/thank-you');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again or call us.';
      setSubmitError(msg);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="book"
      style={{
        background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 50%, #F0FDF4 100%)',
        paddingBlock: 'clamp(48px, 8vw, 96px)',
        paddingInline: '16px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#E0F2F1',
              color: '#00695C',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '14px',
              border: '1px solid rgba(0, 137, 123, 0.20)',
            }}
          >
            <Activity size={15} style={{ color: '#00897B' }} />
            Personalised Consultation
          </div>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: '#0B1F3A',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '14px',
            }}
          >
            Book Your Assessment with{' '}
            <span style={{ color: '#00897B' }}>Dr. Rahul</span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#64748B',
              lineHeight: 1.7,
              maxWidth: '580px',
              margin: '0 auto 16px',
            }}
          >
            Share a few details about your symptoms and schedule so Dr. Rahul and our clinical team can prepare your personalised diagnosis.
          </p>

          {/* Trust badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#334155',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <ShieldCheck size={16} style={{ color: '#00897B' }} /> 100% Confidential
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <CalendarCheck size={16} style={{ color: '#00897B' }} /> Fast Response
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Sparkles size={16} style={{ color: '#E05A2B' }} /> Clinic or Online
            </span>
          </div>
        </div>

        {/* Main Form Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 12px 40px rgba(11, 31, 58, 0.08)',
            padding: 'clamp(24px, 5vw, 48px)',
          }}
        >
          <form onSubmit={handleSubmit} noValidate>

            {/* ═══════════════════════════════════════════════════════════════
                STEP 1: PATIENT DETAILS (Q1 - Q4)
               ═══════════════════════════════════════════════════════════════ */}
            <div style={{ marginBottom: '40px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1.5px solid #F1F5F9',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#00897B',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.9rem',
                  }}
                >
                  1
                </div>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#0B1F3A',
                    margin: 0,
                  }}
                >
                  Patient Details
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '20px',
                }}
              >
                {/* 1. Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    style={{
                      display: 'block',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    1. Full Name <span style={{ color: '#E05A2B' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User
                      size={18}
                      style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#94A3B8',
                      }}
                    />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 42px',
                        borderRadius: '12px',
                        border: `1.5px solid ${errors.fullName ? '#EF4444' : '#CBD5E1'}`,
                        fontSize: '0.95rem',
                        outline: 'none',
                        fontFamily: "'Inter', sans-serif",
                        color: '#0B1F3A',
                        background: '#FAFAFA',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#00897B')}
                      onBlur={e => (e.target.style.borderColor = errors.fullName ? '#EF4444' : '#CBD5E1')}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }}>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: 'block',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    2. Phone Number <span style={{ color: '#E05A2B' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone
                      size={18}
                      style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#94A3B8',
                      }}
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 42px',
                        borderRadius: '12px',
                        border: `1.5px solid ${errors.phone ? '#EF4444' : '#CBD5E1'}`,
                        fontSize: '0.95rem',
                        outline: 'none',
                        fontFamily: "'Inter', sans-serif",
                        color: '#0B1F3A',
                        background: '#FAFAFA',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#00897B')}
                      onBlur={e => (e.target.style.borderColor = errors.phone ? '#EF4444' : '#CBD5E1')}
                    />
                  </div>
                  {errors.phone && (
                    <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* 3. Gender */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    3. Gender <span style={{ color: '#E05A2B' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {genderOptions.map(option => {
                      const isSelected = formData.gender === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelectOption('gender', option)}
                          style={{
                            flex: 1,
                            padding: '11px 12px',
                            borderRadius: '12px',
                            border: `1.5px solid ${isSelected ? '#00897B' : '#E2E8F0'}`,
                            background: isSelected ? '#E0F2F1' : '#FAFAFA',
                            color: isSelected ? '#00695C' : '#475569',
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.88rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. City */}
                <div>
                  <label
                    htmlFor="city"
                    style={{
                      display: 'block',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    4. City <span style={{ color: '#E05A2B' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin
                      size={18}
                      style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#94A3B8',
                      }}
                    />
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="e.g. Delhi, Noida, Gurugram"
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 42px',
                        borderRadius: '12px',
                        border: `1.5px solid ${errors.city ? '#EF4444' : '#CBD5E1'}`,
                        fontSize: '0.95rem',
                        outline: 'none',
                        fontFamily: "'Inter', sans-serif",
                        color: '#0B1F3A',
                        background: '#FAFAFA',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#00897B')}
                      onBlur={e => (e.target.style.borderColor = errors.city ? '#EF4444' : '#CBD5E1')}
                    />
                  </div>
                  {errors.city && (
                    <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }}>
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                STEP 2: PAIN & CONDITION (Q5 - Q6)
               ═══════════════════════════════════════════════════════════════ */}
            <div style={{ marginBottom: '40px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1.5px solid #F1F5F9',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#00897B',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.9rem',
                  }}
                >
                  2
                </div>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#0B1F3A',
                    margin: 0,
                  }}
                >
                  Condition & Symptoms
                </h3>
              </div>

              {/* 5. Pain Type */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  5. What type of pain or condition are you currently experiencing? <span style={{ color: '#E05A2B' }}>*</span>
                </label>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {painOptions.map(option => {
                    const isSelected = formData.painCondition === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectOption('painCondition', option)}
                        style={{
                          textAlign: 'left',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: `1.5px solid ${isSelected ? '#00897B' : '#E2E8F0'}`,
                          background: isSelected ? '#F0FDF4' : '#FAFAFA',
                          color: isSelected ? '#00695C' : '#334155',
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '10px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span>{option}</span>
                        <CheckCircle2
                          size={18}
                          style={{
                            color: isSelected ? '#00897B' : '#CBD5E1',
                            flexShrink: 0,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                {formData.painCondition === 'Other' && (
                  <div style={{ marginTop: '10px' }}>
                    <input
                      name="painConditionOther"
                      type="text"
                      placeholder="Please specify your pain or condition..."
                      value={formData.painConditionOther}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: `1.5px solid ${errors.painConditionOther ? '#EF4444' : '#00897B'}`,
                        fontSize: '0.92rem',
                        outline: 'none',
                        background: '#fff',
                      }}
                    />
                    {errors.painConditionOther && (
                      <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }}>
                        {errors.painConditionOther}
                      </p>
                    )}
                  </div>
                )}

                {errors.painCondition && (
                  <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '6px' }}>
                    {errors.painCondition}
                  </p>
                )}
              </div>

              {/* 6. Duration */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  6. How long have you been experiencing this problem? <span style={{ color: '#E05A2B' }}>*</span>
                </label>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {durationOptions.map(option => {
                    const isSelected = formData.duration === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectOption('duration', option)}
                        style={{
                          textAlign: 'center',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          border: `1.5px solid ${isSelected ? '#00897B' : '#E2E8F0'}`,
                          background: isSelected ? '#E0F2F1' : '#FAFAFA',
                          color: isSelected ? '#00695C' : '#334155',
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {errors.duration && (
                  <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '6px' }}>
                    {errors.duration}
                  </p>
                )}
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                STEP 3: LIFESTYLE & HISTORY (Q7 - Q8)
               ═══════════════════════════════════════════════════════════════ */}
            <div style={{ marginBottom: '40px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1.5px solid #F1F5F9',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#00897B',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.9rem',
                  }}
                >
                  3
                </div>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#0B1F3A',
                    margin: 0,
                  }}
                >
                  Lifestyle & Treatment Background
                </h3>
              </div>

              {/* 7. Which best describes you? */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  7. Which best describes you? <span style={{ color: '#E05A2B' }}>*</span>
                </label>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {professionOptions.map(option => {
                    const isSelected = formData.profession === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectOption('profession', option)}
                        style={{
                          textAlign: 'left',
                          padding: '13px 16px',
                          borderRadius: '12px',
                          border: `1.5px solid ${isSelected ? '#00897B' : '#E2E8F0'}`,
                          background: isSelected ? '#F0FDF4' : '#FAFAFA',
                          color: isSelected ? '#00695C' : '#334155',
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '8px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span>{option}</span>
                        <CheckCircle2
                          size={16}
                          style={{
                            color: isSelected ? '#00897B' : '#CBD5E1',
                            flexShrink: 0,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                {formData.profession === 'Other' && (
                  <div style={{ marginTop: '10px' }}>
                    <input
                      name="professionOther"
                      type="text"
                      placeholder="Please specify your profession or lifestyle..."
                      value={formData.professionOther}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: `1.5px solid ${errors.professionOther ? '#EF4444' : '#00897B'}`,
                        fontSize: '0.92rem',
                        outline: 'none',
                        background: '#fff',
                      }}
                    />
                    {errors.professionOther && (
                      <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }}>
                        {errors.professionOther}
                      </p>
                    )}
                  </div>
                )}

                {errors.profession && (
                  <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '6px' }}>
                    {errors.profession}
                  </p>
                )}
              </div>

              {/* 8. Previous treatment */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  8. Have you already tried any treatment for this problem? <span style={{ color: '#E05A2B' }}>*</span>
                </label>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {treatmentOptions.map(option => {
                    const isSelected = formData.treatmentHistory === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectOption('treatmentHistory', option)}
                        style={{
                          textAlign: 'left',
                          padding: '13px 16px',
                          borderRadius: '12px',
                          border: `1.5px solid ${isSelected ? '#00897B' : '#E2E8F0'}`,
                          background: isSelected ? '#F0FDF4' : '#FAFAFA',
                          color: isSelected ? '#00695C' : '#334155',
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '10px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span>{option}</span>
                        <CheckCircle2
                          size={16}
                          style={{
                            color: isSelected ? '#00897B' : '#CBD5E1',
                            flexShrink: 0,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                {errors.treatmentHistory && (
                  <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '6px' }}>
                    {errors.treatmentHistory}
                  </p>
                )}
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                STEP 4: PREFERRED CALL TIME (Q9)
               ═══════════════════════════════════════════════════════════════ */}
            <div style={{ marginBottom: '36px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1.5px solid #F1F5F9',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#00897B',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.9rem',
                  }}
                >
                  4
                </div>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#0B1F3A',
                    margin: 0,
                  }}
                >
                  Schedule Your Callback
                </h3>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  9. When would you prefer our physiotherapy team to call you? <span style={{ color: '#E05A2B' }}>*</span>
                </label>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {preferredTimeOptions.map(option => {
                    const isSelected = formData.preferredTime === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectOption('preferredTime', option)}
                        style={{
                          textAlign: 'left',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          border: `1.5px solid ${isSelected ? '#00897B' : '#E2E8F0'}`,
                          background: isSelected ? '#E0F2F1' : '#FAFAFA',
                          color: isSelected ? '#00695C' : '#334155',
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.86rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <Clock size={16} style={{ color: isSelected ? '#00897B' : '#94A3B8', flexShrink: 0 }} />
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>

                {errors.preferredTime && (
                  <p className="form-field-error" style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '6px' }}>
                    {errors.preferredTime}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Error banner */}
            {submitError && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 18px',
                  background: '#FEF2F2',
                  border: '1px solid #FCA5A5',
                  borderRadius: '12px',
                  color: '#991B1B',
                  marginBottom: '20px',
                  fontSize: '0.9rem',
                }}
              >
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{submitError}</span>
              </div>
            )}

            {/* CTA Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-cta btn-cta-lg"
                id="submit-consultation-btn"
                style={{
                  width: '100%',
                  maxWidth: '440px',
                  margin: '0 auto',
                  padding: '18px 36px',
                  fontSize: '1.05rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting Your Assessment...
                  </>
                ) : (
                  <>
                    Submit & Book Consultation
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p
                style={{
                  marginTop: '14px',
                  fontSize: '0.82rem',
                  color: '#64748B',
                  lineHeight: 1.5,
                }}
              >
                🔒 Your health information is 100% confidential. Dr. Rahul's clinical team will reach out at your preferred time.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
