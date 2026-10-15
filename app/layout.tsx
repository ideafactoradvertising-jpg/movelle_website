import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const description =
  'Discover Reformer, Cadillac, Mat and Red Light Therapy Pilates at Movelle Studio in Makati City. Explore small-group, private and duet sessions.';

const studioStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  '@id': 'https://www.movelle.ph/#studio',
  name: 'Movelle Studio',
  url: 'https://www.movelle.ph',
  description,
  email: 'hello@movelle.ph',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2F, 2887 Pertierra, Poblacion',
    addressLocality: 'Makati City',
    addressRegion: 'Metro Manila',
    postalCode: '1210',
    addressCountry: 'PH',
  },
};

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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NL6XSGP4');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NL6XSGP4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <script
          id="movelle-studio-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(studioStructuredData).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
