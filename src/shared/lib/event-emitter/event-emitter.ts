export type FN = (args: any) => void;

// Singleton
let staticEventEmitter: null | EventEmitter = null;

class EventEmitter<T = unknown> {
	_hashTable = new Map();

	constructor() {
		if (staticEventEmitter !== null) {
			return staticEventEmitter;
		}

		staticEventEmitter = this;
	};

	_getStore(eventName: string): Set<FN> {
		// Если в hashTable нет стора для определенных событий, то мы создаем его и возвращаем
		let store = this._hashTable.get(eventName);

		if (store === null || store === undefined) {
			store = new Set();

			this._hashTable.set(eventName, store);
		}

		return store;
	};

	emit(eventName: string, payload?: T): void {
		const store = this._getStore(eventName);

		store.forEach((dataActive) => {
			dataActive(payload);
		});
	};

	on(eventName: string, handler: FN): void {
		const store = this._getStore(eventName);

		// Записываем дополнительный обработчик в хранилище конкретного события
		store.add(handler);
	};

	once() {
		// ЛОГИКА ОДНОРАЗОВОГО ВЫЗОВА
	};

	off(eventName?: string, handler?: FN): void {
		// Если ничего не передается в EventEmitter, то он полностью вычищается
		if (eventName === undefined || eventName === null) {
			this._hashTable.clear();

			return;
		}

		// Если функция не была передана, но было передано имя store с events, то удаляем этот конкретный store
		if (handler === undefined || handler === null) {
			this._hashTable.delete(eventName);

			return;
		}

		// Если имя события и обработчик были переданы, то удаляем конкретный обработчик из store
		const store = this._getStore(eventName);

		store.delete(handler);
	};
};

export { EventEmitter };
