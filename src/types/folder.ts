export type Folder = {
	id: number;
	created_at: string;
	name: string;
	user_id: number;
	favorite: boolean;
	link: {
		count: number;
	};
};

export type CurrentFolder = Pick<Folder, "id" | "name">;

export type LinkInfo = {
	id: number;
	created_at: string;
	updated_at: string | null;
	url: string;
	title: string | null;
	description: string | null;
	image_source: string | null;
	folder_id: number | null;
};
