// src/data/topics/index.ts
import { GrammarTopic } from "@/data/types";
import { presentSimpleVsContinuousTopic } from "./present-simple-vs-continuous";
import { irregularVerbsTopic } from "./irregular-verbs";
import { verbPatternsTopic } from "./verb-patterns";

const topics: GrammarTopic[] = [
  presentSimpleVsContinuousTopic,
  irregularVerbsTopic,
  verbPatternsTopic,
];

export default topics;
