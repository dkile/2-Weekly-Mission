import useQuery from "@/hooks/common/use-query";
import { resolvers } from "@/resolvers/user.resolver";
import { useCallback } from "react";

export const useCurrentUserQuery = () => {
  const { data: currentUser } = useQuery({
    queryFn: useCallback(() => resolvers.resolveCurrentUser(), []),
  });

  return currentUser;
};
