import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
  onComplete?: () => void;
  pauseAt?: number; // Character position to pause at
  pauseDuration?: number; // Duration of pause in milliseconds
}

const TypingText = ({ 
  text, 
  speed = 30, 
  className = "", 
  delay = 0, 
  onComplete,
  pauseAt,
  pauseDuration = 2000
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started || isPaused) return;

    if (currentIndex < text.length) {
      // Check if we should pause at this position
      if (pauseAt !== undefined && currentIndex === pauseAt) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, pauseDuration);
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, started, onComplete, isPaused, pauseAt, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingText;
