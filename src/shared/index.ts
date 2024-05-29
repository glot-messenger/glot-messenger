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
	SIGN_UP_SEGMENT,
	defaultAuthBoxDataCondition
} from './core';

import type { IAuthBoxData } from './core';

// lib
import {
	factoryValidator,
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
	CheckboxField,
	GroupLinks,
	LinkElement,
	HrElement,
	Logo,
	JoinSocialNetwork,
	ButtonPretty
} from './ui';

export {
	authBoxData,
	textFieldEyeData,
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage,
	factoryValidator,
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	TextField,
	ButtonComponent,
	FormComponent,
	CheckboxField,
	GroupLinks,
	LinkElement,
	HrElement,
	Logo,
	JoinSocialNetwork,
	ButtonPretty,
	HOME,
	AUTH,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	defaultAuthBoxDataCondition
};

export type {
	MyChild,
	IInstanceWithKeyAndValue,
	IAuthBoxData
};
