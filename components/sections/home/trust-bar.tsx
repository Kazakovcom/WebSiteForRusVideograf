import { trustPills } from '@/data/home';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';

export function TrustBar() {
  return (
    <Section>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
        {trustPills.map((pill) => (
          <Badge key={pill}>{pill}</Badge>
        ))}
      </div>
    </Section>
  );
}
