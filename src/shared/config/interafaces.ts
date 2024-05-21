interface IManuallyTransmittedDataForFields {
	titleHover: string;
	isRequired?: boolean;
	placeholder: string;
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
};

type IManuallyTransmittedDataForTextFields = IManuallyTransmittedDataForFields & { typeElement: 'textField' };

export interface IManuallyTransmittedDataForFieldsFormSignInPage {
	login: IManuallyTransmittedDataForTextFields;
	password: IManuallyTransmittedDataForTextFields;
	button: IManuallyTransmittedDataForButton;
};

export interface IManuallyTransmittedDataForFieldsFormSignUpPage {
	email: IManuallyTransmittedDataForTextFields;
	login: IManuallyTransmittedDataForTextFields;
	userName: IManuallyTransmittedDataForTextFields;
	password: IManuallyTransmittedDataForTextFields;
	repeatPassword: IManuallyTransmittedDataForTextFields;
	secretPhrase: IManuallyTransmittedDataForTextFields;
	button: IManuallyTransmittedDataForButton;
};

export interface IManuallyTransmittedDataForFieldsFormRecoveryAccountPage {
	email: IManuallyTransmittedDataForTextFields;
	login: IManuallyTransmittedDataForTextFields;
	secretPhrase: IManuallyTransmittedDataForTextFields;
	button: IManuallyTransmittedDataForButton;
};
