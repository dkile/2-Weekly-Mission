import useQuery from "@/hooks/common/use-query";
import { useCallback } from "react";
import { resolvers } from "@/resolvers/folder.resolver";
import { LinkInfo } from "@/types/folder";

export const useLinkListQuery = (userId: number, folderId?: number) => {
  const {
    data: linkList = [],
    isLoading,
    error,
  } = useQuery<LinkInfo[]>({
    queryKey: userId,
    queryFn: useCallback(
      () => resolvers.resolveLinkList(userId, folderId),
      [userId, folderId],
    ),
  });

  return { linkList, isLoading, error };
};
