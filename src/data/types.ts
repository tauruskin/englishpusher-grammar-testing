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
 * All questions share these common properties
 */
export interface GrammarQuestion {
  /** Unique identifier for this question */
  id: string;
  
  /** Which grammar topic/rule this belongs to */
  topic: string;
  
  /** Type of question */
  type: GrammarQuestionType;
  
  /** Difficulty level */
  difficulty: DifficultyLevel;
  
  /** The main sentence being tested */
  sentence: string;
  
  /** Name of the grammar rule being tested (e.g., "Present Perfect", "Passive Voice") */
  grammarRule: string;
  
  /** Explanation of why the correct answer is right */
  explanation: string;
  
  /** Optional: Additional context or tip for learners */
  tip?: string;
  
  /** Type-specific data for gap-fill questions */
  gapFill?: GapFillData;
  
  /** Type-specific data for error-spot questions */
  errorSpot?: ErrorSpotData;
  
  /** Type-specific data for multiple-choice questions */
  multipleChoice?: MultipleChoiceData;
  
  /** Type-specific data for sentence-reorder questions */
  sentenceReorder?: SentenceReorderData;
}

/**
 * Data structure for gap-fill questions
 * User fills a blank in a sentence with the correct word/form
 */
export interface GapFillData {
  /** Index of the word that should be filled in */
  gapIndex: number;
  
  /** The correct answer */
  correctAnswer: string;
  
  /** Alternative correct answers (if any) */
  alternatives?: string[];
  
  /** 4 options to choose from (1 correct, 3 distractors) */
  options: string[];
  
  /** Optional: Which word from options is correct (if not the first) */
  correctOptionIndex?: number;
}

/**
 * Data structure for error-spot questions
 * User identifies and corrects an error in a sentence
 */
export interface ErrorSpotData {
  /** Index of the word that contains the error */
  errorWordIndex: number;
  
  /** The incorrect word in the sentence */
  wrongWord: string;
  
  /** What it should be */
  correction: string;
  
  /** Why the original is wrong */
  reason: string;
  
  /** 4 correction options (1 correct, 3 distractors) */
  correctionOptions?: string[];
}

/**
 * Data structure for multiple-choice questions
 * User chooses the grammatically correct sentence from options
 */
export interface MultipleChoiceData {
  /** The question being asked */
  question: string;
  
  /** The correct option */
  correctOption: string;
  
  /** 4 options total (1 correct, 3 incorrect) */
  options: string[];
  
  /** Optional: Explanation for why each wrong option is incorrect */
  optionExplanations?: {
    [key: string]: string;
  };
}

/**
 * Data structure for sentence-reorder questions
 * User arranges scrambled words in the correct order
 */
export interface SentenceReorderData {
  /** All words in the sentence, in order */
  words: string[];
  
  /** Indices showing the correct order (which position each word should be in) */
  correctOrder: number[];
  
  /** Optional: Words can have hints or additional information */
  wordHints?: {
    [index: number]: string;
  };
}

/**
 * A complete grammar topic with multiple questions
 */
export interface GrammarTopic {
  /** Unique identifier for the topic */
  id: string;
  
  /** Display name (e.g., "Present Perfect Tense") */
  name: string;
  
  /** Description of what this topic covers */
  description: string;
  
  /** Array of all questions in this topic */
  rules: GrammarQuestion[];
}

/**
 * Game state for tracking user progress
 */
export interface GameState {
  /** Current question number (0-indexed) */
  currentQuestionIndex: number;
  
  /** Score so far */
  score: number;
  
  /** Number of correct answers in a row */
  streak: number;
  
  /** Maximum streak reached */
  maxStreak: number;
  
  /** Whether the game is currently in progress */
  isActive: boolean;
  
  /** Whether the game has ended */
  isComplete: boolean;
  
  /** Timestamp when game started */
  startTime: number;
  
  /** Array of question IDs that were answered incorrectly */
  incorrectQuestionIds: string[];
}

/**
 * Result of a single question submission
 */
export interface QuestionResult {
  /** The question ID */
  questionId: string;
  
  /** The question that was asked */
  question: GrammarQuestion;
  
  /** User's answer */
  userAnswer: string;
  
  /** Correct answer */
  correctAnswer: string;
  
  /** Whether the answer was correct */
  isCorrect: boolean;
  
  /** Time taken to answer (in milliseconds) */
  timeTaken?: number;
}

/**
 * Game results summary
 */
export interface GameResults {
  /** Total score */
  score: number;
  
  /** Total questions answered */
  totalQuestions: number;
  
  /** Number of correct answers */
  correctAnswers: number;
  
  /** Percentage score */
  percentage: number;
  
  /** Highest streak */
  maxStreak: number;
  
  /** Total time taken (in seconds) */
  totalTime: number;
  
  /** Array of results for each question */
  questionResults: QuestionResult[];
  
  /** Questions that should be practiced (answered incorrectly) */
  weakAreas: GrammarQuestion[];
  
  /** Breakdown by grammar rule */
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
