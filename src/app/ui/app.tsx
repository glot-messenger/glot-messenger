import React, { useEffect, type MouseEventHandler } from 'react';
import './app-style.css';
import { Router } from '../../pages';

import {
	factoryMultiton,
	KEY_FOR_MULTITON_EVENT_EMITTER,
	factoryEventEmitter
} from '../../shared';

const App: React.FC = () => {
	const handlerClickApp = (event: MouseEventHandler<HTMLDivElement>) => {

	};

	useEffect(() => {
		if (!factoryMultiton().get(KEY_FOR_MULTITON_EVENT_EMITTER)) {
			const eventEmitter = factoryEventEmitter();

			factoryMultiton().set(KEY_FOR_MULTITON_EVENT_EMITTER, eventEmitter);

			eventEmitter.emit('app.click')
		}
	}, []);

	return (
		<div onClick={handlerClickApp} className='wrapper'>
			<Router />
		</div>
	);
};

export { App };
