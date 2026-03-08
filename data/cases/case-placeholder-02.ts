import { CaseItem } from '@/types/case';

export const casePlaceholder02: CaseItem = {
  slug: 'interview-podcast-placeholder',
  title: 'Интервью / подкаст формат',
  category: 'Интервью и подкасты',
  year: '2026',
  city: 'Сочи',
  shortDescription: 'Промежуточный кейс для демонстрации структуры страницы и формата контента.',
  task: 'Показать экспертный формат в удобной и спокойной визуальной подаче.',
  solution: 'В прототипе отражены ключевые этапы: съёмка, монтаж, звук и адаптация под площадки.',
  result: 'Этот блок демонстрирует логику кейса; итоговые данные заменяются после получения материалов.',
  servicesUsed: ['съёмка', 'монтаж', 'чистка звука', 'адаптация под площадки'],
  formatsDelivered: ['полная версия', 'короткие фрагменты'],
  coverImage: '/media/placeholders/case-cover-02.svg',
  coverVideoLoop: undefined,
  gallery: ['/media/placeholders/case-cover-02.svg'],
  finalVideoUrl: undefined,
  isPlaceholder: true
};
