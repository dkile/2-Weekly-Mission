import { apiRoutes } from "@/routes";
import { FolderList } from "@/apis/folder/folder.schema";
import { fetcher } from "@/apis/fetcher";

export const getFolderList = async (userId: number) => {
	try {
		const folderList = await fetcher.get(apiRoutes.folderList(userId)).json();
		const validFolderList = FolderList.parse(folderList);

		return validFolderList;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
