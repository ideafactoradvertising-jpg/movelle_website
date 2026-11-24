'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { studioWhatsAppUrl } from '@/components/rezerv-links';

const websiteMessage = "Hi Movelle Studio! I came from your website (www.movelle.ph). I'd like help with classes or packages.";
const whatsAppLink = `${studioWhatsAppUrl}?text=${encodeURIComponent(websiteMessage)}`;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const chatRef = useRef<HTMLAnchorElement>(null);
  const panelId = useId();
  const headingId = useId();

  useEffect(() => {
    if (!open) return;
    chatRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus({ preventScroll: true });
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  const closePanel = () => {
    setOpen(false);
    toggleRef.current?.focus({ preventScroll: true });
  };

  return (
    <div ref={containerRef} style={{ position: 'fixed', right: 'max(18px, env(safe-area-inset-right, 0px))', bottom: 'calc(18px + env(safe-area-inset-bottom, 0px))', zIndex: 30, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
      {open && (
        <section id={panelId} aria-labelledby={headingId} style={{ width: 'min(320px, calc(100vw - 36px))', maxHeight: 'calc(100dvh - 120px - env(safe-area-inset-bottom, 0px))', overflowY: 'auto', borderRadius: 16, border: '1px solid #dcd5cc', background: '#F5F2EC', boxShadow: '0 8px 32px rgba(41, 40, 39, 0.18)', color: '#292827', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 16px 18px 20px', background: '#681F2A', color: '#F5F2EC' }}>
            <h2 id={headingId} style={{ flex: 1, margin: 0, fontFamily: 'inherit', fontSize: '1rem', fontWeight: 500, lineHeight: 1.5, letterSpacing: 0 }}>Welcome to Movelle Studio</h2>
            <button type="button" onClick={closePanel} aria-label="Close WhatsApp welcome" style={{ flexShrink: 0, width: 44, height: 44, display: 'grid', placeItems: 'center', border: 0, background: 'transparent', color: 'inherit', cursor: 'pointer' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </div>
          <div style={{ padding: 20 }}>
            <p style={{ margin: '0 0 18px', fontSize: '.875rem', lineHeight: 1.7 }}>How can we help you find your practice? Chat with our team about classes, packages or your first visit.</p>
            <a ref={chatRef} href={whatsAppLink} target="_blank" rel="noopener noreferrer" aria-label="Chat with Movelle on WhatsApp (opens in a new tab)" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, minHeight: 48, padding: '12px 16px', borderRadius: 8, background: '#681F2A', color: '#F5F2EC', textDecoration: 'none', fontSize: '.875rem', lineHeight: 1.5 }}>
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <p style={{ margin: '12px 0 0', fontSize: '.7rem', lineHeight: 1.6, color: '#655d55' }}>Opens WhatsApp. Tap Send to start the conversation.</p>
          </div>
        </section>
      )}
      <button ref={toggleRef} type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls={open ? panelId : undefined} aria-label={open ? 'Close WhatsApp welcome' : 'Open WhatsApp welcome'} title="Chat with Movelle" style={{ width: 54, height: 54, padding: 0, border: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#681F2A', color: '#F5F2EC', boxShadow: '0 4px 16px rgba(41, 40, 39, 0.2)', cursor: 'pointer' }}>
        <WhatsAppIcon />
      </button>
    </div>
  );
}
