import { Section } from '@/components/ui/section';

export function ContactFirstMessage() {
  return (
    <Section>
      <div className="card">
        <h2>Что прислать в первом сообщении</h2>
        <ul style={{ marginBottom: 0 }}>
          <li>Коротко о задаче и формате видео</li>
          <li>Где планируете публиковать материал</li>
          <li>Желаемые сроки и ориентир по объёму</li>
          <li>Если есть — референсы или примеры подачи</li>
        </ul>
      </div>
    </Section>
  );
}
