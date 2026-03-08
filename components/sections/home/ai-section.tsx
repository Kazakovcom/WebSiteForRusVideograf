import { aiDisclaimer, aiUseCases } from '@/data/ai';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

export function AiSection() {
  return (
    <Section>
      <SectionHeading eyebrow="AI" title="AI-assisted postproduction" description={aiDisclaimer} />
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {aiUseCases.map((item) => (
          <Card key={item.title}>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
