import React from 'react';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import { HomePage } from './home';
import { AuthPage } from './auth';
import { RecoveryAccountPage } from './recovery-account';
import { SignInPage } from './sign-in';
import { SignUpPage } from './sign-up';
import { AuthBoxConditionProvider } from '../features';

import {
	HOME,
	AUTH,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
} from '../shared';

const router = createBrowserRouter([
	{
		path: HOME,
		element: <HomePage />
	},
	{
		path: AUTH,
		element: (
			<AuthBoxConditionProvider>
				<AuthPage />
			</AuthBoxConditionProvider>
		),
		children: [
			{
				path: RECOVERY_ACCOUNT_SEGMENT,
				element: <RecoveryAccountPage />
			},
			{
				path: SIGN_IN_SEGMENT,
				element: <SignInPage />
			},
			{
				path: SIGN_UP_SEGMENT,
				element: <SignUpPage />
			}
		]
	}
]);

const Router: React.FC = () => {
	return (
		<React.Fragment>
			<RouterProvider router={router} />
		</React.Fragment>
	);
};

export { Router };