import { apiRouteUtils } from "@/routes";
import { fetcher } from "@/apis/fetcher";
import { FolderResponse } from "./sample.schema";

export const getSampleFolder = async () => {
  const res = await fetcher
    .get(apiRouteUtils.SAMPLE_FOLDER)
    .json()
    .then(FolderResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};
