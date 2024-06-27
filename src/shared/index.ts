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
	APP_EVENT_CLICK,
	COLUMN_EVENT_SEGMENT,
	BUTTON_LOCK_EVENT_CLICK
} from './core';

// lib
import {
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	KEY_FOR_MULTITON_EDITOR,
	KEY_FOR_MULTITON_COLUMN,
	KEY_FOR_MULTITON_SLOT,
	factoryMultiton,
	EventEmitter,
	defaultEventEmitter,
	factoryEditor,
	factoryColumn,
	factorySlot
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
	Loader,
	Loader2,
	MessageLite,
	SlotEmpty,
	ButtonDots,
	ButtonLock,
	ButtonPlus
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
	Loader2,
	MessageLite,
	HOME,
	AUTH,
	ALL,
	SPACE,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	KEY_FOR_MULTITON_EDITOR,
	KEY_FOR_MULTITON_COLUMN,
	KEY_FOR_MULTITON_SLOT,
	factoryMultiton,
	EventEmitter,
	APP_EVENT_CLICK,
	defaultEventEmitter,
	factoryEditor,
	factoryColumn,
	factorySlot,
	SlotEmpty,
	ButtonDots,
	ButtonLock,
	ButtonPlus,
	COLUMN_EVENT_SEGMENT,
	BUTTON_LOCK_EVENT_CLICK
};

export type {
	MyChild,
	IInstanceWithKeyAndValue,
	IDataFormInOnSubmit,
	IDataFormComponent
};
