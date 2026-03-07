interface ResponsiveVideoProps {
  src?: string;
  poster: string;
  title: string;
  placeholderNote?: string;
}

export function ResponsiveVideo({ src, poster, title, placeholderNote }: ResponsiveVideoProps) {
  if (!src) {
    return (
      <div className="card">
        {/* TODO: Replace with real video source from Rustam materials */}
        <img src={poster} alt={`${title} placeholder`} style={{ width: '100%', borderRadius: 10 }} />
        {placeholderNote ? <p className="muted">{placeholderNote}</p> : null}
      </div>
    );
  }

  return (
    <video controls preload="none" poster={poster} style={{ width: '100%', borderRadius: 12 }}>
      <source src={src} />
      Ваш браузер не поддерживает видео.
    </video>
  );
}
