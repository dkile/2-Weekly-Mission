import Icon from "@/components/common/icon/Icon";

export default function FolderControl() {
	return (
		<div className="flex gap-[1.2rem] text-[1.4rem] text-u-gray-60">
			<button type="button" className="flex items-center gap-[0.4rem]">
				<Icon name="share" type="img" className="h-[1.8rem] w-[1.8rem]" />
				공유
			</button>
			<button type="button" className="flex items-center gap-[0.4rem]">
				<Icon name="pen" type="img" className="h-[1.8rem] w-[1.8rem]" />
				이름 변경
			</button>
			<button type="button" className="flex items-center gap-[0.4rem]">
				<Icon name="trash" type="img" className="h-[1.8rem] w-[1.8rem]" />
				삭제
			</button>
		</div>
	);
}
