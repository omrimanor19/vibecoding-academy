import { ArrowLeft } from 'lucide-react';
import type { Challenge } from '../data/challenges';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

interface ChallengeDetailProps {
  challenge: Challenge;
  onBack: () => void;
}

export function ChallengeDetail({ challenge, onBack }: ChallengeDetailProps) {
  if (!challenge.detail) {
    return null;
  }

  const { detail } = challenge;

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6">
      <Container narrow>
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8 inline-flex items-center gap-2 px-0 py-0 text-sky-600 hover:text-sky-700"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Challenges
        </Button>

        <header className="mb-12">
          <div className="mb-4">
            <Badge tone={challenge.level}>{challenge.levelLabel}</Badge>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {challenge.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            {challenge.time} • Beginner-friendly
          </p>
        </header>

        <div className="detail-callout detail-callout-info mb-12">
          <p className="text-slate-800">{detail.summary}</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="detail-heading">What You&apos;ll Build</h2>
            <p className="detail-copy">{detail.outcome}</p>
          </section>

          <section>
            <h2 className="detail-heading">Step-by-Step Guide</h2>
            <div className="space-y-6">
              {detail.steps.map((step) => (
                <div key={step.title} className="surface-card surface-card-muted">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mb-3 text-slate-700">{step.description}</p>
                  <p className="text-sm text-slate-600">
                    Prompt tip: &quot;{step.promptTip}&quot;
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="detail-heading">Tips & Tricks</h2>
            <ul className="space-y-3 text-slate-700">
              {detail.tips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="font-bold text-sky-600">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="detail-heading">Success Checklist</h2>
            <div className="space-y-3">
              {detail.checklist.map((item) => (
                <label key={item} className="flex cursor-pointer items-center gap-3">
                  <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-sky-600" />
                  <span className="text-slate-700">{item}</span>
                </label>
              ))}
            </div>
          </section>

          <div className="detail-callout detail-callout-success">
            <h3 className="mb-2 font-bold text-slate-900">{detail.closingTitle}</h3>
            <p className="text-slate-700">{detail.closingMessage}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
