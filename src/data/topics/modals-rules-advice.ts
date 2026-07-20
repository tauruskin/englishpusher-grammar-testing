/**
 * EnglishPusher Grammar Testing - Modals for Rules and Advice
 * B1 Level (Speak Out) - Lesson 4A
 *
 * 6 gap-fill, 6 error-spot, 7 multiple-choice, 6 word-transform = 25 questions
 * VERIFIED: All error-spot indexes checked against split(" ") positions.
 */

import { GrammarQuestion } from "@/data/types";

export const modalsRulesAdviceQuestions: GrammarQuestion[] = [

    // ===== GAP FILL QUESTIONS (6) =====

    {
        id: "mra-gap-1",
        topic: "modals-rules-advice",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "You ___ show your passport at the airport.",
        grammarRule: "Must — Strong Obligation / Rule",
        explanation: "'Must' expresses a strong obligation or rule — often something required by law or regulation, with no real choice.",
        tip: "Must = no choice. Often used for laws, rules and very strong personal obligations.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "must",
            options: ["must", "should", "mustn't", "don't have to"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "mra-gap-2",
        topic: "modals-rules-advice",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "I ___ get up early to catch my flight tomorrow.",
        grammarRule: "Need To — Necessity",
        explanation: "'Need to' expresses something necessary — in the positive form it usually means the same as 'must' or 'have to'.",
        tip: "In the positive, must / have to / need to often mean the same thing — something is necessary.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "need to",
            options: ["need to", "should", "mustn't", "don't need to"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "mra-gap-3",
        topic: "modals-rules-advice",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "You ___ finish that report today. Tomorrow will be fine.",
        grammarRule: "Don't Have To — Not Necessary",
        explanation: "'Don't have to' means something is not necessary — you have a choice, unlike 'mustn't', which means something is forbidden.",
        tip: "Don't have to / needn't / don't need to = optional, not compulsory. Compare with mustn't = forbidden.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "don't have to",
            options: ["don't have to", "mustn't", "have to", "shouldn't"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "mra-gap-4",
        topic: "modals-rules-advice",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "You ___ use your phone during the exam.",
        grammarRule: "Mustn't — Prohibition",
        explanation: "'Mustn't' means something is not allowed — there is a rule against it, not just a lack of necessity.",
        tip: "Mustn't = forbidden/not allowed. Don't confuse it with don't have to (= not necessary but allowed).",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "mustn't",
            options: ["mustn't", "don't have to", "shouldn't", "needn't"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "mra-gap-5",
        topic: "modals-rules-advice",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "You ___ come to work in smart clothes.",
        grammarRule: "Should — Giving Advice",
        explanation: "'Should' is used to give advice or say something is a good idea — it is much weaker than 'must', with no real obligation.",
        tip: "Should = good idea / advice, not a rule. Compare: must (obligation) vs should (advice).",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "should",
            options: ["should", "must", "have to", "shouldn't"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "mra-gap-6",
        topic: "modals-rules-advice",
        type: "gap-fill",
        difficulty: "advanced",
        sentence: "We ___ leave early yesterday because of the traffic.",
        grammarRule: "Had To — Past Obligation",
        explanation: "'Must' has no past form. To talk about an obligation in the past, we use 'had to'.",
        tip: "Must (present/future) → had to (past). There is no past tense of 'must' itself.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "had to",
            options: ["had to", "must", "should have", "have to"],
            correctOptionIndex: 0,
        },
    },

    // ===== ERROR SPOT QUESTIONS (6) =====
    // RULE: Every error is exactly ONE word. Replacing wrongWord with correction
    // must produce a 100% grammatically correct sentence with no leftover errors.

    // split(" ") → [0=He, 1=must, 2=finishes, 3=the, 4=report, 5=by, 6=Friday.]
    // words[2]="finishes" ✅  corrected: "He must finish the report by Friday." ✅
    {
        id: "mra-error-1",
        topic: "modals-rules-advice",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "He must finishes the report by Friday.",
        grammarRule: "Must + Infinitive Without To",
        explanation: "Modal verbs like 'must' are followed by the base form of the verb — no -s, no -ing, and no 'to'.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "finishes",
            correction: "finish",
            reason: "'Must' is followed by the bare infinitive: 'must finish', never 'must finishes'.",
            correctionOptions: ["finish", "finishes", "to finish", "finishing"],
        },
    },

    // split(" ") → [0=She, 1=have, 2=to, 3=leave, 4=early, 5=today.]
    // words[1]="have" ✅  corrected: "She has to leave early today." ✅
    {
        id: "mra-error-2",
        topic: "modals-rules-advice",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "She have to leave early today.",
        grammarRule: "Have To — Third Person Agreement",
        explanation: "'Have to' is not a modal verb — it behaves like a normal verb and needs -s for he/she/it: 'has to'.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "have",
            correction: "has",
            reason: "Third person singular subjects need 'has to', not 'have to': 'She has to leave early today.'",
            correctionOptions: ["has", "have", "having", "had"],
        },
    },

    // split(" ") → [0=You, 1=should, 2=arrive, 3=late, 4=to, 5=meetings.]
    // words[1]="should" ✅  corrected: "You shouldn't arrive late to meetings." ✅
    {
        id: "mra-error-3",
        topic: "modals-rules-advice",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "You should arrive late to meetings.",
        grammarRule: "Shouldn't — Negative Advice",
        explanation: "'Shouldn't' is used to say something is a bad idea. Without 'n't', the sentence recommends the opposite of what's intended here.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "should",
            correction: "shouldn't",
            reason: "Arriving late to meetings is bad advice, so the sentence needs the negative form: 'You shouldn't arrive late.'",
            correctionOptions: ["shouldn't", "should", "mustn't", "don't have to"],
        },
    },

    // split(" ") → [0=You, 1=mustn't, 2=bring, 3=a, 4=laptop, 5=to, 6=the, 7=meeting, 8=if, 9=you, 10=don't, 11=want, 12=to.]
    // words[1]="mustn't" ✅  corrected: "You needn't bring a laptop to the meeting if you don't want to." ✅
    {
        id: "mra-error-4",
        topic: "modals-rules-advice",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "You mustn't bring a laptop to the meeting if you don't want to.",
        grammarRule: "Needn't vs Mustn't — Meaning Contrast",
        explanation: "'Mustn't' means something is forbidden. 'Needn't' means it's simply not necessary — you can still choose to do it if you want.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "mustn't",
            correction: "needn't",
            reason: "The phrase 'if you don't want to' shows this is optional, not forbidden, so 'needn't' is correct: 'You needn't bring a laptop... if you don't want to.'",
            correctionOptions: ["needn't", "mustn't", "shouldn't", "can't"],
        },
    },

    // split(" ") → [0=You, 1=mustn't, 2=used, 3=your, 4=mobile, 5=phone, 6=during, 7=the, 8=flight.]
    // words[2]="used" ✅  corrected: "You mustn't use your mobile phone during the flight." ✅
    {
        id: "mra-error-5",
        topic: "modals-rules-advice",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "You mustn't used your mobile phone during the flight.",
        grammarRule: "Mustn't + Infinitive Without To",
        explanation: "Like all modal verbs, 'mustn't' is followed by the bare infinitive — never a past or -ing form.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "used",
            correction: "use",
            reason: "'Mustn't' needs the base form: 'mustn't use', not 'mustn't used'.",
            correctionOptions: ["use", "used", "to use", "using"],
        },
    },

    // split(" ") → [0=We, 1=must, 2=leave, 3=early, 4=yesterday, 5=morning.]
    // words[1]="must" ✅  corrected: "We had to leave early yesterday morning." ✅
    {
        id: "mra-error-6",
        topic: "modals-rules-advice",
        type: "error-spot",
        difficulty: "advanced",
        sentence: "We must leave early yesterday morning.",
        grammarRule: "Must vs Had To — Present/Future vs Past",
        explanation: "'Must' only works for present and future obligations. For a past obligation, we need 'had to'.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "must",
            correction: "had to",
            reason: "'Yesterday morning' is in the past, so the sentence needs 'had to': 'We had to leave early yesterday morning.'",
            correctionOptions: ["had to", "must", "have to", "should have"],
        },
    },

    // ===== MULTIPLE CHOICE QUESTIONS (7) =====

    {
        id: "mra-mc-1",
        topic: "modals-rules-advice",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence that expresses an obligation, not just advice:",
        grammarRule: "Must — Obligation vs Advice",
        explanation: "'Must' expresses a strong obligation or rule. Words like 'should', 'could' and 'might' are weaker — they give advice or suggestions, not rules.",
        tip: "Must = a rule with no choice. Should/could/might = advice or suggestions, much weaker.",
        multipleChoice: {
            question: "Which sentence describes something required, not just a suggestion?",
            correctOption: "You must wear a seatbelt in the car.",
            options: [
                "You must wear a seatbelt in the car.",
                "You should wear more comfortable shoes.",
                "You could try a different route to work.",
                "You might want to bring an umbrella.",
            ],
            optionExplanations: {
                "You must wear a seatbelt in the car.": "Correct! 'Must' expresses a strong obligation or rule — wearing a seatbelt is required by law.",
                "You should wear more comfortable shoes.": "Wrong. 'Should' gives advice — a good idea, not a rule.",
                "You could try a different route to work.": "Wrong. 'Could' is a weak suggestion, not an obligation.",
                "You might want to bring an umbrella.": "Wrong. 'Might want to' is a gentle suggestion, not a rule.",
            },
        },
    },

    {
        id: "mra-mc-2",
        topic: "modals-rules-advice",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence that means something is NOT allowed:",
        grammarRule: "Mustn't — Prohibition",
        explanation: "'Mustn't' means something is forbidden — there's a rule against it. It's different from phrases that mean something is simply not necessary.",
        tip: "Mustn't = forbidden. Don't have to / needn't = not necessary but still allowed.",
        multipleChoice: {
            question: "Which sentence expresses a prohibition?",
            correctOption: "You mustn't use your mobile phone on the plane.",
            options: [
                "You mustn't use your mobile phone on the plane.",
                "You don't have to bring a laptop.",
                "You needn't worry about the deadline.",
                "You don't need to finish today.",
            ],
            optionExplanations: {
                "You mustn't use your mobile phone on the plane.": "Correct! 'Mustn't' means it's forbidden — not allowed for safety reasons.",
                "You don't have to bring a laptop.": "Wrong. This means it's not necessary, but it's still allowed — not a prohibition.",
                "You needn't worry about the deadline.": "Wrong. 'Needn't' means it's not necessary, not forbidden.",
                "You don't need to finish today.": "Wrong. This means it's optional — you're still allowed to finish today if you want.",
            },
        },
    },

    {
        id: "mra-mc-3",
        topic: "modals-rules-advice",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence that means 'it isn't necessary, but you can if you want':",
        grammarRule: "Don't Have To — Optional, Not Forbidden",
        explanation: "'Don't have to' means an action is not necessary — the choice is yours. It's a common mistake to confuse this with 'mustn't', which means the opposite: forbidden.",
        tip: "Don't have to = optional, your choice. Mustn't = forbidden — the opposite meaning.",
        multipleChoice: {
            question: "Which sentence correctly expresses this idea?",
            correctOption: "You don't have to come to the meeting.",
            options: [
                "You don't have to come to the meeting.",
                "You mustn't come to the meeting.",
                "You should come to the meeting.",
                "You can't come to the meeting.",
            ],
            optionExplanations: {
                "You don't have to come to the meeting.": "Correct! 'Don't have to' = not necessary, but you're free to come if you want.",
                "You mustn't come to the meeting.": "Wrong. This means coming is forbidden — the opposite meaning.",
                "You should come to the meeting.": "Wrong. 'Should' recommends coming — it doesn't say it's optional.",
                "You can't come to the meeting.": "Wrong. This means permission is refused, not that it's simply optional.",
            },
        },
    },

    {
        id: "mra-mc-4",
        topic: "modals-rules-advice",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Look at this fitness tip: 'Try eating fruit instead of sweet snacks.' Choose the sentence with the correct modal to continue this advice:",
        grammarRule: "Shouldn't vs Mustn't / Don't Have To — Choosing the Right Modal for Advice",
        explanation: "When giving friendly advice against something (not a strict rule), 'shouldn't' is the natural choice. 'Mustn't' is too strong (a rule), and 'don't have to' changes the meaning to 'not necessary'.",
        tip: "Friendly advice against something = shouldn't, not mustn't or don't have to.",
        multipleChoice: {
            question: "Which sentence correctly continues the advice?",
            correctOption: "You shouldn't eat lots of sweet snacks.",
            options: [
                "You shouldn't eat lots of sweet snacks.",
                "You mustn't eat lots of sweet snacks.",
                "You don't have to eat lots of sweet snacks.",
                "You needn't eat lots of sweet snacks.",
            ],
            optionExplanations: {
                "You shouldn't eat lots of sweet snacks.": "Correct! 'Shouldn't' gives friendly advice against something — exactly what this fitness tip needs.",
                "You mustn't eat lots of sweet snacks.": "Wrong. 'Mustn't' makes it sound like a strict rule or law, not friendly advice.",
                "You don't have to eat lots of sweet snacks.": "Wrong. This means it's not necessary, but doesn't advise against it.",
                "You needn't eat lots of sweet snacks.": "Wrong. Like 'don't have to', this just means it's not necessary — it doesn't warn against it.",
            },
        },
    },

    {
        id: "mra-mc-5",
        topic: "modals-rules-advice",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence that correctly talks about a PAST obligation:",
        grammarRule: "Had To — Talking About the Past",
        explanation: "'Must' has no past form. To talk about an obligation that existed in the past, we use 'had to'.",
        tip: "Must (present/future) → had to (past). Must never combines with 'to' or a past time word.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "We had to leave early yesterday because of the storm.",
            options: [
                "We had to leave early yesterday because of the storm.",
                "We must leave early yesterday because of the storm.",
                "We must to leave early yesterday because of the storm.",
                "We should left early yesterday because of the storm.",
            ],
            optionExplanations: {
                "We had to leave early yesterday because of the storm.": "Correct! 'Had to' is the past form used for obligation, since 'must' has no past tense.",
                "We must leave early yesterday because of the storm.": "Wrong. 'Must' only works for present and future — it can't combine with 'yesterday'.",
                "We must to leave early yesterday because of the storm.": "Wrong. 'Must' is never followed by 'to', and it still can't refer to the past.",
                "We should left early yesterday because of the storm.": "Wrong. 'Should' needs the base form after it: 'should leave', and doesn't correctly express a past obligation.",
            },
        },
    },

    {
        id: "mra-mc-6",
        topic: "modals-rules-advice",
        type: "multiple-choice",
        difficulty: "advanced",
        sentence: "Choose the grammatically correct sentence:",
        grammarRule: "Must / Should + Infinitive Without To",
        explanation: "'Must' and 'should' are modal verbs, followed directly by the base form of the next verb — never 'to', and never an -ing or past form.",
        tip: "Must and should are followed by the bare infinitive — never 'to', never -ing.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "You should ask Helen for some advice.",
            options: [
                "You should ask Helen for some advice.",
                "You should to ask Helen for some advice.",
                "You must to get there on time.",
                "She must attending the meeting today.",
            ],
            optionExplanations: {
                "You should ask Helen for some advice.": "Correct! 'Should' is followed directly by the base verb: 'should ask'.",
                "You should to ask Helen for some advice.": "Wrong. Never add 'to' after 'should' — modal verbs take the bare infinitive.",
                "You must to get there on time.": "Wrong. Never add 'to' after 'must' either — it should be 'must get'.",
                "She must attending the meeting today.": "Wrong. 'Must' needs the base form 'attend', not the -ing form.",
            },
        },
    },

    {
        id: "mra-mc-7",
        topic: "modals-rules-advice",
        type: "multiple-choice",
        difficulty: "advanced",
        sentence: "Choose the sentence that gives friendly advice against something, rather than stating a rule or a lack of necessity:",
        grammarRule: "Shouldn't vs Mustn't vs Don't Have To — Choosing Correctly",
        explanation: "'Shouldn't' warns that something is a bad idea. 'Mustn't' says something is forbidden. 'Don't have to'/'needn't' say something is simply not necessary — all three sound similar but mean different things.",
        tip: "Shouldn't = bad idea. Mustn't = forbidden. Don't have to/needn't = not necessary. Three different meanings.",
        multipleChoice: {
            question: "Which sentence correctly gives advice, not a rule or a statement about necessity?",
            correctOption: "You shouldn't stay this late every night.",
            options: [
                "You shouldn't stay this late every night.",
                "You mustn't stay this late every night.",
                "You don't have to stay this late every night.",
                "You needn't stay this late every night.",
            ],
            optionExplanations: {
                "You shouldn't stay this late every night.": "Correct! 'Shouldn't' gives advice — it says staying late isn't a good idea, without forbidding it.",
                "You mustn't stay this late every night.": "Wrong. 'Mustn't' makes it sound forbidden, like breaking a rule — too strong for friendly advice.",
                "You don't have to stay this late every night.": "Wrong. This just means it's not necessary — it doesn't say it's a bad idea.",
                "You needn't stay this late every night.": "Wrong. Like 'don't have to', 'needn't' means 'not necessary', not 'inadvisable'.",
            },
        },
    },

    // ===== WORD TRANSFORM QUESTIONS (6) =====

    {
        id: "mra-wt-1",
        topic: "modals-rules-advice",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "You ___ (wear) a seatbelt every time you drive.",
        grammarRule: "Must — Strong Obligation",
        explanation: "'Must' + bare infinitive expresses a strong obligation, often a law or safety rule with no real choice.",
        tip: "Must + base verb, no 'to': you must wear, not you must to wear.",
        wordTransform: {
            baseWord: "wear",
            correctAnswer: "must wear",
        },
    },

    {
        id: "mra-wt-2",
        topic: "modals-rules-advice",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "We ___ (pay) tax on the money we earn.",
        grammarRule: "Have To — External Necessity",
        explanation: "'Have to' expresses something necessary because of rules outside your control, like tax law. It behaves like a normal verb, not a modal.",
        tip: "Have to + base verb: we have to pay, she has to pay.",
        wordTransform: {
            baseWord: "pay",
            correctAnswer: "have to pay",
        },
    },

    {
        id: "mra-wt-3",
        topic: "modals-rules-advice",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "You ___ (finish) that report today — tomorrow will be fine.",
        grammarRule: "Don't Have To — Not Necessary",
        explanation: "'Don't have to' + bare infinitive means an action is not necessary — you have a choice. Here, 'tomorrow will be fine' shows there's no rush.",
        tip: "Don't have to = optional. Compare with mustn't = forbidden.",
        wordTransform: {
            baseWord: "finish",
            correctAnswer: "don't have to finish",
            alternativeAnswers: ["do not have to finish"],
        },
    },

    {
        id: "mra-wt-4",
        topic: "modals-rules-advice",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "You ___ (use) your phone during the exam.",
        grammarRule: "Mustn't — Prohibition",
        explanation: "'Mustn't' + bare infinitive means an action is forbidden — there's a rule against it.",
        tip: "Mustn't = not allowed. Never confuse it with don't have to (= not necessary but allowed).",
        wordTransform: {
            baseWord: "use",
            correctAnswer: "mustn't use",
            alternativeAnswers: ["must not use"],
        },
    },

    {
        id: "mra-wt-5",
        topic: "modals-rules-advice",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "You ___ (arrive) late to meetings — it looks unprofessional.",
        grammarRule: "Shouldn't — Negative Advice",
        explanation: "'Shouldn't' + bare infinitive gives advice against doing something — it's a bad idea, not a rule.",
        tip: "Shouldn't = bad idea/advice, weaker than mustn't (which means forbidden).",
        wordTransform: {
            baseWord: "arrive",
            correctAnswer: "shouldn't arrive",
            alternativeAnswers: ["should not arrive"],
        },
    },

    {
        id: "mra-wt-6",
        topic: "modals-rules-advice",
        type: "word-transform",
        difficulty: "advanced",
        sentence: "We ___ (leave) early yesterday because of the traffic.",
        grammarRule: "Had To — Past Obligation",
        explanation: "'Must' has no past form, so we use 'had to' + bare infinitive to talk about an obligation in the past.",
        tip: "Must (present/future) → had to (past). There's no such thing as 'musted'.",
        wordTransform: {
            baseWord: "leave",
            correctAnswer: "had to leave",
        },
    },
];

export const modalsRulesAdviceTopic = {
    id: "modals-rules-advice",
    name: "Modals for Rules and Advice",
    description: "Practice must, have to and need to for rules and obligations, mustn't and don't have to/needn't for prohibition versus optional actions, and should/shouldn't for giving advice.",
    lesson: "Lesson 4A",
    rules: modalsRulesAdviceQuestions,
};

export default modalsRulesAdviceQuestions;
