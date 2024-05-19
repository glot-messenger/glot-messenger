import React from 'react';
import './app-style.css';
import { Router } from '../../pages';

const App: React.FC = () => {
	return (
		<div className='wrapper'>
			<Router />
		</div>
	);
};

export { App };
