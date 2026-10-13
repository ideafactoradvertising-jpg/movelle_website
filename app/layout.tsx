import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: {default:'MOVELLE STUDIO — Move well. Live better.',template:'%s — Movelle Studio'},
  description: 'A considered approach to movement. Discover Movelle Studio, a boutique movement studio for Pilates, yoga and mindful wellness in Makati, Philippines.',
  metadataBase: new URL('https://www.movelle.ph'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {title: 'MOVELLE STUDIO', description: 'Move well. Live better.', type: 'website'},
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}
