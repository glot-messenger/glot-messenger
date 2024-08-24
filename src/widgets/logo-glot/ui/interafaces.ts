import type {
	IIconDefault,
	IImageDefault
} from '../../../shared';

export interface ILogoGlotProps {
	columnId: string;
	_id: string;
};

interface IElementList {
	text: string;
	links: string[];
};

interface IList {
	title: string;
	elements: Array<IElementList>;
};

export interface INews {
	timeCreatedInMs: number;
	title: string;
	icon: IIconDefault;
	image: IImageDefault;
	lists: Array<IList>;
	index: number;
};
