import * as React from "react";
import clsx from "clsx";
import styles from "./input.module.scss";
import { Typography } from "../../typography";
import { XIcon } from "@heroicons/react/solid";

export const Input: React.FC<
  any & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  name,
  title,
  isFill,
  register,
  rules,
  rightImg,
  leftImg,
  rightClick,
  leftClick,
  customPlaceholder,
  onChangeCustom,
  error,
  className,
  classNameContainer,
  InputSelect,
  labelVisible,
  verifyValue,
  handleVerification,
  primary,
  reset,
  withoutX = false,
  ...props
}) => {
  //@typescript-eslint/no-unused-vars

  const [showLabel, setShowLabel] = React.useState(false);
  return (
    <div className={clsx("relative flex flex-col w-full", className)}>
      <div className={clsx(styles.input)}>
        <div className="flex flex-1">
          {labelVisible && (
            <div className="flex-auto">
              <Typography
                type="label"
                className={clsx(
                  { "text-alert-error": error || verifyValue === false },
                  { "text-primary": isFill },
                  { "text-primary": primary && !error },
                  "mb-2 block f-14 text-primary",
                )}
              >
                {(showLabel || labelVisible) && title}
              </Typography>
            </div>
          )}

          {verifyValue === false && (
            <div className="flex-1 text-right">
              <Typography
                type="label"
                className={clsx(
                  "ml-3 font-bold mb-2 block f-18 text-gray-500 cursor-pointer",
                )}
                onClick={handleVerification}
              >
                <p>Verificar</p>
              </Typography>
            </div>
          )}
        </div>
        <div className="relative container-input">
          <input
            onKeyUp={(e) => {
              if (props.type === "tel") {
                e.currentTarget.value === ""
                  ? setShowLabel(false)
                  : setShowLabel(true);
              }
            }}
            id={name}
            name={name}
            placeholder={customPlaceholder || title}
            autoComplete="off"
            className={clsx(
              styles.text,

              //Styles normal input
              {
                "bg-gray-opacity-10 outline-none ring-offset-transparent ring-opacity-0 border-gray-opacity-10 ring-transparent":
                  !isFill && !error,
              },
              !!isFill && styles.inputDateWithValue,
              "placeholder-primary-disabled  w-full font-montserrat border",
              {
                "border-gray-500": !error && !isFill,
              },
              "disabled:placeholder-gray-200 disabled:cursor-not-allowed disabled:text-gray-500",
              "bg-transparent text-white border border-white",
              {
                "focus:outline-none focus:ring-offset-transparent focus:ring-opacity-0 focus:border-white focus:ring-transparent":
                  !error,
              },
              classNameContainer,
            )}
            onChange={(e) => {
              onChangeCustom && onChangeCustom(e); // your method
              e.target.value === "" ? setShowLabel(false) : setShowLabel(true);
            }}
            // ref={register ? register(rules) : () => ({})}
            {...props}
          />
          {InputSelect && (
            <div className="absolute top-0 h-full w-20 md:w-32">
              <InputSelect />
            </div>
          )}

          {!withoutX && (
            <div
              onClick={() => reset({ [name]: "" })}
              className="absolute right-2 top-0 bottom-0 my-auto text-primary-disabled flex items-center justify-center font-bold cursor-pointer"
            >
              <XIcon color="#fff" width={"12px"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
