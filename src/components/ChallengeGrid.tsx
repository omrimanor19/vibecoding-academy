import { challengeLevels, challenges } from '../data/challenges';
import { cn } from '../lib/cn';
import { ChallengeCard } from './ChallengeCard';
import { Container } from './ui/Container';

interface ChallengeGridProps {
  onStartChallenge: (id: string) => void;
}

export function ChallengeGrid({ onStartChallenge }: ChallengeGridProps) {
  return (
    <section id="challenges" className="app-section bg-gradient-to-b from-white to-slate-50">
      <Container>
        <h2 className="section-title text-center">Pick Your Challenge</h2>

        {challengeLevels.map((level) => {
          const levelChallenges = challenges.filter((challenge) => challenge.level === level.key);

          return (
            <div key={level.key} className="mb-16">
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full font-bold text-white',
                    level.accentClassName
                  )}
                >
                  {level.stepNumber}
                </span>
                {level.heading}
              </h3>

              {level.description && (
                <p className="mb-6 -mt-2 text-slate-500">{level.description}</p>
              )}

              <div className="grid gap-6 md:grid-cols-3">
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
        })}
      </Container>
    </section>
  );
}
