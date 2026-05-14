# Источники ассетов

Все изображения перенесены из `KostGame/Tarot` с `origin/main` и лежат локально в этом репозитории.

| Колода | Путь | Источник / заметка |
| --- | --- | --- |
| Rider-Waite-Smith | `assets/cards/` | Wikimedia Commons, TaionWC RWS deck category |
| RWS Dark Classic | `assets/cards/` | Отдельных файлов нет; используется CSS/filter-режим поверх RWS |
| Tarot de Marseille, Nicolas Conver 1760 | `assets/cards-experimental/marseille-historical/` | Wikimedia Commons; см. README рядом с pack |
| Jean Dodal Tarot | `assets/cards-experimental/jean-dodal-marseille/` | Wikimedia Commons; см. README рядом с pack |
| Egyptian Tarot / Falconnier | `assets/cards-experimental/egyptian-falconnier/` | Wikimedia Commons; см. README рядом с pack |
| Tarot Nouveau, Grimaud 1898 | `assets/cards-experimental/tarot-nouveau-grimaud-1898/` | Wikimedia Commons; см. README рядом с pack |
| Tarocco Piemontese, Solesio 1865 | `assets/cards-experimental/tarocco-piemontese-solesio-1865/` | Wikimedia Commons; см. README рядом с pack |
| Pixel Tarot | `assets/cards-experimental/pixel-tarot/` | papitas319 itch.io pack; требуется ручная проверка лицензии пользователем |

README/source notes из исходных asset pack сохранены рядом с перенесенными изображениями, где они были в `KostGame/Tarot/main`.

Runtime hotlink на `KostGame/Tarot` не используется: `index.html` и `decks.js` ссылаются только на локальные `assets/`.

## Skipped / needs review

| Колода | Статус | Причина |
| --- | --- | --- |
| `veil-of-fate` | skipped | partial `major-court`, ручная проверка лицензии/источника нужна отдельно |
| `major-pixel-jcanabal` | skipped | partial `major-only`, manual license review |
| `major-pixel-zune` | skipped | partial `major-only`, manual license review |

Etteilla, Sola Busca, Visconti-Sforza и любые candidate/blocker deckId не подключались, потому что они не входят в безопасный UI main набор для этой задачи.
