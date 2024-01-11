export type Folder = {
  id: number;
  createdAt: string;
  name: string;
  userId: number;
  favorite: boolean;
  link: {
    count: number;
  };
};

export type CurrentFolder = Pick<Folder, "id" | "name">;

export type LinkInfo = {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  url: string;
  title: string | null;
  description: string | null;
  imageSource: string | null;
  folderId: number | null;
};
