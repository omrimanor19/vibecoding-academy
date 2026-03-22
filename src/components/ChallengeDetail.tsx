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

        {/* THE BRIEF */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge tone={challenge.level}>{challenge.levelLabel}</Badge>
            <span className="text-sm text-slate-500">{challenge.time}</span>
            <span className="text-sm text-slate-400">|</span>
            <span className="text-sm text-slate-500">Tool: {detail.tool}</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {challenge.title}
          </h1>

          <div className="detail-callout detail-callout-info mt-6">
            <p className="text-slate-800">{detail.summary}</p>
          </div>
        </header>

        <div className="space-y-14">
          {/* THE RECIPE */}
          <section>
            <h2 className="detail-heading">The Recipe</h2>
            <p className="detail-copy mb-6 text-sm text-slate-500">
              Follow each step in order. Copy the prompt, fill in your own details, and paste it into Lovable.
            </p>

            {/* Step progress bar */}
            <div className="mb-8 flex gap-2">
              {detail.recipe.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-full bg-sky-200"
                />
              ))}
            </div>

            <div className="space-y-6">
              {detail.recipe.map((step, i) => (
                <div key={step.title} className="surface-card-muted">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                      Step {i + 1} of {detail.recipe.length}
                    </span>
                  </div>

                  <h3 className="mb-4 text-lg font-bold text-slate-900">{step.title}</h3>

                  {/* Prompt block */}
                  <div className="mb-4 rounded-xl bg-slate-900 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Your prompt
                    </p>
                    <p className="font-mono text-sm leading-relaxed text-emerald-300">{step.prompt}</p>
                  </div>

                  {/* Tip */}
                  <div className="flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <span className="text-base">💡</span>
                    <p className="text-sm leading-relaxed text-amber-800">{step.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* THE STRETCH */}
          <section>
            <h2 className="detail-heading">The Stretch</h2>
            <p className="detail-copy mb-4 text-sm text-slate-500">
              Finished early? Try one of these optional add-ons.
            </p>
            <ul className="space-y-3">
              {detail.stretch.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 text-sky-500">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FREESTYLE */}
          <section>
            <div className="detail-callout detail-callout-info">
              <h2 className="mb-2 text-xl font-bold text-slate-900">Freestyle</h2>
              <p className="text-slate-700">{detail.freestyle}</p>
            </div>
          </section>

          {/* SHOW & TELL */}
          <section>
            <div className="detail-callout detail-callout-success">
              <h2 className="mb-2 text-xl font-bold text-slate-900">Show &amp; Tell</h2>
              <p className="text-slate-700">{detail.showAndTell}</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
