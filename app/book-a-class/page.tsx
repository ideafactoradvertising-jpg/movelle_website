import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/page-shell';
import ArrowIcon from '@/components/arrow-icon';
import RezervWidget from '@/components/rezerv-widget';
import { address } from '@/components/content';

export const metadata: Metadata = {
  title: 'Book a Class',
  description: 'Explore Movelle’s class schedule and private-session appointments in Poblacion, Makati. Choose your practice and continue booking through Rezerv.',
  alternates: { canonical: '/book-a-class' },
  openGraph: {
    title: 'Book a Class | Movelle Studio',
    description: 'Find your next practice. Browse classes and appointments at Movelle Studio in Poblacion, Makati.',
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
        <p>Choose a class and a time that works for you. For private and duet sessions, explore the Appointments tab below.</p>
      </section>

      <section className="schedule-section" id="schedule" aria-labelledby="schedule-heading">
        <div className="schedule-heading">
          <h2 id="schedule-heading">Classes &amp; appointments</h2>
          <p>Times shown are for the Philippines (GMT+8). Reservations continue on Rezerv in a new tab.</p>
        </div>
        <RezervWidget />
        <p className="schedule-fallback">
          Having trouble viewing the schedule?{' '}
          <a href="https://movellestudio.rezerv.co" target="_blank" rel="noopener noreferrer">Open Movelle on Rezerv ↗</a>
        </p>
      </section>

      <section className="booking-support section">
        <article>
          <p className="eyebrow">A MORE PERSONAL PRACTICE</p>
          <h2>Private &amp; <em>duet sessions.</em></h2>
          <p>Explore the Appointments tab above for available personal sessions. If you cannot find a suitable option, contact our team to discuss your goals and preferred times.</p>
          <a className="text-link" href="mailto:hello@movelle.ph?subject=Private%20or%20duet%20session%20enquiry">Enquire about a session <ArrowIcon /></a>
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
          <details><summary>How do I book a class?</summary><div className="faq-answer"><p>Choose a date and an available session in the schedule above. Select the session to continue on Rezerv, where you can review availability, pricing and the steps to complete your reservation.</p></div></details>
          <details><summary>What if no classes or appointments appear?</summary><div className="faq-answer"><p>Try another date or adjust the schedule filters. If you still cannot find a suitable session, email hello@movelle.ph for help with availability.</p></div></details>
          <details><summary>I’m new to Pilates. Can you help me choose?</summary><div className="faq-answer"><p>Yes. Contact our team before booking to discuss your experience and goals, and explore an appropriate starting point.</p></div></details>
          <details><summary>What should I bring?</summary><div className="faq-answer"><p>Wear comfortable clothing that lets you move freely. Contact us before your first visit to confirm any equipment or footwear requirements for your chosen session.</p></div></details>
          <details><summary>Where is Movelle Studio?</summary><div className="faq-answer"><p>{address}.</p><Link href="/contact">View our location and directions →</Link></div></details>
        </div>
      </section>
    </PageShell>
  );
}
