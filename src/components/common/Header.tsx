import { ReactNode } from "react";

interface Props {
	navigationBar: ReactNode;
	heroHeader: ReactNode;
}

export default function Header({ navigationBar, heroHeader }: Props) {
	return (
		<header className="flex w-full flex-col items-center bg-u-skyblue">
			{navigationBar}
			{heroHeader}
		</header>
	);
}
