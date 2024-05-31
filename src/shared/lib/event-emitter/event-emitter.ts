// Singleton
let staticEventEmitter: null | EventEmitter = null;

class EventEmitter {
	constructor() {
		if (staticEventEmitter !== null) {
			return staticEventEmitter;
		}

		staticEventEmitter = this;
	};

	
};