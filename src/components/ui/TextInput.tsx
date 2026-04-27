import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  className,
  type = 'text',
  ...props
}: TextInputProps) {
  return <input type={type} className={cn('ui-input', className)} {...props} />;
}
