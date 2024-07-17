import React from 'react';
import './index-style.css';
import type { ILoyoutProps } from './interafaces';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import { HomePage } from './home';
import { AuthPage } from './auth';
import { RecoveryAccountPage } from './recovery-account';
import { SignInPage } from './sign-in';
import { SignUpPage } from './sign-up';
import { NotFoundPage } from './not-found';
import { SpacePage } from './space';

import {
	AuthBoxConditionProvider,
	EditorProvider,
	GlobalEditorSettings
} from '../features';

import {
	HOME,
	AUTH,
	ALL,
	SPACE,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
} from '../shared';

import {
	Header,
	Footer
} from '../widgets';

// Шаблон для всех страниц, кроме самого редактора мессенджера
const Layout: React.FC<ILoyoutProps> = ({ children }) => {
	return (
		<div className='page'>
			<Header />
			<div className='page__content'>
				{children}
			</div>
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: HOME,
		element: (
			<Layout>
				<HomePage />
			</Layout>
		)
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
				element: (
					<Layout>
						<RecoveryAccountPage />
					</Layout>
				)
			},
			{
				path: SIGN_IN_SEGMENT,
				element: (
					<Layout>
						<SignInPage />
					</Layout>
				)
			},
			{
				path: SIGN_UP_SEGMENT,
				element: (
					<Layout>
						<SignUpPage />
					</Layout>
				)
			}
		]
	},
	{// Route уже самого редактора мессенджера 
		path: SPACE,
		element: (
			// <EditorProvider>
			// </EditorProvider>
			<GlobalEditorSettings>
				<SpacePage />
			</GlobalEditorSettings>
		)
	},
	{
		path: ALL,
		element: (
			<Layout>
				<NotFoundPage />
			</Layout>
		)
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