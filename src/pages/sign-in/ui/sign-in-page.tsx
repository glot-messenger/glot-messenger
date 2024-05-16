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

	const schemeFormSignIn = {
		login: {
			isRequired: {
				message: 'Поле логин является обязательным к заполнению'
			},
			min: {
				message: 'Поле логин должно содержать не меньше 7 символов',
				value: 7
			},
			max: {
				message: 'Поле логин может содержать максимально 42 символа',
				value: 42
			}
		},
		password: {
			isRequired: {
				message: 'Поле пароль является обязательным к заполнению'
			},
			min: {
				message: 'Поле пароль должно содержать не меньше 11 символов',
				value: 11
			},
			max: {
				message: 'Поле пароль может содержать максимально 42 символа',
				value: 41
			},
			numberRequired: {
				message: 'Поле пароль должно содержать в себе хотя бы одну цифру'
			},
			symbolRequired: {
				message: 'Поле пароль должно содержать в себе хотя бы один символ: !?@#$%^&* (любой)'
			}
		}
	};

	return (
		<div className='sign-in'>
			<div className='sign-in__content'>
				<AuthBox>
					<FormComponent onSubmit={submitFn} data={dataForm}>
						<TextField titleHover='Поле ввода логина' typeElement='textField' isRequired={true} placeholder='Введите логин' label='Логин:' type='text' name='login' />
						<TextField titleHover='Поле ввода пароля' typeElement='textField' isRequired={true} placeholder='Введите пароль' label='Пароль:' type='password' name='password' />
						<ButtonComponent typeElement='button' textBtn='Вход' type='submit' titleHover='Нажмите, чтобы отправить заполненные данные и войти в приложение.' />
					</FormComponent>
				</AuthBox>
			</div>
		</div>
	);
};

export { SignInPage };
