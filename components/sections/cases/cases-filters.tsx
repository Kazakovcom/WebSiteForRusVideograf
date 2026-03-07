import { Badge } from '@/components/ui/badge';

const filters = ['All', 'Commercial', 'Interview/Podcast', 'Short-form'];

export function CasesFilters() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
      {filters.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}
