import { CaseItem } from '@/types/case';

export const casePlaceholder01: CaseItem = {
  slug: 'brand-video-placeholder',
  title: 'Имиджевое видео для локального бренда',
  category: 'Коммерческое видео',
  year: '2026',
  city: 'Сочи',
  shortDescription: 'Пример структуры кейса для предпросмотра портфолио и логики подачи проекта.',
  task: 'Сформировать ясный и современный визуальный образ продукта для digital-площадок.',
  solution: 'Собрана аккуратная структура: съёмка, монтаж, цвет и адаптация под несколько форматов.',
  result: 'В прототипе показан формат подачи кейса; финальные материалы добавляются после согласования.',
  servicesUsed: ['подготовка', 'съёмка', 'монтаж', 'цветокоррекция', 'звук'],
  formatsDelivered: ['горизонтальный', 'вертикальный', 'короткая версия'],
  coverImage: '/media/placeholders/case-cover-01.svg',
  coverVideoLoop: undefined,
  gallery: ['/media/placeholders/case-cover-01.svg'],
  finalVideoUrl: undefined,
  isPlaceholder: true
};
