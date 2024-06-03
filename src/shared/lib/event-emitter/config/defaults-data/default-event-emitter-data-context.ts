const defaultEventEmitter = {
	emit() {},
	on() {},
	once() {},
	off() {},
	_getStore() {
		const cb = () => {
			return '';
		}

		const store = new Set<typeof cb>();

		store.add(cb);

		return store;
	},
	_hashTable: new Map()
};

export { defaultEventEmitter };
