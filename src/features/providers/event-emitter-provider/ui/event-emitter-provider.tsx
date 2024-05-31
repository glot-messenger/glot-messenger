import React from 'react';
import type { IEventEmitterProviderProps } from './interafaces';
import { EventEmitterContext } from '../../../../entities';

import {
	factoryMultiton,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	factoryEventEmitter
} from '../../../../shared';

const EventEmitterProvider: React.FC<IEventEmitterProviderProps> = ({ children }) => {
	return (
		<EventEmitterContext.Provider value={}>
			{children}
		</EventEmitterContext.Provider>
	);
};

export { EventEmitterProvider };
