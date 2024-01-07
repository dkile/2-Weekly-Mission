import { HTMLAttributes, useEffect, useState } from "react";
import ky from "ky";
import { assetRoutes } from "@/routes";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  name: string;
}

export default function SVGIcon({ name, ...props }: Props) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const fetchIcon = async () => {
      const icon = await getIcon(name);
      setIcon(icon);
    };

    fetchIcon();
  }, [name]);

  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}

export const getIcon = async (name: string) => {
  const res = await ky.get(`${assetRoutes.icon}/${name}.svg`);
  const icon = await res.text();

  return icon;
};
