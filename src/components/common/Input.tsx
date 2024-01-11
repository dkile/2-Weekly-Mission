import { ComponentPropsWithRef, FocusEvent, useState } from "react";
import Icon from "@/components/common/icon/Icon";

interface Props
  extends Omit<ComponentPropsWithRef<"input">, "type" | "className"> {
  type?: "text" | "password";
  error?: string | boolean;
}

export default function Input({ type = "text", error, ...props }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleClickPasswordToggle = () => {
    setPasswordVisible((pv) => !pv);
  };
  let inputType = "text";

  if (type === "password") {
    inputType = passwordVisible ? "text" : "password";
  }

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between overflow-hidden rounded-[0.8rem] border-[0.1rem] border-u-gray-20 bg-u-white text-u-black focus-within:border-u-primary data-[isError=true]:!border-u-red"
        data-isError={error === "" || !!error}
      >
        <input
          className="h-full w-full px-[1.5rem] py-[1.8rem] text-[1.6rem] placeholder:text-u-gray-60 focus:outline-none"
          type={inputType}
          {...props}
        />
        {type === "password" ? (
          <button
            type="button"
            onClick={handleClickPasswordToggle}
            className="mr-[1.6rem] flex items-center justify-center bg-inherit p-[0.4rem]"
          >
            <Icon
              name={passwordVisible ? "eyeOff" : "eyeOn"}
              type="img"
              className="h-[1.6rem] w-[1.6rem]"
            />
          </button>
        ) : null}
      </div>
      {error && typeof error === "string" ? (
        <small className="t-[calc(100% + 0.6rem)] absolute text-[1.4rem] text-u-red">
          {error}
        </small>
      ) : null}
    </div>
  );
}
