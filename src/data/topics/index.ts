import { WordEntry } from "@/data/wordList";
import presentPerfect from "./present-perfect";

export interface Topic {
  id: string;
  name: string;
  wordList: WordEntry[];
}

const topics: Topic[] = [
  { id: "present-perfect", name: "Present Perfect Tense", wordList: presentPerfect },
];

export default topics;
