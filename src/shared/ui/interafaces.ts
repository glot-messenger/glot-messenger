import type { ReactElement, JSXElementConstructor, ReactPortal, ReactNode } from 'react';

export interface ITextFieldProps {
   placeholder: string;
   label: string;
   type: string;
   name: string;
   error?: string;
   isRequired?: boolean;
   typeElement: 'textField';
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
