import { useAuth } from "@/hooks/auth/use-auth";
import { assetRoutes, pageRoutes } from "@/routes";
import Link from "next/link";
import AccountButton from "@/components/common/AccountButton";
import Image from "next/image";

export default function GNB() {
	const isLoggedIn = useAuth();

	return (
		<div className="sticky top-0 z-50 h-[6.8rem] w-full bg-u-skyblue tablet:h-[9.4rem]">
			<nav className="mx-auto flex h-full w-full items-center justify-between bg-u-skyblue px-[3.2rem] tablet:max-w-[calc(86.4rem+(100vw-100%))] desktop:max-w-[192rem] desktop:px-[20rem]">
				<Link href={pageRoutes.home}>
					<Image
						src={`${assetRoutes.icon}/logo.svg`}
						alt="로고 이미지"
						width={133}
						height={24}
						className="h-[1.6rem] w-[8.7rem] tablet:h-[2.4rem] tablet:w-[13.3rem]"
					/>
				</Link>
				{isLoggedIn ? (
					<AccountButton />
				) : (
					<Link
						href={pageRoutes.signin}
						className="flex w-[8rem] items-center justify-center rounded-[0.8rem] bg-gradient-purple-skyblue px-[1.6rem] py-[1rem] text-[1.4rem] font-semibold text-u-white tablet:w-[12.8rem] tablet:px-[2rem] tablet:py-[1.6rem] tablet:text-[1.8rem]"
					>
						로그인
					</Link>
				)}
			</nav>
		</div>
	);
}
