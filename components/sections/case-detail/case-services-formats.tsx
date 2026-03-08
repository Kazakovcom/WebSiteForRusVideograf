import { CaseItem } from '@/types/case';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

interface Props {
  item: CaseItem;
}

export function CaseServicesFormats({ item }: Props) {
  return (
    <Section>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <Card>
          <h3>Services used</h3>
          <ul>{item.servicesUsed.map((service) => <li key={service}>{service}</li>)}</ul>
        </Card>
        <Card>
          <h3>Formats delivered</h3>
          <ul>{item.formatsDelivered.map((format) => <li key={format}>{format}</li>)}</ul>
        </Card>
      </div>
    </Section>
  );
}
