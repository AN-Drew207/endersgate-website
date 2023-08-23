import { useCallback, useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export const useModal = () => {
  const [isShow, setIsShow] = useState(false);
  const cancelButtonRef = useRef<HTMLDivElement>(null);
  const hide = () => {
    setIsShow(false);
  };

  const show = () => {
    setIsShow(true);
  };

  const Modal = useCallback(({ children, isShow, withoutX }: any) => {
    return (
      <Transition.Root show={isShow} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-y-auto bg-[#000000] blur-sm"
          style={{
            zIndex: 15000,
          }}
          initialFocus={cancelButtonRef}
          open={isShow}
          onClose={hide}
        >
          <div className="flex items-center justify-center pb-20 pt-4 min-h-screen text-center sm:block sm:p-0 bg-[#000000]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-transparent-45 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom text-left rounded-20 shadow-md transform transition-all sm:align-middle w-max sm:max-w-6xl"
                style={{
                  background: "url(./assets/Box.png)",
                  backgroundSize: "100% 100%",
                  //   maxHeight: "80vh",
                }}
              >
                <div className="bg-gray-0 w-max">
                  <div className="flex justify-end">
                    {withoutX || (
                      <button
                        type="button"
                        className="bg-gray-4 rounded-md text-white hover:text-gray-500 focus:outline-none mr-10"
                        onClick={() => hide()}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon
                          className="h-5 w-5 font-bold"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>
                  {children}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }, []);

  return { Modal, hide, isShow, show };
};
