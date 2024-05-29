import type {
	ILink,
	IIcon
} from '../../../shared/core';

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
