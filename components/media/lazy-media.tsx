import Image from 'next/image';

interface LazyMediaProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function LazyMedia({ src, alt, width = 1200, height = 675 }: LazyMediaProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid var(--line)' }}
    />
  );
}
