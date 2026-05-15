# Training actions under card

- Branch: `feature/training-actions-under-card`
- Issue: [#45](https://github.com/KostGame/tarot-book/issues/45)

## What changed

- Moved the training action panel under the card image in the modal.
- Before answer reveal, the visible action is `Показать ответ`.
- After reveal, the visible actions are `Вспомнил`, `Не вспомнил`, `Следующая`, and compact progress.
- Kept the training summary blocks below the card content.

## Checks

- `node --check decks.js`
- inline JS syntax check for `index.html`
- `git diff --check`

## Notes

- `npm run check`, `npm test`, and `npm run build` are not available here because this repo has no `package.json`.
- The change is intentionally limited to `index.html`.
