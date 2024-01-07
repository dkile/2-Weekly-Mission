import { useEffect, useState } from "react";
import { getFolderList } from "@/apis/folder/folder";
import { Folder } from "@/types/folder";

export const useFolderListQuery = (userId: number | null) => {
	const [folderList, setFolderList] = useState<Folder[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!userId) return () => {};
		let ignore = false;
		const fetchFolderList = async () => {
			try {
				const { data: folderList } = await getFolderList(userId);
				if (!ignore) {
					setFolderList(folderList);
				}
			} catch (err) {
				if (err instanceof Error) setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchFolderList();

		return () => {
			ignore = true;
		};
	}, [userId]);

	return { folderList, isLoading, error };
};
