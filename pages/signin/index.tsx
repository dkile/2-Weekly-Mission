import SigninForm from "@/components/auth/SigninForm";
import SocialSigninNav from "@/components/auth/SocialSigninNav";
import { PAGE_ROUTES } from "@/routes";
import { getAccessToken } from "@/utils/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (getAccessToken()) router.push(PAGE_ROUTES.FOLDER);
  }, [router]);

  return (
    <main className="flex h-full flex-col items-center justify-center bg-u-skyblue px-[3.2rem]">
      <section className="flex w-full max-w-[40rem] flex-col gap-[3.2rem]">
        <SigninForm />
        <SocialSigninNav />
      </section>
    </main>
  );
}
