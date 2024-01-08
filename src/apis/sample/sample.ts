import { apiRoutes } from "@/routes";
import { fetcher } from "@/apis/fetcher";
import { Folder } from "./sample.schema";

export const getSampleFolder = async () => {
	try {
		const folder = await fetcher.get(apiRoutes.sampleFolder).json();
		const validFolder = Folder.parse(folder);

		return validFolder;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
