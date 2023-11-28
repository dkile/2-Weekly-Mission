import { PATH_FAQ, PATH_PRIVACY } from "@/constants/routes";
import GNB from "@/components/common/GNB";
import Icon from "./Icon";

export default function Layout({ heroHeader, children }) {
  return (
    <>
      <GlobalHeader heroHeader={heroHeader} />
      {children}
      <GlobalFooter />
    </>
  );
}

function GlobalHeader({ heroHeader }) {
  return (
    <header className="flex w-full flex-col items-center bg-u-skyblue pt-[9.4rem]">
      <GNB />
      {heroHeader}
    </header>
  );
}

function GlobalFooter() {
  return (
    <footer className="mt-auto flex h-[16rem] w-full justify-center bg-u-black p-[3.2rem]">
      <div className="flex h-full w-full max-w-[192rem] justify-between tablet:h-fit tablet:px-[10.4rem]">
        <div className="flex flex-col-reverse justify-between tablet:contents">
          <span className="text-[1.6rem] text-[#676767]">©codeit - 2023</span>
          <div className="flex gap-x-[3rem] text-[1.6rem] text-[#cfcfcf]">
            <a href={PATH_PRIVACY}>Privacy Policy</a>
            <a href={PATH_FAQ}>FAQ</a>
          </div>
        </div>
        <div className="flex h-[2rem] gap-x-[1.2rem]">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="facebook" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="twitter" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="youtube" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
