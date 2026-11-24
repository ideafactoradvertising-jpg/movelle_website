import Link from 'next/link';
import ArrowIcon from '@/components/arrow-icon';
import SocialLinks from '@/components/social-links';
import { address } from '@/components/content';
import { rezervAccountUrl, studioPhone, studioPhoneLink, studioWhatsAppUrl } from '@/components/rezerv-links';

export default function Footer() {
  return (
    <>
    <footer className="footer">
      <section className="footer-details" aria-label="Studio information">
        <Link
          className="brand footer-brand"
          href="/"
          aria-label="Movelle Studio home"
        >
          <img src="/brand/website-logo.png" alt="Movelle Studio" />
        </Link>

        <SocialLinks />

        <section>
          <h2>Visit Movelle</h2>
          <address>{address}</address>
          <a
            className="footer-detail-link"
            href="https://www.google.com/maps/place/Movelle+Studio/@14.5693826,121.0295673,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c957579f58e1:0x12421354678b8c23!8m2!3d14.5693826!4d121.0295673!16s%2Fg%2F11zyrqf6dp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <ArrowIcon />
          </a>
        </section>

        <section className="footer-reach">
          <h2>Get in touch</h2>
          <a
            className="footer-detail-link"
            href="mailto:hello@movelle.ph"
          >
            hello@movelle.ph <ArrowIcon />
          </a>
          <a className="footer-detail-link" href={studioPhoneLink}>{studioPhone} <ArrowIcon /></a>
        </section>
      </section>

      <div style={{ flexWrap: 'wrap', gap: '16px' }}>
        <span>© {new Date().getFullYear()} Movelle Studio</span>

        <nav
          aria-label="Website policies"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }}
        >
          <a href={rezervAccountUrl} target="_blank" rel="noopener noreferrer">Manage bookings on Rezerv</a>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/booking-terms">Booking &amp; Cancellation Terms</Link>
        </nav>
      </div>
    </footer>
    <a
      className="floating-whatsapp"
      href={`${studioWhatsAppUrl}?text=${encodeURIComponent("Hi Movelle! I'd like help choosing a class.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Movelle on WhatsApp (opens in a new tab)"
      title="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        right: 'max(18px, env(safe-area-inset-right, 0px))',
        bottom: 'calc(18px + env(safe-area-inset-bottom, 0px))',
        width: 54,
        height: 54,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#681F2A',
        color: '#F5F2EC',
        boxShadow: '0 4px 16px rgba(41, 40, 39, 0.2)',
        zIndex: 30,
      }}
    >
      <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
    </>
  );
}
