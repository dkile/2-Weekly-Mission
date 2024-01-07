import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";
import SVGIcon from "@/components/common/icon/SVGIcon";
import { assetRoutes } from "@/routes";

const ICON_MATCHER = {
  smile: "smile",
  facebook: "facebook",
  twitter: "twitter",
  youtube: "youtube",
  instagram: "instagram",
  search: "searchbar",
  logo: "logo",
  profile: "profile",
  link: "link",
  pen: "pen",
  trash: "trash",
  share: "share",
  star: "star",
  kebab: "kebab-more",
  add: "add",
  close: "close",
};

export type IconDict = keyof typeof ICON_MATCHER;

interface Props extends HTMLAttributes<HTMLSpanElement>, ImageProps {
  type?: "svg" | "img";
  name: IconDict;
  fill?: boolean;
}

export default function Icon({ type = "svg", name, ...props }: Props) {
  if (type === "svg") return <SVGIcon name={name} aria-hidden {...props} />;
  if (type === "img")
    return (
      <Image
        {...props}
        src={`${assetRoutes.icon}/${name}.svg`}
        alt={`${name} 아이콘`}
        width={16}
        height={16}
        aria-hidden
      />
    );
}
