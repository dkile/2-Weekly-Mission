import { HTMLAttributes, useEffect, useState } from "react";
import { type IconDict } from "@/components/common/icon/Icon";
import ky from "ky";
import { assetRoutes } from "@/routes";

interface Props extends HTMLAttributes<HTMLSpanElement> {
	name: IconDict;
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

export const getIcon = async (name: IconDict) => {
	const res = await ky.get(`${assetRoutes.icon}/${name}.svg`);
	const icon = await res.text();

	return icon;
};
