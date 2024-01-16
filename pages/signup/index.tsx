import SignupForm from "@/components/auth/SignupForm";
import SocialSignupNav from "@/components/auth/SocialSignupNav";
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
    <main>
      <SignupForm />
      <SocialSignupNav />
    </main>
  );
}
