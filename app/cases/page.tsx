import { CasesHero } from '@/components/sections/cases/cases-hero';
import { CasesFilters } from '@/components/sections/cases/cases-filters';
import { CasesGrid } from '@/components/sections/cases/cases-grid';
import { Section } from '@/components/ui/section';
import { getCases } from '@/lib/content/get-cases';
import { getPageMetadata } from '@/components/seo/seo-meta';

export const metadata = getPageMetadata('Кейсы');

export default async function CasesPage() {
  const cases = await getCases();

  return (
    <>
      <CasesHero />
      <Section>
        <CasesFilters />
        <CasesGrid items={cases} />
      </Section>
    </>
  );
}
