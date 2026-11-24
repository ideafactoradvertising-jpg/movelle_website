import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/page-shell';
import ArrowIcon from '@/components/arrow-icon';
import RezervWidget from '@/components/rezerv-widget';
import { address } from '@/components/content';
import { getRezervClassLink, rezervAccountUrl } from '@/components/rezerv-links';

export const metadata: Metadata = {
  title: 'Book a Class',
  description: 'Browse Movelle’s Pilates schedule, explore packages and book Reformer, Red Light Therapy, Couple or Private Pilates through Rezerv.',
  alternates: { canonical: '/book-a-class' },
  openGraph: {
    title: 'Book a Class | Movelle Studio',
    description: 'Find your next practice. Explore packages and reserve published Pilates sessions through Rezerv.',
    url: '/book-a-class',
    siteName: 'Movelle Studio',
    type: 'website',
  },
};

export default function Book() {
  return (
    <PageShell>
      <section className="schedule-intro section" style={{ paddingTop: 'clamp(24px, 4vw, 40px)', paddingBottom: 18 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>BOOK A CLASS</p>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4.2rem)', lineHeight: 1.08 }}>Find your next <em>practice.</em></h1>
        <p style={{ marginTop: 14, fontSize: '.95rem', lineHeight: 1.6 }}>Choose a class and book through Rezerv.</p>
      </section>

      <section className="schedule-section" id="schedule" aria-label="Available classes" style={{ paddingBottom: 32 }}>
        <RezervWidget />
        <p style={{ marginTop: 14, fontSize: '.75rem', color: '#655d55' }}>Times shown in Philippine time (GMT+8).</p>
        <nav aria-label="Booking help" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', marginTop: 14, fontSize: '.875rem', color: '#681F2A' }}>
          <Link href="/packages" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>View Packages</Link>
          <a href="https://movellestudio.rezerv.co/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>Manage My Bookings</a>
        </nav>
      </section>

      <section className="booking-support section">
        <article>
          <p className="eyebrow">A MORE PERSONAL PRACTICE</p>
          <h2>Private &amp; <em>Couple Pilates.</em></h2>
          <p>Explore Private Class 1:1 for individual guidance, or Couple Pilates for a Reformer session shared with your partner. Published sessions appear in the class schedule. For Duet sessions, contact our team to discuss availability.</p>
          <a className="text-link" href={getRezervClassLink('Private Pilates')} target="_blank" rel="noopener noreferrer">Book Private Pilates <ArrowIcon /></a>
          <a className="text-link" href={getRezervClassLink('Couple Pilates')} target="_blank" rel="noopener noreferrer">Book Couple Pilates <ArrowIcon /></a>
          <a className="text-link" href="mailto:hello@movelle.ph?subject=Duet%20Pilates%20enquiry">Enquire about Duet <ArrowIcon /></a>
        </article>
        <article>
          <p className="eyebrow">WE’RE HERE TO HELP</p>
          <h2>Not sure where <em>to start?</em></h2>
          <p>Tell us about your experience and what you are looking for. We can help you choose a practice and understand which package applies to your preferred class.</p>
          <a className="text-link" href="mailto:hello@movelle.ph?subject=Help%20choosing%20a%20class">Ask our team <ArrowIcon /></a>
          <p>Already have a booking? Open Rezerv, select My Bookings and sign in with the account you used to reserve your session.</p>
          <a className="text-link" href={rezervAccountUrl} target="_blank" rel="noopener noreferrer">Open Rezerv <ArrowIcon /></a>
        </article>
      </section>

      <section className="home-faq section">
        <div><p className="eyebrow">BEFORE YOUR VISIT</p><h2>A little more<br /><em>to know.</em></h2></div>
        <div className="faq-list">
          <details><summary>How do I book a class?</summary><div className="faq-answer"><p>Choose a published session in the schedule, or open a class from our Classes page. Continue on Rezerv and sign in to review the session and complete your reservation. If credits are required, purchase a package eligible for that class using the same account.</p><Link href="/packages">Explore packages →</Link></div></details>
          <details><summary>Where do I book Private or Couple Pilates?</summary><div className="faq-answer"><p>Private Class 1:1 and Couple Pilates are listed as classes in Rezerv. Open their class listings to explore published sessions. Duet sessions remain available by enquiry.</p><Link href="/classes">Explore classes and sessions →</Link></div></details>
          <details><summary>What if no sessions appear?</summary><div className="faq-answer"><p>Check another date and review the filters. A class listing or package does not mean a session has been scheduled for every date. If no suitable session appears, contact hello@movelle.ph before purchasing a package for a specific date.</p></div></details>
          <details><summary>How do I manage or cancel my booking?</summary><div className="faq-answer"><p>Open Rezerv, select My Bookings and sign in with the same account you used to reserve. Review the booking and cancellation terms before making changes, or contact our team if you need assistance.</p><Link href="/booking-terms">Read booking and cancellation terms →</Link></div></details>
          <details><summary>I’m new to Pilates. Can you help me choose?</summary><div className="faq-answer"><p>Yes. Contact our team before booking to discuss your experience and goals, and explore an appropriate starting point.</p></div></details>
          <details><summary>What should I bring?</summary><div className="faq-answer"><p>Wear comfortable clothing that lets you move freely and bring grip socks, as listed in our current Rezerv class guidance. Check the requirements shown for your chosen session before visiting.</p></div></details>
          <details><summary>Where is Movelle Studio?</summary><div className="faq-answer"><p>{address}.</p><Link href="/contact">View our location and directions →</Link></div></details>
        </div>
      </section>
    </PageShell>
  );
}
