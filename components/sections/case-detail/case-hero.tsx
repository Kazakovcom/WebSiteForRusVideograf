import { CaseItem } from '@/types/case';
import { LazyMedia } from '@/components/media/lazy-media';
import { Section } from '@/components/ui/section';

interface CaseHeroProps {
  item: CaseItem;
}

export function CaseHero({ item }: CaseHeroProps) {
  return (
    <Section>
      <p className="eyebrow">{item.category}</p>
      <h1 style={{ marginTop: 0 }}>{item.title}</h1>
      <p className="muted">{item.shortDescription}</p>
      <LazyMedia src={item.coverImage} alt={item.title} width={1200} height={700} />
    </Section>
  );
}
