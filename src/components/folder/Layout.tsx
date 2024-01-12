import GNB from "@/components/common/GNB";
import Header from "@/components/common/Header";
import HeroHeader from "@/components/folder/HeroHeader";
import { PropsWithChildren } from "react";
import Footer from "@/components/common/Footer";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Header navigationBar={<GNB />} heroHeader={<HeroHeader />} />
			{children}
			<Footer />
		</>
	);
}
