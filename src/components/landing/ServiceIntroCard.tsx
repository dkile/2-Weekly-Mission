import Card from "@/components/common/Card";
import { ReactNode } from "react";

interface Props {
	title: ReactNode;
	description: ReactNode;
	thumbnail: string;
}

export default function ServiceIntroCard({
	title,
	description,
	thumbnail,
}: Props) {
	return (
		<Card className="tablet:service-intro flex h-max flex-col gap-[2rem] px-[3.2rem] py-[4rem]">
			<Card.Title
				label={{
					headType: "h2",
					content: title,
				}}
				className="tablet:service-intro-title order-1 text-[2.4rem] font-bold leading-[1.3] tracking-[-0.03rem]"
			/>
			<Card.Description
				description={description}
				className="tablet:service-intro-description order-3 text-[1.6rem] font-medium leading-[150%] text-[#6b6b6b]"
			/>
			<Card.Thumbnail
				src={thumbnail}
				className="tablet:service-intro-content-image order-2 h-auto w-full"
				loading="lazy"
			/>
		</Card>
	);
}
