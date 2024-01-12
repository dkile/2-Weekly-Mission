import Icon from "@/components/common/icon/Icon";
import { ChangeEvent } from "react";

interface Props {
  value: string;
  onChangeInput?: (userInput: string) => void;
  onResetInput?: () => void;
}

export default function SearchBar({
  value,
  onChangeInput = () => {},
  onResetInput = () => {},
}: Props) {
  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("hi");
    onChangeInput(e.target.value);
  };

  const handleClickResetButton = () => {
    onResetInput();
  };

  return (
    <div className="flex w-full items-center gap-[1rem] rounded-[1rem] bg-[#f5f5f5] p-[1.5rem]">
      <Icon name="search" type="img" className="h-[2rem] w-[2rem] p-[0.4rem]" />
      <input
        className="w-full bg-inherit text-[1.6rem] text-[#666] outline-none placeholder:text-[#666]"
        placeholder="링크를 검색해 보세요."
        onChange={handleChangeSearchInput}
        value={value}
      />
      <button
        type="button"
        onClick={handleClickResetButton}
        className="flex items-center justify-center"
      >
        <Icon name="close" type="img" className="h-[2.4rem] w-[2.4rem]" />
      </button>
    </div>
  );
}
