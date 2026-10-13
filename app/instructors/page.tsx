import type {Metadata} from 'next';
import PageShell from '@/components/page-shell';
export const metadata:Metadata={alternates:{canonical:'/instructors'},title:'Instructors',description:'Meet the Movelle team. Instructor profiles coming soon.'};
export default function Instructors(){return <PageShell><section className="inner-title section"><p className="eyebrow">THE PEOPLE BEHIND YOUR PRACTICE</p><h1>Thoughtful guidance.<br/><em>Personal attention.</em></h1><p>Our instructors’ photos, profiles and teaching specialties will be shared soon.</p><a className="text-link" href="/classes">Explore our classes</a></section></PageShell>}
