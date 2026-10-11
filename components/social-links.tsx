// Official studio profiles supplied by Movelle.
const profiles: { name: string; url: string | null }[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/movelle.ph/' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61594254541702' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@movelle.ph' },
];
function SocialIcon({name}: {name: string}) {
 if(name === 'Instagram') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
 if(name === 'Facebook') return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 22v-9h3l.5-4H14V7c0-1.2.3-2 2-2h2V1.4C17.3 1.2 16.1 1 14.7 1 11.4 1 9 3 9 6.6V9H6v4h3v9h5Z"/></svg>;
 return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2c.4 2.3 1.7 3.7 4.4 4v3.4a9 9 0 0 1-4.4-1.3v7.4a6.2 6.2 0 1 1-5.3-6.1v3.5a2.8 2.8 0 1 0 1.9 2.6V2h3.4Z"/></svg>;
}
export default function SocialLinks() {
 return <section className="footer-social" aria-label="Movelle social media">
  <ul>{profiles.map(({name,url}) => <li key={name}>{url
   ? <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><SocialIcon name={name}/></a>
   : <span className="social-placeholder" role="img" aria-label={`${name} — link coming soon`} title={`${name} — link coming soon`}><SocialIcon name={name}/></span>
  }</li>)}</ul>
 </section>;
}
