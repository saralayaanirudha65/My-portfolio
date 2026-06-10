"use client";
import React, { useState } from 'react';

/* ─── DATA ───────────────────────────────────────────────── */
const EDUCATION = [
  {
    degree: 'B.Tech – Computer Communication Engineering',
    institution: 'Manipal Institute of Technology (MIT Manipal)',
    period: '2022 – 2026',
    // grade:       'CGPA: — / 10',            // fill in
    highlights: ['Current Intern at Indivillage Tech Solutions', 'Project: AI-based Traffic Prediction', 'Coursework: DSA, DBMS, OS, Networks, ML'],
  },

];

const EXPERIENCE = [
  {
    role: 'Software Engineering Intern',         // fill in role
    company: 'Indivillage Tech Solutions',                        // fill in
    period: '01/26 – 05/26',             // fill in
    type: 'Internship',
    bullets: [
      'Developed Full stack web application for us clients',
      'Used Next.js,Node.js,builder.io,rest api,Tailwind css',

    ],
  },
];

const CERTIFICATIONS = [
  { name: 'Introduction to Python Programming', issuer: 'Microsoft,coursera', year: '2025' },
  { name: 'Deep Learning ', issuer: 'AndrewNG,coursera', year: '2025' },
  { name: 'Frontend', issuer: 'Meta,coursera', year: '2025' },
];

const ACHIEVEMENTS = [
  'Developed Traffic Prediction model with 91%+ accuracy using CNNs and geospatial data.',

  'Active GitHub contributor — see github.com/saralayaanirudha65.',
];

/* ─── COMPONENT ──────────────────────────────────────────── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.75rem',
  }}>
    <h3 style={{
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--accent-dark)',
      whiteSpace: 'nowrap',
    }}>{children}</h3>
    <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
  </div>
);

export default function Resume() {
  const [hover, setHover] = useState(false);

  return (
    <section id="resume" style={{ padding: '7rem 0', background: 'rgba(209,250,229,0.10)' }}>
      <div className="container">

        {/* Top bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
        }}>
          <div>
            <span className="badge" style={{ marginBottom: '1rem' }}>Curriculum Vitae</span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              lineHeight: 1.1,
            }}>
              My Resume
            </h2>
          </div>

          {/* Download button */}
          <a
            href="/Anirudha_Saralaya_Resume.pdf"          /* place your PDF in /public/resume.pdf */
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              background: hover ? 'var(--accent-dark)' : 'var(--accent)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
              transform: hover ? 'translateY(-2px)' : 'none',
              boxShadow: '0 4px 14px rgba(16,185,129,0.3)',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Education */}
            <SectionLabel>Education</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {EDUCATION.map((ed, i) => (
                <div key={i} className="glass" style={{ borderRadius: '18px', padding: '1.5rem', borderLeft: '3px solid var(--accent)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-dark)', letterSpacing: '0.05em' }}>
                      {ed.period}
                    </span>
                    {/* <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-muted)', background: 'var(--accent-light)', padding: '2px 10px', borderRadius: '99px' }}>
                      {ed.grade}
                    </span> */}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.25rem' }}>
                    {ed.degree}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: '0.75rem' }}>
                    {ed.institution}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', listStyle: 'none' }}>
                    {ed.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: 'var(--ink-muted)' }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <SectionLabel>Key Achievements</SectionLabel>
            <div className="glass" style={{ borderRadius: '18px', padding: '1.5rem' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', listStyle: 'none' }}>
                {ACHIEVEMENTS.map((a, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '1.1rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                    <span style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: 'var(--accent-light)', color: 'var(--accent-dark)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 800, flexShrink: 0, marginTop: '1px',
                    }}>✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div>
            {/* Experience */}
            <SectionLabel>Work Experience</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="glass" style={{ borderRadius: '18px', padding: '1.5rem', borderLeft: '3px solid #0ea5e9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#0ea5e9', letterSpacing: '0.05em' }}>
                      {exp.period}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-muted)', background: '#e0f2fe', padding: '2px 10px', borderRadius: '99px' }}>
                      {exp.type}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginBottom: '0.75rem' }}>
                    {exp.company}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', listStyle: 'none' }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: 'var(--ink-muted)' }}>
                        <span style={{ color: '#0ea5e9', flexShrink: 0 }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <SectionLabel>Certifications</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="glass" style={{
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'var(--accent-light)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--ink)' }}>{cert.name}</p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)' }}>{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}

      </div>
    </section>
  );
}
