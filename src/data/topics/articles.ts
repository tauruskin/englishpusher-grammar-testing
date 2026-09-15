/**
 * EnglishPusher Grammar Testing - Articles
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
        grammarRule: "Indefinite Article 'A' — First Mention",
        explanation: "Use 'a' the first time you mention a singular countable noun — it's new information the listener doesn't know about yet.",
        tip: "New singular noun, first mention → a/an. 'Mouse' starts with a consonant sound → a.",
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
        sentence: "He's ___ artist.",
        grammarRule: "Indefinite Article — Jobs",
        explanation: "Use a/an before a person's job. 'Artist' starts with a vowel sound, so it needs 'an', not 'a'.",
        tip: "Jobs always take a/an: he's a doctor, she's an artist — never 'he's artist'.",
        gapFill: {
            gapIndex: 1,
            correctAnswer: "an",
            options: ["an", "a", "the", "no article"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-3",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "Have you ever seen ___ Sun rise over the ocean?",
        grammarRule: "Definite Article — Unique Things",
        explanation: "Use 'the' when there's only one of something in the world, like the Sun, the Moon, or the sky.",
        tip: "Only one exists → the. The Sun, the Moon, the internet.",
        gapFill: {
            gapIndex: 4,
            correctAnswer: "the",
            options: ["the", "a", "an", "no article"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-4",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "This is ___ most beautiful beach I've ever visited.",
        grammarRule: "Definite Article — Superlatives",
        explanation: "Superlatives (most beautiful, best, tallest) always take 'the' — there can only be one 'most' of anything.",
        tip: "Superlative adjective → always the: the best, the tallest, the most beautiful.",
        gapFill: {
            gapIndex: 2,
            correctAnswer: "the",
            options: ["the", "a", "an", "no article"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-5",
        topic: "articles",
        type: "gap-fill",
        difficulty: "intermediate",
        sentence: "We stopped to admire ___ River Danube on our trip.",
        grammarRule: "Definite Article — Rivers, Oceans, Seas",
        explanation: "Rivers, oceans and seas take 'the': the River Danube, the Pacific Ocean, the Mediterranean Sea.",
        tip: "Water names (rivers, seas, oceans) always take the — but most lakes don't: Lake Como, no article.",
        gapFill: {
            gapIndex: 4,
            correctAnswer: "the",
            options: ["the", "a", "an", "no article"],
            correctOptionIndex: 0,
        },
    },

    {
        id: "art-gap-6",
        topic: "articles",
        type: "gap-fill",
        difficulty: "advanced",
        sentence: "He was ___ first person to climb the mountain without oxygen.",
        grammarRule: "Definite Article — Defining Expressions",
        explanation: "Defining expressions like 'the first', 'the only', 'the same' always take 'the' — they pick out one specific thing from a group.",
        tip: "The first, the only, the last, the same → always the.",
        gapFill: {
            gapIndex: 2,
            correctAnswer: "the",
            options: ["the", "a", "an", "no article"],
            correctOptionIndex: 0,
        },
    },

    // ===== ERROR SPOT (6) =====
    // RULE: Every error is exactly ONE word. Replacing wrongWord with correction
    // must produce a 100% grammatically correct sentence with no leftover errors.

    // split(" ") → [0=I, 1=saw, 2=an, 3=mouse, 4=in, 5=the, 6=kitchen.]
    // words[2]="an" ✅  corrected: "I saw a mouse in the kitchen." ✅
    {
        id: "art-error-1",
        topic: "articles",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "I saw an mouse in the kitchen.",
        grammarRule: "A vs An — Consonant Sounds",
        explanation: "'Mouse' starts with a consonant sound /m/, so it needs 'a', not 'an'. The choice between a/an depends on sound, not spelling.",
        errorSpot: {
            errorWordIndex: 2,
            wrongWord: "an",
            correction: "a",
            reason: "'Mouse' starts with a consonant sound, so use 'a': 'I saw a mouse in the kitchen.'",
            correctionOptions: ["a", "an", "the", "some"],
        },
    },

    // split(" ") → [0=He, 1=works, 2=as, 3=a, 4=engineer, 5=in, 6=Berlin.]
    // words[3]="a" ✅  corrected: "He works as an engineer in Berlin." ✅
    {
        id: "art-error-2",
        topic: "articles",
        type: "error-spot",
        difficulty: "beginner",
        sentence: "He works as a engineer in Berlin.",
        grammarRule: "A vs An — Vowel Sounds",
        explanation: "'Engineer' starts with a vowel sound /ɪ/, so it needs 'an', not 'a'.",
        errorSpot: {
            errorWordIndex: 3,
            wrongWord: "a",
            correction: "an",
            reason: "'Engineer' starts with a vowel sound, so use 'an': 'He works as an engineer in Berlin.'",
            correctionOptions: ["an", "a", "the", "some"],
        },
    },

    // split(" ") → [0=That's, 1=a, 2=most, 3=amazing, 4=view, 5=I've, 6=ever, 7=seen.]
    // words[1]="a" ✅  corrected: "That's the most amazing view I've ever seen." ✅
    {
        id: "art-error-3",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "That's a most amazing view I've ever seen.",
        grammarRule: "Definite Article — Superlatives",
        explanation: "Superlatives ('most amazing') always take 'the', never 'a'.",
        errorSpot: {
            errorWordIndex: 1,
            wrongWord: "a",
            correction: "the",
            reason: "Superlatives always take 'the': 'That's the most amazing view I've ever seen.'",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // split(" ") → [0=Scientists, 1=are, 2=studying, 3=a, 4=Sun's, 5=effect, 6=on, 7=climate.]
    // words[3]="a" ✅  corrected: "Scientists are studying the Sun's effect on climate." ✅
    {
        id: "art-error-4",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "Scientists are studying a Sun's effect on climate.",
        grammarRule: "Definite Article — Unique Things",
        explanation: "There is only one Sun, so it always takes 'the', not 'a'.",
        errorSpot: {
            errorWordIndex: 3,
            wrongWord: "a",
            correction: "the",
            reason: "Only one Sun exists, so it takes 'the': 'Scientists are studying the Sun's effect on climate.'",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // split(" ") → [0=I've, 1=always, 2=wanted, 3=to, 4=visit, 5=a, 6=United, 7=Kingdom.]
    // words[5]="a" ✅  corrected: "I've always wanted to visit the United Kingdom." ✅
    {
        id: "art-error-5",
        topic: "articles",
        type: "error-spot",
        difficulty: "intermediate",
        sentence: "I've always wanted to visit a United Kingdom.",
        grammarRule: "Definite Article — Country Names with Extra Words",
        explanation: "Country names made of multiple words or plural forms take 'the': the United Kingdom, the United States, the Netherlands.",
        errorSpot: {
            errorWordIndex: 5,
            wrongWord: "a",
            correction: "the",
            reason: "Multi-word country names take 'the': 'I've always wanted to visit the United Kingdom.'",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // split(" ") → [0=We, 1=walked, 2=along, 3=a, 4=River, 5=Thames, 6=yesterday.]
    // words[3]="a" ✅  corrected: "We walked along the River Thames yesterday." ✅
    {
        id: "art-error-6",
        topic: "articles",
        type: "error-spot",
        difficulty: "advanced",
        sentence: "We walked along a River Thames yesterday.",
        grammarRule: "Definite Article — Rivers, Oceans, Seas",
        explanation: "River names always take 'the': the River Thames, the River Danube.",
        errorSpot: {
            errorWordIndex: 3,
            wrongWord: "a",
            correction: "the",
            reason: "Rivers always take 'the': 'We walked along the River Thames yesterday.'",
            correctionOptions: ["the", "a", "an", "some"],
        },
    },

    // ===== MULTIPLE CHOICE (7) =====

    {
        id: "art-mc-1",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence that uses the correct article for a job.",
        grammarRule: "Indefinite Article — Jobs",
        explanation: "Jobs always take a/an — 'artist' starts with a vowel sound, so it needs 'an'.",
        tip: "Jobs always need a/an, and the choice between them depends on the sound that follows.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "He's an artist.",
            options: [
                "He's an artist.",
                "He's a artist.",
                "He's artist.",
                "He's the artist.",
            ],
            optionExplanations: {
                "He's an artist.": "Correct! Jobs take a/an, and 'artist' starts with a vowel sound, so it's 'an'.",
                "He's a artist.": "Wrong. 'Artist' starts with a vowel sound /ɑː/, so it needs 'an', not 'a'.",
                "He's artist.": "Wrong. Jobs always need an article — you can't say 'he's artist' with no article.",
                "He's the artist.": "Wrong. 'The artist' means one specific, already-known artist — not a general job description.",
            },
        },
    },

    {
        id: "art-mc-2",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "beginner",
        sentence: "Choose the sentence that talks generally about a whole group of things.",
        grammarRule: "No Article — General Statements",
        explanation: "When you talk generally about people or things (as a whole category), use no article with the plural noun.",
        tip: "General statement about a whole group → plural noun, no article: Elephants are bigger than lions.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "Elephants are bigger than lions.",
            options: [
                "Elephants are bigger than lions.",
                "The elephants are bigger than lions.",
                "An elephants are bigger than lions.",
                "The elephant are bigger than the lions.",
            ],
            optionExplanations: {
                "Elephants are bigger than lions.": "Correct! A general statement about elephants and lions as categories uses no article.",
                "The elephants are bigger than lions.": "Wrong. 'The elephants' suggests specific, already-known elephants, not elephants in general.",
                "An elephants are bigger than lions.": "Wrong. 'An' can never go before a plural noun.",
                "The elephant are bigger than the lions.": "Wrong. Singular 'elephant' doesn't match plural 'are', and 'the' wrongly makes this about specific animals.",
            },
        },
    },

    {
        id: "art-mc-3",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct article for a city name.",
        grammarRule: "No Article — Cities and Countries",
        explanation: "Most cities and countries take no article: Paris, France, Japan. Live in Paris, not 'the Paris'.",
        tip: "Most towns, cities and countries → no article: I live in Paris, I visited Japan.",
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
                "I live in Paris.": "Correct! Most city names take no article at all.",
                "I live in the Paris.": "Wrong. City names don't take 'the' — say 'Paris', not 'the Paris'.",
                "I live in a Paris.": "Wrong. Paris is a specific place, not one of many, so it can't take 'a'.",
                "I live in an Paris.": "Wrong. 'An' never goes before a proper name like this, and Paris starts with a consonant sound anyway.",
            },
        },
    },

    {
        id: "art-mc-4",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct article for this country name.",
        grammarRule: "Definite Article — Country Names with Extra Words",
        explanation: "A small group of country names — those that are plural or contain extra words like 'Kingdom' or 'Republic' — take 'the': the United States, the United Kingdom, the Czech Republic.",
        tip: "Country name is plural or has extra words (United, Republic, Kingdom) → the. Otherwise → no article.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "She moved to the United States last year.",
            options: [
                "She moved to the United States last year.",
                "She moved to United States last year.",
                "She moved to a United States last year.",
                "She moved to an United States last year.",
            ],
            optionExplanations: {
                "She moved to the United States last year.": "Correct! Multi-word country names like 'the United States' take 'the'.",
                "She moved to United States last year.": "Wrong. 'United States' needs 'the' because it contains an extra word ('United').",
                "She moved to a United States last year.": "Wrong. There's only one United States, so it can't take 'a'.",
                "She moved to an United States last year.": "Wrong. 'An' doesn't fit here, and 'United' starts with a consonant sound anyway.",
            },
        },
    },

    {
        id: "art-mc-5",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct article for a sport.",
        grammarRule: "No Article — Sports",
        explanation: "Sports and games take no article: play football, play tennis, play chess.",
        tip: "Sports and games → no article: I play tennis, he plays football.",
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
                "He plays the football every weekend.": "Wrong. You don't put 'the' before a sport's name — just 'football'.",
                "He plays a football every weekend.": "Wrong. 'A football' would mean one football (the ball itself), not the sport.",
                "He plays an football every weekend.": "Wrong. 'An' never fits before a sport, and 'football' starts with a consonant sound.",
            },
        },
    },

    {
        id: "art-mc-6",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "intermediate",
        sentence: "Choose the sentence with the correct article before a superlative.",
        grammarRule: "Definite Article — Superlatives",
        explanation: "Superlative adjectives (tallest, best, most beautiful) always take 'the', because there can only be one.",
        tip: "Superlative form → always the: the tallest, the best, the most beautiful.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "This is the tallest building in the city.",
            options: [
                "This is the tallest building in the city.",
                "This is a tallest building in the city.",
                "This is tallest building in the city.",
                "This is an tallest building in the city.",
            ],
            optionExplanations: {
                "This is the tallest building in the city.": "Correct! Superlatives always take 'the'.",
                "This is a tallest building in the city.": "Wrong. You can't use 'a' with a superlative — there's only one tallest.",
                "This is tallest building in the city.": "Wrong. Superlatives always need 'the' — you can't drop the article.",
                "This is an tallest building in the city.": "Wrong. 'An' never goes with a superlative — the rule is always 'the'.",
            },
        },
    },

    {
        id: "art-mc-7",
        topic: "articles",
        type: "multiple-choice",
        difficulty: "advanced",
        sentence: "Choose the sentence with the correct article before a defining expression.",
        grammarRule: "Definite Article — Defining Expressions",
        explanation: "Defining expressions like 'the only', 'the first', 'the same' always take 'the' because they pick out one specific thing.",
        tip: "The only, the first, the last, the same → always the, never a/an or no article.",
        multipleChoice: {
            question: "Which sentence is correct?",
            correctOption: "She's the only person who remembered my birthday.",
            options: [
                "She's the only person who remembered my birthday.",
                "She's a only person who remembered my birthday.",
                "She's only person who remembered my birthday.",
                "She's an only person who remembered my birthday.",
            ],
            optionExplanations: {
                "She's the only person who remembered my birthday.": "Correct! 'The only' is a defining expression and always takes 'the'.",
                "She's a only person who remembered my birthday.": "Wrong. Defining expressions like 'the only' never take 'a'.",
                "She's only person who remembered my birthday.": "Wrong. 'The only' needs its article — you can't drop 'the' here.",
                "She's an only person who remembered my birthday.": "Wrong. Defining expressions like 'the only' never take 'an'.",
            },
        },
    },

    // ===== WORD TRANSFORM (6) =====

    {
        id: "art-wt-1",
        topic: "articles",
        type: "word-transform",
        difficulty: "beginner",
        sentence: "I bought ___ umbrella yesterday because it started raining.",
        grammarRule: "A vs An — Vowel Sounds",
        explanation: "'Umbrella' starts with a vowel sound /ʌ/, so it takes 'an', not 'a'.",
        tip: "It's the sound that follows, not the letter: an umbrella, an hour, but a university.",
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
        sentence: "This dictionary is ___ useful tool for learning new words.",
        grammarRule: "A vs An — Vowel Sounds",
        explanation: "'Useful' is spelled with a vowel but starts with a consonant sound /j/ (like 'you'), so it takes 'a', not 'an'.",
        tip: "Check the sound, not the spelling: a useful tool, a university, a European city — all consonant sounds despite the vowel letter.",
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
        sentence: "Look at ___ moon — it's completely full tonight.",
        grammarRule: "Definite Article — Unique Things",
        explanation: "There's only one moon (as seen from Earth), so it always takes 'the'.",
        tip: "Only one exists → the: the moon, the sky, the internet.",
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
        sentence: "That was ___ best meal I've had in years.",
        grammarRule: "Definite Article — Superlatives",
        explanation: "Superlatives (best, worst, most delicious) always take 'the'.",
        tip: "Superlative form of an adjective → always the.",
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
        sentence: "We're planning a trip to ___ Netherlands this summer.",
        grammarRule: "Definite Article — Country Names with Extra Words",
        explanation: "'The Netherlands' is a plural-form country name, like 'the United States' or 'the United Kingdom' — these always take 'the'.",
        tip: "Plural or multi-word country names → the: the Netherlands, the Philippines, the United Kingdom.",
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
        sentence: "She's applying for ___ job as a graphic designer.",
        grammarRule: "Indefinite Article — First Mention",
        explanation: "This is the first time the job is mentioned, and 'job' starts with a consonant sound, so it takes 'a'.",
        tip: "New singular noun, consonant sound → a. First mention, vowel sound → an.",
        wordTransform: {
            baseWord: "a/an",
            correctAnswer: "a",
        },
    },
];

export const articlesTopic = {
    id: "articles",
    name: "Articles",
    description: "Master when to use a, an, the — or no article at all. Covers indefinite and definite articles, zero article with general statements and place names, jobs, superlatives, and fixed expressions.",
    lesson: "Lesson 4B",
    rules: articlesQuestions,
};

export default articlesQuestions;
