import Link from 'next/link';
import { Section } from '@/components/ui/section';

export default function NotFound() {
  return (
    <Section>
      <h1>Страница не найдена</h1>
      <p className="muted">Возможно, кейс ещё не опубликован.</p>
      <Link href="/" className="button">
        На главную
      </Link>
    </Section>
  );
}
