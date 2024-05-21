// config
import {
	configChildrensForFormSignInPage,
	configChildrensForFormSignUpPage,
	configChildrensForFormRecoveryAccountPage
} from './config';
// core
import {
	authBoxData,
	textFieldEyeData,
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage,
	HOME,
	AUTH,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
} from './core';
// lib
import {
	validator,
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild
} from './lib';
// types
import type {
	MyChild,
	IInstanceWithKeyAndValue
} from './types';
// ui
import {
	TextField,
	ButtonComponent,
	FormComponent,
	CheckboxField
} from './ui';

export {
	configChildrensForFormSignInPage,
	configChildrensForFormSignUpPage,
	configChildrensForFormRecoveryAccountPage,
	authBoxData,
	textFieldEyeData,
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage,
	validator,
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	TextField,
	ButtonComponent,
	FormComponent,
	CheckboxField,
	HOME,
	AUTH,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
};

export type {
	MyChild,
	IInstanceWithKeyAndValue
};
