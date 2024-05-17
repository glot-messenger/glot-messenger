import React, { useState } from 'react';
import './sign-in-page-style.css';
import { AuthBox } from '../../../widgets/auth-box';
import {
	TextField,
	ButtonComponent,
	FormComponent,
	configChildrensForFormSignInPage,
	schemeFormSignInPage
} from '../../../shared';

interface IDataFormSignIn {
	login: string;
	password: string;
}

const SignInPage: React.FC = () => {
	const [dataForm] = useState<IDataFormSignIn>({
		login: '',
		password: ''
	});

	function submitFn(data: IDataFormSignIn): void {
		console.log('Отправляю данные формы', data);
	};

	return (
		<div className='sign-in'>
			<div className='sign-in__content'>
				<AuthBox>
					<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormSignInPage}>
						<TextField {...configChildrensForFormSignInPage.login} />
						<TextField {...configChildrensForFormSignInPage.password} />
						<ButtonComponent {...configChildrensForFormSignInPage.button} />
					</FormComponent>
				</AuthBox>
			</div>
		</div>
	);
};

export { SignInPage };
