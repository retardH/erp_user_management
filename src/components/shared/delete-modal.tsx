import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Button from '../ui/button';

interface Props {
  onOk: () => void;
  onClose: () => void;
  show: boolean;
  description: React.ReactNode | string;
}
function DeleteModal({ onOk, onClose, show, description }: Props) {
  return (
    <div>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-base-900"
                  >
                    Are you absolutely sure?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-base-500">{description}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-end gap-4">
                    <Button variant="outline" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        onOk();
                        onClose();
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default DeleteModal;
