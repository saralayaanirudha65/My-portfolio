"use client";
import React from 'react';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Availability badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="badge" style={{ gap: '6px' }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulse-ring 2s infinite',
              flexShrink: 0,
            }} />
            Open for Software Engineer / Developer roles.
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
          marginBottom: '1.5rem',
          maxWidth: '900px',
          marginInline: 'auto',
        }}>
          Crafting Digital
          <span style={{ display: 'block', color: 'var(--accent-dark)' }}>
            Masterpieces.
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
          color: 'var(--ink-muted)',
          maxWidth: '640px',
          marginInline: 'auto',
          marginBottom: '2.75rem',
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          2026 Btech Computer Communication Engineering Graduate from MIT Manipal, Aspiring Software Engineer.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#work" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Let's Talk
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.45,
        }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
            Scroll
          </span>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            borderRadius: '99px',
          }} />
        </div>
      </div>
    </section>
  );
}
