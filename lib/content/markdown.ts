import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();

export async function readMarkdown(relativePath: string): Promise<string> {
  const absolutePath = path.join(root, relativePath);
  return fs.readFile(absolutePath, 'utf8');
}

export function getSections(markdown: string): Array<{ heading: string; body: string }> {
  const lines = markdown.split('\n');
  const sections: Array<{ heading: string; body: string }> = [];
  let currentHeading = 'root';
  let buffer: string[] = [];

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (buffer.length) {
        sections.push({ heading: currentHeading, body: buffer.join('\n').trim() });
      }
      currentHeading = line.replace(/^##\s+/, '').trim();
      buffer = [];
      continue;
    }
    if (line.startsWith('# ')) {
      continue;
    }
    buffer.push(line);
  }

  if (buffer.length) {
    sections.push({ heading: currentHeading, body: buffer.join('\n').trim() });
  }

  return sections.filter((section) => section.body.length > 0);
}

export function toBulletedList(sectionBody: string): string[] {
  return sectionBody
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => line.replace('- ', '').trim());
}

export function toParagraphs(sectionBody: string): string[] {
  return sectionBody
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('- '));
}
