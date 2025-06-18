import useDynamicFavicon from "./hooks/useDynamicFavicon";

import HeroSection from "./components/Hero/HeroSection";
import TeamSection from "./components/Team/TeamSection";
import IntroSection from "./components/Intro/IntroSection";

function App() {
  useDynamicFavicon();

  return (
    <>
      <HeroSection />
      <IntroSection></IntroSection>
      <TeamSection></TeamSection>
    </>
  );
}

export default App;
