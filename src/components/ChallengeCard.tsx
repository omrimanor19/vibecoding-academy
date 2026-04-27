import type { Challenge } from '../data/challenges';
import { cn } from '../lib/cn';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface ChallengeCardProps {
  challenge: Challenge;
  onStartClick: (id: string) => void;
}

export function ChallengeCard({ challenge, onStartClick }: ChallengeCardProps) {
  const hasSpotlight = challenge.available && Boolean(challenge.spotlightLabel);

  const content = (
    <>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {hasSpotlight ? <Badge tone="spotlight">{challenge.spotlightLabel}</Badge> : null}
          <Badge tone={challenge.level}>{challenge.levelLabel}</Badge>
          {!challenge.available ? <Badge tone="comingSoon">Coming soon</Badge> : null}
        </div>
        <span className="shrink-0 text-sm font-medium text-slate-500">{challenge.time}</span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-slate-900">{challenge.title}</h3>
      <p className="mb-3 text-sm text-slate-600">{challenge.description}</p>

      <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          Core Idea
        </p>
        <p className="mt-1 text-sm font-medium text-slate-800">{challenge.coreIdea}</p>
      </div>

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
      className={cn(
        'surface-card surface-card-interactive relative text-left',
        hasSpotlight && 'ring-2 ring-amber-300 ring-offset-2 ring-offset-white'
      )}
      onClick={() => onStartClick(challenge.id)}
    >
      <div className="card-highlight" aria-hidden="true" />
      {content}
    </button>
  );
}
