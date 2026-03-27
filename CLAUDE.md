# CLAUDE.md — EnglishPusher Grammar Testing

> Auto-maintained documentation for AI assistants working on this project.
> **Last updated:** 2026-03-27

---

## PROJECT OVERVIEW

**EnglishPusher Grammar Testing** is an interactive grammar learning game for adult English learners (B1 Level). It's a React/TypeScript SPA deployed to GitHub Pages.

- **Repo:** https://github.com/tauruskin/englishpusher-grammar-testing
- **Dev server:** `bun run dev` → http://localhost:8080
- **Deploy:** `bun run deploy` (gh-pages to GitHub Pages)

---

## TECH STACK

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript 5.8 |
| Build tool | Vite 5 + SWC |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix UI) |
| Routing | React Router DOM 6 |
| State | React hooks only (no Redux/Context) |
| TTS | Web Speech API |
| Animation | canvas-confetti, custom Tailwind keyframes |
| Testing | Vitest + JSDOM |
| Deploy | gh-pages → GitHub Pages |
| Package manager | bun (preferred) or npm |

---

## PROJECT STRUCTURE

```
src/
├── components/
│   ├── GrammarQuestionCard.tsx   # Main question renderer — all 4 types
│   ├── EndScreen.tsx             # Results/summary screen
│   ├── GameCharacter.tsx         # Animated teacher sprite
│   ├── ProgressBar.tsx           # Question X of Y progress
│   ├── ScoreBadge.tsx            # Header X/Y score
│   ├── SpeakerButton.tsx         # TTS trigger (mostly unused; header button used)
│   └── ui/                       # shadcn/ui primitives (50+ files — don't edit manually)
├── data/
│   ├── types.ts                  # All TypeScript interfaces
│   ├── wordList.ts               # Legacy/placeholder (unused)
│   └── topics/
│       ├── index.ts              # Topic registry — ADD NEW TOPICS HERE
│       └── present-simple-vs-continuous.ts  # 25 questions (all 4 types)
├── hooks/
│   ├── useGrammarGame.ts         # Core game logic (shuffle, score, streak, submit)
│   ├── useTTS.ts                 # Text-to-speech hook
│   └── __tests__/
│       └── useGrammarGame.test.ts
├── pages/
│   ├── Index.tsx                 # Main game page (topic selector + game controller)
│   └── NotFound.tsx
├── assets/                       # Teacher sprite images (thinking/correct/celebrate/sad)
├── App.tsx                       # Router setup
└── index.css                     # Design tokens + custom animations
```

---

## QUESTION TYPES

There are 4 question types, all defined in `src/data/types.ts`:

### 1. `gap-fill`
Fill-in-the-blank. A sentence with `___` replaced by the correct answer.
```typescript
gapFill: {
  gapIndex: number,         // word index of the blank
  correctAnswer: string,
  options: string[],        // 4 choices
  correctOptionIndex: number
}
```

### 2. `error-spot`
Find and fix the error word in the sentence.
```typescript
errorSpot: {
  errorWordIndex: number,   // index of wrong word
  wrongWord: string,
  correction: string,
  reason: string,
  correctionOptions: string[]  // 4 options including the fix
}
```

### 3. `multiple-choice`
Standard 4-option MC with a question text.
```typescript
multipleChoice: {
  question: string,
  correctOption: string,
  options: string[],
  optionExplanations: string[]
}
```

### 4. `sentence-reorder`
Click words from a word bank to build a sentence in the correct order.
```typescript
sentenceReorder: {
  words: string[],           // shuffled words
  correctOrders: string[][],  // ARRAY of valid orderings (multiple can be correct)
  wordHints?: Record<string, string>
}
```
> **Important:** Always use `correctOrders` (plural, array of arrays) — NOT a single `correctOrder`.

---

## CORE TYPES (src/data/types.ts)

```typescript
type GrammarQuestionType = "gap-fill" | "error-spot" | "multiple-choice" | "sentence-reorder"
type DifficultyLevel = "beginner" | "intermediate" | "advanced"

interface GrammarQuestion {
  id: string               // e.g. "ps-pc-gap-1"
  topic: string            // e.g. "present-simple-vs-continuous"
  type: GrammarQuestionType
  difficulty: DifficultyLevel
  sentence: string
  grammarRule: string
  explanation: string
  tip: string
  gapFill?: GapFillData
  errorSpot?: ErrorSpotData
  multipleChoice?: MultipleChoiceData
  sentenceReorder?: SentenceReorderData
}
```

---

## ADDING A NEW GRAMMAR TOPIC

1. Create `src/data/topics/your-topic-id.ts`
2. Export `const yourTopic: GrammarTopic = { id, title, description, questions: [...] }`
3. Register in `src/data/topics/index.ts`:
   ```typescript
   import { yourTopic } from "./your-topic-id"
   export const topics = [...existingTopics, yourTopic]
   ```
4. The topic dropdown in `Index.tsx` auto-populates from the registry.
5. URL param: `?topic=your-topic-id`

**Per-topic best practice:**
- Include all 4 question types
- 5–8 questions per type (20–30 total)
- Mix beginner/intermediate/advanced difficulties
- Write clear `explanation` and `tip` fields — shown after answering

---

## GAME LOGIC (useGrammarGame.ts)

- Questions shuffled randomly each game
- Topic change → full reset
- Answer checking is case-insensitive
- Sentence-reorder checks against all entries in `correctOrders`
- Streak resets on wrong answer; shown when ≥ 2
- Feedback delay: 2s correct, 3.5s incorrect, then 300ms transition
- `submitAnswer(answer: string)` — call with selected answer string

---

## ROUTING

```
/ → Index.tsx (game)
/* → NotFound.tsx
```
Topic via URL: `?topic=topic-id`
History updated with `window.history.pushState` (no React Router navigate).

---

## STYLING CONVENTIONS

- Tailwind utility classes only — no custom CSS except in `index.css` for design tokens and keyframe animations
- Color tokens: `--primary` (warm orange), `--success` (green), `--destructive` (red), `--background` (warm beige)
- Fonts: `font-display` (Space Grotesk) for headings, `font-body` (Inter) for text
- Character sprite hidden on mobile: `hidden md:flex`
- Custom animations: `animate-slide-up`, `animate-bounce-once`, `animate-shake`, `animate-emoji-correct/wrong`

---

## LEGACY / UNUSED FILES

These exist but are NOT integrated — do not modify or rely on them:
- `src/components/MatchingCard.tsx`
- `src/components/QuestionCard.tsx`
- `src/components/TrueFalseCard.tsx`
- `src/hooks/useGame.ts`
- `src/data/wordList.ts`

---

## CURRENT TOPICS

| Topic ID | File | Questions | Status |
|---|---|---|---|
| `present-simple-vs-continuous` | `present-simple-vs-continuous.ts` | 25 | Active |

**Deleted topics:** `present-perfect.ts` (removed 2026-03-18, commit c7138c0)

---

## WHAT HAS BEEN DONE (Changelog)

### 2026-03-27 — Session
- Added animated gradient border to `GrammarQuestionCard` via `BorderRotate` component
  - Orange (unanswered, 6s) → green fast spin (correct, 1.5s) → red (incorrect, 4s)
  - Component at `src/components/ui/animated-gradient-border.tsx` (reusable)
  - `@property --gradient-angle` + keyframes added to `index.css`
- Added `← Back` / `Next →` / `Skip →` navigation buttons to the game
- `viewIndex` added to `useGrammarGame.ts` (separate from `currentIndex`) — tracks which slide is displayed
- `goPrev()`, `goNext()`, `canGoPrev`, `canGoNext`, `isReviewing` exposed from the hook
- Auto-advance timeout stored in `pendingAdvanceRef` — cancelled when user hits Skip
- Derived display state: `displayedQuestion`, `displayedAnswered`, `displayedSelectedAnswer`, `displayedIsCorrect`
- `GrammarQuestionCard` gets `isReview` prop — shows "← Reviewing" badge instead of streak badge
- `SentenceReorderView` now accepts `selectedAnswer` prop to render stored answer in review mode
- Created `CLAUDE.md` and `MEMORY.md`

### 2026-03-18 — Session
- Fixed sentence-reorder crash and progression issues (`useGrammarGame.ts`)
- Added support for `correctOrders` (multiple valid orderings) in reorder type
- Fixed error-spot highlighting logic — only highlight the error word
- Fixed error-spot to replace error word with correction in sentence display
- Deleted `present-perfect.ts` topic (was incomplete)
- Refined `GrammarQuestionCard.tsx` multiple times for stability

---

## RULES FOR AI ASSISTANTS

1. **Read before editing.** Always read the file before making changes.
2. **Don't touch `ui/` components** unless explicitly asked — they are auto-generated by shadcn.
3. **For new questions:** follow the exact type structure in `types.ts`. Use `correctOrders` (array of arrays) for sentence-reorder, never `correctOrder`.
4. **Keep game logic in `useGrammarGame.ts`.** Don't inline game logic into components.
5. **No Redux, no Context API** — this app uses hooks + props only.
6. **Don't create new files unless necessary.** Prefer editing existing files.
7. **Animations live in `index.css` + `tailwind.config.ts`** — do not add inline `style` animation props.
8. **Update this file (CLAUDE.md)** after completing significant work — add to the changelog section.
9. **Update MEMORY.md** at `~/.claude/projects/.../memory/MEMORY.md` after significant sessions.
10. **Package manager:** use `bun` (not npm) when running scripts.
11. **Git workflow:** This is a pet project — push directly to `main`. No PRs, no branches needed unless experimenting.

---

## NOT YET IMPLEMENTED (Future Work)

- User authentication / progress persistence
- Backend API (React Query imported but unused)
- Retry weak-area questions (placeholder UI in EndScreen)
- Difficulty filter
- More grammar topics (past simple/continuous, present perfect, conditionals, etc.)
- Statistics / analytics dashboard
