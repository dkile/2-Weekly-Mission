import { PropsWithChildren } from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import GNB from "@/components/common/GNB";
import HeroHeader from "./HeroHeader";
import { Folder } from "@/types/shared";

interface Props extends PropsWithChildren {
	folder: Folder;
}

export default function Layout({ folder, children }: Props) {
	const { name, owner } = folder;

	return (
		<>
			<Header
				navigationBar={<GNB />}
				heroHeader={<HeroHeader folder={{ name, owner }} />}
			/>
			{children}
			<Footer />
		</>
	);
}
