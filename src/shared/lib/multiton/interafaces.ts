import {
	Validator,
	KEY_FOR_MULTITON_VALIDATOR
} from '../validator';

import {
	EventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER
} from '../event-emitter';


export type KeysForMultiton = (typeof KEY_FOR_MULTITON_VALIDATOR) | (typeof KEY_FOR_MULTITON_EVENT_EMITTER);

export type InstancesForMultiton = Validator | EventEmitter;

export type IStoreSingletons = {
	[K in KeysForMultiton]?: any;
};

export interface IMultiton {
	storeSingletons: IStoreSingletons;
	set: (key: KeysForMultiton, instance: InstancesForMultiton) => void;
	get: (key: KeysForMultiton) => any;
	delete(key: KeysForMultiton): void;
};
