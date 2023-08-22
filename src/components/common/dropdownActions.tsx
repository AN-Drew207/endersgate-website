import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import styled from "styled-components";
import clsx from "clsx";

export const QDropdown: React.FC<any> = ({ content, down, openTrigger }) => {
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
      <div className={clsx("relative flex justify-center w-full")}>
        <div>
          <div
            className={clsx(
              { ["items-end h-2/3"]: !down },
              { ["items-center"]: down },
              "inline-flex justify-center w-full px-4 py-2 font-medium bg-transparent focus:outline-none"
            )}
          >
            {down ? (
              <Button
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
            ) : (
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
            )}
          </div>
        </div>

        {down ? (
          <ContainerImage
            className={clsx(
              "absolute mt-10 left-0 right-0 m-auto z-10  bg-transparent"
            )}
          >
            <ContainerImage
              className={clsx(
                { [`notOpen`]: !open },
                { [`open`]: open },
                "relative flex flex-col shadow-lg"
              )}
            >
              <img
                src="./assets/Box.png"
                alt="a"
                className="absolute w-full h-full"
              />
              {content?.map((pieceContent: any, index: any) => {
                return (
                  <>
                    <h2
                      className={clsx(
                        { "pt-6": index === 0 },
                        { "pt-2": index !== 0 },
                        "text-white z-20 titleRoadmap xl:px-4 px-2  text-center w-full lowercase"
                      )}
                    >
                      {pieceContent.title}
                    </h2>
                    <p className="text-white descriptionRoadmap z-20 xl:px-4 px-2 text-center w-full lowercase">
                      {pieceContent.description}
                    </p>
                  </>
                );
              })}
            </ContainerImage>
          </ContainerImage>
        ) : (
          <ContainerImageDown
            className={clsx(
              "absolute left-0 right-0 m-auto z-10  bg-transparent"
            )}
          >
            <ContainerImage
              className={clsx(
                { [`notOpen`]: !open },
                { [`open`]: open },
                "relative flex flex-col justify-start items-start shadow-lg"
              )}
            >
              <img
                src="./assets/Box.png"
                alt="a"
                className="absolute w-full h-full"
              />
              {content?.map((pieceContent: any, index: any) => {
                return (
                  <>
                    <h2
                      className={clsx(
                        { "pt-3": index === 0 },
                        { "pt-2": index !== 0 },
                        "text-white z-20 titleRoadmap xl:px-4 px-2 text-center w-full lowercase"
                      )}
                    >
                      {pieceContent.title}
                    </h2>
                    <p className="text-white descriptionRoadmap z-20 xl:px-4 px-2 text-center w-full lowercase">
                      {pieceContent.description}
                    </p>
                  </>
                );
              })}
            </ContainerImage>
          </ContainerImageDown>
        )}
      </div>
    </div>
  );
};

const Button = styled.img`
  cursor: pointer;
  height: 60px;
  @media (max-width: 750px) {
    height: 40px;
    margin-top: 10px;
  }
`;

const ButtonUp = styled.img`
  cursor: pointer;
  height: 60px;
  margin-bottom: calc((160 / 1920) * 100vw);

  // @media (max-width: 1800px) {
  //   margin-bottom: calc((150 / 1800) * 100vw);
  // }

  // @media (max-width: 1600px) {
  //   margin-bottom: calc((100 / 1600) * 100vw);
  // }

  // @media (max-width: 1500px) {
  //   margin-bottom: calc((90 / 1500) * 100vw);
  // }

  // @media (max-width: 1400px) {
  //   margin-bottom: calc((120 / 1400) * 100vw);
  // }

  @media (max-width: 1300px) {
    margin-bottom: calc((80 / 1300) * 100vw);
  }

  // @media (max-width: 1200px) {
  //   margin-bottom: calc((105 / 1200) * 100vw);
  // }

  // @media (max-width: 1100px) {
  //   margin-bottom: calc((100 / 1100) * 100vw);
  // }

  @media (max-width: 1000px) {
    margin-bottom: calc((70 / 1000) * 100vw);
  }

  // @media (max-width: 900px) {
  //   margin-bottom: calc((110 / 900) * 100vw);
  // }

  @media (max-width: 800px) {
    margin-bottom: calc((45 / 800) * 100vw);
  }

  @media (max-width: 750px) {
    height: 40px;
  }
`;

const ContainerImage = styled.div`
  height: calc((350 / 1920) * 100vw);
  width calc((350 / 1920) * 100vw);
  @media (max-width: 1600px) {
    height: calc((330 / 1600) * 100vw);
    width: calc((300 / 1600) * 100vw);
  }

  @media (max-width: 1400px) {
    height: 350px;
    width: calc((290 / 1400) * 100vw);
  }

  @media (max-width: 1300px) {
    height: calc((320 / 1300) * 100vw);
    width: calc((260 / 1300) * 100vw);
  }

  @media (max-width: 1200px) {
    height: calc((320 / 1200) * 100vw);
    width: calc((250 / 1200) * 100vw);
  }

  @media (max-width: 1100px) {
    height: calc((300 / 1100) * 100vw);
    width: calc((230 / 1100) * 100vw);
  }

  @media (max-width: 1000px) {
    height: calc((280 / 1000) * 100vw);
    width: calc((220 / 1000) * 100vw);
  }

  @media (max-width: 900px) {
    height: calc((260  / 900) * 100vw);
  }

  @media (max-width: 800px) {
    height: calc((250 / 800) * 100vw);

  }
`;

const ContainerImageDown = styled.div`
  bottom: calc((580 / 1920) * 100vw);
  height: calc((350 / 1920) * 100vw);
  width calc((350 / 1920) * 100vw);
  @media (max-width: 1600px) {
    bottom: calc((510 / 1600) * 100vw);
    height: calc((370 / 1920) * 100vw);
    width: calc((300 / 1600) * 100vw);
  }

  @media (max-width: 1400px) {
    height: 300px;
    bottom: calc((480 / 1400) * 100vw);
    width: calc((290 / 1400) * 100vw);
  }

  @media (max-width: 1300px) {
    bottom: calc((350 / 1300) * 100vw);
    height: calc((340 / 1300) * 100vw);
    width: calc((260 / 1300) * 100vw);
  }

  @media (max-width: 1200px) {
    bottom: calc((340 / 1200) * 100vw);
    height: calc((320 / 1200) * 100vw);
    width: calc((250 / 1200) * 100vw);
  }

  @media (max-width: 1100px) {
    bottom: calc((320 / 1100) * 100vw);
    height: calc((300 / 1100) * 100vw);
    width: calc((230 / 1100) * 100vw);
  }

  @media (max-width: 1000px) {
    bottom: calc((275 / 1000) * 100vw);
    height: calc((320 / 1000) * 100vw);
    width: calc((220 / 1000) * 100vw);
  }

  @media (max-width: 900px) {
    bottom: calc((285  / 900) * 100vw);
    height: calc((260 / 900) * 100vw);
  }

  @media (max-width: 800px) {
    bottom: calc((240 / 800) * 100vw);
    height: calc((250 / 800) * 100vw);
  }
`;
