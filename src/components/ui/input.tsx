import React from 'react';
import { cn } from '../../utils/helpers';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  error?: string;
  id?: string;
}
function Input({ label, id, ...inputProps }: Props) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm text-base-700">
          {label}
          {inputProps.required && (
            <span className="mb-1 text-sm text-red-500">*</span>
          )}
        </label>
      )}
      <input
        {...inputProps}
        className={cn(
          'mt-1 w-full rounded-md border border-base-400/50 bg-transparent px-2 py-2 text-sm text-base-600 placeholder:text-base-500 focus:border-base-500 focus:outline-none',
          inputProps.className,
        )}
        id={id}
      />
    </>
  );
}

export default Input;
