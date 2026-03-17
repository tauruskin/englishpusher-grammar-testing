import { useState, useCallback, useEffect } from "react";
import { GrammarQuestion } from "@/data/types";

export interface GrammarAnswerResult {
  question: GrammarQuestion;
  userAnswer: string;
  correctAnswer: string;
  correct: boolean;
}

/** Returns the correct answer string for any GrammarQuestion type */
export function getCorrectAnswer(q: GrammarQuestion): string {
  switch (q.type) {
    case "gap-fill":
      return q.gapFill?.correctAnswer ?? "";
    case "error-spot":
      return q.errorSpot?.correction ?? "";
    case "multiple-choice":
      return q.multipleChoice?.correctOption ?? "";
    case "sentence-reorder":
      return q.sentenceReorder?.words
        .map((_, i) => q.sentenceReorder!.words[q.sentenceReorder!.correctOrder.indexOf(i)])
        .join(" ") ?? "";
    default:
      return "";
  }
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useGrammarGame(questions: GrammarQuestion[], topicId?: string) {
  const [shuffledQuestions, setShuffledQuestions] = useState<GrammarQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [streak, setStreak] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [results, setResults] = useState<GrammarAnswerResult[]>([]);

  // Initialize/reset when topic changes
  useEffect(() => {
    const q = shuffle(questions);
    setShuffledQuestions(q);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameOver(false);
    setStreak(0);
    setTransitioning(false);
    setResults([]);
  }, [topicId]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentQuestion = shuffledQuestions[currentIndex] ?? null;
  const totalQuestions = shuffledQuestions.length;

  const submitAnswer = useCallback(
    (answer: string) => {
      if (answered || !currentQuestion) return;

      const correct_answer = getCorrectAnswer(currentQuestion);
      const correct = answer.trim().toLowerCase() === correct_answer.trim().toLowerCase();

      setSelectedAnswer(answer);
      setIsCorrect(correct);
      setAnswered(true);

      if (correct) {
        setScore((s) => s + 1);
        setStreak((s) => s + 1);
      } else {
        setStreak(0);
      }

      setResults((prev) => [
        ...prev,
        {
          question: currentQuestion,
          userAnswer: answer,
          correctAnswer: correct_answer,
          correct,
        },
      ]);

      // Feedback delay before advancing
      const feedbackDelay = correct ? 2000 : 3500;

      setTimeout(() => {
        setTransitioning(true);
        setTimeout(() => {
          if (currentIndex + 1 >= totalQuestions) {
            setGameOver(true);
          } else {
            setCurrentIndex((i) => i + 1);
          }
          setAnswered(false);
          setSelectedAnswer(null);
          setIsCorrect(null);
          setTransitioning(false);
        }, 300);
      }, feedbackDelay);
    },
    [answered, currentQuestion, currentIndex, totalQuestions]
  );

  const restart = useCallback((newQuestions?: GrammarQuestion[]) => {
    const q = shuffle(newQuestions ?? questions);
    setShuffledQuestions(q);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameOver(false);
    setStreak(0);
    setTransitioning(false);
    setResults([]);
  }, [questions]);

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    answered,
    selectedAnswer,
    isCorrect,
    gameOver,
    streak,
    transitioning,
    results,
    submitAnswer,
    restart,
  };
}
