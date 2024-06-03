import { KEY_FOR_MULTITON_EVENT_EMITTER } from './core';
import { defaultEventEmitter } from './config';
import { EventEmitter } from './event-emitter';
import { factoryEventEmitter } from './factory-event-emitter';

export {
	KEY_FOR_MULTITON_EVENT_EMITTER,
	EventEmitter,
	factoryEventEmitter,
	defaultEventEmitter
};
