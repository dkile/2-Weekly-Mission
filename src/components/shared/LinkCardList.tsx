import Link from "next/link";
import { LinkInfo } from "@/types/shared";
import LinkCard from "@/components/shared/LinkCard";
import { useMemo } from "react";

interface Props {
  linkList: LinkInfo[];
  search: string;
}

export default function LinkCardList({ linkList, search }: Props) {
  const filteredLinkList = useMemo(
    () =>
      linkList.filter(({ url, title, description }) =>
        [url, title, description].some((k) => k?.includes(search)),
      ),
    [linkList, search],
  );

  return (
    <ul className="relative grid w-full grid-cols-fill-max-34 gap-x-[2rem] gap-y-[2.5rem]">
      {filteredLinkList.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            rel="noreferrer"
            target="_blank"
            className="active:bg-none"
          >
            <LinkCard link={link} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
