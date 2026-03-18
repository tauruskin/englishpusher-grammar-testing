import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useGrammarGame } from "../useGrammarGame";
import { GrammarQuestion } from "@/data/types";

// Mock data for testing
const mockQuestions: GrammarQuestion[] = [
  {
    id: "reorder-1",
    topic: "test",
    type: "sentence-reorder",
    difficulty: "beginner",
    sentence: "I am reading a book.",
    grammarRule: "Present Continuous",
    explanation: "Test explanation",
    sentenceReorder: {
      words: ["I", "am", "reading", "a", "book"],
      correctOrders: [
        [0, 1, 2, 3, 4], // I am reading a book
      ],
    },
  },
  {
    id: "reorder-multi",
    topic: "test",
    type: "sentence-reorder",
    difficulty: "intermediate",
    sentence: "I usually work, but today I am resting.",
    grammarRule: "Contrast",
    explanation: "Test explanation",
    sentenceReorder: {
      words: ["I", "usually", "work", "but", "today", "am", "resting"],
      correctOrders: [
        [0, 1, 2, 3, 4, 0, 5, 6], // I usually work but today I am resting (wait, I need to make sure words are distinct or handle indices)
        // Let's use a simpler one with multiple valid orders
      ],
    },
  },
];

const mockQuestionsSimple: GrammarQuestion[] = [
    {
      id: "reorder-simple",
      topic: "test",
      type: "sentence-reorder",
      difficulty: "beginner",
      sentence: "He is here.",
      grammarRule: "Word Order",
      explanation: "Test",
      sentenceReorder: {
        words: ["He", "is", "here"],
        correctOrders: [
          [0, 1, 2], // He is here
          [2, 1, 0], // Here is he (technically poetic but let's test multiple)
        ],
      },
    },
];

describe("useGrammarGame - REORDER fixes", () => {
  it("should correctly identify all valid orders for a sentence-reorder question", () => {
    const { result } = renderHook(() => useGrammarGame(mockQuestionsSimple));
    
    // Test first valid order
    act(() => {
      result.current.submitAnswer("He is here");
    });
    expect(result.current.isCorrect).toBe(true);
    
    // Reset and test second valid order
    act(() => {
        result.current.restart(mockQuestionsSimple);
    });
    
    act(() => {
        result.current.submitAnswer("here is He");
    });
    expect(result.current.isCorrect).toBe(true);
  });

  it("should mark incorrect order as wrong", () => {
    const { result } = renderHook(() => useGrammarGame(mockQuestionsSimple));
    
    act(() => {
      result.current.submitAnswer("is He here");
    });
    expect(result.current.isCorrect).toBe(false);
  });
});
