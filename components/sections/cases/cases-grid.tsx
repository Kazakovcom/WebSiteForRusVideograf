import Link from 'next/link';
import { CaseItem } from '@/types/case';
import { Card } from '@/components/ui/card';
import { LazyMedia } from '@/components/media/lazy-media';

interface CasesGridProps {
  items: CaseItem[];
}

export function CasesGrid({ items }: CasesGridProps) {
  return (
    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
      {items.map((item) => (
        <Card key={item.slug}>
          <LazyMedia src={item.coverImage} alt={item.title} />
          <h3>{item.title}</h3>
          <p className="muted">{item.category} · {item.year}</p>
          <p className="muted">{item.shortDescription}</p>
          <Link href={`/cases/${item.slug}`} className="button">
            Открыть
          </Link>
        </Card>
      ))}
    </div>
  );
}
