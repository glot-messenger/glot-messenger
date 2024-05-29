import type { IManuallyTransmittedDataForFieldsFormSignUpPage } from './interafaces';

const configChildrensForFormSignUpPage: IManuallyTransmittedDataForFieldsFormSignUpPage = {
	login: {
		titleHover: 'Поле для заполнения логина',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Придумайте логин',
		label: 'Логин:',
		type: 'text',
		name: 'login',
		nameIcon: 'login.svg',
		alt: 'Иконка пользователя с ключиком.',
		description: 'Логин нигде не отображается в чатах, будьте спокойны. Логин также используется для восстановления пароля.'
	},
	userName: {
		titleHover: 'Поле для заполнения имени пользователя',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Укажите имя пользователя',
		label: 'Имя пользователя:',
		type: 'text',
		name: 'userName',
		nameIcon: 'user.svg',
		alt: 'Иконка пользователя.',
		description: 'Это имя мы используем, когда обращаемся к вам внутри сервиса. Также оно берется по умолчанию, когда вы только (в первый раз) попадаете в канал. Для каждого канала имя пользователя можно переменить.'
	},
	password: {
		titleHover: 'Поле для заполнения пароля',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Придумайте пароль',
		label: 'Пароль:',
		type: 'password',
		name: 'password',
		nameIcon: 'password-key.svg',
		alt: 'Иконка ключа.',
		description: 'Очень важное поле, придумайте что-то сложное'
	},
	repeatPassword: {
		titleHover: 'Поле для повторного заполнения пароля',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Повторите пароль',
		label: 'Пароль для сверки:',
		type: 'password',
		name: 'repeatPassword',
		nameIcon: 'repeat-password.svg',
		alt: 'Иконка сопоставления двух строчек пароля: звездочки и обычные прочерки.',
		description: 'Это поле вы заполняете больше для своего самоконтроля'
	},
	secretPhrase: {
		titleHover: 'Поле для ввода секретной фразы. Очень важное поле: отнеситесь к его заполнению благоразумно. Придумайте что-то максимально неординарное и уникальное. Чем абсурднее фраза, тем лучше)',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Придумайте секретную фразу, которую не сможет разгадать даже AI',
		label: 'Секретная фраза:',
		type: 'text',
		name: 'secretPhrase',
		nameIcon: 'secret-phrase.svg',
		alt: 'Щит символизирующий секретность, с галочкой по середине.',
		description: 'В случае, если вы забудете пароль, это поле вам поможет. Пробелы учитываются! Пример: "Жмых затравил неподатливую змею своим средневековым красным жмыхом и получил удовольствие!!!" Чем абсурднее фраза, тем лучше. ОЧЕНЬ ВАЖНОЕ ПОЛЕ'
	},
	acceptanceOfTermsPoliciesAndRules: {
		titleHover: 'Нажмите, чтобы согласиться с условиями компании для нашего совместного взаимодействия с вами.',
		typeElement: 'checkboxField',
		isRequired: true,
		label: 'Регистрируясь, вы соглашаетесь с Условиями Использования, Политикой Конфиденциальности и Правилами сайта.',
		name: 'acceptanceOfTermsPoliciesAndRules',
		description: 'Пользовательское соглашение',
		nameIcon: 'check.svg',
		alt: 'Иконка галочки',
		type: 'checkbox'
	},
	button: {
		typeElement: 'button',
		textBtn: 'Зарегистрироваться',
		type: 'submit',
		titleHover: 'Нажмите, чтобы зарегистрироваться в сервисе.',
		classes: 'sign-up__btn'
	}
};

export { configChildrensForFormSignUpPage };
