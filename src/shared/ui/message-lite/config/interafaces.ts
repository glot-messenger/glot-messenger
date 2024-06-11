interface IIcon {
	name: string;
	alt: string;
	titleHover: string;
	path?: string;
};

export interface IConfigForMessageLite {
	icon: IIcon;
};
