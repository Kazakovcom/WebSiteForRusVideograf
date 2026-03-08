import { heroContent } from '@/data/home';
import { servicesFallback } from '@/data/services';
import { faqFallback } from '@/data/faq';
import { FaqItem, ServiceItem } from '@/types/content';
import { getSections, readMarkdown, toParagraphs } from './markdown';

export async function getAboutParagraphs(): Promise<string[]> {
  const markdown = await readMarkdown('content/bio.md');
  const sections = getSections(markdown);
  const mediumSection = sections.find((section) => section.heading.includes('Средняя версия'));

  if (!mediumSection) return [];

  return toParagraphs(mediumSection.body);
}

export async function getServices(): Promise<ServiceItem[]> {
  const markdown = await readMarkdown('content/services.md');
  const sections = getSections(markdown).filter((section) => section.heading !== 'root');

  if (!sections.length) return servicesFallback;

  return sections.map((section, idx) => {
    const [first, ...rest] = toParagraphs(section.body);
    return {
      id: `service-${idx + 1}`,
      title: section.heading.replace(/^\d+\.\s*/, ''),
      description: [first, ...rest].filter(Boolean).join(' ')
    };
  });
}

export async function getFaq(): Promise<FaqItem[]> {
  const markdown = await readMarkdown('content/faq.md');
  const lines = markdown.split('\n');
  const items: FaqItem[] = [];
  let currentQuestion = '';
  let buffer: string[] = [];

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentQuestion && buffer.length > 0) {
        items.push({ question: currentQuestion, answer: buffer.join(' ').trim() });
      }
      currentQuestion = line.replace(/^##\s+/, '').trim();
      buffer = [];
      continue;
    }
    if (!line.startsWith('#')) {
      const cleaned = line.trim();
      if (cleaned.length > 0) buffer.push(cleaned);
    }
  }

  if (currentQuestion && buffer.length > 0) {
    items.push({ question: currentQuestion, answer: buffer.join(' ').trim() });
  }

  return items.length ? items : faqFallback;
}

export function getHero() {
  return heroContent;
}
