/**
 * EnglishPusher Grammar Testing - Present Simple vs Present Continuous
 * B1 Level (Speak Out)
 * 
 * This topic covers:
 * - Present Simple: habits, routines, facts, permanent situations
 * - Present Continuous: actions happening now, temporary situations
 * - Difference between the two tenses
 * - State verbs (not used in continuous)
 */

import { GrammarQuestion } from "@/data/types";

export const presentSimpleVsContinuous: GrammarQuestion[] = [
    // ===== GAP FILL QUESTIONS (7 questions) =====

    // QUESTION 1 - Gap Fill (Beginner)
    {
        id: "ps-pc-gap-1",
        topic: "present-simple-vs-continuous",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "I usually ___ coffee in the morning, but today I'm drinking tea.",
        grammarRule: "Present Simple vs Present Continuous - Habit vs Now",
        explanation: "Use 'drink' (Present Simple) for habits/routines. Use 'drinking' (Present Continuous) for what is happening right now.",
        tip: "Habit/routine = Present Simple. Right now = Present Continuous.",
        gapFill: {
            gapIndex: 2,
            correctAnswer: "drink",
            options: ["drink", "am drinking", "drinks", "drinking"],
            correctOptionIndex: 0,
        },
    },

    // QUESTION 2 - Gap Fill (Beginner)
    {
        id: "ps-pc-gap-2",
        topic: "present-simple-vs-continuous",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "She ___ her homework right now. She ___ it every evening.",
        grammarRule: "Present Continuous vs Present Simple",
        explanation: "First blank: 'is doing' (Present Continuous - happening now). Second blank: 'does' (Present Simple - habit).",
        tip: "Now/at this moment = Present Continuous. Every day/always = Present Simple.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "is doing",
            options: ["is doing", "does", "do", "doing"],
            correctOptionIndex: 0,
        },
    },

    // QUESTION 3 - Gap Fill (Beginner)
    {
        id: "ps-pc-gap-3",
        topic: "present-simple-vs-continuous",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "They ___ in London. They have lived there for 10 years.",
        grammarRule: "Present Simple - Permanent Situation",
        explanation: "Use 'live' (Present Simple) for where someone is based/permanent situation, not 'are living'.",
        tip: "Where do you live? = Present Simple (permanent).",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "live",
            options: ["live", "are living", "lives", "living"],
            correctOptionIndex: 0,
        },
    },

    // QUESTION 4 - Gap Fill (Intermediate)
    {
        id: "ps-pc-gap-4",
        topic: "present-simple-vs-continuous",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "What ___ you ___? I'm reading a book.",
        grammarRule: "Present Continuous Question",
        explanation: "Question form: 'What are you doing?' (Present Continuous for action happening now).",
        tip: "Question: What are you doing? (Action now)",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "are you doing",
            options: ["are you doing", "do you do", "you are doing", "you doing"],
            correctOptionIndex: 0,
        },
    },

    // QUESTION 5 - Gap Fill (Intermediate)
    {
        id: "ps-pc-gap-5",
        topic: "present-simple-vs-continuous",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "My sister ___ for a fashion company, but this month she ___ on a special project.",
        grammarRule: "Present Simple Job vs Present Continuous Temporary Task",
        explanation: "First blank: 'works' (Present Simple - regular job). Second blank: 'is working' (Present Continuous - temporary, this month).",
        tip: "Regular job = Present Simple. Temporary task right now = Present Continuous.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "works",
            options: ["works", "is working", "work", "working"],
            correctOptionIndex: 0,
        },
    },

    // QUESTION 6 - Gap Fill (Intermediate)
    {
        id: "ps-pc-gap-6",
        topic: "present-simple-vs-continuous",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "I ___ like horror films, so I ___ watch them.",
        grammarRule: "Present Simple - State Verbs",
        explanation: "'Like' is a state verb (feeling/opinion). We use Present Simple, never Present Continuous.",
        tip: "State verbs (like, love, hate, want, need, understand, know, believe, own, see, hear) = Present Simple only.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "don't",
            options: ["don't", "am not", "won't", "didn't"],
            correctOptionIndex: 0,
        },
    },

    // QUESTION 7 - Gap Fill (Advanced)
    {
        id: "ps-pc-gap-7",
        topic: "present-simple-vs-continuous",
        type: "gap-fill",
        difficulty: "advanced",
        sentence: "He usually ___ very seriously, but today he ___ and laughing with everyone.",
        grammarRule: "Present Simple Habit vs Present Continuous Temporary Change",
        explanation: "First blank: 'works' (habit). Second blank: 'is joking' (temporary, unusual behavior today).",
        tip: "Usually/normally = Present Simple. Today/right now (different from usual) = Present Continuous.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "works",
            options: ["works", "is working", "work", "working"],
            correctOptionIndex: 0,
        },
    },

    // ===== ERROR SPOT QUESTIONS (6 questions) =====

    // QUESTION 8 - Error Spot (Beginner)
    {
        id: "ps-pc-error-1",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "I am living in Kyiv since I was born.",
        grammarRule: "Present Simple for Permanent Situation",
        explanation: "When talking about where you live (permanent), use Present Simple, not Present Continuous.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "am living",
            correction: "live",
            reason: "Where you live is permanent, so use 'live' (Present Simple), not 'am living'.",
            correctionOptions: ["live", "living", "am live", "lives"],
        },
    },

    // QUESTION 9 - Error Spot (Beginner)
    {
        id: "ps-pc-error-2",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "My father is understanding English very well.",
        grammarRule: "State Verbs - Not Used in Continuous",
        explanation: '"Understand" is a state verb (expressing knowledge/ability). Never use it in Present Continuous.',
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "is understanding",
            correction: "understands",
            reason: "'Understand' is a state verb and cannot be used in continuous form.",
            correctionOptions: ["understands", "understand", "understanding", "is understand"],
        },
    },

    // QUESTION 10 - Error Spot (Beginner)
    {
        id: "ps-pc-error-3",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "What do you do at the moment? I work on my project.",
        grammarRule: "Present Continuous for Current Action",
        explanation: '"At the moment" indicates an action happening now, so use Present Continuous.',
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "do you do",
            correction: "are you doing",
            reason: "'At the moment' = right now = Present Continuous question.",
            correctionOptions: ["are you doing", "you do", "are you do", "doing"],
        },
    },

    // QUESTION 11 - Error Spot (Intermediate)
    {
        id: "ps-pc-error-4",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "She doesn't believe in that theory, so she is not believing it.",
        grammarRule: "State Verbs Don't Use Continuous",
        explanation: '"Believe" is a state verb. The correct form is simply "doesn\'t believe".',
        errorSpot: {
            errorWordIndex: 8,
            wrongWord: "is not believing",
            correction: "doesn't believe",
            reason: "State verbs like 'believe' are never used in continuous form.",
            correctionOptions: ["doesn't believe", "is believing", "believing", "isn't believe"],
        },
    },

    // QUESTION 12 - Error Spot (Intermediate)
    {
        id: "ps-pc-error-5",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "Every day she gets up at 7 and is having breakfast.",
        grammarRule: "Present Simple for Daily Routine",
        explanation: '"Every day" indicates a daily routine/habit. Use Present Simple for both actions.',
        errorSpot: {
            errorWordIndex: 8,
            wrongWord: "is having",
            correction: "has",
            reason: "Routine actions (every day) use Present Simple, not Present Continuous.",
            correctionOptions: ["has", "having", "is have", "have"],
        },
    },

    // QUESTION 13 - Error Spot (Advanced)
    {
        id: "ps-pc-error-6",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "advanced",
        sentence: "We usually are meeting on Fridays, but this week we are meeting on Thursday.",
        grammarRule: "Present Simple for Regular Meetings vs Present Continuous for Exception",
        explanation: '"Usually" and scheduled meetings use Present Simple. Only "this week" (exception) uses Present Continuous.',
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "are meeting",
            correction: "meet",
            reason: "Regular scheduled meetings (usually, every week) use Present Simple 'meet', not Present Continuous.",
            correctionOptions: ["meet", "meeting", "are meet", "meetings"],
        },
    },

    // ===== MULTIPLE CHOICE QUESTIONS (6 questions) =====

    // QUESTION 14 - Multiple Choice (Beginner)
    {
        id: "ps-pc-mc-1",
        topic: "present-simple-vs-continuous",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Pick the correct sentence about what is happening RIGHT NOW:",
        grammarRule: "Present Continuous - Actions Happening Now",
        explanation: "Actions happening at this moment use Present Continuous (be + -ing).",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "I am writing an email at the moment.",
            options: [
                "I am writing an email at the moment.",
                "I write an email at the moment.",
                "I am write an email at the moment.",
                "I writing an email at the moment.",
            ],
            optionExplanations: {
                "I am writing an email at the moment.": "Correct! 'At the moment' = Present Continuous (am + writing).",
                "I write an email at the moment.": "Wrong. 'At the moment' needs Present Continuous, not Simple.",
                "I am write an email at the moment.": "Wrong. Need the -ing form: am writing.",
                "I writing an email at the moment.": "Wrong. Missing the auxiliary verb: am writing.",
            },
        },
    },

    // QUESTION 15 - Multiple Choice (Beginner)
    {
        id: "ps-pc-mc-2",
        topic: "present-simple-vs-continuous",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Pick the correct sentence about a DAILY HABIT:",
        grammarRule: "Present Simple - Habits and Routines",
        explanation: "Regular habits and daily routines use Present Simple.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "She goes to the gym three times a week.",
            options: [
                "She goes to the gym three times a week.",
                "She is going to the gym three times a week.",
                "She going to the gym three times a week.",
                "She are going to the gym three times a week.",
            ],
            optionExplanations: {
                "She goes to the gym three times a week.": "Correct! 'Three times a week' = Present Simple (habit).",
                "She is going to the gym three times a week.": 'Wrong. Habits use Present Simple, not Continuous.',
                "She going to the gym three times a week.": "Wrong. Missing the auxiliary verb.",
                "She are going to the gym three times a week.": "Wrong. With 'she', use 'is' or no auxiliary (Present Simple).",
            },
        },
    },

    // QUESTION 16 - Multiple Choice (Intermediate)
    {
        id: "ps-pc-mc-3",
        topic: "present-simple-vs-continuous",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Which sentence correctly describes a PERMANENT SITUATION?",
        grammarRule: "Present Simple - Permanent Situations",
        explanation: "Permanent facts, situations, and where people live use Present Simple.",
        multipleChoice: {
            question: "Which is correct?",
            correctOption: "My brother lives in Canada and works as an engineer.",
            options: [
                "My brother lives in Canada and works as an engineer.",
                "My brother is living in Canada and is working as an engineer.",
                "My brother is living in Canada and works as an engineer.",
                "My brother living in Canada and working as an engineer.",
            ],
            optionExplanations: {
                "My brother lives in Canada and works as an engineer.": "Correct! Permanent location and job = Present Simple.",
                "My brother is living in Canada and is working as an engineer.": 'Wrong. Permanent situation needs Present Simple, not Continuous.',
                "My brother is living in Canada and works as an engineer.": "Wrong. Mix of tenses; both should be Simple for permanent.",
                "My brother living in Canada and working as an engineer.": "Wrong. Missing auxiliary verbs.",
            },
        },
    },

    // QUESTION 17 - Multiple Choice (Intermediate)
    {
        id: "ps-pc-mc-4",
        topic: "present-simple-vs-continuous",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Pick the sentence that correctly contrasts USUAL HABIT with TEMPORARY SITUATION:",
        grammarRule: "Present Simple vs Continuous - Usual vs Temporary",
        explanation: "Use Present Simple for what usually happens and Present Continuous for temporary changes.",
        multipleChoice: {
            question: "Which is correct?",
            correctOption: "I usually drive to work, but today I am taking the bus.",
            options: [
                "I usually drive to work, but today I am taking the bus.",
                "I usually am driving to work, but today I take the bus.",
                "I drive to work, and today I am taking the bus.",
                "I am usually driving to work, but today I take the bus.",
            ],
            optionExplanations: {
                "I usually drive to work, but today I am taking the bus.": "Correct! Habit (Simple) vs temporary change (Continuous).",
                "I usually am driving to work, but today I take the bus.": "Wrong. 'Usually' = Simple, not Continuous.",
                "I drive to work, and today I am taking the bus.": "Wrong. Missing 'usually' context for the contrast.",
                "I am usually driving to work, but today I take the bus.": "Wrong. 'Usually' needs Simple form, not Continuous.",
            },
        },
    },

    // QUESTION 18 - Multiple Choice (Intermediate)
    {
        id: "ps-pc-mc-5",
        topic: "present-simple-vs-continuous",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Which sentence INCORRECTLY uses Present Continuous with a STATE VERB?",
        grammarRule: "State Verbs Cannot Be Continuous",
        explanation: "State verbs (like, love, want, need, know, believe, understand, see, hear) are never used in continuous form.",
        multipleChoice: {
            question: "Which sentence has an error?",
            correctOption: "She is wanting to move to Paris.",
            options: [
                "She is wanting to move to Paris.",
                "She wants to move to Paris.",
                "He is working in an office.",
                "They are reading a book.",
            ],
            optionExplanations: {
                "She is wanting to move to Paris.": "WRONG! 'Want' is a state verb; should be 'wants'.",
                "She wants to move to Paris.": "Correct. Present Simple with state verb.",
                "He is working in an office.": "Correct. Work is dynamic (can be continuous).",
                "They are reading a book.": "Correct. Reading is dynamic (can be continuous).",
            },
        },
    },

    // QUESTION 19 - Multiple Choice (Advanced)
    {
        id: "ps-pc-mc-6",
        topic: "present-simple-vs-continuous",
        type: "multiple-choice",
        difficulty: "advanced",
        sentence: "Which sentence correctly uses both tenses to describe TEMPORARY vs PERMANENT?",
        grammarRule: "Present Continuous for Temporary Change + Present Simple for Permanent",
        explanation: "Combine tenses: permanent situation (Simple) + temporary change (Continuous).",
        multipleChoice: {
            question: "Which is correct?",
            correctOption: "I live in Paris, but I am working in London this month.",
            options: [
                "I live in Paris, but I am working in London this month.",
                "I am living in Paris, but I work in London this month.",
                "I live in Paris, but I work in London this month.",
                "I am living in Paris, and I am working in London this month.",
            ],
            optionExplanations: {
                "I live in Paris, but I am working in London this month.": "Correct! Permanent home (Simple) + temporary work assignment (Continuous).",
                "I am living in Paris, but I work in London this month.": "Wrong. Home is permanent (live), assignment is temporary (am working).",
                "I live in Paris, but I work in London this month.": "Wrong. 'This month' is temporary; needs Present Continuous.",
                "I am living in Paris, and I am working in London this month.": "Wrong. Living in Paris is permanent; should be 'live'.",
            },
        },
    },

    // ===== SENTENCE REORDER QUESTIONS (6 questions) =====

    // QUESTION 20 - Sentence Reorder (Beginner)
    {
        id: "ps-pc-reorder-1",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "beginner",
        sentence: "I am reading a book right now.",
        grammarRule: "Present Continuous - Word Order",
        explanation: "Present Continuous: subject + be (am/is/are) + verb-ing + rest.",
        sentenceReorder: {
            words: ["I", "a", "reading", "am", "book", "right", "now"],
            correctOrder: [0, 3, 2, 1, 4, 5, 6], // I(0) am(3) reading(2) a(1) book(4) right(5) now(6)
        },
    },

    // QUESTION 21 - Sentence Reorder (Beginner)
    {
        id: "ps-pc-reorder-2",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "beginner",
        sentence: "She doesn't like coffee very much.",
        grammarRule: "Present Simple Negative - Word Order",
        explanation: "Present Simple negative: subject + don't/doesn't + verb + rest.",
        sentenceReorder: {
            words: ["She", "doesn't", "like", "very", "coffee", "much"],
            correctOrder: [0, 1, 2, 4, 3, 5], // She(0) doesn't(1) like(2) coffee(4) very(3) much(5)
        },
    },

    // QUESTION 22 - Sentence Reorder (Intermediate)
    {
        id: "ps-pc-reorder-3",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "intermediate",
        sentence: "What are you doing at the moment?",
        grammarRule: "Present Continuous Question - Word Order",
        explanation: "Question: what + be + you + verb-ing?",
        sentenceReorder: {
            words: ["What", "you", "at", "doing", "the", "moment", "are"],
            correctOrder: [0, 6, 1, 3, 2, 4, 5], // What(0) are(6) you(1) doing(3) at(2) the(4) moment(5)
        },
    },

    // QUESTION 23 - Sentence Reorder (Intermediate)
    {
        id: "ps-pc-reorder-4",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "intermediate",
        sentence: "They usually go to the beach on weekends.",
        grammarRule: "Present Simple with Adverb of Frequency",
        explanation: "Present Simple: subject + adverb + verb + rest.",
        sentenceReorder: {
            words: ["They", "go", "usually", "beach", "to", "on", "the", "weekends"],
            correctOrder: [0, 2, 1, 4, 3, 5, 6, 7], // They(0) usually(2) go(1) to(4) the(6) beach(3) on(5) weekends(7)
        },
    },

    // QUESTION 24 - Sentence Reorder (Advanced)
    {
        id: "ps-pc-reorder-5",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "advanced",
        sentence: "I usually work in an office, but I am working from home this week.",
        grammarRule: "Combining Present Simple and Continuous",
        explanation: "Two clauses: habit (Simple) + temporary situation (Continuous).",
        sentenceReorder: {
            words: ["I", "usually", "work", "in", "an", "office", "but", "I", "am", "working", "from", "home", "this", "week"],
            correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], // Already in order
        },
    },

    // QUESTION 25 - Sentence Reorder (Advanced)
    {
        id: "ps-pc-reorder-6",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "advanced",
        sentence: "Does he usually drink tea in the morning?",
        grammarRule: "Present Simple Question with Adverb of Frequency",
        explanation: "Question: do/does + subject + adverb + verb?",
        sentenceReorder: {
            words: ["Does", "he", "usually", "drink", "tea", "in", "the", "morning"],
            correctOrder: [0, 1, 2, 3, 4, 5, 6, 7], // Already in correct order
        },
    },
];

/**
 * Grammar topic definition
 */
export const presentSimpleVsContinuousTopic = {
    id: "present-simple-vs-continuous",
    name: "Present Simple vs Present Continuous",
    description: "Master the difference between Present Simple (habits, routines, facts) and Present Continuous (actions happening now, temporary situations). Learn when to use state verbs with Present Simple only.",
    rules: presentSimpleVsContinuous,
};

export default presentSimpleVsContinuous;
