import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

export function ContactsHero() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Контакты"
        title="Связаться"
        description="Выберите удобный канал — на этом этапе доступны предпросмотровые реквизиты."
      />
    </Section>
  );
}
