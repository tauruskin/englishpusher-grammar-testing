/**
 * EnglishPusher Grammar Testing - Articles (a/an/the/no article)
 * B1 Level (Speak Out) - Lesson 4B
 *
 * 6 gap-fill, 6 error-spot, 7 multiple-choice, 6 word-transform = 25 questions
 * VERIFIED: All error-spot indexes checked against split(" ") positions.
 */

import { GrammarQuestion } from "@/data/types";

export const articlesQuestions: GrammarQuestion[] = [

    // ===== GAP FILL (6) =====

    {
        id: "art-gap-1",
        topic: "articles",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "I saw ___ mouse in the kitchen.",
        grammarRule: "a/an — First Mention (New Information)",
        explanation: "Use 'a' the first time you mention something and the listener doesn't know which one you mean. 'Mouse' begins with a consonant sound.",
        tip: "First mention, unknown which one → a/an. Already known or mentioned → the.",
        gapFill: {
            gapIndex: 2,
            correctAnswer: "a",
            options: ["a", "an", "the", "no article"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-2",
        topic: "articles",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "She's ___ engineer and lives in Kyiv.",
        grammarRule: "a/an — Jobs (Choose by Sound)",
        explanation: "Use a/an with jobs. 'Engineer' starts with a vowel sound, so it needs 'an', not 'a'.",
        tip: "It's the SOUND that matters, not the letter: an engineer, an hour, but a university.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "an",
            options: ["a", "an", "the", "no article"],
            correctOptionIndex: 1,
        },
    },

    {
        id: "art-gap-3",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "I bought a laptop yesterday. ___ laptop stopped working today.",
        grammarRule: "the — Already Mentioned",
        explanation: "Once something has been mentioned once, use 'the' the next time — both speaker and listener now know exactly which one.",
        tip: "First mention = a/an. Every mention after that = the.",
        gapFill: {
            gapIndex: 5,
            correctAnswer: "the",
            options: ["a", "an", "the", "no article"],
            correctOptionIndex: 2,
        },
    },

    {
        id: "art-gap-4",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "That's ___ best restaurant in town.",
        grammarRule: "the — Superlatives",
        explanation: "Superlative adjectives (best, biggest, most famous) always take 'the' because there can only be one 'best'.",
        tip: "Superlative → the: the best, the tallest, the most expensive.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "the",
            options: ["a", "an", "the", "no article"],
            correctOptionIndex: 2,
        },
    },

    {
        id: "art-gap-5",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "They sailed along ___ River Danube last summer.",
        grammarRule: "the — Seas, Oceans and Rivers",
        explanation: "Names of rivers, seas and oceans always take 'the': the River Danube, the Pacific Ocean, the Black Sea.",
        tip: "the + river/sea/ocean name — no exceptions.",
        gapFill: {
            gapIndex: 3,
            correctAnswer: "the",
            options: ["a", "an", "the", "no article"],
            correctOptionIndex: 2,
        },
    },

    {
        id: "art-gap-6",
        topic: "articles",
        type: "gap-fill",
        difficulty: "advanced",
        sentence: "You're ___ only person who understands me.",
        grammarRule: "the — Defining Expressions (the first, the only)",
        explanation: "Expressions like 'the only', 'the first', 'the last' always take 'the' because they define exactly one thing.",
        tip: "the only / the first / the last / the next — always 'the'.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "the",
            options: ["a", "an", "the", "no article"],
            correctOptionIndex: 2,
        },
    },

    // ===== ERROR SPOT (6) =====
    // RULE: Every error is exactly ONE word. Replacing wrongWord with correction
    // must produce a 100% grammatically correct sentence with no leftover errors.

    // split(" ") → [0=She's,1=a,2=engineer,3=and,4=works,5=in,6=Berlin.]
    // words[1]="a" ✅  corrected: "She's an engineer and works in Berlin." ✅
    {
        id: "art-error-1",
        topic: "articles",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "She's a engineer and works in Berlin.",
        grammarRule: "a/an — Choose by Sound",
        explanation: "'Engineer' begins with a vowel sound, so it needs 'an', not 'a'. The choice depends on sound, not spelling.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "a",
            correction: "an",
            reason: "Use 'an' before a vowel sound: 'an engineer'.",
            correctionOptions: ["an", "a", "the", "no article"],
        },
    },

    // split(" ") → [0=Yesterday,1=I,2=saw,3=the,4=mouse,5=in,6=the,7=kitchen.]
    // words[3]="the" ✅  corrected: "Yesterday I saw a mouse in the kitchen." ✅
    {
        id: "art-error-2",
        topic: "articles",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "Yesterday I saw the mouse in the kitchen.",
        grammarRule: "a/an — First Mention",
        explanation: "This is the first time the mouse is mentioned and the listener doesn't know which one — that calls for 'a', not 'the'.",
        errorSpot: {
            errorWordIndex: 3,
            wrongWord: "the",
            correction: "a",
            reason: "First mention of something unknown to the listener → use 'a': 'I saw a mouse.'",
            correctionOptions: ["a", "the", "an", "no article"],
        },
    },

    // split(" ") → [0=Yuri,1=Gagarin,2=was,3=a,4=first,5=man,6=in,7=space.]
    // words[3]="a" ✅  corrected: "Yuri Gagarin was the first man in space." ✅
    {
        id: "art-error-3",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "Yuri Gagarin was a first man in space.",
        grammarRule: "the — Defining Expressions",
        explanation: "'The first' is a defining expression — it always takes 'the' because there can only be one 'first'.",
        errorSpot: {
            errorWordIndex: 3,
            wrongWord: "a",
            correction: "the",
            reason: "Defining expressions like 'the first' always use 'the': 'the first man in space'.",
            correctionOptions: ["the", "a", "an", "no article"],
        },
    },

    // split(" ") → [0=I,1=want,2=to,3=be,4=the,5=doctor,6=when,7=I,8=grow,9=up.]
    // words[4]="the" ✅  corrected: "I want to be a doctor when I grow up." ✅
    {
        id: "art-error-4",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "I want to be the doctor when I grow up.",
        grammarRule: "a/an — Jobs (General, Not Specific)",
        explanation: "When talking about a job in general — not one particular doctor — use 'a', not 'the'.",
        errorSpot: {
            errorWordIndex: 4,
            wrongWord: "the",
            correction: "a",
            reason: "Talking about a profession in general → 'a doctor', not 'the doctor'.",
            correctionOptions: ["a", "the", "an", "no article"],
        },
    },

    // split(" ") → [0=They,1=sailed,2=down,3=a,4=River,5=Danube,6=for,7=two,8=weeks.]
    // words[3]="a" ✅  corrected: "They sailed down the River Danube for two weeks." ✅
    {
        id: "art-error-5",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "They sailed down a River Danube for two weeks.",
        grammarRule: "the — Rivers",
        explanation: "River names always take 'the': the River Danube, the River Thames, the Nile.",
        errorSpot: {
            errorWordIndex: 3,
            wrongWord: "a",
            correction: "the",
            reason: "River names always use 'the': 'the River Danube'.",
            correctionOptions: ["the", "a", "an", "no article"],
        },
    },

    // split(" ") → [0=This,1=is,2=a,3=most,4=beautiful,5=painting,6=I've,7=ever,8=seen.]
    // words[2]="a" ✅  corrected: "This is the most beautiful painting I've ever seen." ✅
    {
        id: "art-error-6",
        topic: "articles",
        type: "error-spot",
        difficulty: "advanced",
        sentence: "This is a most beautiful painting I've ever seen.",
        grammarRule: "the — Superlatives",
        explanation: "'Most beautiful' is a superlative, and superlatives always take 'the' because they describe something unique.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "a",
            correction: "the",
            reason: "Superlatives always take 'the': 'the most beautiful painting'.",
            correctionOptions: ["the", "a", "an", "no article"],
        },
    },

    // ===== MULTIPLE CHOICE (7) =====

    {
        id: "art-mc-1",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence that correctly describes someone's job.",
        grammarRule: "a/an — Jobs",
        explanation: "We always use a/an before a job, choosing 'a' or 'an' based on the sound that follows.",
        tip: "Job = a/an + job title: a doctor, an artist, a teacher.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "He's a doctor.",
            options: [
                "He's a doctor.",
                "He's doctor.",
                "He's the doctor.",
                "He's an doctor.",
            ],
            optionExplanations: {
                "He's a doctor.": "Correct! Jobs take a/an, and 'doctor' starts with a consonant sound, so it's 'a'.",
                "He's doctor.": "Wrong. Jobs always need an article in English — never leave it out.",
                "He's the doctor.": "Wrong. 'The doctor' implies one specific, already-known doctor — not what this sentence means.",
                "He's an doctor.": "Wrong. 'Doctor' starts with a consonant sound, so it needs 'a', not 'an'.",
            },
        },
    },

    {
        id: "art-mc-2",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence that makes a general statement about dogs.",
        grammarRule: "No Article — Talking Generally",
        explanation: "To talk generally about people or things (dogs in general, not specific ones), use the plural noun with no article.",
        tip: "General statement about a whole group → plural noun, no article: Dogs are loyal.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "Dogs make loyal pets.",
            options: [
                "Dogs make loyal pets.",
                "The dogs make loyal pets.",
                "A dogs make loyal pets.",
                "The dog make loyal pets.",
            ],
            optionExplanations: {
                "Dogs make loyal pets.": "Correct! A general statement about dogs uses the plural with no article.",
                "The dogs make loyal pets.": "Wrong. 'The dogs' would mean specific, known dogs — not dogs in general.",
                "A dogs make loyal pets.": "Wrong. 'A' can never be used with a plural noun.",
                "The dog make loyal pets.": "Wrong. Singular 'the dog' needs the singular verb 'makes', and it wrongly suggests one specific dog.",
            },
        },
    },

    {
        id: "art-mc-3",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence that correctly names the country she grew up in.",
        grammarRule: "No Article — Country Names",
        explanation: "Most country names take no article at all: Poland, France, Japan.",
        tip: "Country name, one word → no article: in Poland, in France, in Japan.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "She grew up in Poland.",
            options: [
                "She grew up in Poland.",
                "She grew up in the Poland.",
                "She grew up in a Poland.",
                "She grew up Poland.",
            ],
            optionExplanations: {
                "She grew up in Poland.": "Correct! Most country names take no article.",
                "She grew up in the Poland.": "Wrong. One-word country names like 'Poland' never take 'the'.",
                "She grew up in a Poland.": "Wrong. Country names are unique places — they can't take 'a'.",
                "She grew up Poland.": "Wrong. The preposition 'in' is missing before the country name.",
            },
        },
    },

    {
        id: "art-mc-4",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence that correctly refers to the ocean they crossed.",
        grammarRule: "the — Oceans",
        explanation: "Names of oceans always take 'the': the Atlantic Ocean, the Pacific Ocean.",
        tip: "Ocean/sea name → always 'the': the Atlantic Ocean, the Black Sea.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "They crossed the Atlantic Ocean by boat.",
            options: [
                "They crossed the Atlantic Ocean by boat.",
                "They crossed Atlantic Ocean by boat.",
                "They crossed a Atlantic Ocean by boat.",
                "They crossed an Atlantic Ocean by boat.",
            ],
            optionExplanations: {
                "They crossed the Atlantic Ocean by boat.": "Correct! Ocean names always take 'the'.",
                "They crossed Atlantic Ocean by boat.": "Wrong. Ocean names can't stand with no article — they always need 'the'.",
                "They crossed a Atlantic Ocean by boat.": "Wrong. There's only one Atlantic Ocean, so 'a' is impossible here — and it should be 'the' anyway.",
                "They crossed an Atlantic Ocean by boat.": "Wrong. Same problem — ocean names need 'the', not 'an'.",
            },
        },
    },

    {
        id: "art-mc-5",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence that correctly names the country he moved to.",
        grammarRule: "the — Country Names with Extra Words",
        explanation: "Country names that are plural or contain an extra word like 'Kingdom', 'States' or 'Republic' take 'the': the United Kingdom, the United States.",
        tip: "Country name with an extra word (Kingdom, States, Republic) → the. Simple one-word name → no article.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "My cousin moved to the United Kingdom last year.",
            options: [
                "My cousin moved to the United Kingdom last year.",
                "My cousin moved to United Kingdom last year.",
                "My cousin moved to a United Kingdom last year.",
                "My cousin moved to an United Kingdom last year.",
            ],
            optionExplanations: {
                "My cousin moved to the United Kingdom last year.": "Correct! Country names with an extra word like 'Kingdom' take 'the'.",
                "My cousin moved to United Kingdom last year.": "Wrong. 'United Kingdom' needs 'the' — it can't stand with no article.",
                "My cousin moved to a United Kingdom last year.": "Wrong. There's only one United Kingdom, so 'a' is wrong — it needs 'the'.",
                "My cousin moved to an United Kingdom last year.": "Wrong. Even though 'United' starts with a vowel letter, the rule here is 'the', not 'an'.",
            },
        },
    },

    {
        id: "art-mc-6",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence that correctly talks about a sport.",
        grammarRule: "No Article — Sports",
        explanation: "Sports names take no article: play football, play tennis, do yoga.",
        tip: "Sport → no article: play football, not play the football.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "He plays football every weekend.",
            options: [
                "He plays football every weekend.",
                "He plays the football every weekend.",
                "He plays a football every weekend.",
                "He plays an football every weekend.",
            ],
            optionExplanations: {
                "He plays football every weekend.": "Correct! Sports names take no article.",
                "He plays the football every weekend.": "Wrong. Sports never take 'the' when talking about playing them generally.",
                "He plays a football every weekend.": "Wrong. 'A football' would mean one football (the ball), not the sport.",
                "He plays an football every weekend.": "Wrong. Same problem, and 'football' starts with a consonant sound anyway.",
            },
        },
    },

    {
        id: "art-mc-7",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "advanced",
        sentence: "Choose the sentence that correctly gives the date of the meeting.",
        grammarRule: "the — Spoken Dates",
        explanation: "In spoken English, dates take 'the' before the ordinal number: the fifth of June, the twenty-first of March.",
        tip: "Spoken date → the + ordinal + of + month: the fifth of June.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "The meeting is on the fifth of June.",
            options: [
                "The meeting is on the fifth of June.",
                "The meeting is on fifth of June.",
                "The meeting is on a fifth of June.",
                "The meeting is on an fifth of June.",
            ],
            optionExplanations: {
                "The meeting is on the fifth of June.": "Correct! Spoken dates take 'the' before the ordinal number.",
                "The meeting is on fifth of June.": "Wrong. The article 'the' is missing before 'fifth'.",
                "The meeting is on a fifth of June.": "Wrong. There's only one fifth of June, so 'a' is wrong — it should be 'the'.",
                "The meeting is on an fifth of June.": "Wrong. Same problem, and 'fifth' doesn't even start with a vowel sound.",
            },
        },
    },

    // ===== WORD TRANSFORM (6) =====

    {
        id: "art-wt-1",
        topic: "articles",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "I'd like ___ apple, please.",
        grammarRule: "a/an — Choose by Sound, Not Spelling",
        explanation: "'Apple' begins with a vowel sound, so it needs 'an'. The choice between a/an always depends on sound, not spelling.",
        tip: "an + vowel SOUND: an apple, an hour. a + consonant SOUND: a university, a European.",
        wordTransform: {
            baseWord: "a/an",
            correctAnswer: "an",
        },
    },

    {
        id: "art-wt-2",
        topic: "articles",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "He works as ___ teacher in a local primary school.",
        grammarRule: "a/an — Jobs",
        explanation: "Use a/an with jobs. 'Teacher' starts with a consonant sound, so it needs 'a'.",
        tip: "a/an + job: a teacher, an actor, a nurse.",
        wordTransform: {
            baseWord: "a/an",
            correctAnswer: "a",
        },
    },

    {
        id: "art-wt-3",
        topic: "articles",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "This is ___ best pizza I've ever eaten.",
        grammarRule: "the — Superlatives",
        explanation: "Superlative adjectives (best, biggest, most interesting) always take 'the' because they describe something unique.",
        tip: "Superlatives always take 'the': the best, the tallest, the most expensive.",
        wordTransform: {
            baseWord: "a/the",
            correctAnswer: "the",
        },
    },

    {
        id: "art-wt-4",
        topic: "articles",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "We're planning to sail across ___ Pacific Ocean next year.",
        grammarRule: "the — Seas, Oceans and Rivers",
        explanation: "Names of seas, oceans and rivers always take 'the': the Pacific Ocean, the River Danube, the Black Sea.",
        tip: "the + sea/ocean/river name — always.",
        wordTransform: {
            baseWord: "a/the",
            correctAnswer: "the",
        },
    },

    {
        id: "art-wt-5",
        topic: "articles",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "My brother has lived in ___ United States for ten years.",
        grammarRule: "the — Country Names with Extra Words",
        explanation: "Most country names take no article, but ones with an extra word like 'Kingdom', 'States' or 'Republic' take 'the': the United States, the United Kingdom.",
        tip: "One-word country name → no article (Poland, France). Country name with an extra word → the (the United States).",
        wordTransform: {
            baseWord: "a/the",
            correctAnswer: "the",
        },
    },

    {
        id: "art-wt-6",
        topic: "articles",
        type: "word-transform",
        difficulty: "advanced",
        sentence: "Could you pass me ___ salt? It's right next to you.",
        grammarRule: "the — When It's Obvious Which One",
        explanation: "Use 'the' when it's clear from context exactly which thing you mean — here there's only one salt shaker on the table.",
        tip: "If both speaker and listener know exactly which one you mean, use 'the'.",
        wordTransform: {
            baseWord: "a/the",
            correctAnswer: "the",
        },
    },
];

export const articlesTopic = {
    id: "articles",
    name: "Articles: a, an, the",
    description: "Master when to use a/an, when to use the, and when to use no article at all — from first mentions and jobs to superlatives, rivers, and country names.",
    lesson: "Lesson 4B",
    rules: articlesQuestions,
};

export default articlesQuestions;
