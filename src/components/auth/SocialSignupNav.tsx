import Link from "next/link";
import Icon from "@/components/common/icon/Icon";

export default function SocialSignupNav() {
  return (
    <nav className="flex items-center justify-between rounded-[0.8rem] border-[0.1rem] border-u-gray-20 bg-u-gray-10 px-[2.4rem] py-[1.2rem] text-[1.4rem] text-u-gray-100">
      다른 방식으로 가입하기
      <div className="flex gap-[1.6rem]">
        <Link href="https://www.google.com/">
          <Icon name="google" type="img" className="h-[4.2rem] w-[4.2rem]" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Icon name="kakao" type="img" className="h-[4.2rem] w-[4.2rem]" />
        </Link>
      </div>
    </nav>
  );
}
