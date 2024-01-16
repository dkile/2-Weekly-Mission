import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ASSET_ROUTES, PAGE_ROUTES } from "@/routes";
import Input from "@/components/common/Input";
import { SigninRequestBodyVO } from "@/apis/auth/auth.schema";
import { RGX_EMAIL } from "@/utils/regex";
import { resolvers } from "@/resolvers/auth.resolver";
import { useRouter } from "next/router";

export default function SigninForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<SigninRequestBodyVO>();

  const onSubmit = async ({ email, password }: SigninRequestBodyVO) => {
    try {
      await resolvers.resolveSignin(email, password);
      router.push(PAGE_ROUTES.FOLDER);
    } catch (err) {
      console.error(err);
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
          <Input<SigninRequestBodyVO>
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
          <Input<SigninRequestBodyVO>
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
