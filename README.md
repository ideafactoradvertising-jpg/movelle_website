# Movelle Studio website

Source for the Movelle Studio website, built with Next.js and TypeScript and deployed at https://movelle-preview.vercel.app/.

## Local preview

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run typecheck
npm run build
```

## Pages and assets

Home, About, Classes, Instructors, Packages, Contact and Book a Class. Includes Montserrat body typography, approved founder portraits and biographies, the founders’ group photo, updated social and Google Maps links, and eleven AI-generated class concept photographs. Class and studio concept images are not documentary photographs of the premises.

## Launch items

Booking currently uses email enquiries; the booking platform must be connected when ready. Confirm package pricing, instructor profiles and opening information before launch. Preview metadata deliberately disables indexing in `app/layout.tsx`; enable indexing and configure https://movelle.ph canonical URLs, sitemap and robots at launch.

## Credentials and deployment

Do not commit `.env` files, `.vercel`, dependencies or generated builds. The `.gitignore` excludes these. Configure any required environment variables separately in Vercel. Connect this repository to the existing movelle-preview project when ready; pushing the configured production branch after connecting can trigger an automatic production deployment.

When connecting the GoDaddy domain, preserve Google Workspace MX and email-related DNS records.
