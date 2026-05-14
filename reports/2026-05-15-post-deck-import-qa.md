# QA после импорта колод

- Ветка: `feature/post-deck-import-qa`
- Базовый PR: `#39` уже смержен
- Коммит QA-ветки: без функциональных правок; QA-отчет добавлен отдельно

## Что проверено

- режим `Тренировка`
- `Показать ответ`
- `Вспомнил` / `Не вспомнил`
- уровни Leitner `0..4`
- режим `На повторение`
- бейджи прогресса в сетке
- фильтр по уровню
- блок `Что учить дальше`
- меню `Статистика`
- экспорт / импорт прогресса: фича присутствует в `main`, логика не сломана по статическому smoke
- выбор колоды в UI
- локальная загрузка карт из `assets/`
- отсутствие runtime hotlink на `kostgame.github.io/Tarot` и `raw.githubusercontent`
- coverage для подключенных колод
- исторические соответствия для Marseille / Tarocco Piemontese / Egyptian Tarot
- мобильная ширина около `390px`
- GitHub Pages

## Результаты smoke

- Подключенные колоды в UI: `rws-classic`, `rws-dark-classic`, `marseille-historical`, `jean-dodal-marseille`, `egyptian-falconnier`, `tarot-nouveau-grimaud-1898`, `tarocco-piemontese-solesio-1865`, `pixel-tarot`
- `full`-колоды содержат `78` карт
- `major-only`-колоды содержат `22` карты
- skipped / needs review колоды не подключены в UI
- candidate/blocker колоды не подключались
- runtime hotlink в активных `index.html` / `decks.js` не найден
- `git diff --check`: clean
- `data/tarot-decks.json`: coverage ok
- `docs/DECKS.md` и `docs/ASSET_SOURCES.md` соответствуют фактическому подключенному набору

## Ограничения

- `npm run check`, `npm test`, `npm run build` недоступны в этом репозитории, потому что здесь нет `package.json`
- GitHub Pages и `gh api` для live-confirmation могли быть доступны не во всех сессиях; ранее Pages уже был в статусе `built`
- В старых справочных HTML-файлах репозитория встречаются устаревшие ссылки на `KostGame/Tarot`, но активный app-контур на них не опирается
