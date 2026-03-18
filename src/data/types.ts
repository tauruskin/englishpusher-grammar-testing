/**
 * EnglishPusher Grammar Testing - Type Definitions
 * UPDATED: sentenceReorder now uses correctOrders (array of arrays)
 */

/**
 * Question types available in the grammar testing app
 */
export type GrammarQuestionType = 
  | 'gap-fill' 
  | 'error-spot' 
  | 'multiple-choice' 
  | 'sentence-reorder';

/**
 * Difficulty levels
 */
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Base grammar question interface
 */
export interface GrammarQuestion {
  id: string;
  topic: string;
  type: GrammarQuestionType;
  difficulty: DifficultyLevel;
  sentence: string;
  grammarRule: string;
  explanation: string;
  tip?: string;
  
  gapFill?: GapFillData;
  errorSpot?: ErrorSpotData;
  multipleChoice?: MultipleChoiceData;
  sentenceReorder?: SentenceReorderData;
}

/**
 * Data structure for gap-fill questions
 */
export interface GapFillData {
  gapIndex: number;
  correctAnswer: string;
  alternatives?: string[];
  options: string[];
  correctOptionIndex?: number;
}

/**
 * Data structure for error-spot questions
 */
export interface ErrorSpotData {
  errorWordIndex: number;
  wrongWord: string;
  correction: string;
  reason: string;
  correctionOptions?: string[];
}

/**
 * Data structure for multiple-choice questions
 */
export interface MultipleChoiceData {
  question: string;
  correctOption: string;
  options: string[];
  optionExplanations?: {
    [key: string]: string;
  };
}

/**
 * Data structure for sentence-reorder questions
 * UPDATED: Now uses correctOrders (array of arrays) to accept multiple valid orderings
 */
export interface SentenceReorderData {
  words: string[];
  correctOrders: number[][]; // CHANGED: Array of acceptable word orders
  wordHints?: {
    [index: number]: string;
  };
}

/**
 * A complete grammar topic with multiple questions
 */
export interface GrammarTopic {
  id: string;
  name: string;
  description: string;
  rules: GrammarQuestion[];
}

/**
 * Game state for tracking user progress
 */
export interface GameState {
  currentQuestionIndex: number;
  score: number;
  streak: number;
  maxStreak: number;
  isActive: boolean;
  isComplete: boolean;
  startTime: number;
  incorrectQuestionIds: string[];
}

/**
 * Result of a single question submission
 */
export interface QuestionResult {
  questionId: string;
  question: GrammarQuestion;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeTaken?: number;
}

/**
 * Game results summary
 */
export interface GameResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  maxStreak: number;
  totalTime: number;
  questionResults: QuestionResult[];
  weakAreas: GrammarQuestion[];
  ruleBreakdown: {
    [rule: string]: {
      correct: number;
      total: number;
      percentage: number;
    };
  };
}

/**
 * Topic selector option
 */
export interface TopicOption {
  id: string;
  name: string;
  description: string;
  ruleCount: number;
}
