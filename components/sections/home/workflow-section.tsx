import { workflowSteps } from '@/data/workflow';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

export function WorkflowSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Workflow" title="Как строится работа" />
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {workflowSteps.map((step) => (
          <Card key={step.title}>
            <h3 style={{ marginTop: 0 }}>{step.title}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>{step.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
