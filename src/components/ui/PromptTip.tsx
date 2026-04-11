import { useState } from 'react';

interface PromptTipProps {
  text: string;
}

export function PromptTip({ text }: PromptTipProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-4">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sky-600">
        ✍️ Prompt tip
      </p>
      <p className="text-sm leading-relaxed text-slate-700">&ldquo;{text}&rdquo;</p>
      <button
        onClick={handleCopy}
        className="mt-3 text-xs font-medium text-sky-600 hover:text-sky-800 transition-colors"
      >
        {copied ? '✓ Copied!' : 'Copy prompt'}
      </button>
    </div>
  );
}
