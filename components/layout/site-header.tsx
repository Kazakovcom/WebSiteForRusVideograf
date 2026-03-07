import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { PageContainer } from './page-container';
import { MobileMenu } from './mobile-menu';

export function SiteHeader() {
  return (
    <header style={{ borderBottom: '1px solid var(--line)', position: 'sticky', top: 0, background: 'var(--bg)' }}>
      <PageContainer>
        <div style={{ minHeight: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <Link href="/" style={{ fontWeight: 600 }}>
            Rustam Bariev
          </Link>

          <nav className="desktop-nav" style={{ display: 'none', gap: '1rem' }}>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-nav">
            <MobileMenu />
          </div>
        </div>
      </PageContainer>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
