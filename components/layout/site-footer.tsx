import { PageContainer } from './page-container';

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '2rem 0' }}>
      <PageContainer>
        <p className="muted" style={{ margin: 0 }}>
          Scaffold version. TODO: обновить медиа и финальные формулировки после получения материалов от Рустама.
        </p>
      </PageContainer>
    </footer>
  );
}
