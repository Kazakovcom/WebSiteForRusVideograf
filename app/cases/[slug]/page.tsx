import { notFound } from 'next/navigation';
import { CaseHero } from '@/components/sections/case-detail/case-hero';
import { CaseMeta } from '@/components/sections/case-detail/case-meta';
import { CaseTaskSolutionResult } from '@/components/sections/case-detail/case-task-solution-result';
import { CaseServicesFormats } from '@/components/sections/case-detail/case-services-formats';
import { CaseGallery } from '@/components/sections/case-detail/case-gallery';
import { CaseFinalVideo } from '@/components/sections/case-detail/case-final-video';
import { CaseNextPrev } from '@/components/sections/case-detail/case-next-prev';
import { getCaseBySlug } from '@/lib/content/get-case-by-slug';
import { getCases } from '@/lib/content/get-cases';

export const dynamicParams = false;

interface CasePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const cases = await getCases();
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CasePage({ params }: CasePageProps) {
  const item = await getCaseBySlug(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <CaseHero item={item} />
      <CaseMeta item={item} />
      <CaseTaskSolutionResult item={item} />
      <CaseServicesFormats item={item} />
      <CaseGallery item={item} />
      <CaseFinalVideo item={item} />
      <CaseNextPrev />
    </>
  );
}
