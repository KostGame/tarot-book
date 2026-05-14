# Колоды Таро

Колоды перенесены локально из `KostGame/Tarot` с ветки `main`. Приложение не использует runtime hotlink на исходный сайт: изображения читаются из локальных папок `assets/`.

## Подключенные колоды

| ID | Название | Coverage | Assets |
| --- | --- | --- | --- |
| `rws-classic` | Классика | `full` | `assets/cards/` |
| `rws-dark-classic` | Темная классика | `full` | CSS/filter-режим поверх `assets/cards/` |
| `marseille-historical` | Tarot de Marseille | `major-only` | `assets/cards-experimental/marseille-historical/` |
| `jean-dodal-marseille` | Jean Dodal Tarot | `major-only` | `assets/cards-experimental/jean-dodal-marseille/` |
| `egyptian-falconnier` | Egyptian Tarot | `major-only` | `assets/cards-experimental/egyptian-falconnier/` |
| `tarot-nouveau-grimaud-1898` | Tarot Nouveau | `full` | `assets/cards-experimental/tarot-nouveau-grimaud-1898/` |
| `tarocco-piemontese-solesio-1865` | Tarocco Piemontese | `full` | `assets/cards-experimental/tarocco-piemontese-solesio-1865/` |
| `pixel-tarot` | Pixel Tarot | `full` | `assets/cards-experimental/pixel-tarot/` |

## Поведение coverage

`full` показывает все 78 карт.

`major-only` показывает только 22 старших аркана. Младшие арканы не подменяются изображениями RWS, чтобы пользователь не видел неверный состав выбранной колоды.

`rws-dark-classic` не имеет отдельного asset pack в `KostGame/Tarot`. Это CSS/filter-режим поверх локальной RWS-колоды, поэтому он перенесен как режим отображения.

## Проверенные соответствия

В `jean-dodal-marseille` историческая нумерация Justice/Strength приведена к текущим id справочника:

- `major-08-strength` использует `major-11-strength.jpg`;
- `major-11-justice` использует `major-08-justice.jpg`.

В `tarocco-piemontese-solesio-1865`:

- Сила отображается как `La Forza`;
- Справедливость отображается как `La Giustizia`.

В `egyptian-falconnier`:

- Шут отображается как `Le Crocodile`;
- Суд отображается как `Le Livre sacré`.

## Не подключено

### Skipped / needs review

- `veil-of-fate`
- `major-pixel-jcanabal`
- `major-pixel-zune`

Причина: partial packs с ручной проверкой лицензии/источника.

Etteilla, Sola Busca, Visconti-Sforza и прочие candidate/blocker-наборы не переносились. Они не входят в безопасный UI main набор для этой задачи.
