import {
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	getUniqueId
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

import {
	factoryEditor,
	KEY_FOR_MULTITON_EDITOR
} from './editor';

export {
	KEY_FOR_MULTITON_VALIDATOR,
	KEY_FOR_MULTITON_EDITOR,
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	factoryMultiton,
	factoryValidator,
	factoryEventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	EventEmitter,
	defaultEventEmitter,
	Validator,
	factoryEditor,
	getUniqueId
};
