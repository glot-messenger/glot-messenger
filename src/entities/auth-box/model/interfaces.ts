interface IIcon {
	name: string;
	alt: string;
	titleHover: string;
	path: string;
};

export interface IAuthBoxData {
	title: string;
	subTitle: string;
	titleHover: string;
	phrase: string;
	subPhrase: string;
	icon: IIcon;
};