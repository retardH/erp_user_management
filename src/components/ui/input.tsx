import React from 'react';
import { cn } from '../../utils/helpers';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}
function Input({ icon, ...inputProps }: Props) {
  return (
    <div className="group flex items-center gap-1 rounded-md bg-base-100 px-4 py-2 transition-all focus:bg-base-300">
      {!!icon && icon}
      <input
        {...inputProps}
        className={cn(
          'bg-transparent focus:outline-none focus:ring-0',
          inputProps.className,
        )}
      />
    </div>
  );
}

export default Input;
