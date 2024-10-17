import Hero from "./components/Hero/Hero";
import IntroSection from "./components/IntroSection/IntroSection";
import { useState } from "react";

const App: React.FC = () => {
  const [showHero, setShowHero] = useState<boolean>(false);

  const handleIntroFinish = (): void => {
    setShowHero(true);
  };

  return (
    <div>
      {!showHero && <IntroSection onFinish={handleIntroFinish} />}
      {showHero && <Hero />}
    </div>
  );
};

export default App;
