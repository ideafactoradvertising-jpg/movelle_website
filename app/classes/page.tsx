import type { Metadata } from 'next';
import Image from 'next/image';
import PageShell from '@/components/page-shell';
import { offerings } from '@/components/content';
import ArrowIcon from '@/components/arrow-icon';

export const metadata: Metadata = {
  alternates: { canonical: '/classes' },
  title: 'Classes & Experiences',
  description: 'Explore Reformer, Cadillac, Mat and Red Light Therapy Pilates, plus yoga, private and duet sessions, and personalised movement experiences.',
};

const photos = ['reformer-pilates', 'cadillac-pilates', 'red-light-pilates', 'mat-pilates', 'private-pilates', 'duet-pilates', 'prenatal-pilates', 'scoliosis-pilates', 'yoga', 'studio-rental', 'celebrate-movelle'];
const enquiryOnly = new Set(['Private Studio Rental', 'Celebrate With Movelle', 'Pre & Postnatal Pilates', 'Pilates for Scoliosis']);
const personalSessions = new Set(['Cadillac Pilates', 'Private Pilates', 'Duet Pilates']);

export default function Classes() {
  return (
    <PageShell>
      <section className="inner-title section">
        <p className="eyebrow">CLASSES &amp; EXPERIENCES</p>
        <h1>Your way<br />to <em>move well.</em></h1>
        <p>Private, duet and small-group experiences. Thoughtful movement, personal attention and room to find your own rhythm.</p>
      </section>
      <section className="offering-grid section">
        {offerings.map((offering, index) => {
          const needsEnquiry = enquiryOnly.has(offering.title);
          const href = needsEnquiry
            ? 'mailto:hello@movelle.ph?subject=' + encodeURIComponent(offering.title + ' enquiry')
            : '/book-a-class#schedule';
          const label = needsEnquiry ? 'Enquire' : personalSessions.has(offering.title) ? 'Book a Session' : 'Book a Class';
          return (
            <article key={offering.title}>
              <Image className="offering-photo" src={`/classes/${photos[index]}.webp`} alt={`${offering.title} — AI-generated concept photograph`} width={1200} height={900} sizes="(max-width: 760px) 86vw, (max-width: 1000px) 42vw, 28vw" />
              <p className="eyebrow">{String(index + 1).padStart(2, '0')} · {offering.group}</p>
              <h2>{offering.title}</h2>
              <p>{offering.text}</p>
              <a className="text-link" href={href} aria-label={`${label}: ${offering.title}`}>{label} <ArrowIcon /></a>
            </article>
          );
        })}
        <p className="offering-photo-note">Class photographs are AI-generated concept images.</p>
      </section>
      <figure className="accessory-feature">
        <img src="/accessories.png" alt="Movelle branded cream and taupe Pilates blocks, ball, mat and ring" />
        <figcaption>STUDIO ACCESSORIES · CONCEPT IMAGE</figcaption>
      </figure>
    </PageShell>
  );
}
