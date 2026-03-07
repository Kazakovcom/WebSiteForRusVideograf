import { CaseItem } from '@/types/case';
import { Section } from '@/components/ui/section';

interface CaseMetaProps {
  item: CaseItem;
}

export function CaseMeta({ item }: CaseMetaProps) {
  return (
    <Section>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div className="card"><strong>Год</strong><p className="muted">{item.year}</p></div>
        <div className="card"><strong>Город</strong><p className="muted">{item.city}</p></div>
        <div className="card"><strong>Тип</strong><p className="muted">{item.category}</p></div>
      </div>
    </Section>
  );
}
