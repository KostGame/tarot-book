# Fullscreen swipe navigation

- Branch: `feature/fullscreen-swipe-navigation`
- Issue: [#46](https://github.com/KostGame/tarot-book/issues/46)
- Goal: add horizontal swipe navigation and subtle clickable side arrows in the fullscreen image viewer.

## What changed

- Kept the existing fullscreen image navigation wiring.
- Made the side arrows visible on mobile as semi-transparent hint buttons.
- Kept the close button and bottom caption intact.
- Left the normal modal card, training, progress, filters, and deck selection untouched.

## Checks

- `node --check decks.js`
- inline JS syntax check for `index.html`
- `git diff --check`

## Notes

- `npm run check`, `npm test`, and `npm run build` are not available in this repo because there is no `package.json`.
- I did not find a pre-existing open GitHub issue for this fullscreen task, so I created #46 as the tracking issue for the report.
- The fullscreen swipe threshold remains the existing horizontal gesture threshold in the viewer.
