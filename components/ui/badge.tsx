import { PropsWithChildren } from 'react';

export function Badge({ children }: PropsWithChildren) {
  return (
    <span
      style={{
        display: 'inline-flex',
        padding: '0.25rem 0.625rem',
        border: '1px solid var(--line)',
        borderRadius: '999px',
        fontSize: '0.875rem'
      }}
    >
      {children}
    </span>
  );
}
