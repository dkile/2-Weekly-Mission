import Image from "next/image";
import Icon from "@/components/common/icon/Icon";
import { useUser } from "@/hooks/user/use-user";

export default function AccountButton() {
  const account = useUser();

  return (
    <button type="button">
      <div className="flex items-center gap-[0.6rem]">
        {account.imageSource ? (
          <Image
            src={account.imageSource}
            alt="프로필 이미지"
            className="h-[2.8rem] w-[2.8rem] rounded-full"
            width={28}
            height={28}
          />
        ) : (
          <Icon
            name="profile"
            type="img"
            className="h-[2.8rem] w-[2.8rem] rounded-full"
          />
        )}
        <span className="hidden text-[1.4rem] text-u-gray-100 tablet:block">
          {account.email}
        </span>
      </div>
    </button>
  );
}
