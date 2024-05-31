// core
import {
	authBoxData,
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage,
	HOME,
	AUTH,
	ALL,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	defaultAuthBoxDataCondition
} from './core';

import type { IAuthBoxData } from './core';

// lib
import {
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	factoryMultiton,
	EventEmitter
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
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage,
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
	ALL,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	defaultAuthBoxDataCondition,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	factoryMultiton,
	EventEmitter
};

export type {
	MyChild,
	IInstanceWithKeyAndValue,
	IAuthBoxData
};
