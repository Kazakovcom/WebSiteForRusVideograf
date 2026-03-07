interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 style={{ margin: '0 0 0.5rem 0' }}>{title}</h2>
      {description ? <p className="muted" style={{ margin: 0 }}>{description}</p> : null}
    </div>
  );
}
