import type { ISchemeForForm } from './interafaces';

import {
	IS_REQUIRED,
	MIN,
	MAX,
	NUMBER_REQUIRED,
	SYMBOL_REQUIRED,
	UPPER_CASE_ELEMENT_REQUIRED,
	IS_IDENTICAL,
	IS_EMAIL
} from '../names-rules';

const schemeFormSignUpPage: ISchemeForForm = {
	email: {
		[IS_REQUIRED]: {
			message: 'Поле почта является обязательным к заполнению'
		},
		[IS_EMAIL]: {
			message: 'Поле почты, должно являться почтой, а не чем-то другим.'
		}
	},
	login: {
		[IS_REQUIRED]: {
			message: 'Поле логин является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле логин должно содержать не меньше 7 символов',
			value: 7
		},
		[MAX]: {
			message: 'Поле логин может содержать максимально 42 символа',
			value: 42
		}
	},
	userName: {
		[IS_REQUIRED]: {
			message: 'Поле имени пользователя является обязательным к заполнению'
		},
		[MAX]: {
			message: 'Поле имени пользователя может содержать максимально 72 символа',
			value: 72
		}
	},
	password: {
		[IS_REQUIRED]: {
			message: 'Поле пароль является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле пароль должно содержать не меньше 11 символов',
			value: 11
		},
		[NUMBER_REQUIRED]: {
			message: 'Поле пароль должно содержать в себе хотя бы одну цифру'
		},
		[SYMBOL_REQUIRED]: {
			message: 'Поле пароль должно содержать в себе хотя бы один символ: !?@#$%^&* (любой)'
		},
		[UPPER_CASE_ELEMENT_REQUIRED]: {
			message: 'Поле пароль должно содержать хотя бы одну букву в верхнем регистре. Эта буква должна быть на латинице.'
		},
		[MAX]: {
			message: 'Поле пароль может содержать максимально 42 символа',
			value: 42
		}
	},
	repeatPassword: {
		[IS_REQUIRED]: {
			message: 'Поле повторного ввода пароля является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле повторного ввода пароля должно содержать не меньше 11 символов',
			value: 11
		},
		[NUMBER_REQUIRED]: {
			message: 'Поле повторного ввода пароля должно содержать в себе хотя бы одну цифру'
		},
		[SYMBOL_REQUIRED]: {
			message: 'Поле повторного ввода пароля должно содержать в себе хотя бы один символ: !?@#$%^&* (любой)'
		},
		[UPPER_CASE_ELEMENT_REQUIRED]: {
			message: 'Поле повторного ввода пароля должно содержать хотя бы одну букву в верхнем регистре. Эта буква должна быть на латинице.'
		},
		[MAX]: {
			message: 'Поле повторного ввода пароля может содержать максимально 42 символа',
			value: 42
		},
		[IS_IDENTICAL]: {
			message: 'Поле повторного ввода пароля должно совпадать с полем пароль',
			targetValue: 'password'
		}
	},
	secretPhrase: {
		[IS_REQUIRED]: {
			message: 'Поле для ввода секретной фразы является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле для ввода секретной фразы должно содержать не меньше 31 символа',
			value: 31
		},
		[MAX]: {
			message: 'Поле для ввода секретной фразы может содержать максимально 72 символа',
			value: 72
		}
	}
};

export { schemeFormSignUpPage };
