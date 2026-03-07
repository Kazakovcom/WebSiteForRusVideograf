const defaultBaseUrl = 'https://example.com';

/**
 * For GitHub Pages preview we can override this via workflow/env.
 * TODO: set NEXT_PUBLIC_SITE_URL to the real preview URL after repository setup.
 */
export const siteConfig = {
  name: 'Рустам Бариев — видеограф',
  description:
    'Scaffold-версия премиального портфолио видеографа полного цикла. Контент и медиа будут обновлены после получения финальных материалов.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? defaultBaseUrl
};
