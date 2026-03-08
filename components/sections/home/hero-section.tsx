import { heroContent } from '@/data/home';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { ResponsiveVideo } from '@/components/media/responsive-video';

export function HeroSection() {
  return (
    <Section>
      <div className="grid" style={{ gap: '1.25rem' }}>
        <p className="eyebrow">Portfolio</p>
        <h1 style={{ margin: 0 }}>{heroContent.title}</h1>
        <p className="muted" style={{ margin: 0 }}>{heroContent.subtitle}</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Button href="/cases">{heroContent.ctaPrimary}</Button>
          <Button href="/contacts">{heroContent.ctaSecondary}</Button>
        </div>
        <ResponsiveVideo
          poster={heroContent.videoPlaceholder}
          title="Hero video"
          placeholderNote={heroContent.note}
        />
      </div>
    </Section>
  );
}
