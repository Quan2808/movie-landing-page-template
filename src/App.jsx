import useDynamicFavicon from "./hooks/useDynamicFavicon";

import HeroSection from "./components/Hero/HeroSection";
import TeamSection from "./components/Team/TeamSection";

function App() {
  useDynamicFavicon();

  return (
    <>
      <HeroSection />
      <TeamSection></TeamSection>
    </>
  );
}

export default App;
