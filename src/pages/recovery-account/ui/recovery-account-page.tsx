import React, { useState } from 'react';
import './recovery-account-page-style.css';
import type { IDataFormRecoveryAccount } from './interafaces';
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

const RecoveryAccountPage: React.FC = () => {
	const [dataForm] = useState({
		login: '',
		secretPhrase: ''
	});

	const navigate = useNavigate();

	function submitFn(data: IDataFormRecoveryAccount) {
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
