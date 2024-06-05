import React, { useState } from 'react';
import { configChildrensForFormSignUpPage } from '../config';
import { useNavigate } from 'react-router-dom';
import { AuthBox } from '../../../widgets';

import {
	FormComponent,
	ButtonComponent,
	TextField,
	CheckboxField,
	schemeFormSignUpPage,
	SPACE
} from '../../../shared';

import type {
	IDataFormInOnSubmit,
	IDataFormComponent
} from '../../../shared';

const SignUpPage: React.FC = () => {
	const [dataForm] = useState<IDataFormComponent>({
		login: '',
		userName: '',
		password: '',
		repeatPassword: '',
		secretPhrase: '',
		acceptanceOfTermsPoliciesAndRules: false
	});

	const navigate = useNavigate();

	function submitFn({ data }: IDataFormInOnSubmit): void {
		console.log('Отправляю данные формы для регистрации!', data);

		navigate(SPACE);
	};

	return (
		<AuthBox>
			<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormSignUpPage}>
				<TextField {...configChildrensForFormSignUpPage.login} />
				<TextField {...configChildrensForFormSignUpPage.userName} />
				<TextField {...configChildrensForFormSignUpPage.password} />
				<TextField {...configChildrensForFormSignUpPage.repeatPassword} />
				<TextField {...configChildrensForFormSignUpPage.secretPhrase} />
				<CheckboxField {...configChildrensForFormSignUpPage.acceptanceOfTermsPoliciesAndRules} />
				<ButtonComponent {...configChildrensForFormSignUpPage.button} />
			</FormComponent>
		</AuthBox>
	);
};

export { SignUpPage };
