"use client";
import React from 'react';

const SKILLS = [
  {
    name: 'Languages',
    color: '#10b981',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    items: ['Python', 'JavaScript / TypeScript', 'Java', 'C ', 'SQL', 'Bash / Shell'],
  },
  {
    name: 'Frontend',
    color: '#0ea5e9',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    items: ['React.js', 'Next.js', 'HTML5 / CSS3', 'Tailwind CSS', 'REST APIs', 'Responsive Design'],
  },
  {
    name: 'Backend & Databases',
    color: '#8b5cf6',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
    items: ['Node.js / Express', 'Flask / FastAPI', 'PostgreSQL', 'MongoDB', 'MySQL',],
  },
  {
    name: 'AI / ML & Data',
    color: '#f59e0b',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-6 0H9',
    items: ['TensorFlow / Keras', 'Scikit-learn', 'Pandas / NumPy', 'OpenCV', 'YOLO / CNNs', 'Jupyter Notebooks'],
  },
  {
    name: 'DevOps & Cloud',
    color: '#ec4899',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    items: ['Git / GitHub', 'Vercel', 'Linux / Ubuntu', 'CI/CD Pipelines'],
  },
  {
    name: 'Tools & Practices',
    color: '#14b8a6',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    items: ['VS Code / IntelliJ', 'Postman', 'Figma (UI Design)', 'Agile / Scrum', 'Unit Testing / Jest',],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>Technical Toolkit</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Software Engineering(SWE)<br />
            <span style={{ color: 'var(--accent-dark)' }}>Skills & Tools</span>
          </h2>
          <p style={{ color: 'var(--ink-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            A comprehensive SWE toolkit spanning languages, frameworks, AI/ML, cloud infrastructure, and development best practices.
          </p>
        </div>

        {/* 3-col grid, 2 rows = 6 cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {SKILLS.map((cat, i) => (
            <div
              key={i}
              className="glass"
              style={{
                borderRadius: '22px',
                padding: '1.75rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {/* Accent strip */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: cat.color,
                borderRadius: '22px 22px 0 0',
              }} />

              {/* Icon */}
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: `${cat.color}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.1rem',
                color: cat.color,
                marginTop: '0.5rem',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={cat.icon} />
                </svg>
              </div>

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--ink)',
                marginBottom: '1rem',
              }}>{cat.name}</h3>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', listStyle: 'none' }}>
                {cat.items.map((skill, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: cat.color, flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '1.05rem', color: 'var(--ink-muted)', fontWeight: 500 }}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
