import React from 'react';
import { App } from './app';
import { EventEmitterProvider } from '../../features';

const AppSuperstructure: React.FC = () => {
	return (
		<EventEmitterProvider>
			<App />
		</EventEmitterProvider>
	);
};

export { AppSuperstructure };
