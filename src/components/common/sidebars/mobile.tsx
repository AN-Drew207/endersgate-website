import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { XIcon } from "@heroicons/react/outline";
import {
  AppstoreFilled,
  AreaChartOutlined,
  DownOutlined,
  FacebookFilled,
  RightOutlined,
  ShopOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

interface LayoutDashboardProps {
  title?: string;
  isLoading?: boolean;
  sidebarOpen?: boolean;
  setSidebarOpen?: any;
  initialFocus?: any;
  navItems: any[];
}
export const SidebarMobile: React.FC<LayoutDashboardProps> = ({
  // title = '',
  // isLoading = false,
  // children,
  sidebarOpen = false,
  setSidebarOpen = {},
  initialFocus = null,
  navItems,
}) => {
  // const navItems = [
  //   { name: "Shop", link: "/shop" },
  //   // { name: "Packs", link: "/packOpening" },
  //   // { name: "Patch Notes", link: "/news" },
  //   { name: "Inventory", link: "/inventory" },
  //   {
  //     name: "Audit",
  //     externalLink: "https://solidity.finance/audits/EndersgateNFT/",
  //   },
  // ];

  return (
    <>
      {/* Sidebar mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed h-screen top-0 flex z-40 md:hidden bg-[#000000]"
          open={sidebarOpen}
          onClose={setSidebarOpen}
          initialFocus={initialFocus}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-0 blur-xl bg-transparent-color-gray-200" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="bg-[#000000] relative flex-1 flex flex-col max-w-xs w-full w-64">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="w-full p-1 text-white bg-primary rounded-full"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Link to="/">
                    <a
                      className={clsx(
                        "cursor-pointer flex items-center justify-center",
                      )}
                    >
                      <img className="w-28" src={"./assets/logo2.png"} alt="" />
                    </a>
                  </Link>
                </div>
                <nav className="Links mt-5 flex-1 px-7">
                  {navItems.map((item, index) => {
                    return item.externalLink !== undefined ? (
                      <a
                        href={item.externalLink}
                        key={"navBar" + index}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center px-3 py-4 hover:opacity-90 text-base rounded-md relative"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Fragment key={"nav-mobile-" + index}>
                        <Link to={item.link} key={"nav-desktop-" + index}>
                          <p
                            className={clsx(
                              "group flex items-center px-3 py-4 hover:opacity-90 text-base rounded-md relative",
                              // {
                              //
                              // }
                            )}
                            onClick={() => setSidebarOpen(false)}
                          >
                            {item.name}
                          </p>
                        </Link>
                      </Fragment>
                    );
                  })}
                  <div className="relative">
                    <a
                      className="cursor-pointer"
                      href="https://www.egtcg.one/ "
                      target="_BLANK"
                    >
                      <img
                        src="./assets/PlayFree.png"
                        className="h-10"
                        alt="a"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <h3
                      className={clsx(
                        "py-4 text-md text-white font-light rounded-md relative",
                        // {
                        //
                        // }
                      )}
                      onClick={() => setSidebarOpen(false)}
                    >
                      Visit our links!
                    </h3>
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                      {" "}
                      <a
                        href={"https://twitter.com/EndersGate"}
                        className="flex items-center cursor-pointer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TwitterOutlined />
                      </a>
                      <a
                        href={"https://discord.com/invite/nHNkWdE99h"}
                        target="_blank"
                        className="cursor-pointer"
                        rel="noreferrer"
                      >
                        <img
                          src={"./assets/logos/discord.png"}
                          className="h-4"
                          alt=""
                        />
                      </a>
                      <a
                        href={
                          "https://endersgate.gitbook.io/endersgate/welcome/master"
                        }
                        target="_blank"
                        className="cursor-pointer"
                        rel="noreferrer"
                      >
                        <img
                          src={"./assets/logos/gitbook.png"}
                          className="h-4"
                          alt=""
                        />
                      </a>
                      <a
                        href={
                          "https://youtube.com/channel/UCicr9XOX1EWwpzX3VPbm6kg"
                        }
                        target="_blank"
                        className="flex items-center cursor-pointer"
                        rel="noreferrer"
                      >
                        <YoutubeFilled />
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};
