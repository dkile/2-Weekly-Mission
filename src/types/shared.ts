export type Folder = {
	id: number;
	name: string;
	owner: Owner;
	links: LinkInfo[];
	count: number;
};

export type LinkInfo = {
	id: number;
	createdAt: string;
	url: string;
	title: string | null;
	description: string | null;
	imageSource?: string;
};

export type Owner = {
	id: number;
	name: string;
	profileImageSource: string | null;
};
