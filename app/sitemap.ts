import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/classes', '/packages', '/instructors', '/book-a-class', '/contact'];
  return routes.map(path => ({ url: `https://www.movelle.ph${path || '/'}` }));
}
