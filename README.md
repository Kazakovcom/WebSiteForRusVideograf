# Сайт-портфолио Рустама Бариева

Этот репозиторий нужен для разработки premium personal portfolio website для видеографа Рустама Бариева.

## Цель
Сделать современный, визуально сильный и сдержанный сайт-портфолио, который показывает Рустама как надежного видеографа полного цикла.

## Основные смыслы
- видеограф полного цикла
- съемка, монтаж, цветокоррекция
- reels, shorts, интервью, подкасты, коммерческие и имиджевые видео
- AI как усиление процесса, а не трюк ради маркетинга
- чистый визуал, понятная структура, сильные кейсы

## Что читать в проекте
- `AGENTS.md`
- `reference/references.md`
- `content/bio.md`
- `content/services.md`
- `content/faq.md`
- `content/cases.md`
- `notes/design-rules.md`
- `notes/what-not-to-do.md`

## Папка assets-temp
Сюда складываются временные материалы:
- шоу-рил
- кейсы
- фото
- видео с процесса
- обложки
- BTS-материалы

## Базовая логика сайта
- сильный первый экран
- showreel / hero video
- услуги
- избранные кейсы
- workflow
- AI section
- about
- FAQ
- contact CTA


## Preview deployment (GitHub Pages)

Проект подготовлен для static export и preview-деплоя на GitHub Pages через workflow:
- `.github/workflows/preview-pages.yml`

Важно:
- Для project pages используется автоматический `basePath` из `GITHUB_REPOSITORY` в `next.config.mjs`.
- Для user/org pages (`<user>.github.io`) basePath не добавляется.
- При необходимости укажи `NEXT_PUBLIC_SITE_URL` для корректных абсолютных URL в sitemap/metadata.
