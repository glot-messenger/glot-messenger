interface IIcon {
	name: string;
	alt: string;
	titleHover: string;
	path?: string;
};

interface ILink {
	text: string;
	path: string;
	titleHover: string;
};

interface ITransferToPage  {
	text: string;
	pathConfig: ILink;
};

interface ILinksBlock {
	title: string;
	data: Array<ITransferToPage>;
};


export interface IAuthBoxData {
	title: string;
	subTitle: string;
	titleHover: string;
	phrase: string;
	subPhrase: string;
	icon: IIcon;
	links: ILinksBlock;
};
