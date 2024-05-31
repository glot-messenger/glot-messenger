import { EventEmitter } from './event-emitter';

function factoryEventEmitter(): EventEmitter {
	return new EventEmitter();
};

export { factoryEventEmitter };
