import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: 'beginner' | 'intermediate' | 'advanced' | 'featured';
}

const toneClassNames = {
  beginner: 'ui-badge ui-badge-beginner',
  intermediate: 'ui-badge ui-badge-intermediate',
  advanced: 'ui-badge ui-badge-advanced',
  featured: 'ui-badge ui-badge-featured',
};

export function Badge({
  children,
  className,
  tone = 'beginner',
}: BadgeProps) {
  return <span className={cn(toneClassNames[tone], className)}>{children}</span>;
}
