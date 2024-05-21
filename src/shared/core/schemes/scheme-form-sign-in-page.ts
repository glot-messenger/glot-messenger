import type { ISchemeForForm } from './interafaces';

import {
	IS_REQUIRED,
	MIN,
	MAX,
	NUMBER_REQUIRED,
	SYMBOL_REQUIRED,
	UPPER_CASE_ELEMENT_REQUIRED
} from '../names-rules';

const schemeFormSignInPage: ISchemeForForm = {
	login: {
		[IS_REQUIRED]: {
			message: 'Поле вашего логина является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле вашего логина должно содержать не меньше 7 символов',
			value: 7
		},
		[MAX]: {
			message: 'Поле вашего логина может содержать максимально 42 символа',
			value: 42
		}
	},
	password: {
		[IS_REQUIRED]: {
			message: 'Поле вашего пароля является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле вашего пароля должно содержать не меньше 11 символов',
			value: 11
		},
		[NUMBER_REQUIRED]: {
			message: 'Поле вашего пароля должно содержать в себе хотя бы одну цифру'
		},
		[SYMBOL_REQUIRED]: {
			message: 'Поле вашего пароля должно содержать в себе хотя бы один символ: !?@#$%^&* (любой)'
		},
		[UPPER_CASE_ELEMENT_REQUIRED]: {
			message: 'Поле вашего пароля должно содержать хотя бы одну букву в верхнем регистре. Эта буква должна быть на латинице.'
		},
		[MAX]: {
			message: 'Поле вашего пароля может содержать максимально 42 символа',
			value: 42
		}
	}
};

export { schemeFormSignInPage };
