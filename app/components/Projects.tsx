"use client";
import React from 'react';

const PROJECTS = [
  {
    title: 'Traffic Prediction',
    category: 'AIML Project',
    desc: 'Real-time traffic prediction using deep learning and geospatial data. Built with Python, TensorFlow, and OpenCV.',
    accent: '#10b981',
    img: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=900',
    link: 'https://github.com/saralayaanirudha65/traffic_predicition',
  },


];

export default function Projects() {
  return (
    <section id="work" style={{ padding: '7rem 0', background: 'rgba(209,250,229,0.12)' }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3.5rem',
        }}>
          <div>
            <span className="badge" style={{ marginBottom: '1rem' }}>Selected Work</span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              lineHeight: 1.1,
            }}>
              Featured Projects
            </h2>
          </div>
          <p style={{
            maxWidth: '400px',
            color: 'var(--ink-muted)',
            fontSize: '1.15rem',
            lineHeight: 1.7,
          }}>
            Real-world engineering projects spanning AI/ML, web development, and data-driven systems.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '1.75rem',
        }}>
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className="glass"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.10)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {/* Image */}
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#f0fdfa', position: 'relative' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    display: 'block',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                {/* Category chip on image */}
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  background: 'rgba(255,255,255,0.88)',
                  backdropFilter: 'blur(8px)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: p.accent,
                }}>
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '0.55rem',
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: '1.25rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: p.accent,
                    fontSize: '13px',
                    fontWeight: 700,
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px'; }}
                >
                  View on GitHub
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
