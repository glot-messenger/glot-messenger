export type FN = (args: any) => void;

export interface IEventEmitter<T = unknown> {
	_getStore(eventName: string): Set<FN>;
	emit(eventName: string, payload?: T): void;
	on(eventName: string, handler: FN): void;
	once(): void;
	off(eventName?: string, handler?: FN): void;
	_hashTable: Map<string, Set<FN>>;
};
