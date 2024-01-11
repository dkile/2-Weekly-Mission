import { PAGE_ROUTES } from "@/routes";
import Link from "next/link";
import Icon from "@/components/common/icon/Icon";

export default function Footer() {
  return (
    <footer className="flex h-[16rem] w-full justify-center bg-u-black p-[3.2rem]">
      <div className="flex h-full w-full max-w-[192rem] justify-between tablet:h-fit tablet:px-[10.4rem]">
        <div className="flex flex-col-reverse justify-between tablet:contents">
          <span className="text-[1.6rem] text-[#676767]">©codeit - 2023</span>
          <div className="flex gap-x-[3rem] text-[1.6rem] text-[#cfcfcf]">
            <Link href={PAGE_ROUTES.PRIVACY}>Privacy Policy</Link>
            <Link href={PAGE_ROUTES.FAQ}>FAQ</Link>
          </div>
        </div>
        <div className="flex h-[2rem] gap-x-[1.2rem]">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="facebook" type="img" />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="twitter" type="img" />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="youtube" type="img" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" type="img" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
