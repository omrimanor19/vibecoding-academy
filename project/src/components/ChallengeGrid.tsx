import { challenges } from '../data/challenges';
import { ChallengeCard } from './ChallengeCard';

interface ChallengeGridProps {
  onStartChallenge: (id: string) => void;
}

export function ChallengeGrid({ onStartChallenge }: ChallengeGridProps) {
  const beginnerChallenges = challenges.filter((c) => c.level === 'beginner');
  const intermediateChallenges = challenges.filter((c) => c.level === 'intermediate');
  const advancedChallenges = challenges.filter((c) => c.level === 'advanced');

  const renderLevel = (title: string, levelChallenges: typeof challenges) => (
    <div key={title} className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
          title.includes('Quick Win') ? 'bg-green-500' :
          title.includes('Real Project') ? 'bg-blue-500' :
          'bg-purple-500'
        }`}>
          {title.includes('Quick Win') ? '1' : title.includes('Real Project') ? '2' : '3'}
        </span>
        {title}
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {levelChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            onStartClick={onStartChallenge}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="challenges" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Pick Your Challenge
        </h2>

        {renderLevel('Level 1: Quick Wins 🔥', beginnerChallenges)}
        {renderLevel('Level 2: Real Projects 💡', intermediateChallenges)}
        {renderLevel('Level 3: Serious Builds 🚀', advancedChallenges)}
      </div>
    </section>
  );
}
