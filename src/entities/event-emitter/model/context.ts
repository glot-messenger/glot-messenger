import { createContext } from 'react';
import { EventEmitter } from '../../../shared';

const defaultEventEmitter = {
	emit() {},
	on() {},
	once() {},
	off() {},
	_getStore() {
		const cb = () => {
			return '';
		}

		const store = new Set();

		store.add(cb);

		return store;
	},
	_hashTable: new Map()
};

export const EventEmitterContext = createContext<EventEmitter>(defaultEventEmitter);
