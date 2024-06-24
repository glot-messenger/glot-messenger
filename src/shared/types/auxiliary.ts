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
	update: () => Promise<any>;
};
