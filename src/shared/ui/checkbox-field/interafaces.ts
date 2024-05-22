import type { IInstanceWithKeyAndValue } from '../../types';

export interface ICheckboxFieldProps {
	label: string;
	name: string;
	titleHover: string;
	typeElement: 'checkboxField',
	description: string;
	error?: string;
	isRequired?: boolean;
	onChange?: (data: IInstanceWithKeyAndValue) => void;
	value?: boolean;
};
