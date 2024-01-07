import { fetcher } from "@/apis/fetcher";
import { apiRoutes } from "@/routes";
import { LinkList } from "@/apis/link/link.schema";

export const getLinkList = async (userId: number, folderId?: number) => {
	try {
		const linkList = await fetcher
			.get(apiRoutes.linkList(userId), {
				searchParams: folderId ? { folderId } : undefined,
			})
			.json();
		const validLinkList = LinkList.parse(linkList);

		return validLinkList;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
