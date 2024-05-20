import type {
	IManuallyTransmittedDataForFieldsFormSignInPage,
	IManuallyTransmittedDataForFieldsFormSignUpPage
} from './interafaces';

const configChildrensForFormSignInPage: IManuallyTransmittedDataForFieldsFormSignInPage = {
	login: {
		titleHover: 'Поле ввода логина',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Введите логин',
		label: 'Логин:',
		type: 'text',
		name: 'login',
		nameIcon: 'login.svg',
		alt: 'Иконка пользователя с ключиком.'
	},
	password: {
		titleHover: 'Поле ввода пароля',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Введите пароль',
		label: 'Пароль:',
		type: 'password',
		name: 'password',
		nameIcon: 'password-key.svg',
		alt: 'Иконка ключа.'
	},
	button: {
		typeElement: 'button',
		textBtn: 'Вход',
		type: 'submit',
		titleHover: 'Нажмите, чтобы отправить заполненные данные и войти в приложение.'
	}
};

const configChildrensForFormSignUpPage: IManuallyTransmittedDataForFieldsFormSignUpPage = {
	login: {
		titleHover: 'Поле ввода логина',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Введите логин',
		label: 'Логин:',
		type: 'text',
		name: 'login',
		nameIcon: 'login.svg',
		alt: 'Иконка пользователя с ключиком.'
	},
	password: {
		titleHover: 'Поле ввода пароля',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Введите пароль',
		label: 'Пароль:',
		type: 'password',
		name: 'password',
		nameIcon: 'password-key.svg',
		alt: 'Иконка ключа.'
	},
	button: {
		typeElement: 'button',
		textBtn: 'Вход',
		type: 'submit',
		titleHover: 'Нажмите, чтобы отправить заполненные данные и войти в приложение.'
	}
};

export {
	configChildrensForFormSignInPage,
	configChildrensForFormSignUpPage
};
