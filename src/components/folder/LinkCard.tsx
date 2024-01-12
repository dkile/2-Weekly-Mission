import Card from "@/components/common/Card";
import { formatCreatedAtInCard, formatPastInCard } from "@/utils/folder";
import Icon from "@/components/common/icon/Icon";
import LinkCardOption from "@/components/folder/LinkCardOption";
import { MouseEvent } from "react";
import { LinkInfo } from "@/types/folder";
import { ASSET_ROUTES } from "@/routes";

interface Props {
  link: LinkInfo;
}

export default function LinkCard({ link }: Props) {
  const handleCardMenuClick = (e?: MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
  };

  const handleCardBookmarkClick = (e?: MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
  };

  return (
    <Card className="relative h-full w-full rounded-[1.5rem] bg-u-white shadow-[0px_5px_25px_0px_rgba(0,0,0,0.08)] tablet:w-[34rem]">
      <div className="relative h-[19.2rem] w-full overflow-hidden rounded-t-[1.5rem]">
        <Card.Thumbnail
          src={
            link.imageSource ??
            `${ASSET_ROUTES.IMAGE}/link-sample-thumbnail.jpg`
          }
          alt={`링크 카드 썸네일 ${link.imageSource}`}
          className="h-full w-full origin-center transform-gpu object-cover transition-transform will-change-transform hover:scale-[1.3]"
          fill
        />
        <button
          type="button"
          onClick={handleCardBookmarkClick}
          className="absolute right-[1.5rem] top-[1.5rem]"
        >
          <Icon name="star" className="block h-[3.4rem] w-[3.4rem]" />
        </button>
      </div>
      <div className="flex flex-col gap-[1rem] px-[2rem] py-[1.5rem]">
        <div className="flex w-full items-center justify-between text-[1.3rem] text-[#666]">
          {formatPastInCard(link.createdAt)}
          <LinkCardOption onClickMenuItem={handleCardMenuClick} />
        </div>
        <Card.Description
          description={link.description}
          className="line-clamp-2 h-[4.9rem] w-full text-ellipsis text-[1.6rem]"
        />
        <div className="line-clamp-1 w-full text-ellipsis text-[1.4rem] text-[#333]">
          {formatCreatedAtInCard(link.createdAt)}
        </div>
      </div>
    </Card>
  );
}
