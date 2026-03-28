# Session Notes — 2026-03-28

## Done today
- Removed header dropdown — landing page menu replaces it
- Added teacher character + speech bubble to landing page (desktop only)
  - Teacher in `idle` pose with animated speech bubble: "What shall we practise today? 😊"
  - Two-column layout: teacher left, topic menu right
  - Teacher hidden on mobile (consistent with game screens)
- Fixed `GameCharacter` image width regression (`w-full` → `max-w-full`)
- Fixed blank page bug — `npm run deploy` was building with wrong base path (`/` vs `/englishpusher-grammar-testing/`)
  - Fixed by adding `cross-env VITE_BASE_PATH=/` to predeploy script
  - Installed `cross-env` for Windows compatibility
- Added **Verb Patterns** topic (25 questions — verb + -ing vs verb + to infinitive)
- Added **Narrative Tenses** topic (25 questions — Past Simple / Continuous / Perfect)
- Added correct/wrong answer sound feedback using Web Audio API
  - Correct: two ascending sine tones (C5 → E5)
  - Wrong: two descending sawtooth tones
  - Mute button controls sounds — no extra toggle needed
  - No audio files — generated in browser via Web Audio API
- Added favicon from englishpusher.in.ua (saved locally in `public/favicon.png`)
- Added CNAME file to `public/` so it deploys with dist (`grammar.englishpusher.in.ua`)
- Fixed local deploy base path to `/` to match custom domain setup
- Pulled CI deploy.yml changes (VITE_BASE_PATH now `/`)
- Set up GitHub branch protection ruleset for `main` (restrict deletions + block force pushes)

## What's next for this project
- Add more grammar topics (conditionals, present perfect, reported speech, etc.)
- Difficulty filter (beginner / intermediate / advanced)
- Retry weak-area questions (button already exists in EndScreen, not wired up)
- Stats / analytics dashboard
- User progress persistence
- Hide logo on mobile was fixed (hidden below sm breakpoint)

## Prompts prepared for other project
- Landing page with animated topic menu (MenuVertical component)
- Teacher character + speech bubble on landing page
- Correct/wrong answer sound feedback (Web Audio API)
- Favicon from englishpusher.in.ua
