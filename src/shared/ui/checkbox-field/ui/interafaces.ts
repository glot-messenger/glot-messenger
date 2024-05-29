import type { IInstanceWithKeyAndValue } from '../../../types';

export interface ICheckboxFieldProps {
	placeholder?: string;
	label: string;
	type?: string;
	name: string;
	titleHover: string;
	typeElement: 'checkboxField',
	nameIcon: string;
	alt: string;
	description: string;
	value?: boolean;
	error?: string;
	isRequired?: boolean;
	onChange?: (data: IInstanceWithKeyAndValue) => void;
};
