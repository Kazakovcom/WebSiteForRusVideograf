import { CaseItem } from '@/types/case';
import { Section } from '@/components/ui/section';
import { MediaGallery } from '@/components/media/media-gallery';

interface Props {
  item: CaseItem;
}

export function CaseGallery({ item }: Props) {
  return (
    <Section>
      <h2>Галерея</h2>
      <MediaGallery items={item.gallery} title={item.title} />
    </Section>
  );
}
