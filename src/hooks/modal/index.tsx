import { useCallback, useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { CaretLeftOutlined } from "@ant-design/icons";

export const useModal = () => {
  const [isShow, setIsShow] = useState<string | boolean>(false);
  const cancelButtonRef = useRef<HTMLDivElement>(null);
  const hide = () => {
    setIsShow(false);
  };

  const show = (state?: string) => {
    setIsShow(state || true);
  };

  const Modal = useCallback(({ children, isShow, withoutX }: any) => {
    return (
      <Transition.Root show={isShow} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-y-auto bg-[rgba(39, 39, 39, 0.514)]"
          style={{ zIndex: 1000 }}
          initialFocus={cancelButtonRef}
          open={isShow}
          onClose={hide}
        >
          <div className="flex items-center justify-center pb-20 pt-4 min-h-screen text-center sm:block sm:p-0">
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
              <div className="inline-block align-bottom text-left rounded-20 transform transition-all sm:align-middle sm:my-8 w-max sm:max-w-6xl">
                <div className="flex">
                  {withoutX || (
                    <button
                      type="button"
                      className="flex justify-center items-center font-bold rounded-sm px-2 py-1 bg-dark focus:outline-none mr-4"
                      style={{ color: "#FFDB8A", border: "2px solid #FFDB8A" }}
                      onClick={() => hide()}
                    >
                      <span className="sr-only">Close</span>
                      <CaretLeftOutlined /> BACK
                    </button>
                  )}
                </div>
                <div className="pt-6">{children}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }, []);

  return { Modal, hide, isShow, show };
};
