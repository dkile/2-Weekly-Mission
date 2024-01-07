import LinkCardList from "@/components/folder/LinkCardList";
import { ReactNode, useMemo } from "react";
import { useLinkListQuery } from "@/queries/use-link-query";
import { useUser } from "@/hooks/user/use-user";

interface Props {
	folder: { id?: number; name: string };
	headerRightSection?: ReactNode;
	search: string;
}
export default function LinkCardListSection({
	folder,
	headerRightSection,
	search = "",
}: Props) {
	const user = useUser();
	const { linkList } = useLinkListQuery(user.id, folder.id);

	const filteredLinkList = useMemo(
		() =>
			linkList.filter(({ url, title, description }) =>
				[url, title, description].some((k) => k?.match(search)),
			),
		[linkList, search],
	);

	return (
		<>
			<header className="w-full flex-col justify-between gap-[1.2rem] tablet:flex tablet:flex-row">
				<h2 className="text-[2.4rem] font-semibold">{folder.name}</h2>
				{headerRightSection}
			</header>
			{filteredLinkList.length ? (
				<LinkCardList linkList={filteredLinkList} />
			) : (
				<div className="flex flex-[1] items-center justify-center text-[1.6rem]">
					저장된 링크가 없습니다.
				</div>
			)}
		</>
	);
}
