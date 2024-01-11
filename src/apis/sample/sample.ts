import { apiRouteUtils } from "@/routes";
import { fetcher } from "@/apis/fetcher";
import { Folder } from "./sample.schema";

export const getSampleFolder = async () => {
  try {
    const folder = await fetcher.get(apiRouteUtils.SAMPLE_FOLDER).json();
    const validFolder = Folder.parse(folder);

    return validFolder;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
