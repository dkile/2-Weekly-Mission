import { useRouter } from "next/router";
import SigninForm from "@/components/auth/SigninForm";
import SocialSigninNav from "@/components/auth/SocialSigninNav";
import { PAGE_ROUTES } from "@/routes";
import { checkAuthenticated } from "@/utils/auth";

export default function Page() {
  const router = useRouter();

  if (checkAuthenticated()) router.push(PAGE_ROUTES.FOLDER);

  return (
    <main className="flex h-full flex-col items-center justify-center bg-u-skyblue px-[3.2rem]">
      <section className="flex w-full max-w-[40rem] flex-col gap-[3.2rem]">
        <SigninForm />
        <SocialSigninNav />
      </section>
    </main>
  );
}
