import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ASSET_ROUTES, PAGE_ROUTES } from "@/routes";
import Input from "@/components/common/Input";
import { RGX_EMAIL, RGX_LETTER_DIGIT_COMB } from "@/utils/regex";
import { resolvers as authResolvers } from "@/resolvers/auth.resolver";
import { resolvers as userResolvers } from "@/resolvers/user.resolver";
import {
  MIN_PASSWORD_LENGTH,
  MSG_INVALID_PASSWORD_FORMAT,
  MSG_NOT_SAME_PASSWORD_CONFIRM,
} from "@/utils/auth";

export type SignupFormField = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
  } = useForm<SignupFormField>();

  const onSubmit = async ({ email, password }: SignupFormField) => {
    try {
      trigger(["email", "password", "passwordConfirm"]);
      await authResolvers.resolveSignup(email, password);
      router.push(PAGE_ROUTES.FOLDER);
    } catch (err) {
      setError("email", {
        type: "custom",
        message: "이메일을 확인해주세요.",
      });
      setError("password", {
        type: "custom",
        message: "비밀번호를 확인해주세요.",
      });
    }
  };

  const handleBlurEmailInput = () => {
    trigger("email");
  };

  const handleBlurPasswordInput = () => {
    trigger(["password", "passwordConfirm"]);
  };

  const handleBlurPasswordConfirmInput = () => {
    trigger(["passwordConfirm"]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[3rem]"
    >
      <header className="flex flex-col items-center gap-[1.6rem]">
        <Link href={PAGE_ROUTES.HOME}>
          <h1 className="hidden">Linkbrary</h1>
          <Image
            src={`${ASSET_ROUTES.ICON}/logo.svg`}
            alt="Linkbrary 로고"
            width={210}
            height={38}
            priority
          />
        </Link>
        <div className="text-[1.6rem]">
          이미 회원이신가요?
          <Link
            href={PAGE_ROUTES.SIGNIN}
            className="ml-[0.4rem] font-bold text-u-primary underline underline-offset-4"
          >
            로그인 하기
          </Link>
        </div>
      </header>
      <div className="flex flex-col gap-[2.4rem]">
        <div className="flex flex-col gap-[1.2rem] text-[1.4rem]">
          <label htmlFor="email" className="cursor-pointer">
            이메일
          </label>
          <Input<SignupFormField>
            id="email"
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요."
            error={errors.email?.message}
            register={register}
            options={{
              required: "이메일을 입력해주세요.",
              pattern: {
                value: RGX_EMAIL,
                message: "올바른 이메일 주소가 아닙니다.",
              },
              validate: {
                checkEmail: async (em) => {
                  try {
                    await userResolvers.resolveEmailCheck(em);
                  } catch (err) {
                    return "중복된 이메일입니다.";
                  }
                },
              },
              onBlur: handleBlurEmailInput,
            }}
          />
        </div>
        <div className="flex flex-col gap-[1.2rem] text-[1.4rem]">
          <label htmlFor="password" className="cursor-pointer">
            비밀번호
          </label>
          <Input<SignupFormField>
            id="password"
            type="password"
            name="password"
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
            error={errors.password?.message}
            register={register}
            options={{
              required: MSG_INVALID_PASSWORD_FORMAT,
              onBlur: handleBlurPasswordInput,
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: MSG_INVALID_PASSWORD_FORMAT,
              },
              pattern: {
                value: RGX_LETTER_DIGIT_COMB,
                message: MSG_INVALID_PASSWORD_FORMAT,
              },
            }}
          />
        </div>
        <div className="flex flex-col gap-[1.2rem] text-[1.4rem]">
          <label htmlFor="passwordConfirm" className="cursor-pointer">
            비밀번호 확인
          </label>
          <Input<SignupFormField>
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
            error={errors.passwordConfirm?.message}
            register={register}
            options={{
              validate: {
                sameWithPassword: (pc, { password }) =>
                  pc === password || MSG_NOT_SAME_PASSWORD_CONFIRM,
              },
              onBlur: handleBlurPasswordConfirmInput,
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full justify-center rounded-[0.8rem] bg-gradient-purple-skyblue px-[2rem] py-[1.6rem] text-[1.8rem] text-u-white"
      >
        회원가입
      </button>
    </form>
  );
}
