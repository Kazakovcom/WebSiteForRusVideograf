import { getCases } from './get-cases';

export async function getCaseBySlug(slug: string) {
  const cases = await getCases();
  return cases.find((item) => item.slug === slug) ?? null;
}
