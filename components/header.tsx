'use client';
import ArrowIcon from '@/components/arrow-icon';
import { useState, useEffect } from 'react';
const links = [['Home','/'],['About','/about'],['Classes','/classes'],['Instructors','/instructors'],['Packages','/packages'],['Contact','/contact']];
export default function Header() {
 const [open,setOpen] = useState(false);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
 return <header className="header"><a className="brand" href="/" aria-label="Movelle Studio home"><img src="/brand/website-logo.png" alt="Movelle Studio" /></a><a className="button mobile-book" href="/book-a-class">Book a Class</a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span className="menu-icon" aria-hidden="true"><span/><span/></span></button><nav id="navigation" aria-label="Main navigation" className={open?'navigation open':'navigation'}>{links.map(([label,href])=><a href={href} key={label} onClick={()=>setOpen(false)}>{label}</a>)}<a className="button small" href="/book-a-class" onClick={()=>setOpen(false)}>Book a Class <ArrowIcon/></a></nav></header>
}
