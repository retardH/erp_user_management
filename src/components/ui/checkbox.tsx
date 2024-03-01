import { CheckIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/helpers';
import { useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  id?: string;
  required?: boolean;
}
function Checkbox({ labelText, id, required, ...inputProps }: Props) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex items-center">
      <div className="relative h-5 w-5 cursor-pointer overflow-hidden rounded-sm">
        <input
          type="checkbox"
          className="h-full w-full cursor-pointer appearance-none focus:outline-none"
          // checked={checked}
          // onChange={(e) => setChecked(e.target.checked)}
          {...inputProps}
        />
        <div
          className={cn(
            'pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center text-xs text-white shadow-inner',
            inputProps.checked
              ? 'border border-blue-500 bg-blue-500'
              : 'border border-gray-300 bg-gray-100',
          )}
        >
          {inputProps.checked && (
            <CheckIcon className="h-[18px] w-[18px] text-inherit" />
          )}
        </div>
      </div>
      {labelText && (
        <div className="ml-2">
          <label
            htmlFor={id || ''}
            className="cursor-pointer text-sm text-base-700"
          >
            {labelText}
          </label>
          {required && <span className="ml-1 text-sm text-red-500">*</span>}
        </div>
      )}
    </div>
  );
}

export default Checkbox;
