import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/page-shell';
import { offerings } from '@/components/content';
import ArrowIcon from '@/components/arrow-icon';
import { getRezervClassLink } from '@/components/rezerv-links';

export const metadata: Metadata = {
  alternates: { canonical: '/classes' },
  title: 'Classes & Experiences',
  description:
    'Explore Reformer, Cadillac, Mat and Red Light Therapy Pilates, plus yoga, private and duet sessions, and personalised movement experiences.',
};

const photos: Partial<Record<string, { file: string; alt: string }>> = {
  'Reformer Pilates': { file: 'reformer-pilates', alt: 'Small-group Reformer Pilates with an instructor guiding participants through a bridge exercise' },
  'Cadillac Pilates': { file: 'cadillac-pilates', alt: 'Instructor guiding a participant through a leg exercise on a Cadillac Pilates apparatus' },
  'Red Light Therapy Pilates': { file: 'red-light-pilates', alt: 'Participant using Reformer straps beside a red light panel' },
  'Mat Pilates': { file: 'mat-pilates', alt: 'Participant lying on a Pilates mat with knees raised for a controlled movement exercise' },
  'Private Pilates': { file: 'private-pilates', alt: 'Instructor providing individual guidance during a seated Reformer Pilates exercise' },
  'Couple Pilates': { file: 'duet-pilates', alt: 'Two participants practising seated Reformer Pilates with instructor guidance' },
  'Duet Pilates': { file: 'duet-pilates', alt: 'Two participants practising seated Reformer Pilates with instructor guidance' },
  'Pre & Postnatal Pilates': { file: 'prenatal-pilates', alt: 'Instructor supporting a participant during a seated Pilates movement on a Reformer' },
  'Pilates for Scoliosis': { file: 'scoliosis-pilates', alt: 'Instructor guiding a seated participant through an arm movement on a Reformer' },
  'Yoga': { file: 'yoga', alt: 'Participants seated cross-legged on yoga mats in a sunlit studio' },
  'Private Studio Rental': { file: 'studio-rental', alt: 'Sunlit movement studio arranged with Reformers, exercise mats, blocks and Pilates balls' },
  'Celebrate With Movelle': { file: 'celebrate-movelle', alt: 'Friends gathering in a Pilates studio decorated with flowers for a celebration' },
};

export default function Classes() {
  return (
    <PageShell>
      <section className="inner-title section">
        <p className="eyebrow">CLASSES &amp; EXPERIENCES</p>
        <h1>
          Your way
          <br />
          to <em>move well.</em>
        </h1>
        <p>
          Private, duet and small-group experiences. Thoughtful movement,
          personal attention and room to find your own rhythm. Explore our{' '}
          <Link href="/packages" style={{ textDecoration: 'underline' }}>
            packages
          </Link>{' '}
          or{' '}
          <Link href="/contact" style={{ textDecoration: 'underline' }}>
            contact us
          </Link>{' '}
          for help choosing.
        </p>
      </section>

      <section className="offering-grid section">
        {offerings.map((offering, index) => {
          const photo = photos[offering.title];
          const bookingHref = getRezervClassLink(offering.title);
          const needsEnquiry = !bookingHref;
          const href = bookingHref ?? 'mailto:hello@movelle.ph?subject=' + encodeURIComponent(offering.title + ' enquiry');
          const label = needsEnquiry ? 'Enquire' : offering.title === 'Private Pilates' ? 'Book a Session' : 'Book a Class';

          return (
            <article key={offering.title}>
              {photo && (
                <Image
                  className="offering-photo"
                  src={`/classes/${photo.file}.webp`}
                  alt={`${photo.alt} — AI-generated concept image`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 760px) 86vw, (max-width: 1000px) 42vw, 28vw"
                />
              )}

              <p className="eyebrow">
                {String(index + 1).padStart(2, '0')} · {offering.group}
              </p>
              <h2>{offering.title}</h2>
              <p>{offering.text}</p>

              {needsEnquiry ? (
                <a
                  className="text-link"
                  href={href}
                  aria-label={`Enquire about ${offering.title}`}
                >
                  {label} <ArrowIcon />
                </a>
              ) : (
                <a
                  className="text-link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${offering.title} on Rezerv (opens in a new tab)`}
                >
                  {label} <ArrowIcon />
                </a>
              )}
            </article>
          );
        })}

        <p className="offering-photo-note">
          Class photographs are AI-generated concept images.
        </p>
      </section>

      <figure className="accessory-feature">
        <img
          src="/accessories.png"
          alt="Movelle branded cream and taupe Pilates blocks, ball, mat and ring — concept image"
        />
        <figcaption>STUDIO ACCESSORIES · CONCEPT IMAGE</figcaption>
      </figure>
    </PageShell>
  );
}
