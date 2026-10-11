import ArrowIcon from '@/components/arrow-icon';
import SocialLinks from '@/components/social-links';

export default function Footer(){
 return <footer className="footer"><section className="footer-details" aria-label="Studio information">
 <a className="brand footer-brand" href="/" aria-label="Movelle Studio home"><img src="/brand/website-logo.png" alt="Movelle Studio"/></a><SocialLinks/>
 <section><h2>Visit Movelle</h2><address>2887 Pertierra St., Makati City, 1210 Metro Manila, Philippines</address><a className="footer-detail-link" href="https://www.google.com/maps/place/Movelle+Studio/@14.5693826,121.0295673,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c957579f58e1:0x12421354678b8c23!8m2!3d14.5693826!4d121.0295673!16s%2Fg%2F11zyrqf6dp" target="_blank" rel="noopener noreferrer">Get directions <ArrowIcon/></a></section>
 <section className="footer-reach"><h2>Get in touch</h2><a className="footer-detail-link" href="mailto:hello@movelle.ph">hello@movelle.ph <ArrowIcon/></a></section>
 </section><div><span>© {new Date().getFullYear()} Movelle Studio</span></div></footer>
}
