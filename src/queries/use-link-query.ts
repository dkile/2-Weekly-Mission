import useQuery from "@/hooks/common/use-query";
import { useCallback } from "react";
import { resolvers } from "@/resolvers/folder.resolver";
import { LinkInfo } from "@/types/folder";

export const useLinkListQuery = (folderId?: number) => {
  const {
    data: linkList = [],
    isLoading,
    error,
  } = useQuery<LinkInfo[]>({
    queryFn: useCallback(() => resolvers.resolveLinkList(folderId), [folderId]),
  });

  return { linkList, isLoading, error };
};
