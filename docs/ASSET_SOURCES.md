# Источники ассетов

Все изображения в `tarot-book` лежат локально. Runtime hotlink на `KostGame/Tarot` не используется.

## Подключенные пакеты

| Пакет | Путь | Источник и заметка |
| --- | --- | --- |
| Rider-Waite-Smith | `assets/cards/` | `KostGame/Tarot` `main`; базовый локальный pack |
| RWS Dark Classic | `assets/cards/` | `KostGame/Tarot` `main`; CSS/filter-режим поверх RWS |
| Tarot de Marseille | `assets/cards-experimental/marseille-historical/` | `KostGame/Tarot` `main`; локальная копия pack |
| Jean Dodal Tarot | `assets/cards-experimental/jean-dodal-marseille/` | `KostGame/Tarot` `main`; локальная копия pack |
| Egyptian Tarot | `assets/cards-experimental/egyptian-falconnier/` | `KostGame/Tarot` `main`; локальная копия pack |
| Tarot Nouveau | `assets/cards-experimental/tarot-nouveau-grimaud-1898/` | `KostGame/Tarot` `main`; README сохранён рядом с pack |
| Tarocco Piemontese | `assets/cards-experimental/tarocco-piemontese-solesio-1865/` | `KostGame/Tarot` `main`; README сохранён рядом с pack |
| Pixel Tarot | `assets/cards-experimental/pixel-tarot/` | `KostGame/Tarot` `main`; локальная копия pack |
| Sola Busca | `assets/cards-experimental/sola-busca/` | `KostGame/Tarot` `feature/sola-busca-deck`; README сохранён рядом с pack |
| Oswald Wirth Tarot | `assets/cards-experimental/oswald-wirth-tarot/` | `KostGame/Tarot` `origin/feature/oswald-wirth-tarot`; README сохранён рядом с pack |
| Unicode Playing Cards | `assets/cards-experimental/unicode-playing-cards/` | `KostGame/Tarot` `origin/feature/unicode-playing-cards-deck`; README сохранён рядом с pack |
| Veil of Fate | `assets/cards-experimental/veil-of-fate/` | `KostGame/Tarot` `main`; локальная копия pack |
| Pixel Mono | `assets/cards-experimental/major-pixel-jcanabal/` | `KostGame/Tarot` `main`; README сохранён рядом с pack |
| Pixel Zune | `assets/cards-experimental/major-pixel-zune/` | `KostGame/Tarot` `main`; README сохранён рядом с pack |

## Локальные примечания

- Для каждого скопированного пакета рядом с ассетами лежит его `README.md` с source/license notes.
- `rws-dark-classic` не имеет отдельного набора изображений: это визуальный режим поверх локальной RWS-колоды.
- `unicode-playing-cards` и `veil-of-fate` подключены как major-court pack: старшие арканы плюс придворные карты.

## Что не подключалось

`Etteilla`, `Sola Busca`, `Visconti-Sforza` и любые candidate/blocker deckId из `KostGame/Tarot`, которые не входили в безопасный набор для этого импорта, в UI не подключались.
