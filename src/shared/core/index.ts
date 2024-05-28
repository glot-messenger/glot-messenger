import type {
	ISchemeForForm,
	IInstanceRules
} from './schemes';

import type {
	IAuthBoxData,
	IIcon,
	ILink
} from './defaults-data';

import { defaultAuthBoxDataCondition } from './defaults-data';

import {
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage
} from './schemes';

import {
	IS_REQUIRED,
	MIN,
	MAX,
	NUMBER_REQUIRED,
	SYMBOL_REQUIRED,
	UPPER_CASE_ELEMENT_REQUIRED,
	IS_IDENTICAL
} from './names-rules';

import { authBoxData }  from './auth-box-data';
import { textFieldEyeData } from './text-field-eye-data';

import {
	HOME,
	AUTH
} from './router-paths';

import {
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
} from './router-paths-segments';

export {
	IS_REQUIRED,
	MIN,
	MAX,
	NUMBER_REQUIRED,
	SYMBOL_REQUIRED,
	UPPER_CASE_ELEMENT_REQUIRED,
	IS_IDENTICAL,
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage,
	authBoxData,
	textFieldEyeData,
	HOME,
	AUTH,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	defaultAuthBoxDataCondition
};

export type {
	ISchemeForForm,
	IInstanceRules,
	IAuthBoxData,
	IIcon,
	ILink
};
