# Experimental tarot card assets

This folder stores local experimental tarot decks used by the static site.

Structure:

- `pixel-tarot/` - full 78-card pixel deck from Papitas319, normalized to canonical card ids.
- `major-pixel-jcanabal/` - major-only pixel deck from jcanabal, normalized to canonical major arcana ids.
- `major-pixel-zune/` - major-only pixel deck from ZUNE, normalized to canonical major arcana ids.
- `veil-of-fate/` - major-and-court deck from Dajeki: major arcana and court cards only, normalized to canonical card ids.
- `marseille-historical/` - historical Tarot de Marseille major-only deck from Nicolas Conver 1760, normalized to app major ids and connected in UI as `major-only`. See `docs/MARSEILLE_MAPPING.md`.

Candidate decks not stored here yet:

- `etteilla-historical/` - candidate path for a historical Etteilla deck. Not connected to UI and no images are committed because the Wikimedia Commons source does not provide a safe automatic 78-card pack with stable suit/rank filenames. See `docs/ASSET_CANDIDATES.md`.

Usage rules:

- These assets are experimental and should be treated separately from `assets/cards/`.
- Missing cards fall back to `rws-classic`.
- Temporary archives and extraction folders are not part of the repository.

Sources and license notes are tracked in `docs/ASSET_CANDIDATES.md`.

Added: 2026-05-09.
