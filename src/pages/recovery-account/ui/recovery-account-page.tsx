import React, { useState } from 'react';
import './recovery-account-page-style.css';
import type { IDataFormRecoveryAccount } from './interafaces';
import { AuthBox } from '../../../widgets';

import {
	FormComponent,
	TextField,
	ButtonComponent,
	configChildrensForFormRecoveryAccountPage,
	schemeFormRecoveryAccountPage
} from '../../../shared';

const RecoveryAccountPage: React.FC = () => {
	const [dataForm] = useState({
		email: '',
		login: '',
		secretPhrase: ''
	});

	function submitFn(data: IDataFormRecoveryAccount) {
		console.log('Отправляю данные для восстановления пароля', data);
	};

   return (
      <div className='recovery-account'>
			<div className='recovery-account__content'>
				<AuthBox>
					<FormComponent onSubmit={submitFn} data={dataForm} schemeForValidator={schemeFormRecoveryAccountPage}>
						<TextField {...configChildrensForFormRecoveryAccountPage.email} />
						<TextField {...configChildrensForFormRecoveryAccountPage.login} />
						<TextField {...configChildrensForFormRecoveryAccountPage.secretPhrase} />
						<ButtonComponent {...configChildrensForFormRecoveryAccountPage.button} />
					</FormComponent>
				</AuthBox>
			</div>
		</div>
   );
};

export { RecoveryAccountPage };
