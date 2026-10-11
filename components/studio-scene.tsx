import Image from 'next/image';
const scenes={room:'/studio-room.png',reception:'/lounge-styled.png',details:'/details-straps.png',contact:'/contact-entry.png',about:'/about-calm.png'};
export default function StudioScene({kind}:{kind:keyof typeof scenes}){return <div className={'studio-scene scene-'+kind}><Image src={scenes[kind]} alt={'Movelle '+kind+' studio concept'} fill sizes="(max-width:760px) 100vw, 60vw"/></div>}
