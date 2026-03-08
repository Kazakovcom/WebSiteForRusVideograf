const defaultBaseUrl = 'https://example.com';

export const siteConfig = {
  name: 'Рустам Бариев — видеограф',
  description:
    'Портфолио видеографа полного цикла. Текущая версия содержит структуру разделов и временные материалы для предпросмотра.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? defaultBaseUrl
};
