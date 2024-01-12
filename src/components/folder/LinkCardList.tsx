import Link from "next/link";
import LinkCard from "@/components/folder/LinkCard";
import { LinkInfo } from "@/types/folder";

interface Props {
	linkList: LinkInfo[];
}

export default function LinkCardList({ linkList }: Props) {
	return (
		<ul className="relative grid w-full grid-cols-fill-max-34 gap-x-[2rem] gap-y-[2.5rem]">
			{linkList.map((link) => (
				<li key={link.id}>
					<Link
						href={link.url}
						rel="noreferrer"
						target="_blank"
						className="active:bg-none"
					>
						<LinkCard link={link} />
					</Link>
				</li>
			))}
		</ul>
	);
}
