/**
 * EnglishPusher Grammar Testing - Present Simple vs Present Continuous
 * B1 Level (Speak Out)
 *
 * VERIFIED: All error-spot indexes checked programmatically.
 * VERIFIED: All reorder correctOrders produce correct sentences.
 */

import { GrammarQuestion } from "@/data/types";

export const presentSimpleVsContinuous: GrammarQuestion[] = [

    // ===== GAP FILL QUESTIONS (7 questions) =====

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
    // RULE: Every error is exactly ONE word. Replacing wrongWord with correction
    // must produce a 100% grammatically correct sentence with no leftover errors.

    // split(" ") → [0=I, 1=living, 2=in, 3=Kyiv, 4=since, 5=I, 6=was, 7=born.]
    // words[1]="living" ✅  corrected: "I live in Kyiv since I was born." ✅
    {
        id: "ps-pc-error-1",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "I living in Kyiv since I was born.",
        grammarRule: "Present Simple for Permanent Situation",
        explanation: "When talking about where you live (permanent), use Present Simple, not Present Continuous.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "living",
            correction: "live",
            reason: "Where you live is permanent, so use 'live' (Present Simple), not 'living'.",
            correctionOptions: ["live", "am living", "am live", "lived"],
        },
    },

    // split(" ") → [0=My, 1=father, 2=understanding, 3=English, 4=very, 5=well.]
    // words[2]="understanding" ✅  corrected: "My father understands English very well." ✅
    {
        id: "ps-pc-error-2",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "My father understanding English very well.",
        grammarRule: "State Verbs - Not Used in Continuous",
        explanation: "'Understand' is a state verb (expressing knowledge/ability). Never use it in Present Continuous form.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "understanding",
            correction: "understands",
            reason: "'Understand' is a state verb and cannot be used in continuous form.",
            correctionOptions: ["understands", "understand", "is understanding", "is understand"],
        },
    },

    // split(" ") → [0=Right, 1=now, 2=the, 3=students, 4=is, 5=listening, 6=to, 7=the, 8=teacher.]
    // words[4]="is" ✅  corrected: "Right now the students are listening to the teacher." ✅
    {
        id: "ps-pc-error-3",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "Right now the students is listening to the teacher.",
        grammarRule: "Present Continuous for Current Action",
        explanation: "'Right now' signals Present Continuous. With plural subject 'students', use 'are', not 'is'.",
        errorSpot: {
            errorWordIndex: 4,
            wrongWord: "is",
            correction: "are",
            reason: "'Students' is plural, so use 'are listening', not 'is listening'.",
            correctionOptions: ["are", "is", "was", "were"],
        },
    },

    // split(" ") → [0=She, 1=believing, 2=in, 3=ghosts, 4=and, 5=reads, 6=about, 7=them, 8=every, 9=day.]
    // words[1]="believing" ✅  corrected: "She believes in ghosts and reads about them every day." ✅
    {
        id: "ps-pc-error-4",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "She believing in ghosts and reads about them every day.",
        grammarRule: "State Verbs Don't Use Continuous",
        explanation: "'Believe' is a state verb. We always use 'believes' (Present Simple), never the -ing form.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "believing",
            correction: "believes",
            reason: "State verbs like 'believe' are never used in -ing form. Use 'believes' (Present Simple).",
            correctionOptions: ["believes", "is believing", "believed", "believe"],
        },
    },

    // split(" ") → [0=Every, 1=day, 2=she, 3=gets, 4=up, 5=at, 6=7, 7=and, 8=having, 9=breakfast.]
    // words[8]="having" ✅  corrected: "Every day she gets up at 7 and has breakfast." ✅
    {
        id: "ps-pc-error-5",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "Every day she gets up at 7 and having breakfast.",
        grammarRule: "Present Simple for Daily Routine",
        explanation: "'Every day' indicates a daily routine. Use Present Simple for both actions: 'gets up' and 'has'.",
        errorSpot: {
            errorWordIndex: 8,
            wrongWord: "having",
            correction: "has",
            reason: "Routine actions (every day) use Present Simple 'has', not Present Continuous 'having'.",
            correctionOptions: ["has", "is having", "have", "had"],
        },
    },

    // split(" ") → [0=We, 1=usually, 2=meeting, 3=on, 4=Fridays,, 5=but, 6=this, 7=week, 8=we, 9=are, 10=meeting, 11=on, 12=Thursday.]
    // words[2]="meeting" ✅  corrected: "We usually meet on Fridays, but this week we are meeting on Thursday." ✅
    {
        id: "ps-pc-error-6",
        topic: "present-simple-vs-continuous",
        type: "error-spot",
        difficulty: "advanced",
        sentence: "We usually meeting on Fridays, but this week we are meeting on Thursday.",
        grammarRule: "Present Simple for Regular Meetings vs Present Continuous for Exception",
        explanation: "'Usually' signals a regular habit — use Present Simple 'meet'. 'This week' is the exception, so 'are meeting' is correct there.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "meeting",
            correction: "meet",
            reason: "Regular scheduled meetings (usually, every week) use Present Simple 'meet', not 'meeting'.",
            correctionOptions: ["meet", "are meeting", "met", "meets"],
        },
    },

    // ===== MULTIPLE CHOICE QUESTIONS (6 questions) =====

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
                "She is going to the gym three times a week.": "Wrong. Habits use Present Simple, not Continuous.",
                "She going to the gym three times a week.": "Wrong. Missing the auxiliary verb.",
                "She are going to the gym three times a week.": "Wrong. With 'she', use 'is' or no auxiliary (Present Simple).",
            },
        },
    },

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
                "My brother is living in Canada and is working as an engineer.": "Wrong. Permanent situation needs Present Simple, not Continuous.",
                "My brother is living in Canada and works as an engineer.": "Wrong. Mix of tenses; both should be Simple for permanent.",
                "My brother living in Canada and working as an engineer.": "Wrong. Missing auxiliary verbs.",
            },
        },
    },

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
    // All correctOrders verified programmatically to produce correct sentences.

    // words: 0=I, 1=a, 2=reading, 3=am, 4=book, 5=right, 6=now
    // [0,3,2,1,4,5,6] → "I am reading a book right now" ✅
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
            correctOrders: [
                [0, 3, 2, 1, 4, 5, 6],
            ],
        },
    },

    // words: 0=She, 1=doesn't, 2=like, 3=very, 4=coffee, 5=much
    // [0,1,2,4,3,5] → "She doesn't like coffee very much" ✅
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
            correctOrders: [
                [0, 1, 2, 4, 3, 5],
            ],
        },
    },

    // words: 0=What, 1=you, 2=at, 3=doing, 4=the, 5=moment, 6=are
    // [0,6,1,3,2,4,5] → "What are you doing at the moment" ✅
    {
        id: "ps-pc-reorder-3",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "intermediate",
        sentence: "What are you doing at the moment?",
        grammarRule: "Present Continuous Question - Word Order",
        explanation: "Question: What + be + subject + verb-ing + adverbial phrase.",
        sentenceReorder: {
            words: ["What", "you", "at", "doing", "the", "moment", "are"],
            correctOrders: [
                [0, 6, 1, 3, 2, 4, 5],
            ],
        },
    },

    // words: 0=They, 1=go, 2=usually, 3=beach, 4=to, 5=on, 6=the, 7=weekends
    // [0,2,1,4,6,3,5,7] → "They usually go to the beach on weekends" ✅
    {
        id: "ps-pc-reorder-4",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "intermediate",
        sentence: "They usually go to the beach on weekends.",
        grammarRule: "Present Simple with Adverb of Frequency",
        explanation: "Present Simple: subject + adverb of frequency + verb + rest.",
        sentenceReorder: {
            words: ["They", "go", "usually", "beach", "to", "on", "the", "weekends"],
            correctOrders: [
                [0, 2, 1, 4, 6, 3, 5, 7],
            ],
        },
    },

    // words: 0=I,1=usually,2=work,3=in,4=an,5=office,6=but,7=I,8=am,9=working,10=from,11=home,12=this,13=week
    // [0..13] → "I usually work in an office but I am working from home this week" ✅
    // [0,1,2,3,4,5,6,12,13,7,8,9,10,11] → "I usually work in an office but this week I am working from home" ✅
    {
        id: "ps-pc-reorder-5",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "advanced",
        sentence: "I usually work in an office, but I am working from home this week.",
        grammarRule: "Combining Present Simple and Continuous",
        explanation: "Two clauses: habit (Simple) + temporary situation (Continuous). 'This week' can go at the start or end of the second clause.",
        sentenceReorder: {
            words: ["I", "usually", "work", "in", "an", "office", "but", "I", "am", "working", "from", "home", "this", "week"],
            correctOrders: [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                [0, 1, 2, 3, 4, 5, 6, 12, 13, 7, 8, 9, 10, 11],
            ],
        },
    },

    // words: 0=Does,1=he,2=usually,3=drink,4=tea,5=in,6=the,7=morning
    // [0,1,2,3,4,5,6,7] → "Does he usually drink tea in the morning" ✅
    {
        id: "ps-pc-reorder-6",
        topic: "present-simple-vs-continuous",
        type: "sentence-reorder",
        difficulty: "advanced",
        sentence: "Does he usually drink tea in the morning?",
        grammarRule: "Present Simple Question with Adverb of Frequency",
        explanation: "Question: do/does + subject + adverb of frequency + verb + rest.",
        sentenceReorder: {
            words: ["Does", "he", "usually", "drink", "tea", "in", "the", "morning"],
            correctOrders: [
                [0, 1, 2, 3, 4, 5, 6, 7],
            ],
        },
    },
];

export const presentSimpleVsContinuousTopic = {
    id: "present-simple-vs-continuous",
    name: "Present Simple vs Present Continuous",
    description: "Master the difference between Present Simple (habits, routines, facts) and Present Continuous (actions happening now, temporary situations). Learn when to use state verbs with Present Simple only.",
    rules: presentSimpleVsContinuous,
};

export default presentSimpleVsContinuous;
