import { ComponentPropsWithoutRef } from "react";
import Icon from "@/components/common/icon/Icon";
import usePasswordInput from "@/hooks/common/use-password-input";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface Props<T extends FieldValues>
  extends Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "className" | "name"
  > {
  type: "text" | "password";
  name: Path<T>;
  error?: string | boolean;
  register: UseFormRegister<T>;
  options?: RegisterOptions<T>;
}

export default function Input<T extends FieldValues>({
  type = "text",
  error,
  name,
  register,
  options,
  ...props
}: Props<T>) {
  const {
    passwordVisible,
    handleClickPasswordToggle,
    type: passwordInputType,
  } = usePasswordInput();

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between overflow-hidden rounded-[0.8rem] border-[0.1rem] border-u-gray-20 bg-u-white text-u-black focus-within:border-u-primary data-[iserror=true]:!border-u-red"
        data-iserror={error === "" || !!error}
      >
        <input
          className="h-full w-full px-[1.5rem] py-[1.8rem] text-[1.6rem] placeholder:text-u-gray-60 focus:outline-none"
          type={type === "password" ? passwordInputType : type}
          {...register(name, options)}
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
