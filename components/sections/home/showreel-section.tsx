import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

export function ShowreelSection() {
  return (
    <Section>
      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <SectionHeading
          eyebrow="Showreel"
          title="Шоурил"
          description="Отдельный ролик будет добавлен в финальной версии. В прототипе сохранён компактный teaser-блок."
        />
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Button href="/cases">Смотреть кейсы</Button>
          <Button href="/contacts">Запросить пример формата</Button>
        </div>
      </div>
    </Section>
  );
}
