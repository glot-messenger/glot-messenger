interface IElementData {
	link: {
		titleHover: string;
		path: string;
	},
	btn: {
		typeBtn: string;
		icon: {
			name: string;
			alt: string;
		},
		text: string;
	}
};

export interface IConfigForHomePageDrawData {
	title: {
		first: string;
		second: string;
	},
	subTitle: string;
	data: Array<IElementData>;
};
