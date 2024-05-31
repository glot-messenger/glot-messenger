import type {
	IStoreSingletons,
	KeysForMultiton,
	InstancesForMultiton,
	IMultiton
} from './interafaces';

// Multiton сам является Singleton, но для своих инстансов он Multiton
let staticMultiton: null | Multiton = null;

class Multiton implements IMultiton {
	storeSingletons: IStoreSingletons = {};

	constructor() {
		if (staticMultiton !== null) {
			return staticMultiton;
		}

		staticMultiton = this;
	};

	set(key: KeysForMultiton, singleton: InstancesForMultiton): void {
		const isSave = this.storeSingletons[key];

		if (!isSave) {
			this.storeSingletons[key] = singleton;
		}
	};

	get(key: KeysForMultiton): any {
		const singleton = this.storeSingletons[key];

		if (!singleton) {
			return undefined;
		}

		return singleton;
	};

	delete(key: KeysForMultiton): void {
		delete this.storeSingletons[key];
	};
};

export { Multiton };
