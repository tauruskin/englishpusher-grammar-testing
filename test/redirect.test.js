// Run: node --test test/
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { grammarRedirectTarget, TOPIC_LEVEL } = require("../site/redirect.js");

const APP = "https://app.englishpusher.in.ua";
const IDS = [
  "adverbs-of-frequency", "apologise-and-give-reasons", "irregular-verbs", "modifiers", "narrative-tenses",
  "past-simple-present-perfect", "prepositions-of-time", "present-simple-vs-continuous", "question-forms",
  "starting-ending-conversations", "stative-dynamic-verbs", "verb-patterns",
];

test("the table holds exactly the 12 topics of the switch, all B1", () => {
  assert.deepEqual(Object.keys(TOPIC_LEVEL).sort(), [...IDS].sort());
  assert.ok(Object.values(TOPIC_LEVEL).every((l) => l === "b1"));
});

test("each known topic forwards to its App page", () => {
  for (const id of IDS) assert.equal(grammarRedirectTarget(`?topic=${id}`), `${APP}/b1-grammar/?topic=${id}`);
});

test("topic is found among other parameters and in any letter case", () => {
  assert.equal(grammarRedirectTarget("?a=1&topic=Modifiers&b=2"), `${APP}/b1-grammar/?topic=modifiers`);
});

test("unknown, missing or hostile ids forward to the B1 grammar page, never echoing input", () => {
  for (const s of ["", "?", "?topic=", "?topic=new-topic", "?topic=__proto__", "?topic=constructor",
                   "?topic=modifiers%22%3E%3Cscript%3E", "?topic=%E0%A4%A", "?x=https://evil.example"]) {
    assert.equal(grammarRedirectTarget(s), `${APP}/b1-grammar/`, s);
  }
});

test("index.html and 404.html are the same redirect page", () => {
  const dir = path.join(__dirname, "..", "site");
  const index = fs.readFileSync(path.join(dir, "index.html"), "utf8");
  assert.equal(fs.readFileSync(path.join(dir, "404.html"), "utf8"), index);
  assert.match(index, /<script src="\/redirect\.js"><\/script>/);
  assert.equal(fs.readFileSync(path.join(dir, "CNAME"), "utf8").trim(), "grammar.englishpusher.in.ua");
});
