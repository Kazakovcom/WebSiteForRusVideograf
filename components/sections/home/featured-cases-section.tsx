import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { LazyMedia } from '@/components/media/lazy-media';
import { getCases } from '@/lib/content/get-cases';

export async function FeaturedCasesSection() {
  const cases = await getCases();

  return (
    <Section>
      <SectionHeading
        eyebrow="Featured Cases"
        title="Избранные кейсы"
        description="Временные карточки: заменить после получения реальных кейсов."
      />
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {cases.slice(0, 3).map((item) => (
          <Card key={item.slug}>
            <LazyMedia src={item.coverImage} alt={item.title} width={700} height={420} />
            <h3>{item.title}</h3>
            <p className="muted">{item.shortDescription}</p>
            <Link href={`/cases/${item.slug}`} className="button">
              Открыть кейс
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
