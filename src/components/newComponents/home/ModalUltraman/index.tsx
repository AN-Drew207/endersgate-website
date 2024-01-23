/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { useModal } from "@/hooks/modal";
import { XIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { InputModal } from "@/components/common/form/inputModal";
import { getDatabase, ref, set } from "firebase/database";
import toast from "react-hot-toast";
import { CheckIcon } from "@heroicons/react/solid";
import { Button } from "@/components/common/button/button";

export const useModalUltraman = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);
  const { Modal, isShow, hide, show } = useModal();
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm();

  React.useEffect(() => {
    show();
  }, []);

  const handleSubmitModal = (data: any) => {
    const db = getDatabase();
    setIsLoading(true);
    const { email, wallet, country, message } = data;
    set(ref(db, "ultraman/" + wallet), {
      email,
      wallet,
      country,
      message,
    });
    toast.success("Your registration for ultraman was successfully sent");
    hide();

    setIsLoading(false);
  };

  const ModalUltraman = (
    <Modal isShow={isShow} withoutX>
      <div className="flex flex-col items-center bg-[#0a0a0a] rounded-xl border border-overlay-border w-full relative md:max-w-[700px] md:min-w-[500px] max-w-[350px] min-w-[350px]">
        <div className="flex items-center justify-center border-b border-overlay-border w-full py-4 px-4 relative">
          <h2 className="font-bold text-white text-center text-3xl">
            Swap your Collab Pass!
          </h2>
          <XIcon
            onClick={() => hide()}
            className="absolute right-4 top-0 bottom-0 my-auto text-white text-xl w-6 cursor-pointer"
          ></XIcon>
        </div>
        <div className="flex flex-col gap-4 w-full items-center justify-center pb-4 pt-2 md:px-16 px-4">
          <h3 className="text-lg text-white text-center w-full font-bold Raleway">
            Login to Swap your ERC721 NFTs for ERC1155
          </h3>
          <p className="text-sm text-white text-justify">
            Login to swap your Ultraman Mint Passes obtained from OpenSea on the
            5HG marketplace. Enders Gate 1155 NFTs can be added to your card
            deck in-game for use in duels, unlock special game modes, and be
            rented to other players through the 5HG marketplace.
          </p>

          <div className="flex w-full justify-around items-center">
            <p className="text-sm font-bold text-white w-36 text-center">
              Need help?
            </p>
            <a
              href="https://marketplace.endersgate.gg/profile/swap#FAQ"
              className="text-sm font-bold text-white py-1 px-4 bg-[#353535] rounded-xl w-36 text-center outline-none"
              target="_blank"
            >
              <p>
                Visit our <span className="underline">FAQ</span>
              </p>
            </a>
            <a
              href="https://discord.com/invite/nHNkWdE99h"
              target={"_blank"}
              rel="noreferrer"
              className="text-sm font-bold text-white py-1 px-4 bg-[#353535] rounded-xl w-36 text-center"
            >
              Join our <span className="underline">Discord</span>
            </a>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-center py-2 border-y border-overlay-border relative">
          <img src="/images/SwapGraphic.webp" className="w-full flex" alt="" />
        </div>
        <a
          href="https://opensea.io/collection/ultraman-collector-edition-opensea/overview"
          target="_blank"
          className="flex sm:flex-row flex-col gap-4 w-full justify-center items-center py-4"
        >
          <Button className="w-1/3 py-2 border !border-[#ffffff] bg-gradient-to-b from-[#1a1a1a] to-[#9dff009c] rounded-md text-white !font-bold">
            Mint
          </Button>
        </a>
      </div>
    </Modal>
  );

  return { ModalUltraman, show, hide };
};
