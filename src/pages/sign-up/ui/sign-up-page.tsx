import React, { useState } from 'react';
import './sign-up-page-style.css';

import {
	AuthBox,
	Footer
} from '../../../widgets';

import {
	FormComponent,
	ButtonComponent,
	TextField,
	CheckboxField,
	configChildrensForFormSignUpPage,
	schemeFormSignUpPage
} from '../../../shared';

import type { IDataFormSignUp } from './interafaces';

const SignUpPage: React.FC = () => {
	const [dataForm] = useState<IDataFormSignUp>({
		email: '',
		login: '',
		userName: '',
		password: '',
		repeatPassword: '',
		secretPhrase: '',
		acceptanceOfTermsPoliciesAndRules: false
	});

	function submitFn(data: IDataFormSignUp): void {
		console.log('Отправляю данные формы для регистрации!', data);
	};

	return (
		<div className='sign-up'>
			<div className='sign-up__content'>
				<AuthBox>
					<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormSignUpPage}>
						<TextField {...configChildrensForFormSignUpPage.email} />
						<TextField {...configChildrensForFormSignUpPage.login} />
						<TextField {...configChildrensForFormSignUpPage.userName} />
						<TextField {...configChildrensForFormSignUpPage.password} />
						<TextField {...configChildrensForFormSignUpPage.repeatPassword} />
						<TextField {...configChildrensForFormSignUpPage.secretPhrase} />
						<CheckboxField {...configChildrensForFormSignUpPage.acceptanceOfTermsPoliciesAndRules} />
						<ButtonComponent {...configChildrensForFormSignUpPage.button} />
					</FormComponent>
				</AuthBox>
			</div>
			<Footer />
		</div>
	);
};

export { SignUpPage };
