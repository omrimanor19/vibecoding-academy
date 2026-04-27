import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: 'beginner' | 'intermediate' | 'advanced' | 'comingSoon' | 'spotlight';
}

const toneClassNames = {
  beginner: 'ui-badge ui-badge-beginner',
  intermediate: 'ui-badge ui-badge-intermediate',
  advanced: 'ui-badge ui-badge-advanced',
  comingSoon: 'ui-badge ui-badge-coming-soon',
  spotlight: 'ui-badge ui-badge-spotlight',
};

export function Badge({
  children,
  className,
  tone = 'beginner',
}: BadgeProps) {
  return <span className={cn(toneClassNames[tone], className)}>{children}</span>;
}
