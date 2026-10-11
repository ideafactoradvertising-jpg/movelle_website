import type { ReactNode } from 'react';
import StudioScene from './studio-scene';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ArrowIcon from '@/components/arrow-icon';

type Feature={number:string;eyebrow:string;title:string;text:string};
type Props={eyebrow:string;title:ReactNode;intro:string;features:Feature[];image?:string;imageAlt?:string;note?:string;ctaLabel?:string;ctaHref?:string};

export default function InnerPage({eyebrow,title,intro,features,image='/studio.png',imageAlt='Warm, sunlit Pilates studio concept',note,ctaLabel='Enquire with Movelle',ctaHref='mailto:hello@movelle.ph'}:Props){
 return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main" className="inner-page"><section className="inner-hero"><div className="inner-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div><div className="inner-hero-image"><StudioScene kind={image.includes("details")?"details":"reception"}/><span className="image-caption">STUDIO CONCEPT</span></div></section>{features.length>0&&<section className="inner-features section">{features.map(item=><article key={item.number}><span>{item.number}</span><div><p className="eyebrow">{item.eyebrow}</p><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</section>}{note&&<section className="inner-note section"><p className="eyebrow">A NOTE FROM MOVELLE</p><h2>{note}</h2><a className="button" href={ctaHref}>{ctaLabel} <ArrowIcon/></a></section>}</main><Footer/></>
}
