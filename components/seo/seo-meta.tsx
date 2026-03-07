import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';

export function getPageMetadata(title?: string, description?: string): Metadata {
  return buildMetadata(title, description);
}
