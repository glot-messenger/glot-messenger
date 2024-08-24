import type { IIconDefault } from "../../../shared";

export interface IConfigLogoGlot {
	button: {
		type: 'submit' | 'reset' | 'button';
		titleHover: string;
	};
	icon: {
		name: string;
		alt: string;
	};
};

export interface IConfigLogoGlotBtnArrows {
	button: {
		typeElement: 'button';
		type: 'submit' | 'reset' | 'button';
		titleHover: string;
		classes: string;
		segmentEvent: string;
	};
};

export interface IConfigSocialNetworkBlock {
	title: string;
	subTitle: string;
	text: string;
	icon: {
		name: string;
		alt: string;
	}
};

interface ILabel {
	text: string;
	icon: IIconDefault;
	color: string;
};

interface ILabelsPack {
	'0': ILabel;
	'1': ILabel;
	'2': ILabel;
};

export interface IConfigWhatsNewBlock {
	title: string;
	labels: ILabelsPack;
};

export interface IConfigFeaturesBlock {
	title: string;
	data: Array<{ _id: string; text: string; classes: 'blue' | 'green' | 'yellow' | 'violet' | 'gray' | 'red' }>
};

export interface IConfigSignatureBlock {
	text: string;
	infoAuthor: string;
	icon: {
		name: string;
		alt: string;
	};
};

export interface IConfigSocialNetworkWhatsNew {
	title: string;
};
