import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { TextInput } from './ui/TextInput';

interface Submission {
  id: string;
  name: string;
  url: string;
  likes: number;
  likedByMe: boolean;
}

function storageKey(challengeId: string) {
  return `show-and-tell-${challengeId}`;
}

function load(challengeId: string): Submission[] {
  try {
    return JSON.parse(localStorage.getItem(storageKey(challengeId)) ?? '[]');
  } catch {
    return [];
  }
}

function save(challengeId: string, submissions: Submission[]) {
  localStorage.setItem(storageKey(challengeId), JSON.stringify(submissions));
}

interface ShowAndTellProps {
  challengeId: string;
}

export function ShowAndTell({ challengeId }: ShowAndTellProps) {
  const [submissions, setSubmissions] = useState<Submission[]>(() => load(challengeId));
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    save(challengeId, submissions);
  }, [challengeId, submissions]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedUrl = url.trim();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Add your name so people know whose project this is.');
      return;
    }
    if (!trimmedUrl) {
      setError('Paste your project URL to share it.');
      return;
    }
    if (!/^https?:\/\/.+/.test(trimmedUrl)) {
      setError('URL should start with https://');
      return;
    }

    setSubmissions((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: trimmedName,
        url: trimmedUrl,
        likes: 0,
        likedByMe: false,
      },
    ]);
    setName('');
    setUrl('');
    setError('');
  }

  function handleLike(id: string) {
    setSubmissions((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, likes: s.likedByMe ? s.likes - 1 : s.likes + 1, likedByMe: !s.likedByMe }
          : s
      )
    );
  }

  return (
    <section>
      <h2 className="detail-heading">Show &amp; Tell</h2>
      <p className="detail-copy mb-6">
        Built something? Share your link here and check out what others made.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <TextInput
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shrink-0 sm:w-40"
          />
          <TextInput
            placeholder="https://your-project.vercel.app"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button type="submit" className="shrink-0">
            Share it
          </Button>
        </div>
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </form>

      {submissions.length === 0 ? (
        <p className="text-sm text-slate-400">No projects shared yet. Be the first.</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {submissions.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">{s.name}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate text-xs text-sky-600 hover:underline block"
                >
                  {s.url}
                </a>
              </div>
              <button
                onClick={() => handleLike(s.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  s.likedByMe
                    ? 'bg-pink-100 text-pink-600'
                    : 'bg-slate-100 text-slate-500 hover:bg-pink-50 hover:text-pink-500'
                }`}
              >
                <span>{s.likedByMe ? '♥' : '♡'}</span>
                <span>{s.likes}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
