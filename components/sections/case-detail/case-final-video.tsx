import { CaseItem } from '@/types/case';
import { Section } from '@/components/ui/section';
import { ResponsiveVideo } from '@/components/media/responsive-video';

interface Props {
  item: CaseItem;
}

export function CaseFinalVideo({ item }: Props) {
  return (
    <Section>
      <h2>Финальный ролик</h2>
      <ResponsiveVideo
        src={item.finalVideoUrl}
        poster={item.coverImage}
        title={item.title}
        placeholderNote="Видео в полном качестве будет добавлено в финальной версии кейса."
      />
    </Section>
  );
}
