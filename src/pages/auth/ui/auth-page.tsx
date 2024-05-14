import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthPage: React.FC = () => {
	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	);
};

export { AuthPage };