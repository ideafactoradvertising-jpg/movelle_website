import type { Metadata } from 'next';
import Script from 'next/script';
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
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PRX1VVS0TD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PRX1VVS0TD');
          `}
        </Script>
      </body>
    </html>
  );
}
