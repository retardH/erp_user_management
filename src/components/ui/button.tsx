import { cn } from '../../utils/helpers';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'success' | 'outline';
  children: React.ReactNode;
}
function Button({ variant = 'primary', children, ...buttonProps }: Props) {
  return (
    <button
      {...buttonProps}
      className={cn(
        'box-border flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-center text-sm text-white transition-all md:px-5 md:py-2',
        buttonProps.className,
        variant === 'primary' &&
          'border border-primary-500 bg-primary-500 hover:bg-primary-700',
        variant === 'danger' && 'bg-red-500 hover:bg-red-700',
        variant === 'success' && 'bg-green-500 hover:bg-green-700',
        variant === 'outline' &&
          'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
      )}
    >
      {children}
    </button>
  );
}

export default Button;
