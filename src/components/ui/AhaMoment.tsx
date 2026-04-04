import { useState } from 'react';

interface AhaMomentProps {
  front: string;
  back: string;
}

export function AhaMoment({ front, back }: AhaMomentProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`aha-card cursor-pointer select-none${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      aria-label={flipped ? 'Click to flip back' : 'Click to reveal insight'}
    >
      {/*
        Both faces sit in the same grid cell so the wrapper naturally
        sizes to whichever face is taller. preserve-3d on the inner
        div makes the 3D flip work across both children.
      */}
      <div className="aha-card-inner" style={{ display: 'grid' }}>
        {/* Front */}
        <div
          className="aha-card-front flex flex-col rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 p-6 text-white shadow-lg"
          style={{ gridArea: '1 / 1' }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">
            Aha moment
          </p>
          <p className="text-lg font-semibold leading-snug">{front}</p>
          <p className="mt-auto pt-4 text-sm text-white/60">Tap to reveal</p>
        </div>

        {/* Back */}
        <div
          className="aha-card-back flex flex-col rounded-2xl border-2 border-violet-200 bg-violet-50 p-6 shadow-lg"
          style={{ gridArea: '1 / 1' }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-500">
            The insight
          </p>
          <p className="leading-relaxed text-slate-800">{back}</p>
          <p className="mt-auto pt-4 text-sm text-violet-400">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
}
