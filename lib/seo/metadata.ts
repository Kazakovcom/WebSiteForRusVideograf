import { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export function buildMetadata(title?: string, description?: string): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    title: pageTitle,
    description: description ?? siteConfig.description,
    openGraph: {
      title: pageTitle,
      description: description ?? siteConfig.description,
      url: siteConfig.baseUrl,
      siteName: siteConfig.name,
      type: 'website'
    }
  };
}
