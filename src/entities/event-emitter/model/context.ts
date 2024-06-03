import { createContext } from 'react';

import {
	EventEmitter,
	defaultEventEmitter
} from '../../../shared';

export const EventEmitterContext = createContext<EventEmitter>(defaultEventEmitter);
