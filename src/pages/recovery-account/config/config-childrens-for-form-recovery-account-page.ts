import type { IManuallyTransmittedDataForFieldsFormRecoveryAccountPage } from './interafaces';

const configChildrensForFormRecoveryAccountPage: IManuallyTransmittedDataForFieldsFormRecoveryAccountPage = {
	login: {
		titleHover: 'Поле для заполнения логина',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Укажите свой логин',
		label: 'Логин:',
		type: 'text',
		name: 'login',
		nameIcon: 'login.svg',
		alt: 'Иконка пользователя с ключиком.',
		description: 'Используем эти данные для сверки, что вы - это вы'
	},
	secretPhrase: {
		titleHover: 'Поле для ввода вашей секретной фразы.',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Укажите секретную фразу',
		label: 'Секретная фраза:',
		type: 'text',
		name: 'secretPhrase',
		nameIcon: 'secret-phrase.svg',
		alt: 'Щит символизирующий секретность, с галочкой по середине.',
		description: 'Как мы и говорили, эти данные нужны для восстановления пароля'
	},
	button: {
		typeElement: 'button',
		textBtn: 'Восстановить',
		type: 'submit',
		titleHover: 'Нажмите, чтобы восстановить пароль от своей учетной записи.',
		classes: 'page__btn'
	}
};

export { configChildrensForFormRecoveryAccountPage };
