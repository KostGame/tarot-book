# Veil of Fate encoding fix

- Branch: `fix/veil-of-fate-encoding`
- Scope: fixed the corrupted deck description and license notes for `veil-of-fate`, `major-pixel-jcanabal`, and `major-pixel-zune`.
- Checks: `node --check decks.js`, JSON parse smoke for `data/tarot-decks.json`, `git diff --check`.
- Result: the Veil of Fate modal now shows a normal Russian description instead of `??????`, and the related metadata no longer contains corrupted text.
