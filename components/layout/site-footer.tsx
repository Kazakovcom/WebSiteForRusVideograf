import { PageContainer } from './page-container';

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '2rem 0' }}>
      <PageContainer>
        <p className="muted" style={{ margin: 0 }}>
          Предпросмотр структуры портфолио. Контент и медиа будут уточнены на следующих этапах.
        </p>
      </PageContainer>
    </footer>
  );
}
