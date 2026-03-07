import { LazyMedia } from './lazy-media';

interface MediaGalleryProps {
  items: string[];
  title: string;
}

export function MediaGallery({ items, title }: MediaGalleryProps) {
  return (
    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      {items.map((item) => (
        <LazyMedia key={item} src={item} alt={`${title} gallery`} width={800} height={500} />
      ))}
    </div>
  );
}
