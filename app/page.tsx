import ArrowIcon from '@/components/arrow-icon';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { address } from '@/components/content';
import StudioScene from '@/components/studio-scene';

const classes = [
  {
    n: '01',
    title: 'Reformer Pilates',
    text: 'Small-group Reformer sessions focused on strength, control, mobility, and intentional movement.',
    tag: 'STRENGTH · CONTROL',
  },
  {
    n: '02',
    title: 'Cadillac Pilates',
    text: 'A more personalized Pilates experience using the Cadillac apparatus for supported, controlled movement.',
    tag: 'SUPPORT · CONTROL',
  },
  {
    n: '03',
    title: 'Red Light Therapy Pilates',
    text: 'Our signature Movelle experience pairs intentional Pilates movement with red light therapy. Red light therapy may support collagen production and skin health while complementing recovery and overall wellness, bringing movement and self-care together in one elevated session.',
    tag: 'THE MOVELLE SIGNATURE',
  },
  {
    n: '04',
    title: 'Pre & Postnatal Pilates',
    text: 'Thoughtful movement designed to support women through pregnancy and their return to movement after birth.',
    tag: 'THOUGHTFUL SUPPORT',
  },
  {
    n: '05',
    title: 'Pilates for Scoliosis',
    text: 'Individualized, movement-focused sessions with attention to alignment, control, and each client’s unique needs.',
    tag: 'PERSONAL ATTENTION',
  },
  {
    n: '06',
    title: 'Yoga',
    text: 'A space to slow down, breathe, stretch, strengthen, and reconnect.',
    tag: 'BALANCE · CONNECTION',
  },
];

const benefits = [
  {
    title: 'Strength & control',
    text: 'Practise purposeful movement with an emphasis on strength, stability and control.',
  },
  {
    title: 'Mobility & flexibility',
    text: 'Explore your range of movement through a considered combination of stretching and strengthening.',
  },
  {
    title: 'Balance & coordination',
    text: 'Develop a more connected practice through movements that challenge balance and coordination.',
  },
  {
    title: 'Body awareness',
    text: 'Make time to notice your breath, alignment and the way your body moves.',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        <section className="hero" id="home">
          <Image
            src="/hero-warm.png"
            alt="Movelle studio concept with branded silver reformers and taupe upholstery"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1>Move well.<br /><em>Live better.</em></h1>
            <p className="hero-description">
              A boutique Pilates studio in Makati, with thoughtful guidance
              and personal attention.
            </p>
            <a className="button" href="/classes">
              Explore classes <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="intro section" id="about">
          <div>
            <p className="eyebrow">WELCOME TO MOVELLE</p>
            <h2>Movement with <em>intention.</em></h2>
          </div>
          <div className="intro-copy">
            <p>
              Movelle is a boutique movement studio built around a more
              personal experience, with private, duet and small-group sessions.
              A space to move with intention, recharge, connect and belong.
            </p>
            <a className="text-link" href="/about">
              About Movelle <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="classes section" id="classes">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A PRACTICE FOR YOU</p>
              <h2>Find your <em>practice.</em></h2>
            </div>
            <p>
              Thoughtful movement.<br />
              A stronger connection to yourself.
            </p>
          </div>

          <div className="class-grid">
            {classes.map(c => (
              <article className="class-card" key={c.n}>
                <span className="class-number">{c.n}</span>
                <p className="eyebrow">{c.tag}</p>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <a className="text-link" href="/book-a-class">
                  Enquire about classes <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <p className="draft-note">
            <a href="/classes">
              Explore 5 more classes &amp; experiences →
            </a>
          </p>
        </section>

        <section className="pilates-benefits section" id="benefits">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BENEFITS OF PILATES</p>
              <h2>
                Movement that supports<br />
                <em>everyday life.</em>
              </h2>
            </div>
            <p>
              A practice centred on how you move and how you feel.
            </p>
          </div>

                   <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit.title}>
                <span
                  className={`benefit-illustration benefit-illustration-${index}`}
                  aria-hidden="true"
                />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio" id="studio">
          <div className="studio-photo">
            <StudioScene kind="reception" />
            <span className="image-caption">
              STUDIO INSPIRATION · CONCEPT IMAGE
            </span>
          </div>
          <div className="studio-copy">
            <p className="eyebrow">THE STUDIO</p>
            <h2>Your space to <em>reset.</em></h2>
            <p>
              Warmth, light and room to breathe. A thoughtfully imagined
              space for movement, connection and a welcome pause in your day.
            </p>
            <a className="text-link" href="/about">
              Get to know us <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="home-faq section" id="faq">
          <div>
            <p className="eyebrow">BEFORE YOUR VISIT</p>
            <h2>A little more<br /><em>to know.</em></h2>
            <p className="faq-intro">
              Frequently asked questions about finding your practice at Movelle.
            </p>
          </div>

          <div className="faq-list">
            <details>
              <summary>I’m new to Pilates. Where should I start?</summary>
              <div className="faq-answer">
                <p>
                  Start by telling us about your experience and what you are
                  looking for. Contact our team to discuss the class or session
                  that may suit you.
                </p>
                <a href="/book-a-class">Enquire about your first session →</a>
              </div>
            </details>

            <details>
              <summary>
                What is the difference between Reformer, Cadillac and Mat Pilates?
              </summary>
              <div className="faq-answer">
                <p>
                  Reformer Pilates uses a moving carriage and spring resistance.
                  Cadillac Pilates uses a framed apparatus with springs and
                  attachments for supported movement. Mat Pilates is practised
                  on a mat, using body weight and sometimes small accessories.
                </p>
                <a href="/classes">Explore our classes →</a>
              </div>
            </details>

            <details>
              <summary>Do you offer private and duet sessions?</summary>
              <div className="faq-answer">
                <p>
                  Yes. Private Pilates offers one-on-one guidance, while duet
                  sessions are designed for two people. Contact us to discuss
                  your goals and availability.
                </p>
                <a href="/book-a-class">Enquire about a session →</a>
              </div>
            </details>

            <details>
              <summary>How do I enquire about a class?</summary>
              <div className="faq-answer">
                <p>
                  Email hello@movelle.ph with the class you are interested in.
                  Our team can help with availability and the next steps.
                </p>
                <a href="mailto:hello@movelle.ph?subject=Class%20enquiry">
                  Email Movelle →
                </a>
              </div>
            </details>

            <details>
              <summary>Where is Movelle Studio?</summary>
              <div className="faq-answer">
                <p>You’ll find us at {address}.</p>
                <a href="/contact">View our location and directions →</a>
              </div>
            </details>
          </div>
        </section>

        <section className="booking section" id="booking">
          <p className="eyebrow">MAKE TIME FOR YOU</p>
          <h2>Begin your <em>practice.</em></h2>
          <a
            className="button light"
            href="mailto:hello@movelle.ph?subject=Class%20enquiry"
          >
            Enquire about a class <ArrowIcon />
          </a>
          <p>Get in touch to find your class and plan your visit.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
