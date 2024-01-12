import { useCallback } from "react";
import { resolvers } from "@/resolvers/folder.resolver";
import useQuery from "@/hooks/common/use-query";

export const useFolderListQuery = (userId: number) => {
  const {
    data: folderList,
    isLoading,
    error,
  } = useQuery({
    queryFn: useCallback(() => resolvers.resolveFolderList(userId), [userId]),
  });

  return { folderList, isLoading, error };
};
