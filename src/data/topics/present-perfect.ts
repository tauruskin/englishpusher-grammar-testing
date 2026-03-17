import { GrammarQuestion } from '@/data/types';

/**
 * Present Perfect Tense - Grammar Questions
 * 
 * This topic covers:
 * - Actions starting in the past and continuing to present
 * - Recent past actions with present relevance
 * - Actions completed at an unspecified time
 */
export const presentPerfectQuestions: GrammarQuestion[] = [
  // QUESTION 1 - Gap Fill (Beginner)
  {
    id: 'pp-gap-1',
    topic: 'present-perfect',
    type: 'gap-fill',
    difficulty: 'beginner',
    sentence: 'I ___ in London for five years.',
    grammarRule: 'Present Perfect - Duration',
    explanation: 'Use "have lived" to show an action that started in the past and continues now.',
    tip: 'Duration: How long? → have/has + past participle',
    gapFill: {
      gapIndex: 1,
      correctAnswer: 'have lived',
      options: ['have lived', 'lived', 'am living', 'have been living'],
      correctOptionIndex: 0,
    },
  },

  // QUESTION 2 - Gap Fill (Beginner)
  {
    id: 'pp-gap-2',
    topic: 'present-perfect',
    type: 'gap-fill',
    difficulty: 'beginner',
    sentence: 'She ___ her homework already.',
    grammarRule: 'Present Perfect - Completed Action',
    explanation: 'Use "has finished" for an action completed at an unspecified time in the past.',
    tip: 'Just completed? → have/has + past participle + already',
    gapFill: {
      gapIndex: 1,
      correctAnswer: 'has finished',
      options: ['has finished', 'finished', 'is finishing', 'finishes'],
      correctOptionIndex: 0,
    },
  },

  // QUESTION 3 - Error Spot (Beginner)
  {
    id: 'pp-error-1',
    topic: 'present-perfect',
    type: 'error-spot',
    difficulty: 'beginner',
    sentence: 'He has go to the store three times this week.',
    grammarRule: 'Present Perfect - Past Participle Form',
    explanation: 'Present Perfect requires the past participle form, not the base verb.',
    errorSpot: {
      errorWordIndex: 2,
      wrongWord: 'go',
      correction: 'gone',
      reason: '"Go" is the base form. After "has", we need the past participle "gone".',
      correctionOptions: ['gone', 'goes', 'went', 'going'],
    },
  },

  // QUESTION 4 - Error Spot (Beginner)
  {
    id: 'pp-error-2',
    topic: 'present-perfect',
    type: 'error-spot',
    difficulty: 'beginner',
    sentence: 'They have saw the movie twice.',
    grammarRule: 'Present Perfect - Past Participle Form',
    explanation: 'Present Perfect uses "have/has + past participle", not the simple past.',
    errorSpot: {
      errorWordIndex: 2,
      wrongWord: 'saw',
      correction: 'seen',
      reason: '"Saw" is the simple past form. The past participle of "see" is "seen".',
      correctionOptions: ['seen', 'see', 'seeing', 'saw'],
    },
  },

  // QUESTION 5 - Multiple Choice (Beginner)
  {
    id: 'pp-mc-1',
    topic: 'present-perfect',
    type: 'multiple-choice',
    difficulty: 'beginner',
    sentence: 'Pick the grammatically correct sentence:',
    grammarRule: 'Present Perfect - Structure',
    explanation: 'Present Perfect is formed as: subject + have/has + past participle',
    multipleChoice: {
      question: 'Which sentence is grammatically correct?',
      correctOption: 'I have eaten breakfast already.',
      options: [
        'I have eaten breakfast already.',
        'I have eat breakfast already.',
        'I am eaten breakfast already.',
        'I did have eaten breakfast already.',
      ],
      optionExplanations: {
        'I have eaten breakfast already.': 'Correct! "have" + past participle "eaten"',
        'I have eat breakfast already.': 'Wrong. "Eat" is the base form; need "eaten".',
        'I am eaten breakfast already.': 'Wrong. This is passive voice, not present perfect.',
        'I did have eaten breakfast already.': 'Wrong. This doubles the past marker unnecessarily.',
      },
    },
  },

  // QUESTION 6 - Multiple Choice (Beginner)
  {
    id: 'pp-mc-2',
    topic: 'present-perfect',
    type: 'multiple-choice',
    difficulty: 'beginner',
    sentence: 'Which sentence uses Present Perfect correctly?',
    grammarRule: 'Present Perfect vs Simple Past',
    explanation: 'Use Present Perfect for recent actions or duration up to now. Use Simple Past for completed past actions.',
    multipleChoice: {
      question: 'Which sentence is correct?',
      correctOption: 'I have written three emails today.',
      options: [
        'I have written three emails today.',
        'I wrote three emails today (but it\'s midnight).',
        'I have written three emails yesterday.',
        'I am written three emails today.',
      ],
      optionExplanations: {
        'I have written three emails today.': 'Correct! "Today" = Present Perfect (duration from this morning to now)',
        'I wrote three emails today (but it\'s midnight).': 'Wrong. Without context, this is grammatical but odd.',
        'I have written three emails yesterday.': 'Wrong. "Yesterday" = completed past → use Simple Past "wrote".',
        'I am written three emails today.': 'Wrong. "Am written" is incorrect structure.',
      },
    },
  },

  // QUESTION 7 - Sentence Reorder (Intermediate)
  {
    id: 'pp-reorder-1',
    topic: 'present-perfect',
    type: 'sentence-reorder',
    difficulty: 'intermediate',
    sentence: 'They have finished their homework already.',
    grammarRule: 'Present Perfect - Word Order',
    explanation: 'Present Perfect word order: subject + have/has + past participle + adverbs/objects',
    sentenceReorder: {
      words: ['They', 'finished', 'have', 'homework', 'already', 'their'],
      correctOrder: [0, 2, 1, 4, 3, 5], // They(0) have(2) finished(1) already(4) their(3) homework(5)
    },
  },

  // QUESTION 8 - Sentence Reorder (Intermediate)
  {
    id: 'pp-reorder-2',
    topic: 'present-perfect',
    type: 'sentence-reorder',
    difficulty: 'intermediate',
    sentence: 'Has she ever been to Japan?',
    grammarRule: 'Present Perfect Questions - Word Order',
    explanation: 'In questions: have/has + subject + past participle + rest',
    sentenceReorder: {
      words: ['Has', 'Japan', 'ever', 'been', 'to', 'she'],
      correctOrder: [0, 5, 3, 2, 4, 1], // Has(0) she(5) been(3) ever(2) to(4) Japan(1)
    },
  },

  // QUESTION 9 - Gap Fill (Intermediate)
  {
    id: 'pp-gap-3',
    topic: 'present-perfect',
    type: 'gap-fill',
    difficulty: 'intermediate',
    sentence: '___ you ever been to Paris?',
    grammarRule: 'Present Perfect Questions - Have/Has',
    explanation: 'Questions use: Have you / Has he-she-it + past participle?',
    tip: 'Question formation: Have/Has + subject + past participle?',
    gapFill: {
      gapIndex: 0,
      correctAnswer: 'Have',
      options: ['Have', 'Has', 'Do', 'Did'],
      correctOptionIndex: 0,
    },
  },

  // QUESTION 10 - Error Spot (Intermediate)
  {
    id: 'pp-error-3',
    topic: 'present-perfect',
    type: 'error-spot',
    difficulty: 'intermediate',
    sentence: 'We have not went to that restaurant since 2020.',
    grammarRule: 'Present Perfect Negative - Past Participle',
    explanation: 'Negative form still requires the past participle, not the simple past.',
    errorSpot: {
      errorWordIndex: 3,
      wrongWord: 'went',
      correction: 'been',
      reason: 'After "have not", use the past participle "been" (for "have been to").',
      correctionOptions: ['been', 'went', 'go', 'going'],
    },
  },

  // QUESTION 11 - Multiple Choice (Intermediate)
  {
    id: 'pp-mc-3',
    topic: 'present-perfect',
    type: 'multiple-choice',
    difficulty: 'intermediate',
    sentence: 'What is the main difference between Present Perfect and Simple Past?',
    grammarRule: 'Present Perfect vs Simple Past - Use',
    explanation: 'Present Perfect = relevance to now. Simple Past = finished, no connection to present.',
    multipleChoice: {
      question: 'Choose the best explanation:',
      correctOption: 'Present Perfect connects past to present; Simple Past is purely past.',
      options: [
        'Present Perfect connects past to present; Simple Past is purely past.',
        'Present Perfect is for actions that happened yesterday; Simple Past is for last week.',
        'Present Perfect and Simple Past mean the same thing.',
        'Present Perfect is newer English; Simple Past is old English.',
      ],
    },
  },

  // QUESTION 12 - Error Spot (Intermediate)
  {
    id: 'pp-error-4',
    topic: 'present-perfect',
    type: 'error-spot',
    difficulty: 'intermediate',
    sentence: 'Have you finish your work yet?',
    grammarRule: 'Present Perfect - Third-Person Form',
    explanation: 'With "you", use "have" (not "has"), but still need the past participle.',
    errorSpot: {
      errorWordIndex: 2,
      wrongWord: 'finish',
      correction: 'finished',
      reason: 'After "have", the verb must be in past participle form "finished", not the base form.',
      correctionOptions: ['finished', 'finishes', 'finishing', 'finish'],
    },
  },

  // QUESTION 13 - Gap Fill (Advanced)
  {
    id: 'pp-gap-4',
    topic: 'present-perfect',
    type: 'gap-fill',
    difficulty: 'advanced',
    sentence: 'By the end of this month, we ___ here for exactly two years.',
    grammarRule: 'Present Perfect by a Future Point',
    explanation: 'Use Present Perfect to describe an action that will be ongoing up to a future point.',
    tip: 'Duration to a specific point: "By + future time, have/has + been + -ing or just past participle"',
    gapFill: {
      gapIndex: 4,
      correctAnswer: 'will have been',
      options: ['will have been', 'have been', 'are being', 'will be'],
      correctOptionIndex: 0,
    },
  },

  // QUESTION 14 - Sentence Reorder (Advanced)
  {
    id: 'pp-reorder-3',
    topic: 'present-perfect',
    type: 'sentence-reorder',
    difficulty: 'advanced',
    sentence: 'She has been working on this project since January.',
    grammarRule: 'Present Perfect Continuous - Word Order',
    explanation: 'Present Perfect Continuous: subject + have/has + been + -ing form + duration',
    sentenceReorder: {
      words: ['She', 'working', 'has', 'been', 'on', 'since', 'January', 'this', 'project'],
      correctOrder: [0, 2, 3, 1, 4, 8, 5, 6, 7], // She(0) has(2) been(3) working(1) on(4) this(8) project(7) since(5) January(6)
    },
  },

  // QUESTION 15 - Multiple Choice (Advanced)
  {
    id: 'pp-mc-4',
    topic: 'present-perfect',
    type: 'multiple-choice',
    difficulty: 'advanced',
    sentence: 'Which sentence correctly uses Present Perfect Continuous?',
    grammarRule: 'Present Perfect Continuous - Structure & Use',
    explanation: 'Present Perfect Continuous (have been + -ing) shows an action that started in the past and is still ongoing.',
    multipleChoice: {
      question: 'Select the correct sentence:',
      correctOption: 'I have been studying English for three years.',
      options: [
        'I have been studying English for three years.',
        'I have studied English for three years.',
        'I am studying English for three years.',
        'I have been study English for three years.',
      ],
      optionExplanations: {
        'I have been studying English for three years.': 'Correct! "Have been studying" = ongoing action that started 3 years ago.',
        'I have studied English for three years.': 'Grammatical but less natural; suggests completed units.',
        'I am studying English for three years.': 'Wrong. Present Continuous with "for 3 years" is incorrect.',
        'I have been study English for three years.': 'Wrong. Need "studying" (gerund/participle), not base form.',
      },
    },
  },
];

/**
 * Grammar topic definition
 */
export const presentPerfectTopic = {
  id: 'present-perfect',
  name: 'Present Perfect Tense',
  description: 'Master the Present Perfect tense: actions starting in the past and continuing to the present, recent past actions with present relevance, and experiences at an unspecified time.',
  rules: presentPerfectQuestions,
};

export default presentPerfectQuestions;
