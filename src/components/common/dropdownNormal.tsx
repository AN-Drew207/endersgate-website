import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import clsx from "clsx";

export const DropdownActions: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 font-medium bg-transparent focus:outline-none">
            <div className="flex justify-center items-center cursor-pointer">
              <img
                className={clsx("md:h-10 h-7 ")}
                // onMouseEnter={onHover}
                // onMouseLeave={onHover}
                src="./assets/packVideos/HamburgerMenu.png"
              />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute sm:top-5 top-8 right-7 z-20 md:mt-7 origin-top-right bg-white divide-y shadow-lg rounded-[6px] focus:outline-none">
            <div>{children}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
