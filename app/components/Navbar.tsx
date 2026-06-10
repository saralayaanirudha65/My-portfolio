"use client";
import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const ids = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of ids.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ── NAV BAR ─────────────────────────────────────── */}
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: scrolled ? '10px 0' : '20px 0',
          transition: 'padding 0.4s ease',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 20px',
              borderRadius: '18px',
              background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.35)',
              backdropFilter: 'saturate(200%) blur(22px)',
              WebkitBackdropFilter: 'saturate(200%) blur(22px)',
              border: '1px solid rgba(16,185,129,0.14)',
              boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.4s ease',
            }}
          >
            {/* Brand */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <span style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.02em',
                flexShrink: 0,
              }}>AS</span>
              <span style={{
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.06em',
                color: 'var(--ink)',
                textTransform: 'uppercase',
              }}>
                Anirudha Saralaya
              </span>
            </a>

            {/* Desktop links */}
            <nav
              aria-label="Primary"
              style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
              className="desktop-nav"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: active === href.slice(1) ? 'var(--accent-dark)' : 'var(--ink-muted)',
                    position: 'relative',
                    paddingBottom: '2px',
                    transition: 'color 0.2s',
                  }}
                >
                  {label}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '1.5px',
                    width: active === href.slice(1) ? '100%' : '0',
                    background: 'var(--accent)',
                    borderRadius: '99px',
                    transition: 'width 0.3s ease',
                  }} />
                </a>
              ))}

              <div style={{ width: '1px', height: '18px', background: 'rgba(16,185,129,0.2)' }} />

              <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                Let&apos;s Talk
              </a>
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              className="hamburger"
              style={{
                display: 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '5px',
                width: '36px',
                height: '36px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  width: i === 1 ? '70%' : '100%',
                  height: '2px',
                  background: 'var(--ink)',
                  borderRadius: '99px',
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center',
                  transform: isOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                      : i === 1 ? 'scaleX(0)'
                        : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                  opacity: isOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .hamburger   { display: flex !important; }
          }
        `}</style>
      </header>

      {/* ── MOBILE MENU ─────────────────────────────────── */}
      <div
        aria-hidden={!isOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 190,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          background: 'rgba(247,253,251,0.92)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map(({ label, href }, idx) => (
          <a
            key={label}
            href={href}
            onClick={close}
            style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: 'var(--ink)',
              transition: `opacity 0.3s ease ${idx * 60}ms, transform 0.3s ease ${idx * 60}ms`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'none' : 'translateY(16px)',
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={close}
          className="btn-primary"
          style={{ marginTop: '1rem', padding: '14px 40px', fontSize: '1rem' }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
