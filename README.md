# englishpusher-grammar-testing (archived)

Grammar practice moved into the Englishpusher App in November 2026:
https://app.englishpusher.in.ua/b1-grammar/ (one page per level, `/<level>-grammar/`).

This repo now only publishes `grammar.englishpusher.in.ua` as a redirect page (`site/`): old links
`/?topic=<id>` for the 12 original B1 topics open the same topic in the App; anything else opens the B1
grammar page. Test: `node --test "test/*.test.js"`. The React app is in the git history (last commit before the switch:
6036694).
