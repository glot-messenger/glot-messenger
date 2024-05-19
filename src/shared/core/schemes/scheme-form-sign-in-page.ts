import type { ISchemeFormSignInPage } from './interafaces';
import { IS_REQUIRED, MIN, MAX, NUMBER_REQUIRED, SYMBOL_REQUIRED, UPPER_CASE_ELEMENT_REQUIRED } from '../names-rules';

const schemeFormSignInPage: ISchemeFormSignInPage = {
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
	}
};

export { schemeFormSignInPage };
