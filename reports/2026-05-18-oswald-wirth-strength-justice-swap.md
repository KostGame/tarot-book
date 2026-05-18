# Oswald Wirth Strength / Justice swap

- Branch: `fix/oswald-wirth-strength-justice-images`
- Scope: swapped the image mapping for `major-08-strength` and `major-11-justice` in the Oswald Wirth deck.
- Checks: `node --check decks.js`, VM smoke for `oswald-wirth-tarot` card paths, `git diff --check`.
- Result: `Сила` now shows the Force image, and `Справедливость` shows the Justice image, matching the historical Oswald Wirth numbering used in the source project.
