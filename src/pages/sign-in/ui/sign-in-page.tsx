import React, { useState } from 'react';
import './sign-in-page-style.css';
import { configChildrensForFormSignInPage } from '../config';
import type { IDataFormSignIn } from './interafaces';
import { useNavigate } from 'react-router-dom';
import { AuthBox } from '../../../widgets';

import {
	TextField,
	ButtonComponent,
	FormComponent,
	schemeFormSignInPage,
	SPACE
} from '../../../shared';

const SignInPage: React.FC = () => {
	const [dataForm] = useState<IDataFormSignIn>({
		login: '',
		password: ''
	});

	const navigate = useNavigate();

	function submitFn(data: IDataFormSignIn): void {
		console.log('Отправляю данные формы для входа!', data);

		navigate(SPACE);
	};

	return (
		<AuthBox>
			<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormSignInPage}>
				<TextField {...configChildrensForFormSignInPage.login} />
				<TextField {...configChildrensForFormSignInPage.password} />
				<ButtonComponent {...configChildrensForFormSignInPage.button} />
			</FormComponent>
		</AuthBox>
	);
};

export { SignInPage };
