import React, { useState } from 'react';
import './sign-in-page-style.css';

import {
	AuthBox,
	Footer,
	Header
} from '../../../widgets';

import {
	TextField,
	ButtonComponent,
	FormComponent,
	configChildrensForFormSignInPage,
	schemeFormSignInPage
} from '../../../shared';

import type { IDataFormSignIn } from './interafaces';

const SignInPage: React.FC = () => {
	const [dataForm] = useState<IDataFormSignIn>({
		login: '',
		password: ''
	});

	function submitFn(data: IDataFormSignIn): void {
		console.log('Отправляю данные формы для входа!', data);
	};

	return (
		<div className='sign-in'>
			<Header />
			<div className='sign-in__content'>
				<AuthBox>
					<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormSignInPage}>
						<TextField {...configChildrensForFormSignInPage.login} />
						<TextField {...configChildrensForFormSignInPage.password} />
						<ButtonComponent {...configChildrensForFormSignInPage.button} />
					</FormComponent>
				</AuthBox>
			</div>
			<Footer />
		</div>
	);
};

export { SignInPage };
