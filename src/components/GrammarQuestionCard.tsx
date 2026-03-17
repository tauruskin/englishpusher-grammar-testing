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

const instructionText: Record<string, string> = {
  "gap-fill": "Fill in the blank with the correct word",
  "error-spot": "Find and correct the mistake in the sentence",
  "multiple-choice": "Choose the grammatically correct sentence",
  "sentence-reorder": "Put the words in the correct order",
};

const questionTypeLabel: Record<string, string> = {
  "gap-fill": "Fill the Gap",
  "error-spot": "Spot the Error",
  "multiple-choice": "Multiple Choice",
  "sentence-reorder": "Reorder",
};

// --- Shared Components ---

const WordBox: React.FC<{ 
  children: React.ReactNode; 
  variant?: "default" | "correct" | "wrong" | "gap" | "active";
  className?: string;
}> = ({ 
  children, 
  variant = "default", 
  className = "" 
}) => {
  const styles = {
    default: "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100",
    correct: "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400 font-bold",
    wrong: "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400 font-bold line-through",
    gap: "bg-slate-50 dark:bg-slate-900/50 border-dashed border-primary/40 min-w-[3rem]",
    active: "bg-primary/5 border-primary text-primary font-bold"
  };

  return (
    <div className={`px-3 py-2 rounded-lg border-2 text-base md:text-lg transition-all shadow-sm ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
};

const AnswerOption: React.FC<{
  option: string;
  onClick: () => void;
  disabled: boolean;
  variant?: "default" | "correct" | "wrong" | "faded";
  delay?: number;
}> = ({
  option,
  onClick,
  disabled,
  variant = "default",
  delay = 0,
}) => {
  const styles = {
    default: "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/50 shadow-sm",
    correct: "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400 font-bold shadow-green-100 dark:shadow-none",
    wrong: "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400 font-bold shadow-red-100 dark:shadow-none",
    faded: "bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 opacity-60 grayscale-[0.5]"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ animationDelay: `${delay}ms` }}
      className={`w-full text-left px-5 py-4 rounded-xl border-2 font-body transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] ${styles[variant]}`}
    >
      {option}
    </button>
  );
};

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
  const words = question.sentence.split(" ");

  return (
    <div className="space-y-8">
      {/* Boxed Sentence */}
      <div className="flex flex-wrap gap-2 justify-center">
        {words.map((word, idx) => {
          if (word === "___") {
            const variant = answered ? (isCorrect ? "correct" : "wrong") : "gap";
            return (
              <WordBox key={idx} variant={variant}>
                {answered ? data.correctAnswer : "\u00a0\u00a0\u00a0\u00a0\u00a0"}
              </WordBox>
            );
          }
          return <WordBox key={idx}>{word}</WordBox>;
        })}
      </div>

      {!answered && (
        <div className="space-y-4">
          <p className="text-center text-xs font-display font-bold text-muted-foreground uppercase tracking-wider">
            Choose the correct word:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.options.map((option, i) => (
              <AnswerOption
                key={option}
                option={option}
                onClick={() => onSubmit(option)}
                disabled={answered}
                delay={i * 50}
              />
            ))}
          </div>
        </div>
      )}
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
    <div className="space-y-8">
      {/* Boxed Sentence */}
      <div className="flex flex-wrap gap-2 justify-center">
        {words.map((word, idx) => {
          const isError = idx === data.errorWordIndex;
          let variant: "default" | "correct" | "wrong" = "default";
          if (answered && isError) {
            variant = isCorrect ? "correct" : "wrong";
          }
          return <WordBox key={idx} variant={variant}>{word}</WordBox>;
        })}
      </div>

      {!answered && (
        <div className="space-y-4">
          <p className="text-center text-xs font-display font-bold text-muted-foreground uppercase tracking-wider">
            Choose the correct replacement:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map((option, i) => (
              <AnswerOption
                key={option}
                option={option}
                onClick={() => onSubmit(option)}
                disabled={answered}
                delay={i * 50}
              />
            ))}
          </div>
        </div>
      )}

      {answered && (
        <div className={`text-center space-y-2 p-4 rounded-xl border-2 ${isCorrect ? "border-green-200 bg-green-50/50" : "border-red-200 bg-red-50/50"}`}>
          {!isCorrect && (
            <p className="text-sm font-display font-semibold text-red-600">
              Your answer: <span className="line-through">{selectedAnswer}</span>
            </p>
          )}
          <p className="text-lg font-display font-bold text-green-600">
            ✅ Correct word: {data.correction}
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

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-center text-xs font-display font-bold text-muted-foreground uppercase tracking-wider">
          Choose the correct sentence:
        </p>
        <div className="space-y-3">
          {data.options.map((option, i) => {
            let variant: "default" | "correct" | "wrong" | "faded" = "default";
            if (answered) {
              if (option === data.correctOption) variant = "correct";
              else if (option === selectedAnswer) variant = "wrong";
              else variant = "faded";
            }
            return (
              <AnswerOption
                key={option}
                option={option}
                onClick={() => onSubmit(option)}
                disabled={answered}
                variant={variant}
                delay={i * 50}
              />
            );
          })}
        </div>
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
  const data = question.sentenceReorder!;
  const [wordOrder] = useState<number[]>(() => {
    const idxs = data.words.map((_, i) => i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }
    return idxs;
  });

  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleWordClick = (wordIdx: number) => {
    if (answered || submitted) return;
    if (selected.includes(wordIdx)) {
      setSelected((s) => s.filter((i) => i !== wordIdx));
    } else {
      const next = [...selected, wordIdx];
      setSelected(next);
      if (next.length === data.words.length) {
        setSubmitted(true);
        onSubmit(next.map(i => data.words[i]).join(" "));
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Tray for selected words */}
      <div className="min-h-[4rem] p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 justify-center items-center">
        {selected.length === 0 && !answered && (
          <p className="text-slate-400 text-sm italic">Click words below to build the sentence</p>
        )}
        {selected.map((wIdx, pos) => {
          let variant: "active" | "correct" | "wrong" = "active";
          if (answered) variant = isCorrect ? "correct" : "wrong";
          return (
            <div key={pos} onClick={() => !answered && !submitted && setSelected(s => s.filter((_, i) => i !== pos))}>
              <WordBox variant={variant} className="cursor-pointer hover:scale-105 active:scale-95">
                {data.words[wIdx]}
              </WordBox>
            </div>
          );
        })}
      </div>

      {/* Word bank */}
      {!answered && (
        <div className="flex flex-wrap gap-2 justify-center">
          {wordOrder.map((wIdx) => {
            const isUsed = selected.includes(wIdx);
            return (
              <button
                key={wIdx}
                onClick={() => handleWordClick(wIdx)}
                disabled={isUsed || submitted}
                className={`px-4 py-2 rounded-xl border-2 font-body text-base transition-all ${
                  isUsed
                    ? "bg-slate-100 dark:bg-slate-800 border-transparent text-transparent"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 shadow-sm active:scale-90"
                }`}
              >
                {data.words[wIdx]}
              </button>
            );
          })}
        </div>
      )}

      {selected.length > 0 && !answered && !submitted && (
        <div className="text-center">
          <button onClick={() => setSelected([])} className="text-xs text-slate-400 hover:text-red-500 underline transition-colors">
            Clear all
          </button>
        </div>
      )}

      {answered && !isCorrect && (
        <div className="p-4 rounded-xl border-2 border-green-200 bg-green-50/50 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Correct sentence</p>
          <p className="text-lg font-bold text-green-600">{data.correctOrder.map(i => data.words[i]).join(" ")}</p>
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
  <div className={`mt-6 p-5 rounded-2xl border-2 space-y-2 ${isCorrect ? "border-green-100 bg-green-50/30" : "border-primary/10 bg-primary/5"}`}>
    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
      📚 Grammar Rule
    </p>
    <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
      {question.explanation}
    </p>
    {question.tip && (
      <p className="text-slate-500 dark:text-slate-400 text-sm italic pt-1">
        💡 <span className="font-semibold">Tip:</span> {question.tip}
      </p>
    )}
  </div>
);

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
  const characterPose: CharacterPose = !answered ? "thinking" : isCorrect ? "happy" : "sad";

  const renderQuestionBody = () => {
    switch (question.type) {
      case "gap-fill": return <GapFillView question={question} answered={answered} selectedAnswer={selectedAnswer} isCorrect={isCorrect} onSubmit={onSubmit} />;
      case "error-spot": return <ErrorSpotView question={question} answered={answered} selectedAnswer={selectedAnswer} isCorrect={isCorrect} onSubmit={onSubmit} />;
      case "multiple-choice": return <MultipleChoiceView question={question} answered={answered} selectedAnswer={selectedAnswer} isCorrect={isCorrect} onSubmit={onSubmit} />;
      case "sentence-reorder": return <SentenceReorderView question={question} answered={answered} isCorrect={isCorrect} onSubmit={onSubmit} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-4xl mx-auto">
      {/* Teacher Character */}
      <div className="hidden md:block sticky top-24">
        <GameCharacter pose={characterPose} className="flex-shrink-0" />
      </div>

      <div className={`flex-1 w-full space-y-6 transition-all duration-300 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
        {/* Main Card Container */}
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
          
          {/* Unified Header */}
          <div className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
            <h3 className="text-primary font-display font-bold text-xs uppercase tracking-[0.2em] mb-2">
              {questionTypeLabel[question.type]}
            </h3>
            <h2 className="text-slate-900 dark:text-white font-display text-xl md:text-2xl font-black leading-tight">
              {question.grammarRule}
            </h2>
          </div>

          {/* Reaction Overlay */}
          {answered && isCorrect !== null && (
            <div className="absolute top-8 right-8 pointer-events-none z-20 animate-bounce">
              <span className="text-5xl">{isCorrect ? "🎉" : "😬"}</span>
            </div>
          )}

          {/* Instruction */}
          <p className="text-slate-600 dark:text-slate-400 font-body text-base md:text-lg mb-8 text-center max-w-md mx-auto">
            {instructionText[question.type]}
          </p>

          {/* Question Content */}
          <div className="relative z-10">
            {renderQuestionBody()}
          </div>

          {/* Explanation shown after answering */}
          {answered && (
            <ExplanationPanel question={question} isCorrect={isCorrect} />
          )}

          {/* Streak badge inside card */}
          {streak >= 3 && !answered && (
            <div className="mt-8 flex justify-center">
              <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-black shadow-lg shadow-orange-200 dark:shadow-none animate-pulse">
                🔥 {streak} STREAK!
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Character for mobile */}
      <div className="md:hidden">
        <GameCharacter pose={characterPose} />
      </div>
    </div>
  );
};

export default GrammarQuestionCard;
