interface TermChipProps {
  term: string;
  definition: string;
}

export function TermChip({ term, definition }: TermChipProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
      <span>💡</span>
      <span className="text-slate-400">What is</span>
      <span className="font-semibold text-slate-700">{term}?</span>
      <span className="text-slate-300">—</span>
      {definition}
    </span>
  );
}
