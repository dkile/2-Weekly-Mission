import { useEffect, useState } from "react";

interface Props<T> {
  queryFn: () => Promise<T>;
}

export default function useQuery<T = unknown>({ queryFn }: Props<T>) {
  const [queryResult, setQueryResult] = useState<Awaited<T>>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refetch = async () => {
    setIsLoading(true);
    try {
      const result = await queryFn();
      setQueryResult(result);

      return { result, isLoading, error };
    } catch (err) {
      if (err instanceof Error) setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    const fetchQuery = async () => {
      try {
        const result = await queryFn();
        if (!ignore) {
          setQueryResult(result);
        }
      } catch (err) {
        if (err instanceof Error) setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchQuery();

    return () => {
      ignore = true;
    };
  }, [queryFn]);

  return { data: queryResult, isLoading, error, refetch };
}
