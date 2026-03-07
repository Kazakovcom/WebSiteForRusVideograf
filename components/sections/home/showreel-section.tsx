import { ShowreelPlayer } from '@/components/media/showreel-player';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

export function ShowreelSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Showreel"
        title="Шоурил"
        description="Секция намеренно в placeholder-state до получения финального showreel."
      />
      <ShowreelPlayer
        poster="/media/placeholders/hero-poster.svg"
        note="TODO: вставить реальный showreel URL, постер и длительность после передачи материалов."
      />
    </Section>
  );
}
