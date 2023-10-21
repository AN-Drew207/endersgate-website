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
      <div
        style={{ width: "90vw", maxWidth: "500px" }}
        className="relative bg-[#000000] flex flex-col items-center gap-4 jusify-center shadow-2xl rounded-2xl mt-40 border border-overlay-border"
      >
        <Image
          src="/images/um_whitelist.png"
          className="w-full absolute"
          top={"-200px"}
          alt=""
        />
        <div className="absolute h-full w-full rounded-2xl bg-gradient-to-b from-transparent to-[#0b0b0b] px-2 from-1% to-10% "></div>
        <div className="absolute top-2 right-2 flex justify-end w-full py-2">
          <XIcon
            className="text-white w-5 cursor-pointer p-[2px] rounded-full bg-[#000000] border border-white"
            onClick={() => {
              hide();
            }}
          />
        </div>

        <div className="h-12 w-full"></div>

        <form
          className="flex flex-col items-center justify-center relative rounded-full px-4 pb-8 gap-2"
          onSubmit={handleSubmit(handleSubmitModal)}
        >
          <h2 className="text-white text-center font-bold text-2xl text-red-alert">
            Join the Waitlist for an Exclusive Drop Featuring: Anime Ultraman
          </h2>{" "}
          <p className="text-center text-white text-[16px] py-2">
            Fill out the form below to join the waitlist and receive more
            information about the limited drop.
          </p>
          <p className="text-center text-white text-[16px] py-2">
            If you have any question, please go to our{" "}
            <a
              href="https://endersgate.gitbook.io/endersgate/welcome/5hg-faq"
              target="_blank"
              className="text-center font-bold text-white cursor-pointer border-none outline-none"
            >
              FAQs
            </a>
          </p>
          <p className="text-[#47e439] font-bold text-lg">SIGN UP BELOW!</p>
          <div className="flex flex-col items-center justify-center gap-5">
            <InputModal
              type="email"
              title="Email"
              placeholder="Your email address"
              name="email"
              register={register}
              rules={{
                required: { message: "This field is required", value: true },
              }}
              labelVisible
            ></InputModal>
            <InputModal
              type="text"
              title="Country of Residence"
              placeholder="Your Country of Residence"
              name="country"
              register={register}
              labelVisible
              rules={{
                required: { message: "This field is required", value: true },
              }}
            ></InputModal>
            <InputModal
              type="text"
              title="Wallet Address"
              placeholder="Your Wallet Address"
              name="wallet"
              register={register}
              labelVisible
              rules={{
                required: { message: "This field is required", value: true },
                pattern: {
                  message: "Your addres has to be valid",
                  value: /^0x[a-fA-F0-9]{40}$/g,
                },
              }}
            ></InputModal>
            <InputModal
              type="text"
              title="Do you have additional comments or questions? (We will contact you with an answer)"
              placeholder="Short text"
              name="message"
              register={register}
              labelVisible
            ></InputModal>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white text-sm font-bold">
              <span className="text-red-600"> Disclaimer:</span> To participate
              in this drop, confirm you reside outside of <br />{" "}
              <span className="text-[13px] font-thin text-yellow-600">
                China, Japan
              </span>
            </p>
            <div className="flex gap-2 justify-between items-center">
              <p className="text-white text-sm font-bold">
                I confirm that I do not live in any of the the listed
                territories:
              </p>{" "}
              <input
                type="checkbox"
                id="confirm"
                className="hidden"
                {...register("confirm")}
                onChange={(e) => {
                  setConfirmed(e.target.checked);
                }}
              />
              <label
                htmlFor="confirm"
                className={
                  "p-3 rounded-full border border-white bg-transparent cursor-pointer relative"
                }
              >
                {confirmed && (
                  <CheckIcon className="w-8 pb-1 pr-1 absolute top-0 bottom-0 left-0 right-0 m-auto text-[#47e439]" />
                )}
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={!isValid || !isDirty || !confirmed || isLoading}
            className="w-full"
          >
            <img
              src={
                !isValid || !isDirty || !confirmed || isLoading
                  ? "/images/btn_disabled_submit.png"
                  : "/images/btn_submit.png"
              }
              alt="submit"
            />
          </button>
        </form>
      </div>
    </Modal>
  );

  return { ModalUltraman, show, hide };
};
