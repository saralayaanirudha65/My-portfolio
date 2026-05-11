"use client";
import React from 'react';

const tags = ['Software Engineering', 'AIML', 'Full stack Engineering', 'Open Source'];

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* Photo card */}
          <div style={{ position: 'relative', maxWidth: '420px', margin: '0 auto', width: '100%' }}>
            <div className="glass" style={{
              borderRadius: '28px',
              padding: '12px',
              aspectRatio: '1',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #d1fae5 0%, #e0f2fe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none"
                  stroke="var(--accent-dark)" strokeWidth="0.6"
                  strokeLinecap="round" strokeLinejoin="round"
                  style={{ opacity: 0.5 }}
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>

            {/* Experience badge */}

          </div>

          {/* Content */}
          <div>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>About Me</span>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '1.5rem',
            }}>
              Translating Complexity<br />
              <span style={{ color: 'var(--accent-dark)' }}>into Elegance.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                "I'm a Junior software engineer dedicated to building high-fidelity digital experiences. With a background spanning both design and computer science, I bridge the gap between creative vision and technical execution.",
                "My approach is rooted in the belief that software should not just be functional — it should be delightful. I craft interactive systems that respond to human intuition with precision and grace.",
              ].map((text, i) => (
                <p key={i} style={{
                  fontSize:   '1.2rem',
                  color:      'var(--ink-muted)',
                  lineHeight: 1.75,
                  fontWeight: 400,
                }}>{text}</p>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
              {tags.map(t => (
                <span key={t} style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '99px',
                  background: 'var(--accent-light)',
                  color: 'var(--accent-dark)',
                  fontSize: '13px',
                  fontWeight: 600,
                }}>{t}</span>
              ))}
            </div>

            <blockquote style={{
              borderLeft: '3px solid var(--accent-light)',
              paddingLeft: '1.25rem',
            }}>
              <p style={{ fontStyle: 'italic', color: 'var(--ink-muted)', fontSize: '1.25rem' }}>
                "Architecture begins where engineering ends."
              </p>
              <cite style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px', display: 'block' }}>
                — Walter Gropius
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
