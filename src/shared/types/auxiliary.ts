export interface IStylePadding {
	padding: string;
};

export interface IStyleBorder {
	border: string;
};

export type MyChild = React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode>;

export interface IInstanceWithKeyAndValue {
	key: string;
	value: string | boolean;
};

export interface IDataProvider {
	get: (config?: any) => Promise<any>;
	set: (data: any) => Promise<any>;
	update: (config: any) => Promise<any>;
};

interface IPayloadContextMenu {
	position?: 'index + 1';
	accessForChanges?: boolean;
};

export interface IElementContextMenu {
	button: {
		typeElement: string;
		textBtn: string;
		type: 'submit' | 'reset' | 'button';
		titleHover: string;
		classes: string;
		segmentEvent: string;
		payload: IPayloadContextMenu;
	};
	icon: {
		name: string;
		alt: string;
		titleHover: string;
	};
};

export type IConfigContextMenu = {
	title: string;
	subTitle: string;
	data: Array<IElementContextMenu>;
	icon: {
		name: string;
		alt: string;
	};
};

export interface IIcon {
	name: string;
	alt: string;
	titleHover: string;
	path?: string;
};

export type ISocialNetworkLinks = Array<IIcon>;
