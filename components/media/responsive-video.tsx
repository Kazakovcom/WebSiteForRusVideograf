interface ResponsiveVideoProps {
  src?: string;
  poster: string;
  title: string;
  placeholderNote?: string;
}

const runtimeBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.__NEXT_ROUTER_BASEPATH ?? '';

function withBasePath(url?: string): string | undefined {
  if (!url) return undefined;

  const isAbsolute = /^(https?:)?\/\//.test(url) || url.startsWith('data:');
  if (isAbsolute) return url;

  return url.startsWith('/') ? `${runtimeBasePath}${url}` : url;
}

export function ResponsiveVideo({ src, poster, title, placeholderNote }: ResponsiveVideoProps) {
  const resolvedPoster = withBasePath(poster) ?? poster;
  const resolvedSrc = withBasePath(src);

if (!resolvedSrc) {
  return (
    <div className="card">
      {/* TODO: Replace with real video source from Rustam materials */}
      <img src={resolvedPoster} alt={`${title} placeholder`} style={{ width: '100%', borderRadius: 10 }} />
      {placeholderNote ? <p className="muted">{placeholderNote}</p> : null}
    </div>
  );
}

  return (
    <video controls preload="none" poster={resolvedPoster} style={{ width: '100%', borderRadius: 12 }}>
      <source src={resolvedSrc} />
      Ваш браузер не поддерживает видео.
    </video>
  );
}
