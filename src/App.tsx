import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ChallengeGrid } from './components/ChallengeGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ChallengeDetail } from './components/ChallengeDetail';
import { getChallengeById } from './data/challenges';
import {
  getChallengeIdFromHash,
  goHome,
  goToChallenge,
} from './lib/navigation';

function App() {
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(() =>
    getChallengeIdFromHash(window.location.hash)
  );

  useEffect(() => {
    const syncRoute = () => {
      setActiveChallengeId(getChallengeIdFromHash(window.location.hash));
      window.scrollTo(0, 0);
    };

    if (!window.location.hash) {
      goHome();
    }

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const activeChallenge = getChallengeById(activeChallengeId);

  const handleStartChallenge = (id: string) => {
    goToChallenge(id);
  };

  const handleBackToMain = () => {
    if (window.history.length > 1 && activeChallengeId) {
      window.history.back();
      return;
    }

    goHome();
  };

  const handleHeroCTA = () => {
    const challengesSection = document.getElementById('challenges');
    if (challengesSection) {
      challengesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (activeChallenge) {
    return <ChallengeDetail challenge={activeChallenge} onBack={handleBackToMain} />;
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
