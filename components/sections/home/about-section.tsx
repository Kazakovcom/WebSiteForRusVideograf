import { aboutNote } from '@/data/home';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { LazyMedia } from '@/components/media/lazy-media';
import { getAboutParagraphs } from '@/lib/content/get-home-content';

export async function AboutSection() {
  const paragraphs = await getAboutParagraphs();

  return (
    <Section>
      <SectionHeading eyebrow="About" title="О Рустаме" />
      <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
        <div style={{ maxWidth: 520 }}>
          <LazyMedia src="/media/placeholders/portrait-placeholder.svg" alt="Портрет" width={700} height={500} />
        </div>
        <p className="muted" style={{ margin: 0 }}>{aboutNote}</p>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} style={{ margin: 0 }}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
