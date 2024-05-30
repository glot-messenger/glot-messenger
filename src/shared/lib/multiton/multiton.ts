import type { IMultiton } from './interafaces';

let staticMultiton: null | IMultiton = null;

class Multiton {
	storeSingletons: Map<string, unknown> = new Map();

	constructor() {
		if (staticMultiton !== null) {
			return staticMultiton;
		}

		staticMultiton = this;
	};

	set<T>(key: string, instance: T): void {
		const isSave: boolean = this.storeSingletons.has(key);

		if (!isSave) {
			this.storeSingletons.set(key, instance);
		}
	};

	get(key: string) {
		return this.storeSingletons.get(key);
	};
};

export { Multiton };
