import React, { useState, useEffect } from "react";
import { GrammarQuestion } from "@/data/types";
import GameCharacter, { CharacterPose } from "@/components/GameCharacter";

interface GrammarQuestionCardProps {
  question: GrammarQuestion;
  answered: boolean;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  streak: number;
  transitioning: boolean;
  onSubmit: (answer: string) => void;
}

// --- Gap Fill ---
const GapFillView = ({
  question,
  answered,
  selectedAnswer,
  isCorrect,
  onSubmit,
}: {
  question: GrammarQuestion;
  answered: boolean;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  onSubmit: (a: string) => void;
}) => {
  const data = question.gapFill!;
  const correct = data.correctAnswer;

  const getOptionStyle = (option: string) => {
    if (!answered)
      return "bg-secondary hover:bg-muted border-border hover:border-primary/50 text-foreground hover:scale-[1.02] active:scale-[0.98]";
    if (option === correct)
      return "bg-success/20 border-success text-success animate-bounce-once";
    if (option === selectedAnswer && !isCorrect)
      return "bg-destructive/20 border-destructive text-destructive animate-shake";
    return "bg-secondary border-border text-muted-foreground opacity-50";
  };

  return (
    <div className="space-y-5">
      {/* Sentence with blank */}
      <div className="text-center">
        <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
          {question.sentence.split("___").map((part, idx, arr) => (
            <span key={idx}>
              {part}
              {idx < arr.length - 1 && (
                <span
                  className={`inline-block mx-1 min-w-[110px] text-center font-bold border-b-2 ${
                    answered
                      ? isCorrect
                        ? "border-success text-success"
                        : "border-destructive text-destructive"
                      : "border-primary text-primary"
                  }`}
                >
                  {answered ? correct : "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>

      {/* Answer options */}
      <div className="grid gap-2.5">
        {data.options.map((option, i) => (
          <button
            key={option}
            onClick={() => !answered && onSubmit(option)}
            disabled={answered}
            style={{ animationDelay: `${i * 60}ms` }}
            className={`w-full text-left px-5 py-3 rounded-xl border-2 font-body transition-all duration-200 ${getOptionStyle(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- Error Spot ---
const ErrorSpotView = ({
  question,
  answered,
  selectedAnswer,
  isCorrect,
  onSubmit,
}: {
  question: GrammarQuestion;
  answered: boolean;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  onSubmit: (a: string) => void;
}) => {
  const data = question.errorSpot!;
  const words = question.sentence.split(" ");
  const options = data.correctionOptions ?? [data.correction];

  return (
    <div className="space-y-5">
      {/* Instruction */}
      <p className="text-center text-muted-foreground text-sm font-body">
        Find and correct the mistake in the sentence:
      </p>

      {/* Sentence with clickable words */}
      <div className="flex flex-wrap gap-2 justify-center">
        {words.map((word, idx) => {
          const isError = idx === data.errorWordIndex;
          
          // Replace the error word with correction if answered correctly
          const displayWord = isError && answered && isCorrect ? data.correction : word;
          
          let style = "px-3 py-1.5 rounded-lg border-2 font-body text-base transition-all duration-200 ";
          
          if (isError) {
            if (answered) {
              style += isCorrect
                ? "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400 font-bold"
                : "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400 font-bold line-through";
            } else {
              style += "bg-red-50 dark:bg-red-900/10 border-red-500/50 text-red-600 dark:text-red-400 font-bold";
            }
          } else {
            style += "bg-secondary border-transparent text-foreground opacity-90 cursor-default";
          }
          
          return (
            <span key={idx} className={style}>
              {displayWord}
            </span>
          );
        })}
      </div>

      {/* Choose the correct replacement */}
      {!answered && (
        <div>
          <p className="text-center text-xs font-display text-muted-foreground uppercase tracking-widest mb-3">
            Choose the correct word:
          </p>
          <div className="grid gap-2.5">
            {options.map((option, i) => (
              <button
                key={option}
                onClick={() => !answered && onSubmit(option)}
                disabled={answered}
                style={{ animationDelay: `${i * 60}ms` }}
                className="w-full text-left px-5 py-3 rounded-xl border-2 bg-secondary hover:bg-muted border-border hover:border-primary/50 text-foreground hover:scale-[1.02] active:scale-[0.98] font-body transition-all duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* After answering — show correction */}
      {answered && (
        <div className={`text-center space-y-2 p-4 rounded-xl border-2 ${isCorrect ? "border-green-200 bg-green-50/50" : "border-red-200 bg-red-50/50"}`}>
          {!isCorrect && (
            <p className="text-sm font-display font-semibold text-red-600">
              Your answer: <span className="line-through">{selectedAnswer}</span>
            </p>
          )}
          <p className="text-lg font-display font-bold text-green-600">
            ✅ Correct replacement: <em>{data.correction}</em>
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 italic">{data.reason}</p>
        </div>
      )}
    </div>
  );
};

// --- Multiple Choice ---
const MultipleChoiceView = ({
  question,
  answered,
  selectedAnswer,
  isCorrect,
  onSubmit,
}: {
  question: GrammarQuestion;
  answered: boolean;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  onSubmit: (a: string) => void;
}) => {
  const data = question.multipleChoice!;
  const correct = data.correctOption;

  const getOptionStyle = (option: string) => {
    if (!answered)
      return "bg-secondary hover:bg-muted border-border hover:border-primary/50 text-foreground hover:scale-[1.02] active:scale-[0.98]";
    if (option === correct)
      return "bg-success/20 border-success text-success animate-bounce-once";
    if (option === selectedAnswer && !isCorrect)
      return "bg-destructive/20 border-destructive text-destructive animate-shake";
    return "bg-secondary border-border text-muted-foreground opacity-50";
  };

  return (
    <div className="space-y-5">
      <p className="text-center font-body text-base text-muted-foreground">
        {data.question}
      </p>
      <div className="grid gap-2.5">
        {data.options.map((option, i) => (
          <button
            key={option}
            onClick={() => !answered && onSubmit(option)}
            disabled={answered}
            style={{ animationDelay: `${i * 60}ms` }}
            className={`w-full text-left px-5 py-3 rounded-xl border-2 font-body transition-all duration-200 text-sm ${getOptionStyle(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- Sentence Reorder ---
const SentenceReorderView = ({
  question,
  answered,
  isCorrect,
  onSubmit,
}: {
  question: GrammarQuestion;
  answered: boolean;
  isCorrect: boolean | null;
  onSubmit: (a: string) => void;
}) => {
  const data = question.sentenceReorder;

  const safeWords: string[] = (data?.words && Array.isArray(data.words)) ? data.words : [];
  const safeOrders: number[][] = (data?.correctOrders && Array.isArray(data.correctOrders) && data.correctOrders.length > 0) ? data.correctOrders : [];

  const [wordOrder, setWordOrder] = useState<number[]>(() => {
    if (safeWords.length === 0) return [];
    const idxs = safeWords.map((_, i) => i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }
    return idxs;
  });

  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // NOW we can safely bail out after hooks
  if (!data || safeWords.length === 0 || safeOrders.length === 0) {
    return (
      <div className="text-center p-4 rounded-xl border-2 border-red-200 bg-red-50 text-red-600">
        Error: Invalid sentence reorder question data
      </div>
    );
  }

  const isCorrectOrder = (submittedOrder: number[]): boolean => {
    return safeOrders.some(
      (correctOrder) =>
        submittedOrder.length === correctOrder.length &&
        submittedOrder.every((idx, pos) => idx === correctOrder[pos])
    );
  };

  const correctSentences = safeOrders.map((order) =>
    order.map((idx) => safeWords[idx]).join(" ")
  );
  const firstCorrectSentence = correctSentences[0];

  const handleWordClick = (wordIdx: number) => {
    if (answered || submitted) return;
    if (selected.includes(wordIdx)) {
      setSelected((s) => s.filter((i) => i !== wordIdx));
    } else {
      const next = [...selected, wordIdx];
      setSelected(next);
      if (next.length === safeWords.length) {
        const sentence = next.map((i) => safeWords[i]).join(" ");
        setSubmitted(true);
        onSubmit(sentence);
      }
    }
  };

  return (
    <div className="space-y-5">
      <p className="text-center text-muted-foreground text-sm font-body">
        Arrange the words to form a correct sentence:
      </p>

      {/* Built sentence display */}
      <div className="min-h-[52px] bg-secondary rounded-xl border-2 border-dashed border-border px-4 py-3 flex flex-wrap gap-1.5 items-center">
        {selected.length === 0 ? (
          <span className="text-muted-foreground text-sm italic">
            Click words below to build the sentence…
          </span>
        ) : (
          selected.map((wIdx, pos) => (
            <span
              key={pos}
              onClick={() =>
                !answered && !submitted && setSelected((s) => s.filter((_, i) => i !== pos))
              }
              className={`inline-block px-2.5 py-1 rounded-lg text-sm font-body cursor-pointer border-2 transition-all ${
                answered
                  ? isCorrect
                    ? "border-success bg-success/20 text-success cursor-default"
                    : "border-destructive bg-destructive/20 text-destructive cursor-default"
                  : "border-primary bg-primary/10 text-primary hover:opacity-80"
              }`}
            >
              {safeWords[wIdx]}
            </span>
          ))
        )}
      </div>

      {/* Word bank */}
      {!answered && (
        <div className="flex flex-wrap gap-2 justify-center">
          {wordOrder.map((wordIdx) => {
            const isUsed = selected.includes(wordIdx);
            return (
              <button
                key={wordIdx}
                onClick={() => handleWordClick(wordIdx)}
                disabled={isUsed || submitted}
                className={`px-3 py-1.5 rounded-lg border-2 font-body text-sm transition-all duration-150 ${
                  isUsed
                    ? "border-transparent bg-secondary/50 text-transparent cursor-default"
                    : "border-border bg-secondary text-foreground hover:border-primary hover:bg-primary/10 hover:scale-105 active:scale-95"
                }`}
              >
                {safeWords[wordIdx]}
              </button>
            );
          })}
        </div>
      )}

      {/* Answer reveal */}
      {answered && !isCorrect && (
        <div className="text-center p-3 rounded-xl border-2 border-success/40 bg-success/10">
          <p className="text-xs text-muted-foreground mb-1 font-display uppercase tracking-widest">
            Correct sentence
          </p>
          <p className="font-body font-semibold text-success">{firstCorrectSentence}</p>
          {correctSentences.length > 1 && (
            <p className="text-xs text-muted-foreground mt-2 italic">
              (Multiple correct word orders are acceptable)
            </p>
          )}
        </div>
      )}

      {/* Clear button */}
      {!answered && !submitted && selected.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => setSelected([])}
            className="text-xs text-muted-foreground hover:text-destructive underline transition-colors"
          >
            Clear and start over
          </button>
        </div>
      )}
    </div>
  );
};

// --- Explanation Panel ---
const ExplanationPanel = ({
  question,
  isCorrect,
}: {
  question: GrammarQuestion;
  isCorrect: boolean | null;
}) => (
  <div
    className={`mt-4 p-4 rounded-xl border-2 text-sm space-y-1 ${
      isCorrect
        ? "border-success/30 bg-success/5"
        : "border-primary/30 bg-primary/5"
    }`}
  >
    <p className="font-display font-semibold text-foreground text-xs uppercase tracking-widest">
      📚 {question.grammarRule}
    </p>
    <p className="font-body text-foreground">{question.explanation}</p>
    {question.tip && (
      <p className="font-body text-muted-foreground italic">💡 {question.tip}</p>
    )}
  </div>
);

// --- Question Type Labels ---

const questionTypeLabel: Record<string, string> = {
  "gap-fill": "Fill the Gap",
  "error-spot": "Spot the Error",
  "multiple-choice": "Multiple Choice",
  "sentence-reorder": "Reorder",
};

// --- Main Card ---
const GrammarQuestionCard = ({
  question,
  answered,
  selectedAnswer,
  isCorrect,
  streak,
  transitioning,
  onSubmit,
}: GrammarQuestionCardProps) => {
  const characterPose: CharacterPose = !answered
    ? "thinking"
    : isCorrect
    ? "happy"
    : "sad";

  const renderQuestionBody = () => {
    switch (question.type) {
      case "gap-fill":
        return (
          <GapFillView
            question={question}
            answered={answered}
            selectedAnswer={selectedAnswer}
            isCorrect={isCorrect}
            onSubmit={onSubmit}
          />
        );
      case "error-spot":
        return (
          <ErrorSpotView
            question={question}
            answered={answered}
            selectedAnswer={selectedAnswer}
            isCorrect={isCorrect}
            onSubmit={onSubmit}
          />
        );
      case "multiple-choice":
        return (
          <MultipleChoiceView
            question={question}
            answered={answered}
            selectedAnswer={selectedAnswer}
            isCorrect={isCorrect}
            onSubmit={onSubmit}
          />
        );
      case "sentence-reorder":
        return (
          <SentenceReorderView
            question={question}
            answered={answered}
            isCorrect={isCorrect}
            onSubmit={onSubmit}
          />
        );
    }
  };

  return (
    <div className="flex items-start gap-6 w-full">
      <GameCharacter pose={characterPose} className="flex-shrink-0 mt-4" />

      <div
        className={`flex-1 w-full max-w-lg mx-auto space-y-5 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-md relative overflow-hidden transition-all duration-300 ${
          transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0 animate-slide-up"
        }`}
      >
        {/* Reaction emoji overlay */}
        {answered && isCorrect !== null && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <span
              className={`text-7xl ${isCorrect ? "animate-emoji-correct" : "animate-emoji-wrong"}`}
            >
              {isCorrect ? "🎉" : "😬"}
            </span>
          </div>
        )}

        {/* Streak badge */}
        {streak >= 2 && (
          <div
            className={`absolute -top-1 -right-1 bg-primary text-primary-foreground px-3 py-1 rounded-bl-xl rounded-tr-2xl font-display text-sm font-bold ${
              streak >= 3 ? "animate-pulse" : ""
            }`}
          >
            🔥 {streak} in a row!
          </div>
        )}

        <div className="flex flex-col gap-1">
          <h2 className="text-base uppercase tracking-widest text-accent font-display font-bold">
            {questionTypeLabel[question.type]}
          </h2>
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-display font-medium leading-tight">
            {question.grammarRule}
          </p>
        </div>

        {/* Question body */}
        {renderQuestionBody()}

        {/* Explanation panel — shown after answering */}
        {answered && question.type !== "error-spot" && (
          <ExplanationPanel question={question} isCorrect={isCorrect} />
        )}
      </div>
    </div>
  );
};

export default GrammarQuestionCard;
