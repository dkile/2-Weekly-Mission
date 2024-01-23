import { MouseEvent, useContext } from "react";
import Icon from "@/components/common/icon/Icon";
import Popover, { PopoverActionContext } from "@/components/common/Popover";

interface Props {
  onClickMenuItem?: (e?: MouseEvent<HTMLButtonElement>) => void;
}
export default function LinkCardOption({ onClickMenuItem = () => {} }: Props) {
  const optionItems = [
    { label: "삭제하기", value: "삭제하기" },
    { label: "폴더에 추가", value: "폴더에 추가" },
  ];

  return (
    <Popover closeWhenClickOutside className="relative">
      <Popover.Trigger className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[0.5rem] transition-[background] hover:bg-[rgba(0,0,0,0.05)] data-[on=true]:bg-[rgba(0,0,0,0.05)]">
        <Icon name="kebab" type="img" className="h-[2rem] w-[2rem]" />
      </Popover.Trigger>
      <Popover.Content className="absolute z-10 flex w-max flex-col overflow-hidden rounded-[0.5rem] bg-u-white shadow-[0px_2px_8px_0px_rgba(51,50,54,0.10)]">
        <CardOptionMenuContent
          optionItems={optionItems}
          onClickMenuItem={onClickMenuItem}
        />
      </Popover.Content>
    </Popover>
  );
}

interface ContentProps {
  optionItems: { label: string; value: string | number }[];
  onClickMenuItem: (e?: MouseEvent<HTMLButtonElement>) => void;
}
function CardOptionMenuContent({ optionItems, onClickMenuItem }: ContentProps) {
  const toggle = useContext(PopoverActionContext);

  const handleCardOptionClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClickMenuItem(e);
    toggle();
  };

  return (
    <menu>
      {optionItems.map((item) => (
        <li
          key={item.value}
          className=" bg-u-white px-[1.2rem] py-[0.8rem] text-[1.4rem] transition-[background] hover:bg-u-gray-10 active:text-u-primary"
        >
          <button
            type="button"
            value={item.value ?? item.label}
            onClick={handleCardOptionClick}
            className="h-full w-full"
          >
            {item.label}
          </button>
        </li>
      ))}
    </menu>
  );
}
