import { HeroSection } from '@/components/sections/home/hero-section';
import { TrustBar } from '@/components/sections/home/trust-bar';
import { ServicesSection } from '@/components/sections/home/services-section';
import { FeaturedCasesSection } from '@/components/sections/home/featured-cases-section';
import { ShowreelSection } from '@/components/sections/home/showreel-section';
import { WorkflowSection } from '@/components/sections/home/workflow-section';
import { AiSection } from '@/components/sections/home/ai-section';
import { AboutSection } from '@/components/sections/home/about-section';
import { FaqSection } from '@/components/sections/home/faq-section';
import { ContactCtaSection } from '@/components/sections/home/contact-cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <FeaturedCasesSection />
      <ShowreelSection />
      <WorkflowSection />
      <AiSection />
      <AboutSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
