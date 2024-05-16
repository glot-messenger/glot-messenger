import type { ReactElement, JSXElementConstructor, ReactPortal, ReactNode } from 'react';

export interface IInstanceWithKeyAndValue {
	key: string;
	value: string;
};

export interface ITextFieldProps {
   placeholder: string;
   label: string;
   type: string;
   name: string;
	titleHover: string;
	typeElement: 'textField';
	value?: string;
   error?: string;
   isRequired?: boolean;
	onChange?: (data: IInstanceWithKeyAndValue) => void;
};

export interface IButtonComponentProps {
   textBtn: string;
   type: 'submit' | 'reset' | 'button';
   titleHover: string;
   typeElement: 'button';
};

export interface IFormComponentProps {
   children: React.ReactNode;
   data: any;
   onSubmit: (data: any) => void;
};

export type MyChild = ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | Iterable<ReactNode>;
