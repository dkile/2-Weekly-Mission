import Link from "next/link";
import Icon from "@/components/common/icon/Icon";

export default function SocialSignupNav() {
  return (
    <nav>
      다른 방식으로 가입하기
      <div>
        <Link href="https://www.google.com/">
          <Icon name="google" type="img" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Icon name="kakao" type="img" />
        </Link>
      </div>
    </nav>
  );
}
