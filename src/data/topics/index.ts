// src/data/topics/index.ts
import { GrammarTopic } from "@/data/types";
import { presentSimpleVsContinuousTopic } from "./present-simple-vs-continuous";
import { irregularVerbsTopic } from "./irregular-verbs";
import { verbPatternsTopic } from "./verb-patterns";
import { narrativeTensesTopic } from "./narrative-tenses";
import { modifiersTopic } from "./modifiers";
import { pastSimplePresentPerfectTopic } from "./past-simple-present-perfect";

const topics: GrammarTopic[] = [
  presentSimpleVsContinuousTopic,
  irregularVerbsTopic,
  verbPatternsTopic,
  narrativeTensesTopic,
  modifiersTopic,
  pastSimplePresentPerfectTopic,
];

export default topics;
