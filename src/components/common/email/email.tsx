import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const Email = () => {
  const [isValid, setIsValid] = React.useState(false);
  const [emailContent, setEmailContent] = React.useState({
    name: "",
    title: "",
    message: "",
  });
  function onChange(value: any) {
    console.log("Captcha value:", value);
    setIsValid(true);
  }

  function sendEmail() {
    console.log(emailContent);
    setIsValid(false);
  }

  return (
    <div className="flex flex-col items-center relative sm:w-96">
      <img
        src="./assets/cardsContainerInventory.png"
        className="absolute w-full h-full"
        alt=""
      />
      <div className="relative flex flex-col items-center gap-4 p-8">
        <h4 className="text-base text-white text-center relative ringBearer">
          send us an email
        </h4>
        <div className="relative w-full flex items-center">
          <img
            src="./assets/shop/framePackTitle.png"
            className="w-full h-full absolute"
            alt=""
          />
          <input
            className="montserrat bg-transparent relative px-6 py-3 ringBearer text-white w-full"
            maxLength={25}
            placeholder="name"
            onChange={(e) =>
              setEmailContent((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </div>
        <div className="relative w-full flex items-center">
          <img
            src="./assets/shop/framePackTitle.png"
            className="w-full h-full absolute"
            alt=""
          />
          <input
            className="montserrat bg-transparent relative px-6 py-3 ringBearer text-white w-full"
            maxLength={35}
            placeholder="title"
            onChange={(e) =>
              setEmailContent((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="relative w-full flex items-center">
          <img
            src="./assets/shop/framePackTitle.png"
            className="w-full h-full absolute"
            alt=""
          />
          <input
            className="montserrat bg-transparent relative px-6 py-3 ringBearer text-white w-full"
            maxLength={400}
            placeholder="message"
            onChange={(e) =>
              setEmailContent((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-2">
          <div
            className="relative cursor-pointer"
            onClick={() =>
              isValid
                ? sendEmail()
                : alert("You have to complete the captcha to send the email")
            }
          >
            <img
              className="w-full h-full absolute"
              src="./assets/shop/woodButton.png"
            />

            <div className="p-4 px-8 flex relative items-center">
              <span
                style={{
                  display: "block",
                }}
                className="text-white ringBearer font-black text-center"
              >
                send
              </span>
            </div>
          </div>
        </div>
        <ReCAPTCHA
          sitekey="6LdYg1QfAAAAANxqkN2tsqJgqIHAz4VGZsSZmgPy"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
