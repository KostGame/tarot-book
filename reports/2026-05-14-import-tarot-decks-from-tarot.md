# Отчет: импорт колод из KostGame/Tarot

Ветка: `feature/import-tarot-decks-from-tarot`

## Что изменено

- Добавлен выбор колоды в верхние фильтры справочника.
- Изображения карт переведены на локальные `assets/` без runtime hotlink на `KostGame/Tarot`.
- Добавлен `decks.js` с метаданными колод, coverage, nativeTitles и картами asset pack.
- Добавлен `data/tarot-decks.json` как справочная структура данных по подключенным колодам.
- Добавлены `.nojekyll`, документация `docs/DECKS.md` и `docs/ASSET_SOURCES.md`.

## Перенесенные колоды

- `rws-classic` -> `assets/cards/`, `full`, 78 карт.
- `rws-dark-classic` -> CSS/filter-режим поверх `assets/cards/`, `full`, 78 карт.
- `marseille-historical` -> `assets/cards-experimental/marseille-historical/`, `major-only`, 22 карты.
- `jean-dodal-marseille` -> `assets/cards-experimental/jean-dodal-marseille/`, `major-only`, 22 карты.
- `egyptian-falconnier` -> `assets/cards-experimental/egyptian-falconnier/`, `major-only`, 22 карты.
- `tarot-nouveau-grimaud-1898` -> `assets/cards-experimental/tarot-nouveau-grimaud-1898/`, `full`, 78 карт.
- `tarocco-piemontese-solesio-1865` -> `assets/cards-experimental/tarocco-piemontese-solesio-1865/`, `full`, 78 карт.
- `pixel-tarot` -> `assets/cards-experimental/pixel-tarot/`, `full`, 78 карт.

## Ограничения

- Etteilla, Sola Busca, Visconti-Sforza и candidate/blocker-наборы не подключались.
- Extras из `KostGame/Tarot/main`, которые не входили в список задачи или требуют отдельной ручной проверки лицензии, оставлены вне PR.
- Для `major-only` колод сетка показывает только старшие арканы без fallback на младшие карты RWS.

## Проверки

- Node/VM smoke: `decks.js` загружен, найдено 8 колод, все локальные изображения из карт доступны.
- Coverage: `full` колоды содержат 78 карт; `major-only` колоды содержат 22 карты.
- Проверены соответствия:
  - Jean Dodal: `major-08-strength` -> `major-11-strength.jpg`, `major-11-justice` -> `major-08-justice.jpg`;
  - Tarocco Piemontese: Сила = `La Forza`, Справедливость = `La Giustizia`;
  - Egyptian Tarot: Шут = `Le Crocodile`, Суд = `Le Livre sacré`.
- `rg` по runtime-файлам: ссылок на исходный GitHub Pages сайт `KostGame/Tarot` нет.
- `rg` по вопросительным знакам-заглушкам: побитая кириллица в видимом блоке рекомендаций исправлена, новых вхождений не найдено.
- `node --check decks.js` и `node --check meanings.js` прошли.
- `git diff --check` прошел, только предупреждение Git о будущей CRLF-нормализации `index.html`.
- `npm --prefix . run check`, `npm --prefix . test`, `npm --prefix . run build` недоступны: в `tarot-book` нет `package.json`.
- GitHub Pages настроен на `main` `/`, статус `built`, URL: `https://kostgame.github.io/tarot-book/`.
