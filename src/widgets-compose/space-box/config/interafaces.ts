interface IElementContextMenu {
	button: {
		typeElement: string;
		textBtn: string;
		type: 'submit' | 'reset' | 'button';
		titleHover: string;
		classes: string;
		segmentEvent: string;
	};
	icon: {
		name: string;
		alt: string;
		titleHover: string;
	};
};

export type IConfigContextMenuColumn = Array<IElementContextMenu>;
