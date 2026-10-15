import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/page-shell';

export const metadata: Metadata = {
  title: 'Booking & Cancellation Terms',
  description: 'Movelle Studio booking terms, including the 24-hour cancellation deadline and three-month package validity from your first class.',
  alternates: { canonical: '/booking-terms' },
};

const sections = [
  {
    title: 'Cancellations and rescheduling',
    text: 'Cancel or reschedule at least 24 hours before your scheduled class start time. Cancellations or rescheduling made less than 24 hours before the class start time will result in forfeiture of that session credit. Class times and cancellation deadlines follow Philippine time (GMT+8).',
  },
  {
    title: 'Package validity',
    text: 'Packages are valid for three calendar months from the first class attended using that package. All remaining session credits must be used within this validity period. Unused credits are forfeited when the package expires.',
  },
  {
    title: 'Transfers and refunds',
    text: 'Packages and session credits are non-transferable and non-refundable, except where a refund or other remedy is required by applicable law. These terms do not limit your statutory rights.',
  },
  {
    title: 'Booking changes',
    text: 'Manage your reservation through your Rezerv booking account. If you need assistance, contact hello@movelle.ph before the cancellation deadline.',
  },
];

export default function BookingTerms() {
  return (
    <PageShell>
      <section className="section" style={{ maxWidth: 1050, margin: '0 auto' }}>
        <p className="eyebrow">MOVELLE STUDIO</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>Booking &amp;<br /><em>cancellation terms.</em></h1>
        <p style={{ marginTop: 24 }}>Movelle Movement Studio Corporation</p>
        <p style={{ marginTop: 8, color: '#655d55', fontSize: '.85rem' }}>Last updated: 15 October 2026</p>
        {sections.map(section => (
          <section key={section.title} style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 16 }}>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: '1.7rem', marginBottom: 16 }}>Contact us</h2>
          <p><a href="mailto:hello@movelle.ph" style={{ textDecoration: 'underline' }}>hello@movelle.ph</a></p>
          <address style={{ fontStyle: 'normal', marginTop: 12 }}>2F, 2887 Pertierra, Poblacion, Makati City, 1210 Metro Manila</address>
        </section>
        <Link className="text-link" href="/book-a-class#schedule">View the booking schedule <span aria-hidden="true">↗</span></Link>
        <Link className="text-link" href="/privacy-policy">Privacy policy <span aria-hidden="true">↗</span></Link>
      </section>
    </PageShell>
  );
}
