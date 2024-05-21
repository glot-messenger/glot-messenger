import type { ISchemeForForm } from './interafaces';

import {
	IS_REQUIRED,
	MIN,
	MAX,
	IS_EMAIL
} from '../names-rules';

const schemeFormRecoveryAccountPage: ISchemeForForm = {
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

export { schemeFormRecoveryAccountPage };
