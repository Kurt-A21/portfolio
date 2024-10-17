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
      "Dag",
      "Hola",
      "Ciao",
      "Hallo",
      "Hej",
      "Ola",
      "Salut",
      "Zdravstvuyte",
    ],
    []
  );

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1000); // Starting speed in milliseconds
  const [isFinished, setIsFinished] = useState<boolean>(false); // State to control slide-up effect

  useEffect(() => {
    if (currentWordIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
        setSpeed((prevSpeed) => prevSpeed * 0.9); // Speed increases by reducing delay
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsFinished(true); // Set finished state to trigger slide-up
      setTimeout(onFinish, 300); // Delay to allow slide-up animation to finish before calling onFinish
    }
  }, [currentWordIndex, speed, greetings, onFinish]);

  return (
    <div className={`intro-section ${isFinished ? "slide-up" : ""}`}>
      <h1>{greetings[currentWordIndex]}</h1>
    </div>
  );
};

export default IntroSection;
