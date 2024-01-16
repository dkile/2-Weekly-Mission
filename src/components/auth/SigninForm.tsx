import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ASSET_ROUTES, PAGE_ROUTES } from "@/routes";
import Input from "@/components/common/Input";
import { RGX_EMAIL } from "@/utils/regex";
import { resolvers } from "@/resolvers/auth.resolver";
import { useRouter } from "next/router";

export type SigninFormField = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    trigger,
  } = useForm<SigninFormField>();

  const onSubmit = async ({ email, password }: SigninFormField) => {
    try {
      trigger(["email", "password"]);
      await resolvers.resolveSignin(email, password);
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
    trigger("password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Link href={PAGE_ROUTES.HOME}>
          <h1>Linkbrary</h1>
          <Image
            src={`${ASSET_ROUTES.ICON}/logo.svg`}
            alt="Linkbrary 로고"
            width={210}
            height={38}
            priority
          />
        </Link>
        <div>
          회원이 아니신가요
          <Link href={PAGE_ROUTES.SIGNUP}>회원 가입하기</Link>
        </div>
      </header>
      <div>
        <div>
          <label htmlFor="email">이메일</label>
          <Input<SigninFormField>
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
              onBlur: handleBlurEmailInput,
            }}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <Input<SigninFormField>
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            error={errors.password?.message}
            register={register}
            options={{
              required: "비밀번호를 입력해주세요.",
              onBlur: handleBlurPasswordInput,
            }}
          />
        </div>
        <button type="submit">로그인</button>
      </div>
    </form>
  );
}
