import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/page-shell';
import ArrowIcon from '@/components/arrow-icon';
import RezervWidget from '@/components/rezerv-widget';
import { address } from '@/components/content';

export const metadata: Metadata = {
  title: 'Book a Class',
  description: 'Explore Movelle’s Reformer, Red Light Therapy, Private and Couple Pilates classes. Choose a class and continue booking through Rezerv.',
  alternates: { canonical: '/book-a-class' },
  openGraph: {
    title: 'Book a Class | Movelle Studio',
    description: 'Find your next practice. Browse Movelle’s Pilates classes and continue booking through Rezerv.',
    url: '/book-a-class',
    siteName: 'Movelle Studio',
    type: 'website',
  },
};

export default function Book() {
  return (
    <PageShell>
      <section className="schedule-intro section">
        <p className="eyebrow">BOOK A CLASS</p>
        <h1>Find your next <em>practice.</em></h1>
        <p>Explore our classes below. Choose a class to view its details, then continue on Rezerv to check available sessions and book.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 28px', marginTop: 24 }}>
          <Link className="button" href="/packages">View Packages <ArrowIcon /></Link>
          <a className="text-link" style={{ marginTop: 0 }} href="https://movellestudio.rezerv.co/" target="_blank" rel="noopener noreferrer">Manage bookings on Rezerv <ArrowIcon /></a>
        </div>
      </section>

      <section className="schedule-section" id="schedule" aria-labelledby="schedule-heading">
        <div className="schedule-heading">
          <h2 id="schedule-heading">Choose your class</h2>
          <p>Choose a class below to explore the details. Booking continues on Rezerv in a new tab; session times follow Philippine time (GMT+8).</p>
        </div>
        <RezervWidget />
        <p className="schedule-fallback">
          Having trouble viewing classes?{' '}
          <a href="https://movellestudio.rezerv.co/class" target="_blank" rel="noopener noreferrer">Open the class list on Rezerv ↗</a>
        </p>
      </section>

      <section className="booking-support section">
        <article>
          <p className="eyebrow">A MORE PERSONAL PRACTICE</p>
          <h2>Private &amp; <em>Couple Pilates.</em></h2>
          <p>Choose Private Class 1:1 above for individual guidance, or Couple Pilates for a shared Reformer class. For Duet sessions, contact our team about availability.</p>
          <a className="text-link" href="https://movellestudio.rezerv.co/class/Private-Class-11" target="_blank" rel="noopener noreferrer">Book Private Pilates <ArrowIcon /></a>
          <a className="text-link" href="https://movellestudio.rezerv.co/class/Couple-Pilates" target="_blank" rel="noopener noreferrer">Book Couple Pilates <ArrowIcon /></a>
          <a className="text-link" href="mailto:hello@movelle.ph?subject=Duet%20Pilates%20enquiry">Enquire about Duet <ArrowIcon /></a>
        </article>
        <article>
          <p className="eyebrow">WE’RE HERE TO HELP</p>
          <h2>Not sure where <em>to start?</em></h2>
          <p>Tell us about your experience and what you are looking for. We can help you explore the class or session that may suit you.</p>
          <a className="text-link" href="mailto:hello@movelle.ph?subject=Help%20choosing%20a%20class">Ask our team <ArrowIcon /></a>
        </article>
      </section>

      <section className="home-faq section">
        <div><p className="eyebrow">BEFORE YOUR VISIT</p><h2>A little more<br /><em>to know.</em></h2></div>
        <div className="faq-list">
          <details><summary>How do I book a class?</summary><div className="faq-answer"><p>Choose a class from the list above, review its details, then continue on Rezerv to select an available session and complete your reservation. If credits are required, choose an eligible package and use the same account for your purchase and booking.</p></div></details>
          <details><summary>What if no suitable class or session appears?</summary><div className="faq-answer"><p>Review the class filters and open a class to check its published sessions in Rezerv. A class listing does not guarantee availability on every date. Contact hello@movelle.ph before purchasing a package for a specific date if you cannot find a suitable session.</p></div></details>
          <details><summary>How do I manage or cancel my booking?</summary><div className="faq-answer"><p>Open Rezerv, choose My Bookings and sign in with the account used to reserve your session. Review the booking terms before making changes.</p><a href="https://movellestudio.rezerv.co/" target="_blank" rel="noopener noreferrer">Open Rezerv →</a><Link href="/booking-terms">Booking and cancellation terms →</Link></div></details>
          <details><summary>I’m new to Pilates. Can you help me choose?</summary><div className="faq-answer"><p>Yes. Contact our team before booking to discuss your experience and goals, and explore an appropriate starting point.</p></div></details>
          <details><summary>What should I bring?</summary><div className="faq-answer"><p>Wear comfortable clothing that lets you move freely. Contact us before your first visit to confirm any equipment or footwear requirements for your chosen session.</p></div></details>
          <details><summary>Where is Movelle Studio?</summary><div className="faq-answer"><p>{address}.</p><Link href="/contact">View our location and directions →</Link></div></details>
        </div>
      </section>
    </PageShell>
  );
}
