import Link from 'next/link';
import ArrowIcon from '@/components/arrow-icon';
import SocialLinks from '@/components/social-links';
import { address } from '@/components/content';

export default function Footer() {
  return (
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
        </section>
      </section>

      <div style={{ flexWrap: 'wrap', gap: '16px' }}>
        <span>© {new Date().getFullYear()} Movelle Studio</span>

        <nav
          aria-label="Website policies"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }}
        >
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/booking-terms">Booking &amp; Cancellation Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
