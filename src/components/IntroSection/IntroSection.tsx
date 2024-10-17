import { useState, useEffect, useMemo } from "react";
import "./IntroSection.css";

interface IntroProps {
  onFinish: () => void;
}

const IntroSection: React.FC<IntroProps> = ({ onFinish }) => {
  const greetings: string[] = useMemo(
    () => [
      "Hello",
      "Bonjour",
      "Hola",
      "Goeiedag",
      "Molo",
      "Sawubona",
      "你好!",
      "Konnichiwa",
    ],
    []
  );

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1000);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    if (currentWordIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
        setSpeed((prevSpeed) => prevSpeed * 0.9);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
      setTimeout(onFinish, 300);
    }
  }, [currentWordIndex, speed, greetings, onFinish]);

  return (
    <div className={`intro-section ${isFinished ? "slide-up" : ""}`}>
      <h1>{greetings[currentWordIndex]}</h1>
    </div>
  );
};

export default IntroSection;
