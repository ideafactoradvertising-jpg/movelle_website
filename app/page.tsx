import ArrowIcon from '@/components/arrow-icon';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {story,philosophy} from '@/components/content';
import StudioScene from '@/components/studio-scene';
const classes = [
  {
    "n": "01",
    "title": "Reformer Pilates",
    "text": "Small-group Reformer sessions focused on strength, control, mobility, and intentional movement.",
    "tag": "STRENGTH · CONTROL"
  },
  {
    "n": "02",
    "title": "Cadillac Pilates",
    "text": "A more personalized Pilates experience using the Cadillac apparatus for supported, controlled movement.",
    "tag": "SUPPORT · CONTROL"
  },
  {
    "n": "03",
    "title": "Red Light Therapy Pilates",
    "text": "Our signature Movelle experience pairs intentional Pilates movement with red light therapy. Red light therapy may support collagen production and skin health while complementing recovery and overall wellness, bringing movement and self-care together in one elevated session.",
    "tag": "THE MOVELLE SIGNATURE"
  },
  {
    "n": "04",
    "title": "Pre & Postnatal Pilates",
    "text": "Thoughtful movement designed to support women through pregnancy and their return to movement after birth.",
    "tag": "THOUGHTFUL SUPPORT"
  },
  {
    "n": "05",
    "title": "Pilates for Scoliosis",
    "text": "Individualized, movement-focused sessions with attention to alignment, control, and each client’s unique needs.",
    "tag": "PERSONAL ATTENTION"
  },
  {
    "n": "06",
    "title": "Yoga",
    "text": "A space to slow down, breathe, stretch, strengthen, and reconnect.",
    "tag": "BALANCE · CONNECTION"
  }
];
export default function Home(){return <>
<a className="skip-link" href="#main">Skip to content</a><Header/>
<main id="main">
<section className="hero" id="home"><Image src="/hero-warm.png" alt="Movelle studio concept with branded silver reformers and taupe upholstery" fill priority sizes="100vw" className="hero-image"/><div className="hero-shade"/><div className="hero-content"><h1>Move well.<br/><em>Live better.</em></h1><p className="hero-description">Move with intention.<br/>Feel stronger. Find your calm.<br/>A space to connect and belong.</p><a className="button" href="/classes">Find your movement <ArrowIcon/></a></div></section>
<section className="intro section" id="about"><div><p className="eyebrow">WELCOME TO MOVELLE</p><h2>Movement with intention.<br/><em>Living with ease.</em></h2></div><div className="intro-copy"><p>{story[1]}</p><p>{story[0]}</p><a className="text-link" href="/about">About Movelle <ArrowIcon/></a></div></section>
<section className="classes section" id="classes"><div className="section-heading"><div><p className="eyebrow">A PRACTICE FOR YOU</p><h2>Find your <em>flow.</em></h2></div><p>Thoughtful movement.<br/>A stronger connection to yourself.</p></div><div className="class-grid">{classes.map(c=><article className="class-card" key={c.n}><span className="class-number">{c.n}</span><p className="eyebrow">{c.tag}</p><h3>{c.title}</h3><p>{c.text}</p><a className="text-link" href="/book-a-class">Enquire about classes <ArrowIcon/></a></article>)}</div><p className="draft-note"><a href="/classes">Explore 5 more classes & experiences →</a></p></section>
<section className="intro section instructors" id="instructors"><div><p className="eyebrow">THE PEOPLE BEHIND YOUR PRACTICE</p><h2>Thoughtful guidance.<br/><em>Personal attention.</em></h2></div><div className="intro-copy"><p>Our instructor profiles are coming soon.</p><a className="text-link" href="/instructors">Meet the team <ArrowIcon/></a></div></section>
<section className="intro section packages" id="packages"><div><p className="eyebrow">MAKE MOVEMENT A HABIT</p><h2>A practice that<br/><em>fits your life.</em></h2></div><div className="intro-copy"><p>Our packages and pricing are on their way. Contact us to learn more about practising at Movelle.</p><a className="text-link" href="mailto:hello@movelle.ph?subject=Package%20enquiry">Enquire about packages <ArrowIcon/></a></div></section>
<section className="experience section" id="experience"><p className="eyebrow">THE MOVELLE EXPERIENCE</p><h2>Less rush.<br/><em>More presence.</em></h2><div className="experience-grid"><article><span>01 /</span><h3>Thoughtful guidance</h3><p>A considered approach that brings attention to the way you move.</p></article><article><span>02 /</span><h3>Room to breathe</h3><p>A calm setting to leave the everyday behind and focus on your practice.</p></article><article><span>03 /</span><h3>Movement that stays</h3><p>Strength, balance and awareness to carry with you beyond the studio.</p></article></div></section>
<section className="studio" id="studio"><div className="studio-photo"><StudioScene kind="reception"/><span className="image-caption">STUDIO INSPIRATION · CONCEPT IMAGE</span></div><div className="studio-copy"><p className="eyebrow">THE STUDIO</p><h2>Your space to <em>reset.</em></h2><p>Warmth. Light. A little quiet. A space imagined to make your practice feel like a welcome pause in your day.</p><a className="text-link" href="/about">Get to know us <ArrowIcon/></a></div></section>
<section className="philosophy section" id="philosophy"><div className="monogram"><img src="/brand/monogram.png" alt=""/></div><p className="eyebrow">OUR PHILOSOPHY</p><h2>Not just how you move.<br/><em>How you feel.</em></h2><p>{philosophy[2]}</p></section>

<section className="booking section" id="booking"><p className="eyebrow">MAKE TIME FOR YOU</p><h2>Your next chapter<br/>starts with <em>movement.</em></h2><a className="button light" href="mailto:hello@movelle.ph?subject=Class%20enquiry">Enquire about a class <ArrowIcon/></a><p>Online booking is coming soon. Say hello to learn more.</p></section>
</main><Footer/></>}
