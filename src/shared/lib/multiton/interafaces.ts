import { KEY_FOR_MULTITON_VALIDATOR } from '../../lib'
import { Validator } from '../validator';

export type KeysForMultiton = typeof KEY_FOR_MULTITON_VALIDATOR;

export type InstancesForMultiton = Validator;

export interface IStoreSingletons {
	[KEY_FOR_MULTITON_VALIDATOR]?: Validator;
};

export interface IMultiton {
	storeSingletons: IStoreSingletons;
	set: (key: KeysForMultiton, instance: InstancesForMultiton) => void;
	get: (key: KeysForMultiton) => undefined | InstancesForMultiton;
	delete(key: KeysForMultiton): void;
};
