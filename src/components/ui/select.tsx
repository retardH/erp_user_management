import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/helpers';

interface Props {
  label?: string;
  data: { name: string; value?: any }[];
  required?: boolean;
  error?: string;
  className?: string;
}
function Select({ label, data, required }: Props) {
  const [selectedValue, setSelectedValue] = useState<any>(data[0]);
  return (
    <>
      {label && (
        <label className="text-sm text-base-700">
          {label}
          {required && <span className="text-sm text-red-500">*</span>}
        </label>
      )}
      <div className="w-full">
        <Listbox value={selectedValue} onChange={setSelectedValue}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-base-400/50 px-2 py-2 text-left text-sm">
              <span className="text-base-600">{selectedValue.name}</span>
              <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-2">
                <ChevronUpDownIcon className="h-[18px] w-[18px] text-base-600" />
              </div>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      cn(
                        'relative cursor-pointer select-none px-4 py-2',
                        active
                          ? 'bg-base-100 text-primary-500'
                          : 'text-base-500',
                      )
                    }
                    value={person}
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
                          {person.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
}

export default Select;
