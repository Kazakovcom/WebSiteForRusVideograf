import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface ButtonProps {
  href: string;
}

export function Button({ href, children }: PropsWithChildren<ButtonProps>) {
  return (
    <Link href={href} className="button">
      {children}
    </Link>
  );
}
