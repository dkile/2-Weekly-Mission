import Image from "next/image";
import Link from "next/link";
import { assetRoutes, pageRoutes } from "@/routes";

export default function HeroHeader() {
  return (
    <div className="mt-[6.3rem] flex flex-col items-center gap-[2.4rem] pt-[2.8rem] tablet:mt-[9.4rem] tablet:gap-[4rem] tablet:pt-[7rem]">
      <h2 className="text-center text-[3.2rem] font-bold leading-[1.4] tablet:text-[6.4rem] tablet:leading-[8rem]">
        <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
          세상의 모든 정보
        </span>
        를
        <br />
        쉽게 저장하고
        <br className="desktop:hidden" />
        {" 관리해 보세요"}
      </h2>
      <Link
        href={pageRoutes.singup}
        className="flex w-[20rem] items-center justify-center rounded-[0.8rem] bg-gradient-purple-skyblue px-[1.6rem] py-[1rem] text-[1.4rem] font-semibold text-u-white tablet:w-[35rem] tablet:px-[2rem] tablet:py-[1.6rem] tablet:text-[1.8rem]"
      >
        링크 추가하기
      </Link>
      <Image
        src={`${assetRoutes.image}/hero`}
        className="h-[16rem] w-[32.5rem] tablet:h-[34.4rem] tablet:w-[69.8rem] desktop:h-[59rem] desktop:w-[120rem]"
        alt="Linkbrary 서비스 소개"
        width={2400}
        height={1180}
      />
    </div>
  );
}
