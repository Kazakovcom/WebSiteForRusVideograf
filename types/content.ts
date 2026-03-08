export interface HeroContent {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  videoPlaceholder: string;
  note: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface AiUseCase {
  title: string;
  description: string;
}
