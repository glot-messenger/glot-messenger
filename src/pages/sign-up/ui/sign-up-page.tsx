import React, { useState } from 'react';
import './sign-up-page-style.css';
import { AuthBox } from '../../../widgets';

import {
	FormComponent,
	TextField,
	configChildrensForFormSignUpPage,
	schemeFormSignUpPage
} from '../../../shared';

import type { IDataFormSignUp } from './interafaces';

const SignUpPage: React.FC = () => {
	const [dataForm] = useState<IDataFormSignUp>({
		login: '',
		password: ''
	});

	function submitFn(data: IDataFormSignUp): void {
		console.log('Отправляю данные формы для регистрации!', data);
	};

	return (
		<div className='sign-up'>
			<div className='sign-up__content'>
				<AuthBox>
					<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormSignUpPage}>
						<TextField {...configChildrensForFormSignUpPage.login} />
						<TextField {...configChildrensForFormSignUpPage.password} />
					</FormComponent>
				</AuthBox>
			</div>
		</div>
	);
};

export { SignUpPage };
