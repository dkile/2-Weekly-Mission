import Image from "next/image";
import { HTMLAttributes } from "react";
import SVGIcon from "@/components/common/icon/SVGIcon";
import { ASSET_ROUTES } from "@/routes";

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
  eyeOn: "eye-on",
  eyeOff: "eye-off",
};

export type IconDict = keyof typeof ICON_MATCHER;

interface Props extends HTMLAttributes<HTMLImageElement | HTMLSpanElement> {
  type?: "svg" | "img";
  name: IconDict;
}

export default function Icon({ type = "svg", name, ...props }: Props) {
  if (type === "svg")
    return <SVGIcon name={ICON_MATCHER[name]} aria-hidden {...props} />;
  if (type === "img")
    return (
      <Image
        src={`${ASSET_ROUTES.ICON}/${ICON_MATCHER[name]}.svg`}
        alt={`${name} 아이콘`}
        width={20}
        height={20}
        aria-hidden
        {...props}
      />
    );
}
