import Image from "next/image";
import Icon from "@/components/common/icon/Icon";
import { Owner } from "@/types/shared";

interface Props {
  owner: Owner;
}

export default function FolderOwner({ owner }: Props) {
  return (
    <div className="flex flex-col items-center tablet:gap-[1.2rem]">
      {owner.profileImageSource ? (
        <Image
          src={owner.profileImageSource}
          alt="폴더 소유자 프로필 사진"
          width={60}
          height={60}
          className="flex aspect-square h-[4rem] items-center justify-center rounded-full object-cover tablet:h-[6rem]"
        />
      ) : (
        <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-u-purple-70 tablet:h-[6rem] tablet:w-[6rem]">
          <Icon
            name="smile"
            type="img"
            aria-hidden
            className="h-[1.8rem] w-[1.8rem] tablet:h-[2.8rem] tablet:w-[2.8rem]"
          />
        </div>
      )}
      <span className="text-[1.4rem] text-u-gray-100 tablet:text-[1.6rem]">
        {owner.name}
      </span>
    </div>
  );
}
