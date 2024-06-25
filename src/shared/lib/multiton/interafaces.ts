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

import {
	KEY_FOR_MULTITON_COLUMN,
	Column
} from '../column';

import {
	KEY_FOR_MULTITON_SLOT,
	Slot
} from '../slot';

export type KeysForMultiton = (typeof KEY_FOR_MULTITON_VALIDATOR) | (typeof KEY_FOR_MULTITON_EVENT_EMITTER) | (typeof KEY_FOR_MULTITON_EDITOR) | (typeof KEY_FOR_MULTITON_COLUMN) | (typeof KEY_FOR_MULTITON_SLOT);

export type InstancesForMultiton = Validator | EventEmitter | Editor | Column | Slot;

export type IStoreSingletons = {
	[K in KeysForMultiton]?: any;
};

export interface IMultiton {
	storeSingletons: IStoreSingletons;
	set: (key: KeysForMultiton, instance: InstancesForMultiton) => void;
	get: (key: KeysForMultiton) => any;
	delete(key: KeysForMultiton): void;
};
