import Link from 'next/link';
import { Section } from '@/components/ui/section';

export function CaseNextPrev() {
  return (
    <Section>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href="/cases" className="button">← Все кейсы</Link>
        <Link href="/contacts" className="button">Обсудить похожий проект</Link>
      </div>
    </Section>
  );
}
