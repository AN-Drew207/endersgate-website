import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import styled from "styled-components";
import clsx from "clsx";

export const QDropdownMobile: React.FC<any> = ({ content, openTrigger }) => {
  const [hovering, setHovering] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(openTrigger);
  }, [openTrigger]);

  const onHover = () => {
    setHovering(!hovering);
  };
  return (
    <div className="w-full h-full flex">
      <div className={clsx("relative h-full flex items-center w-full")}>
        <div>
          <div
            className={clsx(
              "inline-flex justify-center w-full px-4 py-2 font-medium bg-transparent focus:outline-none"
            )}
          >
            <ButtonUp
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              className={clsx("z-20")}
              onClick={() => setOpen((prev) => !prev)}
              src={
                hovering || open
                  ? "./assets/Button_glow.png"
                  : "./assets/Button.png"
              }
            />
          </div>
        </div>

        <ContainerImageDown
          className={clsx(
            "absolute left-0 right-0 m-auto z-10 h-full py-2 bg-transparent  pl-10 pr-4"
          )}
        >
          <ContainerImage
            className={clsx(
              { [`notOpenMobile`]: !open },
              { [`openMobile`]: open },
              "relative flex flex-col h-full justify-center items-center overflow-auto shadow-lg px-2 py-1"
            )}
            style={{
              backgroundImage: "url(./assets/horizontalBox.png)",
              backgroundSize: "100% 100%",
              // backgroundRepeat: false,
            }}
          >
            {/* <img
              src="./assets/horizontalBox.png"
              alt="a"
              className="absolute w-full h-full"
            /> */}
            <div className="border-y-4 h-full border-transparent overflow-auto">
              <div className="flex flex-col h-full w-full">
                {content?.map((pieceContent: any, index: any) => {
                  return (
                    <>
                      <h2
                        className={clsx(
                          "text-white z-20 titleRoadmap pl-6 pt-2 pb-2 pr-4 text-center w-full lowercase"
                        )}
                      >
                        {pieceContent.title}
                      </h2>
                      <p className="text-white descriptionRoadmap z-20 pl-6 pr-4 text-center w-full lowercase">
                        {pieceContent.description}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </ContainerImage>
        </ContainerImageDown>
      </div>
    </div>
  );
};

const ButtonUp = styled.img`
  cursor: pointer;
  height: 60px;
`;

const ContainerImage = styled.div``;

const ContainerImageDown = styled.div``;
