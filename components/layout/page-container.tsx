import { PropsWithChildren } from 'react';

export function PageContainer({ children }: PropsWithChildren) {
  return <div className="container">{children}</div>;
}
