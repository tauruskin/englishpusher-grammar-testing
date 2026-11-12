// grammar.englishpusher.in.ua -> app.englishpusher.in.ua (grammar migration stage 4, 2026-11).
// Fixed table of the topics that existed at the switch; topics created later are never linked here.
// The target is always built from this table, never from text in the incoming link.
(function (root) {
  var APP = "https://app.englishpusher.in.ua";
  var TOPIC_LEVEL = {
    "adverbs-of-frequency": "b1",
    "apologise-and-give-reasons": "b1",
    "irregular-verbs": "b1",
    "modifiers": "b1",
    "narrative-tenses": "b1",
    "past-simple-present-perfect": "b1",
    "prepositions-of-time": "b1",
    "present-simple-vs-continuous": "b1",
    "question-forms": "b1",
    "starting-ending-conversations": "b1",
    "stative-dynamic-verbs": "b1",
    "verb-patterns": "b1"
  };

  function grammarRedirectTarget(search) {
    var m = /[?&]topic=([^&#]*)/.exec(search || "");
    var id = "";
    if (m) {
      try { id = decodeURIComponent(m[1]).toLowerCase(); } catch (e) { id = ""; }
    }
    if (Object.prototype.hasOwnProperty.call(TOPIC_LEVEL, id)) {
      return APP + "/" + TOPIC_LEVEL[id] + "-grammar/?topic=" + id;
    }
    return APP + "/b1-grammar/";
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { grammarRedirectTarget: grammarRedirectTarget, TOPIC_LEVEL: TOPIC_LEVEL };
  } else {
    root.location.replace(grammarRedirectTarget(root.location.search));
  }
})(this);
