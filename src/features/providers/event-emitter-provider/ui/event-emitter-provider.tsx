import React from 'react';
import type { IEventEmitterProviderProps } from './interafaces';
import { EventEmitterContext } from '../../../../entities';

import {
	factoryMultiton,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	factoryEventEmitter
} from '../../../../shared';

const EventEmitterProvider: React.FC<IEventEmitterProviderProps> = ({ children }) => {
	const eventEmitter = factoryEventEmitter();

	if (!factoryMultiton().get(KEY_FOR_MULTITON_EVENT_EMITTER)) {
		factoryMultiton().set(KEY_FOR_MULTITON_EVENT_EMITTER, eventEmitter);
	}

	return (
		<EventEmitterContext.Provider value={eventEmitter}>
			{children}
		</EventEmitterContext.Provider>
	);
};

export { EventEmitterProvider };
