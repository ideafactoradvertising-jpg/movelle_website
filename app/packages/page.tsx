import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/page-shell';
import RezervPackagesWidget from '@/components/rezerv-packages-widget';

export const metadata: Metadata = {
  alternates: { canonical: '/packages' },
  title: 'Packages',
  description: 'Explore Movelle Studio Pilates packages and prices. Choose a package for your practice and purchase securely through Rezerv.',
};

export default function Packages() {
  return (
    <PageShell>
      <section className="inner-title section" style={{ paddingTop: 40, paddingBottom: 28 }}>
        <p className="eyebrow">PACKAGES</p>
        <h1 style={{ fontSize: 'clamp(2.8rem, 5.2vw, 5rem)' }}>
          A practice that<br /><em>fits your life.</em>
        </h1>
        <p>Explore our packages and choose the option that fits your practice. Purchases open in Rezerv.</p>
      </section>

      <section className="schedule-section" aria-label="Packages and prices">
        <RezervPackagesWidget />
        <p className="schedule-fallback">
          Having trouble viewing packages?{' '}
          <a href="https://movellestudio.rezerv.co" target="_blank" rel="noopener noreferrer">
            Open Movelle on Rezerv
          </a>.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 24, paddingBottom: 56 }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Ready for your next <em>practice?</em></h2>
        <Link className="text-link" href="/book-a-class#schedule">View the class schedule <span aria-hidden="true">↗</span></Link>
        <p style={{ marginTop: 24, fontSize: '.875rem' }}>
          Please review our{' '}
          <Link href="/booking-terms" style={{ textDecoration: 'underline' }}>booking and cancellation terms</Link>{' '}
          before purchasing. Need help choosing?{' '}
          <Link href="/contact" style={{ textDecoration: 'underline' }}>Contact our team</Link>.
        </p>
      </section>
    </PageShell>
  );
}
