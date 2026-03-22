import type { Challenge } from '../data/challenges';
import { cn } from '../lib/cn';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface ChallengeCardProps {
  challenge: Challenge;
  onStartClick: (id: string) => void;
}

export function ChallengeCard({ challenge, onStartClick }: ChallengeCardProps) {
  const content = (
    <>
      {challenge.featured && challenge.available ? (
        <Badge tone="featured" className="absolute -right-2 -top-2 shadow-lg">
          Featured
        </Badge>
      ) : null}

      <div className="mb-3 flex items-start justify-between gap-3">
        <Badge tone={challenge.level}>{challenge.levelLabel}</Badge>
        <span className="text-sm font-medium text-slate-500">{challenge.time}</span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-slate-900">{challenge.title}</h3>
      <p className="mb-6 text-sm text-slate-600">{challenge.description}</p>

      <Button
        fullWidth
        tabIndex={-1}
        variant={challenge.available ? 'primary' : 'secondary'}
        disabled={!challenge.available}
        className={cn(!challenge.available && 'pointer-events-none')}
      >
        {challenge.available ? 'Start Challenge' : 'Coming Soon'}
      </Button>
    </>
  );

  if (!challenge.available) {
    return (
      <article className="surface-card relative border border-slate-200 bg-slate-50 opacity-70">
        {content}
      </article>
    );
  }

  return (
    <button
      type="button"
      className="surface-card surface-card-interactive relative text-left"
      onClick={() => onStartClick(challenge.id)}
    >
      <div className="card-highlight" aria-hidden="true" />
      {content}
    </button>
  );
}
