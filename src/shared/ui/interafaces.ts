import type { IInstanceWithKeyAndValue } from '../types/auxiliary';

export interface ITextFieldProps {
	placeholder: string;
	label: string;
	type: string;
	name: string;
	titleHover: string;
	typeElement: 'textField';
	nameIcon: string;
	alt: string;
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

export interface IFormComponentProps<T = unknown> {
	children: React.ReactNode;
	data: any;
	onSubmit: (data: any) => void;
	schemeForValidator: T;
};
