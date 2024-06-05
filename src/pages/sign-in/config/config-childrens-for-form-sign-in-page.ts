import type { IManuallyTransmittedDataForFieldsFormSignInPage } from './interafaces';

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
		alt: 'Иконка пользователя с ключиком.',
		description: 'Ваш уникальный и оригинальный логин'
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
		alt: 'Иконка ключа.',
		description: 'Ваш суперсложный пароль'
	},
	button: {
		typeElement: 'button',
		textBtn: 'Вход',
		type: 'submit',
		titleHover: 'Нажмите, чтобы отправить заполненные данные и войти в приложение.',
		classes: 'page__btn'
	}
};

export { configChildrensForFormSignInPage };