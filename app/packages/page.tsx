import type {Metadata} from 'next';
import InnerPage from '@/components/inner-page';
export const metadata:Metadata={alternates:{canonical:'/packages'},title:'Packages',description:'Explore Pilates package options for your movement routine. Enquire about small-group, private and duet sessions.' };
export default function Packages(){return <InnerPage eyebrow="PACKAGES" title={<>A practice that<br/><em>fits your life.</em></>} intro="Our packages and pricing are coming soon. Get in touch to learn more about practising at Movelle." features={[]} image="/studio-details.png" imageAlt="Movelle branded reformer equipment concept" note="Make movement part of your everyday." ctaLabel="Enquire about packages" ctaHref="mailto:hello@movelle.ph?subject=Package%20enquiry"/>}
