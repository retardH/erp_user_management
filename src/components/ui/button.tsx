import { cn } from '../../utils/helpers';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'success' | 'outline';
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}
function Button({
  variant,
  children,
  disabled = false,
  type = 'button',
  ...buttonProps
}: Props) {
  return (
    <button
      disabled={disabled}
      type={type}
      {...buttonProps}
      className={cn(
        'box-border flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-center text-sm text-white transition-all md:px-5 md:py-2',
        variant === 'primary' &&
          'border border-primary-500 bg-primary-500 hover:bg-primary-700',
        variant === 'danger' && 'bg-red-500 hover:bg-red-600',
        variant === 'success' && 'bg-green-500 hover:bg-green-700',
        variant === 'outline' &&
          'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
        buttonProps.className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
