import type {
	ISchemeForForm,
	IInstanceRules
} from './schemes';

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

import {
	APP_EVENT_CLICK,
	BUTTON_LOCK_EVENT_CLICK,
	BUTTON_DOTS_EVENT_CLICK,
	MODAL_EMPTY_SPACE_EVENT_CLICK
} from './event-emitter-events';

import {
	COLUMN_EVENT_SEGMENT,
	SLOT_EVENT_SEGMENT
} from './event-emitter-segments-events';

import {
	HOME,
	AUTH,
	ALL,
	SPACE
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
	HOME,
	AUTH,
	ALL,
	SPACE,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT,
	APP_EVENT_CLICK,
	BUTTON_LOCK_EVENT_CLICK,
	COLUMN_EVENT_SEGMENT,
	BUTTON_DOTS_EVENT_CLICK,
	SLOT_EVENT_SEGMENT,
	MODAL_EMPTY_SPACE_EVENT_CLICK
};

export type {
	ISchemeForForm,
	IInstanceRules
};
