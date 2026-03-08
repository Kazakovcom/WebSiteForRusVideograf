import { finalCta } from '@/data/home';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function ContactCtaSection() {
  return (
    <Section>
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>{finalCta.title}</h2>
        <p className="muted">{finalCta.subtitle}</p>
        <Button href="/contacts">Перейти к контактам</Button>
      </div>
    </Section>
  );
}
