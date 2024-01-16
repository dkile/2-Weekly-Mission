import { useUser } from "@/hooks/user/use-user";
import { useFolderListQuery } from "@/queries/use-folder-query";
import { LinkInfo } from "@/types/folder";
import { FormEvent } from "react";

interface Props {
  url: LinkInfo["url"];
  folder_id: LinkInfo["folderId"];
}

export default function FolderInsertForm({ url, folder_id }: Props) {
  const user = useUser();
  const { folderList } = useFolderListQuery(user.id);

  const handleSubmitFolderInsert = (e: FormEvent<HTMLFormElement>) => {
    console.log("hi");
  };

  return (
    <form onSubmit={handleSubmitFolderInsert}>
      <header>
        <h3>폴더에 추가</h3>
        <small>{url}</small>
      </header>
      <ul>
        {folderList.map((folder) => (
          <li key={folder.id}>
            <label>
              {folder.name}
              <span>{folder.link.count}개의 링크</span>
              <input
                type="checkbox"
                id={`${folder.id}`}
                name={folder.name}
                value={folder.id}
                defaultChecked={folder_id === folder.id}
              />
            </label>
          </li>
        ))}
      </ul>
      <button type="submit">추가하기</button>
    </form>
  );
}
