import { useEffect, useState } from "react";

export type CharacterPose = "idle" | "happy" | "sad" | "celebrate" | "thinking";

interface GameCharacterProps {
  pose: CharacterPose;
  className?: string;
}

const GameCharacter = ({ pose, className = "" }: GameCharacterProps) => {
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    if (pose === "happy") setAnimClass("animate-character-jump");
    else if (pose === "sad") setAnimClass("animate-character-droop");
    else if (pose === "celebrate") setAnimClass("animate-character-celebrate");
    else if (pose === "thinking") setAnimClass("animate-character-think");
    else setAnimClass("animate-character-idle");
  }, [pose]);

  // Colors from the warm orange theme
  const skin = "#F5C6A0";
  const skinDark = "#E8A87C";
  const hair = "#5C3D2E";
  const shirt = "hsl(30, 95%, 55%)"; // primary
  const shirtDark = "hsl(30, 80%, 48%)"; // accent
  const pants = "#4A6741";
  const eyes = "#2D2D2D";
  const cheeks = "#F09898";
  const white = "#FFFFFF";

  const faceExpression = () => {
    switch (pose) {
      case "happy":
      case "celebrate":
        return (
          <>
            {/* Happy eyes - curved */}
            <path d="M38 52 Q40 49 42 52" stroke={eyes} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M52 52 Q54 49 56 52" stroke={eyes} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Big smile */}
            <path d="M39 60 Q47 70 55 60" stroke={eyes} strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="36" cy="58" r="3.5" fill={cheeks} opacity="0.5" />
            <circle cx="58" cy="58" r="3.5" fill={cheeks} opacity="0.5" />
          </>
        );
      case "sad":
        return (
          <>
            {/* Sad eyes */}
            <circle cx="40" cy="51" r="2.5" fill={eyes} />
            <circle cx="54" cy="51" r="2.5" fill={eyes} />
            {/* Eyebrows tilted up */}
            <path d="M36 47 Q40 45 43 47" stroke={hair} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M51 47 Q54 45 58 47" stroke={hair} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Frown */}
            <path d="M41 63 Q47 58 53 63" stroke={eyes} strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        );
      case "thinking":
        return (
          <>
            {/* One eye open, one squinting */}
            <circle cx="40" cy="51" r="2.5" fill={eyes} />
            <path d="M51 51 Q54 49 57 51" stroke={eyes} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Wavy mouth */}
            <path d="M42 62 Q45 60 47 62 Q49 64 52 62" stroke={eyes} strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Question mark */}
            <text x="66" y="40" fontSize="14" fill="hsl(30, 95%, 55%)" fontWeight="bold" fontFamily="sans-serif">?</text>
          </>
        );
      default: // idle
        return (
          <>
            {/* Normal eyes */}
            <circle cx="40" cy="51" r="2.5" fill={eyes} />
            <circle cx="54" cy="51" r="2.5" fill={eyes} />
            {/* Small smile */}
            <path d="M42 60 Q47 64 52 60" stroke={eyes} strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        );
    }
  };

  const arms = () => {
    switch (pose) {
      case "happy":
        return (
          <>
            {/* Right arm - thumbs up */}
            <path d="M60 82 L72 68" stroke={skin} strokeWidth="6" strokeLinecap="round" />
            {/* Thumb */}
            <circle cx="72" cy="65" r="4" fill={skin} />
            <path d="M72 65 L72 58" stroke={skin} strokeWidth="4" strokeLinecap="round" />
            {/* Left arm - relaxed */}
            <path d="M34 82 L22 90" stroke={skin} strokeWidth="6" strokeLinecap="round" />
          </>
        );
      case "celebrate":
        return (
          <>
            {/* Both arms up! */}
            <path d="M60 82 L74 62" stroke={skin} strokeWidth="6" strokeLinecap="round" />
            <path d="M34 82 L20 62" stroke={skin} strokeWidth="6" strokeLinecap="round" />
            {/* Hands */}
            <circle cx="74" cy="59" r="4.5" fill={skin} />
            <circle cx="20" cy="59" r="4.5" fill={skin} />
            {/* Stars */}
            <text x="76" y="54" fontSize="10" fill="hsl(30, 95%, 55%)">✦</text>
            <text x="10" y="54" fontSize="10" fill="hsl(30, 95%, 55%)">✦</text>
            <text x="6" y="44" fontSize="7" fill="hsl(30, 80%, 48%)">✦</text>
            <text x="80" y="46" fontSize="7" fill="hsl(30, 80%, 48%)">✦</text>
          </>
        );
      case "sad":
        return (
          <>
            {/* Arms drooping */}
            <path d="M60 82 L68 98" stroke={skin} strokeWidth="6" strokeLinecap="round" />
            <path d="M34 82 L26 98" stroke={skin} strokeWidth="6" strokeLinecap="round" />
          </>
        );
      case "thinking":
        return (
          <>
            {/* Right arm to chin */}
            <path d="M60 82 L62 72 L56 64" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="56" cy="62" r="3.5" fill={skin} />
            {/* Left arm on hip */}
            <path d="M34 82 L24 86 L28 96" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
          </>
        );
      default:
        return (
          <>
            {/* Relaxed arms */}
            <path d="M60 82 L70 95" stroke={skin} strokeWidth="6" strokeLinecap="round" />
            <path d="M34 82 L24 95" stroke={skin} strokeWidth="6" strokeLinecap="round" />
          </>
        );
    }
  };

  return (
    <div className={`hidden md:flex items-center justify-center ${className} ${animClass}`}>
      <svg viewBox="0 0 94 140" width="120" height="180" xmlns="http://www.w3.org/2000/svg">
        {/* Hair back */}
        <ellipse cx="47" cy="38" rx="22" ry="24" fill={hair} />

        {/* Face */}
        <ellipse cx="47" cy="52" rx="18" ry="17" fill={skin} />

        {/* Hair front / bangs */}
        <path d="M29 42 Q32 28 47 26 Q62 28 65 42 L62 38 Q58 30 47 29 Q36 30 32 38 Z" fill={hair} />

        {/* Ears */}
        <ellipse cx="29" cy="52" rx="4" ry="5" fill={skinDark} />
        <ellipse cx="65" cy="52" rx="4" ry="5" fill={skinDark} />

        {/* Face expression */}
        {faceExpression()}

        {/* Neck */}
        <rect x="43" y="68" width="8" height="8" rx="2" fill={skinDark} />

        {/* Body / shirt */}
        <path d="M30 76 Q30 72 38 72 L56 72 Q64 72 64 76 L66 105 Q66 108 60 108 L34 108 Q28 108 28 105 Z" fill={shirt} />
        {/* Collar */}
        <path d="M40 72 L47 80 L54 72" stroke={shirtDark} strokeWidth="2" fill="none" />
        {/* Shirt detail */}
        <line x1="47" y1="80" x2="47" y2="105" stroke={shirtDark} strokeWidth="1" opacity="0.3" />

        {/* Arms */}
        {arms()}

        {/* Legs */}
        <rect x="36" y="108" width="10" height="22" rx="4" fill={pants} />
        <rect x="48" y="108" width="10" height="22" rx="4" fill={pants} />

        {/* Shoes */}
        <ellipse cx="41" cy="132" rx="8" ry="4" fill={hair} />
        <ellipse cx="53" cy="132" rx="8" ry="4" fill={hair} />
        {/* Shoe detail */}
        <path d="M35 131 Q41 128 47 131" stroke={white} strokeWidth="1" opacity="0.3" fill="none" />
        <path d="M47 131 Q53 128 59 131" stroke={white} strokeWidth="1" opacity="0.3" fill="none" />
      </svg>
    </div>
  );
};

export default GameCharacter;
