import type { Metadata } from 'next';
import './globals.css';

const description =
  'Discover Reformer, Cadillac, Mat and Red Light Therapy Pilates at Movelle Studio in Makati City. Explore small-group, private and duet sessions.';

export const metadata: Metadata = {
  title: {
    default: 'Movelle Studio | Pilates in Makati',
    template: '%s | Movelle Studio',
  },
  description,
  metadataBase: new URL('https://www.movelle.ph'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Movelle Studio | Pilates in Makati',
    description,
    url: 'https://www.movelle.ph',
    siteName: 'Movelle Studio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
