import { contactChannels } from '@/data/contacts';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

export function ContactChannels() {
  return (
    <Section>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {contactChannels.map((item) => (
          <Card key={item.label}>
            <h3 style={{ marginTop: 0 }}>{item.label}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>{item.value}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
