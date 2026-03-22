import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow = false }: ContainerProps) {
  return (
    <div className={cn(narrow ? 'app-container app-container-narrow' : 'app-container', className)}>
      {children}
    </div>
  );
}
