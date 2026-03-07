export interface CaseItem {
  slug: string;
  title: string;
  category: string;
  year: string;
  city: string;
  shortDescription: string;
  task: string;
  solution: string;
  result: string;
  servicesUsed: string[];
  formatsDelivered: string[];
  coverImage: string;
  coverVideoLoop?: string;
  gallery: string[];
  finalVideoUrl?: string;
  isPlaceholder: boolean;
}
