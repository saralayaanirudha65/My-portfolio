"use client";
import React from 'react';

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/saralayaanirudha65' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anirudh-saralaya-ba3921328/' },

];

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '7rem 0 4rem', borderTop: '1px solid var(--border)' }}>
      <div className="container">

        {/* Main CTA */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>Let's Connect</span>

          <h2 style={{
            fontSize:      'clamp(2.2rem, 5vw, 4.5rem)',
            fontWeight:    800,
            letterSpacing: '-0.03em',
            color:         'var(--ink)',
            lineHeight:    1.1,
            marginBottom:  '2rem',
          }}>
            Let's Build Something<br />
            <span style={{ color: 'var(--accent-dark)' }}>Extraordinary.</span>
          </h2>

          <a
            href="mailto:anirudhasaralaya@gmail.com"
            style={{
              display:       'inline-block',
              fontSize:      'clamp(1.1rem, 2.5vw, 2rem)',
              fontWeight:    500,
              color:         'var(--ink-muted)',
              borderBottom:  '2px solid var(--accent-light)',
              paddingBottom: '4px',
              transition:    'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--accent-dark)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--ink-muted)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-light)';
            }}
          >
            anirudhasaralaya@gmail.com
          </a>

          <div style={{ marginTop: '2.5rem' }}>
            <a href="mailto:anirudhasaralaya@gmail.com" className="btn-primary">
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display:        'flex',
          flexWrap:       'wrap',
          justifyContent: 'space-between',
          alignItems:     'center',
          gap:            '1.25rem',
          paddingTop:     '2rem',
          borderTop:      '1px solid var(--border)',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>
            © 2026 Anirudha Saralaya. All rights reserved.
          </p>

          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  fontSize:      '13px',
                  fontWeight:    600,
                  color:         'var(--ink-muted)',
                  letterSpacing: '0.04em',
                  transition:    'color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-dark)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-muted)'; }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
