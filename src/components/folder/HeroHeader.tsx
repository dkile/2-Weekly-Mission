import Icon from "@/components/common/icon/Icon";

export default function HeroHeader() {
	return (
		<div className="w-full px-[3.2rem] pb-[4rem] pt-[2.4rem] tablet:pb-[9rem] tablet:pt-[6rem]">
			<div className="mx-auto max-w-[80rem]">
				<div className="flex w-full items-center rounded-[1.5rem] border-[0.1rem] border-u-primary bg-u-white px-[1.25rem] py-[1rem] text-[1.4rem]">
					<Icon name="link" type="img" className="p-[0.8rem]" />
					<input
						placeholder="링크를 추가해 보세요"
						className="w-full bg-inherit text-u-gray-100 outline-none placeholder:text-u-gray-60"
					/>
					<button
						type="button"
						className="w-max flex-shrink-0 rounded-[0.8rem] bg-gradient-purple-skyblue px-[1.6rem] py-[1rem] text-center text-u-white"
					>
						추가하기
					</button>
				</div>
			</div>
		</div>
	);
}
