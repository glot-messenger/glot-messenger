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

export interface IConfigForLinkBlock {
	text: string;
	link: ILink;
};

export interface ILightLoad {
	text: string;
};

export interface IConfigForClassicBlock {
	text: string;
	icon: IIcon;
};
