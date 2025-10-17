# StopWatch React App

Minimal React stopwatch app converted from plain HTML/CSS/JS into a React component using SASS for styling and Parcel as the dev bundler.

## Files

- `src/Stopwatch.js` - React functional component (Start, Pause, Reset).
- `src/Stopwatch.sass` - Styles ported from original CSS (SASS syntax).
- `src/App.js` - App wrapper that renders `Stopwatch`.
- `src/index.js` / `src/index.html` - App entry.
- `package.json` - scripts and dependencies (Parcel, React, Sass).

## Requirements

- Node.js (v16+) and npm

## Dev

Install dependencies and start the dev server:

```bash
npm install
npm start
```

Parcel will serve the app at `http://localhost:1234` by default and open it in your browser.

## Build

To create a production bundle:

```bash
npm run build
```

The built files will be placed in `dist/`.

## Notes & recommendations

- Fonts are imported inside `src/Stopwatch.sass`. If you prefer, move the link tag to `src/index.html`.
- Parcel handles SASS automatically (using the `sass` package). No additional config required.
- I accidentally included `.parcel-cache` in the initial commit; you may want to remove it and add it to `.gitignore`.

## Next steps (optional)

- Remove `.parcel-cache` from the repository and update `.gitignore.
- Add tests and a CI workflow (GitHub Actions).
- Add keyboard shortcuts and lap functionality to the stopwatch.

If you want, I can update `.gitignore` and remove `.parcel-cache` from the repo now.
