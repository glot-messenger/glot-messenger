import type {
	ISchemeForForm,
	IInstanceRules
} from './schemes';

import { schemeFormSignInPage } from './schemes';

import {
	IS_REQUIRED,
	MIN,
	MAX,
	NUMBER_REQUIRED,
	SYMBOL_REQUIRED,
	UPPER_CASE_ELEMENT_REQUIRED
} from './names-rules';

import authBoxData  from './auth-box-data.json';
import textFieldEyeData from './text-field-eye-data.json';

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
	schemeFormSignInPage,
	authBoxData,
	textFieldEyeData,
	HOME,
	AUTH,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
};

export type {
	ISchemeForForm,
	IInstanceRules
};
