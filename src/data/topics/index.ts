import { GrammarTopic } from "@/data/types";
import { presentPerfectTopic } from "./present-perfect";
import { presentSimpleVsContinuousTopic } from "./present-simple-vs-continuous";

export type { GrammarTopic };

const topics: GrammarTopic[] = [
  presentPerfectTopic,
  presentSimpleVsContinuousTopic,
];

export default topics;
