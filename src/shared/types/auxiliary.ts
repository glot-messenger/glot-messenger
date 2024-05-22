import type { ReactElement, JSXElementConstructor, ReactPortal, ReactNode } from 'react';

export interface IStylePadding {
	padding: string;
};

export interface IStyleBorder {
	border: string;
};

export type MyChild = ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | Iterable<ReactNode>;

export interface IInstanceWithKeyAndValue {
	key: string;
	value: string | boolean;
};
