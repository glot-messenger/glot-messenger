import React, { useState } from 'react';
import './sign-in-page-style.css';
import { AuthBox } from '../../../widgets/auth-box';
import { TextField, ButtonComponent, FormComponent } from '../../../shared';

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
					<FormComponent onSubmit={submitFn} data={dataForm}>
						<TextField typeElement='textField' isRequired={true} placeholder='Введите логин' label='Логин:' type='text' name='login' error='Поле логин обязательно к заполнению' />
						<TextField typeElement='textField' isRequired={true} placeholder='Введите пароль' label='Пароль:' type='text' name='password' error='Поле пароль обязательно к заполнению' />
						<ButtonComponent typeElement='button' textBtn='Вход' type='submit' titleHover='Нажмите, чтобы отправить заполненные данные и войти в приложение.' />
						<button type='button'>Войти кнопка</button>
					</FormComponent>
				</AuthBox>
			</div>
		</div>
	);
};

export { SignInPage };