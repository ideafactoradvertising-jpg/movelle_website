import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/page-shell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Movelle Movement Studio Corporation handles website enquiries, booking information and website analytics, and how to contact us about your privacy.',
  alternates: { canonical: '/privacy-policy' },
};

const sections = [
  {
    title: 'Who we are',
    text: 'Movelle Movement Studio Corporation operates Movelle Studio and www.movelle.ph. This notice covers personal information handled through our website, enquiries and connected booking services. Contact us about privacy at hello@movelle.ph or at 2F, 2887 Pertierra, Poblacion, Makati City, 1210 Metro Manila.',
  },
  {
    title: 'Information we handle',
    text: 'When you contact us, we receive the contact details and messages you provide. Booking through Rezerv may involve account and contact details, selected classes, attendance, package credits and transaction records, depending on the features you use. Website hosting and analytics services may process technical information such as IP address, device and browser details, pages visited, referral sources and interactions.',
  },
  {
    title: 'Why we use information',
    text: 'We use information to answer enquiries, arrange and manage bookings, maintain package and transaction records, communicate about your sessions, operate and secure the website, and understand website usage. Depending on the activity, processing is based on steps you request before a contract, performing our agreement with you, legal obligations, legitimate operational interests balanced against your rights, or consent where required.',
  },
  {
    title: 'Website analytics and cookies',
    text: 'Our website uses Google Analytics 4, managed through Google Tag Manager, to measure website usage. Analytics and booking services may use cookies or similar technologies. Your browser settings can restrict or delete cookies, although this may affect booking features. This privacy notice does not itself constitute consent. You can contact us with questions about analytics or to exercise applicable privacy rights. Do not include sensitive personal information in website URLs or public messages.',
  },
  {
    title: 'Service providers and sharing',
    text: 'Information may be handled by authorised studio personnel and providers supporting our website, communications and bookings. These include Vercel for website hosting, Google for analytics and Rezerv for booking services. Payment providers may process payment details when you use payment features. Providers may process information outside the Philippines, subject to applicable data protection requirements. We may also disclose information when legally required or necessary to establish, exercise or defend legal claims.',
  },
  {
    title: 'Retention and security',
    text: 'We retain information for the period necessary to handle your enquiry, provide the requested services, maintain relevant records and meet applicable legal or dispute-resolution requirements. Retention depends on the record and purpose; package expiry does not automatically determine the retention period of booking or accounting records. Please contact us for details relevant to your information. Reasonable organisational and technical safeguards are used to protect information, but no online service can guarantee absolute security.',
  },
  {
    title: 'Your privacy rights',
    text: 'Subject to applicable law and its exceptions, you may request access to your information, correction, erasure or blocking, object to processing, withdraw consent where processing relies on it, and exercise data portability and other rights under the Philippine Data Privacy Act. Email hello@movelle.ph to make a request. We may need to verify your identity using proportionate information. You may also raise a complaint with the National Privacy Commission.',
  },
  {
    title: 'Other websites and policy updates',
    text: 'Rezerv, payment services and social platforms may provide their own privacy notices for activities they control. Review those notices when using their services. We may update this policy to reflect changes in our services or data practices and will show the revised date on this page.',
  },
];

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <section className="section" style={{ maxWidth: 1050, margin: '0 auto' }}>
        <p className="eyebrow">MOVELLE STUDIO</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>Your privacy<br /><em>matters.</em></h1>
        <p style={{ marginTop: 24 }}>Privacy policy · Movelle Movement Studio Corporation</p>
        <p style={{ marginTop: 8, color: '#655d55', fontSize: '.85rem' }}>Last updated: 24 November 2026</p>
        {sections.map(section => (
          <section key={section.title} style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 16 }}>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <a className="text-link" href="mailto:hello@movelle.ph">Contact us about privacy <span aria-hidden="true">↗</span></a>
        <a className="text-link" href="https://privacy.gov.ph/data-subject-rights/" target="_blank" rel="noopener noreferrer">National Privacy Commission <span aria-hidden="true">↗</span></a>
        <Link className="text-link" href="/booking-terms">Booking &amp; cancellation terms <span aria-hidden="true">↗</span></Link>
      </section>
    </PageShell>
  );
}
