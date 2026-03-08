'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation } from '@/data/navigation';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="button" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        Меню
      </button>
      {open ? (
        <nav className="card" style={{ marginTop: '0.75rem', display: 'grid', gap: '0.5rem' }}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
