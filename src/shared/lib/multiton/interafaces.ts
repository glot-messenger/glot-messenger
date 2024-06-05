import {
	Validator,
	KEY_FOR_MULTITON_VALIDATOR
} from '../validator';

import {
	EventEmitter,
	KEY_FOR_MULTITON_EVENT_EMITTER
} from '../event-emitter';

import {
	KEY_FOR_MULTITON_EDITOR,
	Editor
} from '../editor';

export type KeysForMultiton = (typeof KEY_FOR_MULTITON_VALIDATOR) | (typeof KEY_FOR_MULTITON_EVENT_EMITTER) | (typeof KEY_FOR_MULTITON_EDITOR);

export type InstancesForMultiton = Validator | EventEmitter | Editor;

export type IStoreSingletons = {
	[K in KeysForMultiton]?: any;
};

export interface IMultiton {
	storeSingletons: IStoreSingletons;
	set: (key: KeysForMultiton, instance: InstancesForMultiton) => void;
	get: (key: KeysForMultiton) => any;
	delete(key: KeysForMultiton): void;
};
