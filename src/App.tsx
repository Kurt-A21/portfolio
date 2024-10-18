import Hero from "./components/Hero/Hero";
import IntroSection from "./components/IntroSection/IntroSection";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

const App: React.FC = () => {
  const [showHero, setShowHero] = useState<boolean>(false);

  const handleIntroFinish = (): void => {
    setShowHero(true);
  };

  return (
    <div className="app-body">
      {!showHero && <IntroSection onFinish={handleIntroFinish} />}
      {showHero && <Hero />}
      <>
        <NavBar />
      </>
    </div>
  );
};

export default App;
