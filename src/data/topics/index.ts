// src/data/topics/index.ts
import { GrammarTopic } from "@/data/types";
import { presentSimpleVsContinuousTopic } from "./present-simple-vs-continuous";
import { irregularVerbsTopic } from "./irregular-verbs";
import { verbPatternsTopic } from "./verb-patterns";
import { narrativeTensesTopic } from "./narrative-tenses";
import { modifiersTopic } from "./modifiers";
import { pastSimplePresentPerfectTopic } from "./past-simple-present-perfect";
import { apologiseAndGiveReasonsTopic } from "./apologise-and-give-reasons";
import { prepositionsOfTimeTopic } from "./prepositions-of-time";
import { questionFormsTopic } from "./question-forms";

const topics: GrammarTopic[] = [
  presentSimpleVsContinuousTopic,
  irregularVerbsTopic,
  verbPatternsTopic,
  narrativeTensesTopic,
  modifiersTopic,
  pastSimplePresentPerfectTopic,
  apologiseAndGiveReasonsTopic,
  prepositionsOfTimeTopic,
  questionFormsTopic,
];

export default topics;
