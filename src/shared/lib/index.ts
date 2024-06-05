import {
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild
} from './utils';

import {
	KEY_FOR_MULTITON_VALIDATOR,
	factoryValidator,
	Validator
} from './validator';

import { factoryMultiton } from './multiton';

import {
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	EventEmitter,
	defaultEventEmitter
} from './event-emitter';

export {
	KEY_FOR_MULTITON_VALIDATOR,
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	factoryMultiton,
	factoryValidator,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	EventEmitter,
	defaultEventEmitter,
	Validator
};
