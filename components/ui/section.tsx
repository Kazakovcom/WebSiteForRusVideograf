import { PropsWithChildren } from 'react';
import { PageContainer } from '@/components/layout/page-container';

export function Section({ children }: PropsWithChildren) {
  return (
    <section className="section">
      <PageContainer>{children}</PageContainer>
    </section>
  );
}
