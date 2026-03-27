// src/data/topics/index.ts
import { GrammarTopic } from "@/data/types";
import { presentSimpleVsContinuousTopic } from "./present-simple-vs-continuous";
import { irregularVerbsTopic } from "./irregular-verbs";

const topics: GrammarTopic[] = [
  presentSimpleVsContinuousTopic,
  irregularVerbsTopic,
];

export default topics;
