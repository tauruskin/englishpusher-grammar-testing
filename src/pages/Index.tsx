import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import topics, { GrammarTopic } from "@/data/topics";
import ProgressBar from "@/components/ProgressBar";
import ScoreBadge from "@/components/ScoreBadge";
import GrammarQuestionCard from "@/components/GrammarQuestionCard";
import EndScreen from "@/components/EndScreen";
import MenuVertical from "@/components/ui/menu-vertical";
import { useGrammarGame } from "@/hooks/useGrammarGame";
import { useTTS } from "@/hooks/useTTS";

const Index = () => {
  const getInitialState = () => {
    const params = new URLSearchParams(window.location.search);
    const topicId = params.get("topic");
    const found = topics.find((t) => t.id === topicId);
    return { topic: found ?? topics[0], showLanding: !found };
  };

  const initial = getInitialState();
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic>(initial.topic);
  const [showLanding, setShowLanding] = useState(initial.showLanding);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const game = useGrammarGame(selectedTopic.rules, selectedTopic.id);
  const tts = useTTS();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelectTopic = (topic: GrammarTopic) => {
    setSelectedTopic(topic);
    setDropdownOpen(false);
    setShowLanding(false);
    window.history.pushState({}, "", `?topic=${topic.id}`);
  };

  const handleGoToLanding = () => {
    setShowLanding(true);
    setDropdownOpen(false);
    window.history.pushState({}, "", window.location.pathname);
  };

  const handlePlayAgain = () => {
    game.restart();
  };

  const renderQuestion = () => {
    if (!game.displayedQuestion) return null;

    return (
      <GrammarQuestionCard
        key={game.viewIndex}
        question={game.displayedQuestion}
        answered={game.displayedAnswered}
        selectedAnswer={game.displayedSelectedAnswer}
        isCorrect={game.displayedIsCorrect}
        streak={game.isReviewing ? 0 : game.streak}
        transitioning={game.isReviewing ? false : game.transitioning}
        isReview={game.isReviewing}
        onSubmit={game.submitAnswer}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border px-6 py-4 bg-card shadow-sm">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://www.englishpusher.in.ua/" target="_blank" rel="noopener noreferrer">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Englishpusher Logo"
                className="h-10 w-auto"
              />
            </a>
            <div className="relative" ref={dropdownRef}>
              <h1
                className="font-display text-lg font-bold text-foreground tracking-tight cursor-pointer flex items-center gap-1"
                onClick={showLanding ? () => setDropdownOpen((o) => !o) : handleGoToLanding}
                title={showLanding ? undefined : "Back to topic menu"}
              >
                Englishpusher<span className="text-primary"> Grammar Testing</span>
                {showLanding && <span className="text-xs text-muted-foreground ml-1">▼</span>}
              </h1>
              {!showLanding && (
                <p className="text-xs text-muted-foreground">{selectedTopic.name}</p>
              )}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[200px]">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => handleSelectTopic(topic)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted ${
                        topic.id === selectedTopic.id
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-foreground"
                      }`}
                    >
                      {topic.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
            <div className="flex items-center gap-3">
              <button
                onClick={tts.toggleMute}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-lg"
                aria-label={tts.muted ? "Unmute pronunciation" : "Mute pronunciation"}
                title={tts.muted ? "Unmute" : "Mute"}
              >
                {tts.muted ? "🔇" : "🔊"}
              </button>
              {!game.gameOver && (
                <button
                  onClick={handlePlayAgain}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-lg"
                  aria-label="Restart game"
                  title="Restart"
                >
                  🔄
                </button>
              )}
              {!game.gameOver && (
                <>
                  {game.streak >= 3 && (
                    <span className="text-sm font-display font-bold text-primary animate-pulse">
                      🔥 {game.streak}
                    </span>
                  )}
                  <ScoreBadge score={game.score} total={game.currentIndex + (game.answered ? 1 : 0)} />
                </>
              )}
            </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-10">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-2xl"
          >
            <MenuVertical
              title="Choose a Topic"
              subtitle="Pick a grammar topic to start practising"
              items={topics.map((t) => ({
                label: t.name,
                description: `${t.rules.length} questions`,
                onClick: () => handleSelectTopic(t),
              }))}
            />
          </motion.div>
        ) : (
        <div key={selectedTopic.id} className="w-full max-w-2xl space-y-8">
          {game.gameOver ? (
            <EndScreen
              score={game.score}
              total={game.totalQuestions}
              results={game.results}
              onRestart={handlePlayAgain}
            />
          ) : (
            <>
              <ProgressBar current={game.currentIndex} total={game.totalQuestions} />
              {game.totalQuestions === 0 ? (
                <div className="text-center text-muted-foreground">Loading...</div>
              ) : (
                <>
                  {renderQuestion()}
                  {/* Navigation buttons */}
                  {(game.canGoPrev || game.canGoNext) && (
                    <div className="flex justify-between items-center px-1">
                      <button
                        onClick={game.goPrev}
                        disabled={!game.canGoPrev}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-display text-sm font-semibold transition-all duration-200 border-2 ${
                          game.canGoPrev
                            ? "border-border bg-card text-foreground hover:border-primary hover:text-primary hover:scale-[1.02] active:scale-[0.98]"
                            : "border-transparent bg-transparent text-transparent cursor-default"
                        }`}
                      >
                        ← Back
                      </button>
                      <button
                        onClick={game.goNext}
                        disabled={!game.canGoNext}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-display text-sm font-semibold transition-all duration-200 border-2 ${
                          game.canGoNext
                            ? "border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98]"
                            : "border-transparent bg-transparent text-transparent cursor-default"
                        }`}
                      >
                        {game.isReviewing ? "Next →" : "Skip →"}
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
        )}
      </main>

      <footer className="border-t border-border px-6 py-4 bg-card">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>Copyright © 2026 — Developed by Tetiana Pushkar</p>
          <a
            href="https://www.englishpusher.in.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Visit Englishpusher.in.ua →
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
