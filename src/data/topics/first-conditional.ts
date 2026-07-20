/**
 * EnglishPusher Grammar Testing - First Conditional
 * B1 Level (Speak Out)
 *
 * 6 gap-fill, 6 error-spot, 7 multiple-choice, 6 word-transform = 25 questions
 * VERIFIED: All error-spot indexes checked against split(" ") positions.
 */

import { GrammarQuestion } from "@/data/types";

export const firstConditionalQuestions: GrammarQuestion[] = [

    // ===== GAP FILL QUESTIONS (6) =====

    {
        id: "fc-gap-1",
        topic: "first-conditional",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "If it rains tomorrow, I ___ at home.",
        grammarRule: "First Conditional — if + Present Simple, will + Infinitive",
        explanation: "The first conditional talks about a real possibility in the future: if + present simple in one clause, will + infinitive in the other.",
        tip: "if + present simple, ... will + infinitive — for things that might really happen.",
        gapFill: {
            gapIndex: 5,
            correctAnswer: "will stay",
            options: ["will stay", "stay", "would stay", "staying"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "fc-gap-2",
        topic: "first-conditional",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "If she ___ the exam, she'll celebrate with her friends.",
        grammarRule: "First Conditional — Present Simple in the If-Clause",
        explanation: "After 'if', we use the present simple even though we are talking about the future. 'Will' never goes directly after 'if' in the first conditional.",
        tip: "Never say 'if she will pass' — use present simple after 'if': 'if she passes'.",
        gapFill: {
            gapIndex: 2,
            correctAnswer: "passes",
            options: ["passes", "will pass", "passed", "is passing"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "fc-gap-3",
        topic: "first-conditional",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "We ___ the barbecue if the weather stays dry.",
        grammarRule: "First Conditional — Result Clause with Will",
        explanation: "The main clause (without 'if') takes 'will' + infinitive to show the likely result.",
        tip: "The clause without 'if' uses will/won't + base verb.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "will have",
            options: ["will have", "have", "would have", "having"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "fc-gap-4",
        topic: "first-conditional",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "If you don't leave now, you ___ your flight.",
        grammarRule: "First Conditional — Negative If-Clause, Positive Result",
        explanation: "The if-clause can be negative ('don't leave') while the result clause keeps the normal 'will' form.",
        tip: "if + don't/doesn't + verb, ... will + infinitive.",
        gapFill: {
            gapIndex: 6,
            correctAnswer: "will miss",
            options: ["will miss", "miss", "would miss", "missing"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "fc-gap-5",
        topic: "first-conditional",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "If you don't water plants, they ___.",
        grammarRule: "Zero Conditional — General Truths (contrast with First Conditional)",
        explanation: "This is always true, not just one possible future case, so it's the zero conditional: if + present simple, ... present simple (not 'will').",
        tip: "Zero conditional = always true (if + present simple, present simple). First conditional = one possible future situation (if + present simple, will + infinitive).",
        gapFill: {
            gapIndex: 6,
            correctAnswer: "die",
            options: ["die", "will die", "died", "are dying"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "fc-gap-6",
        topic: "first-conditional",
        type: "gap-fill",
        difficulty: "advanced",
        sentence: "If the train ___ delayed again, we'll be late for the interview.",
        grammarRule: "First Conditional — 'Be' in the If-Clause",
        explanation: "Even the verb 'be' follows the same rule: present simple ('is') after 'if', will + infinitive in the result.",
        tip: "if + is/am/are, ... will + infinitive — the rule applies to every verb, including 'be'.",
        gapFill: {
            gapIndex: 3,
            correctAnswer: "is",
            options: ["is", "will be", "was", "being"],
            correctOptionIndex: 0,
        },
    },

    // ===== ERROR SPOT QUESTIONS (6) =====
    // RULE: Every error is exactly ONE word. Replacing wrongWord with correction
    // must produce a 100% grammatically correct sentence with no leftover errors.

    // split(" ") → [0=If, 1=it, 2=rain, 3=tomorrow,, 4=we'll, 5=stay, 6=inside.]
    // words[2]="rain" ✅  corrected: "If it rains tomorrow, we'll stay inside." ✅
    {
        id: "fc-error-1",
        topic: "first-conditional",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "If it rain tomorrow, we'll stay inside.",
        grammarRule: "First Conditional — Present Simple Agreement in the If-Clause",
        explanation: "The if-clause needs present simple, and third-person subjects ('it') add -s: 'if it rains'.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "rain",
            correction: "rains",
            reason: "The if-clause needs present simple with -s for third person: 'if it rains'.",
            correctionOptions: ["rains", "rain", "will rain", "raining"],
        },
    },

    // split(" ") → [0=If, 1=you, 2=studies, 3=hard,, 4=you'll, 5=pass, 6=the, 7=exam.]
    // words[2]="studies" ✅  corrected: "If you study hard, you'll pass the exam." ✅
    {
        id: "fc-error-2",
        topic: "first-conditional",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "If you studies hard, you'll pass the exam.",
        grammarRule: "First Conditional — Present Simple Verb Agreement",
        explanation: "Present simple only adds -s for he/she/it. After 'you', the base form is correct: 'if you study'.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "studies",
            correction: "study",
            reason: "After 'you', present simple doesn't take -s: 'if you study hard'.",
            correctionOptions: ["study", "studies", "studying", "will study"],
        },
    },

    // split(" ") → [0=If, 1=he, 2=arrives, 3=early,, 4=he, 5=wait, 6=for, 7=us, 8=at, 9=the, 10=station.]
    // words[5]="wait" ✅  corrected: "If he arrives early, he will wait for us at the station." ✅
    {
        id: "fc-error-3",
        topic: "first-conditional",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "If he arrives early, he wait for us at the station.",
        grammarRule: "First Conditional — Missing 'Will' in the Result Clause",
        explanation: "The result clause (without 'if') needs 'will' + infinitive to show the likely outcome.",
        errorSpot: {
            errorWordIndex: 5,
            wrongWord: "wait",
            correction: "will wait",
            reason: "The result clause needs 'will' + infinitive: 'he will wait for us'.",
            correctionOptions: ["will wait", "wait", "waits", "waiting"],
        },
    },

    // split(" ") → [0=If, 1=we, 2=visited, 3=Rome, 4=next, 5=summer,, 6=we'll, 7=see, 8=the, 9=Colosseum.]
    // words[2]="visited" ✅  corrected: "If we visit Rome next summer, we'll see the Colosseum." ✅
    {
        id: "fc-error-4",
        topic: "first-conditional",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "If we visited Rome next summer, we'll see the Colosseum.",
        grammarRule: "First Conditional — Present Simple, Not Past, After 'If'",
        explanation: "The if-clause of a first conditional uses present simple, never past simple, even though the meaning is about the future.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "visited",
            correction: "visit",
            reason: "The if-clause uses present simple, not past simple: 'if we visit Rome'.",
            correctionOptions: ["visit", "visited", "will visit", "visiting"],
        },
    },

    // split(" ") → [0=If, 1=she, 2=calls, 3=me, 4=today,, 5=I, 6=would, 7=tell, 8=her, 9=the, 10=truth.]
    // words[6]="would" ✅  corrected: "If she calls me today, I will tell her the truth." ✅
    {
        id: "fc-error-5",
        topic: "first-conditional",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "If she calls me today, I would tell her the truth.",
        grammarRule: "First Conditional vs Second Conditional — 'Will', Not 'Would'",
        explanation: "The first conditional result clause uses 'will' for a real future possibility. 'Would' belongs to the hypothetical second conditional.",
        errorSpot: {
            errorWordIndex: 6,
            wrongWord: "would",
            correction: "will",
            reason: "First conditional results use 'will', not 'would': 'I will tell her the truth.'",
            correctionOptions: ["will", "would", "should", "can"],
        },
    },

    // split(" ") → [0=If, 1=it, 2=snowing, 3=tonight,, 4=the, 5=roads, 6=will, 7=be, 8=dangerous.]
    // words[2]="snowing" ✅  corrected: "If it snows tonight, the roads will be dangerous." ✅
    {
        id: "fc-error-6",
        topic: "first-conditional",
        type: "error-spot",
        difficulty: "advanced",
        sentence: "If it snowing tonight, the roads will be dangerous.",
        grammarRule: "First Conditional — No -ing Form After 'If'",
        explanation: "The if-clause needs a finite present simple verb, not the -ing form.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "snowing",
            correction: "snows",
            reason: "The if-clause needs a finite present simple verb, not -ing: 'if it snows'.",
            correctionOptions: ["snows", "snowing", "is snowing", "snow"],
        },
    },

    // ===== MULTIPLE CHOICE QUESTIONS (7) =====

    {
        id: "fc-mc-1",
        topic: "first-conditional",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the correct first conditional sentence:",
        grammarRule: "First Conditional — Correct Form",
        explanation: "First conditional = if + present simple, ... will + infinitive.",
        tip: "if + present simple, ... will + infinitive.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "If I have time tomorrow, I'll call you.",
            options: [
                "If I have time tomorrow, I'll call you.",
                "If I will have time tomorrow, I'll call you.",
                "If I had time tomorrow, I'll call you.",
                "If I having time tomorrow, I'll call you.",
            ],
            optionExplanations: {
                "If I have time tomorrow, I'll call you.": "Correct! Present simple after 'if', 'will' (as 'I'll') in the result clause.",
                "If I will have time tomorrow, I'll call you.": "Wrong. 'Will' never goes directly after 'if' in the first conditional.",
                "If I had time tomorrow, I'll call you.": "Wrong. 'Had' is past simple — the if-clause needs present simple: 'have'.",
                "If I having time tomorrow, I'll call you.": "Wrong. The if-clause needs a finite verb, not the -ing form.",
            },
        },
    },

    {
        id: "fc-mc-2",
        topic: "first-conditional",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Compare: (A) 'If you heat ice, it melts.' (B) 'If you heat this ice cube, it will melt in five minutes.'",
        grammarRule: "First vs Zero Conditional — General Truth vs Specific Situation",
        explanation: "Zero conditional (A) describes what always happens. First conditional (B) describes one specific, possible future situation with 'will'.",
        tip: "Zero conditional = always true. First conditional = one likely future case.",
        multipleChoice: {
            question: "Which sentence describes ONE specific future situation rather than a general truth?",
            correctOption: "Sentence B — it's the first conditional, about a particular case.",
            options: [
                "Sentence B — it's the first conditional, about a particular case.",
                "Sentence A — it's the first conditional, about a particular case.",
                "Both sentences describe general truths.",
                "Neither sentence is a real conditional.",
            ],
            optionExplanations: {
                "Sentence B — it's the first conditional, about a particular case.": "Correct! Sentence B uses 'will' for one specific future event, not a general fact.",
                "Sentence A — it's the first conditional, about a particular case.": "Wrong. Sentence A describes what always happens — that's the zero conditional.",
                "Both sentences describe general truths.": "Wrong. Only sentence A is a general truth. Sentence B is about a specific future case.",
                "Neither sentence is a real conditional.": "Wrong. Both are real conditionals — a zero conditional and a first conditional.",
            },
        },
    },

    {
        id: "fc-mc-3",
        topic: "first-conditional",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the correct first conditional question:",
        grammarRule: "First Conditional — Question Forms",
        explanation: "In questions, the result clause inverts 'will' and the subject. The if-clause still uses present simple.",
        tip: "Will + subject + verb...? if + present simple...?",
        multipleChoice: {
            question: "Which question is correctly formed?",
            correctOption: "What will you do if it rains?",
            options: [
                "What will you do if it rains?",
                "What you will do if it rains?",
                "What will you do if it will rain?",
                "What do you will do if it rains?",
            ],
            optionExplanations: {
                "What will you do if it rains?": "Correct! 'Will you' is inverted in the question, and the if-clause stays in present simple.",
                "What you will do if it rains?": "Wrong. Questions need inversion: 'will you', not 'you will'.",
                "What will you do if it will rain?": "Wrong. The if-clause should be present simple: 'if it rains', not 'if it will rain'.",
                "What do you will do if it rains?": "Wrong. You can't combine 'do' and 'will' — just invert 'will you do'.",
            },
        },
    },

    {
        id: "fc-mc-4",
        topic: "first-conditional",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with a correctly formed negative if-clause:",
        grammarRule: "First Conditional — Negative If-Clause with 'Doesn't'",
        explanation: "With third-person singular subjects, the negative present simple is 'doesn't' + base verb.",
        tip: "he/she/it + doesn't + base verb. I/you/we/they + don't + base verb.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "If he doesn't hurry, he'll miss the bus.",
            options: [
                "If he doesn't hurry, he'll miss the bus.",
                "If he don't hurry, he'll miss the bus.",
                "If he doesn't hurries, he'll miss the bus.",
                "If he isn't hurry, he'll miss the bus.",
            ],
            optionExplanations: {
                "If he doesn't hurry, he'll miss the bus.": "Correct! Third person singular takes 'doesn't' + base verb: 'doesn't hurry'.",
                "If he don't hurry, he'll miss the bus.": "Wrong. Third person singular ('he') needs 'doesn't', not 'don't'.",
                "If he doesn't hurries, he'll miss the bus.": "Wrong. After 'doesn't', use the base verb: 'hurry', not 'hurries'.",
                "If he isn't hurry, he'll miss the bus.": "Wrong. 'Hurry' is a regular verb here, not an adjective — it needs 'doesn't', not 'isn't'.",
            },
        },
    },

    {
        id: "fc-mc-5",
        topic: "first-conditional",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct comma rule:",
        grammarRule: "First Conditional — Comma When 'If' Starts the Sentence",
        explanation: "When the if-clause comes first, separate it from the result clause with a comma. When the result clause comes first, no comma is needed.",
        tip: "If + clause, result clause. Result clause if + clause (no comma).",
        multipleChoice: {
            question: "Which sentence punctuates the conditional correctly?",
            correctOption: "If we finish early, we'll go for a coffee.",
            options: [
                "If we finish early, we'll go for a coffee.",
                "If we finish early we'll go for a coffee.",
                "If, we finish early we'll go for a coffee.",
                "We'll, go for a coffee if we finish early.",
            ],
            optionExplanations: {
                "If we finish early, we'll go for a coffee.": "Correct! The if-clause comes first, so it's followed by a comma.",
                "If we finish early we'll go for a coffee.": "Wrong. Missing the comma — when the if-clause comes first, add a comma before the result clause.",
                "If, we finish early we'll go for a coffee.": "Wrong. The comma is in the wrong place — it belongs after the whole if-clause, not right after 'if'.",
                "We'll, go for a coffee if we finish early.": "Wrong. No comma is needed here, and it's in the wrong place — the result clause comes first.",
            },
        },
    },

    {
        id: "fc-mc-6",
        topic: "first-conditional",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence where BOTH clauses are correctly formed:",
        grammarRule: "First Conditional — Negative Forms in Both Clauses",
        explanation: "Both clauses can be negative: if-clause uses 'doesn't/don't' + base verb, result clause uses 'won't' + infinitive.",
        tip: "if + doesn't/don't + verb, ... won't + infinitive.",
        multipleChoice: {
            question: "Which sentence is fully correct?",
            correctOption: "If she doesn't leave soon, she won't catch the train.",
            options: [
                "If she doesn't leave soon, she won't catch the train.",
                "If she won't leave soon, she doesn't catch the train.",
                "If she leaves not soon, she won't catch the train.",
                "If she doesn't leaves soon, she won't catch the train.",
            ],
            optionExplanations: {
                "If she doesn't leave soon, she won't catch the train.": "Correct! 'Doesn't' + base verb in the if-clause, 'won't' + infinitive in the result.",
                "If she won't leave soon, she doesn't catch the train.": "Wrong. 'Won't' belongs in the result clause, not the if-clause, and vice versa here.",
                "If she leaves not soon, she won't catch the train.": "Wrong. 'Not' can't follow the verb like that — use 'doesn't leave'.",
                "If she doesn't leaves soon, she won't catch the train.": "Wrong. After 'doesn't', use the base verb: 'leave', not 'leaves'.",
            },
        },
    },

    {
        id: "fc-mc-7",
        topic: "first-conditional",
        type: "multiple-choice",
        difficulty: "advanced",
        sentence: "Compare: (A) 'If you mix red and blue, you get purple.' (B) 'If you mix the paints now, you'll get a mess because they're still wet.'",
        grammarRule: "Zero vs First Conditional — Choosing the Right One",
        explanation: "Zero conditional = general/permanent truth (if + present simple, present simple). First conditional = one specific, possible future case (if + present simple, will + infinitive).",
        tip: "Ask: is this always true, or just one possible future situation?",
        multipleChoice: {
            question: "Why is sentence A the zero conditional but sentence B the first conditional?",
            correctOption: "A states a general, permanent fact; B describes one specific future situation.",
            options: [
                "A states a general, permanent fact; B describes one specific future situation.",
                "A is about the future; B is about the past.",
                "A uses 'will'; B uses the present simple.",
                "There is no real difference between A and B.",
            ],
            optionExplanations: {
                "A states a general, permanent fact; B describes one specific future situation.": "Correct! A is always true (colour mixing). B is about this particular moment, so it uses 'will'.",
                "A is about the future; B is about the past.": "Wrong. Neither sentence is about the past — A is a general truth, B is about the future.",
                "A uses 'will'; B uses the present simple.": "Wrong. It's the other way round — A uses present simple twice, B uses 'will' in the result clause.",
                "There is no real difference between A and B.": "Wrong. A describes a permanent fact; B describes one likely future event — that's a real grammatical difference.",
            },
        },
    },

    // ===== WORD TRANSFORM QUESTIONS (6) =====

    {
        id: "fc-wt-1",
        topic: "first-conditional",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "If she ___ the bus, she'll be late for the interview.",
        grammarRule: "First Conditional — If-Clause Verb Form",
        explanation: "Present simple in the if-clause; third-person singular subjects add -s.",
        tip: "if + she/he/it + verb-s ...",
        wordTransform: {
            baseWord: "miss",
            correctAnswer: "misses",
        },
    },

    {
        id: "fc-wt-2",
        topic: "first-conditional",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "If I finish work early, I ___ you at the station.",
        grammarRule: "First Conditional — Result Clause with Will",
        explanation: "The clause without 'if' uses will + infinitive to show the likely result.",
        tip: "will/won't + base verb in the result clause.",
        wordTransform: {
            baseWord: "meet",
            correctAnswer: "will meet",
            alternativeAnswers: ["'ll meet"],
        },
    },

    {
        id: "fc-wt-3",
        topic: "first-conditional",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "If he ___ enough time, he'll visit the museum too.",
        grammarRule: "First Conditional — If-Clause Verb 'Have'",
        explanation: "Present simple 'has' after 'if' for third-person singular — never 'will have'.",
        tip: "if + he/she/it + has... (not 'if he will have').",
        wordTransform: {
            baseWord: "have",
            correctAnswer: "has",
        },
    },

    {
        id: "fc-wt-4",
        topic: "first-conditional",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "If you don't book early, you ___ a good seat.",
        grammarRule: "First Conditional — Negative Result Clause",
        explanation: "The result clause can be negative too: won't + infinitive.",
        tip: "won't + base verb = will not + base verb.",
        wordTransform: {
            baseWord: "get",
            correctAnswer: "won't get",
            alternativeAnswers: ["will not get"],
        },
    },

    {
        id: "fc-wt-5",
        topic: "first-conditional",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "If she ___ better, she won't go to work tomorrow.",
        grammarRule: "First Conditional — Negative If-Clause",
        explanation: "Negative present simple in the if-clause: doesn't/don't + base verb.",
        tip: "doesn't/don't + base verb in the if-clause for negative conditions.",
        wordTransform: {
            baseWord: "feel",
            correctAnswer: "doesn't feel",
            alternativeAnswers: ["does not feel"],
        },
    },

    {
        id: "fc-wt-6",
        topic: "first-conditional",
        type: "word-transform",
        difficulty: "advanced",
        sentence: "If the flight is delayed, we ___ stuck at the airport for hours.",
        grammarRule: "First Conditional — 'Will Be' in the Result Clause",
        explanation: "Even 'be' follows the pattern: will + infinitive ('will be') in the result clause.",
        tip: "will be = future form of 'be' in the result clause.",
        wordTransform: {
            baseWord: "be",
            correctAnswer: "will be",
            alternativeAnswers: ["'ll be"],
        },
    },
];

export const firstConditionalTopic = {
    id: "first-conditional",
    name: "First Conditional",
    description: "Practice the first conditional (if + present simple, ... will + infinitive) for real future possibilities, and see how it differs from the zero conditional for general truths.",
    rules: firstConditionalQuestions,
};

export default firstConditionalQuestions;
