import type { IInstanceWithKeyAndValue } from '../../types';

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
