import Image from 'next/image';

interface LazyMediaProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const runtimeBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.__NEXT_ROUTER_BASEPATH ?? '';

function withBasePath(url: string): string {
  const isAbsolute = /^(https?:)?\/\//.test(url) || url.startsWith('data:');
  if (isAbsolute) return url;

  return url.startsWith('/') ? `${runtimeBasePath}${url}` : url;
}

export function LazyMedia({ src, alt, width = 1200, height = 675 }: LazyMediaProps) {
  const resolvedSrc = withBasePath(src);

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid var(--line)' }}
    />
  );
}
