import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Accordion } from '@/components/ui/accordion';
import { getFaq } from '@/lib/content/get-home-content';

export async function FaqSection() {
  const faq = await getFaq();

  return (
    <Section>
      <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
      <div className="grid">
        {faq.map((item) => (
          <Accordion key={item.question} title={item.question} body={item.answer} />
        ))}
      </div>
    </Section>
  );
}
