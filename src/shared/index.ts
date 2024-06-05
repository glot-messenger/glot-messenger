// core
import {
	schemeFormSignInPage,
	schemeFormSignUpPage,
	schemeFormRecoveryAccountPage,
	HOME,
	AUTH,
	ALL,
	SPACE,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	APP_EVENT_CLICK
} from './core';

// lib
import {
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	factoryMultiton,
	EventEmitter,
	defaultEventEmitter
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
	ButtonPretty,
	Loader
} from './ui';

import type {
	IDataFormInOnSubmit,
	IDataFormComponent
} from './ui';

export {
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
	Loader,
	HOME,
	AUTH,
	ALL,
	SPACE,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	factoryMultiton,
	EventEmitter,
	APP_EVENT_CLICK,
	defaultEventEmitter
};

export type {
	MyChild,
	IInstanceWithKeyAndValue,
	IDataFormInOnSubmit,
	IDataFormComponent
};
