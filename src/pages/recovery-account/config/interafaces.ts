interface IManuallyTransmittedDataForFieldsFull {
	titleHover: string;
	isRequired?: boolean;
	placeholder?: string;
	label: string;
	type: string;
	name: string;
	nameIcon: string;
	alt: string;
	description: string;
};

interface IManuallyTransmittedDataForButton {
	textBtn: string;
	type: 'submit' | 'reset' | 'button';
	titleHover: string;
	typeElement: 'button';
	classes: string;
};

type IManuallyTransmittedDataForTextFields = IManuallyTransmittedDataForFieldsFull & { typeElement: 'textField' };

export interface IManuallyTransmittedDataForFieldsFormRecoveryAccountPage {
	login: IManuallyTransmittedDataForTextFields;
	secretPhrase: IManuallyTransmittedDataForTextFields;
	button: IManuallyTransmittedDataForButton;
};