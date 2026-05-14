# Discovery pass: import tarot decks from KostGame/Tarot

Дата проверки: `2026-05-15`

Проверялся `KostGame/Tarot` на `origin/main`, особенно блок `cardDecks` в `index.html` и локальные asset folders.

## Что реально подключено в UI main

| deckId | label | coverage | asset folder | images | nativeTitles | source / license notes | UI main |
| --- | --- | --- | --- | ---: | --- | --- | --- |
| `rws-classic` | Классика | `full` | `assets/cards/` | 78 | нет | `sourceUrl` в deck metadata | да |
| `rws-dark-classic` | Темная классика | `full` | `assets/cards/` + CSS/filter mode | 78 | нет | тот же `sourceUrl`, отдельного pack нет | да |
| `marseille-historical` | Tarot de Marseille | `major-only` | `assets/cards-experimental/marseille-historical/` | 22 | да | `sourceUrl` + `licenseNote` + README | да |
| `jean-dodal-marseille` | Jean Dodal Tarot | `major-only` | `assets/cards-experimental/jean-dodal-marseille/` | 22 | да | `sourceUrl` + `licenseNote` + README | да |
| `egyptian-falconnier` | Egyptian Tarot | `major-only` | `assets/cards-experimental/egyptian-falconnier/` | 22 | да | `sourceUrl` + `licenseNote` + README | да |
| `tarot-nouveau-grimaud-1898` | Tarot Nouveau | `full` | `assets/cards-experimental/tarot-nouveau-grimaud-1898/` | 78 | да | `sourceUrl` + `licenseNote` + README | да |
| `tarocco-piemontese-solesio-1865` | Tarocco Piemontese | `full` | `assets/cards-experimental/tarocco-piemontese-solesio-1865/` | 78 | да | `sourceUrl` + `licenseNote` + README | да |
| `pixel-tarot` | Pixel Tarot | `full` | `assets/cards-experimental/pixel-tarot/` | 78 | нет | `sourceUrl` + manual-review license note | да |
| `veil-of-fate` | Veil of Fate | `major-court` | `assets/cards-experimental/veil-of-fate/` | 38 | нет | `sourceUrl` + manual-review license note + README | да |
| `major-pixel-jcanabal` | Pixel Mono | `major-only` | `assets/cards-experimental/major-pixel-jcanabal/` | 22 | нет | `sourceUrl` + manual-review license note | да |
| `major-pixel-zune` | Pixel Zune | `major-only` | `assets/cards-experimental/major-pixel-zune/` | 22 | нет | `sourceUrl` + manual-review license note | да |

## Решение по переносу

### Переносить

- `rws-classic`
- `rws-dark-classic` как CSS/filter-режим
- `marseille-historical`
- `jean-dodal-marseille`
- `egyptian-falconnier`
- `tarot-nouveau-grimaud-1898`
- `tarocco-piemontese-solesio-1865`
- `pixel-tarot`

### Не переносить в UI

- `veil-of-fate`
- `major-pixel-jcanabal`
- `major-pixel-zune`

Причина: partial packs, ручная проверка лицензии/источника нужна отдельно. Внутренний safe-PR лучше ограничить стабильными full и major-only pack’ами, которые уже явно подходят под задачу.

### Не переносить вообще

- `Etteilla`
- `Sola Busca`
- `Visconti-Sforza`
- любые candidate-only / blocker-only deckId, которые не подключены в UI main

## Вывод

Discovery подтверждает, что безопасный перенос можно делать без спорных packs. Для `tarot-book` достаточно взять:

- `rws-classic`
- `rws-dark-classic`
- `marseille-historical`
- `jean-dodal-marseille`
- `egyptian-falconnier`
- `tarot-nouveau-grimaud-1898`
- `tarocco-piemontese-solesio-1865`
- `pixel-tarot`

Остальные connected partial packs лучше оставить на отдельную итерацию после ручной ревизии лицензии.
