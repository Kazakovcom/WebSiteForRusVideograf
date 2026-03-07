import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { getCases } from '@/lib/content/get-cases';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cases = await getCases();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.baseUrl}/`, lastModified: new Date() },
    { url: `${siteConfig.baseUrl}/cases`, lastModified: new Date() },
    { url: `${siteConfig.baseUrl}/contacts`, lastModified: new Date() }
  ];

  const caseRoutes = cases.map((item) => ({
    url: `${siteConfig.baseUrl}/cases/${item.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...caseRoutes];
}
