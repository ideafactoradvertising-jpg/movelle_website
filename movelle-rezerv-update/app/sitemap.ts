import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about', '/classes', '/packages', '/book-a-class', '/contact', '/booking-terms', '/privacy-policy'];
  return routes.map(path => ({ url: `https://www.movelle.ph${path}` }));
}
