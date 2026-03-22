import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
}

const variantClassNames = {
  primary: 'ui-button ui-button-primary',
  secondary: 'ui-button ui-button-secondary',
  ghost: 'ui-button ui-button-ghost',
};

const sizeClassNames = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-10 py-4 text-lg',
};

export function Button({
  children,
  className,
  fullWidth = false,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        variantClassNames[variant],
        sizeClassNames[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
