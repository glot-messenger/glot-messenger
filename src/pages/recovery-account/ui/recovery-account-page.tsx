import React, { useState } from 'react';
import { configChildrensForFormRecoveryAccountPage } from '../config';
import { useNavigate } from 'react-router-dom';
import { AuthBox } from '../../../widgets';

import {
	FormComponent,
	TextField,
	ButtonComponent,
	schemeFormRecoveryAccountPage,
	SPACE
} from '../../../shared';

import type {
	IDataFormInOnSubmit,
	IDataFormComponent
} from '../../../shared';

const RecoveryAccountPage: React.FC = () => {
	const [dataForm] = useState<IDataFormComponent>({
		login: '',
		secretPhrase: ''
	});

	const navigate = useNavigate();

	function submitFn({ data }: IDataFormInOnSubmit) {
		console.log('Отправляю данные для восстановления пароля', data);

		navigate(SPACE);
	};

   return (
		<AuthBox>
			<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormRecoveryAccountPage}>
				<TextField {...configChildrensForFormRecoveryAccountPage.login} />
				<TextField {...configChildrensForFormRecoveryAccountPage.secretPhrase} />
				<ButtonComponent {...configChildrensForFormRecoveryAccountPage.button} />
			</FormComponent>
		</AuthBox>
   );
};

export { RecoveryAccountPage };
