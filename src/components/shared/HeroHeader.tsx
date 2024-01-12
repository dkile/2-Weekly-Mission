import FolderOwner from "@/components/shared/FolderOwner";
import { Folder } from "@/types/shared";

interface Props {
	folder: Pick<Folder, "name" | "owner">;
}

export default function HeroHeader({ folder }: Props) {
	return (
		<div className="pb-[6rem] pt-[2rem]">
			<div className="mx-auto flex w-max flex-col items-center gap-[1rem] tablet:gap-[2rem]">
				<FolderOwner owner={folder.owner} />
				<h2 className="text-center text-[3.2rem] font-semibold tablet:text-[4rem]">
					{folder.name}
				</h2>
			</div>
		</div>
	);
}
