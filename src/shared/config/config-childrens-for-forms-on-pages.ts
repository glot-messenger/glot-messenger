import type {
	IManuallyTransmittedDataForFieldsFormSignInPage,
	IManuallyTransmittedDataForFieldsFormSignUpPage,
	IManuallyTransmittedDataForFieldsFormRecoveryAccountPage
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
		titleHover: 'Нажмите, чтобы отправить заполненные данные и войти в приложение.'
	}
};

const configChildrensForFormSignUpPage: IManuallyTransmittedDataForFieldsFormSignUpPage = {
	email: {
		titleHover: 'Поле для заполнения почты',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Укажите свою почту',
		label: 'Почта:',
		type: 'text',
		name: 'email',
		nameIcon: 'email.svg',
		alt: 'Иконка почтового конверта.',
		description: 'Пример корректной почты: "test-test@yandex.ru". Почта также используется при восстановлении пароля.'
	},
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
		titleHover: 'Поле для ввода секретной фразы.',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Придумайте секретную фразу, которую не сможет разгадать даже AI',
		label: 'Секретная фраза:',
		type: 'text',
		name: 'secretPhrase',
		nameIcon: 'secret-phrase.svg',
		alt: 'Щит символизирующий секретность, с галочкой по середине.',
		description: 'В случае, если вы забудете пароль, это поле вам поможет. Пробелы учитываются! Пример: "Жмых затравил неподатливую змею!!!"'
	},
	button: {
		typeElement: 'button',
		textBtn: 'Зарегистрироваться',
		type: 'submit',
		titleHover: 'Нажмите, чтобы зарегистрироваться в сервисе.'
	}
};

const configChildrensForFormRecoveryAccountPage: IManuallyTransmittedDataForFieldsFormRecoveryAccountPage = {
	email: {
		titleHover: 'Поле для заполнения почты',
		typeElement: 'textField',
		isRequired: true,
		placeholder: 'Укажите свою почту',
		label: 'Почта:',
		type: 'text',
		name: 'email',
		nameIcon: 'email.svg',
		alt: 'Иконка почтового конверта.',
		description: 'Используем эти данные для сверки. Пример корректной почты: "test-test@yandex.ru"'
	},
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
		titleHover: 'Нажмите, чтобы восстановить пароль от своей учетной записи.'
	}
};

export {
	configChildrensForFormSignInPage,
	configChildrensForFormSignUpPage,
	configChildrensForFormRecoveryAccountPage
};
