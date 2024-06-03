import React, { useContext } from 'react';
import './app-style.css';
import { Router } from '../../pages';
import { EventEmitterContext } from '../../entities';
import { APP_EVENT_CLICK } from '../../shared';

const App: React.FC = () => {
	const eventEmitter = useContext(EventEmitterContext);

	const handlerClickApp = (event: React.MouseEvent<HTMLElement>): void => {
		eventEmitter.emit(APP_EVENT_CLICK, event.target);
	};

	return (
		<div onClick={handlerClickApp} className='wrapper'>
			<Router />
		</div>
	);
};

export { App };
