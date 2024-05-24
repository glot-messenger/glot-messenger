import type { IIcon } from "../core";

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
};

export interface IConfigForClassicBlock {
	text: string;
	icon: IIcon;
};

type IManuallyTransmittedDataForTextFields = IManuallyTransmittedDataForFieldsFull & { typeElement: 'textField' };

type IManuallyTransmittedDataForCheckboxFields = IManuallyTransmittedDataForFieldsFull & { typeElement: 'checkboxField' };

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
	acceptanceOfTermsPoliciesAndRules: IManuallyTransmittedDataForCheckboxFields;
	button: IManuallyTransmittedDataForButton;
};

export interface IManuallyTransmittedDataForFieldsFormRecoveryAccountPage {
	email: IManuallyTransmittedDataForTextFields;
	login: IManuallyTransmittedDataForTextFields;
	secretPhrase: IManuallyTransmittedDataForTextFields;
	button: IManuallyTransmittedDataForButton;
};
