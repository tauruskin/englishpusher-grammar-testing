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
        sentence: "I saw ___ dog running down the street.",
        grammarRule: "Indefinite Article 'A' — First Mention, Consonant Sound",
        explanation: "'A' is used before a singular noun starting with a consonant SOUND, the first time it's mentioned.",
        tip: "a + consonant sound, an + vowel sound — listen to the sound, not the letter.",
        gapFill: {
            gapIndex: 2,
            correctAnswer: "a",
            options: ["a", "an", "the", "some"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-2",
        topic: "articles",
        type: "gap-fill",
        difficulty: "beginner",
        sentence: "She works as ___ engineer at a software company.",
        grammarRule: "Indefinite Article 'An' — Jobs, Vowel Sound",
        explanation: "Use 'an' before jobs and other singular nouns that start with a vowel SOUND. 'Engineer' starts with the vowel sound /ɛ/.",
        tip: "a/an + job: she's a doctor, he's an artist.",
        gapFill: {
            gapIndex: 3,
            correctAnswer: "an",
            options: ["an", "a", "the", "some"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-3",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "My sister is ___ university student in Kyiv.",
        grammarRule: "A vs An — Sound, Not Spelling",
        explanation: "'University' starts with the letter 'u' but is pronounced with a consonant sound /j/ (like 'you'), so it takes 'a', not 'an'.",
        tip: "Say the word aloud — university, uniform, European, one — all start with a consonant sound despite their vowel letter.",
        gapFill: {
            gapIndex: 3,
            correctAnswer: "a",
            options: ["a", "an", "the", "some"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-4",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "We arrived ___ hour early for the flight.",
        grammarRule: "A vs An — Silent Letters",
        explanation: "'Hour' starts with a silent 'h', so it's pronounced with a vowel sound /aʊ/. That's why it takes 'an', not 'a'.",
        tip: "hour, honest, honour — the 'h' is silent, so use 'an'.",
        gapFill: {
            gapIndex: 2,
            correctAnswer: "an",
            options: ["an", "a", "the", "some"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-5",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "Usain Bolt is considered ___ fastest runner in history.",
        grammarRule: "Definite Article 'The' — Superlatives",
        explanation: "We always use 'the' with superlative adjectives like 'fastest', 'biggest' or 'best' — there's only one thing that can be the most extreme.",
        tip: "Superlative = the + adjective + -est (or the most + adjective).",
        gapFill: {
            gapIndex: 4,
            correctAnswer: "the",
            options: ["the", "a", "an", "some"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-6",
        topic: "articles",
        type: "gap-fill",
        difficulty: "advanced",
        sentence: "Thousands of tourists visit ___ River Thames every year.",
        grammarRule: "Definite Article 'The' — Rivers",
        explanation: "We use 'the' with the names of rivers, seas and oceans: the River Thames, the Pacific Ocean, the Mediterranean Sea.",
        tip: "the + River [Name] / the [Name] Ocean / the [Name] Sea.",
        gapFill: {
            gapIndex: 4,
            correctAnswer: "the",
            options: ["the", "a", "an", "some"],
            correctOptionIndex: 0,
        },
    },

    // ===== ERROR SPOT (6) =====
    // RULE: Every error is exactly ONE word. Replacing wrongWord with correction
    // must produce a 100% grammatically correct sentence with no leftover errors.

    // split(" ") → [0=She's, 1=a, 2=artist, 3=and, 4=paints, 5=amazing, 6=portraits.]
    // words[1]="a" ✅  corrected: "She's an artist and paints amazing portraits." ✅
    {
        id: "art-error-1",
        topic: "articles",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "She's a artist and paints amazing portraits.",
        grammarRule: "A vs An — Vowel Sound",
        explanation: "'Artist' starts with a vowel sound, so it needs 'an', not 'a'.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "a",
            correction: "an",
            reason: "'Artist' begins with a vowel sound — use 'an': 'She's an artist.'",
            correctionOptions: ["an", "a", "the", "some"],
        },
    },

    // split(" ") → [0=He's, 1=an, 2=teacher, 3=at, 4=a, 5=secondary, 6=school.]
    // words[1]="an" ✅  corrected: "He's a teacher at a secondary school." ✅
    {
        id: "art-error-2",
        topic: "articles",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "He's an teacher at a secondary school.",
        grammarRule: "A vs An — Consonant Sound",
        explanation: "'Teacher' starts with a consonant sound /t/, so it needs 'a', not 'an'.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "an",
            correction: "a",
            reason: "'Teacher' begins with a consonant sound — use 'a': 'He's a teacher.'",
            correctionOptions: ["a", "an", "the", "some"],
        },
    },

    // split(" ") → [0=I, 1=looked, 2=up, 3=and, 4=saw, 5=a, 6=Sun, 7=shining, 8=brightly.]
    // words[5]="a" ✅  corrected: "I looked up and saw the Sun shining brightly." ✅
    {
        id: "art-error-3",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "I looked up and saw a Sun shining brightly.",
        grammarRule: "Definite Article 'The' — Only One in Existence",
        explanation: "There is only one Sun, so we always use 'the Sun', never 'a Sun'.",
        errorSpot: {
            errorWordIndex: 5,
            wrongWord: "a",
            correction: "the",
            reason: "'The Sun' is unique — there's only one, so it always takes 'the'.",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // split(" ") → [0=That, 1=was, 2=a, 3=best, 4=film, 5=I've, 6=seen, 7=this, 8=year.]
    // words[2]="a" ✅  corrected: "That was the best film I've seen this year." ✅
    {
        id: "art-error-4",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "That was a best film I've seen this year.",
        grammarRule: "Definite Article 'The' — Superlatives",
        explanation: "Superlatives like 'best' always take 'the', because they describe something unique in its category.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "a",
            correction: "the",
            reason: "Superlative adjectives always take 'the': 'That was the best film...'",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // split(" ") → [0=We, 1=took, 2=a, 3=boat, 4=trip, 5=along, 6=a, 7=River, 8=Danube.]
    // words[6]="a" ✅  corrected: "We took a boat trip along the River Danube." ✅
    {
        id: "art-error-5",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "We took a boat trip along a River Danube.",
        grammarRule: "Definite Article 'The' — Rivers",
        explanation: "River names always take 'the': the River Danube, the River Thames, the Nile.",
        errorSpot: {
            errorWordIndex: 6,
            wrongWord: "a",
            correction: "the",
            reason: "River names always take 'the', not 'a': 'along the River Danube.'",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // split(" ") → [0=He, 1=was, 2=a, 3=only, 4=survivor, 5=of, 6=the, 7=crash.]
    // words[2]="a" ✅  corrected: "He was the only survivor of the crash." ✅
    {
        id: "art-error-6",
        topic: "articles",
        type: "error-spot",
        difficulty: "advanced",
        sentence: "He was a only survivor of the crash.",
        grammarRule: "Definite Article 'The' — Defining Expressions",
        explanation: "Words like 'only', 'first', 'same' and 'next' are defining expressions that always take 'the'.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "a",
            correction: "the",
            reason: "'Only' is a defining expression and always takes 'the': 'He was the only survivor.'",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // ===== MULTIPLE CHOICE (7) =====

    {
        id: "art-mc-1",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence that makes a general statement about all elephants and lions.",
        grammarRule: "No Article — General Statements",
        explanation: "To talk generally about people or things as a whole category, we use no article and the plural noun form.",
        tip: "Elephants are big. Dogs are loyal. Cats sleep a lot. — general truths = no article + plural noun.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "Elephants are bigger than lions.",
            options: [
                "Elephants are bigger than lions.",
                "The elephants are bigger than the lions.",
                "An elephants are bigger than a lions.",
                "The elephant are bigger than lion.",
            ],
            optionExplanations: {
                "Elephants are bigger than lions.": "Correct! General statements about people or things in general use NO article.",
                "The elephants are bigger than the lions.": "Wrong. 'The' would mean specific, already-known elephants and lions, not elephants and lions in general.",
                "An elephants are bigger than a lions.": "Wrong. 'A/an' can't be used before plural nouns like 'elephants' and 'lions'.",
                "The elephant are bigger than lion.": "Wrong. Singular 'elephant'/'lion' need 's' for a general plural statement, and 'are' doesn't match a singular subject.",
            },
        },
    },

    {
        id: "art-mc-2",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence with the correct article for a city name.",
        grammarRule: "No Article — Most Place Names",
        explanation: "Most names of towns, cities and countries take no article: Paris, Japan, London, Brazil.",
        tip: "I live in Paris / I'm from Japan — no article with most place names.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "I live in Paris.",
            options: [
                "I live in Paris.",
                "I live in the Paris.",
                "I live in a Paris.",
                "I live in an Paris.",
            ],
            optionExplanations: {
                "I live in Paris.": "Correct! Most city and country names take no article.",
                "I live in the Paris.": "Wrong. City names don't normally take 'the' — just 'Paris'.",
                "I live in a Paris.": "Wrong. Paris is one specific, unique place — it can't take 'a'.",
                "I live in an Paris.": "Wrong. Same problem, and 'an' would need a vowel sound after it anyway.",
            },
        },
    },

    {
        id: "art-mc-3",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct article for this country name.",
        grammarRule: "Definite Article 'The' — Countries with Extra Words",
        explanation: "Country names that are plural or contain extra words (Kingdom, States, Republic) take 'the': the United Kingdom, the United States, the Netherlands.",
        tip: "Most countries: no article (France, Japan). Countries with extra words: the United Kingdom, the United States.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "She has lived in the United States for ten years.",
            options: [
                "She has lived in the United States for ten years.",
                "She has lived in United States for ten years.",
                "She has lived in a United States for ten years.",
                "She has lived in an United States for ten years.",
            ],
            optionExplanations: {
                "She has lived in the United States for ten years.": "Correct! Country names made of multiple words like 'the United States' or 'the United Kingdom' take 'the'.",
                "She has lived in United States for ten years.": "Wrong. Multi-word country names like 'the United States' need 'the'.",
                "She has lived in a United States for ten years.": "Wrong. 'A' would suggest one of several United States — that's not the meaning here.",
                "She has lived in an United States for ten years.": "Wrong. Same problem as 'a', plus 'United' starts with a consonant sound.",
            },
        },
    },

    {
        id: "art-mc-4",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct article for talking about a sport.",
        grammarRule: "No Article — Sports",
        explanation: "The names of sports and games take no article: play tennis, play football, play chess.",
        tip: "I like tennis. He plays football. — no article with sports.",
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
                "He plays the football every weekend.": "Wrong. We don't use 'the' with sports names: 'plays football', not 'plays the football'.",
                "He plays a football every weekend.": "Wrong. 'A football' would mean one ball, not the sport.",
                "He plays an football every weekend.": "Wrong. Same problem, plus 'football' starts with a consonant sound.",
            },
        },
    },

    {
        id: "art-mc-5",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct fixed phrase.",
        grammarRule: "No Article — Fixed Phrases with Prepositions",
        explanation: "Some common phrases with prepositions are fixed and take no article: at work, on foot, for lunch, on Monday.",
        tip: "at work, on foot, for lunch, on Monday — learn these as fixed phrases, no article.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "I was at work when you called.",
            options: [
                "I was at work when you called.",
                "I was at the work when you called.",
                "I was at a work when you called.",
                "I was in work when you called.",
            ],
            optionExplanations: {
                "I was at work when you called.": "Correct! 'At work' is a fixed phrase with no article.",
                "I was at the work when you called.": "Wrong. Fixed phrases like 'at work', 'at home', 'on foot' don't take an article.",
                "I was at a work when you called.": "Wrong. Same problem — 'work' here is a fixed phrase, not a countable noun.",
                "I was in work when you called.": "Wrong. The fixed preposition phrase is 'at work', not 'in work'.",
            },
        },
    },

    {
        id: "art-mc-6",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct article for a general shopping list, not specific known bottles.",
        grammarRule: "No Article — Plural Nouns, First Mention",
        explanation: "Before plural nouns, especially the first time they're mentioned, we normally use no article at all.",
        tip: "I bought six bottles of water. (new info) vs I drank the water you bought. (already known)",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "I bought six bottles of water.",
            options: [
                "I bought six bottles of water.",
                "I bought a six bottles of water.",
                "I bought an six bottles of water.",
                "I bought the six bottles of water.",
            ],
            optionExplanations: {
                "I bought six bottles of water.": "Correct! Plural nouns introduced for the first time take no article.",
                "I bought a six bottles of water.": "Wrong. 'A/an' can never go before a plural noun like 'bottles'.",
                "I bought an six bottles of water.": "Wrong. Same problem, plus the wrong sound rule too.",
                "I bought the six bottles of water.": "Wrong here — 'the' would mean specific bottles already known to the listener, not a first mention.",
            },
        },
    },

    {
        id: "art-mc-7",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "advanced",
        sentence: "Choose the sentence with the correct article for a spoken date.",
        grammarRule: "Definite Article 'The' — Spoken Dates",
        explanation: "In spoken English, we say dates with 'the' and an ordinal number: the fifth of June, the first of May.",
        tip: "Spoken: the fifth of June. Written: 5 June / June 5th (no 'the' needed in writing).",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "The meeting is on the fifth of June.",
            options: [
                "The meeting is on the fifth of June.",
                "The meeting is on fifth of June.",
                "The meeting is on a fifth of June.",
                "The meeting is on the five of June.",
            ],
            optionExplanations: {
                "The meeting is on the fifth of June.": "Correct! In spoken English, dates like 'the fifth of June' take 'the'.",
                "The meeting is on fifth of June.": "Wrong. Spoken dates need 'the' before the ordinal number: 'the fifth'.",
                "The meeting is on a fifth of June.": "Wrong. 'A' doesn't fit with dates — there's only one fifth of June.",
                "The meeting is on the five of June.": "Wrong. Dates use the ordinal number ('fifth'), not the cardinal number ('five').",
            },
        },
    },

    // ===== WORD TRANSFORM (6) =====

    {
        id: "art-wt-1",
        topic: "articles",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "I need ___ umbrella — it's raining.",
        grammarRule: "A vs An — Vowel Sound",
        explanation: "'Umbrella' starts with a vowel sound, so it takes 'an'.",
        tip: "a + consonant sound, an + vowel sound: an umbrella, an hour, an idea.",
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
        sentence: "She works as ___ doctor in Kyiv.",
        grammarRule: "A vs An — Consonant Sound",
        explanation: "'Doctor' starts with a consonant sound, so it takes 'a', not 'an'.",
        tip: "a + consonant sound: a doctor, a nurse, a teacher.",
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
        sentence: "Everest is ___ highest mountain on Earth.",
        grammarRule: "Definite Article 'The' — Superlatives",
        explanation: "Superlatives always take 'the' because they describe something unique in its category.",
        tip: "the + superlative: the highest, the best, the most beautiful.",
        wordTransform: {
            baseWord: "a/an/the",
            correctAnswer: "the",
        },
    },

    {
        id: "art-wt-4",
        topic: "articles",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "They live near ___ River Thames.",
        grammarRule: "Definite Article 'The' — Rivers",
        explanation: "River names always take 'the': the River Thames, the River Danube.",
        tip: "the + River [Name] — always.",
        wordTransform: {
            baseWord: "a/an/the",
            correctAnswer: "the",
        },
    },

    {
        id: "art-wt-5",
        topic: "articles",
        type: "word-transform",
        difficulty: "intermediate",
        sentence: "This is ___ same phone I bought last year — I just repaired it.",
        grammarRule: "Definite Article 'The' — Defining Expressions",
        explanation: "'Same' is a defining expression like 'only', 'first' and 'next' — these always take 'the'.",
        tip: "the same, the only, the first, the next — defining expressions always take 'the'.",
        wordTransform: {
            baseWord: "a/an/the",
            correctAnswer: "the",
        },
    },

    {
        id: "art-wt-6",
        topic: "articles",
        type: "word-transform",
        difficulty: "advanced",
        sentence: "By ___ end of the week, we'd finished the whole project.",
        grammarRule: "Definite Article 'The' — Fixed Prepositional Phrases",
        explanation: "Some fixed phrases with prepositions always take 'the': by the end, in the morning, at the moment.",
        tip: "by the end, in the end, at the end — learn these as fixed 'the' phrases.",
        wordTransform: {
            baseWord: "a/an/the",
            correctAnswer: "the",
        },
    },
];

export const articlesTopic = {
    id: "articles",
    name: "Articles: A, An, The",
    description: "Master when to use a/an, the, or no article at all — including the tricky sound-based rules for a vs an, superlatives, rivers, and fixed phrases.",
    lesson: "Lesson 4B",
    rules: articlesQuestions,
};

export default articlesQuestions;
