import { getLinkList } from "@/apis/link/link";
import { LinkInfo } from "@/types/folder";
import { useEffect, useState } from "react";

export type LinkListQueryOption = {
  onSuccess?: (linkList: LinkInfo[]) => LinkInfo[];
};

export const useLinkListQuery = (
  userId: number | null,
  folderId?: number,
  option?: LinkListQueryOption,
) => {
  const [linkList, setLinkList] = useState<LinkInfo[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const successor = option?.onSuccess ?? ((linkList) => linkList);

  const refetch = async (userId: number | null, folderId?: number) => {
    if (userId === null) return;
    setIsLoading(true);
    try {
      const { data: linkList } = await getLinkList(userId, folderId);
      setLinkList(successor(linkList));

      return { linkList, isLoading, error };
    } catch (err) {
      if (err instanceof Error) setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!userId) return;
    let ignore = false;
    const fetchLinkList = async () => {
      try {
        const { data: linkList } = await getLinkList(userId, folderId);
        if (!ignore) {
          setLinkList(linkList);
        }
      } catch (err) {
        if (err instanceof Error) setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchLinkList();

    return () => {
      ignore = true;
    };
  }, [userId, folderId]);

  return { linkList, isLoading, error, refetch };
};
