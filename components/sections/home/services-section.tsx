import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { getServices } from '@/lib/content/get-home-content';

export async function ServicesSection() {
  const services = await getServices();

  return (
    <Section>
      <SectionHeading eyebrow="Services" title="Услуги" description="Контент подтягивается из content/services.md" />
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {services.map((service) => (
          <Card key={service.id}>
            <h3 style={{ marginTop: 0 }}>{service.title}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
