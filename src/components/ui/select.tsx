import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/helpers';

interface Props {
  label?: string;
  options: Record<string, any>[];
  required?: boolean;
  error?: string;
  className?: string;
  value?: number;
  defaultValue?: string | number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

function Select({
  label,
  options,
  required,
  value,
  onChange,
  defaultValue,
  disabled = false,
}: Props) {
  const getSelectedValueName = (id?: number) => {
    const selectedOption = options?.find((option) => option.id === id);
    if (selectedOption) return selectedOption.name;
  };
  return (
    <>
      {label && (
        <label className="text-sm text-base-700">
          {label}
          {required && <span className="text-sm text-red-500">*</span>}
        </label>
      )}
      <div className="w-full">
        <Listbox
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative min-h-[38px] w-full cursor-pointer rounded-md border border-base-400/50 px-2 py-2 text-left text-sm">
              <span className="text-base-700">
                {(options && getSelectedValueName(value)) ||
                  'Select one of the options...'}
              </span>
              <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-2">
                <ChevronUpDownIcon className="h-[18px] w-[18px] text-base-800" />
              </div>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute bottom-full z-10 mb-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options && options.length > 0 ? (
                  options.map((option, optionIdx) => (
                    <Listbox.Option
                      key={optionIdx}
                      className={({ active }) =>
                        cn(
                          'relative cursor-pointer select-none px-4 py-2',
                          active
                            ? 'bg-base-100 text-primary-500'
                            : 'text-base-500',
                        )
                      }
                      value={option.id}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={cn(
                              'block truncate',
                              selected
                                ? 'font-medium text-primary-500'
                                : 'font-normal',
                            )}
                          >
                            {option.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))
                ) : (
                  <div className="pointer-events-none relative select-none px-4 py-2 text-base-600">
                    <span className="block truncate">
                      There are no roles, please create a new one first.
                    </span>
                  </div>
                )}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
}

export default Select;
