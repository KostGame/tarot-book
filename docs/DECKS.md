# Колоды Таро

В `tarot-book` подключены 14 колод из `KostGame/Tarot`. Приложение не использует runtime hotlink на исходный репозиторий: изображения читаются только из локальных папок `assets/`.

## Подключенные колоды

| ID | Название | Coverage | Assets | Source |
| --- | --- | --- | --- | --- |
| `rws-classic` | Классическая колода Таро | `full` | `assets/cards/` | `KostGame/Tarot` `main` |
| `rws-dark-classic` | Классическая колода Таро, темная | `full` | CSS/filter поверх `assets/cards/` | `KostGame/Tarot` `main` |
| `marseille-historical` | Tarot de Marseille | `major-only` | `assets/cards-experimental/marseille-historical/` | `KostGame/Tarot` `main` |
| `jean-dodal-marseille` | Jean Dodal Tarot | `major-only` | `assets/cards-experimental/jean-dodal-marseille/` | `KostGame/Tarot` `main` |
| `egyptian-falconnier` | Egyptian Tarot | `major-only` | `assets/cards-experimental/egyptian-falconnier/` | `KostGame/Tarot` `main` |
| `tarot-nouveau-grimaud-1898` | Tarot Nouveau | `full` | `assets/cards-experimental/tarot-nouveau-grimaud-1898/` | `KostGame/Tarot` `main` |
| `tarocco-piemontese-solesio-1865` | Tarocco Piemontese | `full` | `assets/cards-experimental/tarocco-piemontese-solesio-1865/` | `KostGame/Tarot` `main` |
| `pixel-tarot` | Pixel Tarot | `full` | `assets/cards-experimental/pixel-tarot/` | `KostGame/Tarot` `main` |
| `sola-busca` | Sola Busca | `full` | `assets/cards-experimental/sola-busca/` | `KostGame/Tarot` `feature/sola-busca-deck` |
| `oswald-wirth-tarot` | Oswald Wirth Tarot | `major-only` | `assets/cards-experimental/oswald-wirth-tarot/` | `KostGame/Tarot` `origin/feature/oswald-wirth-tarot` |
| `unicode-playing-cards` | Unicode Playing Cards | `major-court` | `assets/cards-experimental/unicode-playing-cards/` | `KostGame/Tarot` `origin/feature/unicode-playing-cards-deck` |
| `veil-of-fate` | Veil of Fate | `major-court` | `assets/cards-experimental/veil-of-fate/` | `KostGame/Tarot` `main` |
| `major-pixel-jcanabal` | Pixel Mono | `major-only` | `assets/cards-experimental/major-pixel-jcanabal/` | `KostGame/Tarot` `main` |
| `major-pixel-zune` | Pixel Zune | `major-only` | `assets/cards-experimental/major-pixel-zune/` | `KostGame/Tarot` `main` |

## Coverage

- `full` показывает все 78 карт.
- `major-only` показывает только 22 старших аркана.
- `major-court` показывает 22 старших аркана и 16 придворных карт.
- `rws-dark-classic` не имеет отдельного asset pack: это CSS/filter-режим поверх локальной RWS-колоды.

## Проверенные соответствия

- В `jean-dodal-marseille` историческая нумерация Strength / Justice приведена к текущим id справочника:
  - `major-08-strength` использует `major-11-strength.jpg`;
  - `major-11-justice` использует `major-08-justice.jpg`.
- В `tarocco-piemontese-solesio-1865`:
  - Сила отображается как `La Forza`;
  - Справедливость отображается как `La Giustizia`.
- В `egyptian-falconnier`:
  - Шут отображается как `Le Crocodile`;
  - Суд отображается как `Le Livre sacré`.

## Примечание

Остальные candidate-only / blocker-only колоды из `KostGame/Tarot` в `tarot-book` не подключаются.
