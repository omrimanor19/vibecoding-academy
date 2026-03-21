import { useState } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ChallengeGrid } from './components/ChallengeGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ChallengeDetail } from './components/ChallengeDetail';

function App() {
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);

  const handleStartChallenge = (id: string) => {
    setActiveChallengeId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToMain = () => {
    setActiveChallengeId(null);
    window.scrollTo(0, 0);
  };

  const handleHeroCTA = () => {
    const challengesSection = document.getElementById('challenges');
    if (challengesSection) {
      challengesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (activeChallengeId) {
    return <ChallengeDetail onBack={handleBackToMain} />;
  }

  return (
    <div className="bg-white">
      <Hero onCTAClick={handleHeroCTA} />
      <HowItWorks />
      <ChallengeGrid onStartChallenge={handleStartChallenge} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
