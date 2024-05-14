import React from 'react';
import './sign-in-page-style.css';
import { AuthBox } from '../../../widgets/auth-box';

const SignInPage: React.FC = () => {
	return (
		<div className='sign-in'>
			<div className='sign-in__content'>
				<AuthBox>
					<form></form>
				</AuthBox>
			</div>
		</div>
	);
};

export { SignInPage };