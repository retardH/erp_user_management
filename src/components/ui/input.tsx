import React from 'react';
import { cn } from '../../utils/helpers';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  error?: string;
  id?: string;
}
function Input({ label, id, leftIcon, ...inputProps }: Props) {
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
      <div className="relative w-full overflow-hidden">
        {leftIcon && (
          <div className="absolute inset-y-0 left-1 inline-flex items-center justify-center pl-2 pt-[2px] text-base-600">
            {leftIcon}
          </div>
        )}
        <input
          type={inputProps.type || 'text'}
          {...inputProps}
          className={cn(
            'mt-1 w-full rounded-md border border-base-400/50 bg-transparent px-2 py-2 text-sm text-base-800 placeholder:text-base-600 focus:border-base-500 focus:outline-none',
            leftIcon && 'pl-8',
            inputProps.className,
          )}
          id={id}
        />
      </div>
    </>
  );
}

export default Input;
